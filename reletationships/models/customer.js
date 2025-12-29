const mongoose=require("mongoose");
const { Schema }=mongoose;



main()
    .then(()=>{console.log("connection successfull")})
    .catch((err)=>{console.log(err)});



async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");

}

const orderSchema =new Schema({
    item:String,
    price:Number,

});

const customerSchema=new Schema({
    name:String,
    order:[
        {
            type:Schema.Types.ObjectId,
            ref:"Order",
        }
    ],
});

// customer ke delete krne se pahle koi kaam ho jaye ya  uske baad koi kaam ho jaye
// customerSchema.pre('findOneAndDelete', async ()=> {
//     console.log("pre middleware")
// });
customerSchema.post('findOneAndDelete', async (customer)=> { //customer delete hone ke baad order bhi delete ho jaye 
    console.log("Post middleware")
    console.log(customer);// customer object itself jo delete ho raha hai ------> isska mtllab isske pass puri access hoti hai customer ki   to chalo isska fayada uthate hai--->isske pass jitne bhi order hai unn sbko delete kr dete hai 
    if(customer.order.length){
        let res=await Order.deleteMany({_id:{$in: customer.order }});
        console.log(res);//query ko acknowledge kr liya gaya hai orr --->"await Order.deleteMany({_id:{$in: customer.order }});" iss wale method ne do cheej ko dlete kiya hai ye hai isska matlab ("{ acknowledged: true, deletedCount: 2 }")
        console.log("successfull run");
    }
// jaise hi customer ko delte kiya gaya waise hi order bhi delete ho gaya iss tarah usser and post wale me jaie hi user delete hota hai to uske saare ke saare post bhi delete ho jaye 
});

//  models class
const Order=mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer",customerSchema);

// Function
const findCustomer = async () => {
    let result = await Customer.find({}).populate("order"); // use 'order' instead of 'orders'
    console.log(result[0]);
}


// //lets add some data of order to test the relelationship 
// // orderSchema
// const addOrder= async ()=>{
//     let order1=new Order({
//         item:"pizza",
//         price:900,
//     });
//     let order2=new Order({
//         item:"chips",
//         price:800,
//     });
//     let order3=new Order({
//         item:"kurkure",
//         price:700,
//     });
//     let order4=new Order({
//         item:"samosa",
//         price:600,
//     });

//     let customer1=new Customer({
//         name:"Karan ", 
//     });
//     let customer2=new Customer({
//         name:"  Arjun", 
//     });
//     let customer3=new Customer({
//         name:"Karan Arjun", 
//     });
//     let customer4=new Customer({
//         name:"Karan Arjun", 
//     });
//     customer1.order.push(order1);
//     customer2.order.push(order4);
//     customer3.order.push(order3);
//     customer4.order.push(order2);
//     await customer1.save();
//     await customer2.save();
//     await customer3.save();
//     await customer4.save();
//     console.log("all data saved to the customer saved ");
// }
// addOrder();


// //lets add some data of customer to test the relelationship 
// const addOrder= async ()=>{
//     let customer1=new Customer({
//         name:"Karan ", 
//     });
//     let customer2=new Customer({
//         name:"  Arjun", 
//     });
//     let customer3=new Customer({
//         name:"Karan Arjun", 
//     });
//     let customer4=new Customer({
//         name:"Karan Arjun", 
//     });
//     customer1.order.push(newOrder);
//     await customer1.save();
//     await customer2.save();
//     await customer3.save();
//     await customer4.save();
//     console.log("all data saved"); 
// }
// addOrder();





// ab lecture Number 54 se ye kaam karenge 
// function 1 to add data in data base 
//function 2 to delete the customer from database 

// function 1 to add data in data base 

// this fuction will create 1 coustomer and 1 order and let be to save to data base  
// const addCust=async()=>{
//     let newCust=new Customer({
//         name:"bas9",
//     });
//     let newOrder1=new Order({
//         item:"koya17",
//         price:200,
//     });
//     let newOrder2=new Order({
//         item:"koya19",
//         price:300,
//     });
//     newCust.order.push(newOrder1);
//     newCust.order.push(newOrder2);
//     await newOrder1.save();
//     await newOrder2.save();
//     await newCust.save();

//     console.log("add new kushagra");
// };
// addCust();


 



// >>>
// this fuction will delete 1 coustomer from dbs
const delCust=async ()=>{
    let data = await Customer.findByIdAndDelete("67778564e7e18e97ce713549");//deleting karan arjun wala data 
    console.log(data);//yaha pe jo customer hoga wo delete ho jayega but uska order abhi bhi exists
    //  karega but hmm to ye chahte hi nahi hai hmm chahte hai ki jo related orders hai wo bhi saath ke saath delete ho jaye 
    //issi cheej ko (customrs ke saath uske orders bhi chale jaye hamre pass do middlewares hote hai mmongoose middlewares )
}

delCust();
