import {linkOutline} from './cover-brand.js';

export const studioAboutMarkup = `
  <article class="section-page studio-about">
    <div class="studio-about__hero">
      <header class="studio-about__copy">
        <p class="paas-hero__label">О студии</p>
        <h1 id="document-title">WWN IT Solutions</h1>
        <p class="studio-about__lead">Инженерная студия. Разрабатываем веб-сервисы, настраиваем инфраструктуру и автоматизируем выпуск обновлений.</p>
        <p class="studio-about__detail">Запускаем новые продукты и подключаемся к действующим, когда нужно наладить релизы, улучшить мониторинг или разобраться со сбоями. После запуска помогаем с эксплуатацией и развитием.</p>
        <button class="studio-about__contact section-glass" type="button" data-section="contact">Обсудить проект <span aria-hidden="true">→</span></button>
      </header>
      <canvas class="studio-about__mark" aria-hidden="true"></canvas>
    </div>
    <nav class="studio-about__links" aria-label="Подробнее о студии">
      <button type="button" data-section="services"><span><strong>Решения</strong><small>Разработка, инфраструктура и автоматизация</small></span><span aria-hidden="true">→</span></button>
      <button type="button" data-section="process"><span><strong>Как работаем</strong><small>От обсуждения задачи до поддержки</small></span><span aria-hidden="true">→</span></button>
      <button type="button" data-open-projects><span><strong>Проекты</strong><small>Задачи, решения и результаты</small></span><span aria-hidden="true">→</span></button>
    </nav>
  </article>`;

export function mountStudioMark(canvas, reducedMotion) {
  const context = canvas.getContext('2d');
  const stencil = document.createElement('canvas').getContext('2d');
  if (!context || !stencil) return;
  const stencilSize = 192;
  const stencilScale = stencilSize / 64;
  stencil.canvas.width = stencilSize;
  stencil.canvas.height = stencilSize;
  stencil.scale(stencilScale, stencilScale);
  stencil.lineWidth = 6.3;
  stencil.lineCap = 'round';
  stencil.lineJoin = 'round';
  stencil.stroke(new Path2D(linkOutline));
  const mask = stencil.getImageData(0, 0, stencilSize, stencilSize).data;
  const surface = ['x', '+', '#', 'x', '+'];
  const edge = [':', '·', '+'];

  const started = performance.now();
  let frame = 0, width = 0, height = 0, previous = -Infinity, visible = true;

  function schedule() {
    if (!frame && width && height && visible && !document.hidden) frame = requestAnimationFrame(draw);
  }

  function draw(now) {
    frame = 0;
    if (!reducedMotion && now - previous < 33) {
      schedule();
      return;
    }
    previous = now;
    const seconds = (now - started) / 1000;
    const yaw = .40 + (reducedMotion ? 0 : Math.sin(seconds * .86) * .13);
    const pitch = .26 + (reducedMotion ? 0 : Math.sin(seconds * .64) * .085);
    const cosYaw = Math.cos(yaw), sinYaw = Math.sin(yaw);
    const cosPitch = Math.cos(pitch), sinPitch = Math.sin(pitch);
    const scale = Math.min(width / 65, height / 48);
    const cell = Math.max(3.4, scale * .55);
    const centerX = width * .5 - 2 * scale;
    const centerY = height * .5 - 1.5 * scale;

    context.clearRect(0, 0, width, height);
    context.font = `600 ${cell * 1.25}px ui-monospace, monospace`;
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    context.fillStyle = '#edeee5';

    for (let row = 0; (row + .5) * cell < height; row++) {
      const py = (row + .5) * cell;
      const y = (py - centerY) / scale;
      if (Math.abs(y) > 25) continue;
      for (let col = 0; (col + .5) * cell < width; col++) {
        const px = (col + .5) * cell;
        const x = (px - centerX) / scale;
        if (Math.abs(x) > 35) continue;
        const grain = col * 7 + row * 11;
        for (let depth = 0; depth <= 8; depth++) {
          const localX = (x - sinYaw * depth) / cosYaw;
          const localY = (y + sinPitch * (sinYaw * localX - cosYaw * depth)) / cosPitch;
          const tx = Math.round((localX + 32) * stencilScale);
          const ty = Math.round((localY + 32) * stencilScale);
          if (tx < 0 || tx >= stencilSize || ty < 0 || ty >= stencilSize || mask[(ty * stencilSize + tx) * 4 + 3] < 128) continue;
          const pattern = depth ? edge : surface;
          context.globalAlpha = depth ? .39 + .26 * (1 - depth / 8) : .72 + .24 * ((grain % 9) / 8);
          context.fillText(pattern[grain % pattern.length], px, py);
          break;
        }
      }
    }
    context.globalAlpha = 1;
    if (!reducedMotion) schedule();
  }

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    if (!width || !height) return;
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    schedule();
  }

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    schedule();
  });
  visibilityObserver.observe(canvas);
  document.addEventListener('visibilitychange', schedule);
  resize();

  return () => {
    cancelAnimationFrame(frame);
    resizeObserver.disconnect();
    visibilityObserver.disconnect();
    document.removeEventListener('visibilitychange', schedule);
  };
}
