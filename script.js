
// *FUNKTION FÖR ATT SHOPPA MUNKAR //

//skapa en array av alla minus/plus element
const plusButton = document.querySelectorAll('button[data-operator="plus"]');
const minusButton = document.querySelectorAll('button[data-operator="minus"]');

//loop för att hitta alla plusknappar och koppla knapptryckning till dom 
for (i = 0; i < plusButton.length; i++) {
    plusButton[i].addEventListener('click', plusButtonPress);
}

//loop för att hitta alla minusknappar och koppla knapptryckning till dom 
for (i = 0; i < minusButton.length; i++) {
    minusButton[i].addEventListener('click', minusButtonPress);
}

//funktion för plusknappen + 1
function plusButtonPress(x) {

    const findCurrentDonutAmount = x.currentTarget.parentElement.querySelector('.amount');

    let currentDonutAmount = Number(findCurrentDonutAmount.innerHTML);

    findCurrentDonutAmount.innerHTML = Number(currentDonutAmount) + 1;

    updatePrice(x);
}

//funktion för minusknappen - 1
function minusButtonPress(x) {

    const findCurrentDonutAmount = x.currentTarget.parentElement.querySelector('.amount');

    let currentDonutAmount = Number(findCurrentDonutAmount.innerHTML);
    if (currentDonutAmount == 0) {
        return;
    }
    findCurrentDonutAmount.innerHTML = Number(currentDonutAmount) - 1;

    updatePrice(x);
}

//funktion för att uppdatera totala summan
function updatePrice(x) {
    //hittar antalet
    const findCurrentDonutAmount = x.currentTarget.parentElement.querySelector('.amount');
    let currentDonutAmount = Number(findCurrentDonutAmount.innerHTML);
    //hittar priset för munken
    const findCurrentDonutPrice = x.currentTarget.parentElement.querySelector('.price');
    let currentDonutPrice = Number(findCurrentDonutPrice.innerHTML);
    //hittar totala summan
    const findCurrentDonutSum = x.currentTarget.parentElement.querySelector('.sum');
    let currentDonutSum = Number(findCurrentDonutSum.innerHTML);
    //tar antal * priset för totala summan
    findCurrentDonutSum.innerHTML = currentDonutAmount * currentDonutPrice;
}