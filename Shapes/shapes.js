function takeinput() {
  var x= document.getElementById('form1');
  if (x.style.display === 'block') {
        x.style.display = 'none';
        document.body.style.background = "white url('Circle.jpg') no-repeat center ";
        document.body.style.backgroundSize = "500px";
    } else {
        x.style.display = 'block';
        document.body.style.background = "black url('Circle.jpg') no-repeat fixed center";

    }
    var disp=document.getElementById("ans");

    disp.innerHTML="";
    disp.style.color="white";

}

function getap(){
    var disp=document.getElementById("ans");
    var number=document.getElementById("number").value;
    var area=3.14 * number * number;
    var per= 2 * 3.14 * number;
    if(disp.innerHTML === "" && number !== ""){
      disp.innerHTML = "Area: " + area + "\n" + "Perimeter: " + per ;
      document.getElementById("number").value="";
    }else {
      disp.innerHTML="";
    }

}
function takeinput1() {
  var x1= document.getElementById('form2');
  if (x1.style.display === 'block') {
        x1.style.display = 'none';
        document.body.style.background = "white url('triangle.jpg') no-repeat center ";
        document.body.style.backgroundSize = "500px";
    } else {
        x1.style.display = 'block';
        document.body.style.background = "black url('triangle.jpg') no-repeat fixed center";
    document.body.style.backgroundSize = "500px";
    }
    var disp1=document.getElementById("ans1");

    disp1.innerHTML="";
    disp1.style.color="white";

}

function getap1(){
    var disp1=document.getElementById("ans1");
    var l=document.getElementById("number1").value;
        var b=document.getElementById("number2").value;
    var area=(1/2)*l*b;
    var per= 3 * l;
    if(l !== ""&& b!== ""){
      disp1.innerHTML = "Area: " + area + "\n" + "Perimeter: " + per ;
      document.getElementById("number1").value="";
      document.getElementById("number2").value="";
    }else {
      disp1.innerHTML="";
    }

}

function takeinput2() {
  var x2= document.getElementById('form3');
  if (x2.style.display === 'block') {
        x2.style.display = 'none';
        document.body.style.background = "white url('Square.png') no-repeat center ";
        document.body.style.backgroundSize = "500px";
    } else {
        x2.style.display = 'block';
        document.body.style.background = "black url('Square.png') no-repeat fixed center";
    document.body.style.backgroundSize = "500px";
    }
    var disp2=document.getElementById("ans2");

    disp2.innerHTML="";
    disp2.style.color="white";

}

function getap2(){
    var disp2=document.getElementById("ans2");
    var a=document.getElementById("number3").value;

    var area=a*a;
    var per= 4*a;
    if(a !== ""){
      disp2.innerHTML = "Area: " + area + "\n" + "Perimeter: " + per ;
      document.getElementById("number3").value="";
      document.getElementById("number3").value="";
    }else {
      disp2.innerHTML="";
    }

}

function takeinput3() {
  var x3= document.getElementById('form4');
  if (x3.style.display === 'block') {
        x3.style.display = 'none';
        document.body.style.background = "white url('Rect.png') no-repeat center ";
        document.body.style.backgroundSize = "500px";
    } else {
        x3.style.display = 'block';
        document.body.style.background = "black url('Rect.png') no-repeat fixed center";
    document.body.style.backgroundSize = "500px";
    }
    var disp3=document.getElementById("ans3");

    disp3.innerHTML="";
    disp3.style.color="white";

}

function getap3(){
    var disp3=document.getElementById("ans3");
    var l=document.getElementById("number4").value;
    var b=document.getElementById("number5").value;

    var area=l*b;
    var per= 2*(parseInt(l)+parseInt(b));
    if(l !== "" && b!== ""){
      disp3.innerHTML = "Area: " + area + "\n" + "Perimeter: " + per ;
      document.getElementById("number4").value="";
      document.getElementById("number5").value="";
    }else {
      disp3.innerHTML="";
    }

}


function takeinput4() {
  var x4= document.getElementById('form5');
  if (x4.style.display === 'block') {
        x4.style.display = 'none';
        document.body.style.background = "white url('Hex.jpg') no-repeat center ";
        document.body.style.backgroundSize = "500px";
    } else {
        x4.style.display = 'block';
        document.body.style.background = "black url('Hex.jpg') no-repeat fixed center";
    document.body.style.backgroundSize = "500px";
    }
    var disp4=document.getElementById("ans4");

    disp4.innerHTML="";
    disp4.style.color="white";

}

function getap4(){
    var disp4=document.getElementById("ans4");
    var a1=document.getElementById("number6").value;

    var area=(3*3^(1/2)*a1*a1)/2;
    var per= 6*a1;
    if(a1!== ""){
      disp4.innerHTML = "Area: " + area + "\n" + "Perimeter: " + per ;
      document.getElementById("number6").value="";

    }else {
      disp4.innerHTML="";
    }

}
