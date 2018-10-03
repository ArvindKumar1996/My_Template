$(document).ready(function(){
	$(window).scroll(function(){
		var $target=$(this);
		if($target.scrollTop()>$("#header").outerHeight())
		{
			$(".navbar").addClass("bg-dark");
		}
		else{
			$(".navbar").removeClass("bg-dark");
		}
	});
	$(".item").click(function(){
		$(".item").css("border","initial");
		$(".item").css("color","initial");
		$(this).css("border","1px solid blue");
		$(this).css("color","#4bcaff");
	});
});