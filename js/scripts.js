var count = 0;

function createSquare() {
    var articleObj = document.createElement("article");
    articleObj.className = "square";
    document.getElementById("squareMain").appendChild(articleObj);
    articleObj.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    count++;

    changeOnClick();

    if (count % 3 == 0)
        makeStar();
}

function initialize() {
    var len = 'socolovsky'.length * 2;
    for (i = 0; i < len; ++i) {
        if (i == 0)
            CreateFirstSquare();
        else
            createSquare();
    }
}

function CreateFirstSquare() {
    var firstSquare = createSquare();
    var plusObj = document.createElement("section");
    plusObj.className = "plus";
    document.getElementsByClassName("square")[0].appendChild(plusObj);
    plusObj.onclick = function () {
        createSquare();
    }
}

function changeOnClick() {
    for (i = 1; i < count; i++) {
        document.getElementsByClassName("square")[i].onclick = function () {

            if (!this.style.backgroundImage)
                this.style.backgroundImage = "url(images/tomato.png)";
            else
                this.style.backgroundImage = "";
        }
    }
}

function makeStar() {
    var star = document.createElement("section");
    star.className = "star";
    document.getElementsByClassName("square")[count - 1].appendChild(star);
}
