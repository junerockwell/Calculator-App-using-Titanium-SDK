/* Author: J. H. Rockwell
 * 
 * Description: This is a calculator app that has
 * the most basic operations: addition, subtraction,
 * multiplication and division. 
 * 
 * Devices: iPhone and Android (only)
 * 
 * Buttons:
 * Clear - clears the textbox and resets all variables
 * Divide - indicates the division operation
 * Multiply - indicates the multiplication operation
 * Minus - indicates the subtraction operation
 * Plus - indications the addition operation
 * 
 * Numbers from 0-9 - enables the user to type a number
 * Decimal - enables the user to add a decimal point
 * 
 * Equals - indicates to do the operation of the previously
 * chosen operation.
 * 
 */

/* The one and only window that displays all the buttons
   and a textbox. */
var win = Titanium.UI.createWindow({
	title: '',
	backgroundColor: '#fff'
});

/*** Global variables. ***/
/* Indicates that the user wants to type a whole new nuumber
   and eliminates the concatenation of the most recently
   pressed number button. Initialized to true when the app
   launches so that the first number button pressed does not
   concatenate to the '0' in the textbox. */
var renew = true;
/* Stores the next operation to execute. Initialized to null
   so that the first chosen operation will be stored in 
   memory. */
var nextOperator = '';

/* Indicates that there is already a decimal point. But 
   during the intial launch, there should be no 
   expression so this is initialized to false. */
var decimalPointConcatenated = false;

/*** The one and only textfield ***/
/* This textfield displays a response to the user's work.
   As all textfields, it takes in strings. So all numbers
   entered will be concatenations of numbers pressed. 
   When a calculation occurs, its current value gets parsed
   to a float value and converted back to a string. This
   textbox also responds to all the buttons displayed and
   not to its corresponding OS' keyboard. */
var textbox = Titanium.UI.createTextField({
	borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#336699',
	top: 10,
	left: 10,
	width: 300,
	height: 60,
	enabled: false, // disables OS keyboard to launch
	textAlign: 'right',
	font:{fontSize:30,fontFamily:'Arial', fontWeight:'bold'},
	value: '0' // Display on initial launches
});
win.add(textbox);

/*** The Buttons ***/
/* The Clear button resets everything. This enables the user
   to indicate that they will start a whole new calculation and
   disregarding the previous calculation. */
var clearButton = Titanium.UI.createButton({
	title: 'Clear',
	top: 80,
	left: 10,
	width: 145,
	height: 70
	
});
win.add(clearButton);

/* The Seven Button enables the user to produce a 
   character of '7' to be concatenated to the
   current value of the textbox. */
var sevenButton = Titanium.UI.createButton({
	title: '7',
	top: 155,
	left: 10,
	width: 70,
	height: 70
});
win.add(sevenButton);

/* The Eight Button enables the user to produce a 
   character of '8' to be concatenated to the
   current value of the textbox. */
var eightButton = Titanium.UI.createButton({
	title: '8',
	top: 155,
	left: 85,
	width: 70,
	height: 70
});
win.add(eightButton);

/* The Nine Button enables the user to produce a 
   character of '9' to be concatenated to the
   current value of the textbox. */
var nineButton = Titanium.UI.createButton({
	title: '9',
	top: 155,
	left: 160,
	width: 70,
	height: 70
});
win.add(nineButton);

/* The Four Button enables the user to produce a 
   character of '4' to be concatenated to the
   current value of the textbox. */
var fourButton = Titanium.UI.createButton({
	title: '4',
	top: 230,
	left: 10,
	width: 70,
	height: 70
});
win.add(fourButton);

/* The Five Button enables the user to produce a 
   character of '5' to be concatenated to the
   current value of the textbox. */
var fiveButton = Titanium.UI.createButton({
	title: '5',
	top: 230,
	left: 85,
	width: 70,
	height: 70
});
win.add(fiveButton);

/* The Six Button enables the user to produce a 
   character of '6' to be concatenated to the
   current value of the textbox. */
var sixButton = Titanium.UI.createButton({
	title: '6',
	top: 230,
	left: 160,
	width: 70,
	height: 70
});
win.add(sixButton);

/* The One Button enables the user to produce a 
   character of '1' to be concatenated to the
   current value of the textbox. */
var oneButton = Titanium.UI.createButton({
	title: '1',
	top: 305,
	left: 10,
	width: 70,
	height: 70
});
win.add(oneButton);

/* The Two Button enables the user to produce a 
   character of '2' to be concatenated to the
   current value of the textbox. */
var twoButton = Titanium.UI.createButton({
	title: '2',
	top: 305,
	left: 85,
	width: 70,
	height: 70
});
win.add(twoButton);

/* The Three Button enables the user to produce a 
   character of '3' to be concatenated to the
   current value of the textbox. */
