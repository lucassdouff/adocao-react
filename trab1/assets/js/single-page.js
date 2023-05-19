import catjson from './gatos.json' assert { type: 'json' }

var cats = JSON.parse(JSON.stringify(catjson))
var catId = localStorage.getItem('id')
var singleCatImgDiv = document.querySelector(".singleCatImgDiv")
var singleCatDescriptionDiv = document.querySelector(".singleCatDescriptionDiv")

function getCatById() {
    let cat = cats.find(cat => cat.id === catId)
    return cat
}

function renderCat() {
    let cat = getCatById()

    let catImgEl = document.createElement("img")
    let catNameTitleEl = document.createElement("h3")
    let catNameEl = document.createElement("strong")
    let catDescriptionEl = document.createElement("p")

    catImgEl.setAttribute('src', cat.url)
    catNameEl.innerHTML = cat.name
    catDescriptionEl.innerHTML = cat.sex + ", " + cat.age + " ano(s)" + "<br>" + cat.description

    catImgEl.classList.add("singleCatImg")
    catImgEl.classList.add("img-fluid")

    catNameTitleEl.appendChild(catNameEl)
    singleCatImgDiv.appendChild(catImgEl)
    singleCatDescriptionDiv.appendChild(catNameTitleEl)
    singleCatDescriptionDiv.appendChild(catDescriptionEl)
}

renderCat()