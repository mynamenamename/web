$(function(){
	
	var topDiv = $('.tabSet');
	var anchors = topDiv.find('ul.tabs >li >a'); 
	var panelDivs = topDiv.find('div.panels >  div.panel')
	
	anchors.show();    // 탭 보이게 하게
	panelDivs.hide();  // 다 닫기
	
	var lastAnchor = anchors.filter('.on'); //on을 가지고 있는 a태그
	//var lastPanel = lastAnchor.attr('href'); // 그 중에서 href 값 얻어오기
	// alert(lastPanel); #panel1-1 글씨  
	//객체로 만들기
	var lastPanel = $(lastAnchor.attr('href'));
	lastPanel.show();
	
	 //n번째 클릭 시 이벤트 발생
	anchors.mouseover(function(){
		var currentAnchor = $(this); //눌려진애 
		var currentPanel  = $(currentAnchor.attr('href')); //눌려진 애의 href 값 -객체로
	    
	    //마지막에 눌려있던 패널 감추기   
	    lastPanel.hide();
	    //최근 선택한 앤쳐의 패널만 보이기
	    currentPanel.show();
	    
	    
	    lastAnchor.removeClass('on');
	    currentAnchor.addClass('on');
	    //밑에 지정하기 전에 해줘야 위에 색깔 바뀜
	    //색깔 바꾸기
	    
	    lastAnchor =currentAnchor;
	    lastPanel =currentPanel; 
	    //panel - 밑에 내용 
	    //anchor - 위의 버튼같은 것 
        	     
	}) 

	
})