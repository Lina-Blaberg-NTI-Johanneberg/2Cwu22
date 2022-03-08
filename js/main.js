let i = 1

setInterval(byta_bild, 5000)

function byta_bild(){
    document.querySelector('#nyhetse').innerHTML = `<img id = "nyhets_bild" class = "fade" src="img/camp_${i}.jpeg" alt="Nyheter om innebandy">`

    if(i>=6){
        i = 1
    }else{
        i++
    }

}