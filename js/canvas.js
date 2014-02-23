$(function(){

	var options = {
        html : true, 
		animation: false,
		template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"><p></p></div></div></div>',
		placement: function (context, source) {
			var position = $(source).position();

			if (position.left > 515) {
				return "left";
			}
			if (position.left < 515) {
				return "right";
			}
			if (position.top < 110){
				return "bottom";
			}
			return "top";
		},
		trigger: "hover"
	};

	$('[rel=popover]').popover(options);
});		
