let canvas = /** @type {HTMLCanvasElement} */ (
  document.getElementById("canvas")
);
let c = canvas.getContext("2d");

c.beginPath();
c.moveTo(0, 0);
c.lineTo(100, 0);
c.lineTo(100, 45);
/* c.bezierCurveTo(110, 20, 130, 45, 125, 50);
c.bezierCurveTo(125, 50, 120, 80, 100, 55); */

drawPuzzleSide(c, 100, 100, 120, "top", 1);
drawPuzzleSide(c, 250, 100, 120, "right", -1);
drawPuzzleSide(c, 400, 100, 120, "bottom", 1);
drawPuzzleSide(c, 550, 100, 120, "left", -1);
c.stroke();
c.closePath();

function drawPuzzleSide(
  ctx,
  x,
  y,
  size,
  side = "top",
  type = 1, // 1 = externo | -1 = interno
) {
  const tabSize = size * 0.28;
  const neck = size * 0.18;

  ctx.beginPath();

  // =========================
  // TOPO
  // =========================
  if (side === "top") {
    ctx.moveTo(x, y);

    ctx.lineTo(x + size * 0.35, y);

    ctx.bezierCurveTo(
      x + size * 0.35,
      y,
      x + size * 0.35,
      y - tabSize * type,
      x + size * 0.5,
      y - tabSize * type,
    );

    ctx.bezierCurveTo(
      x + size * 0.65,
      y - tabSize * type,
      x + size * 0.65,
      y,
      x + size,
      y,
    );
  }

  // =========================
  // DIREITA
  // =========================
  if (side === "right") {
    ctx.moveTo(x, y);

    ctx.lineTo(x, y + size * 0.35);

    ctx.bezierCurveTo(
      x,
      y + size * 0.35,
      x + tabSize * type,
      y + size * 0.35,
      x + tabSize * type,
      y + size * 0.5,
    );

    ctx.bezierCurveTo(
      x + tabSize * type,
      y + size * 0.65,
      x,
      y + size * 0.65,
      x,
      y + size,
    );
  }

  // =========================
  // BAIXO
  // =========================
  if (side === "bottom") {
    ctx.moveTo(x, y);

    ctx.lineTo(x + size * 0.35, y);

    ctx.bezierCurveTo(
      x + size * 0.35,
      y,
      x + size * 0.35,
      y + tabSize * type,
      x + size * 0.5,
      y + tabSize * type,
    );

    ctx.bezierCurveTo(
      x + size * 0.65,
      y + tabSize * type,
      x + size * 0.65,
      y,
      x + size,
      y,
    );
  }

  // =========================
  // ESQUERDA
  // =========================
  if (side === "left") {
    ctx.moveTo(x, y);

    ctx.lineTo(x, y + size * 0.35);

    ctx.bezierCurveTo(
      x,
      y + size * 0.35,
      x - tabSize * type,
      y + size * 0.35,
      x - tabSize * type,
      y + size * 0.5,
    );

    ctx.bezierCurveTo(
      x - tabSize * type,
      y + size * 0.65,
      x,
      y + size * 0.65,
      x,
      y + size,
    );
  }

  ctx.stroke();
}
