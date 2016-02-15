var counter = 1;
var limit = 3;
function addInput(divName, divName2){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
	       $('#name').clone().attr('id', 'name_'+ counter ).attr('name', 'name_'+ counter).attr('placeholder', 'name_'+ counter).insertAfter($('[id^=name]:last'));		   //<--For DEMO
		   
		   
           $('#email').clone().attr('id', 'email_'+ counter).attr('name', 'email_'+ counter).attr('placeholder', 'email_'+ counter).insertAfter($('[id^=email]:last'));
		  
          counter++;
     }
}