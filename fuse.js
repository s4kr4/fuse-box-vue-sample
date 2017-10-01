const {
  FuseBox,
  BabelPlugin,
  VueComponentPlugin,
  WebIndexPlugin,
  Sparky
} = require('fuse-box');

const fuse = FuseBox.init({
  homeDir: './src',
  output: 'dist/$name.js',
  plugins: [
    VueComponentPlugin({
      script: BabelPlugin({
        presets: ['es2015'],
      }),
    }),
    WebIndexPlugin({
      template: './src/index.html'
    }),
  ],
});

fuse.dev({
  port: 3333
});

fuse.bundle('app.js')
  .instructions('> index.js + components/**')
  .watch()
  .hmr();

fuse.run();
