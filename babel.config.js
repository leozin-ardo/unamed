const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ['./src/'],
      alias: {
        '@components': ['./src/view/components/'],
        '@screens': ['./src/view/screens/'],
        '@provider': ['./src/provider/'],
        '@colors': ['./src/styles/colors/'],
      },
    },
  ],
];

module.exports = {
  "presets": ["module:metro-react-native-babel-preset"],
  "plugins": [
    [
      "module-resolver",
      {
        "root": ["./src"],
        "extensions": [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json"
        ],
        "alias": {
          "@screens": "./src/view/screens/",
          "@components": "./src/view/components/",
          "@provider": "./src/provider/",
          "@styles": "./src/styles/",
          "@utils":"./src/util/"
        }
      }
    ]
  ]
};
