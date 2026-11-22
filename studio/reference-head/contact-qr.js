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
const glyphs = '#xo+*';
const modules = matrix.flatMap((row, y) => Array.from(row, (value, x) => value === '1'
  ? [(x + quietZone + .5) * cell, (y + quietZone + .5) * cell]
  : null).filter(Boolean));
const glyphSize = 5.25;
const offsets = [[-2, -2], [2, -2], [-2, 2], [2, 2]];
const qrGlyphs = modules.flatMap(([x, y], index) => offsets.map(([dx, dy], corner) => [
  x + dx, y + dy, glyphs[(index + corner * 3) % glyphs.length],
]));

function setGlyphStyle(context, fontSize) {
  context.fillStyle = '#edeee5';
  context.font = `700 ${fontSize}px monospace`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
}

export function animateContactQr(canvas, dialog, reducedMotion) {
  const context = canvas.getContext('2d');
  if (!context) return;
  canvas.width = canvas.height = size;
  const toggle = canvas.nextElementSibling;
  function paint(scan = false) {
    context.clearRect(0, 0, size, size);
    if (scan) {
      context.fillStyle = '#edeee5';
      context.fillRect(0, 0, size, size);
      context.fillStyle = '#1726a5';
      for (const [x, y] of modules) context.fillRect(x - cell / 2, y - cell / 2, cell, cell);
    } else {
      setGlyphStyle(context, glyphSize);
      for (const [x, y, glyph] of qrGlyphs) context.fillText(glyph, x, y, cell / 2);
    }
  }
  paint();
  let scan = false;
  toggle.addEventListener('click', () => {
    scan = !scan;
    paint(scan);
    toggle.textContent = scan ? 'Вернуть ASCII' : 'Сканировать QR';
  });
  if (reducedMotion) return;

  const flight = document.createElement('canvas');
  flight.className = 'contact-qr-flight';
  flight.setAttribute('aria-hidden', 'true');
  const brush = flight.getContext('2d');
  if (!brush) return;
  document.body.append(flight);
  canvas.style.opacity = '0';
  const particles = qrGlyphs.map(([x, y, glyph], index) => {
    const alongEdge = Math.random() * 1.16 - .08;
    const beyondEdge = .025 + Math.random() * .16;
    const origins = [[alongEdge, -beyondEdge], [1 + beyondEdge, alongEdge],
      [alongEdge, 1 + beyondEdge], [-beyondEdge, alongEdge]];
    const [fromX, fromY] = origins[index % origins.length];
    return [x, y, fromX, fromY, Math.random() * .26, glyph];
  });
  const start = performance.now();
  function draw(now) {
    const progress = Math.min(1, (now - start) / 780);
    if (scan || dialog.hidden || !canvas.isConnected || progress === 1) {
      flight.remove();
      canvas.style.opacity = '';
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
    setGlyphStyle(brush, glyphSize * scale);
    for (const [x, y, fromX, fromY, delay, glyph] of particles) {
      const t = Math.max(0, (progress - delay) / (1 - delay));
      const remaining = (1 - t) ** 3;
      const targetX = rect.left + x * scale;
      const targetY = rect.top + y * scale;
      const currentX = targetX + (fromX * width - targetX) * remaining;
      const currentY = targetY + (fromY * height - targetY) * remaining;
      brush.globalAlpha = Math.min(1, t * 6);
      brush.fillText(glyph, currentX, currentY, cell / 2 * scale);
    }
    requestAnimationFrame(draw);
  }
  draw(start);
}
