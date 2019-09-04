import request from 'superagent'

const proverbURL = 'https://eda-te-reo.herokuapp.com/api/proverbs'


export function getProverb () {
 return request
  .get(proverbURL)
  .then(res => {
    return res.body 
  })
  .catch(err => {
     res.status(500).send(err.message)
  });

}

