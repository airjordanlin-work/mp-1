

function addition()
{
  let first = document.getElementById("first").value;
  first = Number(first);

  let second = document.getElementById("second").value;
  second = Number(second);


  let startNumber = 1;

  startNumber = first + second;
  if (startNumber < 0)
  {
    document.getElementById("output").style.color = "red";
    document.getElementById("output").innerHTML = String(startNumber);
  }
  else{
    document.getElementById("output").style.color = "black";
    document.getElementById("output").innerHTML = String(startNumber);
  }



}

function subtraction()
{
  let first = document.getElementById("first").value;
  first = Number(first);

  let second = document.getElementById("second").value;
  second = Number(second);


  let startNumber = 1;

  startNumber = first - second;

  if (startNumber < 0)
  {
    document.getElementById("output").style.color = "red";
    document.getElementById("output").innerHTML = String(startNumber);
  }
  else{
    document.getElementById("output").style.color = "black";
    document.getElementById("output").innerHTML = String(startNumber);
  }

}

function multiplication()
{
  let first = document.getElementById("first").value;
  first = Number(first);

  let second = document.getElementById("second").value;
  second = Number(second);


  let startNumber = 1;

  startNumber = first * second;

  if (startNumber < 0)
  {
    document.getElementById("output").style.color = "red";
    document.getElementById("output").innerHTML = String(startNumber);
  }
  else{
    document.getElementById("output").style.color = "black";
    document.getElementById("output").innerHTML = String(startNumber);
  }

}
function division()
{
  let first = document.getElementById("first").value;
  first = Number(first);

  let second = document.getElementById("second").value;
  second = Number(second);


  let startNumber = 1;

  startNumber = first / second;

  if (startNumber < 0)
  {
    document.getElementById("output").style.color = "red";
    document.getElementById("output").innerHTML = String(startNumber);
  }
  else{
    document.getElementById("output").style.color = "black";
    document.getElementById("output").innerHTML = String(startNumber);
  }

}
function clearAll()
{
   document.getElementById("first").value = "";

   document.getElementById("second").value = "";

}

function myPower() {
  let first = document.getElementById("first").value;
  first = Number(first);

  let second = document.getElementById("second").value;
  second = Number(second);

  let startNumber = 1;

  if (isNaN(first) || isNaN(second)) {
    document.getElementById("output").innerHTML = "Please enter valid numbers.";
    return;
  }

  for (let i = 0; i < second; i++) {
    startNumber = first * startNumber;
  }

  if (startNumber < 0)
  {
    document.getElementById("output").style.color = "red";
    document.getElementById("output").innerHTML = String(startNumber);
  }
  else{
    document.getElementById("output").style.color = "black";
    document.getElementById("output").innerHTML = String(startNumber);
  }
}
