const {
  FuseBox,
  HTMLPlugin,
  VueComponentPlugin,
  WebIndexPlugin,
  Sparky
} = require('fuse-box');

const fuse = FuseBox.init({
  homeDir: './src',
  output: 'dist/$name.js',
  useTypescriptCompiler: true,
  plugins: [
    VueComponentPlugin({}),
    HTMLPlugin({
      useDefault: false,
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
  .instructions('> index.ts + components/**')
  .watch();

fuse.run();
