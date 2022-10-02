data = JSON.parse(localStorage.getItem("cart"));
cartShow(data);

function cartShow(tableData) {
    totalPrice = 0;
    tableData.forEach(function (el) {
        //   creating tr so we can put inside tbody
        tr = document.createElement("tr");
        //   creating 5 td so we can put insided trr
        td1 = document.createElement("td");
        imge = document.createElement("img");
        imge.src = el.img;
        td1.append(imge);
        td2 = document.createElement("td");
        td2.innerText = el.title;
        td3 = document.createElement("td");
        td3.innerText = el.prc + "$";
        tr.append(td1, td2, td3);
        body.append(tr);
        totalPrice += el.prc;
    });
    tr = document.createElement("tr");
    td1 = document.createElement("td");
    td2 = document.createElement("td");
    btn = document.createElement("button");
    btn.innerText = "CHECKOUT";
    td2.innerText = "Sub-Total " + totalPrice + "$";
    td1.setAttribute("colspan", "2");
    td1.append(btn);

    tr.append(td1, td2);
    body.append(tr);
}

btn.addEventListener('click', del)

function del() {
    window.location.href = 'payment.html'
}