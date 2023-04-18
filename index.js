const path = require('path');
const { createWorker } = require('tesseract.js');

const [,, imagePath] = process.argv;
//const image = path.resolve(__dirname, (imagePath || '../../tests/assets/images/cosmic.png'));
const image = "https://i.ytimg.com/vi/QtrIwgf9KJg/maxresdefault.jpg"
console.log(`Recognizing ${image}`);

(async () => {
  const worker = await createWorker({
    logger: m => console.log(m),
  });  
  await worker.loadLanguage('spa');
  await worker.initialize('spa');
  const { data: { text } } = await worker.recognize(image);
  console.log(text);
  await worker.terminate();
})();