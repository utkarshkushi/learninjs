updateTime = () =>{
    let now = new Date();
    let time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    const options = {weekday:'long', year:'numeric', month:'long', day:'numeric'};
    let date = now.toLocaleDateString(undefined, options);
    result = time + ' on \n' + date;
    return document.getElementById('time').innerText = result;
    
}

setInterval(updateTime, 1000);

