import { useState } from "react";
import styles from './SpaceMissionForm.module.css'

export default function SpaceMissionForm() {
  const [name, setName] = useState<string>("");
  const [planet, setPlanet] = useState<string>("Mars");

//   let message;

//   if( name.trim() !== "") {
//     message = `🧑‍🚀 Astronaut ${name} is headed to ${planet}!`;
//   } else {
//     message = "Please enter your name to begin your mission.";
//   }

  return (
    <div className={styles.formContainer}>
      <h2>🚀 Space Mission Form 🚀</h2>

      <label>
        Astronaut Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <br />

      <label>
        Destination Planet:{" "}
        <select
          name="planet"
          value={planet}
          onChange={(event) => setPlanet(event.target.value)}
        >
          <option value="Mars">Mars</option>
          <option value="Venus">Venus</option>
          <option value="Jupiter">Jupiter</option>
          <option value="Saturn">Saturn</option>
        </select>
      </label>

      <br /><br />

      <div>
        {name.trim() ? (
          <p>🧑‍🚀 Astronaut {name} is headed to {planet}!</p>
        ) : (
          <p>Please enter your name to begin your mission.</p>
        )}
      </div>

      {/* <p>{message}</p> */}

    </div>
  );
}
