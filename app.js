 +function(){
const boxes = document.querySelector(".boxes");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

player1.classList.add("active");


boxes.addEventListener("click", (e) => {
	
	/*If the target is a list item and it doesn't have the class box-filled-1 or box-filled-2 
	and it doesn't have the checked class then run the code. This is done in order to stop the 
	person from clicking a box that is already occupied. The checked class is added in order to establish 
	if the game ends in a draw. when the code runs, fill the box with appropriate class X or O, also change 
	the player1 or player2 at the top which tells you who's turn it is */
	        
if (e.target.tagName == "LI"){
if(e.target.className !== "box box-filled-1" && e.target.className !== "box box-filled-2" && e.target.className !== "box box-filled-1 checked" && e.target.className !== "box box-filled-2 checked" ){

			
	if (player1.classList.contains("active")){
    if (e.target.tagName == "LI" ) {	
   e.target.classList.add("box-filled-1");
   
	player1.classList.remove('active');
	player2.classList.add('active');
	
	}}
	
     else if (player2.classList.contains("active")){
     if (e.target.tagName == "LI" ) {	
   e.target.classList.add("box-filled-2");
    player2.classList.remove('active');
	player1.classList.add('active');}}


}}});	

/* These will add the image of the O or the X as background images when hovered over the board,
 they will disappear when the mouse is take hovered off with mouseout */
	

boxes.addEventListener("mouseout", (e) => {
	
	
 if (player1.classList.contains("active")){
  if (e.target.tagName == "LI") {
 e.target.style.backgroundImage = "";}}
	
	else if (player2.classList.contains("active")){
  if (e.target.tagName == "LI") {
	e.target.style.backgroundImage = "";}}
	

	});
  
 
 
boxes.addEventListener("mouseover", (e) => {
	

	
   if (player1.classList.contains("active")){
   if (e.target.tagName == "LI") {
   e.target.style.backgroundImage = "url(img/o.svg)";}}
	
	
	
  else if (player2.classList.contains("active")){
   if (e.target.tagName == "LI") {
  e.target.style.backgroundImage = "url(img/x.svg)";}}
	
	
	
  if(e.target.classList.contains("box-filled-1")){
	if (e.target.tagName == "LI") {
  e.target.style.backgroundImage = ""}}
			
	else if(e.target.classList.contains("box-filled-2")){
	if (e.target.tagName == "LI") {
			e.target.style.backgroundImage = ""}}
			
	
});

//------------------------------------------------------------------------------------------------------------//


/* This section of code determines the winner or a tie. checkrow function looks through the 
checkWin function to see whether a winning line has been found, using the arguments of a,b,c as the numbers and then cls as the class. 
The class is either box-filled-1 or box-filled-2. If it is box-filled-1 then show particular text and screen, if box-filled-2 show particular text 
and screen showcasing that X has won. The last bit of code loops through the list items, if they have either box-filled-1 or box-filled-2 they get asigned the class
checked. if all the list items are checked, then it is a draw. */

const winningScreen = document.getElementById("finish");
const winningMessage = document.getElementById("paragraph");
const board = document.getElementById("board");
const li = document.getElementsByClassName("box");
const newGameButton = document.getElementById("newGameButton");
const startScreen = document.getElementById("start");
const startButton = document.getElementById("startButton");


board.style.display = "none";
winningScreen.style.display = "none";

function checkRow(a, b, c, cls) {
    return li[a].classList.contains(cls) &&
           li[b].classList.contains(cls) &&
           li[c].classList.contains(cls);
}

function checkWin(cls) {
    return checkRow(0, 1, 2, cls) || checkRow(0, 3, 6, cls) || checkRow(0, 4, 8, cls) ||
           checkRow(3, 4, 5, cls) || checkRow(6, 7, 8, cls) || checkRow(1, 4, 7, cls) ||
           checkRow(2, 5, 8, cls) || checkRow(2, 4, 6, cls);
}
		
		
boxes.addEventListener("click", () => {

        if (checkWin('box-filled-1')) {
		    winningScreen.style.display = "block";
	        winningScreen.classList.add("screen-win-one")
            board.style.display = "none";
	        winningMessage.textContent = "O player has won!"};
        if (checkWin('box-filled-2')) {
			winningScreen.style.display = "block";
	        winningScreen.classList.add("screen-win-two")
            board.style.display = "none";
		    winningMessage.textContent = "X player has won!";}
			
		for(let i = 0; i < li.length; i ++){
        if(li[i].classList.contains("box-filled-1") || li[i].classList.contains("box-filled-2")){
           li[i].classList.add("checked")}

        if (li[0].classList.contains("checked") && li[1].classList.contains("checked") && li[2].classList.contains("checked") &&
            li[3].classList.contains("checked") && li[4].classList.contains("checked") && li[5].classList.contains("checked") &&
            li[6].classList.contains("checked") && li[7].classList.contains("checked") && li[8].classList.contains("checked")){
			     winningScreen.classList.remove("screen-win-one")
			     winningScreen.style.display = "block";
	             winningScreen.classList.add("screen-win-tie")
                 board.style.display = "none";
		         winningMessage.textContent = "It's a draw!"
			
		}} 
				 
			
});
	
// this refreshes the board with location.reload()	


newGameButton.addEventListener("click", () => {
	location.reload()
	winningScreen.style.display = "none";
	startScreen.style.display = "block"
		
})


		
	startButton.addEventListener("click", () => {
	startScreen.style.display = "none";
	board.style.display = "block";
	
		
})
		
		
		
}();


