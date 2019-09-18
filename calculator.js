// Format Value
const formatValue = (value) => parseFloat(Math.round(value * 100) / 100).toFixed(2);

// Display Results
const displayResults = (amount, duration, totalContribution, totalReturn, finalBalance) => {

	$('#starting-val').val('$' + amount)
	$('#contribution-val').val('$' + totalContribution)
	$('#duration-val').val(duration)
	// interest
	$('#final-val').val($("#interest").val());
	$('#future-balance').val('$' + finalBalance)
	// interest
	//console.log(chart.data[0].dataPoints);

}
// var dt = new Date().getFullYear();

// Calculate
const calculate = () => {
	let amount = $('#amount').val();
	let contribution = $('#contribution').val();
	let duration = $('#duration').val();
	let interest = $('#interest').val();
	let rate = interest/100;
	let finalBalance;
	let totalContribution;
	let totalReturn;
    finalBalance = amount * Math.pow(1 + rate, duration) + contribution * ( (Math.pow(1 + rate, duration) - 1) / rate );
    totalContribution = contribution * duration;
    totalReturn = finalBalance - amount - totalContribution;

    // console.log(amount, duration, formatValue(totalContribution), formatValue(totalReturn), formatValue(finalBalance));
    displayResults(amount, duration, formatValue(totalContribution), formatValue(totalReturn), formatValue(finalBalance));

    // var dps = chart.options.data[0].dataPoints;
    // // const
    // let compound = [];

    // let year = 2;

    // for (var j = 1; j <= duration; j++) {
    //     let balance =  amount * Math.pow(1 + rate, year) + contribution * ( (Math.pow(1 + rate, year) - 1) / rate );
    //     compound.push({
    //         x: j,
    //         y: balance
    //     });
    //     let yr = parseInt(year) + 2020
    //     dps[j] = {x:j, label: yr, y: balance};
    //     year++;
    // }
    // chart.options.data[0].dataPoints = dps;
    // chart.render();

}

$(document).ready( function () {
	$('.calculate').click(function () { 
		calculate();
	});   
	$('.calculate').change(function () { 
		calculate();
	});   

});

// Custom JS
$(document).on('click', '.number-spinner button', function () {    
	var btn = $(this),
		oldValue = btn.closest('.number-spinner').find('input').val().trim(),
		newVal = 0;
	
	if (btn.attr('data-dir') == 'up') {
		newVal = parseInt(oldValue) + 1;
	} else {
		if (oldValue > 1) {
			newVal = parseInt(oldValue) - 1;
		} else {
			newVal = 1;
		}
	}
	btn.closest('.number-spinner').find('input').val(newVal);
});


// //chart
// var chart;

// window.onload = function () {
//  chart = new CanvasJS.Chart("chartContainer", {
// 	animationEnabled: true,
// 	theme: "light1", // "light1", "light2", "dark1", "dark2"
// 	title: {
// 		text: ""
// 	},
// 	axisY: {
// 		title: "Balance",
// 		suffix: "",
// 		includeZero: false
// 	},
// 	axisX: {
// 		title: "year"
// 	},
// 	data: [{
// 		type: "column",
// 		yValueFormatString: "#,##0.0#\"%\"",
// 		dataPoints: [
// 			{ label: "Now", y: 0.00 },
// 			{ label: "2020", y: 0.00 },
// 			{ label: "2021", y: 0.00 }
// 		]
// 	}]
// });
//  console.log(this.chart.options.data[0].dataPoints);
// chart.render();
// };