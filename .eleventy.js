module.exports = function(eleventyConfig) {
  // add JSON pretty printer to liquid.js
  eleventyConfig.addLiquidFilter('json', (input) => {
    return JSON.stringify(input, null, '  ');
  });

  eleventyConfig.addPassthroughCopy({
    // '...relative to this file': '...relative to `dir.output` below'
    // Built demo content gets copied in verbatim
    'annotator/web/dist/': 'demo/',
    // Built API docs for each module get copied in verbatim
    'annotator/docs': 'docs/api',
    // also the images, css, and non-11ty js files
    'src/.htaccess': '.htaccess',
    'src/annotator-icon.svg': 'annotator-icon.svg',
    'src/doap.rdf': 'doap.rdf',
    'src/favicon.ico': 'favicon.ico',
    'src/index.js': 'index.js',
    'src/images/': 'images/',
    'src/site.webmanifest': 'site.webmanifest',
    'src/css': 'css/'
  });

  eleventyConfig.addShortcode('eq', function(a, b) { return a === b });
  eleventyConfig.addShortcode('not-eq', function(a, b) { return a !== b });

  // To add table of contents to docs: {{{ toc content }}}
  const markdownIt = require('markdown-it');
  const markdownItAnchor = require('markdown-it-anchor');
  eleventyConfig.setLibrary('md', markdownIt().use(markdownItAnchor));
  const pluginTOC = require('eleventy-plugin-toc');
  eleventyConfig.addPlugin(pluginTOC, { tags: ['h2', 'h3'] });

  const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  return {
    dir: {
      input: 'src',
      // relative to `input`
      layouts: '_layouts',
      output: 'content'
    }
  };
};
