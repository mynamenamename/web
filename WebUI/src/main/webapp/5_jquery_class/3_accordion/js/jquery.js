$(function(){
	$('.accordion').each(function(){
	
	var allDt = $(this).find('dt');
	var allDd = $(this).find('dd');
	
	
	allDd.hide();
	allDd.first().show();
	
	allDt.css({'cursor':'pointer'})	
	
	allDt.click(function(){
		 //alert('ok')
		 
	//다 닫고 이벤트가 발생한 것만 열기
		allDd.hide();  // 다 닫고 - 없으면 다 열려있음
		$(this).next().show() // 이벤트가 발생한 것만 열기
	});
		
	})
})