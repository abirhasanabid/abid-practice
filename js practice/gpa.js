const youGot = 30;
if (youGot >= 80) {
    console.log('you got A+/GPA 5');
}
// else if(youGot >= 70){
//     console.log("you got A")
// }
// else if(youGot >= 60){
//     console.log("you got A-")
// }
// else if(youGot >= 50){
//     console.log("you got B")
// }
// else if(youGot >= 40){
//     console.log("you got C")
// }
// else if(youGot >= 33){
//     console.log("you got D")
// }
else {
    if (youGot >= 70) {
        console.log("you got A")
    }
    else{
        if(youGot >= 60){
            console.log("you got A-")
        }
        else{
            if(youGot >= 50){
                console.log("you got B")
            }
            else{
                if(youGot >= 40){
                    console.log("you got c")
                }
                else{
                    if(youGot >= 33){
                        console.log("you got D")
                    }
                    else{
                        console.log('better luck next time')
                    }
                }
            }
        }
        
    }
    
}