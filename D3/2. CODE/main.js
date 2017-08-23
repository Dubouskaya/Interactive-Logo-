document.onreadystatechange = function () {
    d3.select("body").style("background-color", "yellow");
	// Get the Object by ID
	var a = document.getElementById("bkr_object");
	// Get the SVG document inside the Object tag
	var svgDoc = a.contentDocument;
	// Get one of the SVG items by ID;
	var svgItem = svgDoc.getElementById("B");
	// Set the colour to something else
	svgItem.setAttribute("fill", "lime");
    var d3_B = d3.select(document.getElementById('bkr_object').contentDocument).select("#B");
    var d3_K = d3.select(document.getElementById('bkr_object').contentDocument).select("#K");
    var d3_R = d3.select(document.getElementById('bkr_object').contentDocument).select("#R");
    var d3_circle = d3.select(document.getElementById('bkr_object').contentDocument).select("#BKR_circle");
    
    d3_circle
        .transition()
        .ease(d3.easeBounce)
        .attr("transform", "translate(0 , 200)")
        .attr('fill', 'blue')
        .delay(200)
        .duration(2000)
        .on('end', function(){
            d3_R
                .transition()
                .attr("transform", "translate(0 , -130)")
                .delay(200)
                .duration(1000)
                .transition()
                .ease(d3.easeQuadOut)
                .attr('transform', 'translate(0,0)')
                .duration(500)
                .delay(1000);
            d3_circle
                .transition()
                .ease(d3.easeBounce)
                .attr("transform", "translate(0 , 0)")
                .attr('fill', 'red')
                .delay(200)
                .duration(2000);
    });
    d3_K
        .transition()
        .attr("transform", "translate(150 , 130)")
        .delay(200)
        .duration(1000)
        .transition()
        .ease(d3.easeElasticIn)
        .attr("transform", "translate(0 , 0)")
        .delay(200)
        .duration(1000);
    d3_B
        .attr('cx', 40)      // position the circle at 40 on the x axis
        .attr('cy', 250)     // position the circle at 250 on the y axis
        .transition()        // apply a transition
        .duration(2000)      // apply it over 2000 milliseconds
        .attr('cx', 920)     // move the circle to 920 on the x axis
        .transition()        // apply a transition
        .duration(2000)      // apply it over 2000 milliseconds
        .attr('cx', 40)      // return the circle to 40 on the x axis
        .on("end", repeat);  // when the transition finishes start again
    
    var d3_svg = d3.select(document.getElementById('bkr_object').contentDocument).select("#bkr_svg");
};