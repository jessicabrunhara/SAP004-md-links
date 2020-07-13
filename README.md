# Markdown Links

## Índice

* [1. Sobre Markdown](#1-markdown)
* [2. Instalação](#2-instalação)
* [3. Como utilizar](#3-como-utilizar)
* [4. Autoria](#4-autoria)

***

## 1. Markdown

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores. É usada em muitas plataformas que
manipulam texto (GitHub, fórum, blogs e etc) e é muito comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional
`README.md`).

Os arquivos `Markdown` normalmente contém _links_ que podem estar
quebrados, ou que já não são válidos, prejudicando muito o valor da
informação que está ali.

Uma comunidade open source nos propôs criar uma ferramenta, usando
[Node.js](https://nodejs.org/), que leia e analise arquivos no formato
`Markdown`, para verificar os arquivos que contenham links e mostrar algumas
estatísticas.

## 2. Instalação

* Para usar esta biblioteca, você deve ter instalado o Node.js no seu computador.

* npm install -g jessicabrunhara/SAP004-md-links 

## 3. Como utilizar

* Após instalar a biblioteca, é possível utilizá-la chamando pela linha de comando:

md-links < arquivo >.
Ex: md-links README.md

É possível também verificar se o link é válido ou não, através do comando:
md-links < arquivo > --validate

## Autoria
Projeto desenvolvido por Jessica Brunhara durante o Bootcamp da Laboratória. 