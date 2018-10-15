var box = document.createElement('div')
  box.className = "modal"
  box.style.width = '700px';
  box.style.height = '500px';
  box.style.backgroundColor = '#F3F0F5'
  box.style.border = "2px solid"
  box.style.boxShadow = "4px 2px 10px"
  box.style.position = "fixed"
  box.style.zIndex = "2"
  box.style.marginTop = "10px"
  document.getElementById('logo').appendChild(box)

  var input = document.createElement('input')
  input.className = "input"
  input.style.position = "absolute"
  input.style.margin = "300px solid"
  box.appendChild(input);

  var submit = document.createElement('button')
  submit.className = "submit"
  submit.style.position = "absolute"
  submit.style.left = "275px"
  submit.style.top = "30px"
  submit.innerHTML = "Send me the savings!"
  submit.style.width = "150px"
  submit.style.height = "50px"
  box.appendChild(submit);


  var modal = document.createElement('div')
  modal.style.width = "50px";
  modal.style.height = "50px"
  modal.style.border = "1px solid #F3F0F5"
  modal.style.backgroundColor = "#F3F0F5"
  modal.style.marginLeft = '92%'
  modal.style.marginTop = '5px';
  box.appendChild(modal);

  var close = document.createElement('button')
  close.style.width = "30px";
  close.style.height = "30px"
  close.style.backgroundColor = "lightgrey"
  close.style.border = "1px solid"
  close.style.boxShadow = "2px 2px 5px"
  close.innerHTML = "X"
  close.style.marginLeft = '25%';
  close.style.marginTop = '25%';
  modal.appendChild(close); 

  var text = document.createElement('h1')
  text.style.width = "50%"
  text.style.height = "15%"
  text.style.backgroundColor = "#92A2A4"
  text.innerHTML.alignText = 'right'
  text.style.border = "2px solid"
  text.style.borderRadius = "5px"
  text.style.boxShadow = "4px 2px 10px"
  text.style.fontSize = "20px"
  text.style.paddingLeft = "20px"
  text.style.margin = "20px auto"
  box.appendChild(text)

  var headline = document.createElement('p')
  headline.style.width = "40%"
  headline.style.height = "10%"
  headline.style.position = "absolute"
  headline.style.margin = "2px 25px"
  headline.innerHTML = "Enter your email for 15% off your next purchase at <br> Michael Scott Paper Company"
  headline.style.textAlign = 'center'
  headline.style.fontSize = '20px'
  headline.style.color = "white"
  headline.backgroundcolor = "yellow"
  text.appendChild(headline)


close.addEventListener('click', function() {
  box.style.display = "none"
})



window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


var myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(41.411835, -75.665245),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

