const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public/logos/Logo_Lockup_-_White_Background2-removebg-preview.png');
const outputPath = path.join(__dirname, 'src/app/icon.png');

async function processImage() {
    try {
        // Trim the transparent parts and output it as is first to see dimensions
        const trimmed = sharp(inputPath).trim();
        const metadata = await trimmed.metadata();

        console.log(`Trimmed dimensions: ${metadata.width}x${metadata.height}`);

        // Create a square image by padding the longest side, but with minimal padding
        const size = Math.max(metadata.width, metadata.height);
        const padding = Math.floor(size * 0.05); // 5% padding
        const targetSize = size + (padding * 2);

        await trimmed
            .resize(targetSize, targetSize, {
                fit: 'contain',
                background: { r: 0, g: 0, b: 0, alpha: 0 }
            })
            .toFile(outputPath);

        console.log('Successfully created bigger icon.png');
    } catch (error) {
        console.error('Error processing image:', error);
    }
}

processImage();
