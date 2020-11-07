
// there are 6 falsy values on JS:
// undefined, null, NaN, 0, "" (empty strings) and false

// method 1
let defaultName;

if(username) {
	defaultName = username;
}
else {
	defaultName = 'Unknown';
}

// method 2
let defaultName = username || 'Unknown';