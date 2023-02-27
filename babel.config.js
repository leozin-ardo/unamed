const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ['./src/'],
      alias: {
        components: './src/view/components/',
        screens: './src/view/screens/',
        provider: './src/provider/',
        colors: './src/styles/colors/',
      },
    },
  ],
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins,
};
