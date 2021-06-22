const fs = require('fs')
const path = require('path')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const _template = require('lodash.template')

const argv = yargs(hideBin(process.argv))
  .option('private', {
    alias: 'p',
    type: 'boolean',
    default: false,
    description: 'Disable private data obfuscation in the final builld',
  })
  .example([
    ['$0', 'Build the obfuscated resume'],
    ['$0 -p', 'Build the entire resume for private usage'],
  ])
  .argv;

const FILE_INPUT = 'index.template.html'
const FILE_OUTPUT = 'index.html'

const { private, } = argv;

const resumeHTMLString = fs.readFileSync(path.resolve(__dirname, FILE_INPUT), 'utf8')

const compiled = _template(resumeHTMLString)
const compiledResumeHTMLString = compiled({ private })

fs.writeFileSync(path.resolve(__dirname, FILE_OUTPUT), compiledResumeHTMLString)
