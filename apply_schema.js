const fs = require('fs');

try {
  let content = fs.readFileSync('c:/Users/srira/OneDrive/Desktop/nexplora 2026/nexplora.html.html', 'utf8');

  // 1. Replace the entire :root CSS variables block
  const oldRoot = `    :root {
      --gold:          #F2A900;
      --gold-light:    #D4AF37;
      --gold-pale:     #FFF3D6;
      --gold-dim:      rgba(242,169,0,0.14);
      --ink:           #EAF4FB;
      --ink-soft:      #FFFFFF;
      --ash:           #64748B;
      --silver:        #334155;
      --mist:          #1E3A8A;
      --white:         #0F2046;
      --white-dim:     rgba(15,32,70,0.05);
      --white-border:  rgba(15,32,70,0.1);
      --gold-glow:     0 0 20px rgba(242,169,0,0.3);
      --gold-glow-sm:  0 0 10px rgba(242,169,0,0.2);
    }`;

  const newRoot = `    :root {
      /* Sky Blue Background Base */
      --bg-base:       #A9D6E5;
      /* Light Cyan Blue Highlights */
      --bg-highlight:  #CDEFF5;
      /* Deep Navy Blue Headings / Titles */
      --text-heading:  #1B3A57;
      
      /* Golden Yellow (Main Title) */
      --accent-gold:   #F4C542;
      /* Warm Orange (Buttons / Prizes) */
      --accent-orange: #F59E0B;
      /* Soft Coral / Peach (Highlights) */
      --accent-peach:  #F7B7A3;
      
      /* Dark Slate Blue (Cards / Boxes) */
      --card-dark:     #2F4A6D;
      /* Steel Blue (Icons / Borders) */
      --border-steel:  #5C7FA3;
      /* Light Gray (Card Backgrounds) */
      --card-light:    #F3F4F6;
      
      /* White (Main Text Areas / Cards) */
      --bg-white:      #FFFFFF;
      /* Charcoal Black (Text) */
      --text-main:     #1F2933;
      /* Soft Gray (Subtext) */
      --text-sub:      #6B7280;

      /* Mapping aliases for the HTML references */
      --gold:          var(--accent-gold);
      --gold-light:    var(--accent-orange);
      --gold-pale:     var(--accent-peach);
      --gold-dim:      rgba(245, 158, 11, 0.15); /* orange tinted */
      
      --ink:           var(--bg-base);
      --ink-soft:      var(--bg-white);
      
      --ash:           var(--card-light);
      --silver:        var(--text-main);
      --mist:          var(--text-sub);
      
      --white:         var(--text-heading);
      --white-dim:     var(--card-light);
      --white-border:  var(--border-steel);
      
      --gold-glow:     0 0 25px rgba(244, 197, 66, 0.4);
      --gold-glow-sm:  0 0 12px rgba(244, 197, 66, 0.25);
    }`;

  content = content.replace(oldRoot, newRoot);

  // 2. Adjust transparent hardcoded RGBAs for the new base --bg-base (Sky Blue #A9D6E5) and borders (Steel Blue #5C7FA3)
  content = content.replace(/rgba\(234,244,251,\.90\)/g, 'rgba(169, 214, 229, 0.90)');
  content = content.replace(/rgba\(15,32,70,\.10\)/g, 'rgba(92, 127, 163, 0.2)'); // border-bottom on nav
  content = content.replace(/rgba\(234,244,251,\.97\)/g, 'rgba(169, 214, 229, 0.97)');
  
  // Hero lines & decor -> Navy #1B3A57
  content = content.replace(/rgba\(15,32,70,\.04\)/g, 'rgba(27, 58, 87, 0.05)');
  content = content.replace(/rgba\(15,32,70,\.03\)/g, 'rgba(27, 58, 87, 0.03)');

  // 3. Highlight Dark Slate Blue Cards styling
  content = content.replace(/background:var\(--ink\);/g, 'background:var(--card-dark);');
  content = content.replace(/\.hl-card:hover \{ background:rgba\(242,169,0,\.03\); \}/g, '.hl-card:hover { background:var(--text-heading); }'); // Hover to Deep Navy 
  
  // Inside hl-card, text was navy (--white) which is unreadable on dark slate blue, we change it to white (--bg-white)
  content = content.replace(/\.hl-t \{\n\s*font-size:\.8rem; font-weight:500;\n\s*letter-spacing:2px; text-transform:uppercase;\n\s*color:var\(--white\);/g, '.hl-t {\\n      font-size:.8rem; font-weight:500;\\n      letter-spacing:2px; text-transform:uppercase;\\n      color:var(--bg-white);');
  content = content.replace(/\.hl-d \{\n\s*font-size:\.83rem; font-weight:300;\n\s*color:var\(--mist\);/g, '.hl-d {\\n      font-size:.83rem; font-weight:300;\\n      color:var(--bg-highlight);');

  content = content.replace(/\.hl-n \{\n\s*font-family:'Cormorant Garamond',serif;\n\s*font-size:3.8rem; font-weight:300;\n\s*color:rgba\(242,169,0,\.1\);/g, '.hl-n {\\n      font-family:\\'Cormorant Garamond\\',serif;\\n      font-size:3.8rem; font-weight:300;\\n      color:rgba(244,197,66,0.15);'); // Gold faint

  // 4. Hero Gradient (Orange/Peach/Gold)
  content = content.replace(/linear-gradient\(135deg, #B8860B, var\(--gold\), #D4AF37\)/g, 'linear-gradient(135deg, var(--gold-light), var(--gold), var(--gold-pale))');

  // 5. Custom Form Dropdown Color Fix
  content = content.replace(/stroke='%230F2046'/g, 'stroke=\\'%231B3A57\\'');

  // 6. About Grid Radial Backgrounds (Light Cyan Blue Highlights)
  content = content.replace(/radial-gradient\(ellipse 70% 60% at 20% 50%,rgba\(242,169,0,\.04\),transparent\)/g, 'radial-gradient(ellipse 70% 60% at 20% 50%, rgba(205, 239, 245, 0.4), transparent)');
  content = content.replace(/radial-gradient\(ellipse 60% 50% at 80% 50%,rgba\(242,169,0,\.04\),transparent\)/g, 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(205, 239, 245, 0.4), transparent)');
  
  // 7. Input lines and textarea to Steel Blue
  content = content.replace(/rgba\(15,32,70,\.2\)/g, 'rgba(92, 127, 163, 0.35)');
  content = content.replace(/rgba\(15,32,70,\.45\)/g, 'rgba(107, 114, 128, 0.6)'); // Soft Gray placeholder

  // Write changes
  fs.writeFileSync('c:/Users/srira/OneDrive/Desktop/nexplora 2026/nexplora.html.html', content);
  console.log("Colors successfully mapped using Node script.");

} catch (error) {
  console.error("Failed to map colors:", error);
}
