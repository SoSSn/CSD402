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