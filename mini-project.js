function changeInnerText(elem, increment, isIncrease){
    if(isIncrease){
        return Number(elem) + increment;
    }
    return Number(elem) - increment;
}


document.getElementById("plus-serving").addEventListener("click", function(){
    document.getElementById("serving-value").innerText = changeInnerText(document.getElementById("serving-value").innerText, 1, true);
    document.getElementById("flour-quantity").innerText = changeInnerText(document.getElementById("flour-quantity").innerText, 75, true);
    document.getElementById("butter-quantity").innerText = changeInnerText(document.getElementById("butter-quantity").innerText, 37.5, true);
    document.getElementById("sugar-quantity").innerText = changeInnerText(document.getElementById("sugar-quantity").innerText, 50, true);
    document.getElementById("chocolate-quantity").innerText = changeInnerText(document.getElementById("chocolate-quantity").innerText, 15, true);
    document.getElementById("eggs-quantity").innerText = changeInnerText(document.getElementById("eggs-quantity").innerText, 0.5, true);    
  });

  document.getElementById("minus-serving").addEventListener("click", function(){
    if(Number(document.getElementById("serving-value").innerText) > 1){
        document.getElementById("serving-value").innerText = changeInnerText(document.getElementById("serving-value").innerText, 1, false);
        document.getElementById("flour-quantity").innerText = changeInnerText(document.getElementById("flour-quantity").innerText, 75, false);
        document.getElementById("butter-quantity").innerText = changeInnerText(document.getElementById("butter-quantity").innerText, 37.5, false);
        document.getElementById("sugar-quantity").innerText = changeInnerText(document.getElementById("sugar-quantity").innerText, 50, false);
        document.getElementById("chocolate-quantity").innerText = changeInnerText(document.getElementById("chocolate-quantity").innerText, 15, false);
        document.getElementById("eggs-quantity").innerText = changeInnerText(document.getElementById("eggs-quantity").innerText, 0.5, false);
      }
  });

 