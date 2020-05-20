var express = require("express");
var Cookies = require('js-cookie');
var app = express();
var bodyParser = require("body-parser");



var specialWine = [
    {id:"1",name:"Highball(威士忌+蘇打水)",image:"http://g.udn.com.tw/upfiles/B_HU/hung6015/PSN_PHOTO/454/f_23023454_1.jpg",content:"清爽蘇打氣泡感中帶點辛辣"},
    {id:"2",name:"螺絲起子(伏特加+柳橙汁)",image:"http://g.udn.com.tw/upfiles/B_ME/meatball2/PSN_PHOTO/279/f_10622279_1.jpg",content:"酒精濃度不高，加上柳橙微酸微甜的口感"},
    {id:"3",name:"自由古巴(蘭姆酒+可樂)",image:"https://img.technews.tw/wp-content/uploads/2019/08/12153128/Cuba_Libre-624x498.jpg",content:"炎炎夏日消暑一大半"},
];

var basicWine = [
    {id:"1",name:"琴酒 Gin",image:"https://miro.medium.com/max/1400/1*dWfimXvJ6YAthGwBAwxD1g.jpeg",content:"由穀物發酵，並增添多種香料蒸餾製成"},
    {id:"2",name:"蘭姆酒 Rum",image:"https://cdn.shopify.com/s/files/1/0028/9669/1264/products/O17502_2000x.png?v=1577880016",content:"帶有醇厚的甜膩果香或甘蔗焦香"},
    {id:"3",name:"伏特加 Vodka",image:"https://image.biccamera.com/img/00000001483457_A01.jpg?sr.dw=320&sr.jqh=60&sr.dh=320&sr.mat=1",content:"口味濃烈刺鼻"},
    {id:"4",name:"龍舌蘭 Tequila",image:"https://cdn.shopify.com/s/files/1/0028/9669/1264/products/O13304-1_2000x.png?v=1577879403",content:"獨特的植物香氣，適合口感濃厚的調酒"},
    {id:"5",name:"威士忌 Whiskey",image:"https://wineonline.blob.core.windows.net/www/PDT/2019090413470296526594.png",content:"以穀物為原料，口感獨特鮮明"},
    {id:"6",name:"白蘭地 Brandy",image:"https://cdn.shopify.com/s/files/1/0028/9669/1264/products/N01202_2000x.png?v=1580481707",content:"葡萄釀造而成，帶有甜甜的水果香氣"},
];

var drink = [
    {id:"1",name:"冬瓜茶",image:"https://img2.momoshop.com.tw/goodsimg/0006/506/267/6506267_R.jpg?t=1581469170",content:"甜甜的口感，大眾的選擇"},
    {id:"2",name:"檸檬汁",image:"https://i.epochtimes.com/assets/uploads/2014/09/1409032036281962-600x400.jpg",content:"酸酸口感，沁涼消暑"},
    {id:"3",name:"蔓越莓汁",image:"https://s.yimg.com/zp/images/4632C54E3D9C899F3958D600FE1D3AB15158C349",content:"又酸又甜，味道濃郁"},
    {id:"4",name:"蘇打水",image:"https://8550.cyberbiz.tw/media/W1siZiIsIjg1NTAvcHJvZHVjdHMvMzY3MjgzLzAxXzkxNy5qcGVnIl0sWyJwIiwidGh1bWIiLCI2MDB4NjAwIl1d.jpeg?sha=07e3c2494a6f4a97",content:"清爽俐落又乾淨"},
    {id:"5",name:"柳橙汁",image:"http://5.blog.xuite.net/5/2/0/6/240787870/blog_4085982/txt/410010479/0.jpg",content:"甜蜜滋味，濃厚果香"},
    {id:"6",name:"可樂",image:"https://www.savesafe.com.tw/ProdImg/1000/962/00/1000962_00_main.jpg?t=2012/5/17%20%E4%B8%8B%E5%8D%88%2005:59:00",content:"一飲而盡，大呼過癮"},
];


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");


app.get("/",function(req,res){
    res.render("index",{specialWine:specialWine});
});

app.get("/selectBasic",function(req,res){    
    res.render("selectBasic",{basicWine:basicWine});
});
app.get("/selectDrink",function(req,res){    
    res.render("selectDrink",{drink:drink});
});
/*app.post("/selectDrink",function(req,res){    
    res.redirect("/selectDrink");
});*/
/*app.post("/finishBuy",function(req,res){
    console.log("hi post");
    res.redirect("/finishBuy");
});*/
app.get("/finishBuy",function(req,res){
    res.render("finishBuy");
});
app.get("/QRCode",function(req,res){
    res.render("QRCode",{specialWine:specialWine});
});



app.get("/campgrounds",function(req,res){    
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds",function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    var newcampground = {name:name,image:image};
    campgrounds.push(newcampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req,res){
    res.render("new");
});


app.listen(80,function(){
    console.log("listen on port 80");
});
