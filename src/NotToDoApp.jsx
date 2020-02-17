import React from "react";
import { Button, Container, Input, Form, Divider } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  addNotTodo,
  handleInputChange,
  toggleIsEditing,
  handleRemove,
  handleUpdate
} from "./actions";
import "./App.css";
import ListItem from "./ListItem.jsx";

const NotToDoApp = ({
  main,
  addNotTodo,
  handleInputChange,
  handleRemove,
  handleUpdate,
  input,
  toggleIsEditing
}) => {
  return (
    <Container className="App">
      <Container style={{ width: 600, margin: "auto" }}>
        <h2>Not to do list</h2>
        {main.length === 0 ? (
          <div>To get started, add something you never want to do again!</div>
        ) : (
          <Container>
            {main.map(item => (
              <React.Fragment key={item.id}>
                <ListItem
                  item={item}
                  handleRemove={handleRemove}
                  handleAddItem={addNotTodo}
                  handleInputChange={handleInputChange}
                  toggleEdit={toggleIsEditing}
                  isEditing={item.isEditing}
                  handleUpdate={handleUpdate}
                  input={input}
                  key={item.id}
                />
                <Divider />
              </React.Fragment>
            ))}
          </Container>
        )}
        <Container
          style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
        >
          <Form
            onSubmit={() => {
              addNotTodo(input);
              handleInputChange("");
            }}
          >
            {!main.some(el => el.isEditing) && (
              <>
                <Input
                  type="input"
                  value={input}
                  onChange={e => handleInputChange(e.target.value)}
                />
                <Button color="red" style={{ marginLeft: 5 }}>
                  Never again!
                </Button>
              </>
            )}
          </Form>
        </Container>
      </Container>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    main: state.main,
    input: state.input
  };
};
export default connect(mapStateToProps, {
  addNotTodo,
  handleInputChange,
  toggleIsEditing,
  handleRemove,
  handleUpdate
})(NotToDoApp);
