const path = require('path');

module.exports = (env) => {
  let minimize = false;

  if (env) {
    minimize = env.min === true;
  }

  return {
    entry: './src/index.js',
    mode: 'production',
    output: {
      filename: `character-count.${minimize ? 'min.' : ''}js`,
      path: path.resolve(__dirname, 'dist'),
      library: {
        root: 'CharacterCount',
        amd: 'character-count',
        commonjs: 'character-count',
      },
      libraryTarget: 'umd',
    },
    devtool: 'source-map',
    optimization: {
      minimize,
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: '> 5%',
                  },
                ],
              ],
              plugins: [],
            },
          },
        },
      ],
    },
  };
};
