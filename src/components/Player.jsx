import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  // console.log(playerName);

  const [edit, setEdit] = useState(false);

  function handleEditClick() {
    setEdit((edit) => !edit);
  }
  function handleChange(e) {
    // e.preventdefault();
    console.log(e);
    setPlayerName(e.target.value);
  }

  let editPlayerName = <span className="player-name">{playerName} </span>;

  if (edit) {
    editPlayerName = (
      <input type="text" value={playerName} required onChange={handleChange} />
    );
  }
  return (
    <li>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{edit ? "Save" : "Edi"}</button>
    </li>
  );
}
