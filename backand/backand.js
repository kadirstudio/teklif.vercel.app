document.addEventListener('keydown', function(event) {
    if (event.key === "F12") {
        alert("Tarayıcı geliştirici araçlarına erişmek engellenmiştir.");
        event.preventDefault(); 
    }
});

window.addEventListener('devtoolschange', function(event) {
    if (event.detail.isOpen) {
        alert("Tarayıcı geliştirici araçlarına erişmek engellenmiştir.");
        event.detail.close();
    }
});

document.getElementById('no').addEventListener('click', function(event) {
    event.preventDefault();
    var button = this;
    button.style.transform = 'translateX(-20px)';
    button.style.transform = 'translateX(20px)';
    setTimeout(function() {
        button.style.transform = 'translateX(0)';
    }, 300);
});

document.getElementById('yes').addEventListener('click', function() {
    const card = document.querySelector('.card');
    card.style.backgroundColor = '#FFCCFF';
    document.getElementById('yes').style.backgroundColor = '#FFB6C1';
    document.getElementById('no').style.backgroundColor = '#ADD8E6';
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('question').innerText = 'Seninle muhteşem bir zaman geçireceğiz! ❤️';

    function addHearts() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('heart');
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const randomTop = Math.random() * (screenHeight - 24);
        const randomLeft = Math.random() * (screenWidth - 24);
        heart.style.top = randomTop + 'px';
        heart.style.left = randomLeft + 'px';
        heart.style.animationDuration = Math.random() * 2 + 1 + 's';
        document.body.appendChild(heart);
        const hearts = document.querySelectorAll('.heart');
        if (hearts.length >= 40) {
            hearts.forEach(heart => heart.remove());
        }
    };
    setTimeout(() => {
        setInterval(addHearts, 300);
    }, 1000);
});
