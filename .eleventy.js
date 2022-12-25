const dayjs = require("dayjs");
const Image = require("@11ty/eleventy-img");
var _ = require("lodash/lang");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [25, 320, 640, 960, 1200, 1800, 2400],
    formats: ["png", "jpeg"],
    urlPath: "/images/",
    outputDir: "./_site/images/",
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/images");

  eleventyConfig.addCollection("post", function (collection) {
    return collection.getFilteredByGlob("./src/post/*.md");
  });

  // filter, you can access from njk
  eleventyConfig.addFilter("asPostDate", (date) => {
    return dayjs(date).format("MMMM, DD/MM/YYYY");
  });

  eleventyConfig.addFilter("sortDesc", (posts) => {
    return posts.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
  });

  eleventyConfig.addFilter("hasData", (data) => {
    return !_.isEmpty(data);
  });

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  eleventyConfig.addFilter("tagsColor", (tag) => {
    switch (tag) {
      case "BUG FIX":
        return "bg-[#f06292]";

      case "NEW FEATURE":
        return "bg-[#24D69E]";

      case "IMPROVEMENT":
        return "bg-[#4A8DF9]";

      default:
        return "bg-[#4A8DF9]";
    }
  });

  return {
    passthroughFileCopy: true,
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTtemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
