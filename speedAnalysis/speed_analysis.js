let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest(){
    document.getElementById("inputText").value=testText;
    document.getElementById("userInput").readOnly=false;
    document.getElementById("userInput").value="";    
    document.getElementById("output").innerHTML="";
    

    startTime=new Date().getTime();
    var button=document.getElementById("btn");
        button.innerHTML="End Test";
        button.onclick=endTest;
}

function endTest(){
    endTime=new Date().getTime();
    document.getElementById("userInput").readOnly=true;

    var timeElapsed= (endTime-startTime)/1000;//milliseconds into seconds
    var userTypedText= document.getElementById("userInput").value;

    var typedWords=userTypedText.split(/\s+/).filter(function(word){return word !=="";}).length;
    var wpm=0;

    if(timeElapsed !==0 && !isNaN(typedWords))
        {
            wpm = Math.round((typedWords/timeElapsed)*60);
        }

        var outputDiv= document.getElementById("output");
        outputDiv.innerHTML="<h2>Typing Test Result: </h2>"+"<p>Words Typed: " + typedWords+"</p>" + 
        "<p>Time Elapsed: " + timeElapsed.toFixed(2)+ " seconds</p>" +
                "<p>Words Per Minute (WPM): " + wpm + "</p>";

                var button=document.getElementById("btn");
                button.innerHTML="Start Test";
                button.onclick=startTest;
    }

//Calculating words per minute (WPM):
// var userTypedText = document.getElementById("userInput").value; var typedWords = userTypedText.split(/\s+/).filter(function (word) { return word !== "";}).length;
// The function retrieves the user's typed text from the userInput text area using document.getElementById("userInput").value.
// It then computes the number of words typed by splitting the input text using a regular expression to consider words separated by spaces, tabs, or newlines. Filtering ensures counting valid words, excluding empty strings.

//Word Per Minute:
// if (timeElapsed !== 0 && !isNaN(typedWords)) { wpm = Math.round((typedWords / timeElapsed) * 60);}
// Calculates the words per minute. It checks if timeElapsed is not zero and typedWords is a valid number.
// If so, it computes the WPM by dividing the number of typed words by the time elapsed (in minutes) and then multiplies by 60 to get words per minute. Math.round() rounds the value to the nearest whole number.
