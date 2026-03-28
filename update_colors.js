const fs = require('fs');
let c = fs.readFileSync('nexplora.html.html', 'utf8');

// Replace RGBs
c = c.replace(/201\s*,\s*168\s*,\s*76/g, '242,169,0');
c = c.replace(/250\s*,\s*250\s*,\s*246/g, '248,249,250');
c = c.replace(/12\s*,\s*12\s*,\s*10/g, '10,25,47');

// Replace Hexes
c = c.replace(/#C9A84C/gi, '#F2A900');
c = c.replace(/#E2C97E/gi, '#FFCF54');
c = c.replace(/#F5E9C8/gi, '#FFF3D6');
c = c.replace(/#0C0C0A/gi, '#0A192F');
c = c.replace(/#111110/gi, '#112240');
c = c.replace(/#2E2E28/gi, '#233554');
c = c.replace(/#B8B8A8/gi, '#8892B0');
c = c.replace(/#6B6B5E/gi, '#A0AFC0');
c = c.replace(/#FAFAF6/gi, '#F8F9FA');

fs.writeFileSync('nexplora.html.html', c);
console.log("Colors updated successfully.");
