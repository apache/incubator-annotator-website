module.exports = function(eleventyConfig) {
  // add JSON pretty printer to liquid.js
  eleventyConfig.addLiquidFilter('json', (input) => {
    return JSON.stringify(input, null, '  ');
  });

  eleventyConfig.addPassthroughCopy({
    // '...relative to this file': '...relative to `dir.output` below'
    'annotator/web/dist/demo/': 'demo/',
    'annotator/web/dist/style.css': 'style.css'
  });

  return {
    dir: {
      input: 'src',
      // relative to `input`
      layouts: '_layouts',
      output: 'content'
    }
  };
};
