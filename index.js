const inquirer = require('inquirer');
const fs = require('fs'); 
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, "output")

const render = ('./lib/htmlRenderer');