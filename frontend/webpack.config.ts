import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

type BuildMode = 'development' | 'production';

interface BuildEnv {
  mode: BuildMode
  port: number
}

export default (env: BuildEnv) => {
  const port = env.port || 3000;
  const mode = env.mode || 'development';
  const isDev = mode === 'development';

  console.log(port);
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
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
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
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev
      ? {
          port: 3000,
          open: true,
          hot: true,
          historyApiFallback: true,
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
      new webpack.DefinePlugin({
        DEV: JSON.stringify(isDev),
      }),
    ],
  };
  return config;
};
