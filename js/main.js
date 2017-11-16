var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");
var pageCounter = 1;
btn.addEventListener("click" , function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET' , 'https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData);//call a custom function with passing varaible// 
	};
	ourRequest.send();
	pageCounter++;
	if( pageCounter > 3){
		alert("add css");
		btn.classList.add("hide");
	}
});
function renderHTML(data){		
	var htmlString = " ";
	for (var i = 0; i < data.length; i++) {
			htmlString += "<p>"+data[i].name+"is a"+data[i].species +" that like to eat "; 
			for (var ii = 0; ii < data[i].foods.likes.length; ii++) {
				htmlString += data[i].foods.likes[ii];
			};
			htmlString += " .</p>";
		};										  						//creat a custom function 
	animalContainer.insertAdjacentHTML('beforeend' , htmlString);  	 	//insert content at a specified position-Syntax: element.insertAdjacentHTML(position, content);
};																		//position type: beforebegin, afterend, afterbegin, beforeend


