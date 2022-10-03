// data = [
//     { Name: 'Catcher In The Rye', author: 'by J.D.Salinger', rating: '9.2', disc: "Salinger's classic coming-of-age story portrays one young man's funny and poignant expriences with life, love, and sex." }, { Name: 'Catcher In The Rye', author: 'by J.D.Salinger', rating: '9.2', disc: "Salinger's classic coming-of-age story portrays one young man's funny and poignant expriences with life, love, and sex." }, { Name: 'Catcher In The Rye', author: 'by J.D.Salinger', rating: '9.2', disc: "Salinger's classic coming-of-age story portrays one young man's funny and poignant expriences with life, love, and sex." }, { Name: 'Catcher In The Rye', author: 'by J.D.Salinger', rating: '9.2', disc: "Salinger's classic coming-of-age story portrays one young man's funny and poignant expriences with life, love, and sex." }, { Name: 'Catcher In The Rye', author: 'by J.D.Salinger', rating: '9.2', disc: "Salinger's classic coming-of-age story portrays one young man's funny and poignant expriences with life, love, and sex." }, { Name: 'Catcher In The Rye', author: 'by J.D.Salinger', rating: '9.2', disc: "Salinger's classic coming-of-age story portrays one young man's funny and poignant expriences with life, love, and sex." }, { Name: 'Catcher In The Rye', author: 'by J.D.Salinger', rating: '9.2', disc: "Salinger's classic coming-of-age story portrays one young man's funny and poignant expriences with life, love, and sex." }, { Name: 'Catcher In The Rye', author: 'by J.D.Salinger', rating: '9.2', disc: "Salinger's classic coming-of-age story portrays one young man's funny and poignant expriences with life, love, and sex." }, { Name: 'Catcher In The Rye', author: 'by J.D.Salinger', rating: '9.2', disc: "Salinger's classic coming-of-age story portrays one young man's funny and poignant expriences with life, love, and sex." },
//     { Name: 'Catcher In The Rye', author: 'by J.D.Salinger', rating: '9.2', disc: "Salinger's classic coming-of-age story portrays one young man's funny and poignant expriences with life, love, and sex." }, { Name: 'Catcher In The Rye', author: 'by J.D.Salinger', rating: '9.2', disc: "Salinger's classic coming-of-age story portrays one young man's funny and poignant expriences with life, love, and sex." }, { Name: 'Catcher In The Rye', author: 'by J.D.Salinger', rating: '9.2', disc: "Salinger's classic coming-of-age story portrays one young man's funny and poignant expriences with life, love, and sex." }
// ]

// import users from "/top50/image.json" assert {type: 'json'};

// console.log(users)
// localStorage.setItem('list', JSON.stringify(users))
// // console.log("users")
// console.log(typeof (users))

// 1984 fiction
// 1st to Die: A Novel -- crime
// Before I Say Good-Bye --- mystery
// Night over Water -- thriller ---
// Anne Frank: The Diary of a Young Girl ---physology
// Interview with the Vampire --- horror
// A Walk to Remember --- romance
// It Was on Fire When I Lay Down on It --- self help 
// The Fellowship of the Ring (The Lord of the Rings, Part 1) -- fantasy 

// fantasy -- The Fellowship of the Ring (The Lord of the Rings, Part 1)
// horror  -- Interview with the Vampire
// mystery -- Before I Say Good-Bye
// crime   -- 1st to Die: A Novel
// romance -- A Walk to Remember
// physology -- Anne Frank: The Diary of a Young Girl
// self help -- It Was on Fire When I Lay Down on It






// creating a arr where we would put the indexes so we can access the element of that index and when we search something then we will manipulate the indexes which is written inside
let mainMainIndArr = []
for (j = 0; j < 706; j++) {
    mainMainIndArr.push(j)
}

// searchInput.value = ''

let mainIndArr = [...mainMainIndArr]


let title
let image
let numRating
let avgRating
let author



let searchAuthor
let searchTitle
let searchNumRating
let searchAvgRating
let searchImg
let similar
let queryInd

// fetching datas of popular top 50 books

