
//給一組資料data 取所有平均值 針對物件先用for in迴圈 把所有資料拿出來 把price除與size  

function avg(data){
    var total=0;
    for (let i in data.products){                   //取出了data裡所有的value
        total += data.products[i].price;            //取出了price的所有值並相加到total            
    }return total/data.size                         //回傳total除資料中的size 得到了總平均值
}



console.log(
    avg({
    size:3,
    products:[
    {
    name:"Product 1",
    price:100
    },
    {
    name:"Product 2",
    price:700
    },
    {
    name:"Product 3",
    price:250
    },
    ]
    })
   ) 