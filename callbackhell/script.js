let countDownID = document.getElementById("countDown");
setTimeout(()=>{
    countDownID.innerText = 10;
    setTimeout(()=>{
        countDownID.innerText = 9;
        setTimeout(()=>{
            countDownID.innerText = 8;
            setTimeout(()=>{
                countDownID.innerText = 7;
                setTimeout(()=>{
                    countDownID.innerText = 6;
                    setTimeout(()=>{
                        countDownID.innerText = 5;
                        setTimeout(()=>{
                            countDownID.innerText = 4;
                            setTimeout(()=>{
                                countDownID.innerText = 3;
                                setTimeout(()=>{
                                    countDownID.innerText = 2;
                                    setTimeout(()=>{
                                        countDownID.innerText = 1;
                                        setTimeout(()=>{
                                            countDownID.innerText = "Happy Independence Day";                                            
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);                    
                },1000);
            },1000);
        },1000);
    },1000);
},1000);