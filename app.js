const balance = document.getElementById(
    "balance"
    );

    const money_plus = document.getElementById(
        "money-plus"
    );
    const money_minus = document.getElementById(
        "money-minus"
    );
    const list = document.getElementById("list");
    const form = document.getElementById('form');
    const text = document.getElementById('text');
    const amount = document.getElementById('amount');

    let transaction = [];
    
    const localStorageTransaction = JSON.parse(localStorage.getItem(transactions"));
    // let transactions = localStorage.getItem("transactions") !== null ? localStorageTransactions: [];



    //add transaction
    // function addTransaction(e) {
        e.preventDefault();
        if (
    text.value.trim() === "" ||
    amount.value.trim() === ""
    ) {
   alert("Please Enter Text And Value");
    }else{
        const transaction ={
            id: generateID (),
            text: text,value,
            amount: +amount.value,
    };
    
transaction.push(transaction);
addTransactionDOM(transaction);
updateLocalStorage();
updateValues();
text.value = "";
amount.value = "";
 }
} 

function addTransactionDOM(transaction){
const sign = transaction.amount < 0 ? "-" : "+";
const item = document.createElement("li");
item.classList.add(transaction.amount < 0 ? "minus" : "plus"
    )

function addTransaction(transaction) {
    const sign = transaction.amount < 0 ? "_" : "+";
    const item = document.createElement("li");
    
    item.classList.add(
        transaction.amount < 0 ? "minus" : "plus"
    );

 item.innerHTML =`
    ${transaction.text}<span>${sign}${Math.abs(
    transaction.amount
 )}</span>
 <button class="delete-btn"onclick"removeTransaction(Rs{
    transaction.id})">x</button>
`;

list.appendChild(items);
}


//removetransaction
function removeTransaction(id){
    transactions = transactions.filter(
    (transaction) => transaction.id !== id
)};
updateLocalStorage();
init();


//Update update values

function updateValues() {
    const amounts = transactions.map(
        (transaction) => transaction.amount
    );
        const total = amounts
            .reduce(acc, item) => (acc += item), 0)
             toFixed(2);
        const income = amounts
            .filter((item) => (acc += item), 0)
            .reduce(acc, item)  (acc += item), 0)
            toFixed(2);
        const expense = (
            amounts
             .filter((item) => item < 0)
             .reduce(acc, item) => (acc += item), 0 *
            -1
        .toFixed(2);

        balance.innerText = `$${total}`;
        money-money_plus.innerText = `$${income}`;
        money_minus.innerText = `$${expense}`;
}

//update local storage
function update local storage() {
    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
}
//init app
function init() {
    list.innerHTML = "";
    transactions.forEach(addTransactionDOM);
    updateValues();
}


  


function updateValues({
    // const amounts = transaction.map(transaction =>)
}) 