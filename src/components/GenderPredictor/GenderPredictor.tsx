import { useState } from "react";

export default function GenderPredictor() {
  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [probability, setProbability] = useState<number>(0);
  const [credits, setCredits] = useState<number>(0);
  const [error, setError] = useState("");
  const key = import.meta.env.VITE_GENDER_API_KEY;
  
  
  async function fetchGender() {
    if (name.trim() === "") {
      setError("Please enter a name");
      return;
    }

    setError("");

    try {
      const res = await fetch(
        `https://api.genderapi.io/api/?key=${key}&name=${name}`
      );
      const obj = await res.json();

      if (obj.gender) {
        setGender(obj.gender);
        setCountry(obj.country);
        setProbability(obj.probability);
        setCredits(obj.remaining_credits);
      } else {
        setError("Couldn't determine the gender");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  }

  return (
    <section>
      <h2>👨🏻 Gender Predictor 👩🏻‍🦰</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={fetchGender}>Recognize Gender</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {gender && (
        <div>
          <p>Name: {name}</p>
          <p>Gender: {gender === "male" ? "male" : "female"}</p>
          <p>Country: {country}</p>
          <p>Probability: {probability}%</p>
          <p>Remaining Credits: {credits}</p>
        </div>
      )}
    </section>
  );
}
