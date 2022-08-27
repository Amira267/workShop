var shap = prompt("enter the name of the shape :\n (Triangle, Rectangle, Square, Circle, widthParallelogramb, Trapezium, Ellipse)")

switch(shap){
    case "triangle":
        var b =Number(prompt("Enter the base of triangle in cm unit"))
        var h =Number(prompt("Enter the height of triangle in cm unit"))
        alert("The area of the triangle is \n"+  1/2 *b*h) 
    break;
    case "rectangle":
        var l =Number(prompt("Enter the length of rectangle in cm unit"))
        var w =Number(prompt("Enter the width of rectangle in cm unit"))
        alert("The area of the rectangle is \n"+ l*w) 
    break;
    case "square":
        var a =Number(prompt("Enter the length of side in cm unit"))
        alert("The area of the circle is \n"+ Math.pow(a,2))     
    
    break;
    case "circle":
        var r =Number(prompt("Enter the radius of circle in cm unit"))
        alert("The area of the circle is \n"+ Math.PI * Math.pow(r,2)) 
    break;
    case "parallelogram":
        var b =Number(prompt("Enter the base of Parallelogram in cm unit"))
        var h =Number(prompt("Enter the vertical height of Parallelogram in cm unit"))
        alert("The area of the Parallelogram is \n"+ b * h) 
    break;
    case "trapezium":
        var a =Number(prompt("Enter the base 1 of heightTrapezium in cm unit"))
        var b =Number(prompt("Enter the base 2 of heightTrapezium in cm unit"))
        var h =Number(prompt("Enter the height of heightTrapezium in cm unit"))
        alert("The area of the heightTrapezium is \n"+ 0.5*(a+b) * h) 
    break;
    case "ellipse":
        var a =Number(prompt("Enter the ½ minor axis of Ellipse in cm unit"))
        var b =Number(prompt("Enter the ½ major axis of Ellipse in cm unit"))
        alert("The area of the Ellipse is \n"+ Math.PI*a*b) 
    break;
}

