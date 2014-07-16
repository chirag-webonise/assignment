function drawIt()
{
	
	var c = document.getElementById("graph");
	var ctx = c.getContext("2d");
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.moveTo(50,50);
	ctx.lineTo(50,550);
	ctx.stroke();
	ctx.moveTo(50,550);
	ctx.lineTo(950,550);
	ctx.stroke();
	ctx.font = "10px Arial";
	ctx.strokeText("0",40,570);
                
	var e=document.getElementById("equation").value;
        var f=document.getElementById("from").value;
	var t=document.getElementById("to").value;
	var s=document.getElementById("steps").value;
        
        if(e.match(/^\s*$/))
            {
                alert("Enter A Equation For Line");
                resetIt();
            }      

        if(isNaN(parseInt(f))||isNaN(parseInt(t))||isNaN(parseInt(s)))
            {
                alert("Enter Numerical Values for From To And Spaces Field");
            }
        
  
        var str1 = e.replace(/\s/g,"");

        var str= str1.split("=");
        var slope="",y="",intercept="";
        for(var i=0;i<str.length;i++)
            {
                if (str[i].contains("+"))
                    {
                        var a = str[i].split("+");
                        for(var j=0;j<a.length;j++)
                            {
                                if(a[j].contains("x"))
                                    slope=parseInt(a[j]);
                                else if(a[j].contains("y"))
                                    y=parseInt(a[j]);
                                else if(!isNaN(a[j]))
                                    intercept=a[j];
                                else
                                    intercept=0;
                            }
                    }
                else
                    {
                        if(str[i].contains("x"))
                            slope=parseInt(str[i]);
                        else if(str[i].contains("y"))
                            y=parseInt(str[i]);
                        else if(!isNaN(str[i]))
                            intercept=parseInt(str[i]);
                        else
                            intercept=0;
                    }
            }

        if(isNaN(slope)&&(str1.match(/[y0-9=+]*-x[y0-9=+]*/)))
         	slope=-1;
	else if(isNaN(slope)&&(str1.match(/[y0-9=+]*-\dx[y0-9=+]*/)))
		slope=parseInt(slope);
	else
		slope=1;
        
	if(isNaN(y)&&(str1.match(/[x0-9=+]*-y[x0-9=+]*/)))
        	y=-1;
	else if(isNaN(y)&&(str1.match(/[x0-9=+]*-\dy[x0-9=+]*/)))
		y=parseInt(y);
	else
		y=1;


        if(y>1||y<0)
       	{
         	slope=slope/y;
                intercept=intercept/y;
      	}

           
        var x1 = parseInt(f)+50;
        var x2 = parseInt(t)+50;
        var y1 = 550-intercept;
        var y2 = 550-( (slope*(parseInt(t)-50) )+intercept );
	
        if(x1<50)
            x1=50;
        if(x2>950)
            x2=950;
        if(y1>550)
            y1=550;
        if(y2<50)
            y2=50;
	alert(x1+" "+y1+"   "+x2+" "+y2);
  
        ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
        
	for(var i=x1;i<=x2;i+=parseInt(s))
	{
        	ctx.strokeText((i-50)+"",i,565);
		ctx.moveTo(i,545);
		ctx.lineTo(i,555);
		ctx.stroke();
	}

	for(var i=y2;i<=y1;i+=parseInt(s))
	{
                ctx.strokeText((550-i)+"",25,i);
		ctx.moveTo(45,i);
		ctx.lineTo(55,i);
		ctx.stroke();
	}
}
function resetIt()
{
    var c = document.getElementById("graph");
    var ctx = c.getContext("2d");   
    ctx.clearRect(0, 0, c.width, c.height);
    document.getElementById("myform").reset();
}
