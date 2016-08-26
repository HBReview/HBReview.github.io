var score=0;//set score
var total=10;//set total no of question
var point=2;//point per correct answer
var highest=total*point;
//initialization
function init(){
	//set correct answers
	sessionStorage.setItem("a1",'b');
	sessionStorage.setItem("a2",'b');
	sessionStorage.setItem("a3",'b');
	sessionStorage.setItem("a4",'a');
	sessionStorage.setItem("a5",'c');
	sessionStorage.setItem("a6",'c');
	sessionStorage.setItem("a7",'a');
	sessionStorage.setItem("a8",'a');
	sessionStorage.setItem("a9",'a');
	sessionStorage.setItem("a10",'c');
}



$(document).ready(function(){
	//hide question
	$(".questionForm").hide();
	//show first question
	$('#q1').show();

	$('.questionForm #submit').click(function(){
		//Get data attribute
		current =$(this).parents('form:first').data('question');

		next=$(this).parents('form:first').data('question')+1;
		//hide a question
		$('.questionForm').hide();
		//show next question
		$('#q'+next+'').fadeIn(300);
		process(''+current+'');
		return false;
	});

	



});
function process(n){
	
		var submitted=$('input[name=q'+n+']:checked').val();
		if(submitted==sessionStorage.getItem('a'+n+'')){
			score=score+point;
		}
	
	
	if(n==total){
		
        $('#result').html('<h3>Your Final Score is: '+score+' out of 20<h3><a href="index.html">Take Quiz Again</a>');
	}
	
 return false;
}


//event listener
window.addEventListener('load',init,false);
