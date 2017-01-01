import React, { Component } from 'react';
import './append.css';

class Append extends Component {
  constructor(props) {
    super(props);

    this.state = {
      caption: '',
      url: '',
      description: '',
    };

    this.setLinkCaption = this.setLinkCaption.bind(this);
    this.setLinkUrl = this.setLinkUrl.bind(this);
    this.setLinkDescription = this.setLinkDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  setLinkCaption(event) {
    this.setState({
      caption: event.target.value
    });
  }

  setLinkUrl(event) {
    this.setState({
      url: event.target.value
    });
  }

  setLinkDescription(event) {
    this.setState({
      description: event.target.value
    });
  }

  render() {
    const { caption, url, description } = this.state;

    return (
      <form className="form append" onSubmit={this.handleSubmit}>
        <label className="form__label">
          <span className="form__caption">Заголовок:</span>
          <input type="text" name="caption"
                 value={caption}
                 onChange={this.setLinkCaption}/>
        </label>

        <label className="form__label">
          <span className="form__caption">Ссылка:</span>
          <input type="url" name="url"
                 value={url}
                 onChange={this.setLinkUrl}/>
        </label>

        <label className="form__label">
          <span className="form__caption">Описание:</span>
          <textarea name="description" cols="30" rows="10"
                    value={description}
                    onChange={this.setLinkDescription}/>
        </label>

        <button type="submit">Добавить</button>
      </form>
    );
  }
}
export default Append;
