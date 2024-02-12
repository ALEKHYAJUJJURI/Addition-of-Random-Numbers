let messageGenaretor = document.getElementById('messageGenaretor');

alert("First Step: Click on Restart!!!");

let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');



let userId = document.getElementById('userId');
//console.log(firstRandomNum);
//console.log(secondRandomNum);

let checkBtn = document.getElementById('checkButton');
let resetBtn = document.getElementById('resetButton');

function onCheckFun(){
    
    userIdValue = parseInt(userId.value);
  firNum = parseInt(firstNumber.textContent); 
  secNum = parseInt(secondNumber.textContent);
  sum = firNum+secNum;
  
  if (userIdValue === sum){
    messageGenaretor.textContent = "Congratualations! You'r right🤩";
    messageGenaretor.classList.add('bg-success');
    messageGenaretor.classList.remove("bg-secondary");
  }
  else if (userId.value === ""){
    alert("Please!🤗  Enter Valid Input!")
  }
  else{
    messageGenaretor.textContent = "Sorry! Try Again😥!";
    messageGenaretor.classList.remove('bg-success');
    messageGenaretor.classList.add("bg-secondary");
  }
};

function onResetFun(){
    let firstRandomNum = Math.random()*100;
let secondRandomNum = Math.random()*100; 
   firstNumber.textContent = Math.ceil(firstRandomNum);
   secondNumber.textContent = Math.ceil(secondRandomNum); 

    messageGenaretor.textContent = "";
    userId.value = "";
};


