
let breakfastExpense = 0.0;
let lunchExpense = 0.0;
let dinnerExpense = 0.0;
let userName = "";

function submitName() {
    userName = document.getElementById("nameInput").value;
    document.getElementById("greeting").innerText = `Hello, ${userName}! Here is your total expense:`;
    updateTotal();
}

function updateExpense(meal) {
    if (meal === 'breakfast') {
        breakfastExpense = parseFloat(document.getElementById("breakfastInput").value) || 0.0;
    } else if (meal === 'lunch') {
        lunchExpense = parseFloat(document.getElementById("lunchInput").value) || 0.0;
    } else if (meal === 'dinner') {
        dinnerExpense = parseFloat(document.getElementById("dinnerInput").value) || 0.0;
    }
    updateTotal();
}

function adjustExpense(meal, amount) {
    if (meal === 'breakfast') {
        breakfastExpense = parseFloat((breakfastExpense + amount).toFixed(2));
        document.getElementById("breakfastInput").value = breakfastExpense;
    } else if (meal === 'lunch') {
        lunchExpense = parseFloat((lunchExpense + amount).toFixed(2));
        document.getElementById("lunchInput").value = lunchExpense;
    } else if (meal === 'dinner') {
        dinnerExpense = parseFloat((dinnerExpense + amount).toFixed(2));
        document.getElementById("dinnerInput").value = dinnerExpense;
    }
    updateTotal();
}

function updateTotal() {
    const total = (breakfastExpense + lunchExpense + dinnerExpense).toFixed(2);
    document.getElementById("totalExpense").innerText = total;
}
