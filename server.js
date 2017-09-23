import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import config from './webpack.app.babel';

const options = {
  host: 'localhost',
  port: 3000,
  hot: true,
  historyApiFallback: true,
};

WebpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, options);

server.listen(options.port, () => {
  console.log('dev server listening on port 3000'); // eslint-disable-line no-console
});

