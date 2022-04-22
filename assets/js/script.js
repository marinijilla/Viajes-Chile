$(function(){

    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
  
        var gato = this.hash;
  
        $("html, body").animate({
          scrollTop: $(gato).offset().top
        }, 800, function(){
          window.location.hash = gato;
        });
      }
    });
  
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
    $(document).ready(function()
    {
        $(window).scroll(function()
        {
            if($(this).scrollTop() > 200)
            {
                $('.navbar').addClass('solid');
            }
            else
            {
                $('.navbar').removeClass('solid');
            }
        });
    });
  });
  $(document).ready(function(){
    $("H3").dblclick(function(){
      $(this).css("color", "red");
    });
  });

  $('.card-title').click(function() {
    $('.card-text').toggle();
  });
  
