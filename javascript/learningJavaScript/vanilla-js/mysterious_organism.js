// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
}

function baseMutation(base) {
  let newBase;

  do {
    newBase = returnRandBase();
  } while(newBase === base);

  return newBase;
}

function pAequorFactory(specimenNum, dna) {
  return {
    specimenNum,
    dna,
    mutate() {
      let r_idx = Math.floor(Math.random() * dna.length);
      this.dna[r_idx] = baseMutation(this.dna[r_idx]);
    },
    compareDNA(pAequor) {

      let common = 0;

      for(let i=0; i<dna.length; i++) {
        if(pAequor.dna[i] == this.dna[i]) {
          common++;
        }
      }

      let perc = common * 100 /dna.length;
      perc = perc.toFixed(2);

      console.log(`specimen #1 and specimen #2 have ${perc}% DNA in common`);

    },

    willLikelySurvive() {
      let cnt=0;

      this.dna.forEach(base => {
        if(base === 'C' || base === 'G') {
          cnt++;
        }
      });

      let perc = cnt / this.dna.length;

      return perc >= 0.6;
    }
  }
}

let v = pAequorFactory(1, mockUpStrand());
let arr = []

for(let i=0; i<30; i++) {
  let elem = pAequorFactory(i, mockUpStrand());
  arr.push(elem);
}

// console.log(arr);