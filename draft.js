var data  = [
    {
        name : 'Sự cố ngoài ý muốn',
        pic : 'New-folder/book-0.jpg',
        price : '25.000đ',
        id :'book-0'
    },
    {
        name : 'Mập đẹp béo dễ thương',
        pic : 'New-folder/book-1.jpg',
        price : '43.000đ',
        id :'book-1'
    },
    {
        name : 'Combo 4 quyyển Ma đạo tổ sư',
        pic : 'New-folder/book-2.jpg',
        price : '503.000đ',
        id :'book-2'
    },
    {
        name : 'Truyện ngôn tình Việt Nam',
        pic : 'New-folder/book-3.jpg',
        price : '34.000đ',
        id :'book-3'
    },
    {
        name : 'Ngủ cùng sói',
        pic : 'New-folder/book-4.jpg',
        price : '49.000đ',
        id :'book-4'
    },
    {
        name : 'Truyện tranh Chết sập bẫy rồi',
        pic : 'New-folder/book-5.jpg',
        price : '23.000đ',
        id :'book-5'
    },
    {
        name : 'Sách ứng dụng đá quý phong thủy',
        pic : 'New-folder/book-6.jpg',
        price : '43.000đ',
        id :'book-6'
    },
    {
        name : 'Combo 2 tiểu thuyết Trung Quốc',
        pic : 'New-folder/book-7.jpg',
        price : '230.000',
        id :'book-7'
    },
    {
        name : 'Sách Từ bi thành',
        pic : 'New-folder/book-8.jpg',
        price : '54.000đ',
        id :'book-8'        
    },
    {
        name : 'Sách Quan hệ nguy hiểm',
        pic : 'New-folder/book-9.jpg',
        price : '62.000đ',
        id :'book-9'
    },
    {
        name :'Combo 2 truyện Này chớ làm loạn',
        pic : 'New-folder/book-10.jpg',
        price : '72.000đ',
        id :'book-10'
    },
    {
        name : 'Truyện tranh One Piece',
        pic : 'New-folder/book-11.jpg',
        price : '14.000đ/q',
        id :'book-11'
    },
    {
        name : 'Combo 2 sách cuộc sống',
        pic : 'New-folder/book-12.jpg',
        price : '120.000đ',
        id :'book-12'
    },
    {
        name : '2 truyện Miền đất hứa',
        pic : 'New-folder/book-13.jpg',
        price : '69.000đ',
        id :'book-13'
    },
    {
        name : 'Combo 3 sách kinh tế ',
        pic : 'New-folder/book-14.jpg',
        price : '268.000đ',
        id :'book-14'
    },
    {
        name : 'Tiểu thuyết Không gia đình',
        pic : 'New-folder/book-15.jpg',
        price : '140.000đ',
        id :'book-15'
    },
    {
        name : 'Combo 2 sách chân lý cuộc sống',
        pic : 'New-folder/book-16.jpg',
        price : '89.000đ',
        id :'book-16'
    },
    {
        name : 'Truyện tranh Thầy giáo tuyệt chiêu',
        pic : 'New-folder/book-17.jpg',
        price : '16.000đ',
        id :'book-17'
    },
    {
        name : 'Combo 9 sách ngôn tình',
        pic : 'New-folder/book-18.jpg',
        price : '543.000đ',
        id :'book-18'
    },
    {
        name : 'Sách đột phá 8+ luyện thi đại học',
        pic : 'New-folder/book-19.jpg',
        price : '109.000đ/q',
        id :'book-19'
    },
    {
        name : 'Truyện ngôn tình',
        pic : 'New-folder/book-20.jpg',
        price : '22.000đ',
        id :'book-20'
    },
    
    {
        name : 'Tam sinh tam thế',
        pic : 'New-folder/book-21.jpg',
        price : '46.000đ',
        id :'book-21'
    },
    {
        name : 'Sách Các vấn đề của triết học',
        pic : 'New-folder/book-22.jpg',
        price : '12.000đ',
        id :'book-22'
    },
    {
        name : 'Chiến tranh tiền tệ',
        pic : 'New-folder/book-23.jpg',
        price : '49.000đ',
        id :'book-23'
    },
    {
        name : 'Hoảng loạn hỗn loạn và cuồng loạn',
        pic : 'New-folder/book-24.jpg',
        price : '52.000đ',
        id :'book-24'
    },
    {
        name : 'Truyện tranh Conan',
        pic : 'New-folder/book-25.jpg',
        price : '25.000đ',
        id :'book-25'
    },
    {
        name : 'Shark Tank American: tư vấn từ các shark',
        pic : 'New-folder/book-26.jpg',
        price : '256.000đ',
        id :'book-26'
    },
    
]
var webControler= {
    init: function(){
              
    }, 
}
webControler.init()
var uiControler= {
    renderBook :function(page){
        
    }
    
}
var numberControler= {
    
}
// RENDER ITEMS
var page= 0;
function renderBook(page){
    var html ='<div class ="book" id =%id%><img class ="pic-book" src ="%imgname%"><span class="description-book" >%description%</span><br><span class="price-book">%price%</span></div>'
    for(var i= 0;i< data.length;i++){
        var newhtml =html. replace('%imgname%',data[i].pic)
        newhtml =newhtml.replace('%description%',data[i].name)
        newhtml =newhtml.replace('%price%',data[i].price)
        newhtml =newhtml.replace('%id%',data[i].id)
        document.querySelector('.container-books').insertAdjacentHTML('beforeend',newhtml)
    }
}
renderBook(0)
window.onscroll = function() {
   console.log(document.body.scrollHeight)
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight- 100) {
        page++
        renderBook(page)
     }
};
// CLICK ITEM
const bookContainer= document.querySelectorAll('.book')
for (var i=0; i<bookContainer.length;i++){
    bookContainer[i].addEventListener('click',itemDetail)
}
function itemDetail(event){
    console.log('xyz')
    var selector= event.target.parentNode.parentNode.parentNode
    var selectorID= event.target.parentNode.id
    var index= data.findIndex(find => find.id === selectorID)
    console.log(index)
    console.log(selectorID)
    selector.parentNode.removeChild(selector)
    var html= "<div class= 'body-item'><div class= 'body-item-main'><img class= 'body-item-pic' src='%book-pic%'> <div class= 'body-item-description'> <div class= 'body-item-content'>%content%</div><div class= 'body-item-price'> %price% </div></div><div class= 'body-item-decision'><button class= 'body-item-cart'> Thêm vào giỏ hàng </button><button class= 'body-item-buynow'>  Mua ngay </button> </div></div></div>"
    var newhtml= html.replace('%book-pic%',data[index].pic)
    newhtml= newhtml.replace('%content%',data[index].name)
    newhtml= newhtml.replace('%price%',data[index].price)
    console.log(newhtml)
    document.querySelector('.main').insertAdjacentHTML('beforeend',newhtml)
}
//ADD CART 

document.querySelector('.body-item-cart').addEventListener('click',)
