const fs = require('fs');

try {
  let content = fs.readFileSync('c:/Users/srira/OneDrive/Desktop/nexplora 2026/nexplora.html.html', 'utf8');

  // We have a chain of replacements. To prevent cascading (e.g., 300->400 then 400->500),
  // we first temporarily rename the target to a placeholder.
  
  // 500 -> 600
  content = content.replace(/font-weight:\s*500/g, 'font-weight: XX600XX');
  // 400 -> 500
  content = content.replace(/font-weight:\s*400/g, 'font-weight: XX500XX');
  // 300 -> 400
  content = content.replace(/font-weight:\s*300/g, 'font-weight: XX400XX');

  // Now restore them
  content = content.replace(/XX600XX/g, '600');
  content = content.replace(/XX500XX/g, '500');
  content = content.replace(/XX400XX/g, '400');

  fs.writeFileSync('c:/Users/srira/OneDrive/Desktop/nexplora 2026/nexplora.html.html', content);
  console.log("SUCCESS!");

} catch (e) {
  console.error("Failed:", e);
}
