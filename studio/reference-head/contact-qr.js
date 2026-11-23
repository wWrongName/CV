export const telegramUrl = 'https://t.me/wr0ngn4m3';

// QR matrix generated from telegramUrl with Segno, without the quiet zone.
const matrix = `1111111011001110001111111
1000001011011000001000001
1011101010111110001011101
1011101001110101101011101
1011101010100110101011101
1000001001110110101000001
1111111010101010101111111
0000000001110110000000000
1001111111000001010010111
0111000111000001100011110
1001011011111001000011001
1001110000001001110101111
1110111101001001001000001
1010000001000011100010010
1100101000111111010011111
1010010010110001011101101
1011011010100111111110110
0000000010111011100010110
1111111011010010101010001
1000001011101101100010000
1011101011001101111110011
1011101011100011011000011
1011101000101010110011111
1000001001000000001110111
1111111011101111101001001`.split('\n');

const quietZone = 4;
const cell = 8;
const size = (matrix.length + quietZone * 2) * cell;
const glyphs = '#xO+*';
const glyphSize = 5.25;
const field = matrix.length + quietZone * 2;
const offsets = [[-2, -2], [2, -2], [-2, 2], [2, 2]];
const qrGlyphs = [];
const cornerRadius = 19;
const edgeFeather = 11;

function edgeOpacity(x, y) {
  const dx = Math.abs(x - size / 2) - size / 2 + cornerRadius;
  const dy = Math.abs(y - size / 2) - size / 2 + cornerRadius;
  const distance = Math.hypot(Math.max(0, dx), Math.max(0, dy)) +
    Math.min(0, Math.max(dx, dy)) - cornerRadius;
  const blend = Math.min(1, Math.max(0, -distance / edgeFeather));
  return blend * blend * (3 - 2 * blend);
}

for (let row = 0; row < field; row++) {
  for (let column = 0; column < field; column++) {
    // Blue modules are transparent holes in the ASCII field.
    if (matrix[row - quietZone]?.[column - quietZone] === '1') continue;
    const x = (column + .5) * cell;
    const y = (row + .5) * cell;
    offsets.forEach(([dx, dy], corner) => {
      const glyph = glyphs[(column + row * 3 + corner * 2) % glyphs.length];
      const glyphX = x + dx;
      const glyphY = y + dy;
      const opacity = edgeOpacity(glyphX, glyphY);
      if (opacity > 0) qrGlyphs.push([glyphX, glyphY, glyph, opacity]);
    });
  }
}

function setGlyphStyle(context, fontSize, ink) {
  context.fillStyle = ink;
  context.font = `700 ${fontSize}px monospace`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
}

export function animateContactQr(canvas, dialog, reducedMotion) {
  const context = canvas.getContext('2d');
  if (!context) return;
  const ratio = Math.min(Math.max(devicePixelRatio || 1, 1), 2);
  canvas.width = canvas.height = Math.round(size * ratio);
  context.scale(canvas.width / size, canvas.height / size);
  setGlyphStyle(context, glyphSize, '#edeee5');
  for (const [x, y, glyph, opacity] of qrGlyphs) {
    context.globalAlpha = opacity;
    context.fillText(glyph, x, y, cell / 2);
  }
  function settle() {
    canvas.parentElement?.classList.add('contact-qr--settled');
  }
  if (reducedMotion) {
    settle();
    return;
  }

  const flight = document.createElement('canvas');
  flight.className = 'contact-qr-flight';
  flight.setAttribute('aria-hidden', 'true');
  const brush = flight.getContext('2d');
  if (!brush) {
    settle();
    return;
  }
  document.body.append(flight);
  canvas.style.opacity = '0';
  const particles = qrGlyphs.map(([x, y, glyph, opacity], index) => {
    const alongEdge = Math.random() * 1.16 - .08;
    const beyondEdge = .025 + Math.random() * .16;
    const origins = [[alongEdge, -beyondEdge], [1 + beyondEdge, alongEdge],
      [alongEdge, 1 + beyondEdge], [-beyondEdge, alongEdge]];
    const [fromX, fromY] = origins[index % origins.length];
    return [x, y, fromX, fromY, Math.random() * .26, glyph, opacity];
  });
  const start = performance.now();
  function draw(now) {
    const progress = Math.min(1, (now - start) / 780);
    if (dialog.hidden || !canvas.isConnected || progress === 1) {
      flight.remove();
      canvas.style.opacity = '';
      if (progress === 1 && canvas.isConnected && !dialog.hidden) {
        settle();
        canvas.animate([{opacity: 0}, {opacity: 1}], {duration: 160, easing: 'ease-out'});
      }
      return;
    }
    const width = innerWidth, height = innerHeight;
    if (flight.width !== width || flight.height !== height) {
      flight.width = width;
      flight.height = height;
    }
    brush.clearRect(0, 0, width, height);
    const rect = canvas.getBoundingClientRect();
    const scale = rect.width / size;
    setGlyphStyle(brush, glyphSize * scale, '#edeee5');
    for (const [x, y, fromX, fromY, delay, glyph, opacity] of particles) {
      const t = Math.max(0, (progress - delay) / (1 - delay));
      const remaining = (1 - t) ** 3;
      const targetX = rect.left + x * scale;
      const targetY = rect.top + y * scale;
      const currentX = targetX + (fromX * width - targetX) * remaining;
      const currentY = targetY + (fromY * height - targetY) * remaining;
      brush.globalAlpha = Math.min(1, t * 6) * opacity;
      brush.fillText(glyph, currentX, currentY, cell / 2 * scale);
    }
    requestAnimationFrame(draw);
  }
  draw(start);
}
