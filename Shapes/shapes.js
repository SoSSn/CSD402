function takeinput() {
  var x= document.getElementById('form1');
  if (x.style.display === 'block') {
        x.style.display = 'none';
        document.body.style.background = "white url('Circle.jpeg') no-repeat center ";
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
