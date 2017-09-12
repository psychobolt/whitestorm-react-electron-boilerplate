// @flow
import './app.css';

function timeout(duration: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}

export default function app(): Promise<void> {
  return timeout(10).then(() => {
    console.log('App started'); // eslint-disable-line no-console
  });
}
