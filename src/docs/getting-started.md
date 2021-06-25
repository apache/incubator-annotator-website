---
title: Getting Started
isGettingStarted: true
layout: docs
---

## Install via NPM

Currently we only support installation through NPM packages. You will need to use a bundler (such as [webpack](https://webpack.js.org/)) to use the modules in a web browser.

The project is made up of multiple modules. Each module is [available on the NPM registry](https://www.npmjs.com/org/apache-annotator) as individual packages in the `@apache-annotator` scope, and all of them together in the [`apache-annotator`](https://www.npmjs.com/package/apache-annotator) ‘meta-package’. You can install either and then import packages in your code as `@apache-annotator/package` or `apache-annotator/package`, respectively.

For example, for the latest official release:

``` shell
$ yarn add @apache-annotator/dom
```

For the latest development version, get the `dev` tag. For example:

``` shell
$ yarn add @apache-annotator/dom@dev
```

And in your code import what you need:

``` js
import { highlightText } from '@apache-annotator/dom';
```


## Install from source

See [Develop](/docs/develop/).


## Usage example: a text quote highlighter

A typical goal of web annotation is to let users highlight a phrase of text in a web page, and perhaps add a note to it. The example code below creates such a highlighter (without note-taking functionality).

First, we define the way to describe the user’s selection as a [TextQuoteSelector](https://www.w3.org/TR/2017/REC-annotation-model-20170223/#text-quote-selector).

``` js
import { describeTextQuote } from '@apache-annotator/dom';

async function describeCurrentSelection() {
  const userSelection = window.getSelection()?.getRangeAt(0);
  if (!userSelection || userSelection.isCollapsed) return;
  return describeTextQuote(userSelection);
}
```

If the user had selected the word *“ipsum”* in the befamed *“Lorem ipsum dolor amet …”*, the return value of describeCurrentSelection() might resolve to this:

``` json
{
  type: 'TextQuoteSelector',
  exact: 'ipsum',
  prefix: 'Lorem ',
  suffix: ' dolor'
}
```

The *prefix* and *suffix* attributes are there to know which of multiple occurrences of *“ipsum”* the Selector points to. They will include just enough surrounding words to make the selector unambiguous.

Next, we define roughly the inverse function: given a TextQuoteSelector, we highlight the text it points to.

``` js
import { createTextQuoteSelectorMatcher, highlightText } from '@apache-annotator/dom';

async function highlightSelectorTarget(textQuoteSelector) {
  const matches = createTextQuoteSelectorMatcher(textQuoteSelector)(document.body);

  // Modifying the DOM while searching can mess up; see issue #112.
  // Therefore, we first collect all matches before highlighting them.
  const matchList = [];
  for await (const match of matches) matchList.push(match);

  for (const match of matchList) highlightText(match);
}
```

As the [`for await … of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) statement suggests, the matcher does not return just one match, but a stream (an async iterable) of matches. This is because it cannot be certain that a selector only has a single match (even when it includes a prefix & suffix, perhaps the document changed!).

We could use the functions defined above in many ways; keeping highlighted quotes in local storage, or in one’s bookmarks, or sharing them with others, and so on. For this example, we keep it simple and highlight each selection upon release of the mouse button; and store the selector to make it appear again after a page reload.

``` js
document.addEventListener('mouseup', async () => {
  const selector = await describeCurrentSelection();
  const existingSelectors = JSON.parse(localStorage[document.URL] || '[]');
  localStorage[document.URL] = JSON.stringify([...existingSelectors, selector]);
  await highlightSelectorTarget(selector);
});

// Highlight the last selection that was stored, if any.
async function highlightStoredSelectors() {
  if (localStorage[document.URL]) {
    const selectors = JSON.parse(localStorage[document.URL]);
    for (const selector of selectors) {
      await highlightSelectorTarget(selector);
    }
  }
}
highlightStoredSelectors();
```

To see similar pieces of code in action, have a look at [the demo](/demo/).
