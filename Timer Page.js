const countdown = () => {
        const countDate = new Date("May 30, 2023 10:11:00").getTime();
        console.log(countDate )
        const now = new Date().getTime();
        const gap = countDate - now 

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60; 
        const day = hour * 24;

        const textDay = Math.floor(gap / day )
        const textHour = Math.floor((gap % day) / hour)
        const textMin = Math.floor((gap % hour) / minute )
        const textSecond = Math.floor((gap % minute ) / second  )
        // console.log(textDay) 

        document.querySelector(".day").innerHTML = textDay
        document.querySelector(".hour").innerHTML = textHour
        document.querySelector(".min").innerHTML = textMin
        document.querySelector(".sec").innerHTML = textSecond
        console.log(gap)

        if (gap < 10000){
            window.location.href = "Quiz.html"
        }
    } 
countdown()
setInterval(countdown, 1000)