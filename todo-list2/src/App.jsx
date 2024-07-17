import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  // Formulaire validation
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTask = {
      title: formData.get("title"),
      description: formData.get("description"),
    };
    setTasks([...tasks, newTask]);
    e.target.reset(); 
  };
  //suppresion de la card
  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <>
      <h1>Ajouter et supprimer une tâche</h1>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center mt-10">
        <label>
          Entrer le titre :
          <input
            value={title}
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered input-success w-full max-w-xs ml-2 flex justify-center"
          />
        </label>
        <label className="mt-5">
          Description :
          <textarea
            className="textarea textarea-success ml-2"
            placeholder="Descriptif"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
        <button type="submit" className="btn btn-active btn-secondary w-2/5 mt-5">
          Soumettre
        </button>
      </form>
      <div className="mt-10">
        {tasks.map((task, index) => (
          <AjoutDiv
            key={index}
            title={task.title}
            description={task.description}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </>
  );
}

const AjoutDiv = ({ title, description, onDelete }) => {
  return (
    <div className="mt-5 card bg-primary text-primary-content w-96">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-error" onClick={onDelete}>
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
