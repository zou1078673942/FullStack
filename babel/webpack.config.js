const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CopyPlugin = require('copy-webpack-plugin')

const config = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: './dist',
    hot: true 
  },
  module: {
    rules: [
      {
        test: /(.js|.jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },{
        test: /\.css$/i,
        // css-loader 专门处理 css 语法
        // style-loader 将 css 内容插入到 html 标签中
        use: ['style-loader', {
          loader:'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName:'[hash:base64:5]'
            }
          }
        }],
      }
    ]
  },
  
  plugins: [
    new BundleAnalyzerPlugin(),
    new CopyPlugin({
      patterns: [
        { from: './public/1.png', to: './' }
      ],
    }),
    new HtmlWebpackPlugin({
      template:'./public/index.html',
      filename:'index.html'
    })
  ]
}
module.exports = config

// dist 中存着项目打包的最终结果
// dist 为最终上线的文件夹
// dist 自动生成