var threeButton = Titanium.UI.createButton({
	title: '3',
	top: 305,
	left: 160,
	width: 70,
	height: 70
});
win.add(threeButton);

/* The Zero Button enables the user to produce a 
   character of '0' to be concatenated to the
   current value of the textbox. */
var bigWideZeroButton = Titanium.UI.createButton({
	title: '0',
	top: 380,
	left: 10,
	width: 145,
	height: 70
});
win.add(bigWideZeroButton);

/* The Decimal Point Button enables the user to produce a 
   character, '.' to be concatenated to the
   current value of the textbox. */
var decimalPointButton = Titanium.UI.createButton({
	title: '.',
	top: 380,
	left: 160,
	width: 70,
	height: 70
});

win.add(decimalPointButton);

/* The Minus button enables the user to indicate a 
   subtraction is the next operation to execute. */
var minusButton = Titanium.UI.createButton({
	title: '-',
	top: 155,
	left: 235,
	width: 70,
	height: 70
});

win.add(minusButton);

/* The Plus button enables the user to indicate a 
   addition is the next operation to execute. */
var plusButton = Titanium.UI.createButton({
	title: '+',
	top: 230,
	left: 235,
	width: 70,
	height: 70
});
win.add(plusButton);

/* The Equals button enables the user to indicate the
   previously chosen operation should be executed and
   display a result to the textbox. */
var equalsButton = Titanium.UI.createButton({
	title: '=',
	top: 305,
	left: 235,
	width: 70,
	height: 145
});
win.add(equalsButton);

/* The Divide button enables the user to indicate a 
   division is the next operation to execute. */
var divideButton = Titanium.UI.createButton({
	title: '/',
	top: 80,
	left: 160,
	width: 70,
	height: 70
});
win.add(divideButton);

/* The Multiply button enables the user to indicate a 
   multiplicatoin is the next operation to execute. */
var multiplyButton = Titanium.UI.createButton({
	title: '*',
	top: 80,
	left: 235,
	width: 70,
	height: 70
});
win.add(multiplyButton);

/*** Listeners ***/

clearButton.addEventListener('click', function(e) {
	/* This is the listener for the Clear Button. */
	
	textbox.value = '0'; // Resets the textbox to '0'
	renew = true; 		 // Indicates a new expression should be made
	nextOperator = '';   // Resets so that there was no previous operation to do
	decimalPointConcatenated = false;
});

bigWideZeroButton.addEventListener('click', function(e) {
	/* This is the listener for the Zero Button */
	
	// If the value of the textbox does not equal to the
	// initiliaze '0' value, then concatenate the '0' 
	// character to the textbox by calling the 
	// buttonFunction(expression);
	if ( textbox.value.length > 0 && textbox.value != '0' )
		buttonFunction('0');	
});

oneButton.addEventListener('click', function(e) {
	/* This is the listener for One Button */
	
	// Call the buttonFunction(expression); 
	// concatenate '1' to the textbox value
	buttonFunction('1');
});

twoButton.addEventListener('click', function(e) {
	/* This is the listener for Two Button */
	
	// Call the buttonFunction(expression); 
	// concatenate '2' to the textbox value
	buttonFunction('2');
});

threeButton.addEventListener('click', function(e) {
	/* This is the listener for Three Button */
	
	// Call the buttonFunction(expression); 
	// concatenate '3' to the textbox value
	buttonFunction('3');
});

fourButton.addEventListener('click', function(e) {
	/* This is the listener for Four Button */
	
	// Call the buttonFunction(expression); 
	// concatenate '4' to the textbox value
	buttonFunction('4');
});

fiveButton.addEventListener('click', function(e) {
	/* This is the listener for Five Button */
	
	// Call the buttonFunction(expression); 
	// concatenate '5' to the textbox value
	buttonFunction('5');
});

sixButton.addEventListener('click', function(e) {
	/* This is the listener for Six Button */
	
	// Call the buttonFunction(expression); 
	// concatenate '6' to the textbox value
	buttonFunction('6');
});

sevenButton.addEventListener('click', function(e) {
	/* This is the listener for Seven Button */
	
	// Call the buttonFunction(expression); 
	// concatenate '7' to the textbox value
	buttonFunction('7');
});

eightButton.addEventListener('click', function(e) {
	/* This is the listener for Eight Button */
	
	// Call the buttonFunction(expression); 
	// concatenate '8' to the textbox value
	buttonFunction('8');
});

nineButton.addEventListener('click', function(e) {
	/* This is the listener for Nine Button */
	
	// Call the buttonFunction(expression); 
	// concatenate '9' to the textbox value
	buttonFunction('9');
});

