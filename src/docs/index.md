---
title: Overview
isDocsIndex: true
layout: docs
---

Apache Annotator provides software modules to facilitate annotation tools in web browser environments. For example, it could be used in web-based document viewers or browser extensions that let users highlight phrases and place virtual sticky notes on the pages they visit.

The modules are written in [TypeScript](https://www.typescriptlang.org/), and distributed as Javascript/ECMAScript modules [on NPM](https://www.npmjs.com/org/apache-annotator). Read further for a high-level description of the code functionality, or [get started](/docs/getting-started/) with it directly!


## What is in the box

### Selector tools

The main functionality Apache Annotator offers is to map a [Web Annotation Selector](https://www.w3.org/TR/2017/REC-annotation-model-20170223/#selector) to the segment of a document it corresponds to, sometimes called ‘anchoring’ a Selector; and, vice versa, to create a Selector that describes a given selection in the document precisely and unambiguously, such that other Web Annotation software knows exactly where it points to. The purpose of Selectors is to point at any part of a document without requiring any modification of the document itself.

The [W3C Web Annotation Data Model](https://www.w3.org/TR/annotation-model) outlines a number of different selectors types, to accomodate various use case on different types of documents and selections (e.g. an annotation may target a phrase of text, or a region within an image). The table below shows the full list of defined types and the implementation status of each.

| Selector                                                                        | Description                                                                                                                                                                                          | Implemented?                                                                                                                                                 |
| ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Fragment](https://www.w3.org/TR/annotation-model/#fragment-selector)           | Uses the fragment part of an IRI defined by the representation’s media type.                                                                                                                         | No                                                                                                                                                           |
| [CSS](https://www.w3.org/TR/annotation-model/#css-selector)                     | CSS Selectors allow for a wide variety of well supported ways to describe the path to an element in a web page.                                                                                      | Yes ([for DOM](/docs/api/modules/dom.html#createcssselectormatcher))                                                                                         |
| [XPath](https://www.w3.org/TR/annotation-model/#xpath-selector)                 | Implements an XPath based selection.                                                                                                                                                                 | No                                                                                                                                                           |
| [Text Quote](https://www.w3.org/TR/annotation-model/#text-quote-selector)       | This Selector describes a range of text, including some of the text immediately before (a prefix) and after (a suffix) it to distinguish between multiple copies of the same sequence of characters. | Yes ([for DOM](/docs/api/modules/dom.html#createtextquoteselectormatcher) and [on any text](/docs/api/modules/selector.html#textquoteselectormatcher))       |
| [Text Position](https://www.w3.org/TR/annotation-model/#text-position-selector) | This Selector describes a range of text by recording the start and end positions of the selection in the stream.                                                                                     | Yes ([for DOM](/docs/api/modules/dom.html#createtextpositionselectormatcher) and [on any text](/docs/api/modules/selector.html#textpositionselectormatcher)) |
| [Data Position](https://www.w3.org/TR/annotation-model/#data-position-selector) | Similar to the Text Position Selector, the Data Position Selector uses the same properties but works at the byte in bitstream level rather than the character in text level.                         | No                                                                                                                                                           |
| [SVG](https://www.w3.org/TR/annotation-model/#svg-selector)                     | An SvgSelector defines an area through the use of the Scalable Vector Graphics standard.                                                                                                             | No                                                                                                                                                           |
| [Range](https://www.w3.org/TR/annotation-model/#range-selector)                 | A Range Selector can be used to identify the beginning and the end of the selection by using other Selectors.                                                                                        | Yes ([for DOM](/docs/api/modules/dom.html#makecreaterangeselectormatcher))                                                                                   |
| [Refinement](https://www.w3.org/TR/annotation-model/#refinement-of-selection)   | Select a part of a selection, rather than as a selection of the complete resource.                                                                                                                   | [Yes](/docs/api/modules/selector.html#makerefinable)                                                                                                         |


### Web Annotation JSON validator

The source code also includes a script for validating Web Annotation Data Model JSON documents against the data model schema. Having [installed from source](/docs/develop/#install-from-source), one can run:

``` shell
$ yarn validate --url https://raw.githubusercontent.com/w3c/web-annotation-tests/master/tools/samples/correct/anno1.json
```

With the `--url` option you can pass in a URL or a local path to a JSON file.

See some [example JSON files](https://github.com/w3c/web-annotation-tests/tree/master/tools/samples) from the W3C. Note that this validator only tests the data model is followed, and not e.g. whether its target actually exists.


## What Apache Annotator is not

Apache Annotator is **not an all-in-one annotation tool**; rather, it *helps others create* annotation tools. It does not have opinions regarding in which database on which computer annotations are stored, nor how they are made, exchanged or displayed. Those questions are considered application-specific and left to the developer. Our goal is that the developer can focus on exactly those questions, and forget about issues that are common among annotation tools: finding the part in the document that is being annotated, dealing with changes in the annotated document, ensuring compatibility with other tools, and so on.
