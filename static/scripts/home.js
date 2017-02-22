function validateForm() {
	var name = document.getElementById('nameInput').value;
	var species =  document.getElementById('speciesInput').value;
	var age = document.getElementById('ageInput').value;
	if (!name.length || !species.length || !age.length) {
		alert('Fields must not be blank.');
		console.log(""+name+" "+species+age);
		return false;
	}
	if (isNaN(parseInt(age)) || typeof parseInt(age) !== 'number') {
		alert('Age must be a number.');
		console.log(isNaN(parseInt(age))+" "+typeof parseInt(age));
		return false;
	}
	return true;
}

document.getElementById('changeColor').addEventListener('click', function() {
	var color = document.getElementById('bgColor').value;
	var body = document.getElementById('body');
	body.style.background = color;
})

document.getElementById('hide').addEventListener('click', function() {
	var body = document.getElementById('body');
	body.style.visibility = "hidden";
})