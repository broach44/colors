import colors from './helpers/data/color';

const colorArr = colors.getColors();


const forEachFunc = () => {
// loops over all colors and does a console.log to print the color name
  for (let i = 0; i < colorArr.length; i += 1) {
    console.log('for', colorArr[i].name);
  }
  colorArr.forEach((color) => console.log('forEach', color.name));
};

const filterFunc = () => {
  // write a function that prints out an array of colors that have a hexValue that starts with an 'F' - result should be first 3
  const newColors = [];
  for (let i = 0; i < colorArr.length; i += 1) {
    const currentColor = colorArr[i];
    if (currentColor.hexValue.startsWith('F')) {
      newColors.push(currentColor);
    }
  }
  console.log('for', newColors);
  const filterColors = colorArr.filter((x) => x.hexValue[0] === 'F');
  console.log('filter', filterColors);
};

const findFunc = () => {
  // find the color that has name of 'green' and console its hexValue
  let colorToFind = {};
  for (let i = 0; i < colorArr.length; i += 1) {
    if (colorArr[i].name === 'green') {
      colorToFind = colorArr[i];
    }
  }
  console.log('for', colorToFind.hexValue);
  const colorFind = colorArr.find((x) => x.name === 'green');
  console.log('find', colorFind.hexValue);
};

const mapFunc = () => {
  // creating an array of h1 tags for each color name
  const h1Tags = [];
  for (let i = 0; i < colorArr.length; i += 1) {
    h1Tags.push(`<h1>${colorArr[i].name}</h1>`);
  }
  console.log('for', h1Tags);
  const colorMap = colorArr.map((color) => `<h1>${color.name}</h1>`);
  console.log('map', colorMap);
};

const reduceFunc = () => {
  // total number of upVotes
  let total = 0;
  for (let i = 0; i < colorArr.length; i += 1) {
    total += colorArr[i].upVotes;
  }
  console.log('for', total);
  const upVoteTotal = colorArr.reduce((prev, curr) => prev + curr.upVotes, 0);
  console.log('reduce', upVoteTotal);
};

const init = () => {
  forEachFunc();
  filterFunc();
  findFunc();
  mapFunc();
  reduceFunc();
};

export default { init };
