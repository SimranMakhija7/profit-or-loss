/*
    Take the user's stock price for one stock when he bought it.
    Take the stocks quantity as well.
    Now take today's price of that Stock.
    Tell the Profit / Loss, the user's making -
        In Percentage
        In Absolute
*/

const currInput    = document.querySelector("#current") , 
      initialInput = document.querySelector("#initial"), 
      qtyInput     = document.querySelector("#quantity"), 
      tellBtn      = document.querySelector(".btn"),
      outputDiv    = document.querySelector("#output");


const populateOutput = (text) =>{
    outputDiv.innerHTML = text;
}      
tellBtn.addEventListener("click",()=>{
    let initialValue = initialInput.value,
        quantity     = qtyInput.value,
        currentValue = currInput.value;
    if(initialValue === "" || quantity ==="" || currentValue === "")
        populateOutput("<span id=\"error\">Please provide valid input</span>");
    else{
        initialValue = Number(initialInput.value),
        quantity     = Number(qtyInput.value),
        currentValue = Number(currInput.value);
        let diff = currentValue - initialValue,
            absolute = quantity*diff,
            percent = (diff/initialValue)*100,
            profit = false;
        if(diff > 0) profit = true;
        if(profit){
            populateOutput("Yay! You made a profit of " + absolute + " and the percent is "+ percent)
        }else{
            populateOutput("Oh no! You incurred a loss of " + ((-1)*absolute) + " and the percent is "+ ((-1)*percent))
        }
    }
})