import uglify from 'rollup-plugin-uglify';

var ugly = process.env.MODE === 'ugly';

export default {
  entry: 'dist/keepalive/index.js',
  dest: ugly ? 'dist/keepalive/bundles/keepalive.umd.min.js' : 'dist/keepalive/bundles/keepalive.umd.js',
  format: 'umd',
  moduleName: 'ngidle.keepalive',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/http': 'ng.http',
    'rxjs/Rx': 'Rx',
    '@ng-idle-e2e-fix/core': 'ng.core'
  },
  plugins: ugly ? [
    uglify()
  ] : []
};
