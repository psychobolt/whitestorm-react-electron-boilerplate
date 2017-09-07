import './app.css';

function timeout(duration = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}

export default function app() {
  return timeout(10).then(() => {
    console.log('App started'); // eslint-disable-line no-console
  });
}

app();
