// Budget controller
var budgetController = (function () {


})();


// UI controller
var UIController = (function () {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    }

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // will either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },
        getDOMStrings: function () {
            return DOMStrings;
        }
    };

})();


// Global app controller
var controller = (function (budgetCtrl, UICtrl) {
    var DOM = UICtrl.getDOMStrings();

    var ctrlAddItem = function () {
        // 1. Get the input data
        var input = UIController.getInput();

        // 2. Add the item to the budget controller
        // 3. Add the new item to the IU
        // 4. Calculate the budget
        // 5. Display the budget on the US

    }

    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });




})(budgetController, UIController);