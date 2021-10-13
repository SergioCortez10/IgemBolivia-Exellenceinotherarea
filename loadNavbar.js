

document.addEventListener('DOMContentLoaded', async () => {

    var letras = localStorage.getItem('letras')
    var modoNocturno = localStorage.getItem('modoNocturno')
    document.documentElement.style.setProperty('--tamanioletras', `${letras}px`);
    
    if (modoNocturno == 'true') {
        document.getElementById('luna').style.display = 'none'
        document.getElementById('sol').style.display = 'block'
        valoresModoNoche()
    }else{
        document.getElementById('sol').style.display = 'none'
        document.getElementById('luna').style.display = 'block'
    }
})



function modoNocturno() {
    localStorage.setItem('modoNocturno', 'true')
    location.reload()
}

function modoDia() {
    localStorage.setItem('modoNocturno', 'false')
    location.reload()
}


// VALORES PARA MODO NOCHE COLLABORATIONS
function valoresModoNoche() {

    document.getElementById('body').style.backgroundColor = '#011d2c';
    let p = document.querySelectorAll("p");
    let menulat = document.querySelectorAll(".text-menu");
    let h2 = document.querySelectorAll("h2");

    
    document.documentElement.style.setProperty('--celeste', '#034f52');
    document.documentElement.style.setProperty('--azul', '#2ab1c7');
    document.documentElement.style.setProperty('--verde', '#2ab1c7');
    document.documentElement.style.setProperty('--bg-azul', '#ff57223b');
    document.documentElement.style.setProperty('--morado', '#034f52');

    p.forEach(e => {
        e.style.color = '#FFF'
    });
    menulat.forEach(e => {
        e.style.color = '#fff'
    });
    h2.forEach(e => {
        e.style.color = '#2ab1c7'
    });

}



// AUMENTAR TAMANIO DE LETRAS
function aumentarLetras() {
    var letras = localStorage.getItem('letras')
    letras++;
    document.documentElement.style.setProperty('--tamanioletras', `${letras}px`);
    localStorage.setItem('letras', letras)
}
function disminuirLetras() {
    document.documentElement.style.setProperty('--tamanioletras', '16px');
    localStorage.setItem('letras', '16')
}



// CAMBIAR COLORES ALEATORIOS
function aleatorio() {
    
    var colorOne = {
        R: Math.floor(Math.random() * 255),
        G: Math.floor(Math.random() * 255),
        B: Math.floor(Math.random() * 255)
      };
      var colorTwo = {
        R: Math.floor(Math.random() * 255),
        G: Math.floor(Math.random() * 255),
        B: Math.floor(Math.random() * 255)
      };
      var colorThree = {
        R: Math.floor(Math.random() * 255),
        G: Math.floor(Math.random() * 255),
        B: Math.floor(Math.random() * 255)
      };
      
      colorOne.rgb = 'rgb(' + colorOne.R + ',' + colorOne.G + ',' + colorOne.B + ')';
      colorTwo.rgb = 'rgb(' + colorTwo.R + ',' + colorTwo.G + ',' + colorTwo.B + ')';
      trasnTwo = 'rgb(' + colorTwo.R + ',' + colorTwo.G + ',' + colorTwo.B + ',' + 0.08 + ')';
      colorThree.rgb = 'rgb(' + colorThree.R + ',' + colorThree.G + ',' + colorThree.B + ')';
    
    document.documentElement.style.setProperty('--celeste', colorTwo.rgb);
    document.documentElement.style.setProperty('--azul', colorOne.rgb);
    document.documentElement.style.setProperty('--verde', colorThree.rgb);
    document.documentElement.style.setProperty('--bg-azul', '#ff57223b');
    document.documentElement.style.setProperty('--bg-celeste',trasnTwo );
}
