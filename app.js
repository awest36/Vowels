window.onload = function() {

 var input = document.getElementById("input");
 var calculate = document.getElementById("calculate");

 var totalvowels = 0;
 var totalAs = 0;
 var totalEs = 0;
 var totalIs = 0;
 var totalOs = 0;
 var totalUs = 0;
 var totalYs = 0;

 calculate.addEventListener("click", function() {
     var textToAnaylze = input.value;
     for(var i = 0; i < textToAnaylze.length; i++)
     if(isVowel(textToAnaylze[i])) {
        totalvowels++;
        incrementVowelCount(textToAnaylze[i]);
     }

     document.getElementById("TotalVowels").innerHTML = totalvowels;
     document.getElementById("PercentAs").innerHTML = totalAs / totalvowels * 100;
     document.getElementById("PercentEs").innerHTML = totalEs / totalvowels * 100;
     document.getElementById("PercentIs").innerHTML = totalIs / totalvowels * 100;
     document.getElementById("PercentOs").innerHTML = totalOs / totalvowels * 100;
     document.getElementById("PercentUs").innerHTML = totalUs / totalvowels * 100;
     document.getElementById("PercentYs").innerHTML = totalYs / totalvowels * 100;

 });

    function isVowel(letter){
        letter = letter.toUpperCase();
        return letter == "A" || letter == "E" || letter == "I" ||  letter == "O" || letter == "U" || letter == "Y";
    }

    function incrementVowelCount(letter) {
        letter = letter.toUpperCase();
        if(letter == "A"){
            totalAs++;
        } else if (letter == "E"){
            totalEs++;
        }else if (letter == "I"){
            totalIs++;
        }else if (letter == "O"){
            totalOs++;
        }else if (letter == "U"){
            totalUs++;
        }else if (letter == "Y"){
            totalYs++;
        }
    }
};
