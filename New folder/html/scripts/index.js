function loop(){
    console.log("inside of loop function");
    let i=0;
    while (i<=10) {
        debugger
        i+=5;
        document.getElementById("loop")
        .innerHTML=i+"<br>";
    }
}

function breakPoint()
{
    let text='';
    for (var i=0; i<10;i++) {
        if(i==3){
            break;
            continue
        }
        text+="the number is:"+i+"<br>";        
    }

}
document.getElementById("loop").innerHTML=text;











// let i=1;
// function Up()
// {
//     debugger

//     document.getElementById("loop").innerHTML=(i++)+"";
// }
// function down()
// {
//     debugger


//     document.getElementById("loop").innerHTML=(i--)+"";
// }