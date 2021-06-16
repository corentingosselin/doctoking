
const fetch = require('node-fetch');
const Title = require('../models').Title;
const Synonym = require('../models').Synonym;


function findMostRepeatedWord(str) {
    let words = str.match(/\w+/g);
      
    let occurances = {};
  
    for (let word of words) {
      if (occurances[word]) {
        occurances[word]++;
      } else {
        occurances[word] = 1;
      }
    }
    
    let max = 0;
    let mostRepeatedWord = '';
  
    for (let word of words) {
      if (occurances[word] > max && (word.endsWith('logue')  || word.endsWith('iste'))) {
        max = occurances[word];
        mostRepeatedWord = word;
      }
    }
  
    return mostRepeatedWord;
  }

module.exports = {

    async findDoctorType(req, res) {
        //execute google request

        fetch('https://www.google.com/search?q=médecin+pour+' + req.query.input)
            .then((response) => {
                return response.text();
            })
            .then(async (text) => {
                const found = findMostRepeatedWord(text);
                if(!found) return res.status(200).send({result: "no result"});
                const title = await Title.findOne({where: {name: found.toLowerCase()}});

                if(!title)  {
                  const synonym = await Synonym.findOne({where: {synonym: found.toLowerCase()}});
                  if(!synonym) return res.status(200).send({result: "no result"});
                  else res.status(200).json({result: synonym.synonym});
                  
                } else res.status(200).json({result: title.name});
                
                
            });
    }
};