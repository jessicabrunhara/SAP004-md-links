#!/usr/bin/env node

const mdLinks = require('./index.js');

const [, , ...args] = process.argv

const linksFound = mdLinks.linkFinder(args[0]) // primeiro atributo na linha de comando, args 0
console.log(linksFound);
