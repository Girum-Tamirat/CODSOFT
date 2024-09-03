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
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_myr6mqe';
    const templateID = 'template_e0mpsqo';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Message sent successfully!');
        }, (err) => {
            alert('Failed to send the message. Please try again later.');
            console.log(JSON.stringify(err));
        });
});
