$(document).ready(function() {
var margin = {
    top: 25,
    right: 75,
    bottom: 85,
    left: 85
},
    w = 600 - margin.left - margin.right,
    h = 350 - margin.top - margin.bottom;
var padding = 10;

var colors = [
    ["age", "blue"]
];

var xScale = d3.scale.ordinal()
    .domain(d3.range(dataset.length))
    .rangeRoundBands([0, w], 0.05);
// ternary operator to determine if global or local has a larger scale
var yScale = d3.scale.linear()
    .domain([0, d3.max(dataset, function (d) {
    return d.age;
})])
    .range([h, 0]);
var xAxis = d3.svg.axis()
    .scale(xScale)
    .tickFormat(function (d) {
    return dataset[d].name;
})
    .orient("bottom");
var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left")
    .ticks(5);

var commaFormat = d3.format(',');

//SVG element
var svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", w + margin.left + margin.right)
    .attr("height", h + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Graph Bars
var sets = svg.selectAll(".set")
    .data(dataset)
    .enter()
    .append("g")
    .attr("class", "set")
    .attr("transform", function (d, i) {
    return "translate(" + xScale(i) + ",0)";
});


    sets.append("rect")
        .attr("class", "age")
        .attr("width", xScale.rangeBand() / 2)
        .attr("y", function (d) {
        return yScale(d.age);
    })
        .attr("height", function (d) {
        return h - yScale(d.age);
    })
        .attr("fill", colors[0][1])
;

    // xAxis
    svg.append("g") // Add the X Axis
    .attr("class", "x axis")
    .attr("id", "x")
        .attr("transform", "translate(0," + (h) + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", function (d) {
        return "rotate(-30)";
    });
    // yAxis
    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(0 ,0)")
        .call(yAxis);
    // xAxis label
    svg.append("text")
        .attr("transform", "translate(" + (w / 2) + " ," + (h + margin.bottom - 5) + ")")
        .style("text-anchor", "middle")
        .text("Names");
    //yAxis label
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (h / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("ages");
});