const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const srcDir = path.join(__dirname, '..', 'uproad');
const outDir = path.join(__dirname, '..', 'public', 'images', 'gallery');

// Target: 4:3 aspect, 1200px wide output
const TARGET_W = 1200;
const TARGET_H = 900;

const files = [
  {
    src: '練習2-1.jpg', out: '練習2-1.jpg',
    // 1200x900 横型 — already good, just resize/ensure quality
    crop: null
  },
  {
    src: '練習2-2.jpg', out: '練習2-2.jpg',
    // 554x1200 縦型 — has black bars top/bottom from screenshot
    // Actual content roughly y:60 to y:1060 (about 1000px tall), full width 554
    // Center crop to get the main subjects
    crop: { left: 0, top: 80, width: 554, height: 900 }
  },
  {
    src: '練習2-3.jpg', out: '練習2-3.jpg',
    // 662x1200 縦型 — person practicing singing, good content throughout
    // Crop center area focusing on the person
    crop: { left: 0, top: 100, width: 662, height: 880 }
  },
  {
    src: '練習2-4.jpg', out: '練習2-4.jpg',
    // 1200x900 横型 — already good
    crop: null
  },
  {
    src: '練習2-5.jpg', out: '練習2-5.jpg',
    // 554x1200 縦型 — has black bars top/bottom
    // Content roughly y:50 to y:1050
    crop: { left: 0, top: 70, width: 554, height: 900 }
  },
  {
    src: '練習2-6.jpg', out: '練習2-6.jpg',
    // 554x1200 縦型 — has black bars top/bottom
    // Two students doing balance exercise
    crop: { left: 0, top: 60, width: 554, height: 920 }
  },
];

async function process() {
  for (const f of files) {
    const srcPath = path.join(srcDir, f.src);
    const outPath = path.join(outDir, f.out);

    let pipeline = sharp(srcPath);

    if (f.crop) {
      pipeline = pipeline.extract(f.crop);
    }

    // Resize to uniform 1200x900 (4:3), cover mode to fill
    pipeline = pipeline.resize(TARGET_W, TARGET_H, {
      fit: 'cover',
      position: 'center'
    });

    await pipeline.jpeg({ quality: 85 }).toFile(outPath);
    const meta = await sharp(outPath).metadata();
    console.log(`✓ ${f.out}: ${meta.width}x${meta.height}`);
  }
  console.log('\nAll done!');
}

process().catch(console.error);
