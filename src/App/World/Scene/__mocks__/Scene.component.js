const OLD_ENV = process.env.NODE_ENV;
process.env.NODE_ENV = 'test';
const { Scene } = jest.requireActual('../Scene.component');
process.env.NODE_ENV = OLD_ENV;

export default Scene;
