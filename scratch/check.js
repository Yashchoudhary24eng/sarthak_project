
const fs = require('fs');
const html = fs.readFileSync('scratch/reference.html', 'utf8');
console.log('HTML length:', html.length);
const vimeos = html.match(/vimeo[^\s\"']+/gi);
console.log('Vimeo matches:', vimeos);
const images = html.match(/https?:\/\/[^\s\"']+\.(jpg|jpeg|png|webp)/gi);
console.log('Image count:', images ? images.length : 0);
if (images) console.log(images.slice(0, 10));

// Check color codes or classes
const colors = html.match(/#[0-9a-fA-F]{3,8}\b/g);
console.log('Distinct colors:', [...new Set(colors || [])].slice(0, 15));
