const fs = require('fs');

function parseKSON(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  const cleanedContent = content
    .replace(/;(?=\s*})/g, '')
    .replace(/;/g, '');
  
  try {
    return JSON.parse(cleanedContent);
  } catch (error) {
    console.error('Invalid KSON format:', error);
    return null;
  }
}

// 사용 예시
const parsedKSON = parseKSON('./example.kson');
console.log(parsedKSON);
