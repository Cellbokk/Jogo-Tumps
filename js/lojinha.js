
/* Comprar curso diferente */
const btnUpgradeCursor = document.getElementById('comprar-cursor');
btnUpgradeCursor.addEventListener('click', (e) => {
    if (contador >= 50) {
        contador -= 50;
        multiplicadorClique += 1;
        custoCursor = Math.floor(custoCursor * 1.5);
        contadorEl.textContent = `Quantidade de TumpsCoins: ${contador}`;
        btnUpgradeCursor.textContent = `Upgrade do Cursor (+1 por clique) - ${custoCursor} TumpsCoins`;
        document.body.classList.add('upgrade-cursor');
        btnUpgradeCursor.disabled = true;
        btnUpgradeCursor.textContent = "Cursor Aprimorado!";

        // 🎉 CHAMADA DO CONFETE
        soltarConfete(e.clientX, e.clientY);
    } else {
        alert("Você precisa de 50 TumpsCoins para esse upgrade!");
    }
});


/* Confete da lojinha */
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

// Verifica se o botão existe (evita erro)
const btnAutoClicker = document.getElementById('comprar-auto');

if (btnAutoClicker) {
    btnAutoClicker.addEventListener('click', (e) => {
        const preco = 50;

        if (contador >= preco) {
            contador -= preco;
            contadorEl.textContent = `Quantidade de TumpsCoins: ${contador}`;

            ganhoPorSegundo += 1;

            btnAutoClicker.textContent = `Auto-Clicker (+${ganhoPorSegundo}/s)`;

            // Se já existe um intervalo, limpa ele para evitar múltiplos
            if (intervaloAutoClick !== null) {
                clearInterval(intervaloAutoClick);
            }

            // Cria um novo intervalo com o novo ganho
            intervaloAutoClick = setInterval(() => {
                contador += ganhoPorSegundo;
                contadorEl.textContent = `Quantidade de TumpsCoins: ${contador}`;
            }, 1000);
            soltarConfete(e.clientX, e.clientY);
        } else {
            alert("Você precisa de 50 TumpsCoins para esse upgrade!");
        }
    });
}