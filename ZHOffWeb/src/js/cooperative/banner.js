(function () {
    window.onload = function () {
        let banner = document.getElementsByClassName("joinBanner")[0];
        window.onresize = function () {
            console.log(document.documentElement.clientWidth)
            if (parseInt(document.documentElement.clientWidth) < 470) {
                banner.src="../image/smallBanner.png"
                console.log(1)
            }
        }
    }

}())