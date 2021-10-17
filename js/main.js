const asideItemList = document.querySelectorAll("#aside-item ul");
const asideItemChild = document.querySelectorAll(".aside-item-child");
const asideItemChildTringle = document.querySelectorAll(".tringle");
asideItemList.forEach( i =>{
    i.onclick = function(){
        let titleIndx = this.getAttribute("tittle-index");
        if (asideItemChild[titleIndx].style.visibility == "visible") {
            asideItemChild[titleIndx].style.visibility = "hidden";
            asideItemChild[titleIndx].style.opacity = "0";
            asideItemChildTringle[titleIndx].style.visibility = "hidden";
            asideItemChildTringle[titleIndx].style.opacity = "0";
        } else {
            for (let y = 0; y < asideItemChild.length; y++) {
                asideItemChild[y].style.visibility = "hidden";
            asideItemChild[y].style.opacity = "0";
            }
            for (let y = 0; y < asideItemChildTringle.length; y++) {
                asideItemChildTringle[y].style.visibility = "hidden";
            asideItemChildTringle[y].style.opacity = "0";
            }
            asideItemChild[titleIndx].style.transition = "all 0.5s";
            asideItemChildTringle[titleIndx].style.transition = "all 1s";
            asideItemChild[titleIndx].style.visibility = "visible";
            asideItemChild[titleIndx].style.opacity = "1";
            asideItemChildTringle[titleIndx].style.visibility = "visible";
            asideItemChildTringle[titleIndx].style.opacity = "1";
        }
    }
})