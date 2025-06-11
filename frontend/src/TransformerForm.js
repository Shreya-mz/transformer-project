import React, { useState } from "react";

const TransformerForm = ({ user }) => {
  const [transformers, setTransformers] = useState([]);
  const [current, setCurrent] = useState({ name: "", capacity: "" });

  const handleAdd = () => {
    if (!current.name || !current.capacity) return;
    setTransformers([...transformers, { ...current, id: Date.now() }]);
    setCurrent({ name: "", capacity: "" });
  };

  const handleDelete = (id) => {
    setTransformers(transformers.filter((t) => t.id !== id));
  };

  return (
    <div className="center-box">
      <h2>Welcome {user.name} (ID: {user.id})</h2>
      <input
        type="text"
        placeholder="Transformer Name"
        value={current.name}
        onChange={(e) => setCurrent({ ...current, name: e.target.value })}
        style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
      />
      <input
        type="text"
        placeholder="Capacity"
        value={current.capacity}
        onChange={(e) => setCurrent({ ...current, capacity: e.target.value })}
        style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
      />
      <button onClick={handleAdd} style={{ padding: "10px", width: "100%" }}>
        Add Transformer
      </button>
      <ul style={{ marginTop: "20px" }}>
        {transformers.map((t) => (
          <li key={t.id} style={{ marginBottom: "10px" }}>
            {t.name} - {t.capacity} kVA
            <button
              onClick={() => handleDelete(t.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransformerForm;
