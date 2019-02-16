function graduates (students) {

  var kelas = [];
  var graduates = {};
  
  if (students.length === 0) {
    return graduates;
  }
  for (var i = 0; i < students.length; i++) {
    var kelasAwal = students[i]['class'];
    if (kelas.push(kelasAwal)) {
    kelas[students[i]['class']] = {}
    } else {
      kelas.push(kelasAwal);
    }
  }
  
  for (var i = 0; i < kelas.length; i++) {
    var arr = [];
    for (var j = 0; j < students.length; j++) {
      var objStudent = {};
      if (kelas[i] === students[j]['class'] && students[j]['score'] > 75) {
        objStudent.name = students[j].name;
        objStudent.score = students[j].score;
        arr.push(objStudent);
      }
    }
    graduates[kelas[i]] = arr;
  }

  return graduates;
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}
