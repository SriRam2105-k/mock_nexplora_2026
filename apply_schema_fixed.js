const fs = require('fs');

try {
  let content = fs.readFileSync('c:/Users/srira/OneDrive/Desktop/nexplora 2026/nexplora.html.html', 'utf8');

  // 1. Root
  const oldRootRegex = /\s*:root\s*\{[\s\S]*?--gold-glow-sm:[^\}]+\}/;
  const newRoot = `    :root {
      /* Sky Blue Background Base */
      --sky-blue:       #A9D6E5;
      /* Light Cyan Blue Highlights */
      --light-cyan:     #CDEFF5;
      /* Deep Navy Blue Headings / Titles */
      --navy-heading:   #1B3A57;
      
      /* Golden Yellow (Main Title) */
      --golden-yellow:  #F4C542;
      /* Warm Orange (Buttons / Prizes) */
      --warm-orange:    #F59E0B;
      /* Soft Coral / Peach (Highlights) */
      --soft-peach:     #F7B7A3;
      
      /* Dark Slate Blue (Cards / Boxes) */
      --dark-slate:     #2F4A6D;
      /* Steel Blue (Icons / Borders) */
      --steel-blue:     #5C7FA3;
      /* Light Gray (Card Backgrounds) */
      --light-gray:     #F3F4F6;
      
      /* White (Main Text Areas / Cards) */
      --bg-white:      #FFFFFF;
      /* Charcoal Black (Text) */
      --charcoal:     #1F2933;
      /* Soft Gray (Subtext) */
      --soft-gray:      #6B7280;

      /* Mapping aliases for the HTML references */
      --gold:          var(--golden-yellow);
      --gold-light:    var(--warm-orange);
      --gold-pale:     var(--soft-peach);
      --gold-dim:      rgba(244, 197, 66, 0.14); /* transparent golden yellow */
      
      --ink:           var(--sky-blue);
      --ink-soft:      var(--bg-white);
      
      --ash:           var(--light-gray);
      --silver:        var(--charcoal);
      --mist:          var(--soft-gray);
      
      --white:         var(--navy-heading);
      --white-dim:     var(--light-gray);
      --white-border:  var(--steel-blue);
      
      --gold-glow:     0 0 20px rgba(244, 197, 66, 0.4);
      --gold-glow-sm:  0 0 10px rgba(244, 197, 66, 0.25);
    }`;
  content = content.replace(oldRootRegex, newRoot);

  // Hardcoded rgb values:
  
  // Nav compact and mobile menu -> Sky Blue
  content = content.replace(/rgba\(234,244,251,\.90\)/g, "rgba(169,214,229,.90)");
  content = content.replace(/rgba\(234,244,251,\.97\)/g, "rgba(169,214,229,.97)");
  
  // Hero lines and decor -> Deep Navy
  content = content.replace(/rgba\(15,32,70,\.04\)/g, "rgba(27,58,87,.05)");
  content = content.replace(/rgba\(15,32,70,\.03\)/g, "rgba(27,58,87,.03)");
  
  // Highlight cards
  content = content.replace(/padding:48px 32px;\s*background:var\(--ink\);/g, "padding:48px 32px; background:var(--dark-slate);");
  content = content.replace(/\.hl-card:hover \{ background:rgba\(242,169,0,\.03\); \}/gi, ".hl-card:hover { background:var(--navy-heading); }");
  // Titles and descriptions in hl-card
  content = content.replace(/color:var\(--white\);\s*margin-bottom:12px/g, "color:var(--bg-white); margin-bottom:12px");
  content = content.replace(/color:var\(--mist\);\s*line-height/g, "color:var(--light-cyan); line-height");
  content = content.replace(/color:rgba\(242,169,0,\.1\)/g, "color:rgba(244,197,66,.15)");

  // Bottom Nav / Dropdowns
  content = content.replace(/rgba\(15,32,70,\.10\)/g, "rgba(92,127,163,.3)");
  content = content.replace(/rgba\(15,32,70,\.2\)/g, "rgba(92,127,163,.4)");
  content = content.replace(/rgba\(15,32,70,\.45\)/g, "rgba(107,114,128,.6)");
  
  content = content.replace(/stroke='%230F2046'/g, "stroke='%231B3A57'");

  // Hero custom gradient text
  content = content.replace(/linear-gradient\(135deg, #B8860B, var\(--gold\), #D4AF37\)/g, "linear-gradient(135deg, var(--gold-light), var(--gold), var(--gold-pale))");

  // Stat cells (About section) mapped correctly
  content = content.replace(/background:var\(--white-dim\)/g, "background:var(--light-gray)");
  content = content.replace(/\.stat-cell:hover \{ background:rgba\(242,169,0,\.05\); \}/g, ".stat-cell:hover { background:var(--bg-white); }");

  // About radial gradients -> Light Cyan
  content = content.replace(/radial-gradient\(ellipse 70% 60% at 20% 50%,rgba\(242,169,0,\.04\),transparent\)/g, 'radial-gradient(ellipse 70% 60% at 20% 50%, rgba(205,239,245,0.7), transparent)');
  content = content.replace(/radial-gradient\(ellipse 60% 50% at 80% 50%,rgba\(242,169,0,\.04\),transparent\)/g, 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(205,239,245,0.7), transparent)');

  fs.writeFileSync('c:/Users/srira/OneDrive/Desktop/nexplora 2026/nexplora.html.html', content);
  console.log("SUCCESS!");
} catch (e) {
  console.error(e);
}
