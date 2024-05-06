import NoteForm from 'components/NoteForm/NoteForm';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Note = () => {
  const [isEditable, setIsEditable] = useState(false);
  const { noteId } = useParams();
  const note = useSelector((store) => store.NOTESLICE.noteList.find((note) => note.id === noteId));
  const submit = () => {
    alert('hey');
  };
  return (
    <>
      {note && (
        <NoteForm
          title={isEditable ? 'Edit Note' : note.title}
          note={note}
          isEditable={isEditable}
          onClickDelete={() => {}}
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
