
function submitData() {
 // var name = document.getElementById("").value;
  var contact = document.getElementById('contact').value;

  console.log(contact);

  firebase.database().ref().push("hello world");
  // window.alert("hi")

}
