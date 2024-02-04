const tab=["hello","bonjour"];
const findLongestWord= (mots) =>{
    let[premiermot,derniermot] =mots;
    let createnew=[premiermot,derniermot].map((mot) => ({
        mot,
        longueur: mot.length,
      }));

     // return createnew;
     let motlong = createnew.reduce((acc, current) =>
     current.longueur > acc.longueur ? current : acc
   );
 
 
   return {
     mot: motlong.mot,
     longueur: motlong.longueur,
   };
};
const result = findLongestWord(tab);

console.log(result);
//quest2
const input = [
    ["a","b","c"],
    ["c","d","f"],
    ["d","f","g"],
];
const countOccurrences = (inputArray) => {
   
    const flatTab = inputArray.flat();
  
    
    const occurrencesCount = flatTab.reduce((acc, current) => {
      acc[current] = (acc[current] || 0) + 1;
      return acc;
    }, {});
  
    return occurrencesCount;
  };
  
  const result1 = countOccurrences(input);
  console.log(result1);
//quest3
  let students = [{name : 'John',id:123,marks:98},
{name : 'Baba',id:101,marks:23},
{name : 'John',id:200,marks:45},
{name : 'John',id:200,marks:75},

];
const totalNotes = students
  .map((student) => {
    
    if (student.marks < 50) {
      return { student, marks: student.marks + 15 };
    }
    return student;
  })
  .filter((student) => student.marks > 50) 
  .reduce((total, student) => total + student.marks, 0); 

console.log('Total des notes après bonus :', totalNotes);

//quest4
let Tab = [
    { note: 'note1', val: '15' },
    { note: 'note2', val: '16' },
    { note: 'note3', val: '17' },
  ];
  
  // stocker le dernier ID utilisé
  let lastId = 3; 
  
 
  const addObject = (note, val) => {
    lastId++;
    Tab.push({ id: lastId, note, val });
  };
  
  // Ajout
  addObject('note4', '18');
  addObject('note5', '19');
  
  console.log(Tab);
export default Tab;

import  searchById from './fonction.js';

const result2 = searchById(Tab, 4); 

if (result2) {
  console.log('Élément trouvé :', result2);
} else {
  console.log('Élément non trouvé.');
}