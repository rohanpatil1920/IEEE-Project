
function submitData() {
  // var name = document.getElementById("contact").value;
  var k = document.getElementById('contact').value;
  console.log(k);

  firebase.database().ref().push("hello world");

}