// image
fetch("/json/top50/image.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (img) {
        // console.log(data);
        image = img
    })

// book title
fetch("/json/top50/bookTitle.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (tit) {
        // console.log(data);
        title = tit
    })

// number of rating in the books
fetch("/json/top50/numRatings.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (numR) {
        // console.log(data);
        numRating = numR
    })

// average rating in the books
fetch("/json/top50/avgRatings.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (avgR) {
        // console.log(data);
        avgRating = avgR
    })

// books author name
fetch("/json/top50/bookAuthor.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (aut) {
        // console.log(data);
        author = aut
        main(title, image, numRating, avgRating, author)
    })


// fetching datas of recomender json


fetch("/json/recomender/title.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        searchTitle = data
    })
fetch("/json/recomender/similarity.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        similar = data
        // console.log(similar)
    })
fetch("/json/recomender/author.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        searchAuthor = data
        // console.log(searchAuthor)
    })
fetch("/json/recomender/avgRating.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        searchAvgRating = data
    })
fetch("/json/recomender/image.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        searchImg = data
    })
fetch("/json/recomender/numRating.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        searchNumRating = data
    })





form.addEventListener('submit', search)

function search(event) {
    event.preventDefault()
    searchResult(searchInput.value)
}

function searchResult(query) {


    for (let index = 0; index < searchTitle.length; index++) {
        title = searchTitle[index]
        // console.log(title, 'title')
        if (title == query) {
            queryInd = index
            // console.log(title)
            break
        } else if (query == ' ' + title) {
            queryInd = index
            // console.log(title)
            break
        }
    }
    // console.log(queryInd)
    similarArr = [...similar[queryInd]]
    // console.log(similarArr)

    // mainIndArr
    // console.log(mainIndArr)
    mainIndArr = [...mainMainIndArr]

    let isSwap
    for (let a = 0; a < 706 - 1; a++) {
        isSwap = 0
        for (let b = 0; b < 706 - 1 - a; b++) {
            if (similarArr[b] < similarArr[b + 1]) {
                //swaping element of Array similarARR which is main array
                temp = similarArr[b]
                similarArr[b] = similarArr[b + 1]
                similarArr[b + 1] = temp
                isSwap = 1

                //swaping element of Array MainIndArr which is index of all elements of A
                temp = mainIndArr[b]
                mainIndArr[b] = mainIndArr[b + 1]
                mainIndArr[b + 1] = temp
            }
        }
        if (isSwap == 0) {
            break
        }
    }

    // console.log(similarArr)

    // console.log()

    main(searchTitle, searchImg, searchNumRating, searchAvgRating, searchAuthor)

}


function main(tit, img, numRat, avgRat, auth) {
    bookEl = document.querySelector('#books')

    bookEl.innerHTML = ''
    let numOfImg = 0

    // console.log(tit)
    for (ind in mainIndArr) {
        numOfImg++
        if (numOfImg > 50) {
            break
        }
        i = mainIndArr[ind]
        // console.log(tit)
        // console.log(img)
        // console.log(numRat)
        // console.log(avgRat)
        // console.log(auth)


        divMain = document.createElement('div')
        div1 = document.createElement('div')
        div2 = document.createElement('div')
        png = document.createElement('img')
        h3 = document.createElement('h3')
        p1 = document.createElement('p')
        p2 = document.createElement('p')
        p3 = document.createElement('p')
        span = document.createElement('span')

        png.setAttribute('src', img[i])
        h3.innerText = tit[i]
        p1.innerText = auth[i]
        span.innerText = '/10'

        p2.innerText = String(avgRat[i] + 4).slice(0, 3)
        p3.innerText = numRat[i]


        p2.append(span)
        div1.append(png)
        div2.append(h3, p1, p2, p3)

        divMain.append(div1, div2)
        books.append(divMain)



    }

    // after all book display i have to add event

    book = document.querySelectorAll('#books>div')
    book.forEach((el) => {
        // console.log(el)
        el.addEventListener('click', (event) => {
            bookClick(event)
        })
    })
}


bookContain = document.querySelector('#main')
// bookContain.addEventListener("resize", size)

