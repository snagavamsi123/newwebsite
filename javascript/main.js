//for smooth scrool

$('.maindiv a').on("click",function(e){

if(this.hash != ''){
    e.preventDefault();
    const hash =this.hash;
    $('html, body').animate({scrollTop: $(hash).offset().top},800);
}

})


//this is for desktop mode warning
// $(document).ready(function(){    
//     if(document.URL.indexOf("#")==-1){ //Check if the current URL contains '#'
//         url = document.URL+"#"; // use "#". Add hash to URL
//         location = "#";
//         location.reload(true); //Reload the page
//     }
// });


function desktopmode(){

    if(window.location.href=='http://127.0.0.1:5500/index.html' || window.location.href=="http://127.0.0.1:5500"){
        alert('Use Desktop Mode for better UI')
    }

}
