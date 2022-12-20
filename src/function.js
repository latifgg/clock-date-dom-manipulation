const myDate=()=>{
  setInterval(myTimer, 1000);

  function myTimer() {
    const clockDate = new Date();
    document.getElementById("clock").innerHTML = `${ clockDate.toLocaleTimeString()}  pm `
  }
}


export{myDate}

