$(document).ready(function(){
	
	/*--- Display information modal box ---*/
	$('.what').click(function(){
		$('.overlay').fadeIn(1000);
	});

	/*--- Hide information modal box ---*/
	$('a.close').click(function(){
		$('.overlay').fadeOut(1000);
	});

	/*--- set initial variables ---*/
	var guessCounter = 0;
	var secretNum = makeSecretNum();

	/*--- cleanup ---*/
	function cleanUp() {
		$('#feedback').empty();
		event.preventDefault();
	};

	/*--- generate a secret number ---*/
	function makeSecretNum() {
		var secretNum = Math.floor(Math.random() * 100) + 1;
		return secretNum;
	};

	/*--- guess count ---*/
	function setguessCounter() {
		$('#count').text(guessCounter);
	};
	
	/*--- show guesses so far ---*/
	function showGuessNum() {
		var inputGuess = $('input[name=userGuess]').val();
		$('#guessList').append('<li>'+inputGuess+'</li>');
	};

	/*--- updates guess count and gives feedback ---*/
	function update() {
		guessCounter++;
		setguessCounter();
		showGuessNum();
	};

	/*--- successful guess---*/
	function successGuess() {
		$('.success').fadeIn(700).fadeOut(2000);
	};

	/*--- start a new game ---*/
	function newGame() {
		cleanUp();
		$('#feedback').text('Make your guess!');
		$('#guessList').empty();

		/*--- resets secre number and counter ---*/
		makeSecretNum();
		secretNum = makeSecretNum(); //reset secret number
		$('#count').text('0');
		guessCounter = 0; //reset guess count
	};


		$('.new').on('click', function() {
		newGame();
	});

	/*--- entering guesses ---*/
	$('.button').on('click', function() {
		cleanUp();
		var inputGuess = $('input[name=userGuess]').val();
		
		if (inputGuess == secretNum) {
			$('#feedback').text(inputGuess + ' is correct!!');
			successGuess();
		
		} else if (isNaN(inputGuess)) {
			$('#feedback').text('Enter a number, not nonsense');

		} else if (inputGuess == '') {
			$('#feedback').text('Enter something');

		} else if (inputGuess % 1 != 0) {
			$('#feedback').text('Just whole numbers please');

		} else if (inputGuess <= 0 || inputGuess > 100 ) {
			$('#feedback').text('Enter a number 1 - 100');

		} else if (Math.abs(secretNum - inputGuess) < 5) {
			$('#feedback').text(inputGuess + ' is hotter');
			update();

		} else if (Math.abs(secretNum - inputGuess) < 10) {
			$('#feedback').text(inputGuess + ' is hot');
			update();

		} else if (Math.abs(secretNum - inputGuess) < 20) {
			$('#feedback').text(inputGuess + ' is warm');
			update();

		} else if (Math.abs(secretNum - inputGuess) < 30) {
			$('#feedback').text(inputGuess + ' is cool');
			update();

		} else if (Math.abs(secretNum - inputGuess) < 40) {
			$('#feedback').text(inputGuess + ' is colder');
			update();

		} else if (Math.abs(secretNum - inputGuess) < 50) {
			$('#feedback').text(inputGuess + ' is cold like Antarctica');
			update();

		} else {
			$('#feedback').text(inputGuess + ' is cold like ice');
			update();
		};
		
		/*--- removes entry from input after guess ---*/
		$('#userGuess').val('');
		return false;
	});
});