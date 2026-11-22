function polygon(ctx, points) {
  ctx.beginPath();
  ctx.moveTo(...points[0]);
  for (const point of points.slice(1)) ctx.lineTo(...point);
  ctx.closePath();
  ctx.fill();
}

function particles(ctx, points) {
  for (const [x, y, radius] of points) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

export const motionMarks = [
  {
    id: 'velocity-pulse', name: 'Импульс', width: 43,
    draw(ctx) {
      polygon(ctx, [[21, 4], [40, 13], [21, 22], [25, 13]]);
      polygon(ctx, [[10, 9], [23, 9], [25, 13], [8, 13]]);
      polygon(ctx, [[14, 16], [24, 16], [22.5, 19], [12, 19]]);
      ctx.fillRect(3, 10.5, 3, 2.5);
      ctx.fillRect(6, 16.5, 2.5, 2.5);
    },
  },
  {
    id: 'velocity-orbit', name: 'Орбита частиц', width: 40,
    draw(ctx) {
      particles(ctx, [
        [32.4, 7.2, 2.75], [28.3, 5.2, 1.5], [24.3, 4.6, 1.3], [20.4, 5.1, 1.15],
        [16.8, 6.4, 1], [13.4, 8.2, .85], [10.3, 10.6, .85], [7.2, 13.9, .95],
        [6.7, 17.4, 1.05], [8.7, 20.3, 1.2], [12.7, 21.7, 1.35], [17.4, 21.9, 1.5],
        [22.1, 20.7, 1.65], [27.2, 18.2, 1.95], [31.6, 14.8, 2.2],
      ]);
    },
  },
  {
    id: 'velocity-trajectory', name: 'Траектория', width: 46,
    draw(ctx) {
      ctx.beginPath();
      ctx.moveTo(11, 17);
      ctx.bezierCurveTo(20, 13, 29, 4, 43, 4.7);
      ctx.bezierCurveTo(36, 9, 35, 13.3, 30, 16.8);
      ctx.bezierCurveTo(25.5, 20, 19, 20.2, 11, 17);
      ctx.closePath();
      ctx.fill();
      polygon(ctx, [[10, 19.7], [19.2, 21.5], [13.2, 22.6], [7.4, 21.6]]);
      particles(ctx, [[5.5, 18.4, 1.05], [2.5, 20.8, .7]]);
    },
  },
  {
    id: 'velocity-stream', name: 'Поток', width: 43,
    draw(ctx) {
      polygon(ctx, [[16, 4.3], [39, 4.3], [35, 8], [12, 8]]);
      polygon(ctx, [[14, 10.7], [35, 10.7], [31, 14.4], [10, 14.4]]);
      polygon(ctx, [[10, 17.2], [29, 17.2], [25, 20.9], [6, 20.9]]);
      polygon(ctx, [[10, 4.5], [12.5, 4.5], [8.6, 8], [6.1, 8]]);
      polygon(ctx, [[7, 10.8], [9.5, 10.8], [5.6, 14.4], [3.1, 14.4]]);
      polygon(ctx, [[4.7, 17.2], [2.1, 19.7], [1.8, 17.2]]);
    },
  },
  {
    id: 'velocity-shards', name: 'Осколки', width: 42,
    draw(ctx) {
      polygon(ctx, [[36.9, 3.2], [40, 12.3], [22.8, 17.1], [26.3, 8.8]]);
      polygon(ctx, [[28.8, 15.5], [24.5, 22.7], [17.2, 22], [21.1, 17.4]]);
      polygon(ctx, [[16.8, 7.3], [23.9, 7.3], [18.7, 12.3], [14, 12.3]]);
      polygon(ctx, [[10.6, 14.1], [17.7, 14.1], [14.5, 17.8], [7.4, 17.8]]);
      particles(ctx, [[12.4, 8.1, 1], [5.7, 13.1, 1.05], [3.4, 18.3, .85], [10.8, 21.9, .85]]);
    },
  },
  {
    id: 'velocity-vortex', name: 'Вихрь', width: 38,
    draw(ctx) {
      ctx.beginPath();
      ctx.moveTo(10, 11.2);
      ctx.bezierCurveTo(10.8, 3.3, 25.4, 1.8, 33.6, 8);
      ctx.bezierCurveTo(23.2, 4.8, 16.5, 8.4, 16.3, 14.3);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(27.6, 14.7);
      ctx.bezierCurveTo(27.1, 22.6, 11.9, 24.5, 3.9, 18.6);
      ctx.bezierCurveTo(14.2, 21.4, 21, 17.8, 21, 11.7);
      ctx.closePath();
      ctx.fill();
      particles(ctx, [[5.5, 10.2, 1.1], [3.1, 13.7, .8], [32.6, 15.1, 1.1], [35.1, 12.2, .8]]);
    },
  },
];
