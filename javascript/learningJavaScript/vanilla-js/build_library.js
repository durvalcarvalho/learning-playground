class Media {
  constructor(title) {
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }

  get title() { return this._title; }
  get ratings() { return this._ratings; }
  get isCheckedOut() { return this._isCheckedOut; }

  getAverageRating() {
    let sum = this._ratings.reduce(
      (acc, val) => {
        return val + acc;
      }, 0
    );
    
    let avg = sum / this._ratings.length;

    return avg.toFixed(2);
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  addRating(rating) {
    this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() { return this._author; }
  get pages() { return this._pages; }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() { return this._director; }
  get runTime() { return this._runTime; }
}

class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() { return this._artist; }
  get songs() { return this._songs; }
}




let b = new Book('Durval', 'My File', 500);
let m = new Movie('Emerson', 'LoL', '98 minutes');
let c = new CD('Dina', 'Teaching', ['Art', 'Math']);

b.addRating(7.1);
b.addRating(8.6);
b.addRating(10);
console.log(b.getAverageRating());

console.log(b.isCheckedOut);
b.toggleCheckOutStatus();
console.log(b.isCheckedOut);