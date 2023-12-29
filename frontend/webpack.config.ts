import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

type BuildMode = 'development' | 'production';

interface BuildEnv {
  mode: '';
  port: number;
}

export default (env: any) => {
  console.log(env);

  const mode = env.mode || 'development';
  const port = env.port || 3000;
  const isDev = mode === 'development';

  const config = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: (resPath: string) =>
                    Boolean(resPath.includes('.module.')),
                  localIdentName: isDev
                    ? '[path][name]__[local]--[hash:base64:5]'
                    : '[hash:base64:8]',
                },
              },
            },

            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
      ],
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev
      ? {
          port: 3000,
          open: true,
        }
      : undefined,
    output: {
      filename: '[name][contenthash].js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
    ],
  };
  return config;
};
