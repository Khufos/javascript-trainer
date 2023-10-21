id = null
function blueSquare(){
    let ob1 = document.getElementById('obj1')
    let pos1 = 0 //horizontal
    let pos2 = 0 //vertical
    clearInterval(id)
    id = setInterval(frame,15)
        function frame(){
            if(pos1 == 440 || pos2 == 220){
                clearInterval(id)
            }else{
                pos1 = pos1 + 2
                pos2++
                ob1.style.left = pos1 + 'px';
                ob1.style.top = pos2 + 'px';
            }
        }
    }



    function redSquare(){
        let ob2 = document.getElementById('obj2')
        let pos1 = 0 //horizontald
        let pos2 = 0 //vertical
        clearInterval(id)
        id = setInterval(frame,15)
            function frame(){
                if(pos1 == 440 || pos2 == 220){
                    clearInterval(id)
                }else{
                    pos1 = pos1 + 2
                    pos2++
                    ob2.style.right = pos1 + 'px';
                    ob2.style.top = pos2 + 'px';
                }
            }
        }
    
    


