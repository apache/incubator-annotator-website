module.exports = function(eleventyConfig) {
  // add JSON pretty printer to liquid.js
  eleventyConfig.addLiquidFilter('json', (input) => {
    return JSON.stringify(input, null, '  ');
  });

  eleventyConfig.addPassthroughCopy({
    // '...relative to this file': '...relative to `dir.output` below'
    // demo content gets copyied in verbatim
    'annotator/web/dist/demo/': 'demo/',
    'annotator/web/dist/style.css': 'style.css',
    // also the images, css, and non-11ty js files
    'src/.htaccess': '.htaccess',
    'src/annotator-icon.svg': 'annotator-icon.svg',
    'src/doap.rdf': 'doap.rdf',
    'src/favicon.ico': 'favicon.ico',
    'src/index.js': 'index.js',
    'src/images/': 'images/',
    'src/site.webmanifest': 'site.webmanifest'
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
