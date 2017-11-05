// REFERENCE TO FIREBASE
var firebase_ref = firebase.database().ref();

// ADDING CATEGORY/SUBSCRIPTIONS TO FIREBASE
var bSubscribe = document.getElementById("subscribe");
var category = document.getElementById("category");
function Subscribe(){
    //window.alert("Hello");
    var mcategory = category.value;
    firebase_ref.child("Subscriptions").push().set(mcategory);
    window.alert("DONE");
}

//GETTING VALUES(Subscriptions) FROM FIREBASE AND DISPLAYING IT
    var subs = firebase.database().ref().child("Subscriptions");
    subs.on("child_added", snap =>{


        var subName = snap.val();
        var btn = document.createElement("BUTTON");
    var t = document.createTextNode(subName);
    btn.appendChild(t);

        $("#display_subs").append(btn);
        btn.style.backgroundColor = '#607D8B';
        btn.style.borderRadius = '30px';
        btn.style.color = 'white';
        btn.style.paddingLeft = '2%';
        btn.style.paddingRight = '2%';
        btn.style.margin = '1%';
    });

    //ADDING QUESTIONS TO FIREBASE
    var question = document.getElementById("question");
    function submitQuestion(){

        var mQuestion = question.value;
        firebase_ref.child("Questions").child("My Questions").push().set(mQuestion);
        window.alert("Question successfully submitted.");
    }

    //DISPLAYING QUESTIONS ASKED ON questions.html
    var ques = firebase.database().ref().child("Questions").child("My Questions");
    ques.on("child_added",snap =>{

        var qu = snap.val();
        var timestamp = new Date().getTime();
        $("#table_body").append("<tr><td>"+ qu + "</td><td><button>Read</button></td><td>5</td><td>5</td><td>"+timestamp+"</td></tr>");

    });


// GET THE NAME OF THE LOCATION AND ADD TO THE LIST IN THE MODAL
var city_name = document.getElementById("city_name");
function getCity(){

    var mcity_name = city_name.value;
    //add city name to the dropdown list

    $('#cities').append("<li onclick='Default()'><a>"+mcity_name+"</a></li>");
    window.alert(mcity_name + " added as a new city!");
}

//LOAD THE JSON FILE FROM THE LOCAL DIRECTORY

function loadJSON(file, callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

//DELHI QUESTIONS
function Delhi(){

    loadJSON("delhi.json", function (response) {

        var data = JSON.parse(response);
        $('#trending_list').html("<li class='list-group-item list-group-item-success'>" + data[0].question+" </li>");
        $('#trending_list').append("<li class='list-group-item list-group-item-success'>" + data[1].question + "</li>");
        $('#trending_list').append("<li class='list-group-item list-group-item-success'>" + data[2].question + "</li>");


    });
}

// NOIDA QUESTIONS
function Noida() {

    loadJSON("noida.json", function (response) {

        var data = JSON.parse(response);
        $('#trending_list').html("<li class='list-group-item list-group-item-success'>" + data[0].question + " </li>");
        $('#trending_list').append("<li class='list-group-item list-group-item-success'>" + data[1].question + "</li>");
        $('#trending_list').append("<li class='list-group-item list-group-item-success'>" + data[2].question + "</li>");


    });
}

//GURGAON QUESTIONS
function Gurgaon() {

    loadJSON("gurugram.json", function (response) {

        var data = JSON.parse(response);
        $('#trending_list').html("<li class='list-group-item list-group-item-success'>" + data[0].question + " </li>");
        $('#trending_list').append("<li class='list-group-item list-group-item-success'>" + data[1].question + "</li>");
        $('#trending_list').append("<li class='list-group-item list-group-item-success'>" + data[2].question + "</li>");


    });
}

//IF NO POST FOR CITY IS FOUND
function Default(){
    $('#trending_list').html("<li class='list-group-item list-group-item-danger'>No Post Available</lli>" );
}