const musica = new Audio("media/musica.mp3");

musica.loop = true;
musica.volume = 0.5;

document.body.addEventListener("click", () => {
    musica.play().catch(err => console.log(err));
}, { once: true });
