(function(){
    window.onload= function(){
        let cooperImg = document.getElementsByClassName("cooperImg")[0]
        window.onresize=function(){
            void 0
            if(document.documentElement.clientWidth<200){
                cooperImg.src="../image/cooperMinImg.png";
                void 0
            }
        }
    
    }

}())