function validateForm() {
    let x = document.forms["myForm"]["ccode"].value;
    if (x == "") {
      alert("Code must be filled out");
      return false;
    }

    let y = document.forms["myForm"]["pfile"].value;
    if (y == "") {
      alert("File must be uploaded");
      return false;
    }
  }

  const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.send();
xhr.responseType = "json";
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const data = xhr.response;
    console.log(data);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};

const xhr = new XMLHttpRequest();
xhr.open("PATCH", "https://jsonplaceholder.typicode.com/posts/101");
xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
const body = JSON.stringify({
  body: "My PATCH request",
});
xhr.onload = () => {
  var data = JSON.parse(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == "200") {
    console.log(data);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
xhr.send(body);

var form = document.getElementById("FORM");
var data = new FormData(form);
fetch("URL", { method: "POST", body: data });

function getPersonInfo(){
				var name = document.getElementById('name').value;
				
				var ajaxRequest = new XMLHttpRequest();
				ajaxRequest.onreadystatechange = function(){
					if(ajaxRequest.readyState == 4){
						if(ajaxRequest.status == 200){
							var person = JSON.parse(ajaxRequest.responseText);
							document.getElementById('birthYear').value = person.birthYear;
							document.getElementById('about').value = person.about;
						}
					}			
				}
				ajaxRequest.open('GET', 'http://localhost:8080/people/' + name);
				ajaxRequest.send();
			}
			
			function setPersonInfo(){
				var name = document.getElementById('name').value;
				var about = document.getElementById('about').value;
				var birthYear = document.getElementById('birthYear').value;
				
				var postData = 'name=' + name;
				postData += '&about=' + encodeURIComponent(about);
				postData += '&birthYear=' + birthYear;
				
				var ajaxRequest = new XMLHttpRequest();
				ajaxRequest.open('POST', 'http://localhost:8080/people/' + name);
				ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				ajaxRequest.send(postData);
      }