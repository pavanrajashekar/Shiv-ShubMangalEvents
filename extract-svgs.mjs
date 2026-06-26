import fs from 'fs';
import path from 'path';

const html = fs.readFileSync('D:/1_Productivity/Shiv_ShubMangal3/Sample.html', 'utf8');

const components = [
  { id: 'opening', name: 'Mandap' },
  { id: 'wedding', name: 'Couple' },
  { id: 'birthday', name: 'BirthdayStage' },
  { id: 'corporate', name: 'CorporateStage' },
  { id: 'baby', name: 'BabyStage' },
  { id: 'house', name: 'HouseStage' },
  { id: 'anniv', name: 'RingsStage' },
  { id: 'services', name: 'Icons' } // wait, services has multiple svgs
];

// Let's just find all <svg>...</svg> blocks and dump them.
// Actually it's easier to find sections by their ID and then extract the first svg inside.

const outDir = 'D:/1_Productivity/Shiv_ShubMangal3/web/src/components/svg';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

components.forEach(comp => {
  if (comp.id === 'services') return;
  const regex = new RegExp(`<section id="${comp.id}"[\\s\\S]*?<svg([\\s\\S]*?)</svg>`, 'i');
  const match = html.match(regex);
  if (match) {
    let svgContent = `<svg${match[1]}</svg>`;
    
    // Quick React conversions
    svgContent = svgContent.replace(/xmlns:xlink/g, 'xmlnsXlink');
    svgContent = svgContent.replace(/xml:space/g, 'xmlSpace');
    svgContent = svgContent.replace(/class=/g, 'className=');
    svgContent = svgContent.replace(/style="([^"]*)"/g, (m, styles) => {
      // Very naive style conversion
      const reactStyles = styles.split(';').filter(Boolean).map(s => {
        const [k, v] = s.split(':');
        if(!k || !v) return '';
        const camelK = k.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        return `${camelK}: "${v.trim()}"`;
      }).filter(Boolean).join(', ');
      return `style={{${reactStyles}}}`;
    });
    // Fix attributes like stop-color, stroke-width, etc.
    const attrRegex = /([a-z]+)-([a-z]+)=/g;
    svgContent = svgContent.replace(attrRegex, (m, p1, p2) => {
      // Don't replace data-* or aria-*
      if (p1 === 'data' || p1 === 'aria') return m;
      return `${p1}${p2.charAt(0).toUpperCase() + p2.slice(1)}=`;
    });
    
    const componentCode = `export default function ${comp.name}SVG({ className }: { className?: string }) {
  return (
    <div className={className}>
      ${svgContent}
    </div>
  );
}`;
    
    fs.writeFileSync(path.join(outDir, `${comp.name}.tsx`), componentCode);
    console.log(`Extracted ${comp.name}SVG`);
  }
});
