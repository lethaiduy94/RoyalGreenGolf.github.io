function gameStart(){
    var timer = setInterval(function(){

    let min = 0;
    let max = 2;
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(num)

        var imgBox =document.querySelectorAll('.img')
        let mang = Array.from(imgBox).slice()

        if(num == 0){
            mang[0].style.display = 'block'
            mang[1].style.display = 'none'
            mang[2].style.display = 'none'
           
        }else if( num == 1){
            mang[0].style.display = 'none'
            mang[1].style.display = 'block'
            mang[2].style.display = 'none'
           
        }else {
            mang[0].style.display = 'none'
            mang[1].style.display = 'none'
            mang[2].style.display = 'block'
            
        }


    },100)
    

    var stop = document.querySelector('#stop');

    stop.onclick = () =>{
    document.getElementById('start').removeAttribute('disabled');
    clearInterval(timer);
    document.getElementById('start').style.display ='block'

    document.getElementById('stop').setAttribute('disabled',true);
    document.getElementById('stop').style.display ='none'
    }

}



var start = document.querySelector('#start');

start.onclick = () =>{
gameStart()
document.getElementById('start').setAttribute('disabled',true);
start.style.display = 'none'
document.getElementById('stop').removeAttribute('disabled');
document.getElementById('stop').style.display = 'block';
}