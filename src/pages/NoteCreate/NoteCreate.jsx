import { NoteAPI } from 'api/note-api';
import NoteForm from 'components/NoteForm/NoteForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNote } from 'store/noteSlice/note-slice';

const NoteCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = async (formValues) => {
    const createdNote = await NoteAPI.create({ ...formValues, created_at: new Date().toLocaleDateString() });
    dispatch(addNote(createdNote));
    navigate('/');
  };
  return (
    <div>
      <NoteForm title="New Note" onSubmit={submit} />
    </div>
  );
};

export default NoteCreate;

