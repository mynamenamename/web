$(function(){
	
	$('#hideButton').click(function(){
		$('#intro').hide(); 
		});
	
	
	$('#showButton').click(function(){
		$('#intro').show(); 
		});
	
	
	/*$('#toggleButton').click(function(){
		$('#intro img').toggle();  
		//fadeToggle(2000);  효과까지 가지고 있는 함수
		//slideToggle(2000);
		});*/
	
	
	//원리대로!
	$('#toggleButton').click(function(){
	if( $('#intro').is(':visible'))
	{
		 $('#intro').fadeOut(1000);
	}else{
		 $('#intro').fadeIn(1000);
	}
	});
	
	
	//테이블의 내용 중 홀수행 배경색 지정
	//$('#celebs table.data > tbody > tr:even').css({'background':'lightpink'})
	          //인덱스가 0번부터 시작이라 odd가 아닌 even!
	$('#celebs table.data > tbody > tr:even').addClass('table_striping');
	//base.css에서 따온 것!
	 
	 
	// $('#celebs tr').hover ~ 선생님은 이렇게 하심 
	var c = $('#celebs table.data > tbody > tr');
	//마우스가 올라갔을 때 배경색이 바꾸ㅣ고, 마우스 나왔을 때 원상복귀
     c.hover(function(){ //마우스 이벤트=hover
    	  $(this).addClass('td_mouseover')
    	}, function(){
    	  $(this).removeClass('td_mouseover')	
    	});
	 
	 
	 
})