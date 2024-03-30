document.addEventListener('mousemove', (e) => {
    console.log("X", (e.clientX - window.innerWidth/2)*0.05)
    console.log("Y", (e.clientY - window.innerHeight / 2)*0.01)
    Object.assign(document.documentElement, {
        style: `--moveX: ${
            (clientX - window.innerWidth/2) *0.05 
    }deg; --moveY: ${(e.clientY - window.innerHeight / 2) *0.01}deg;`
    });
});