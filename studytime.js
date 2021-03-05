function time(){
    for(let i=0; i<=26; i++){
        if(i>24){
            console.log(i,"SORRY, THERE ARE ONLY 24 HOURS A DAY"); 
        }else if(i >= 4 && i <= 5) {
            console.log(i,"IS A WAKE UP TIME");
        }else if((i >=1 && i<8) || (i>=18 && i <= 24)){
            console.log(i, "IS A TIME TO PLAY")
        }else if((i>=8 && i<=11)|| (i>=13 && i<=17)){
            console.log(i, "IS A STUDY TIME")
        }else if(i>=12 && i<13){
            console.log(i, "IS A BREAK TIME")
        }else{
            console.log(i,"INVALID INPUT")
        }
    }
}
console.log(time())