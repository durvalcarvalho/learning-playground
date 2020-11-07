const cookBeanSouffle = require('./library.js');

async function hostDinnerParty() {
  try {
    let food = await cookBeanSouffle();
    console.log(`${food} is served!`);
  }
  catch(error) {
    console.log(error)
    console.log('Ordering a pizza!');
  }
}


hostDinnerParty();

