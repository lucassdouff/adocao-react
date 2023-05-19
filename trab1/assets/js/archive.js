import catjson from './gatos.json' assert { type: 'json' }

var cats = JSON.parse(JSON.stringify(catjson))
var allCatsDiv = document.querySelector(".allCats")

function renderTheCats(cats) {
    cats.forEach((cat) => {

        let catDiv = document.createElement("div")
        let catDescriptionDiv = document.createElement("div")
        let catImgEl = document.createElement("img")
        let catNameEl = document.createElement("strong")
        let catSexEl = document.createElement("span")
        let catAgeEl = document.createElement("span")


        catNameEl.innerHTML = cat.name

        catImgEl.setAttribute('src', cat.url)
        catImgEl.classList.add("catImg")

        catSexEl.innerHTML = cat.sex

        catSexEl.classList.add("badge")
        catSexEl.classList.add("bg-dark")

        catAgeEl.innerHTML = cat.age + " ano(s)"

        catAgeEl.classList.add("badge")
        catAgeEl.classList.add("bg-dark")
    
        catDiv.addEventListener("click", () => {
            localStorage.setItem('id', cat.id)
            window.location.href = "single.html"
        })

        catDescriptionDiv.appendChild(catSexEl)
        catDescriptionDiv.appendChild(catAgeEl)

        catDescriptionDiv.classList.add("d-flex")
        catDescriptionDiv.classList.add("justify-content-center")
        catDescriptionDiv.classList.add("gap-2")

        catDiv.appendChild(catImgEl)
        catDiv.appendChild(catNameEl)
        catDiv.appendChild(catDescriptionDiv)

        catDiv.classList.add("col-lg-4")
        catDiv.classList.add("col-md-6")
        catDiv.classList.add("mb-4")
        catDiv.classList.add("text-center")
        catDiv.classList.add("cat-hover")
        catDiv.classList.add("px-2")
        catDiv.classList.add("py-2")

        catDiv.style = "cursor: pointer;"

        allCatsDiv.appendChild(catDiv)
    })
}

if(document.URL.includes('archive-1.html')){
    renderTheCats(cats.slice(0, 9))
} else if(document.URL.includes('archive-2.html')) {
    renderTheCats(cats.slice(10, 19))
} else if(document.URL.includes('archive-3.html')) {
    renderTheCats(cats.slice(20, 29))
}
