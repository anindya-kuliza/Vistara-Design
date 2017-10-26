'use strict';
(function() {
	$(document).ready(function() {
		init();
		//For Tab Responsive Flight Passes icon enable/disable code in just below 2 lines.
		$('.book').on('click', function(){
        $('.passes span#passes_icon_change').removeClass('passes_icon_active').addClass('passes_icon');
		});
		
		/* $('.carousel-indicators li.indicator-icon').on('click', function(){
    
            $('.carousel-indicators li').removeClass('active');
	        $(this).addClass('active') .attr("data-target || href");
   
       }); */
		$(".arrow-up").hide();
        $(".left-grid").click(function(){
            
            $(this).find(".arrow-up, .arrow-down").toggle();
         });
		
	});
	var activeDealList, dealLists;

	function addDealListEventListener() {
		dealLists.on('click', function() {
			var $this = $(this);
			$this.insertBefore($('#deals_list li').eq(0));
			activeDealList.removeClass('active').insertAfter($('#deals_list li').eq(4));
			$this.addClass('active');
			$(activeDealList.data('target')).addClass('hide');
			$($this.data('target')).removeClass('hide');
			activeDealList = $this;
		});
	}

	function addFooterCollapseListener() {
		$('.js-collapse-list').on('click', function(e) {
			e.preventDefault();
			var flag = $(this).find('.js-collapse-content').hasClass('hide-content');
			if (flag)
				$(this).find('.js-collapse-content').removeClass('hide-content').addClass('show-content');
			else
				$(this).find('.js-collapse-content').removeClass('show-content').addClass('hide-content');
		});
	}

	function initCalendar(setMonth) {
		var dateObj = new Date();
		dateObj.setMonth(setMonth);
		dateObj.setYear(dateObj.getFullYear());
		var dp = $('<div id="calendar"> </div>');
		$('#calendar_container').append(dp);
		dp.datepicker({
			dayNamesMin: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
			defaultDate: dateObj,
			showOtherMonths: true,
			selectOtherMonths: true,
			dateFormat: 'dd-mm-yy',
			onSelect: function(date, picker){ console.log(date) }
		});
	}

	function updateCalendar(setMonth, setYear) {
		var currDate = $('#calendar').datepicker('getDate');
		if (setMonth)
			currDate.setMonth(setMonth);
		else
			currDate.setYear(setYear);
		$('#calendar').datepicker('setDate', currDate);
	}

	function addAndRemoveActiveClass(parentSelector, thisSelector) {
		$(parentSelector + ' li.active').removeClass('active');
		$(thisSelector).addClass('active');
	}

	function addChangeCalendarListener() {
		$('#list_of_month').on('click', 'li', function(){
			var setMonth = this.id;
			updateCalendar(setMonth, null);
			addAndRemoveActiveClass('#list_of_month', this);
		});
		$('#list_of_year').on('click', 'li', function(){
			var setYear = this.id;
			updateCalendar(null, setYear);
			addAndRemoveActiveClass('#list_of_year', this);
		});
	}

	function addTabListListener() {
		var tabList = $('#js-tabs-list li');
		var activeTabContent = null;
		tabList.on('click', function() {
			tabList.removeClass('active');
			$(this).addClass('active');
			if(activeTabContent) {
				$(activeTabContent).hide();
				activeTabContent = $(this).data('id');
			}
			else {
				activeTabContent = $(this).data('id');
				$('#js-tabs-list').css({'border':'2px solid #34202C', 'border-bottom': 'none'});
				$('.tabs-panel-wrapper').css({'border':'2px solid #34202C', 'border-top': 'none'});
			}
			console.log(activeTabContent);
			$(activeTabContent).removeClass('hide').show();
		});
	}

	function initializenavigationbar()
	{
		$(".navigation-bar-responsive .tile").click(function()
	  {
			if($(this).hasClass('show-submenu')) {
				$(this).removeClass('show-submenu');
			} else {
				$(this).siblings().removeClass('show-submenu');
				$(this).addClass('show-submenu');
			}
	  });

	  $(".menu-button").click(function()
	  {
	    $(".navigation-bar-responsive").css({'display': 'flex','display': '-webkit-flex'})
	  });

	  $(".back-icon").click(function()
	  {
	    $(this).parent().siblings().each(function()
	    {
	      $(this).children().filter("img").css("transform","rotate(0deg)");
	    });
	    $(this).parent().siblings().filter(".sub-menu").css("display","none");
	    $(".navigation-bar-responsive").css("display","none");
	  });

	  $("#lang-select").click(function()
	  {
	    var state= $(".language-select-dropdown").css("display");
	    if(state=="none")
	    {
	      $(".language-select-dropdown").css("display","block");
	      $(this).css("transform","rotate(180deg)");
	    }
	    else
	    {
	      $(".language-select-dropdown").css("display","none");
	      $(this).css("transform","rotate(0deg)");
	    }
	  });
	  $(".navbar-language-select-dropdown").mCustomScrollbar({
			theme: "minimal-dark",
			scrollInertia: 10
		});
		$('.mCSB_draggerContainer').click(function(e) {
			e.stopPropagation();
		});
	  //$(".language-select-dropdown").css("display","none");

	  var num = 50; //number of pixels before modifying styles

	  if ($(window).scrollTop() > num) {
	      $('.navigation-bar').css("background-color","#fff");
	  } else {
	    $('.navigation-bar').css("background-color","transparent");
	  }

	  $(window).bind('scroll', function () {
	      if ($(window).scrollTop() > num) {
	          $('.navigation-bar').css("background-color","#fff");
	      } else {
	        $('.navigation-bar').css("background-color","transparent");
	      }
	  });
	}

	function truncatedInfoText() {
		$('#header_info_carousel').on('slid.bs.carousel', function () {
		  var a = document.querySelector('.header-info-wrapper .active .info-text');
			if(a.scrollWidth === a.offsetWidth) {
				$('.header-info-wrapper .active .know-more').addClass('hide-el');
			} else {
				$('.header-info-wrapper .active .know-more').removeClass('hide-el');
			}
		});
	}

	function init() {
		$('.select').selectmenu();
		console.log('Hello World!');
		activeDealList = $('#deals_list li.active');
		dealLists = $('#deals_list li');
		$('#pause_carousel').on('click', function() {
			$('.carousel').carousel('pause');
		});
		$('.destination-deal-carousel').carousel({
			interval: false
		});
		addDealListEventListener();
		addFooterCollapseListener();
		initCalendar(6);
		addChangeCalendarListener();
		addTabListListener();
		truncatedInfoText();
		initializenavigationbar();

	}

})();

// $(window).resize(function() {
		// 	console.log($(window).width());
		// 	if ($(window).width() <= 768) {
		// 		$('.carousel-inner .item img').attr('src', 'img/banner-Image-for-mobile.png');
		// 	} else {
		// 		$('.carousel-inner .item img').attr('src', 'img/banner-image.png');
		// 	}
		// });
		
		
		

