const texts= [
    "Front-end developer",
    "Software developer",
    "Computer scientist"
];
let i=0;
let currentText='';
let count=0;
let letter='';
(function type(){
    if(count===texts.length){
        count=0;
    }
    currentText=texts[count];
    letter=currentText.slice(0,++i);

    document.getElementById('typing').textContent=letter;
    if(letter.length===currentText.length){
        count++;
        i=0;
        setTimeout(type,1000);
    }
    else{
        setTimeout(type,100);
    }
}());