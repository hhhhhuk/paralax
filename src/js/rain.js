let canvas = document.getElementsByClassName('rain')[0];
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext('2d')

function randomNum(max, min) {
    return Math.floor(Math.random()* max) + min;
}

function RainDrops(x, y, endy, velocity, opacity) {
    
    this.x = x;
    this.y = y;
    this.endy = endy;
    this.velocity = velocity;
    this.opacity = opacity;

    this.draw = function() {
        c.beginPath();
        c.moveTo(this.x, this.y);
        c.lineTo(this.x, this.y - this.endy);
        c.lineWidth = 1;
        c.strokeStyle = "rgba(255, 255, 255, "+ this.opacity +" )"
        c.stroke();
    }

    this.update = function() {
        let rainEnd = window.innerHeight + 100;
        if (this.y > rainEnd) {
            this.y = this.endy - 100;
        }
        else {
            this.y = this.y + this.velocity;
        }
        this.draw();
    }

}

let rainArray = [];

for (let i = 0; i < 1000; i++) {
    let rainXLocation = Math.floor(Math.random() * window.innerWidth) + 10;
    let rainYLocation = Math.random() * -100;
    let RandomRainHeight = randomNum(10, 2);
    let RandomSpeed = randomNum(20, .2)
    let RandomOpacity = Math.random() * .55
    rainArray.push(new RainDrops(rainXLocation, rainYLocation, RandomRainHeight, RandomSpeed, RandomOpacity))
}


function animateRain() {

    requestAnimationFrame(animateRain)
    c.clearRect(0,0, window.innerWidth, window.innerHeight)

    for (let i = 0; i < rainArray.length; i++) {
        rainArray[i].update()

        
    }


}

animateRain()