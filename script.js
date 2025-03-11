    const dataActual = new Date(); 
    const day = (dataActual.getDate() < 10) ? `0${dataActual.getDate()}`: dataActual.getDate();
    const month = `0${(dataActual.getMonth() + 1)}`;
    const year = dataActual.getFullYear();
    let hours = dataActual.getHours();
    let minutes = dataActual.getMinutes();
    let second = dataActual.getSeconds();

    setInterval(() =>{
        (second <= 9) ? document.getElementById('segundo').innerText =  `0${second}` : document.getElementById('segundo').innerText = second;
        (minutes <= 9) ? document.getElementById('minuto').innerText =  `0${minutes}`: document.getElementById('minuto').innerText = minutes;
        (hours <= 9) ? document.getElementById('hora').innerText = `0${hours}` : document.getElementById('hora').innerText = hours;
        
        if (second == 59){
            second = 0;
            minutes++;
            
        }
        if (minutes == 59){
            hours++;
            minutes = 0;
            
        }
        if (hours == 24 && minutes == 59){
            hours = 0;
        }
        second++;
    },1000);

    const data = document.querySelector('.date');

    data.innerText = `${day}/${month}/${year}`;


