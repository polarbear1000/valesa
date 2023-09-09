$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Contractor", "Architect", "Businessman", "Home Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Contractor", "Architect", "Businessman", "Home Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    });
    var typed = new Typed(".typing-3", {
        strings: ["Ray Valentino, the founder of Valesa Contractors, was the embodiment of a skilled contractor and a dedicated worker. From humble beginnings, Ray honed his craft through sweat and determination. His hands, weathered from years of labor, possessed an innate understanding of construction.Rays reputation grew as he tackled complex projects with precision and passion. He built bridges that connected communities and skyscrapers that touched the heavens. His work ethic was unmatched, leading by example on job sites, working alongside his crew, and earning their respect.Valesa Contractors flourished under Ray's leadership, a testament to his unwavering commitment to quality and hard work. Ray Valentino, a legend in the industry, forever an inspiration to all who followed in his footsteps"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true 
    });
    var typed = new Typed(".typing-4", {
        strings: ["Ray Valentino, a paragon of skill and experience in the contracting world, boasted a storied career that spanned decades. His mastery of the trade was a testament to his unwavering dedication. With a tool belt slung low, Ray could transform raw materials into architectural marvels. His seasoned eyes discerned flaws invisible to others.From renovating historic landmarks to crafting modern marvels, Ray's portfolio was a symphony of craftsmanship. His expertise extended beyond construction; he navigated the intricacies of permits and regulations with finesse. Clients sought him out, knowing they would receive not only excellence in workmanship but also sage guidance.Ray Valentino, an indomitable force in the industry, continued to shape the world with his unparalleled skills and experience."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true 
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});