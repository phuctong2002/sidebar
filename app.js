const btn = document.getElementsByClassName("sidebar-toggle")[0];
const aside = document.getElementsByClassName("sidebar")[0];
const close = document.getElementsByClassName("close-btn")[0];
aside.classList.add("show-sidebar");
btn.addEventListener( "click", function(){
    // if( aside.classList.contains("show-sidebar")){
    //     aside.classList.remove("show-sidebar");
    // }else{
    //     aside.classList.add("show-sidebar");
    // }
    aside.classList.toggle("show-sidebar");
});
close.addEventListener("click", function(){
    aside.classList.toggle("show-sidebar");
});