let xAxiseData = [
    {
        'name' : 'jan' ,
        'sale' : 11_2000
    },
    {
        'name' : 'Feb' ,
        'sale' : 17_2000
    },
    {
        'name' : 'Mar' ,
        'sale' : 7_2050
    },
    {
        'name' : 'Apr' ,
        'sale' : 4_500
    },
    {
        'name' : 'Mey' ,
        'sale' : 54_2000
    },
    {
        'name' : 'Jun' ,
        'sale' : 11_7000
    },
    {
        'name' : 'Jul' ,
        'sale' : 16_0700
    },
    {
        'name' : 'Aug' ,
        'sale' : 22_2000
    },
    {
        'name' : 'Sep' ,
        'sale' : 21_2200
    },
    {
        'name' : 'Oct' ,
        'sale' : 18_2200
    },
    {
        'name' : 'Nov' ,
        'sale' : 23_2200
    },
    {
        'name' : 'Dev' ,
        'sale' : 19_200
    },
]

const newMembers=[
    {
        id : 1 , 
        username: 'elham',
        title : 'Back Developer' , 
        img : 'images/download.png'
    },
    {
        id : 2 , 
        username: 'yusef',
        title : 'Web Developer' , 
        img : 'images/download.png'
    },
    {
        id : 3 , 
        username: 'reza',
        title : 'UIUX' , 
        img : 'images/download.png'
    },
    {
        id : 4 , 
        username: 'javad',
        title : 'Frontend' , 
        img : 'images/download.png'
    },
    {
        id : 5 , 
        username: 'amir',
        title : 'Frontend Developer' , 
        img : 'images/download.png'
    },
    {
        id : 6 , 
        username: 'mammd',
        title : 'Web Developer' , 
        img : 'images/download.png'
    },
    
]

const TransAction = [
    {
        id : 1 ,
        customer : 'Elham falah' , 
        date : '5 Mar 2002' , 
        amount : 999 , 
        status :'Approved' , 
        img : 'images/download.png'
    },
    {
        id : 2 ,
        customer : 'Yusef zibaee' , 
        date : '20 Feb 2002' , 
        amount : 250 , 
        status :'Declined' , 
        img : 'images/download.png'
    },
    {
        id : 3 ,
        customer : 'AmirMohammd' , 
        date : '5 Apr 1995' , 
        amount : 474 , 
        status :'Approved' , 
        img : 'images/download.png'
    },
    {
        id : 4 ,
        customer : 'Helya Falah' , 
        date : '26 Feb 2006' , 
        amount : 632 , 
        status :'Pending' , 
        img : 'images/download.png'
    },
]

let userRows = [
    {
        id : 1 , 
        username: 'Reza' , 
        avatar : 'images/download.png' , 
        status :'active' , 
        transAction : '$635',
        email : 'Reza@gmail.com'
    },
    {
        id : 2 , 
        username: 'Ghasem' , 
        avatar : 'images/download.png' , 
        status :'non-active' , 
        transAction : '$745',
        email : 'Ghasem@gmail.com'
    },
    {
        id : 3 , 
        username: 'mamadAli' , 
        avatar : 'images/download.png' , 
        status :'active' , 
        transAction : '$725',
        email : 'mamadAli@gmail.com'
    },
    {
        id : 4 , 
        username: 'Khosro' , 
        avatar : 'images/download.png' , 
        status :'active' , 
        transAction : '$825',
        email : 'Khosro@gmail.com'
    },
    {
        id : 5 , 
        username: 'Mehran' , 
        avatar : 'images/download.png' , 
        status :'active' , 
        transAction : '$225',
        email : 'Mehran@gmail.com'
    },
]

let products = [
    {
        id : 1, 
        title : 'Asus' , 
        avatar :'images/download.jpg' , 
        price : 770
    } , 
    {
        id : 2, 
        title : 'Lenovov' , 
        avatar :'images/download.jpg' , 
        price : 650
    } , 
    {
        id : 3, 
        title : 'Dell' , 
        avatar :'images/download.jpg' , 
        price : 400
    } , 
    {
        id : 4, 
        title : 'Mac' , 
        avatar :'images/download.jpg' , 
        price : 1100
    } , 
    {
        id : 5, 
        title : 'HP' , 
        avatar :'images/download.jpg' , 
        price : 680
    } , 
]

const productsData = [
    {
        name: 'Jan' , 
        saled: 4000 , 
    },
    {
        name: 'Feb' , 
        saled: 2000 , 
    },
    {
        name: 'Mar' , 
        saled: 1000 , 
    },
   
]

export  {xAxiseData , newMembers , TransAction , userRows , products ,productsData}