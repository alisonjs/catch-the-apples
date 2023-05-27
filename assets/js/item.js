export default class Item {
  constructor(canvas) {
    this.cor = "green";
    this.largura = 20;
    this.altura = 20;
    this.x = Math.trunc(Math.random() * (canvas.width - this.largura));
    this.y = Math.trunc(Math.random() * (canvas.height - this.altura));
  }

  draw(ctx) {
    ctx.fillStyle = this.cor;
    ctx.fillRect(this.x, this.y, this.largura, this.altura);
  }
}