
let count = 0;

function increaseCount()
{
    count++;
    displayCount();
    checkCount();
}

function displayCount()
{
    document.getElementById("countDisplay").innerHTML = count;
}

function checkCount()
{
    if(count===10)
    {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    }

    if(count===10)
    {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    }
}