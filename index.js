const axios = require('axios');
const fs = require('fs');


module.exports.mdLinks = (path, options) => {

  const resolutionPromises = [];

  const contents = fs.readFileSync(path, 'utf8');

  const re = /[^!]\[([^[]*)\]\((http[^)]*)\)/g;
  const matches = contents.matchAll(re);


  for (const match of matches) {

    const urlStatus = {
      text: match[1],
      href: match[2],
      file: path,
    };

    let localPromise;
    if (options.validate) {
      urlStatus['status'] = 0;
      urlStatus['ok'] = false

      localPromise = axios.get(match[2], { timeout: 5000 }).then((response) => {

        urlStatus.status = response.status;

        if (response && (response.status >= 200) && (response.status <= 299)) {
          urlStatus.ok = true;
        }

        return urlStatus;
      }).catch(error => {

        if (error.response) {
          urlStatus.status = error.response.status;
        }
        return urlStatus;
      });
    } else {
      localPromise = Promise.resolve(urlStatus)
    }
    resolutionPromises.push(localPromise);
  }
  return Promise.all(resolutionPromises);
};

//module.exports.mdLinks('README.md', { validate: true }).then((results) => {
//  console.log(results);
//});
