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
// Night over Water -- thriller ---
// Anne Frank: The Diary of a Young Girl ---physology
// Interview with the Vampire --- horror
// A Walk to Remember --- romance
// It Was on Fire When I Lay Down on It --- self help 
// The Fellowship of the Ring (The Lord of the Rings, Part 1) -- fantasy






// creating a arr where we would put the indexes so we can access the element of that index and when we search something then we will manipulate the indexes which is written inside
let mainMainIndArr = []
for (j = 0; j < 706; j++) {
    mainMainIndArr.push(j)
}


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
        console.log(similar)
    })
fetch("/json/recomender/author.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        searchAuthor = data
        console.log(searchAuthor)
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
        if (title == query) {
            queryInd = index
            break
        }
    }
    // console.log(queryInd)
    similarArr = similar[queryInd]
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

    console.log(similarArr)

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

        png.setAttribute('src', img[i])
        h3.innerText = tit[i]
        p1.innerText = auth[i]
        p2.innerText = avgRat[i]
        p3.innerText = numRat[i]

        div1.append(png)
        div2.append(h3, p1, p2, p3)

        divMain.append(div1, div2)
        books.append(divMain)



    }
}
