import React, { useState } from "react";
import { Button, Container, Input } from "semantic-ui-react";

const ListItem = ({ handleUpdate, handleRemove, item, key }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(item.title);

  return !isEditing ? (
    <Container style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="list-item">{item.title}</div>
      <div>
        <Button basic size="tiny" onClick={() => setIsEditing(true)}>
          Edit
        </Button>
        <Button basic size="tiny" onClick={() => handleRemove({ title: text })}>
          Remove
        </Button>
      </div>
    </Container>
  ) : (
    <Container style={{ display: "flex", justifyContent: "space-between" }}>
      <Input onChange={e => setText(e.target.value)} value={text} />
      <div>
        <Button
          basic
          onClick={() => {
            handleUpdate(item, { title: text, key: item.key });
            setIsEditing(false);
          }}
        >
          Save
        </Button>
        <Button basic onClick={() => setIsEditing(false)}>
          Cancel
        </Button>
      </div>
    </Container>
  );
};

export default ListItem;
