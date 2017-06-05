# cute-md-editor

### It's a Markdown text editor field :tada:

- Uses [Showdown](https://github.com/showdownjs/showdown) to do the converting bewteeen markdown and HTML
- Pretty & simple interface
- Plops well into other projects
- Made with :heart:

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

## TODO's

- [ ] Drag n Drop file uploads
- [ ] Smarter toolbar buttons
- [ ] Get the bundle size smaller (Probably get rid of FontAwesome)

## License

MIT


