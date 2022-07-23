// product item and amound

 document.getElementById('itemMinus').addEventListener('click' , function(){
   productMinusUpdate('productItem')
   productAmountUpdate('productItem' ,'productAmount' ,1219)
   totalAmountUpdate()
 })

 document.getElementById('itemPlus').addEventListener('click',function(){
   productPlusUpdate('productItem')
   productAmountUpdate('productItem','productAmount', 1219)
   totalAmountUpdate()
    
 })


 document.getElementById('itemMinus-1').addEventListener('click', function(){
   productMinusUpdate('productItem-1')
   productAmountUpdate('productItem-1' ,'productAmount-1' , 59)
   totalAmountUpdate()
 })
 document.getElementById('itemPlus-1').addEventListener('click', function(){
   productPlusUpdate('productItem-1')
   productAmountUpdate('productItem-1' ,'productAmount-1' ,59)
   totalAmountUpdate()
 })



 function productPlusUpdate(id){
   let productItemValue = parseFloat( document.getElementById(id).value)
   productItemValue++
   document.getElementById(id).value = productItemValue
 }


 function productMinusUpdate(id){
   let productItemValue = parseFloat( document.getElementById(id).value)
   productItemValue--
   document.getElementById(id).value = productItemValue
 }


 function productAmountUpdate(id , valueId , sum){
    const productItem = parseFloat( document.getElementById(id).value)
    const itemAmount = sum * productItem 
    document.getElementById(valueId).innerText = itemAmount ;
 }    
 productAmountUpdate('productItem','productAmount', 1219)
 productAmountUpdate('productItem-1','productAmount-1', 59)
 
 function totalAmountUpdate(){
   const productAmount_1 = parseFloat(document.getElementById('productAmount-1').innerText) 
   const productAmount = parseFloat(document.getElementById('productAmount').innerText)
   const sumAmount = productAmount_1 + productAmount;
   const totalAmount = document.getElementById('totalAmount').innerText = sumAmount;
   const totalAmountUpdate = parseFloat(totalAmount)
   const vat = parseFloat(document.getElementById('vat').innerText)
   const curretAmount =  totalAmountUpdate - vat;
   document.getElementById('netAmount').innerText = curretAmount;

 }
 totalAmountUpdate()
 
 


