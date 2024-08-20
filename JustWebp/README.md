
# Image Converter and Resizer

This project provides a web-based tool to convert image files to WebP format and resize them using HTML5 and JavaScript. Additionally, it includes a server-side image resizing script using Node.js and the `sharp` library.

## Features

- **Image Conversion to WebP**: Convert images to WebP format directly in the browser.
- **Image Resizing**: Resize images to a specific width without enlarging smaller images.
- **Multi-file Support**: Convert and resize multiple images at once.
- **Simple Interface**: Easy-to-use web interface with file input and download options.

## Installation

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your system.

### Setting Up

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   npm install sharp
   ```

## Usage

### Running the HTML Converter

1. Open `index.html` in your web browser.
2. Use the file input to select images.
3. Click "Dönüştür ve İndir" to convert images to WebP format and download them.

### Using the Node.js Resizer

1. Place the image you want to resize in the appropriate path.
2. Modify `index.js` to point to your image path:

   ```javascript
   const imagePath = 'path/to/your/image.jpg';
   const outputPath = 'path/to/your/output/image.jpg';
   ```

3. Run the script:

   ```bash
   node index.js
   ```

4. The resized image will be saved to the specified output path.

## Project Structure

- `index.html`: The main HTML file providing the web interface for image conversion.
- `index.js`: The Node.js script for server-side image resizing using `sharp`.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
