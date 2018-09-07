	


		

		
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

	
	function undrop() {


		window.onmouseleave = function(event) {

			document.getElementById("listJSON").setVisibility = "hidden";
	}
}
		




	
	function search() {


	var requestURL = "/JavaScriptAsessement/data.js";

	var request = new XMLHttpRequest();

	request.open('GET',requestURL);

	request.responseType = 'json';

	request.send();


	request.onload = function() {


		var userInput = document.getElementById("search").value ;

		var requestData = request.response;

		var result = [];

		result.push(requestData.filter(a => Object.values(a).includes(userInput)));

		document.getElementById("results").innerHTML = "<pre>" + JSON.stringify(result,null,7) + "</pre>";




	}


	}

		




