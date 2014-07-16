$(new Document).ready(function()

{
 
    $('.d').hover(function()                                                            // to show on which number mouse is over and then creating an effect
    { 
        $(this).css("border-color","black");						// to change border color.
    },
    function()
    {
        $(this).css("border-color","#99ff33");
    });
 

    $("#colordiv input:radio[name=color]").click(function()                             // takes the color in global variable radio_color so that the selected color
    {
        radio_color = $(this).val();							// can be used by colouring function.
    });
    

    $('.d').click(function()                                                             //colors the seleted number with selected color.
    {
        var c2 = $(this).css("background-color"); 
        if(c2==="rgb(255, 255, 255)")
            { 
              $(this).css("background-color",radio_color);
              $(this).css("color","white");
            }
        else
            alert("Coloring is done Already");
    });


    $('#reset').click(function()                                                       //this function is resetting the game to its original state.
    { 
       $("#r1").removeAttr("checked");
       $("#r2").removeAttr("checked");
       $("#r3").removeAttr("checked");
       
       $(".d").css("background-color","white");
       $(".d").css("color","grey");
       
       var x=1; 
       $(".d").each(function() 
       {
            if($(this).hasClass("d")) 
            {
                $(this).text(x++);
            }
       });
       
    });


    $.fn.shuffle = function() {							//this is shuffling logic which is called on the suffle button's click event.
 
        var allElems = this.get(),
            getRandom = function(max) {
            return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
 
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
 
        return $(shuffled);
 
    }
 


    $("#shuffle").click(function()                                                    //this is calling the suffle function and do the suffling.
    {
      $("#main .d").shuffle();
    });
}

);
