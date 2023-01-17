    const matt = document.querySelector('#matt')
    const jose = document.querySelector('#jose')
    const ethan = document.querySelector('#ethan')
    const nathan = document.querySelector('#nathan')
    
    const purple = document.querySelector('#purple')
    const black = document.querySelector('#black')
    const brown = document.querySelector('#brown')

document.querySelector("#check").addEventListener("click", check)

function check() {
    const person = document.querySelector("#person").value.toLowerCase()
    

    if(person === "matt"){
	    matt.classList.toggle('hidden')
        jose.classList.add('hidden')
        ethan.classList.add('hidden')
        brown.classList.add('hidden')
        black.classList.add('hidden')
        purple.classList.toggle('hidden')
        document.querySelector("#findOut").innerText = "Matt recieved his purple belt on 11/19/2022 at Kato Jiu-Jitsu from Jose Carlos Lima after almost 3 years of hard work at blue belt!"
    }else if(person === "jose"){
        jose.classList.toggle('hidden')
        ethan.classList.add('hidden')
        matt.classList.add('hidden')
        purple.classList.add('hidden')
        brown.classList.add('hidden')
        black.classList.toggle('hidden')
        document.querySelector("#findOut").innerText = "Jose is a two stripe black belt and is the head coach of Kato Jiu-Jitsu!"
    }else if(person === "ethan"){
        ethan.classList.toggle('hidden')
        matt.classList.add('hidden')
        jose.classList.add('hidden')
        purple.classList.add('hidden')
        black.classList.add('hidden')
        brown.classList.toggle('hidden')
        document.querySelector("#findOut").innerText = "Ethan is a one stripe brown belt under Jose Carlos Lima. He recieved his brown belt on 02/09/2022!"
}else if(person === "nathan"){
        nathan.classList.toggle('hidden')
        jose.classList.add('hidden')
        matt.classList.add('hidden')
        ethan.classList.add('hidden')
        brown.classList.add('hidden')
        black.classList.add('hidden')
        purple.classList.toggle('hidden')
        document.querySelector("#findOut").innerText = "Matt recieved his purple belt on 11/19/2022 at Kato Jiu-Jitsu from Jose Carlos Lima after almost 3 years of hard work at blue belt!"
}
}
