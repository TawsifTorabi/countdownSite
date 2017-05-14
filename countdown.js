// Set the date we're counting down to
var countDownDate = new Date("Apr 14, 2017 00:01:00").getTime();

//code from w3schools
// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("timerone").innerHTML =  hours + " ঘন্টা ";
    document.getElementById("timertwo").innerHTML = minutes + " মিনিট " + seconds + " সেকেন্ড ";
    document.getElementById("days").innerHTML = "আর মাত্র " + days + " দিন ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "এখনি প্রকাশ হবে!";
    }
}, 1000); 