decimalPointButton.addEventListener('click', function(e) {
	/* This is the listener for Decimal Point Button */
	
	// If there is already a decimal point, there is no 
	// need to add another one. Therefore, this listener
	// will not do anything.
	if ( decimalPointConcatenated ) ;
	// But if there is no decimal point concatenated to 
	// the current expression and the user desires to 
	// add one, then indicate that there is a decimal
	// point already concated and call the 
	// buttonFunction(expression); to concatenate the 
	// '.' to the textbox value.
	else 
	{
		decimalPointConcatenated = true;
		buttonFunction('.');
	}
});

minusButton.addEventListener('click', function(e) {
	/* This is the listener to the Minus Button */
	
	// The user has indicated the subtraction operation
	// so the app must enable user to type the next
	// expression to be evaluated with this operation.
	// So, we reset renew to true and call the
	// doOperation(operator, current); function and
	// pass this operator along with the current
	// value of the textbox.
	renew = true;
	doOperation('-', textbox.value);
});

plusButton.addEventListener('click', function(e) {
	/* This is the listener to the Plus Button */
	
	// The user has indicated the addition operation
	// so the app must enable user to type the next
	// expression to be evaluated with this operation.
	// So, we reset renew to true and call the
	// doOperation(operator, current); function and
	// pass this operator along with the current
	// value of the textbox.
	renew = true;
	doOperation('+', textbox.value);
});

multiplyButton.addEventListener('click', function(e) {
	/* This is the listener to the Multiply Button */
	
	// The user has indicated the multiplication operation
	// so the app must enable user to type the next
	// expression to be evaluated with this operation.
	// So, we reset renew to true and call the
	// doOperation(operator, current); function and
	// pass this operator along with the current
	// value of the textbox.
	renew = true;
	doOperation('*', textbox.value);
});

divideButton.addEventListener('click', function(e) {
	/* This is the listener to the Divide Button */
	
	// The user has indicated the division operation
	// so the app must enable user to type the next
	// expression to be evaluated with this operation.
	// So, we reset renew to true and call the
	// doOperation(operator, current); function and
	// pass this operator along with the current
	// value of the textbox.
	renew = true;
	doOperation('/', textbox.value);
});

equalsButton.addEventListener('click', function(e) {
	/* This is the listener to the Equals Button */

	// The user has indicated to execute the most
	// recently chosen operation. But we reset
	// renew to true so that the user can type-in
	// a new expression to be evaluated. Then, we
	// call doOperation(operator, current); function
	// and pass the equal character along with the 
	// current value of the textbox.
	renew = true;
	doOperation('=', textbox.value);
});

function buttonFunction(expression)
{
	/* This function displays a value in the textbox
	 * after variable expression is concatenated to 
	 * the current value of the textbox.
	 */
	
	// Check if renew is true. If so, the user 
	// desired to type-in a new expression to 
	// be evaluated with a most recently chosen
	// operation. Variable renew is then reset to
	// false so that the user can concatenate more
	// characters if more digits are desired before
	// indicating another operation. The textbox
	// value remains the same.
	if ( renew )
	{
		renew = false;
		textbox.value = expression;
	}
	// If variable renew is false, the user desires to 
	// add more digits to the current expression. So,
	// we update the textbox value by concatenating
	// the most recent character right after the 
	// current textbox value. 
	else textbox.value = textbox.value + expression;
}

function doOperation(operator, current)
{
	/* This function executes the indicated operation. It takes
	   in the new operation to be executed and the current 
	   expression appearing in the textbox. */
	  
	/* Since current equals to the current textbox value, it is 
	   a string. So it must be converted into a floating point
	   value in order to be mathematically used. */
	current = parseFloat(current);
	
	/* If variable nextOperator is empty, this means that user 
	   wants to start a whole new calculation not involving any
	   previous calculation or that the app has just started and
	   there was no previously indicated operator. So this
	   variable stores the newly indicated operator to be evaluated
	   after a second operand has been passed to the variable
	   current. The variable answer gets a copy of variable current.
	*/
	if ( nextOperator.length == 0 ) 
	{
		nextOperator = operator;
		answer = current;
	}
	/* If variable nextOperator is NOT empty, this means that there
	   is a previously indicated operation that must now be 
	   executed. For this app, there are only four operations 
	   including the equal sign expression. */
	else
	{
		switch ( nextOperator )
		{
			case '+': answer = answer + current; break;
			case '-': answer = answer - current; break;
			case '*': answer = answer * current; break;
			case '/': answer = answer / current; break;
			case '=': answer = current; break;
		}
	}
	
	/* By this time, the answer has been calculated. But it is 
	   still a floating point value. So, it must be converted
	   to a string and display it to the textbox informing the
	   user of the result. */
	textbox.value = answer.toString();
	
	/* Variable nextOperator gets the newly indicated operator to be
	   used to evaluate the next expression. */
	nextOperator = operator;
	
	/* Indicate that decimal point can be added. */
	decimalPointConcatenated = false;
	
}

win.open();
