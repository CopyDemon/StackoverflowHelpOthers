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
function Circle(x, y, r, dx, dy){
    this.x = x
    this.y = y
    this.r = r
    this.dx = dx
    this.dy = dy

    this.draw = function(){
        c.beginPath()
        c.arc(this.x, this.y, this.r , 0, Math.PI * 2, false)
        c.strokeStyle = "blue"
        //c.fillStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
        //c.fill()
        c.stroke()
    }

    this.update = function(){
        //requestAnimationFrame(this.update)
        if(this.x + this.r > innerWidth || this.x - this.r < 0){
            this.dx = -this.dx
        }

        if(this.y + this.r > innerHeight || this.y - this.r < 0){
            this.dy = -this.dy
        }
        this.x += this.dx
        this.y += this.dy

        this.draw()
    }
}

let circle = new Circle(200, 200, 50, 4, 8)
let circleArr = []
for(let i = 0; i < 100; i++){
    let r = Math.random() * 50
    let x = Math.random() * (innerWidth - r * 2) + r
    let y = Math.random() * (innerHeight - r * 2) + r
    let dx = (Math.random()-0.5 * 10)
    let dy = (Math.random()-0.5 * 10)
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
