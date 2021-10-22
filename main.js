let cards = 5;
let firstCard = 0;
let secondCard = 0;

function makeNumber() {
	let consNum = [];

	for (let index = 1; index <= cards; index++) {
		consNum.push(index, index);
	}

	return consNum;
}

function numberRandom(consNum) {
	let randomNumber = consNum.sort(function () {
		return 0.5 - Math.random();
	});

	return randomNumber;
}

function prepCards(randomNumber) {
	let str = "";
	randomNumber.forEach(function (index) {
		str += '<div class="card" value="' + index + '">' + '<div class="back">' + index + "</div>" + '<div class="forward">Apepe</div>' + "</div>";
	});

	$("#game").append(str);
}

function control() {
	$(".card").on("click", function () {
		$(this).addClass("open");

		if (firstCard == 0) {
			firstCard = $(this).attr("value");

			//console.log(firstCard);
		} else {
			secondCard = $(this).attr("value");

			if (firstCard == secondCard) {
				$(".open").addClass("correct");
				$(".correct").removeClass("open");
				firstCard = secondCard = 0;
			} else {
				firstCard = secondCard = 0;
				$(this).one("transitionend", function () {
					$(".card").removeClass("open");
				});
			}
		}
	});
}

$(document).ready(function () {
	let consNum = makeNumber();
	let randomNumber = numberRandom(consNum);

	prepCards(randomNumber);
	control();

	//console.log("This is a consecutive number:" + consNum);
	//console.log("This is a random number:" + randomNumber);
});
