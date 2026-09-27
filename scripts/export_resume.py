#!/usr/bin/env python3
"""Export the website CV with selectable text, embedded fonts and live contacts.

Requires reportlab and a font directory containing Noto Sans and Rubik.
The RU/EN content is read directly from the same JSON as the website.
"""
import argparse
import json
from pathlib import Path
from xml.sax.saxutils import escape, quoteattr

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, KeepTogether,
    HRFlowable, Table, TableStyle, PageBreak,
)

INK = colors.HexColor('#202e39')
MUTED = colors.HexColor('#5b6b75')
ACCENT = colors.HexColor('#256b71')
RULE = colors.HexColor('#d9e2e4')
PAPER_TINT = colors.HexColor('#f0f5f5')
MARGIN = 42
WIDTH = A4[0] - MARGIN * 2


def clean(value):
    return escape(value.replace('—', '-').replace('–', '-').replace('\u2011', '-'))


def export(root, font_dir, output, locale='ru'):
    data = json.loads((root / ('src/lib/resume.en.json' if locale == 'en' else 'src/lib/resume.json')).read_text())
    for family, filename in [('CV', 'NotoSans-Regular.ttf'), ('CVBold', 'NotoSans-Bold.ttf'), ('Display', 'Rubik-Bold.ttf')]:
        pdfmetrics.registerFont(TTFont(family, str(font_dir / filename)))
    pdfmetrics.registerFontFamily('CV', normal='CV', bold='CVBold', italic='CV', boldItalic='CVBold')
    en = locale == 'en'
    labels = {
        'experience': 'EXPERIENCE' if en else 'ОПЫТ РАБОТЫ',
        'skills': 'EXPERTISE' if en else 'КОМПЕТЕНЦИИ',
        'education': 'EDUCATION' if en else 'ОБРАЗОВАНИЕ',
        'languages': 'LANGUAGES' if en else 'ЯЗЫКИ',
    }
    styles = {
        'body': ParagraphStyle('body', fontName='CV', fontSize=9.1, leading=12.7, textColor=INK, spaceAfter=3),
        'bullet': ParagraphStyle('bullet', fontName='CV', fontSize=9.1, leading=12.7, textColor=INK, leftIndent=9, firstLineIndent=-9, spaceAfter=3),
        'name': ParagraphStyle('name', fontName='Display', fontSize=30, leading=35, textColor=INK, spaceAfter=6),
        'headline': ParagraphStyle('headline', fontName='CV', fontSize=11.7, leading=16.5, textColor=ACCENT, spaceAfter=8),
        'meta': ParagraphStyle('meta', fontName='CV', fontSize=8, leading=11.5, textColor=MUTED, spaceAfter=4),
        'intro': ParagraphStyle('intro', fontName='CV', fontSize=9.3, leading=13.2, textColor=INK),
        'label': ParagraphStyle('label', fontName='CVBold', fontSize=8, leading=11, textColor=ACCENT, spaceAfter=8, keepWithNext=True),
        'company': ParagraphStyle('company', fontName='Display', fontSize=17, leading=22, textColor=INK),
        'dates': ParagraphStyle('dates', fontName='CV', fontSize=8, leading=11.5, textColor=MUTED, alignment=TA_RIGHT),
        'role': ParagraphStyle('role', fontName='CVBold', fontSize=9, leading=12.5, textColor=ACCENT, spaceAfter=5),
        'context': ParagraphStyle('context', fontName='CV', fontSize=8.8, leading=12.3, textColor=MUTED, spaceAfter=3),
        'subheading': ParagraphStyle('subheading', fontName='CVBold', fontSize=9.1, leading=12.7, textColor=INK, spaceBefore=6, spaceAfter=3, keepWithNext=True),
        'compact': ParagraphStyle('compact', fontName='CV', fontSize=8.3, leading=11.6, textColor=INK, spaceAfter=4),
        'compactHeading': ParagraphStyle('compactHeading', fontName='CVBold', fontSize=8.5, leading=11.8, textColor=INK, spaceBefore=5, spaceAfter=3, keepWithNext=True),
        'compactMeta': ParagraphStyle('compactMeta', fontName='CV', fontSize=7.7, leading=10.5, textColor=MUTED, spaceAfter=4),
    }

    def p(text, style='body'):
        return Paragraph(clean(text), styles[style])

    def rule(before=8, after=10):
        return HRFlowable(width='100%', thickness=.6, color=RULE, spaceBefore=before, spaceAfter=after)

    def job_block(job):
        heading = Table([[p(job['company'], 'company'), p(job['dates'], 'dates')]], colWidths=[WIDTH * .48, WIDTH * .52])
        heading.setStyle(TableStyle([
            ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
            ('LEFTPADDING', (0, 0), (-1, -1), 0), ('RIGHTPADDING', (0, 0), (-1, -1), 0),
            ('TOPPADDING', (0, 0), (-1, -1), 0), ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ]))
        first = job['sections'][0]
        # Keep the employer, role, context and first result together.
        blocks = [KeepTogether([
            heading, p(job['role'], 'role'), p(job['context'], 'context'),
            p(first['title'], 'subheading'), p('• ' + first['items'][0], 'bullet'),
        ])]
        blocks.extend(p('• ' + item, 'bullet') for item in first['items'][1:])
        for section in job['sections'][1:]:
            blocks.append(p(section['title'], 'subheading'))
            blocks.extend(p('• ' + item, 'bullet') for item in section['items'])
        return blocks

    def frame_page(canvas, doc):
        canvas.saveState()
        canvas.setFillColor(ACCENT)
        canvas.rect(MARGIN, A4[1] - 24, 28, 3, fill=1, stroke=0)
        canvas.setFont('CV', 7.5)
        canvas.setFillColor(MUTED)
        canvas.drawRightString(A4[0] - MARGIN, A4[1] - 25, 'CURRICULUM VITAE  /  ' + locale.upper())
        if doc.page > 1:
            canvas.setFont('Display', 12)
            canvas.setFillColor(INK)
            canvas.drawString(MARGIN, A4[1] - 51, data['name'])
            canvas.setStrokeColor(RULE)
            canvas.setLineWidth(.6)
            canvas.line(MARGIN, A4[1] - 63, A4[0] - MARGIN, A4[1] - 63)
        canvas.setStrokeColor(RULE)
        canvas.setLineWidth(.6)
        canvas.line(MARGIN, 37, A4[0] - MARGIN, 37)
        canvas.setFillColor(MUTED)
        canvas.setFont('CV', 7)
        canvas.drawString(MARGIN, 23, 'Fullstack / Infrastructure / Management')
        canvas.drawRightString(A4[0] - MARGIN, 23, f'{doc.page:02d} / 02')
        canvas.restoreState()

    story = [p(data['fullName'], 'name'), p(data['headline'], 'headline'),
             p(data['location'] + '  ·  ' + data['format'], 'meta')]
    contacts = ' &nbsp;&nbsp; / &nbsp;&nbsp; '.join(
        f'<link href={quoteattr(c["href"])} color="#256b71">{clean(c["label"])}</link>' for c in data['contacts'])
    story.extend([Paragraph(contacts, styles['meta']), Spacer(1, 7)])
    intro = Table([[p(data['summary'], 'intro')]], colWidths=[WIDTH])
    intro.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), PAPER_TINT),
        ('LINEBEFORE', (0, 0), (-1, -1), 2, ACCENT),
        ('LEFTPADDING', (0, 0), (-1, -1), 12), ('RIGHTPADDING', (0, 0), (-1, -1), 12),
        ('TOPPADDING', (0, 0), (-1, -1), 9), ('BOTTOMPADDING', (0, 0), (-1, -1), 9),
    ]))
    story.extend([intro, Spacer(1, 16), p(labels['experience'], 'label')])
    for job in data['jobs'][:2]:
        if job is not data['jobs'][0]:
            story.append(rule(10, 10))
        story.extend(job_block(job))
    story.extend([PageBreak(), p(labels['experience'], 'label')])
    for job in data['jobs'][2:]:
        story.extend(job_block(job))
    story.extend([rule(12, 12)])

    skills = [p(labels['skills'], 'label')]
    for skill in data['skills']:
        skills.extend([p(skill['label'], 'compactHeading'), p(skill['text'], 'compact')])
    skills.extend([Spacer(1, 7), p(labels['languages'], 'label'), p(data['languages'], 'compact')])
    education = [p(labels['education'], 'label')]
    for item in data['education']:
        education.extend([p(item['title'], 'compactHeading'), p(item['dates'], 'compactMeta'),
                          p(item['institution'], 'compact')])
        if item['detail']:
            education.append(p(item['detail'], 'compact'))
        education.append(Spacer(1, 5))
    bottom = Table([[skills, education]], colWidths=[WIDTH * .50, WIDTH * .50])
    bottom.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (0, 0), 0), ('RIGHTPADDING', (0, 0), (0, 0), 17),
        ('LEFTPADDING', (1, 0), (1, 0), 17), ('RIGHTPADDING', (1, 0), (1, 0), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0), ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
        ('LINEBEFORE', (1, 0), (1, 0), .6, RULE),
    ]))
    story.append(bottom)
    output.parent.mkdir(parents=True, exist_ok=True)
    doc = BaseDocTemplate(str(output), pagesize=A4, title=data['name'] + ' - CV',
                          author=data['fullName'], subject=data['headline'])
    first = Frame(MARGIN, 48, WIDTH, A4[1] - 94, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
    later = Frame(MARGIN, 48, WIDTH, A4[1] - 125, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
    doc.addPageTemplates([
        PageTemplate(id='first', frames=first, onPage=frame_page, autoNextPageTemplate='later'),
        PageTemplate(id='later', frames=later, onPage=frame_page),
    ])
    doc.build(story)
    if doc.page != 2:
        raise RuntimeError(f'Expected a two-page CV, got {doc.page} pages; review content and layout before publishing.')
    print(output)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--locale', choices=['ru', 'en'], default='ru')
    parser.add_argument('--font-dir', required=True, type=Path)
    parser.add_argument('--root', type=Path, default=Path(__file__).resolve().parents[1])
    parser.add_argument('--output', type=Path)
    args = parser.parse_args()
    export(args.root, args.font_dir, args.output or args.root / (
        'public/resume-ivan-velichko-en.pdf' if args.locale == 'en' else 'public/resume-ivan-velichko.pdf'), args.locale)
