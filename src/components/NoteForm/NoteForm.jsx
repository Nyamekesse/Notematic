import ButtonPrimary from 'components/ButtonPrimary/ButtonPrimary';
import React, { useState } from 'react';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import style from './style.module.css';

const NoteForm = ({ title, onClickEdit, onClickDelete, onSubmit }) => {
  const [formValues, setFormValues] = useState({ title: '', content: '' });
  const updateFormValues = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const actionIcons = (
    <>
      <div className="col-1">{onClickEdit && <PencilFill className={style.icon} />}</div>
      <div className="col-1">{onClickDelete && <TrashFill className={style.icon} />}</div>
    </>
  );
  const titleInput = (
    <>
      <label className="form-label">Title</label>
      <input type="text" name="title" className="form-control " onChange={updateFormValues} />
    </>
  );

  const contentInput = (
    <>
      <label className="form-label">Title</label>
      <textarea type="text" name="content" className="form-control" rows={5} onChange={updateFormValues} />
    </>
  );

  const submitButton = (
    <div className={style.submit_button}>
      <ButtonPrimary onClick={() => onSubmit(formValues)}>Submit</ButtonPrimary>
    </div>
  );
  return (
    <div className={style.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{title}</h2>
        </div>
        {actionIcons}
      </div>
      <div className={`mb-3 ${style.title_input_container}`}>{titleInput}</div>
      <div className="mb-3">{contentInput}</div>
      {onSubmit && submitButton}
    </div>
  );
};

export default NoteForm;
