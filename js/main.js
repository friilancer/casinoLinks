    const navbar = document.querySelector('nav')
    const toplink = document.querySelector(".top-link")
$(window).on("scroll", function(){
    var scrollHeight = window.pageYOffset;
    var navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight){
        $('nav').addClass('black')
    }
    else{
        $('nav').removeClass('black')
    }

    if(scrollHeight > 500){
        // $('.top-link').addClass("show-link")
        toplink.classList.add("show-link");
    }
    else{
        // $('.top-link').removeClass("show-link")

        toplink.classList.remove("show-link");
    }
});

var date = document.getElementById('date')
date.innerHTML = new Date().getFullYear();
