const displayTime = () =>  {
    const date = new Date(); 
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let month = date.getMonth() + 1;
    let day = date.getDate(); 
    let year = date.getFullYear();

    let session = 'AM'; 

hours   = hours   <10 ? "0" + hours : hours; 
minutes = minutes <10 ? "0" + minutes : minutes; 
seconds = seconds <10 ? "0" + seconds : seconds; 

if(hours > 12) {
    session = "PM";
}

const container = document.getElementById('clock-face');


const time = hours + ":" + minutes + ":" + seconds + " " + session; 
const today = month + "/" + day + "/" + year;

    container.innerHTML = time + "<br>" + today;
    
};


setInterval(displayTime, 1000);
