function calculate()
{
    let num1= parseInt(document.getElementById('input1').value);
    let num2= parseInt(document.getElementById('input2').value);

    //check if !isNan is false/not true for um1 and num2 i.e num1 and num2 really are numbers and isNan is false on them 
    if(!isNaN(num1) && !isNaN(num2)){
        let result= multiply(num1,num2);
        displayResult(result);
       }
    else
    {displayResult('Please enter valid numbers in above fields!');}
}

function multiply(a,b){
    debugger;
    return a*b;
}

function displayResult(result)
{
    document.getElementById("output").innerHTML="<p>Result: "+ result+" </p>";
//    document.getElementById("output").textContent=`Result: ${result}`;    if you used a paragraph instead of div element, usse this statment;
}
