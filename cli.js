#!/usr/bin/env node

const { mdLinks } = require('./index.js');

const [, , ...args] = process.argv

const options = {
  validate: false
};

if (args.includes('--validate')) {
  options.validate = true;
}

const linksFound = mdLinks(args[0], options)
linksFound.then(results => console.log(results))
