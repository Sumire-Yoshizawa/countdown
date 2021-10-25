(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

 let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "10/20/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
      
   
        if (distance < 0) {
          document.getElementById("headline").innerText = "Today is Salsabila birthday!";
document.getElementById("headline").classList.add('animate__animated', 'animate__fadeInDownBig')
        document.getElementById("countdown").style.display = "none";

document.getElementById("content").style.display = "block";
let content =document.getElementById("content")
content.classList.add('animate__animated', 'animate__tada')
         
          let seconds = 10
let countdown = setInterval(function() {
    seconds--;
 
document.getElementById("redirect").classList.add('animate__animated', 'animate__fadeIn')
  
document.getElementById("redirect").innerText = "Redirect after : " + seconds+"s";
    if (seconds <= 0) {
      clearInterval(countdown)
      
            window.location.href = 'https://ksana.in/hbday';
    };
}, 1000);
          

          clearInterval(x);
        }
        //seconds
      }, 0)
  }());


  