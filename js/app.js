function getEle(id){
    return document.getElementById(id);
}

function calculatorTip(){
    var tongBill =getEle("billamt").value; 
     var haiLongVaTip = getEle("serviceQual").value
     var SoNguoiShare = getEle("peopleamt").value

 
     //validation
     if(tongBill=== ""  || haiLongVaTip ==0 ){
         alert("vui lòng chọn giá trị");
         return;

     }
    // kiểm tra có nhập vào số người xe tip hay không
     if(SoNguoiShare ==="" || SoNguoiShare<=1){
         SoNguoiShare=1;
         getEle("each").style.display ="none"
     }else{
        getEle("each").style.display ="block"
     }
     
     // tính toán
     var tongTip = (tongBill * haiLongVaTip)/SoNguoiShare;
     
     //làm tròn dến phần thập phân có 2 chữ số!!
     tongTip =Math.round(tongTip*100)/100;

     // đảm bảo lúc lúc nào cũng có 2 chữ số phần thập phân
     tongTip = tongTip.toFixed(2);

     // hiển thị vùng div tiền tip
     getEle("totalTip").style.display ="block"
     getEle("tip").innerHTML=tongTip;

}
// ẩn khi chưa nhập gì
getEle("totalTip").style.display ="none"
getEle("each").style.display="none";



getEle("calculate").onclick =function(){
    calculatorTip();

}