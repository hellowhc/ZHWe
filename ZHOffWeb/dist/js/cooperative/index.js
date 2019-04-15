(function () {
    window.onload = function () {
        let cooperImg = document.getElementsByClassName("cooperImg")[0];
        window.onresize = function () {
            if (parseInt(document.documentElement.clientWidth) < 500) {
                cooperImg.src = "../image/cooperMinImg.png";
            }
        }
    }

}())