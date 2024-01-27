let frendScore = 0;
if (frendScore > 80){
    console.log('Go for a lunch');
}
else{
    if(frendScore >= 60){
        console.log('good luck next time');
    }
    else{
        if(frendScore >= 40){
            console.log("keep your friend's message unseen");
        }
        else{
            if(frendScore < 40){
                console.log('block your friend');
            }
        }
    }
}