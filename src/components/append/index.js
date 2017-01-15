import React from 'react';
import { connect } from 'react-redux';
import { appendLink, uploadLink, uploadedLink } from '../../actions';

import './append.css';

function delayedSubmitLink(action) {
  return dispatch => {
    dispatch(uploadLink());

    return new Promise(resolve => {
      // fetch POST
      window.setTimeout(() => {
        dispatch(action);
        dispatch(uploadedLink());
        resolve();
      }, 1000);
    });
  };
}

const Append = ({ dispatch, router, statuses }) => {
  const form = {};

  const handleSubmit = event => {
    dispatch(delayedSubmitLink(appendLink({
      caption: form.caption.value,
      url: form.url.value,
      description: form.description.value,
    }))).then(() => {
      router.push('/');
    });

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

      <button type="submit" disabled={statuses.upload}>Добавить</button>
    </form>
  );
};

const mapStateToProps = state => ({
  statuses: state.statuses,
});

export default connect(mapStateToProps)(Append);
