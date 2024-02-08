// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $('#btnCalculate').click(function () {
        var hours = parseFloat($('#hours').val());
        if (hours === null || isNaN(hours))
        {
            hours = 0;
        }
        var ratePerHour = parseFloat($('#ratePerHour').val());
        var total = hours * ratePerHour;
        if (total < 0) {
            alert("Please enter a positive number of hours.")
        }
        else
        {
            $('#total').text( "$ " + total.toFixed(2));
        }
    });
});