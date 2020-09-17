module.exports = function(eleventyConfig) {
  // add JSON pretty printer to liquid.js
  eleventyConfig.addLiquidFilter('json', (input) => {
    return JSON.stringify(input, null, '  ');
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
