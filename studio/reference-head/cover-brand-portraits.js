export function tracePortrait(ctx) {
  ctx.beginPath();
  ctx.moveTo(9.2, 24);
  ctx.lineTo(11.8, 20.7);
  ctx.bezierCurveTo(9.5, 20.7, 7.8, 19.8, 7.8, 18.4);
  ctx.lineTo(8.1, 17.2);
  ctx.lineTo(6.8, 16.1);
  ctx.lineTo(8, 15.2);
  ctx.lineTo(7.5, 14.1);
  ctx.lineTo(5.6, 13.5);
  ctx.quadraticCurveTo(4.9, 13.2, 5.8, 12.2);
  ctx.lineTo(8.4, 8.9);
  ctx.bezierCurveTo(8.5, 5.6, 11.6, 2.2, 16.4, 2.2);
  ctx.bezierCurveTo(22.1, 2.2, 25.2, 5.7, 25.2, 10.1);
  ctx.bezierCurveTo(25.2, 14.6, 22.6, 16.3, 20.7, 18.4);
  ctx.lineTo(20.9, 21.1);
  ctx.lineTo(24.4, 24);
  ctx.closePath();
}

export function drawPortrait(ctx) {
  tracePortrait(ctx);
  ctx.moveTo(9.1, 9.7);
  ctx.quadraticCurveTo(10.7, 9.2, 12.4, 10.5);
  ctx.quadraticCurveTo(10.6, 10.6, 9.1, 10.9);
  ctx.closePath();
  ctx.fill('evenodd');
}

function segment(ctx, points) {
  ctx.beginPath();
  ctx.moveTo(...points[0]);
  for (const point of points.slice(1)) ctx.lineTo(...point);
  ctx.stroke();
}

export const portraitMarks = [
  { id: 'bust-solid', name: 'Силуэт', draw: drawPortrait },
  { id: 'bust-frame', name: 'Портрет в кадре', draw(ctx) {
    ctx.save();
    ctx.translate(4.2, 2.9);
    ctx.scale(.78, .78);
    drawPortrait(ctx);
    ctx.restore();
    ctx.lineWidth = 1.1;
    segment(ctx, [[4.5, 8], [4.5, 2.5], [11, 2.5]]);
    segment(ctx, [[27.5, 8], [27.5, 2.5], [21, 2.5]]);
    segment(ctx, [[4.5, 18], [4.5, 23.5], [11, 23.5]]);
    segment(ctx, [[27.5, 18], [27.5, 23.5], [21, 23.5]]);
  } },
  { id: 'bust-scan', name: 'Портрет из полос', draw(ctx) {
    ctx.save();
    tracePortrait(ctx);
    ctx.clip();
    for (const [y, height] of [[2.2, 1.35], [5.1, 1.55], [8.2, 1.9], [11.7, 2.3], [15.5, 1.7], [18.6, 1.8], [21.9, 2.1]]) {
      ctx.fillRect(4, y, 24, height);
    }
    ctx.restore();
  } },
  { id: 'bust-dissolve', name: 'Портрет в движении', width: 38, draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(1, 0);
    ctx.lineTo(21.8, 0);
    ctx.lineTo(21.8, 7.2);
    ctx.lineTo(18.8, 7.2);
    ctx.lineTo(18.8, 12.4);
    ctx.lineTo(21.1, 12.4);
    ctx.lineTo(21.1, 16.1);
    ctx.lineTo(18, 16.1);
    ctx.lineTo(18, 20.7);
    ctx.lineTo(21.2, 20.7);
    ctx.lineTo(21.2, 26);
    ctx.lineTo(1, 26);
    ctx.closePath();
    ctx.clip();
    drawPortrait(ctx);
    ctx.restore();
    ctx.globalAlpha = .9;
    ctx.fillRect(23.7, 3.5, 2.2, 2.2);
    ctx.fillRect(21.1, 8.5, 2.7, 2.7);
    ctx.fillRect(26.2, 11.8, 2.3, 2.3);
    ctx.fillRect(21.5, 17.5, 2.4, 2.4);
    ctx.fillRect(25.5, 21, 1.8, 1.8);
    ctx.globalAlpha = .55;
    ctx.fillRect(29, 6.8, 1.6, 1.6);
    ctx.fillRect(32, 12.3, 1.4, 1.4);
    ctx.fillRect(35.1, 13.3, 1, 1);
    ctx.fillRect(28.1, 16.9, 1.5, 1.5);
    ctx.globalAlpha = 1;
  } },
  { id: 'bust-outline', name: 'Контур и отражение', draw(ctx) {
    ctx.lineWidth = 1.1;
    tracePortrait(ctx);
    ctx.stroke();
    ctx.globalAlpha = .57;
    ctx.beginPath();
    ctx.moveTo(22.2, 2.5);
    ctx.bezierCurveTo(27.3, 3.8, 29.4, 8.7, 28, 13);
    ctx.bezierCurveTo(27.2, 15.3, 25.8, 17.1, 24.5, 18.4);
    ctx.lineTo(24.8, 20.7);
    ctx.lineTo(28.2, 24);
    ctx.stroke();
    ctx.globalAlpha = 1;
  } },
  { id: 'bust-shift', name: 'Сдвиг силуэта', draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(32, 0);
    ctx.lineTo(32, 10.7);
    ctx.lineTo(0, 17);
    ctx.closePath();
    ctx.clip();
    ctx.translate(2.6, -.7);
    drawPortrait(ctx);
    ctx.restore();
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, 19.1);
    ctx.lineTo(32, 12.8);
    ctx.lineTo(32, 26);
    ctx.lineTo(0, 26);
    ctx.closePath();
    ctx.clip();
    drawPortrait(ctx);
    ctx.restore();
  } },
];
