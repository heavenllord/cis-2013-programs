   var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("Enter Age"));
     floatDays = parseFloat(floatAge*365.25);
     floatMonths = parseFloat(floatAge*12);
     intWeeks = parseInt(floatDays/7);
     intFortnights = parseInt(floatDays/14);
     alert("Your age in years is: " + floatAge);
     alert("Your age in days is: " + floatDays);
     alert("Your age in months is: " + floatMonths);
     alert("Your age in weeks is: " + intWeeks);
     alert("Your age in fortnights is: " + intFortnights);
/*This program will...*/
   //Calculate floatDays by multiply age x 365.25)
