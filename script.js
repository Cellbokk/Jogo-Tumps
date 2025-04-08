let contador = 0;
const contadorEl = document.querySelector('.Contador');
const botao = document.querySelector('.Aperta');

botao.addEventListener('click', (e) => {
    contador++;
    contadorEl.textContent = `Quantidade de TumpsCoins: ${contador}`;

    // Criar o "+1"
    const plusOne = document.createElement('span');
    plusOne.textContent = '+1';
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

const btnUpgradeCursor = document.getElementById('comprar-cursor');

btnUpgradeCursor.addEventListener('click', () => {
    if (contador >= 50) {
        contador -= 50;
        contadorEl.textContent = `Quantidade de TumpsCoins: ${contador}`;

        // Aplica o novo cursor
        document.body.classList.add('upgrade-cursor');

        // Desativa o botão e muda o texto
        btnUpgradeCursor.disabled = true;
        btnUpgradeCursor.textContent = "Cursor Aprimorado!";
    } else {
        alert("Você precisa de 50 TumpsCoins para esse upgrade!");
    }
});

particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.3
      },
      size: {
        value: 3
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: false
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 1
          }
        }
      }
    },
    retina_detect: true
  });
  