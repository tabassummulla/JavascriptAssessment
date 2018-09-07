	


		

		
		function dropDownJSON() {

			if(window.document.getElementById("selectJSON")) {

				document.getElementById("listJSON").setVisibility = "visible";


			}
			 else {

		var items = [{
			item: "JSONManipulation" , link : "Trainer.html" }];

	 	var divJson = document.getElementById("listJSON"); 

		var list1 = document.createElement("select");
		
		list1.id = "selectJSON" ;


		divJson.appendChild(list1);


		var option = document.createElement("option");
		option.id = "opJ";
		option.placeholder = "select...";


		option.value = items[0];
		option.text = items[0].item;

		list1.appendChild(option);

			
		}
	}



	//option.addEventListener("onselect", window.location.href="Trainer.html");
	


				
		function dropDownForm() {


		if(window.document.getElementById("selectForm")) {


			} else {

		var items2 = [{
			item: "Entry Form" , 
			link : "EntryForm.html" } ,

			{ item: "Form Data", 
			link : "FormData.html" }];


	 	var divForm = document.getElementById("listform"); 

		var list2 = document.createElement("select");
		
		list2.id = "selectForm" ;

		divForm.appendChild(list2);

		
		for(i=0; i< items2.length;i++) {

			var opt = items2[i].item;
			var option = document.createElement("option");
			option.id = "opF";

			option.text = opt;
			option.value - opt;

			list2.appendChild(option);

		}


}
}


function goAway(){

var element = document.getElementById("listJSON");

element.style.visibility = "hidden";

}


	
	function search() {


	var requestURL = "https://raw.githubusercontent.com/tabassummulla/JavascriptAssessment/master/data.json";

	var request = new XMLHttpRequest();

	request.open('GET',requestURL);

	request.responseType = 'json';

	request.send();

	request.onload = function() {

		var requestData = request.response;

		var userI = document.getElementById("userInput").value ;

		
		var result = [];

		result.push(requestData.filter(a => Object.values(a).includes(userI)));

		document.getElementById("results").innerHTML = "<pre>" + JSON.stringify(result,null,7) + "</pre>";




	}


	}


	
















 		function validate() {


		var addressInput = document.getElementById("address");
		var dateInput = document.getElementById("DOB");
		var postInput = document.getElementById("postcode");
	

	 	var email = document.getElementById("uemail");
		var name = document.getElementById("name");

	 	var emailFormat = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/;
		var nameFormat = /[a-zA-Z]/;
		var addressFormat = /[a-zA-Z0-9]/;
		var postcodeFormat = /[a-zA-Z].[0-9]/;


			if(name.value == "" || email.value == "" || addressInput.value == "" || dateInput.value == "" || postInput.value ==""){

 			alert("Please fill in all required fields");


 		}  else if(!(name.value.match(nameFormat))){
 						
 				alert("Name not Valid");

 			document.getElementById("name").focus(); 

 		return false;

 	}  else if(!(email.value.match(emailFormat)) ){

							alert("Email not Valid");
 						document.getElementById("uemail").focus();

 						return false;
 					}

 			else if(!(addressInput.value.match(addressFormat)) ){

						alert("Address not Valid");

 					document.getElementById("address").focus();

 					return false;
 					}


 				else if( ! (postInput.value.match(postcodeFormat))){

						alert("Postcode not Valid");
 					document.getElementById("postInput").focus();

 					return false;


 				}
 				}


 				

 				
		
		




 	

 	

		




