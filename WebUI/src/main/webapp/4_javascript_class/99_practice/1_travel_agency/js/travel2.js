window.onload=function(){
    
    var frm = document.getElementById('frm');
		//var inputs = document.querySelectorAll("input");
		frm.onsubmit = function(evt) {
			 evt.stopPropagation();  
			 evt.preventDefault();
		     
		// alert(frm.agree.checked);    
		
		if(!frm.checkbox.checked) { //체크 안했을 때
			alert('반드시 체크 해주세요111'); 
			return;          //밑에 있는거 실행 못하게
		}
			if(!frm.checkbox2.checked) { //체크 안했을 때
			alert('반드시 체크 해주세요222'); 
			return;             //밑에 있는거 실행 못하게
	   
	}
		
		//frm.submit();         //서브로 날릴때
		}
    

   
   adult.onchange = calc;      //calc();  XXXXX 호출하는거라서 하면 안됨
   child.onchange = calc;
   baby.onchange  = calc;
   
   function calc(){
         //alert(adult.value);
         total.value=(adult.value*39000)+(child.value*29000)+(baby.value*19000);
   }
   
   
} 