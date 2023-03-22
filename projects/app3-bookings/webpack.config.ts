import {Configuration, container} from 'webpack';
import dep from 'package.json';

export const webpackConfig: Configuration = {
  output: {
    publicPath: 'http://localhost:4205/',
	uniqueName: 'bookings',
  },
  experiments: {
    topLevelAwait: true,
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new container.ModuleFederationPlugin({
	  name: 'bookings',
	  library: {type: 'var', name: 'bookings'},
	  filename: 'remoteBookings.js',
	  exposes: {
	    BookingsModule: './projects/app3-bookings/src/app/bookings/bookings.module.ts',
		BookingsComponent: './projects/app3-bookings/src/app/bookings/bookings.component.ts'
	  },
	  shared: {
	    '@angular/core': {
		eager: true,
		singleton: true,
		strictVersion: true,
		requiredVersion: dep.dependencies['@angular/core']
	  },
	  '@angular/common': {
		eager: true,
		singleton: true,
		strictVersion: true,
		requiredVersion: dep.dependencies['@angular/common']
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