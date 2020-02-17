import React from "react";
import { Button, Container, Input, Form, Divider } from "semantic-ui-react";
import { connect } from "react-redux";
import { addNotTodo, handleInputChange } from "./actions";
import "./App.css";
import ListItem from "./ListItem.jsx";

const NotToDoApp = ({ todos, addNotTodo, handleInputChange, input }) => {
  // let [key, setKey] = useState(0);

  // const handleUpdate = (oldItem, newItem) => {
  //   let newList = [...masterList];
  //   let updatedItem = {
  //     ...oldItem,
  //     ...newItem
  //   };

  //   let index = masterList.findIndex(item => item.key === updatedItem.key);
  //   newList.splice(index, 1, updatedItem);
  // };

  // const handleRemove = removeItem => {
  //   let newMasterList = masterList.filter(
  //     item => item.title !== removeItem.title
  //   );
  // };

  return (
    <Container className="App">
      <Container style={{ width: 600, margin: "auto" }}>
        <h2>Not to do list</h2>
        {todos.length === 0 ? (
          <div>To get started, add something you never want to do again!</div>
        ) : (
          <Container>
            {todos.map(item => (
              <>
                <ListItem
                  item={item}
                  // handleRemove={handleRemove}
                  handleAddItem={addNotTodo}
                  handleChange={handleInputChange}
                  // handleUpdate={handleUpdate}
                  key={item.key}
                />
                <Divider />
              </>
            ))}
          </Container>
        )}
        <Container
          style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
        >
          <Form onSubmit={() => addNotTodo({ title: input })}>
            <Input
              type="input"
              value={input}
              onChange={e => handleInputChange(e.target.value)}
            />
            <Button color="red" style={{ marginLeft: 5 }}>
              Never again!
            </Button>
          </Form>
        </Container>
      </Container>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.main.todos,
    input: state.main.input
  };
};
export default connect(mapStateToProps, { addNotTodo, handleInputChange })(
  NotToDoApp
);
