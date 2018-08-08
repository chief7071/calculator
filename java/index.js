$(document).ready(function () {
var input = $('input');
var equals = $('[name="equals"]');

$('.num').on('click', function() {
    input.val(input.val() + $(this).attr('name'));
});


$('.solve').on('click', function() {
    var opName = $(this).attr('name');
    if (opName == 'subtract' && input.val().length == 0) {
        input.val('-');
    } else {
        input.attr('name', input.val());
        input.val('');
        equals.removeClass();
        equals.addClass(opName);
    }
});

equals.on('click', function() {
    var firstInput;
    var secondInput;
    if (equals.hasClass('add')) {
        firstInput = parseInt(input.attr('name'));
        secondInput = parseInt(input.val());
        input.val(firstInput + secondInput);
    } else if (equals.hasClass('subtract')) {
        firstInput = parseInt(input.attr('name'));
        secondInput = parseInt(input.val());
        input.val(firstInput - secondInput);
    } else if (equals.hasClass('multiply')) {
        firstInput = parseInt(input.attr('name'));
        secondInput = parseInt(input.val());
        input.val(firstInput * secondInput);
    } else if (equals.hasClass('divide')) {
        firstInput = parseInt(input.attr('name'));
        secondInput = parseInt(input.val());
        input.val(firstInput / secondInput);
    }
});

$('.clear').on('click', function () {
    input.val('');
});
});