//var toggle = document.querySelector('.tog').addEventListener('click', function(){
//     if(document.querySelector('.l').style.display = "none"){
//         document.querySelector('.l').style.display = "block";
//     }
//     else{
//         document.querySelector('.l').style.display = "none";
//     }
//  })
window.addEventListener("scroll", function(){
    if(document.body.scrollTop > 900 || document.documentElement.scrollTop > (20)){
        document.querySelector('.up').style.display = "block";
    }
    else{
        document.querySelector('.up').style.display = "none";
    }

});
document.querySelector('.up').addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}); 

$(document).ready(function(){
var tog = document.querySelector('.tog');
var l = document.querySelector('.l');

     $(tog).on('click', function(){
        $(l).toggle(1000).behavior = "smooth";

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
     })
})


document.querySelector('#drive').addEventListener('click', function(){
    if(document.querySelector('.forIris').style.display = "none"){
        document.querySelector('.forIris').style.display = "block";
    }
    else{
        document.querySelector('.forIris').style.display = "none";
    }
})