// function size() {
//     console.log('heellkkjj')
// }

let x
// what happen when someone click on a book
function bookClick(event) {
    // console.log(event.currentTarget)

    imgOfClickBook = event.currentTarget.childNodes[0].childNodes[0].src
    titOfClickBook = event.currentTarget.childNodes[1].childNodes[0].innerText
    authOfClickBook = event.currentTarget.childNodes[1].childNodes[1].innerText
    ratOfClickBook = event.currentTarget.childNodes[1].childNodes[2].innerText
    // console.log(imgOfClickBook)
    // console.log(titOfClickBook)
    // console.log(authOfClickBook)
    // console.log(ratOfClickBook)

    // adding book deatails in sidebar but before selecting element of sidebar so that we can put deatail of book there

    titInSidebar = document.querySelector('#sidebar > div:first-child h3')
    let autInSidebar = document.querySelector('#sidebar > div:first-child > div:last-child > li:first-child')
    let ratInSidebar = document.querySelector('#sidebar > div:first-child > div:last-child > li:nth-child(2)')
    let prcInSidebar = document.querySelector('#sidebar > div:first-child > div:last-child > li:last-child')
    let imgInSidebar = document.querySelector('#sidebar')
    // console.log(autInSidebar.innerText)
    // console.log(titInSidebar.innerText)
    // console.log(ratInSidebar.innerText)
    // console.log(prcInSidebar.innerText)

    // adding book detail

    prcArr = [10, 20, 25, 30, 5, 30, 35, 40, 45, 50, 50]
    x = Math.floor((Math.random() * 10) + 1)
    autInSidebar.innerText = authOfClickBook
    ratInSidebar.innerText = ratOfClickBook
    prcInSidebar.innerText = 'Price: ' + prcArr[x] + '$'
    imgInSidebar.style.backgroundImage = 'url(' + imgOfClickBook + ')'
    ratInSidebar.style.backgroundImage = "url('https://library.kissclipart.com/20180902/qgq/kissclipart-star-png-rating-clipart-computer-icons-clip-art-cea9cf0ebd255aaf.png')"


    bookContain.style.marginLeft = '18vw'
    // sidebar.style.width = '18vw'
    sidebar.style.display = 'block'
    // sidebar.style.minWidth = '200px'
    titInSidebar.innerText = titOfClickBook
    // function muFun() {
    //     console.log('hello brother how are you')
    // }
}



// adding event listener to filter

popular = document.querySelector('#filter > div:first-child > p')
popular.addEventListener('click', (event) => {
    popular.style.borderBottom = '3px solid #09a890'
    popular.style.color = '#09a890'
    location.reload()
})



filterQuery = ['The Fellowship of the Ring (The Lord of the Rings, Part 1)', 'Interview with the Vampire', 'Before I Say Good-Bye', '1st to Die: A Novel', 'A Walk to Remember', 'Anne Frank: The Diary of a Young Girl', 'It Was on Fire When I Lay Down on It']

filterQuery.forEach(function (query, filtInd) {
    filtArrSelector = document.querySelectorAll('#filter > div:last-child p')

    filtTag = filtArrSelector[filtInd]

    filtTag.addEventListener('click', function (event) {
        filtArrSelector.forEach(function (tag) {
            tag.style.border = '0'
            tag.style.color = 'grey'
            // console.log(tag)
        })
        popular.style.borderBottom = '0'
        popular.style.color = 'grey'
        event.target.style.borderBottom = '3px solid #09a890'
        event.target.style.color = '#09a890'
        searchResult(query)
    })
    // console.log(filtTag)
    // console.log(query)


})




// what happen when  someone click on add to cart button

cart = document.querySelector('#sidebar button')
cart.addEventListener('click', addCart)

function addCart() {
    // console.log('yes')
    arr = JSON.parse(localStorage.getItem('cart')) || []

    obj = {}
    obj.title = titOfClickBook
    obj.author = authOfClickBook
    obj.img = imgOfClickBook
    obj.prc = prcArr[x]

    arr.push(obj)

    localStorage.setItem('cart', JSON.stringify(arr))
    // console.log(arr)

}
