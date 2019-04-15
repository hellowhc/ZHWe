(function(){
    // 改变头部
    let navHeight = 206;
    var joinusBanner = document.getElementsByClassName("joinUsBanner")[0];
    let btn = document.getElementsByClassName("btn")[0];
    let navView = document.getElementsByClassName("right_nav")[0];
    let flag = true;
        btn.ontouchstart=function(){
            console.log(1)
            if(flag){
                flag =false;
                navView.style.height = navHeight+"px";
            }else{
                flag =true;
                navView.style.height = 0+"px";
            }
        }



}())