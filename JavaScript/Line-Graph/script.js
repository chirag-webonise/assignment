//this Function Draw Line Graph on the canvas as per the form field values.
function drawIt()
{

    var canvas = document.getElementById("graph");
    var context = canvas.getContext("2d");
    var equation = document.getElementById("equation").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var steps = document.getElementById("steps").value;


    context.restore();                                              				//resets canvas
    canvas.width = canvas.width;

    context.translate(500,300);                                     				//changing origin to mid of the canvas.
    context.scale(1,-1);                                            				//changing orientation of axis

	
	
    if (equation.match(/^\s*$/))                                    				//checking if there is any equation or not.
    {		
        alert("Enter A Equation For Line");
        resetIt();
    }

    var str1 = equation.replace(/\s/g, "");                           				//removing extra spaces from line equation.

    if (!str1.contains("x"))                                           				//extarcting slope.
        var slope = 0;
    else
    {
        slope = parseInt(/\-?\d*x/gi.exec(str1));
        if (isNaN(slope) && str1.match(/\-x/))
            slope = -1;
        else if (isNaN(slope) && str1.match(/\+?x/))
            slope = 1;
    }

    if (!str1.contains("y"))                                                    		//extracting coefficient of y
        var coefficientOfY = 0;			
    else
    {
        coefficientOfY = parseInt(/\-?\d*y/gi.exec(str1));
        if (isNaN(coefficientOfY) && str1.match(/\-y/))
            coefficientOfY = -1;
        else if (isNaN(coefficientOfY) && str1.match(/\+?y/))
            coefficientOfY = 1;
    }

    var intercept = /[\-|\+]?\d*[^xy]$/.exec(str1);                             		//extracting constant
    if (isNaN(parseInt(intercept)))
        intercept = 0;

    if (isNaN(parseInt(from)) || isNaN(parseInt(to)) || isNaN(parseInt(steps))) 		//checking if all values are number or not.
    {
        alert("Enter Numerical Values for \"From\" \"To\" And \"Spaces\" Fields");
    }

    if (coefficientOfY > 1 || coefficientOfY < 0)                               		//converting slope and intecepy as per y=mx+c.
    {
        slope = (slope / coefficientOfY);
        intercept = (parseInt(intercept) / coefficientOfY);
    }

    var x1 = parseInt(from);                                                    		//calculating cordinates to draw line. 
    var x2 = parseInt(to);
    var y1 = (slope*x1)+parseInt(intercept);
    var y2 = (slope*(x2-x1))+y1;

    context.moveTo(-500,0);                                                     		//drawing axis and line
    context.lineTo(500,0);
    context.stroke();
    context.moveTo(0,-300);
    context.lineTo(0,300);
    context.stroke();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
    context.strokeText("0",-20,-20);

    for (var i = x1; i <= x2; i += parseInt(steps))                             		//drawing steps..
    {
        context.strokeText((i) + "", i,-15);
        context.moveTo(i,0);
        context.lineTo(i,y2);
        context.stroke();       
    }

}

//this function resets whole application.
function resetIt()
{
    	var canvas = document.getElementById("graph");
    	var context = canvas.getContext("2d");
	context.restore();                                                      
	canvas.width = canvas.width;           							//resetting canvas.
	document.getElementById("myform").reset();                              		//resetting form field's values
}

