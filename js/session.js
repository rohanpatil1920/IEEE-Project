var firebaseConfig = {
  apiKey: "AIzaSyCUq4iqHKzckYm3PQ1_YrvkkUYq_Nv-dms",
  authDomain: "ieee-krushival.firebaseapp.com",
  databaseURL: "https://ieee-krushival.firebaseio.com",
  projectId: "ieee-krushival",
  storageBucket: "ieee-krushival.appspot.com",
  messagingSenderId: "892909807247",
  appId: "1:892909807247:web:b7ea76eae854484fdf72fa"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

function initApp() {
  console.log("initApp executed");
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var uid = user.uid;
      var phoneNumber = user.phoneNumber;
      var providerData = user.providerData;
      user.getIdToken().then(function(accessToken) {
        console.log(displayName +" is logged in");
        document.getElementById('username').innerHTML = '<span class="glyphicon glyphicon-user"></span>' +" " +displayName;
        document.getElementById('sign').innerHTML = '<span class="glyphicon glyphicon-log-in"></span>' +" " +'Logout';
        document.getElementById('sign').setAttribute("onclick", "logout()");
        console.log(JSON.stringify({
          displayName: displayName,
          email: email,
          emailVerified: emailVerified,
          phoneNumber: phoneNumber,
          photoURL: photoURL,
          uid: uid,
          accessToken: accessToken,
          providerData: providerData
        }, null, '  '));
      });
    } else {
      // User is signed out.
      document.getElementById('sign').innerHTML = '<span class="glyphicon glyphicon-log-in"></span> Sign Up';
    }
  }, function(error) {
    console.log(error);
  });
}

function logout(){
  firebase.auth().signOut().then(function(){
    console.log("logged out");
    window.location = "home.html"
  }, function (err) {
    console.log("error");
  })
}
