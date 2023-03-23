
const messyRoom = [1,2,4,76,1,389,1,1,2,20,30,20,5,8,5,9];

function organizeRoom(room) {
	room = room.sort((num1, num2) => num1 - num2);
	let organizedRoom = [];
	let lastIndex = 0;
	while (lastIndex < room.length) {
		let index = room.lastIndexOf(room[lastIndex]);
		if (index === lastIndex) {
			organizedRoom.push(room[lastIndex]);
			lastIndex += 1;
		} else {
			organizedRoom.push(room.slice(lastIndex, (index + 1)));
			lastIndex = (index + 1);
		}
	}

	return organizedRoom;
}


console.log(organizeRoom(messyRoom));


let numbers = [1,2,3,4,5]

function algebra(array, target) {
	let answer;
	array.forEach((value, index) => {
		let answerIndex = array.indexOf(target - value, index + 1)
		if (!(answerIndex === -1)) {
			answer =  [value, array[answerIndex]]
		}
	})
	return answer
}

function checkColorValue(color) {
	if (parseInt(color, 16) > 9) {
		return parseInt(color, 16)
	} else {
		return Number(color)
	}
}

function padHex(red, green, blue) {
	const rgb = [red, green, blue]
	rgb.forEach((value, index) => {
		if (value.length < 2) {
			rgb[index] = "0" + value
		}
	})
	return rgb
}

function convert(color) {
	if (color[0] === "r") {
		let rgb = color.substring(4, color.length-1).replace(/ /g, '').split(',');
		let hexColor = "#"
		const red = Number(rgb[0]).toString(16).toUpperCase()
		const green = Number(rgb[1]).toString(16).toUpperCase()
		const blue = Number(rgb[2]).toString(16).toUpperCase()
		rgb = padHex(red, green, blue)
		return hexColor + rgb[0] + rgb[1] + rgb[2]
	} else if (color[0] === "#") {
		const red = (checkColorValue(color[1]) * 16) + checkColorValue(color[2])
		const green = (checkColorValue(color[3]) * 16) + checkColorValue(color[4])
		const blue = (checkColorValue(color[5]) * 16) + checkColorValue(color[6])
		return `rgb(${red}, ${green}, ${blue})`
	} else {
		return "Invalid color"
	}
}