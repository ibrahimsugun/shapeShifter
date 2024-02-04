import sharp from 'sharp';
const imagePath = 'path/to/image.jpg';
const outputPath = 'path/to/resized-image.jpg';

sharp(imagePath)
  .resize({ width: 1000 })
  .withoutEnlargement(true)
  .toFile(outputPath, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
    }
  });
