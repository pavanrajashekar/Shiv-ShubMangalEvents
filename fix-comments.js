const fs = require('fs');
const path = require('path');

const dir = 'd:/1_Productivity/Shiv_ShubMangal3/web/src/components/svg';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace <!-- ... --> with {/* ... */}
    content = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
    fs.writeFileSync(filePath, content);
  }
});
