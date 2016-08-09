window.onload = function () {
    var buttons = document.getElementsByTagName('button'),
        result = document.querySelectorAll('.result p')[0],
        clear = document.getElementsByClassName('clear')[0];
  
    for (var i = 0; i < buttons.length; i += 1) {
    if (buttons[i].innerHTML === '=') {
      buttons[i].addEventListener("click", calculate(i));
    } 
    else if (buttons[i].innerHTML === 'n!') {
        buttons[i].addEventListener("click", factorial(i));
        }
    else if (buttons[i].innerHTML === 'log') {
        buttons[i].addEventListener("click", logarithm(i));
    }
    else if (buttons[i].innerHTML === 'sin') {
        buttons[i].addEventListener("click", sine(i));
    }
    
    else if (buttons[i].innerHTML === 'cos') {
        buttons[i].addEventListener("click", cosine(i));
    }
        
    else if (buttons[i].innerHTML === "n2") {
        buttons[i].addEventListener("click", power2(i));
    }
    
    else if (buttons[i].innerHTML === "n3") {
        buttons[i].addEventListener("click", power3(i));
    }
    
    else if (buttons[i].innerHTML === '√') {
        buttons[i].addEventListener("click", squareroot(i));
    }
    
    else if (buttons[i].innerHTML === "tan") {
        buttons[i].addEventListener("click", tangent(i));
    }
    
    else if (buttons[i].innerHTML === 'exp') {
        buttons[i].addEventListener("click", expr(i));
    }
    
    else {
      buttons[i].addEventListener("click", addValue(i));
    }
  }
  
  clear.onclick = function () {
    result.innerHTML = '';
  };  
  
  function addValue(i) {
    return function () {
      if (buttons[i].innerHTML === '÷') {
         result.innerHTML  += '/';
      } else if (buttons[i].innerHTML === 'x') {
         result.innerHTML  += '*';
      } else {
				result.innerHTML += buttons[i].innerHTML;
			}
    };
      
  }
  
  function calculate(i) {
    return function () {
			var final_res = result.innerHTML;
        	var bugFix = final_res.replace(/\d+/g, function(numb){ 
				return parseInt(numb, 10);
			});
			
			  
      result.innerHTML = eval(bugFix);
    };
  }
    
    function factorial(no) {
        return function () {
             var j, fact = 1;
            no = parseInt(result.innerHTML);
            for(j = 1; j <= no; j++) {
                fact = fact * j;
            };
            console.log("fac: ", fact);
            result.innerHTML = fact;  
        };    
    }

    
    function logarithm(i) {
        return function (){
            i = parseInt(result.innerHTML);
            result.innerHTML = Math.log(i);
        };
    }
    
    
    function sine(i) {
        return function (){
            i = parseInt(result.innerHTML);
            result.innerHTML = Math.sin(i);
        };
    }
    
    function tangent(i) {
        return function (){
            i = parseInt(result.innerHTML);
            result.innerHTML = Math.tan(i);
        };
    }
    
    function expr(i) {
        return function (){
            i = parseInt(result.innerHTML);
            result.innerHTML = Math.exp(i);
        };
    }
    
    function cosine(i) {
        return function (){
            i = parseInt(result.innerHTML);
            result.innerHTML = Math.cos(i);
        };
    }
    
    function power2(i) {
        return function (){
            i = parseInt(result.innerHTML);
            result.innerHTML = Math.pow(i,2);
        };
    }
    
    
    function power3(i) {
        return function (){
            i = parseInt(result.innerHTML);
            result.innerHTML = Math.pow(i,3);
        };
    }
    
    function squareroot(i) {
        return function (){
            i = parseInt(result.innerHTML);
            result.innerHTML = Math.sqrt(i);
        };
    }
};