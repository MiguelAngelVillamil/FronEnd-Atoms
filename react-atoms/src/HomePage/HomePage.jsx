import { useState } from 'react';
import { Link } from "react-router-dom";

export default function HomePage() {

  const [state, setState] = useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  }

  return (

    <Link to={`/${state}`}>
      <form onSubmit={(event) => event.preventDefault()}>
        
        <input type="text" placeholder="Search a component" onChange={(event) => handleChange(event)}/>
        <button type="submit">Search</button>

      </form>
    </Link>
  );
}