export default function ({ winner }) {
  return (
    <div id="game-over">
      <h2>GAME OVER</h2>
      {winner && <p>{winner}won</p>}
      {!winner && <p>match draw</p>}
      <p>
        <button>Rematch</button>
      </p>
    </div>
  );
}
