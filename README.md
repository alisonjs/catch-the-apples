# Catch the Apples

> Olá, você foi recém contratado para trabalhar numa empresa de desenvolvimento de jogos e você terá que dar continuidade ao antigo trabalho do outro desenvolvedor no jogo Catch the Apples. 

> Algumas funções já foram definidas, assim como toda estrutura inicial do jogo, porém ele está com alguns problemas

> Sua tarefa será corrigir e implementar o que estiver faltando no jogo, tudo isso antes do seu lançamento em duas semanas

## O Jogo
Catch the apples foi desenvolvido em JavaScript utilizando HTML e uma tecnologia chama canvas.

O jogo consistem em um jogador que precisa coletar maçãs e desviar dos monstros, a cada maçã coletada o jogador ganha um ponto e se colidir com um monstro a pontuação é zerada e o jogo reiniciado.

## Issues

[ ] Alterar título do Jogo para "Catch the Apples".

> O antigo desenvolvedor não chegou a alterar o nome do jogo e está exebindo o título "Meu Jogo". Altere o título para <b>"Catch the Apples"</b>. Procure pelo componente title no arquivo <code>index.html</code>

[ ] Corrigir movimentação do personagem
> A movimentação do personagem está ocorrendo, porém de forma aleatória. o Comportamento esprado é:
>
> tecla <b>W</b>: Movimenta o personagem para <b>cima</b>
>
> tecla <b>S</b>: Movimenta o personagem para <b>baixo</b>
>
> tecla <b>A</b>: Movimenta o personafem para a <b>esquerda</b>
>
> tecla <b>D</b>: Movimenta o personagem para a <b>direita</b>

[ ] Adiconar monstros
> Monstros serão quadrados roxos que ao colidirem com o jogador o jogador perde a partida e sua pontuação é zerada. Aparentemente já foram desenvolvidos, porém não estão aparecendo em tela. Procure pelo arquivo monstro.js


[ ] Atualizar texto da pontuação do jogo
> Devido a algum bug o texto da pontuação está fixo e deve ser alterado para refletir a quantidade de maçãs coletadas pelo jogador


[ ] Adicionar histórico de pontos na partida
> A cada fim de jogo será adicionado em uma lista a pontuação final do jogador. E será exibida a pontuação das últimas 5 partidas.


[ ] Adicionar tela de início com opções "Fácil", "Médio" e "Difícil"
> Para cada modo de jogo serão exibidas quantidades diferentes de monstros e a velocidade de sua movimentação também pode mudar. \
> Fácil: 3x Monstros e Velocidade 2 \
\
> Médio: 4x Monstros e Velocidade 3 \
\
> Difícil: 5x Monstros e Velocidade 3 \
\
> Exibir histórico de pontuação distinto para cada modo de jogo