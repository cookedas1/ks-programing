const fs = require('fs');
const { parseKS } = require('./ksParser');  // ksParser.js의 parseKS 함수를 가져옴

function executeKS(filePath) {
  try {
    const parsedCode = parseKS(filePath);

    eval(parsedCode);
  } catch (error) {
    console.error("Execution Error:", error.message);
  }
}

const ksFilePath = './example.ks';
executeKS(ksFilePath);
