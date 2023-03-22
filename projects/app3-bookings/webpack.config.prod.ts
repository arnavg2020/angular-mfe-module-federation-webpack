import webpackConfig from './webpack.config';
import {Configuration} from 'webpack';

export const prodWebpackConfig: Configuration = {
  ...webpackConfig,
  output: {
    publicPath: 'http://localhost:82/', // production server,
	uniqueName: 'bookings',
  },
};

export default prodWebpackConfig;