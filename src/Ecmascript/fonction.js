import Tab from './tab.js';
const searchById = (array, id) => {
    return array.find((element) => element.id === id);
  };
  
export default searchById;