import React from "react";
import { Button, Container, Input } from "semantic-ui-react";

const ListItem = ({
  handleUpdate,
  handleRemove,
  handleInputChange,
  item,
  input,
  toggleEdit,
  isEditing
}) => {
  return !isEditing ? (
    <Container style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="list-item">{item.title}</div>
      <div>
        <Button
          basic
          size="tiny"
          color="blue"
          onClick={() => toggleEdit(true, item.id)}
        >
          Edit
        </Button>
        <Button
          basic
          size="tiny"
          color="red"
          onClick={() => handleRemove(item.id)}
        >
          Remove
        </Button>
      </div>
    </Container>
  ) : (
    <Container style={{ display: "flex", justifyContent: "space-between" }}>
      <Input onChange={e => handleInputChange(e.target.value)} value={input} />
      <div>
        <Button
          basic
          size="tiny"
          color="green"
          onClick={() => {
            handleUpdate(item.id, input);
            handleInputChange("");
            toggleEdit(false, item.id);
          }}
        >
          Save
        </Button>
        <Button
          basic
          size="tiny"
          color="grey"
          onClick={() => toggleEdit(false, item.id)}
        >
          Cancel
        </Button>
      </div>
    </Container>
  );
};

export default ListItem;
