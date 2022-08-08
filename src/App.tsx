import { useState } from "react";
import "./App.css";
import { Email } from "./components/Email";

function App() {
  const [emails, setEmails] = useState([
    {
      id: 1,
      title: "Exercise deliveryw",
      content: "Here are all the files needed",
      name: "Arbi Bytyçi",
      read: true,
    },
    {
      id: 2,
      title: "Exercise notes",
      content: "Here are all the notes needed",
      name: "Ed",
      read: false,
    },
    {
      id: 3,
      title: "Exercise tips",
      content: "Here are all the tips needed",
      name: "Nicolas Marcora",
      read: false,
    },
  ]);

  return (
    <div className="App">
      <li>
        <h1>Arbenit's emails</h1>
      </li>
      {emails.map((email) => (
        <div>
          <Email email={email} emails={emails} setEmails={setEmails} />

          <p>{email.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
