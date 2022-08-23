document.getElementById('btn-calculate').addEventListener('click', function () {
    const div = document.getElementsByTagName("li").length;
    const playerCostValue = document.getElementById('dis-player-cost');
    const playerCost = playerCostValue.value;
    const playerCostAmount = parseFloat(playerCost);
    if (isNaN(playerCostAmount)) {
        alert('Invalid Input');
        return;
    }
    const totalCost = div * playerCostAmount;
    const ShowCost = document.getElementById('showCost1');
    ShowCost.innerText = totalCost;
})




document.getElementById('btn-calculate-total').addEventListener('click', function () {

    const totalPlayerCost = document.getElementById('showCost1');
    const totalPlayerCostString = totalPlayerCost.innerText;
    const playerTotalCost = parseFloat(totalPlayerCostString);

    const manager = document.getElementById('dis-manager-cost');
    const managerCost = manager.value;
    const managerTotalCost = parseFloat(managerCost);


    const coach = document.getElementById('dis-coach-cost');
    const coachCost = coach.value;
    const coachTotalCost = parseFloat(coachCost);

    if (isNaN(coachTotalCost && managerTotalCost)) {
        alert('Invalid Input');
        return;
    }

    const totalExpence = playerTotalCost + managerTotalCost + coachTotalCost;

    const displayTotalExpence = document.getElementById('showCost2');
    displayTotalExpence.innerText = totalExpence;
})