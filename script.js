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

btnUpgradeCursor.addEventListener('click', (e) => {
    if (contador >= 50) {
        contador -= 50;
        contadorEl.textContent = `Quantidade de TumpsCoins: ${contador}`;

        document.body.classList.add('upgrade-cursor');
        btnUpgradeCursor.disabled = true;
        btnUpgradeCursor.textContent = "Cursor Aprimorado!";

        // 🎉 CHAMADA DO CONFETE
        soltarConfete(e.clientX, e.clientY);
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
  
  function soltarConfete(x, y) {
    const cores = ['#FD33A0', '#F7CFCA', '#ffffff', '#1B1A55'];

    for (let i = 0; i < 25; i++) {
        const confete = document.createElement('div');
        confete.classList.add('confete');
        confete.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];

        // Joga pra cima com ângulos aleatórios
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 100 + 50;
        const dx = Math.cos(angle) * speed;
        const dy = Math.sin(angle) * speed * -1; // sobe primeiro

        confete.style.setProperty('--dx', `${dx}px`);
        confete.style.setProperty('--dy', `${dy + 200}px`);

        confete.style.left = `${x}px`;
        confete.style.top = `${y}px`;

        document.body.appendChild(confete);

        setTimeout(() => {
            confete.remove();
        }, 1200);
    }
}


