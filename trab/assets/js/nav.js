import catjson from './gatos.json' assert { type: 'json' }

var cats = JSON.parse(JSON.stringify(catjson))
var meowDiv= document.querySelector("#someMeow")

function someMeow() {
    let catIndex = Math.floor(Math.random() * cats.length)
    let cat = cats[catIndex]

    let catAncor = document.createElement("a")

    catAncor.innerHTML = "Algum miau!"

    catAncor.setAttribute("href", "single.html")
    catAncor.classList.add("dropdown-item")
    
    catAncor.addEventListener("click", () => {
        localStorage.setItem('id', cat.id)
    })

    meowDiv.appendChild(catAncor)
}

someMeow()