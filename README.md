# cute-md-editor

### It's a Markdown text editor field :tada:

<img width="767" alt="screen shot 2017-06-04 at 10 33 29 pm" src="https://cloud.githubusercontent.com/assets/10538978/26770671/e1b7b126-4975-11e7-9d54-259da6b999fc.png">

- Uses [Showdown](https://github.com/showdownjs/showdown) to do the converting bewteeen markdown and HTML
- Pretty & simple interface
- Plops well into other projects
- Made with :heart:

## TODO's

- [ ] Drag n Drop file uploads
- [ ] Smarter toolbar buttons
- [ ] Get the bundle size smaller (Probably get rid of FontAwesome)

## Install

It's published using Node Package Manager, so...

```
npm install cute-md-editor
```
Then just use it in your project as you please:
```javascript
import MarkdownEditor from 'cute-md-editor';

// <MarkdownEditor />
```

## Usage

It's designed to work as a normal React component, but if you want to render it on the DOM as a stand alone form field, you can utilize the `elementId` and `elementName` props.

Available props:
- `content` -- Initial content for the editor field.
- `elementId` -- An id that will be placed on the underlying textarea.
- `elementName` -- A name that will be placed on the underlying textarea.

## License

MIT


