$(document).ready(function(){


  var owl = $("#owl-demo");

  owl.owlCarousel({
      autoplay : true,
      items : 6, //10 items above 1000px browser width
      margin:20,
      responsiveClass:true,
      responsive:{
        0:{
              items:1,
            loop:true,
        },
        300:{
            items:1,
            loop:true,
        },
        600:{
            items:1,
            loop:true,
        },

        800:{
            items:2,
            loop:true
        },
        1200:{
            items:2,
            loop:true
        }
      }
      // itemsMobile disabled - inherit from itemsTablet option
  });
  // Custom Navigation Events
  var owl = $("#owl-demo1");

  owl.owlCarousel({
      autoplay : true,
      items : 6, //10 items above 1000px browser width
      margin:20,
      responsiveClass:true,
      responsive:{
        0:{
              items:1,
            loop:true,
        },
        300:{
            items:1,
            loop:true,
        },
        600:{
            items:3,
            loop:true,
        },

        800:{
            items:3,
            loop:true
        },
        1200:{
            items:4,
            loop:true,
        }
      }
      // itemsMobile disabled - inherit from itemsTablet option
  });

  // Custom Navigation Events
  var owl = $("#owl1");

  owl.owlCarousel({
      autoplay : true,
      items : 6, //10 items above 1000px browser width
      margin:20,
      responsiveClass:true,
      responsive:{
        0:{
              items:1,
            loop:true,
        },
        300:{
            items:1,
            loop:true,
        },
        600:{
            items:2,
            loop:true,
        },

        800:{
            items:3,
            loop:true
        },
        1200:{
            items:4,
            loop:true
        }
      }
      // itemsMobile disabled - inherit from itemsTablet option
  });

    $('.zoomple').zoomple({
    bgColor : '#90D5D9',
    offset : {x:-150,y:-150},
    zoomWidth : 230,
    zoomHeight : 230,
    roundedCorners : true
    });


    $(".btn-toggle").click(function(){
       $(this).parent().children(".drop-down").slideToggle("slow");
    });







    //
    // $(".nav-tabs a").click(function(){
    //     $(this).tab('show');
    // });
    // $('.dropdown-toggle').dropdown();


    $(".timer").countTo();



    var colorLi = $(".color-options li");
    colorLi.click(function(){
      $("link[href*='style']").attr('href', $(this).attr("data-value"));;
    });


    new $.Zebra_Accordion($('.Zebra_Accordion'));

});
