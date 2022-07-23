// product item and amound

document.getElementById('phone_decrment').addEventListener('click' , function(){
  hendelProductChinge('phone', true)
})
document.getElementById('phone_increment').addEventListener('click' , function(){
  hendelProductChinge( 'phone', false)
})


document.getElementById('case_decrment').addEventListener('click' , function(){
  hendelProductChinge('case', true)
})
document.getElementById('case_increment').addEventListener('click' , function(){
  hendelProductChinge('case',  false)
})


function hendelProductChinge(product , isIncrease ){
  let productInput = document.getElementById(product + '_count');
    const productCount = parseInt(productInput.value);
    let productNewCount = 0 ;
    if(isIncrease == true){
      productNewCount = productCount + 1
    }
    if(isIncrease == false && productCount > 0){
      productNewCount = productCount - 1
    }
    productInput.value = productNewCount;
    let productTotal = 0;
    if(product == 'phone'){
       productTotal = productNewCount * 1219;
    }
    if(product == 'case'){
     productTotal = productNewCount * 59;
    }
    document.getElementById(product +'_total').innerText = '$'+ productTotal;

    calculateTotal();
}

function calculateTotal(){
  const phoneCount = getInputValue('phone')
  const caseCount =   getInputValue('case')
  
  const totalPrice = phoneCount * 1219 + caseCount * 59;
  document.getElementById('total_price').innerText = totalPrice;

  const tex = Math.round(totalPrice * 0.1);
  document.getElementById('tex_amount').innerText = tex;
  const grandAmount = totalPrice + tex;

  document.getElementById('grand_Amount').innerText = grandAmount;

}

function getInputValue(product){
  const productInput = document.getElementById( product +'_count');
  const productCount = parseInt(productInput.value);
  return productCount;
}




// thrad
 
// function hendelProductChingePhone(isIncrease){
//   let phoneInput = document.getElementById('phone_count');
//     const phoneCount = parseInt(phoneInput.value);
//     let phoneNewCount = 0 ;
//     if(isIncrease == true){
//        phoneNewCount = phoneCount +1
//     }
//     if(isIncrease == false && phoneCount > 0){
//       phoneNewCount = phoneCount - 1
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone_total').innerText = '$'+ phoneTotal;
// }

// function hendelProductChingeCase(isIncrease){
//   let caseInput = document.getElementById('case_count');
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = 0 ;
//     if(isIncrease == true){
//       caseNewCount = caseCount +1
//     }
//     if(isIncrease == false && caseCount > 0){
//       caseNewCount = caseCount - 1
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case_total').innerText = '$'+ caseTotal;
// }




//  second

// document.getElementById('phone_decrment').addEventListener('click', function(){
//   let phoneInput = document.getElementById('phone_count');
//   const phoneCount = parseInt(phoneInput.value);
//   const phoneNewCount = phoneCount +1;
//   phoneInput.value = phoneNewCount;
//   const phoneTotal = phoneNewCount * 1219;
//   document.getElementById('phone_total').innerText = '$'+ phoneTotal;

// })
// document.getElementById('phone_increment').addEventListener('click' , function(){
//   let phoneInput = document.getElementById('phone_count');
//   const phoneCount = parseInt(phoneInput.value);
//   const phoneNewCount = phoneCount - 1;
//   phoneInput.value = phoneNewCount;
//   const phoneTotal = phoneNewCount * 1219;
//   document.getElementById('phone_total').innerText = '$'+ phoneTotal;
// })


// first - 

//  document.getElementById('itemMinus').addEventListener('click' , function(){
//    productMinusUpdate('productItem')
//    productAmountUpdate('productItem' ,'productAmount' ,1219)
//    totalAmountUpdate()
//  })

//  document.getElementById('itemPlus').addEventListener('click',function(){
//    productPlusUpdate('productItem')
//    productAmountUpdate('productItem','productAmount', 1219)
//    totalAmountUpdate()
    
//  })


//  document.getElementById('itemMinus-1').addEventListener('click', function(){
//    productMinusUpdate('productItem-1')
//    productAmountUpdate('productItem-1' ,'productAmount-1' , 59)
//    totalAmountUpdate()
//  })
//  document.getElementById('itemPlus-1').addEventListener('click', function(){
//    productPlusUpdate('productItem-1')
//    productAmountUpdate('productItem-1' ,'productAmount-1' ,59)
//    totalAmountUpdate()
//  })



//  function productPlusUpdate(id){
//    let productItemValue = parseFloat( document.getElementById(id).value)
//    productItemValue++
//    document.getElementById(id).value = productItemValue
//  }


//  function productMinusUpdate(id){
//    let productItemValue = parseFloat( document.getElementById(id).value)
//    productItemValue--
//    document.getElementById(id).value = productItemValue
//  }


//  function productAmountUpdate(id , valueId , sum){
//     const productItem = parseFloat( document.getElementById(id).value)
//     const itemAmount = sum * productItem 
//     document.getElementById(valueId).innerText = itemAmount ;
//  }    
//  productAmountUpdate('productItem','productAmount', 1219)
//  productAmountUpdate('productItem-1','productAmount-1', 59)
 
//  function totalAmountUpdate(){
//    const productAmount_1 = parseFloat(document.getElementById('productAmount-1').innerText) 
//    const productAmount = parseFloat(document.getElementById('productAmount').innerText)
//    const sumAmount = productAmount_1 + productAmount;
//    const totalAmount = document.getElementById('totalAmount').innerText = sumAmount;
//    const totalAmountUpdate = parseFloat(totalAmount)
//    const vat = parseFloat(document.getElementById('vat').innerText)
//    const curretAmount =  totalAmountUpdate - vat;
//    document.getElementById('netAmount').innerText = curretAmount;

//  }
//  totalAmountUpdate()