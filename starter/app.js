// Budget controller
var budgetController = (function () {


})();


// UI controller
var UIController = (function () {





})();


// Global app controller
var controller = (function (budgetCtrl, UICtrl) {
    var ctrlAddItem = function () {
        // 1. Get the input data
        // 2. Add the item to the budget controller
        // 3. Add the new item to the IU
        // 4. Calculate the budget
        // 5. Display the budget on the US

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);


    document.addEventListener('keypress', function (event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });



})(budgetController, UIController);