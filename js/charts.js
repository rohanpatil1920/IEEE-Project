google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawPieChart);

console.log(firebaseConfig);
function drawPieChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['cereals',     11],
    ['fruits',      2],
    ['vegetables',  2],
    ['grains', 2],
    ['leafy vegetables',    7]
  ]);

  var options = {
      title: 'Types of food by category',
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);

}

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawBarChart);

var id;
function check(){
  if (typeof user === 'undefined' || user == null) {
    // console.log("user not defined");
    return false;
  }
  else {
    console.log("user is present");
    console.log(user.displayName);
    clearInterval(id);
  }
}

function drawBarChart() {
  id = setInterval(check, 250);
  var totalCereals = firebase.database().ref().child(user.displayName).once('value').then(function(snapshot) {
    console.log(snapshot.val());
    console.log("values");
});
  var data = google.visualization.arrayToDataTable([
    ['food products', 'in quintals'],
    ['cereals',     11],
    ['fruits',      2],
    ['vegetables',  2],
    ['grains', 2],
    ['leafy vegetables',    7]
  ]);


  var options = {
    title: 'overall report'
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}
