

  // With JQuery
	$('#ex1').slider({
		formatter: function(value) {
			return  value + ' km/h';
		}
	});





	$(function(){
		$("#submit").on("click", function () {
			$(this).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
				$(this).removeClass('animated bounceIn');
			});
		});
	});
	
	$(function(){
		$(".select-styled").on("click", function () {
			$('.select').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
				$('.select').removeClass('animated bounceIn');
			});
		});
	});

	$(function(){
		$("input").on("click", function () {
			$(this).next('label').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
				$("input").next('label').removeClass('animated bounceIn');
			});
		});
	});

	$(function(){
		$("#submit").on("click", function () {
			$(".finale--car").addClass('animated animatedx fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
				$(".finale--car").removeClass('animated animatedx fadeInRight');
			});
		});
	});

	$(document).ready(function () {
			$("#play").unbind().on("click", function () {
				$(".page--second").addClass("hidden");
				$(".page--first").removeClass("hidden");
				$(".finale--img").addClass("hidden");
			});
	});


	
	 
//
//$("select" ).change(function() {
//    var str = "";
//    $( "select option:selected" ).each(function() {
//      str += $( this ).text() + " ";
//    });
//    $( "#op" ).text( str );
//  })
//  .trigger( "change" );
//
//$(document).on("change","select",function(){
//  $("option[value=" + this.value + "]", this)
//  .attr("selected", true).siblings()
//  .removeAttr("selected")
//});



// car showing

	$(document).ready(function () {
			$("#submit").unbind().on("click", function () {
					if ($("#radio1").is(':checked') && $("#radio4").is(':checked')) {
							$("#car1gray").removeClass("hidden");
							$("#img2").addClass("hidden");
					}
					else if ($("#radio1").is(':checked') && $("#radio5").is(':checked')) {
							$("#car1green").removeClass("hidden");
					}
					else if ($("#radio1").is(':checked') && $("#radio6").is(':checked')) {
							$("#car1turquoise").removeClass("hidden");
					}
					else if ($("#radio2").is(':checked') && $("#radio4").is(':checked')) {
							$("#car2gray").removeClass("hidden");
					}
					else if ($("#radio2").is(':checked') && $("#radio5").is(':checked')) {
							$("#car2green").removeClass("hidden");
					}
					else if ($("#radio2").is(':checked') && $("#radio6").is(':checked')) {
							$("#car2turquoise").removeClass("hidden");
					}
					else if ($("#radio3").is(':checked') && $("#radio4").is(':checked')) {
							$("#car3gray").removeClass("hidden");
					}
					else if ($("#radio3").is(':checked') && $("#radio5").is(':checked')) {
							$("#car3green").removeClass("hidden");
					}
					else if ($("#radio3").is(':checked') && $("#radio6").is(':checked')) {
							$("#car3turquoise").removeClass("hidden");
					}

					if ($("#radio7").is(':checked')) {
							$("#tire1").removeClass("hidden");
					}
					else if ($("#radio8").is(':checked')) {
							$("#tire2").removeClass("hidden");
					}
					else if ($("#radio9").is(':checked')) {
							$("#tire3").removeClass("hidden");
					}

					if ($("#radio10").is(':checked')) {
							$("#window1").removeClass("hidden");
					}
					else if ($("#radio11").is(':checked')) {
							$("#window2").removeClass("hidden");
					}
					else if ($("#radio12").is(':checked')) {
							$("#window3").removeClass("hidden");
					}

				$(".page--second").removeClass("hidden");
				$(".page--first").addClass("hidden");
				var shapeValue =  parseInt($('input[name=shape]:checked').val());
				var colorValue =  parseInt($('input[name=color]:checked').val());
				var tireValue =  parseInt($('input[name=tire]:checked').val());
				var windowValue =  parseInt($('input[name=window]:checked').val());
				var sliderValue =  $('#ex1').attr('aria-valuenow', sliderValue).val();
				var dropdownValue = parseInt($('select').attr("selected", true).val());
			
				
				var finaleResult = 2000 + shapeValue + colorValue + tireValue + windowValue + parseInt(sliderValue) + dropdownValue;


				$("#result").text(finaleResult);

				
				$(this).tooltip('show');
				
			});
		});

	$(document).ready(function () {
		$("#submit").click(function () {
			$('html,body').animate({
					scrollTop: $(".page--first").offset().top + 420
			},
					'slow');
		});
	});

	$(document).on("change","select",function(){
		$("option[value=" + this.value + "]", this)
		.attr("selected", true).siblings()
		.removeAttr("selected");
	});