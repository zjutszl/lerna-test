const path = require("path");

exports.onCreateWebpackConfig = (args) => {
  args.actions.setWebpackConfig({
    resolve: {
      alias: {
        "@mjz-test/mjz-ui": path.resolve(__dirname, "../../../packages/mjz-ui/src"),
        "@mjz-test/icons": path.resolve(__dirname, "../../../packages/icons/src"),
      },
    },
  });
};