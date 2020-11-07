class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() { return this._name; }
  get level() { return this._level; }
  get numberOfStudents() { return this._numberOfStudents; }

  set numberOfStudents(num) { 
    if(typeof num === 'number') {
      this._numberOfStudents=num; 
    }
    else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }

  static pickSubstituteTeacher(teachersList) {
    if(teachersList.length === 0) {
      return;
    }

    let i = Math.floor(Math.random() * teachersList.length);
    return teachersList[i];
  }

}

class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'Primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() { return this._pickupPolicy; }
}

class Middle extends School{
  constructor(name, numberOfStudents) {
    super(name, 'Middle', numberOfStudents);
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'High School', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() { 
    this._sportsTeams.forEach(team => console.log(team));
  }
}


const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts()
let t = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

console.log(t);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.sportsTeams;