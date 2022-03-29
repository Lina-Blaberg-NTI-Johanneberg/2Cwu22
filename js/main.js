let i = 1

setInterval(byta_bild, 5000)

function byta_bild(){
    document.querySelector('#nyhetse').innerHTML = `<img id = "nyhets_bild" class = "fade" src="img/innebandy_${i}.jpg" alt="bilder på olika lag i innebandyklubben">`

    if(i>=4){
        i = 1
    }else{
        i++
    }

}