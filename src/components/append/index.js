import React from 'react';
import { connect } from 'react-redux';
import { appendLink } from '../../actions';

import './append.css';

const Append = ({ dispatch, router }) => {
  const form = {};

  const handleSubmit = event => {
    dispatch(appendLink({
      caption: form.caption.value,
      url: form.url.value,
      description: form.description.value,
    }));

    router.push('/');
    event.preventDefault();
  };

  return (
    <form className="form append" onSubmit={event => handleSubmit(event)}>
      <label className="form__label">
        <span className="form__caption">Заголовок:</span>
        <input type="text" name="caption" ref={node => { form.caption = node }} />
      </label>

      <label className="form__label">
        <span className="form__caption">Ссылка:</span>
        <input type="text" name="url" ref={node => { form.url = node }} />
      </label>

      <label className="form__label">
        <span className="form__caption">Описание:</span>
        <textarea name="description" cols="30" rows="10" ref={node => { form.description = node }} />
      </label>

      <button type="submit">Добавить</button>
    </form>
  );
};

export default connect()(Append);
