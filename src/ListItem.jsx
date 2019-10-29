import React, { useState } from "react";

const ListItem = ({ handleUpdate, handleRemove, item, key }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(item.title);

  return !isEditing ? (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>{item.title}</div>
      <div>
        <button
          className="btn btn-light btn-sm"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
        <button
          className="btn btn-light btn-sm"
          onClick={() => handleRemove({ title: text })}
        >
          Remove
        </button>
      </div>
    </div>
  ) : (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <input onChange={e => setText(e.target.value)} value={text} />
      <div>
        <button
          className="btn btn-light btn-sm"
          onClick={() => {
            handleUpdate(item, { title: text, key: item.key });
            setIsEditing(false);
          }}
        >
          Save
        </button>
        <button
          className="btn btn-light btn-sm"
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ListItem;
