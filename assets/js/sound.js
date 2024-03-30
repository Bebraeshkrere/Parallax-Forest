let btnSound = document.querySelector('.btn.sound');
let Sound = document.querySelector('audio')
console.dir(sound);
btnSound.onClick = () => {
    if (sound.paused) {
        console.log('Включаем')
    }  else {
        console.log('Выключаем')
    }
}