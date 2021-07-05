import React, { useState } from "react";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [ isEdit, setIsEdit ] = useState( false )

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleEdit() {
    setIsEdit( true )
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setIsEdit( false )
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        { isEdit && (<input
                        name="title"
                        onChange={ handleChange }
                        value={note.title}
                        placeholder="Title"
                      />)
        }
        <textarea
          name="content"
          onClick={ handleEdit }
          onChange={ handleChange }
          value={note.content}
          placeholder="Take a note..."
          rows={ isEdit ? "3" : "1"}
        />
        <Zoom in={isEdit}>
            <Fab onClick={submitNote}><NoteAddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
