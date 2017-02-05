import React from 'react';

import './append.css';

const Append = ({ router, statuses, appendLink }) => {
  const form = {};

  const handleSubmit = event => {
    appendLink({
      caption: form.caption.value,
      href: form.href.value,
      description: form.description.value,
      tags: form.tags.value.split(',')
        .filter(tag => tag)
        .map(tag => tag.trim().toLowerCase())
    }).then(() => {
      router.push('/');
    });

    event.preventDefault();
  };

  return (
    <form className="form append" onSubmit={event => handleSubmit(event)}>
      <label className="form__label">
        <span className="form__caption">Заголовок:</span>
        <input type="text" name="caption" ref={node => {
          form.caption = node
        }}/>
      </label>

      <label className="form__label">
        <span className="form__caption">Ссылка:</span>
        <input type="text" name="href" ref={node => {
          form.href = node
        }}/>
      </label>

      <label className="form__label">
        <span className="form__caption">Описание:</span>
        <textarea name="description" cols="30" rows="10" ref={node => {
          form.description = node
        }}/>
      </label>

      <label className="form__label">
        <span className="form__caption">Теги, через запятую:</span>
        <input type="text" name="tags" ref={node => {
          form.tags = node
        }}/>
      </label>

      <button type="submit" disabled={statuses.fetch}>Добавить</button>
    </form>
  );
};

export default Append;
