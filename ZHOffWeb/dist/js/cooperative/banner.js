(function () {
    window.onload = function () {
        let banner = document.getElementsByClassName("joinBanner")[0];
        window.onresize = function () {
            void 0
            if (parseInt(document.documentElement.clientWidth) < 470) {
                banner.src="../image/smallBanner.png"
                void 0
            }
        }
    }

}())