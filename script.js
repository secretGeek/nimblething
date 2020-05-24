// Function to slabtext the H1 headings
function slabTextHeadlines() {
	$("h1").slabText({
					// Don't slabtext the headers if the viewport is under 380px
		"viewportBreakpoint":380
	});
};

// Called one second after the onload event for the demo (as I'm hacking the fontface load event a bit here)
// you should really use google WebFont loader events (or something similar) for better control
$(window).load(function() {
	setTimeout(slabTextHeadlines, 12);
});