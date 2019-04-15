(function(){
    window.onload= function(){
        let cooperImg = document.getElementsByClassName("cooperImg")[0]
        window.onresize=function(){
            console.log(document.documentElement.clientWidth)
            if(document.documentElement.clientWidth<200){
                cooperImg.src="../image/cooperMinImg.png";
                console.log(1)
            }
        }
    
    }

}())