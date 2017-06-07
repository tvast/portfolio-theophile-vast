	

	function generateString() {
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for( var i=0; i < 20; i++ ) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}

		/*console.log(text) ;*/
		/*document.getElementById("foo").innerHTML= text;*/
		// parent.location.hash = text;

		document.getElementById("isRandom").innerHTML=text

/*		if (window.history.state) {
		   /*window.history.pushState(state, title, href);
		   var stateObj = { foo: "bar" };
		   window.history.pushState(stateObj, "hello", text);
}*/
		
		
	}

  function urlRandom() {
    
  }



	var myVar = setInterval( generateString, 100);


	function myStopFunction() {


		clearInterval(myVar);
		document.getElementById("isRandom").innerHTML= "Portfolio"
	}


	/* Open when someone clicks on the span element */
	function openNav() {
		document.getElementById("myNav").style.width = "100%";
	}

	/* Close when someone clicks on the "x" symbol inside the overlay */
	function closeNav() {
		document.getElementById("myNav").style.width = "0%";
	}