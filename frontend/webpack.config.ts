import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

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
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
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
          hot: true,
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
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
      new webpack.ProgressPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin(),
    ],
  };
  return config;
};
