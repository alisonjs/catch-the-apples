export default class Personagem {
    constructor(cor, largura, altura, x, y) {
        this.cor = cor;
        this.largura = largura;
        this.altura = altura;
        this.x = x;
        this.y = y;
        this.velocidade = 12
    }

    draw(ctx) {
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }

    moveUp(canvas) {
        if (this.y - this.velocidade > 0) {
            this.y -= this.velocidade;
        } else {
            this.y = 0;
        }
    }

    moveDown(canvas) {
        if (this.y + this.velocidade < canvas.height - this.altura) {
            this.y += this.velocidade;
        } else {
            this.y = canvas.height - this.altura;
        }
    }

    moveLeft(canvas) {
        if (this.x - this.velocidade > 0) {
            this.x -= this.velocidade;
        } else {
            this.x = 0;
        }
    }

    moveRight(canvas) {
        if (this.x + this.velocidade < canvas.width - this.largura) {
            this.x += this.velocidade;
        } else {
            this.x = canvas.width - this.largura;
        }
    }

}