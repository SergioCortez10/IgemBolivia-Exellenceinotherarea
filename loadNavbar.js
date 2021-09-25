
window.addEventListener('scroll', (e)=>{
    let y = window.scrollY;
    if(y >= 500){
        document.getElementById('nav').classList.add('my-nav')
    }else{
        document.getElementById('nav').classList.remove('my-nav')
    } 
})

function navBarColor(){
    document.getElementById('nav').classList.add('my-nav')
}

// Boton ver mas
let i = 0;
let btnReference = document.querySelector('#btnReference').addEventListener('click', function() {
    if(!i){
        document.getElementById('vermas').style.display ='inline';
        document.getElementById('btnReference').innerHTML ='Hide references';
        i = 1;  
    }
    else {
        document.getElementById('vermas').style.display = 'none';
        document.getElementById('btnReference').innerHTML ='See references';
        i = 0;  
    }
})