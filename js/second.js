var data  = [
    {
        name : 'Sự cố ngoài ý muốn',
        pic : 'New-folder/book-0.jpg',
        price : 25000,
        id :'book-0',
        currency: 'đ'
    },
    {
        name : 'Mập đẹp béo dễ thương',
        pic : 'New-folder/book-1.jpg',
        price : 43000,
        id :'book-1',
        currency: 'đ'

    },
    {
        name : 'Combo 4 quyyển Ma đạo tổ sư',
        pic : 'New-folder/book-2.jpg',
        price : 503000,
        id :'book-2',
        currency: 'đ'

    },
    {
        name : 'Truyện ngôn tình Việt Nam',
        pic : 'New-folder/book-3.jpg',
        price : 34000,
        id :'book-3',
        currency: 'đ'

    },
    {
        name : 'Ngủ cùng sói',
        pic : 'New-folder/book-4.jpg',
        price : 49000,
        id :'book-4',
        currency: 'đ'
    },
    {
        name : 'Truyện tranh Chết sập bẫy rồi',
        pic : 'New-folder/book-5.jpg',
        price : 23000,
        id :'book-5',
        currency: 'đ'
    },
    {
        name : 'Sách ứng dụng đá quý phong thủy',
        pic : 'New-folder/book-6.jpg',
        price : 43000,
        id :'book-6',
        currency: 'đ'
    },
    {
        name : 'Combo 2 tiểu thuyết Trung Quốc',
        pic : 'New-folder/book-7.jpg',
        price : 230000,
        id :'book-7',
        currency: 'đ'
    },
    {
        name : 'Sách Từ bi thành',
        pic : 'New-folder/book-8.jpg',
        price : 54000,
        id :'book-8',
        currency: 'đ'
    },
    {
        name : 'Sách Quan hệ nguy hiểm',
        pic : 'New-folder/book-9.jpg',
        price : 62000,
        id :'book-9',
        currency: 'đ'
    },
    {
        name :'Combo 2 truyện Này chớ làm loạn',
        pic : 'New-folder/book-10.jpg',
        price : 72000,
        id :'book-10',
        currency: 'đ'
    },
    {
        name : 'Truyện tranh One Piece',
        pic : 'New-folder/book-11.jpg',
        price : 14000,
        id :'book-11',
        currency: 'đ/q'
    },
    {
        name : 'Combo 2 sách cuộc sống',
        pic : 'New-folder/book-12.jpg',
        price : 120000,
        id :'book-12',
        currency: 'đ'
    },
    {
        name : '2 truyện Miền đất hứa',
        pic : 'New-folder/book-13.jpg',
        price : 69000,
        id :'book-13',
        currency: 'đ'
    },
    {
        name : 'Combo 3 sách kinh tế ',
        pic : 'New-folder/book-14.jpg',
        price : 268000,
        id :'book-14',
        currency: 'đ'
    },
    {
        name : 'Tiểu thuyết Không gia đình',
        pic : 'New-folder/book-15.jpg',
        price : 140000,
        id :'book-15',
        currency: 'đ'
    },
    {
        name : 'Combo 2 sách chân lý cuộc sống',
        pic : 'New-folder/book-16.jpg',
        price : 89000,
        id :'book-16',
        currency: 'đ'
    },
    {
        name : 'Truyện tranh Thầy giáo tuyệt chiêu',
        pic : 'New-folder/book-17.jpg',
        price : 16000,
        id :'book-17',
        currency: 'đ'
    },
    {
        name : 'Combo 9 sách ngôn tình',
        pic : 'New-folder/book-18.jpg',
        price : 543000,
        id :'book-18',
        currency: 'đ'
    },
    {
        name : 'Sách đột phá 8+ luyện thi đại học',
        pic : 'New-folder/book-19.jpg',
        price : 109000,
        id :'book-19',
        currency: 'đ/q'
    },
    {
        name : 'Truyện ngôn tình',
        pic : 'New-folder/book-20.jpg',
        price : 22000,
        id :'book-20',
        currency: 'đ'
    },
    
    {
        name : 'Tam sinh tam thế',
        pic : 'New-folder/book-21.jpg',
        price : 46000,
        id :'book-21',
        currency: 'đ'
    },
    {
        name : 'Sách Các vấn đề của triết học',
        pic : 'New-folder/book-22.jpg',
        price : 12000,
        id :'book-22',
        currency: 'đ'
    },
    {
        name : 'Chiến tranh tiền tệ',
        pic : 'New-folder/book-23.jpg',
        price : 49000,
        id :'book-23',
        currency: 'đ'
    },
    {
        name : 'Hoảng loạn hỗn loạn và cuồng loạn',
        pic : 'New-folder/book-24.jpg',
        price : 52000,
        id :'book-24',
        currency: 'đ'
    },
    {
        name : 'Truyện tranh Conan',
        pic : 'New-folder/book-25.jpg',
        price : 25000,
        id :'book-25',
        currency: 'đ'
    },
    {
        name : 'Shark Tank American: tư vấn từ các shark',
        pic : 'New-folder/book-26.jpg',
        price : 256000,
        id :'book-26',
        currency: 'đ'
    },
    
]

