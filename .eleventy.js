module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style/style.css");
  eleventyConfig.addCollection("post", function (collection) {
    return collection.getFilteredByGlob("./src/post/*.md");
  });

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
