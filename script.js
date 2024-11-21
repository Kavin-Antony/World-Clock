function displayTime(){
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    hr = padZero(hr);
    min = padZero(min);
    sec = padZero(sec)
    document.getElementById("hours").innerHTML=hr;
    document.getElementById("mins").innerHTML=min;
    document.getElementById("seconds").innerHTML=sec;
}

function padZero(num){
    return num<10?"0"+num:num
}

setInterval(displayTime,500)