var uiControler= {
    // RENDER ITEMS
    renderBook :function(num, data){
        var html ='<div class ="book" id =%id%><img class ="pic-book" src ="%imgname%"><span class="description-book">%description%</span><br><div class="container-price"><span class="price-book">%price%</span><p class ="currency">%đ/q%</p></div></div>'
        for(var i= 0;i< data.length;i++){
            var newhtml =html. replace('%imgname%',data[i].pic)
            newhtml =newhtml.replace('%description%',data[i].name)
            newhtml =newhtml.replace('%price%',data[i].price)
            newhtml =newhtml.replace('%id%',data[i].id)
            newhtml =newhtml.replace('%đ/q%',data[i].currency)
            document.querySelector('.container-books').insertAdjacentHTML('beforeend',newhtml)
        }
    },
    // CLICK ITEM
    renderItem: function(identify){
        var index= data.findIndex(find => find.id === identify)
        document.querySelector('.body').hidden = true 
        var html= "<div class= 'body-item'><div class= 'body-item-main'><img class= 'body-item-pic' src='%book-pic%'> <div class= 'body-item-description' id =%id%> <div class= 'body-item-content'>%content%</div><div class= 'body-item-price'> %price% </div></div><div class= 'body-item-decision'><button class= 'body-item-cart'> Thêm vào giỏ hàng </button><button class= 'body-item-buynow'>  Mua ngay </button> </div></div></div>"
        var newhtml= html.replace('%book-pic%',data[index].pic)  
        newhtml= newhtml.replace('%content%',data[index].name)
        newhtml= newhtml.replace('%price%',data[index].price)
        newhtml= newhtml.replace('%id%',data[index].id)
        console.log(newhtml)
        document.querySelector('.main').insertAdjacentHTML('beforeend',newhtml)
    },
    // ADD TO CART 
    addingCart: function() {
        var num = numberControler.cartQuantity.length
        var htmlReplace = "Giỏ hàng("+ num +")"
        document.querySelector('.cart-button').textContent= htmlReplace
    },    
    
}
var numberControler= {
    cartQuantity: [],
    bookFiltered : [],
    addItem :function(infor){
        this.cartQuantity.push(infor)
    },
    findBookFiltered : function () {
        this.bookFiltered = []
        var priceId = [] 
        var criteria = document.getElementsByClassName('type-option') 
        for (let i= 0 ; i<criteria.length; i++){ 
            if (criteria[i].checked) priceId.push(criteria[i].id)
        }
        for (let i= 0 ; i<priceId.length; i++) {
            if(priceId[i]== 'check-1') {
//                   console.log(data.filter(datas => parseInt(datas.price)<=50000)) 
                 this.bookFiltered = [...this.bookFiltered, ...data.filter(datas => datas.price< 50000)]
                 console.log(this.bookFiltered)
            }
            else if(priceId[i]== 'check-2') {
                this.bookFiltered = [...this.bookFiltered, ...data.filter(datas => datas.price<100000 && datas.price >= 50000 )]
            }

            else if(priceId[i]== 'check-3') {
                this.bookFiltered = [...this.bookFiltered, ...data.filter(datas => datas.price<200000 && datas.price >= 100000 )]
            }
            
            else if(priceId[i]== 'check-4') {
                this.bookFiltered = [...this.bookFiltered, ...data.filter(datas => datas.price<300000 && datas.price >= 200000 )]
                }
            else if(priceId[i]== 'check-5') {
                this.bookFiltered = [...this.bookFiltered, ...data.filter(datas => datas.price<400000 && datas.price >= 300000 )]
            }
            else if(priceId[i]== 'check-6') {
                this.bookFiltered = [...this.bookFiltered, ...data.filter(datas => datas.price<500000 && datas.price >= 400000 )]
            }
            else if(priceId[i]== 'check-7') {
                this.bookFiltered = [...this.bookFiltered, ...data.filter(datas => datas.price >= 500000 )]
            }
        }
    }
}
var webControler= {
    init: function(){  
        var page= 0;
        uiControler.renderBook(page,data)
        window.onscroll = function() {
            console.log(document.body.scrollHeight)
            if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight- 100) {
                page++
                uiControler.renderBook(page,data)
            }
            var bookContainer= document.querySelectorAll('.book')
            for (var i=0; i<bookContainer.length;i++){
                bookContainer[i].addEventListener('click',itemDetail)
            }
        }
        var bookContainers= document.querySelectorAll('.book')
            for (var i=0; i<bookContainers.length;i++){
                bookContainers[i].addEventListener('click',itemDetail)
            }
        function itemDetail(event) {
            var selectorID= event.target.parentNode.id
            uiControler.renderItem(selectorID)
            document.querySelector('.body-item-cart').addEventListener('click',addToCart)

        }
        function addToCart(event){
            var identify= event.target.parentNode.previousSibling.id
            var index = data.findIndex(find => find.id === identify)
            console.log(index)
            numberControler.addItem(data[index])
            uiControler.addingCart()
        }
        document.querySelector('.submit-option').addEventListener('click',renderFilterItem)
        function renderFilterItem() {
            var hiddenBook = document.querySelectorAll('.book')
            console.log(hiddenBook)
            for (let i=0 ;i< hiddenBook.length; i++) {
                hiddenBook[i].hidden = true
            }
            numberControler.findBookFiltered()
            uiControler.renderBook(0,numberControler.bookFiltered)
            window.onscroll = function() {
            console.log(document.body.scrollHeight)
            if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight- 100) {
                page++
                uiControler.renderBook(page,numberControler.bookFiltered)
            }
            var bookContainer= document.querySelectorAll('.book')
            for (var i=0; i<bookContainer.length;i++){
                bookContainer[i].addEventListener('click',itemDetail)
            }
        }
        }
    }, 
}
webControler.init()
       



