import {Configuration, container} from 'webpack';
import dep from 'package.json';

export const webpackConfig: Configuration = {
  output: {
    publicPath: 'http://localhost:4204/',
	uniqueName: 'flights',
  },
  experiments: {
    topLevelAwait: true,
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new container.ModuleFederationPlugin({
	  name: 'flights',
	  library: {type: 'var', name: 'flights',},
	  filename: 'remoteFlights.js',
	  exposes: {
	    FlightsModule: './projects/app2-flights/src/app/flights/flights.module.ts'
	  },
	  shared: {
	    '@angular/core': {
		eager: true,
		singleton: true,
		strictVersion: true,
		requiredVersion: dep.dependencies["@angular/router"]
	  },
	  '@angular/common': {
	    eager: true,
		singleton: true,
		strictVersion: true,
		requiredVersion: dep.dependencies["@angular/common"]
	  },
	  '@angular/router': {
	    eager: true,
		singleton: true,
		strictVersion: true,
		requiredVersion: dep.dependencies["@angular/router"]
	  },
	  'flights-assets': {eager: true, singleton: true},
	 }
   })
  ]
};

export default webpackConfig;