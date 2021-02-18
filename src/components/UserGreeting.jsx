import { useState, useEffect } from "react";

function UserGreeting() {
  const localName = localStorage.getItem("name" || "");
  const [name, setName] = useState(localName);
  const [greeting, setGreeting] = useState("Howdy! What's' your name?");
  const [inputState, setInputState] = useState(false);

  useEffect(() => {
    // const localName = localStorage.getItem("name");
    // if (localName) {
    //   setName(localName);
    // }
    localStorage.setItem("name", name);
  }, [name]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setGreeting(`Welcome ${name}! Make today great!`);

    // setName("");
    setInputState(!inputState);
  };

  return (
    <div className="user-greeting-form">
      <h2>{greeting}</h2>
      <form onSubmit={handleSubmit}>
        <input
          className={`name-input ${inputState ? "hidden" : ""}`}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
}

export default UserGreeting;
