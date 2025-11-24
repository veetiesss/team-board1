const pensionpackage = document.querySelector(".pensionpackage")
const solarshock = document.querySelector(".solarshock")
const difficultdesicion = document.querySelector(".difficultdesicion")
const screwloose = document.querySelector(".screwloose")
const dahlmeiersdeath = document.querySelector(".dahlmeiersdeath")
const afd = document.querySelector(".afd")

const pensionpackagetime = 2411
const solarshocktime = 2211
const difficultdesiciontime = 2111
const screwloosetime = 2211
const dahlmeiersdeathtime = 1911
const afdtime = 2411





const survey1 = document.querySelector(".survey1")
const survey2 = document.querySelector(".survey2")
const survey3 = document.querySelector(".survey3")
const survey4 = document.querySelector(".survey4")
const survey5 = document.querySelector(".survey5")
const survey6 = document.querySelector(".survey6")

const results1 = document.querySelector("#results1")
const results2 = document.querySelector("#results2")
const results3 = document.querySelector("#results3")
const results4 = document.querySelector("#results4")
const results5 = document.querySelector("#results5")
const results6 = document.querySelector("#results6")

let counts1 = JSON.parse(localStorage.getItem("gendercounts")) || {
    "male": 0,
    "female": 0,
}
let counts2 = JSON.parse(localStorage.getItem("screentimecounts")) || {
    "onetwohour": 0,
    "threefivehour": 0,
    "sixeighthour": 0,
}
let counts3 = JSON.parse(localStorage.getItem("ekocounts")) || {
    "veryimportant": 0,
    "important": 0,
    "neutral": 0,
    "lessimportant": 0,
    "notimportant": 0,
}
let counts4 = JSON.parse(localStorage.getItem("mediacounts")) || {
    "totallyagree": 0,
    "agree": 0,
    "neutral": 0,
    "disagree": 0,
    "totallydisagree": 0,
}
let counts5 = JSON.parse(localStorage.getItem("ekocounts")) || {
    "absolutelyyes": 0,
    "mostlyyes": 0,
    "neutral": 0,
    "mostlyno": 0,
    "absolutelyno": 0,
}
let counts6 = JSON.parse(localStorage.getItem("freetimecounts")) || {
    "sport": 0,
    "reading": 0,
    "videogames": 0,
    "films": 0,
    "friends": 0,
}

function displayResults1(){
    results1.innerHTML = ""
    for(let key in counts1) {
        let li = document.createElement("li")
        li.textContent = `${counts1[key]} Stimmen`
        results1.appendChild(li)
    }
}
displayResults1()
function displayResults2(){
    results2.innerHTML = ""
    for(let key in counts2) {
        let li = document.createElement("li")
        li.textContent = `${counts2[key]} Stimmen`
        results2.appendChild(li)
    }
}
displayResults2()
function displayResults3(){
    results3.innerHTML = ""
    for(let key in counts3) {
        let li = document.createElement("li")
        li.textContent = `${counts3[key]} Stimmen`
        results3.appendChild(li)
    }
}
displayResults3()
function displayResults4(){
    results4.innerHTML = ""
    for(let key in counts4) {
        let li = document.createElement("li")
        li.textContent = `${counts4[key]} Stimmen`
        results4.appendChild(li)
    }
}
displayResults4()
function displayResults5(){
    results5.innerHTML = ""
    for(let key in counts5) {
        let li = document.createElement("li")
        li.textContent = `${counts5[key]} Stimmen`
        results5.appendChild(li)
    }
}
displayResults5()
function displayResults6(){
    results6.innerHTML = ""
    for(let key in counts6) {
        let li = document.createElement("li")
        li.textContent = `${counts6[key]} Stimmen`
        results6.appendChild(li)
    }
}
displayResults6()

survey1.addEventListener("submit", function(e){
    e.preventDefault()

    const choice = document.querySelector("input[name='gender']:checked").value
    counts1[choice]++
    localStorage.setItem("gendercounts", JSON.stringify(counts1))

    displayResults1()

})
survey2.addEventListener("submit", function(e){
    e.preventDefault()

    const choice = document.querySelector("input[name='screentime']:checked").value
    counts2[choice]++
    localStorage.setItem("screentimecounts", JSON.stringify(counts2))

    displayResults2()

})
survey3.addEventListener("submit", function(e){
    e.preventDefault()

    const choice = document.querySelector("input[name='eko']:checked").value
    counts3[choice]++
    localStorage.setItem("ekocounts", JSON.stringify(counts3))

    displayResults3()

})
survey4.addEventListener("submit", function(e){
    e.preventDefault()

    const choice = document.querySelector("input[name='media']:checked").value
    counts4[choice]++
    localStorage.setItem("mediacounts", JSON.stringify(counts4))

    displayResults4()

})
survey5.addEventListener("submit", function(e){
    e.preventDefault()

    const choice = document.querySelector("input[name='practice']:checked").value
    counts5[choice]++
    localStorage.setItem("practicecounts", JSON.stringify(counts5))

    displayResults5()

})
survey6.addEventListener("submit", function(e){
    e.preventDefault()

    const choice = document.querySelector("input[name='freetime']:checked").value
    counts6[choice]++
    localStorage.setItem("freetimecounts", JSON.stringify(counts6))

    displayResults6()

})

let arr1 = [pensionpackagetime, solarshocktime, difficultdesiciontime, screwloosetime, dahlmeiersdeathtime, afdtime]

let arr2 = [pensionpackage, solarshock, difficultdesicion, screwloose, dahlmeiersdeath, afd]

let indices = arr1.map((value, index) => index)
indices.sort((i, j) => arr1[j] - arr1[i])

let sortedElements = indices.map(i => arr2[i]) 

sortedElements[0].classList.remove("hidden")
sortedElements[1].classList.remove("hidden")
sortedElements[2].classList.remove("hidden")




