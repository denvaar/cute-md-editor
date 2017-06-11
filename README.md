# cute-md-editor

### It's a Markdown text editor field :tada:

<img width="631" alt="screen shot 2017-06-11 at 4 19 27 pm" src="https://user-images.githubusercontent.com/10538978/27015172-286ee5b8-4ec5-11e7-80a7-c6b1bc0faee2.png">


- Uses [Showdown](https://github.com/showdownjs/showdown) to do the converting bewteeen markdown and HTML
- Drag n drop file upload (optional)
- Pretty & simple interface
- Plops well into other projects
- Made with :heart:

## TODO's

- [x] Drag n Drop file uploads
- [ ] Smarter toolbar buttons
- [x] Get the bundle size smaller (Probably get rid of FontAwesome)
  - update: Down to 22 Kb

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


```javascript
/* example using axios */
import axios from 'axios';

const callback = (files) => {
  let data = new FormData();
  data.append("expected_field_name_goes_here", files);
  return axios.post("/path/to/image/upload/endpoint", data);
};

/* example using whatwg-fetch */
import 'whatwg-fetch';

const callback = (files) => {
  let formData = new FormData();
  formData.append("expected_field_name_goes_here", files);
  let data = {
    method: 'POST',
    body: formData
  };
  return fetch("/path/to/image/upload/endpoint", data);
};

```


## License

MIT


