function scrollfunction()
 {
if (document.documentElement.scrollTop> 200){
    document.getElementById("navbar").classList.add("noTrasparrent");
}
else{
    document.getElementById("navbar").classList.remove("noTransparrent");
}

window.onscroll= function (){
scrollfunction();
}

}