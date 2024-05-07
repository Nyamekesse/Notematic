import ButtonPrimary from 'components/ButtonPrimary/ButtonPrimary';
import FieldError from 'components/FieldError/FieldError';
import React, { useState } from 'react';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import { ValidatorService } from 'services/validator';
import style from './style.module.css';

const VALIDATOR = {
  title: (value) => {
    return ValidatorService.min(value, 3) || ValidatorService.max(value, 20);
  },
  content: (value) => {
    return ValidatorService.min(value, 3);
  },
};

const NoteForm = ({ title, onClickEdit, onClickDelete, onSubmit, isEditable = true, note }) => {
  const [formValues, setFormValues] = useState({ title: note?.title || '', content: note?.content || '' });
  const [formErrors, setFormErrors] = useState({ title: note?.title ? undefined : true, content: note?.content ? undefined : true });

  const validate = (fieldName, fieldValue) => {
    setFormErrors({ ...formErrors, [fieldName]: VALIDATOR[fieldName](fieldValue) });
  };

  const updateFormValues = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    validate(name, value);
  };

  const hasError = () => {
    for (const fieldName in formErrors) {
      if (formErrors[fieldName]) {
        return true;
      }
    }
    return false;
  };

  const actionIcons = (
    <>
      <div className="col-1">{onClickEdit && <PencilFill onClick={onClickEdit} className={style.icon} />}</div>
      <div className="col-1">{onClickDelete && <TrashFill onClick={onClickDelete} className={style.icon} />}</div>
    </>
  );
  const titleInput = (
    <div className="mb-5">
      <label className="form-label">Title</label>
      <input type="text" name="title" className="form-control " onChange={updateFormValues} value={formValues.title} />
      <FieldError message={formErrors.title} />
    </div>
  );

  const contentInput = (
    <div className="mb-5">
      <label className="form-label">Title</label>
      <textarea type="text" name="content" className="form-control" rows={5} onChange={updateFormValues} value={formValues.content} />
      <FieldError message={formErrors.content} />
    </div>
  );

  const submitButton = (
    <div className={style.submit_button}>
      <ButtonPrimary onClick={() => onSubmit(formValues)} isDisabled={hasError()}>
        Submit
      </ButtonPrimary>
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
      <div className={`mb-3 ${style.title_input_container}`}>{isEditable && titleInput}</div>
      <div className="mb-3">{isEditable ? contentInput : <pre>{note.content}</pre>}</div>
      {onSubmit && submitButton}
    </div>
  );
};

export default NoteForm;
