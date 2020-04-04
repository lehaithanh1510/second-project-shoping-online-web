let arr = JSON.parse(localStorage.getItem('cartProduct'))
//console.log(arr)

document.querySelector('.cart-button').innerHTML=`Giỏ hàng (${arr.length})`
var finalPrice = 0 
for (let i =0 ;i<arr.length;i++) {
    finalPrice +=arr[i].price
} // TINH TONG TIEN
function isEqual(objA, objB) { // SO SANH HAI OBJECT
var aProps = Object.getOwnPropertyNames(objA);
var bProps = Object.getOwnPropertyNames(objB);
if (aProps.length != bProps.length) {
    return false;
}
for (var i = 0; i < aProps.length; i++) {
     var propName = aProps[i];          
     if (objA[propName] !== objB[propName]) {             
         return false;         
     }     
}
return true; 
} 
var newArr =[]; // MANG SAU XU LY THEM COUNT
var temp = arr[0];
newArr.push(temp)
for (let i=1 ;i <arr.length ;i++){ //  DUA CAC PHAN TU KHAC NHAU RA MANG MOI
    if (!isEqual(temp,arr[i])){
        newArr.push(arr[i])
    }
}
var count =[]
for (let i=0 ;i< newArr.length;i++) { // DEM SO LAN XUAT HIEN CUA TUNG PHAN TU 
    count[i] =0
    for (let j =0 ;j<arr.length;j++) {
        if (isEqual(newArr[i],arr[j])) {
            count[i]++
         }
    }
}
console.log(count)
for (let i= 0;i<newArr.length;i++){
    newArr[i].count = count[i]
}
console.log(newArr)
var totalProduct = 0  // TONG CAC SAN PHAM 
for (let i =0 ;i< newArr.length; i++) {
    totalProduct += count[i]
}
console.log(totalProduct)
function renderProduct() { // HIEN THI CAC ITEM 
        var html="<div class= 'heading-container'><div class = 'first-row'> <p class = 'cart product'> Sản Phẩm </p><p class = 'cart price'> Đơn giá </p><p class = 'cart number'> Số lượng </p><p class = 'cart total'> Thành tiền </p><p class = 'cart other'> </p</div></div><div class ='item-container' > <div class = next-row id= product-%id% > <div class = 'cart product'> <img src =%book-pic% class= 'product-img'><p class = 'product-des'> %description% </p></div><p class = 'cart-x price'> %price% đ </p><p class = 'cart-x number'> %number% </p><p class = 'cart-x total'> %total-price% </p><p class = 'cart-x other'> <button class = 'erase'> Xóa </button></p></div></div><div class = 'total-container'> <div class = 'final-row'><p class = 'total-content'> Tổng tiền (1 sản phẩm): </p><p class = 'final-price'> %final-price%đ</p><button class ='final-desicion'> Mua hàng</button></div></div>"
        var newhtml = html.replace('%book-pic%',newArr[0].pic)
        newhtml = newhtml.replace('%id%',0)
        newhtml = newhtml.replace('%description%',newArr[0].name)
        newhtml = newhtml.replace('%price%',newArr[0].price)
        newhtml = newhtml.replace('%number%',newArr[0].count)
        newhtml = newhtml.replace(' %total-price%',newArr[0].count * newArr[0].price)
        newhtml = newhtml.replace('%final-price%',finalPrice)
        document.querySelector('.cart-container').insertAdjacentHTML('beforeend',newhtml)
        for (let i=1; i<newArr.length;i++){
           var smallHtml = "<div class = next-row id= product-%id% > <div class = 'cart product'> <img src = %book-pic% class= 'product-img'><p class = 'product-des'> %description% </p></div><p class = 'cart-x price'> %price% đ </p><p class = 'cart-x number'> 1 </p><p class = 'cart-x total'> %total-price% </p><p class = 'cart-x other'> <button class = 'erase'> Xóa </button></p></div>"
           var newsmallHtml = smallHtml.replace('%book-pic%',arr[i].pic)
           var newsmallHtml = newsmallHtml.replace('%description%',arr[i].name)
           var newsmallHtml = newsmallHtml.replace('%price%',arr[i].price)
           var newsmallHtml = newsmallHtml.replace('%id%',i)
           document.querySelector('.item-container').insertAdjacentHTML('beforeend',newsmallHtml)
        }
       document.querySelector('.total-content').innerHTML= `Tổng tiền (${totalProduct} sản phẩm):`

}
renderProduct()