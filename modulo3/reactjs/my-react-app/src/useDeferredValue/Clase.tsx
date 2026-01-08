import { useState, useDeferredValue } from 'react';

export default function ValidarEmail() {
  const [email, setEmail] = useState('');
  const [nombres, setNombre] = useState('');
  const [apellidos, setApellido] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const emailDiferido = useDeferredValue(email);

  const esEmailValido =
    emailDiferido.includes('@') && emailDiferido.includes('.');

  const enviarFormulario = () => {
    if (nombres && apellidos && password && esEmailValido) {
      setMensaje('Registro exitoso');
    } else {
      setMensaje('Completa todos los campos correctamente');
    }
  };

  return (
    <>
      <input 
        type="text" placeholder="Nombres" value={nombres} onChange={e => setNombre(e.target.value)}/>

      <input
        type="text" placeholder="Apellidos" value={apellidos} onChange={e => setApellido(e.target.value)}/>

      <input
        type="email" placeholder="Correo electrónico" value={email} onChange={e => setEmail(e.target.value)}/>

      <input
        type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)}/>

      <p style={{ color: esEmailValido ? 'lightgreen' : 'salmon' }}>
        {emailDiferido === '' ? 'Esperando...' : esEmailValido ? 'Email válido' : 'Email inválido'}
      </p>

      <button onClick={enviarFormulario}>Enviar</button>

      {mensaje && <p>{mensaje}</p>}
    </>
  );
}