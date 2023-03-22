import webpackConfig from './webpack.config';
import {Configuration} from 'webpack';

export const prodWebpackConfig: Configuration = {
  ...webpackConfig,
  output: {
    publicPath: 'http://localhost:81/', // production server,
	uniqueName: 'flights',
  },
};

export default prodWebpackConfig;