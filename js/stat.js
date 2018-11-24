'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var NAME_Y = 250;
var GAP = 40;
var FONT_GAP = 50;
var TEXT_HEIGHT = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 130;
var TIME_GAP = 30;
var COLOR_STEP = 1;
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
var getMaxElement = function (times) {
  var maxElement = times[0];
  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxElement) {
      maxElement = times[i];
    }
  }
  return maxElement;
};
window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);
  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    var player = players[i];
    var time = times[i];
    var BarX = CLOUD_X + FONT_GAP + (GAP + BAR_WIDTH) * i;
    var BarY = BAR_HEIGHT * time / maxTime;
    ctx.fillStyle = '#000';
    ctx.fillText(player, BarX, NAME_Y);
    ctx.fillText(Math.round(time), BarX, NAME_Y - BarY - TIME_GAP);
    if (player === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      COLOR_STEP += i;
      ctx.fillStyle = 'rgba(0, 0, 255, 0.' + COLOR_STEP + ')';
    }
    ctx.fillRect(BarX, NAME_Y - TEXT_HEIGHT, BAR_WIDTH, BarY * -1);
  }
};
