menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  get appetizers() {
    return this._courses.appetizers;
  },

  set appetizers(appet) {
    this._courses.appetizers = appet;
  },

  get mains() {
    return this._courses.mains;
  },

  set mains(m) {
    this._courses.mains = m;
  },

  get desserts() {
    return this._courses.desserts;
  },

  set desserts(dess) {
    this._courses.desserts = dess;
  },
  
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    }
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    this._courses[courseName].push({
      name: dishName,
      price: dishPrice
    })
  },

  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];

    let r_idx = Math.random() * dishes.length;
    r_idx = Math.floor(r_idx);

    return dishes[r_idx];
  },

  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');

    return {
      appetizer,
      main,
      dessert,
      totalPrice: appetizer.price+main.price+dessert.price
    }

  }
}

menu.addDishToCourse('appetizers', 'salada', 10);
menu.addDishToCourse('mains', 'macarrao', 20);
menu.addDishToCourse('desserts', 'chocolate', 10);


console.log(menu.generateRandomMeal());