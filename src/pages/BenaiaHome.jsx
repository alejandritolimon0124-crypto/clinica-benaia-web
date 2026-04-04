import { Link } from "react-router-dom";

export default function BenaiaHome() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Benaia Home</h1>

      <div style={{ marginTop: "20px" }}>
        <Link to="/pacientes">Pacientes</Link>
        <br />
        <Link to="/pro">Benaia Pro</Link>
      </div>
    </main>
  );
}