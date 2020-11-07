function myPromiseCall() {
	return new Promise((resolve, reject) => {

		function myFunction() {
			console.log('Hello from my function');
		}
		
		setTimeout(myFunction, 2000);
		reject('Fail');
	});
}

async function doSomeMagic() {
	try {
		await myPromiseCall();
	} 
	
	catch (error) {
		console.log("DAFUQ");
	}
}

doSomeMagic();
console.log('Calling this after doSomeMagic');