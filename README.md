# Universal Form validator 
------------
What This script does:-

1. This is a very very useful script for all the web desingers and developers because It does one of the most performing task in the developing a website
And we that validating any form is a very hactic for us. We needs to worry about that what user can put in that and what will not.

I go through all the possible combination every field can have and what user can enter and created a very simple to use and does very good for us.

2. This validate each and every field of your from with nice dotted red color warring for the user, incase he dose some mistakes.

3. You can use it with your HTML 5 Vaildations and some other enhanced options.

4. It uses bootstrap as a Font end this simply means that you can use it with bootstrap means there is no CSS Conflict for it.

Using This Application
------------

1. Create any form with specifying id like this 

  <form id="comment" method="POST" action="">
  </form>
  
2. Use a simple one line script to valideate your form inside your jquery function

		$("#comment").validate();
		
3. This simply validate your form with what you have specided. You can use your HTML validators for useing it.

4. You can add your own style for displaying error using embaded sytle in the same page

<style>
	#commentForm {
		width: 1000px;
	}
	#commentForm label {
		width: 400px;
	}
	#commentForm label.error, #commentForm input.submit {
		margin-left: 23px;
	}
	
	form.cmxform label.error {
		display: none;
	}
	</style>

	
