import React, { useState } from "react";


function App(){
  const[hora, setHora] = useState("");
  return(
    <div className="container">
      {hora ? <h1>{hora}</h1> : <h1>TIME</h1>}
      <button onClick={setInterval(() => setHora(new Date().toLocaleTimeString()), 1000)}>Get Time</button>
    </div>
  );
}

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);




// function App() {
//   // Estado para almacenar la hora actual
//   const [hora, setHora] = useState("");

//   // Manejador de eventos para actualizar la hora
//   const obtenerHora = () => {
//     const time = new Date().toLocaleTimeString();
//     setHora(time); // Actualiza el estado con la nueva hora
//   };

//   return (
//     <div className="container">
//       {/* Muestra la hora actual si se ha definido */}
//       {hora && <h1>{hora}</h1>}
//       {/* Botón para obtener la hora actual. Nota que usamos obtenerHora sin paréntesis */}
//       <button onClick={obtenerHora}>Get Time</button>
//     </div>
//   );
// }

export default App;
