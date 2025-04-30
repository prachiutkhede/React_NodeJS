import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Modal } from "./Modal";
import { MyForm } from "./Formyup";

import TreeFolder from "./FileFolder";
import { StarRating } from "./StarRating";
import AutoComplete from "./AutoComplete";
import TodoApp from "./Todo";
import { AccordianUI } from "./AccordionUI";
import Counter from "./counter";

const itemsforAccordian = [
  {
    title: "Abc",
    description: "I am a girl",
  },
  {
    title: "pqs",
    description: "I am a boy",
  },
  {
    title: "xdnhcx",
    description: "I am a girl",
  },
];

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <h1> Resulable Modal</h1>
      <button onClick={() => setModalOpen(true)}>OpenModal</button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2> Modal Title</h2>
        <p>This is a resuable modal</p>
      </Modal>

      <div>
        <MyForm />
      </div>

      <div>
        <TreeFolder />
      </div>
      <div>
        <StarRating
          totalStars={5}
          onRatingChange={(val: number) => console.log(val)}
        />
      </div>
      <div>
        <AutoComplete />
      </div>

      <div>
        <TodoApp />
      </div>
      {itemsforAccordian.map((item) => {
        return (
          <AccordianUI title={item.title} description={item.description} />
        );
      })}

      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
