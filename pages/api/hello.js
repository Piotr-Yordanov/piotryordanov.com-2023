// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const testFolder = 'C:/Users/piotr/OneDrive/Desktop/Journal/MNQ 12-20';
const fs = require('fs');

var pics = []

fs.readdir(testFolder, (err, files) => {
  files.forEach((file, index) => {
    const source = `${testFolder}/${file}`
    const destination = `./public/${file}`
    const stats = fs.statSync(source)

    pics.push({ src: file, id: index, ctime: new Date(stats.ctime) })
    fs.copyFileSync(source, destination);
  });
  pics = pics.sort((a, b) => a.ctime > b.ctime)
  fs.writeFileSync('./public/pics.json', JSON.stringify(pics))
});

export default (req, res) => {
  res.statusCode = 200
  res.json(pics)
  // res.json({ name: 'John Doe' })
}
