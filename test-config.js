import Enzyme from 'enzyme';

global.requestAnimationFrame = (callback) => setTimeout(callback, 0);

const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });
