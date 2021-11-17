import React, { useState } from "react";

import Modal from "react-modal";
import { Form, Button, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    
  },
};

const AddMovie = ({addMovie}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submitMovie = (e) => {
    e.preventDefault();
    let newMovie = {
      id: uuidv4(),
     title,
     description,
     posterURL,
     rating,

    };
    if (title==='' || description==='' || posterURL===''|| rating==='' )
    return alert("Please complete")

    addMovie(newMovie);
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Add Movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Form>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label> Title : </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your title .."
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label> Decription :</Form.Label>
            <Form.Control
              placeholder="Enter the movie's description .."
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label> Poster-URL : </Form.Label>
            <Form.Control
              placeholder="Enter the movie's poster-URL ..."
              onChange={(e) => setPosterURL(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label> Rate : </Form.Label>
            <Form.Control
              placeholder="Enter the movie's rate ..."
              onChange={(e) => setRating(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => submitMovie(e)}
          >
            Submit
          </Button>
        </Form>
        
      </Modal>
    </div>
  );
};

export default AddMovie;
