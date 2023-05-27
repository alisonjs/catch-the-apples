export default class Monstro {
  constructor(canvas) {
    this.cor = "purple";
    this.largura = 50;
    this.altura = 50;
    this.x = Math.random() * (canvas.width - this.largura);
    this.y = Math.random() * (canvas.height - this.altura);
    this.movimentoVertical = Math.random() > 0.5 ? true : false;
    this.movimentoHorizontal = !this.movimentoVertical;
    this.velocidade = 2;
    this.canvas = canvas
  }

  draw(ctx) {
    ctx.fillStyle = this.cor;
    ctx.fillRect(this.x, this.y, this.largura, this.altura);
  }

  // Movimentar o monstro
  movimentar() {
    if (this.movimentoVertical) {
      this.y += this.velocidade;
      if (this.y <= 0 || this.y + this.altura >= this.canvas.height) {
        this.velocidade *= -1;
      }
    }

    if (this.movimentoHorizontal) {
      this.x += this.velocidade;
      if (this.x <= 0 || this.x + this.largura >= this.canvas.width) {
        this.velocidade *= -1;
      }
    }
  }
}
