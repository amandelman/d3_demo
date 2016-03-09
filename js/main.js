/* 575 boilerplate main.js */

//execute script when window is loaded
window.onload = function(){   
    
    var w = 900, h = 500; //set width and height variables
    
    var container = d3.select("body") //get the <body> element from the DOM
        .append("svg") //add an svg to the body
        .attr("width", w) //add a width for the svg using variable w
        .attr("height", h) //add a height for the svg using variable h
        .attr("class", "container"); //declare a class for the container
    
    var rectangle = container.append("rect") //append a rectangle svg to the container
        .datum(400) //declare a datum
        .attr("width", function(d) { //set a width calculated from the datum
            return d*2;
            
        })
        .attr("height", function(d){ //set a height calculated from the datum
            console.log(d);

            return d;
            
        })
        .attr("class", "rectangle"); //declare a class for the rect svg
    
    
    
    
    console.log(container);
}