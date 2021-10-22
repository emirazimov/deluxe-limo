module.exports = {
  compress: true,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "less-loader",
            options: { javascriptEnabled: true }, // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ["file-loader"],
      },
    ],
  },
  // images: {
  //   loader: "imgix",
  //   path: "",
  // },
  // images: {
  //   loader: "static",
  // },
}
