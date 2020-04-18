
class db{
  constructor(farmer, produce, quantity, cost, type){
    this.farmer = farmer;
    this.produce = produce;
    this.quantity = quantity;
    this.cost = cost;
    this.type = type;
  }
}

function hide(){
  var err = document.getElementById('error');
  var success = document.getElementById('success');
  if (err.style.display == "block") {
    err.style.display = "none";
  }
  else if (success.style.display == "block") {
    success.style.display = "none";
  }
}

function submitData() {
  var farmer = document.getElementById('name_of_farmer');
  var produce = document.getElementById('produce');
  var quantity = document.getElementById('quantity');
  var cost = document.getElementById('cost_of_cultivation');
  var type = document.getElementById('type');
  var user = firebase.auth().currentUser;
  // console.log(user);
  console.log(farmer.value, produce.value, quantity.value, cost.value );

  var details = new db(farmer.value, produce.value, quantity.value, cost.value, type.value );
  console.log(details);
  var district;
    if (farmer.value.trim() !== "" && produce.value.trim() !== "" && quantity.value.trim() !== "" && cost.value.trim() !== "" && type.value.trim() !== "") {
      console.log(farmer.value);      
      if (user) {
        firebase.database().ref().child(district).child(user.displayName).push().set(details,
        function(error) {
          if (error) {
            document.getElementById('emsg').textContent = "Failed to push data!";
            document.getElementById('error').style.display = "block";
          }
          else {
            document.getElementById('success').style.display = "block";
            farmer.value = "";
            produce.value = "";
            quantity.value = "";
            cost.value = "";
            type.value = "";
          }
        });
        setTimeout(hide, 5000);
      }
      else {
        alert("An unexpected error occured!\nplease login again to continue");
        window.location = "register.html";
      }
    }
    else {
      document.getElementById('error').style.display = "block";
    }
}
