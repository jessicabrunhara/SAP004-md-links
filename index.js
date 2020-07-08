const fs = require('fs');

const linkFinder = path => {
  // Leia todo o conteúdo do arquivo Markdown solicitado
  const contents = fs.readFileSync(path, 'utf8');

  const links = [];

  // Use regex para extrair textos e URLs dos links do arquivo Markdown
  const re = /[^!]\[([^[]*)\]\((http[^)]*)\)/g;
  const matches = contents.matchAll(re);
  for (match of matches) {
    const link = {
      text: match[1],
      href: match[2],
      file: path,
    };
    links.push(link);
  }

  return links;
};

const foundLinks = linkFinder('README.md');
console.log(foundLinks);
