import catjson from './gatos.json' assert { type: 'json' }

var cats = JSON.parse(JSON.stringify(catjson))
var catDiv = document.querySelectorAll("#cat")

function someRandomCats() {
    let usedCats = []
    catDiv.forEach((div) => {
        let catIndex = Math.floor(Math.random() * cats.length)
        if(usedCats.includes(catIndex)){
            while(usedCats.includes(catIndex)){
                catIndex = Math.floor(Math.random() * cats.length)
            }
        }else{
            usedCats.push(catIndex)
        }

        let cat = cats[catIndex]

        let catImgEl = document.createElement("img")
        let catNameEl = document.createElement("strong")
        let catNameTitleEl = document.createElement("h4")

        catImgEl.setAttribute('src', cat.url)
        catImgEl.classList.add("catImg")
        catImgEl.classList.add("img-fluid")
        
        catNameEl.innerHTML = cat.name
        catNameTitleEl.classList.add("mt-2")

        div.addEventListener("click", () => {
            localStorage.setItem('id', cat.id)
            window.location.href = "single.html"
        })
        
        catNameTitleEl.appendChild(catNameEl)
        div.appendChild(catImgEl)
        div.appendChild(catNameTitleEl)

    })
}

someRandomCats()