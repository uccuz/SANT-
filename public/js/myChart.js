var drinkId = 0;
var wineId = 0;

var degree = [1,2,3,0];


var basicWine = [
    {name:"琴酒",sour:0,sweet:1,hot:5},
    {name:"蘭姆酒",sour:0,sweet:1,hot:7},
    {name:"伏特加",sour:0,sweet:0,hot:9},
    {name:"龍舌蘭",sour:1,sweet:2,hot:6},
    {name:"威士忌",sour:2,sweet:2,hot:7},
    {name:"白蘭地",sour:3,sweet:1,hot:7},
];

var drink = [
    {name:"冬瓜茶",sour:1,sweet:7,hot:0},
    {name:"檸檬汁",sour:7,sweet:3,hot:0},
    {name:"蔓越莓汁",sour:5,sweet:5,hot:0},
    {name:"蘇打水",sour:0,sweet:0,hot:1},
    {name:"柳橙汁",sour:4,sweet:6,hot:0},
    {name:"可樂",sour:1,sweet:6,hot:2},
];

var ChartData = {
    labels: ["酸度", "甜度", "烈度"],
    datasets: [{
        label: "指標",
        data: degree,
        backgroundColor: [
            'rgba(255, 206, 86, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            
        ],
        borderColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(54, 162, 235, 1)',            
            'rgba(255,99,132,1)',                     
        ],
        borderWidth: 1
    }]
};

window.onload = function() {

    wineId = parseInt($.cookie('wine'));
    drinkId = parseInt($.cookie('drink'));
    if(wineId!= undefined && drinkId!= undefined){
        degree[0] = basicWine[wineId-1].sour + drink[drinkId-1].sour;
        degree[1] = basicWine[wineId-1].sweet + drink[drinkId-1].sweet;
        degree[2] = basicWine[wineId-1].hot + drink[drinkId-1].hot;
        $("#bartending").text("你的調酒：" + basicWine[wineId-1].name + " + " + drink[drinkId-1].name);
    }
    
    console.log(basicWine[wineId-1].name); 
    console.log(drink[drinkId-1].name); 

    var ctx = document.getElementById('chart').getContext('2d');
    window.myHorizontalBar = new Chart(ctx, {
        type: 'horizontalBar',
        data: ChartData,
        options: {
            legend: {
                display: false,
            },
            tooltips: {
                callbacks: {
                    label: tooltipItem => `${tooltipItem.yLabel}: ${tooltipItem.xLabel}`, 
                    title: () => null,
                }
            },
        },
    });
};

