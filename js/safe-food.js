$(document).ready(function(){

	// set the initial transparency of the intro
	$('#intro').css({ 'opacity' : 0.95 });

	// hover over a person
	$(".person-photo img").hoverIntent({
		over: personOver, 
		timeout: 100, 
		out: personOut
	});

	// open a person's bio
	$(".person-photo img").click(function() {
		$('#intro').css({ 'z-index' : 0 });
		$("#show-intro").hide();
		$('#'+$(this).attr('id')+'-title').hide();
		$('#'+$(this).attr('id')+'-bio').show();
		$('#close-button').show();
	});

	// close bio
	$("#close-button").click(function() {
		$('#close-button').hide();
		$('.person-bio').hide();
		$("#show-intro").show();
	});

	// close intro
	$("#close-intro-button").click(function() {
		$('#intro').css({ 'z-index' : 0 });
		$('#show-intro').show();
	});

	// open intro
	$("#show-intro").click(function() {
		$('#intro').css({ 'z-index' : 1000 });
		$("#show-intro").hide();
	});

});

function personOver() {

	// element alias
	var e = '#' + $(this).attr('id');
	var ep = '#' + $(this).parent('div').attr('id');
	var pos = $(ep).css('backgroundPositionX');

	// fade people containers back
	$('.person-photo').css({ 'opacity' : 0.3 });

	// set the opacity of the selected person to 100% and swap the parent background
	$(ep).css({ 'opacity' : 1 });

	// swap out the background image with the over state
	$(ep).css({ 'background' : 'url(img/new-people/safe-food-over.jpg) ' + pos });

	// reveal persons title
	$(e + '-title').slideDown('fast', function() {});
}

function personOut() {

	// element alias
	var e = '#' + $(this).attr('id');
	var ep = '#' + $(this).parent('div').attr('id');
	var pos = $(ep).css('backgroundPositionX');
	
	// set back to the inital state
	$(ep).css({ 'background' : 'url(img/new-people/safe-food-up.jpg) ' + pos });

	// hide the persons title
	$(e + '-title').hide();

	// bring others back to 100% opacity
	$('.person-photo').css({ 'opacity' : 1.0 });
}