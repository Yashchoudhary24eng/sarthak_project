const fs = require('fs');

async function main() {
  try {
    const res = await fetch('https://agrikakhatri.com/join', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    const html = await res.text();
    fs.writeFileSync('scratch/reference.html', html);
    
    // Extract titles, headings, sections
    const headings = [];
    const hRegex = /<(h[1-6])[^>]*>(.*?)<\/\1>/gis;
    let match;
    while ((match = hRegex.exec(html)) !== null) {
      headings.push({ tag: match[1], text: match[2].replace(/<[^>]+>/g, '').trim() });
    }
    
    // Extract buttons/links
    const links = [];
    const aRegex = /<a\s+[^>]*href=["']([^"']*)["'][^>]*>(.*?)<\/a>/gis;
    while ((match = aRegex.exec(html)) !== null) {
      const linkText = match[2].replace(/<[^>]+>/g, '').trim();
      if (linkText && linkText.length < 100) {
        links.push({ href: match[1], text: linkText });
      }
    }
    
    // Extract video embeds
    const iframes = [];
    const ifRegex = /<iframe[^>]+src=["']([^"']+)["'][^>]*>/gi;
    while ((match = ifRegex.exec(html)) !== null) {
      iframes.push(match[1]);
    }

    console.log(JSON.stringify({
      headings: headings.slice(0, 30),
      links: links.slice(0, 20),
      iframes: iframes.slice(0, 15)
    }, null, 2));
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
