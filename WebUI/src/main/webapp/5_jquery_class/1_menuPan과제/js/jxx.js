$(document).ready(function(){
   var a =0;
   $('.menuCount').change(function(){
   
      //목록에 띄우기
      //2. 사용자가 입력한 값을 가져오기
    //  var name  = $('#label1').html();
       var name = $(this).parent().find('span:eq(0)').text();
       var price1 = $(this).parent().find('span:eq(1)').text();
       var total = $('#total').val();
       var count = $(this).parent().find('select').val();
      
      
      
      
          a += count*price1
      //alert(a+'원');
      $('#total').val(a);
      
       //3. 동적으로 tr/td 요소를 만들어서
        var tr = $('<tr/>'); 
       var td1 = $('<td class= "name"/>').text(name);
       var td2 = $('<td  class = "count" />').text(count);
       var td3 = $('<td  class = "price1" />').text(price1*count) ;
       var td5 = $('<td><button class = "btn">삭제</button></td>');
       
       //4. 테이블 붙히기
       tr.append(td1);
       tr.append(td2);
       tr.append(td3);
       tr.append(td5);

       $('#listTable').append(tr); 
   
    //5.삭제하기
    td5.click(function(){
      
      var price2 = $(this).parent().find('td:eq(2)').text();
      a -=price2;
      $('#total').val(a); 
         $(tr).remove();
   
      });
    
      });
      
      $('#btn').click(function(evt){
  
       var page =  $('#total').val();
       alert('주문확인' )
       var winObj = window.open('sub.html','','width=300, height=400');
   
      
      
      
    }); 
      
      
   })
      