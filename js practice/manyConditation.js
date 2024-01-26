const price = 1000;
const age = 44;
if(age <= 10){
    console.log(
        "for free"
    )
}
else if(age <= 20){
    // 90% discount
   const discount = price * 90 / 100;
   const giveME = price - discount;
    console.log(giveME);
}
else if(age <= 30){
    // 80% discount
   const discount = price * 80 / 100;
   const giveME = price - discount;
    console.log(giveME);
}
else if(age <= 40){
    // 70% discount
   const discount = price * 70 / 100;
   const giveME = price - discount;
    console.log(giveME);
}
else if(age <= 50){
    // 60% discount
   const discount = price * 60 / 100;
   const giveME = price - discount;
    console.log(giveME);
}
else if(age <= 60){
    // 50% discount
   const discount = price * 50 / 100;
   const giveME = price - discount;
    console.log(giveME);
}
else if(age <= 70){
    // 40% discount
   const discount = price * 40 / 100;
   const giveME = price - discount;
    console.log(giveME);
}
else if(age <= 80){
    // 30% discount
   const discount = price * 30 / 100;
   const giveME = price - discount;
    console.log(giveME);
}
else{
    console.log(price);
}