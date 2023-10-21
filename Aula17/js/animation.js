let out = document.getElementById('path1')
let number = 0
let slider = document.getElementById('box2')
let position = 0
function numbers(){
    number++
    out.textContent = number
    if(number < 300){
        requestAnimationFrame(numbers)
    }
}
function movement(){
    position = position + 0.5
    slider.style.left = position +'%'
    if(position < 95){
        requestAnimationFrame(movement)
    }
}