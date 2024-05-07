import { NoteAPI } from 'api/note-api';
import NoteForm from 'components/NoteForm/NoteForm';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteNote, updateNote } from 'store/noteSlice/note-slice';

const Note = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEditable, setIsEditable] = useState(false);
  const { noteId } = useParams();
  const note = useSelector((store) => store.NOTESLICE.noteList.find((note) => note.id === noteId));
  const submit = async (formValues) => {
    const updatedNote = await NoteAPI.updateById(note.id, formValues);
    dispatch(updateNote(updatedNote));
    setIsEditable(false);
  };

  async function deleteNote_() {
    if (window.confirm('Delete Note?')) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
      navigate('/');
    }
  }
  return (
    <>
      {note && (
        <NoteForm
          title={isEditable ? 'Edit Note' : note.title}
          note={note}
          isEditable={isEditable}
          onClickDelete={deleteNote_}
          onClickEdit={() => {
            setIsEditable(!isEditable);
          }}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
};

export default Note;
