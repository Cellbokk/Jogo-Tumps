/* onde o botão aparece 1+ */
let contador = 0;
let ganhoPorSegundo = 0;
let multiplicadorClique = 1;
let custoCursor = 50;
let intervaloAutoClick;

const contadorEl = document.querySelector('.Contador');
const botao = document.querySelector('.Aperta');

botao.addEventListener('click', (e) => {
    contador += multiplicadorClique;
    contadorEl.textContent = `Quantidade de TumpsCoins: ${contador}`;

    // Criar o "+1"
    const plusOne = document.createElement('span');
    plusOne.textContent = `+${multiplicadorClique}`;
    plusOne.classList.add('floating-text');

    // Posição do botão
    const x = e.clientX;
    const y = e.clientY;

    // Posicionar o elemento na tela
    plusOne.style.left = `${x}px`;
    plusOne.style.top = `${y}px`;

    // Adicionar no body
    document.body.appendChild(plusOne);

    // Remover depois da animação
    setTimeout(() => {
        plusOne.remove();
    }, 800);
});
