const fs = require('fs');

function parseKS(filePath) {
  const code = fs.readFileSync(filePath, 'utf-8');

  const transformedCode = code
    .replace(/\bvar\b/g, 'varia')        // var -> varia
    .replace(/\bconsole\b/g, 'panel')    // console -> panel
    .replace(/\bfunction\b/g, 'func')    // function -> func
    .replace(/#(.*)/g, '//$1');          // # 주석을 //로 변환

  return transformedCode;
}

try {
  const parsedCode = parseKS('./example.ks');
  console.log(parsedCode);
} catch (error) {
  console.error(error.message);
}
