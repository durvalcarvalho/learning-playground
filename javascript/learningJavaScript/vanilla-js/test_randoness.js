let total = 10000000;
hist = {}

for(let i=0; i<total; i++) {
	let n = Math.floor(Math.random() * 11);

	if(hist[n] == undefined) {
		hist[n] = 0;
	}
	else {
		hist[n]++;
	}
}


for(let key in hist) {
	let perc = (hist[key] / total) * 100;
	perc = perc.toFixed(2);

	console.log(`${key} -> ${perc} %`);
}