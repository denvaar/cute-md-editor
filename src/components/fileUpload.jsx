import React, { Component }  from 'react';

const resetDropZoneStyles = (e) => {
  e.target.style.background = "#fff";
  e.target.style.border = "1px solid #ddd";
  e.target.style.borderBottom = "1px dashed #ddd";
}

const noneShallPass = (e) => {
  e.stopPropagation();
  e.preventDefault();
};

const handleDragEnter = (e) => {
  noneShallPass(e);
  e.target.style.border = "2px dashed #8ed091";
  e.target.style.background = "aliceblue";
}

const handleDragLeave = (e) => {
  noneShallPass(e);
  resetDropZoneStyles(e);
}

const handleDragOver = (e) => {
  noneShallPass(e);
};


class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedFiles: []
    };
    this.addFile = this.addFile.bind(this);
    this.removeFile = this.removeFile.bind(this);
  }
 
  addFile(path) {
    if (!this.state.uploadedFiles.find(p => p === path)) {
      this.setState({
        uploadedFiles: [...this.state.uploadedFiles, path]
      });
    }
  }

  removeFile(path) {
    this.props.removeCallback(path)
      .then(res => {
        if (res.status === 200) {
          const index = this.state.uploadedFiles.findIndex(p => 
            path === p);

          this.setState({
            uploadedFiles: [
              ...this.state.uploadedFiles.slice(0, index),
              ...this.state.uploadedFiles.slice(index + 1)
            ]
          });
        }
      })
      .catch(err => {
        alert("Could not remove file");
      });
  }
  
  handleDrop(e, callback, uploadComplete) {
    noneShallPass(e);
    const files = e.dataTransfer.files;
    resetDropZoneStyles(e);
    callback(files)
      .then(res => {
        if (res.data) {
          const path = res.data.replace(/"/g,"");
          this.addFile(path);
          uploadComplete(path);
          return Promise.reject("Done");
        } else {
          return res.text();
        }
      })
      .then(text => {
        const path = text.replace(/"/g,"");
        this.addFile(path);
        uploadComplete(path);
      })
      .catch(err => null); // There's gotta be a better way to do this.
  }

  render() {
    const { hidden, children, callback, uploadComplete } = this.props;
    const uploadedFiles = this.state.uploadedFiles.map((f, i) =>
      <li key={i}>{f} <span className="remove-btn" onClick={() => this.removeFile(f)}>remove</span></li>
    );

    return (
      <div className="dropzone-wrap">
        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={(e) => this.handleDrop(e, callback, uploadComplete)}>
          {children}
        </div>
        <div className="dropzone-info" style={{display: hidden ? "none" : "inherit"}}>
          <span>Add files by dragging and dropping into the editor.</span>
          {this.state.uploadedFiles.length ? <ul>{uploadedFiles}</ul> : null}
        </div>
      </div>
    );
  }
}

export default FileUpload;
