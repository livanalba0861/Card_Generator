
  
  window.onload = function() {
    let cardType = ["♣", "❤", "♠", "♦"] 
    let cardNumber =["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
  
  
    function randomElement(wholeCard) {

      return wholeCard[Math.floor(Math.random() * wholeCard.length)];
    }
  
    let center = randomElement(cardType); 
    
    let upCorner = randomElement(cardNumber);

   
    const p1Element = document.getElementsByClassName("upCorner")

    const p2Element = document.getElementsByClassName("downCorner")

    const p3Element = document.getElementsByClassName("center")

    p1Element[0].innerText = upCorner;
    p2Element[0].innerText = upCorner;
    p3Element[0].innerText = center;

    if (center === "❤" || center === "♦" ){
        p1Element[0].style.color = "red";
        p2Element[0].style.color = "red";
        p3Element[0].style.color = "red";
    }
  }

