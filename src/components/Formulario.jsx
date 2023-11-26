import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ( { pacientes, setPacientes, paciente, setPaciente}) => {
const [nombre, setNombre] = useState('');
const [propietario, setPropietario] = useState('');
const [email, setEmail] = useState('');
const [fecha, setFecha] = useState('');
const [sintomas, setSintomas] = useState('');

const [error, setError] = useState(false);

useEffect(()=>{
  if( Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
  }

},[paciente])



const generarId = () => {
  const random = Math.random().toString(36).substring(2);
  const fecha = Date.now().toString(36)

  return random + fecha;
}



const handleSubmit = (e) => {
    e.preventDefault();

    //Validando el formulario 
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      setError(true)
      return;
    }
    

    setError(false)

    const objetoPaciente =  {
        nombre,
        propietario,
        email,
        fecha,
        sintomas
    }

    if(paciente.id) {
      //Editando el registro
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {
      //Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]) ;
    }

  

   

   //Reiniciamos los datos del formulario

   setNombre('');
   setPropietario('');
   setEmail('');
   setFecha('');
   setSintomas('');
   
}


  return (
    <div className="md:w-1/2 lg:2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade paciente y {''}
        <span className="text-indigo-600 font-bold">adminístralos</span>
      </p>

      <form
        onSubmit={handleSubmit} 
        className="bg-white shadow-md rounded-md py-10 px-5 mb-20"
        >
        { error && <Error mensaje="¡Has dejado algún campo vacío!"/>}
        <div>
          <label htmlFor="nombre" className="block uppercase font-bold">
            Nombre de la mascota{'   '}
          </label>
          <input 
            id="nombre"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-lg mb-10"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="propietario" className="block uppercase font-bold">
            Nombre del propietario{'   '}
          </label>
          <input 
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-lg mb-10"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email" className="block uppercase font-bold">
            Email del propietario{'   '}
          </label>
          <input 
            id="email"
            type="email"
            placeholder="Email del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-lg mb-10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="on"
          />
        </div>

        <div>
          <label htmlFor="fecha" className="block uppercase font-bold">
            Alta del paciente{'   '}
          </label>
          <input 
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-lg mb-10"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="sintomas" className="block uppercase font-bold">
            Síntomas  {'   '}
          </label>

          <textarea 
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe lo que le pasa a tu animal"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
          
        </div>

        <input 
          type="submit" 
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-green-600 cursor-pointer transition-all rounded-lg"
          value={paciente.id ? 'Editar paciente' : "Agregar paciente" }
        />

      </form>

    </div>
  )
}

export default Formulario