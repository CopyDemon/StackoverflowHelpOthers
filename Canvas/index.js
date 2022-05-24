//Video from
//https://www.youtube.com/watch?v=vxljFhP2krI&list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&index=4
//resize canvas
const canvas = document.getElementById("canvasResizeCanvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let c = canvas.getContext('2d')

// //canvas draw
// /**
//  * elements:{
//  *  Rect
//  *  line
//  * }
//  * */

// //rect
// c.fillStyle = "rgba(255,0,0,.1)"
// c.fillRect(100, 100, 100, 100)
// c.fillStyle = "rgba(255,100,30,.5)"
// c.fillRect(400, 100, 100, 100)

// //line
// c.beginPath()
// c.moveTo(50, 300)
// c.lineTo(300, 100)
// c.strokeStyle = "#f73a2a"
// c.stroke()

// //Arc circle (x, y, r, startAngle, endAngle)
// c.beginPath()
// c.arc(300, 300, 30, 0, Math.PI * 2, false)
// c.strokeStyle = "blue"
// c.stroke()

//loop create elements
// for(let i = 0; i < 20; i++){
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     let r = Math.random() * 255;
//     let g = Math.random() * 255;
//     let b = Math.random() * 255;
//     c.beginPath()
//     c.arc(x, y, 30, 0, Math.PI * 2, false)
//     c.strokeStyle = `rgb(${r}, ${g}, ${b})`
//     c.stroke()
// }

//moving circle
//bouncing ball
// let x = Math.random() * innerWidth
// let y = Math.random() * innerHeight
// let r = 30
// let dx = (Math.random()-0.5 * 10)
// let dy = (Math.random()-0.5 * 10)

let mouse = {
    x : undefined,
    y : undefined
}

const maxR = 40
const minR = 10

let color = [
    '#ffaa33',
    '#99ffaaa',
    '#00ff00',
    '#4411aa',
    '#ff1100'
]

window.addEventListener('mousemove', (event)=>{
    mouse.x = event.x
    mouse.y = event.y
})

function Circle(x, y, r, dx, dy){
    this.x = x
    this.y = y
    this.r = r
    this.dx = dx
    this.dy = dy
    this.whichColor = color[Math.floor(Math.random() * color.length)]

    this.draw = function(){
        c.beginPath()
        c.arc(this.x, this.y, this.r , 0, Math.PI * 2, false)
        c.fillStyle = this.whichColor
        c.fill()
    }

    this.update = function(){
        if(this.x + this.r > innerWidth || this.x - this.r < 0){
            this.dx = -this.dx
        }

        if(this.y + this.r > innerHeight || this.y - this.r < 0){
            this.dy = -this.dy
        }
        this.x += this.dx
        this.y += this.dy

        //interactivity
        if(
               mouse.x - this.x < 50 
            && mouse.x - this.x > -50
            && mouse.y - this.y < 50
            && mouse.y - this.y < -50
        ){
            console.log(`x`,this.x, mouse.x)
            console.log(`y`,this.y, mouse.y)
            if(this.r < maxR){
                this.r += 1
            }
        }else if(this.r > minR){
            this.r -= 1 
        }

        this.draw()
    }
}

let circleArr = []
for(let i = 0; i < 1; i++){
    let r = Math.random() * 50
    let x = Math.random() * (innerWidth - r * 2) + r
    let y = Math.random() * (innerHeight - r * 2) + r
    let dx = (Math.random() - 0.5)
    let dy = (Math.random() - 0.5)
    circleArr.push(new Circle(x, y, r, dx, dy))
}

function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,innerWidth,innerHeight)
    for(let i in circleArr){
        circleArr[i].update()
    }
}

animate()

// let circle = null
