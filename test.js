
  userInput = () =>{
    let input = document.getElementById("userType").value
    
    ga(input)
  }


//=================================
let bingo = Math.floor(Math.random()* 100)
let small = 0
let big = 99
//==================================






ga= (input) => {  

  if (input <= 0){
    document.querySelector("h2").textContent = "Error! put a bigger number than 0 "
  }
  else if(input == small || input == big){
    document.querySelector("h2").textContent = "Error! dont put in the same number: " + small + " , " + big

  }

  else if(input >= 100){
    document.querySelector("h2").textContent = "Error! put a smaller number than 100"
  }
  else if (input == bingo){
    document.querySelector("h2").textContent = "Bingo! the number is " + bingo
  }
  else if (input == bingo-1 && big == bingo+1){
    document.querySelector("h2").textContent = "Bingo! the number is " + bingo
  }
  
  else if (input == bingo+1 && small == bingo+1){
    document.querySelector("h2").textContent = "Bingo! the number is " + bingo
  }

  else if (input > bingo){
    big = input
    document.querySelector("h2").textContent = "(" + small + " , " + big + ")"
    
  }
  else {
    small = input;
    document.querySelector("h2").textContent = "(" + small + " , " + big + ")"
    
  }
}
