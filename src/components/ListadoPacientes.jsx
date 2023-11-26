import Paciente from "./Paciente"


function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        
         <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
              Administra tus {''}
              <span className="font-bold text-indigo-600">Pacientes y sus citas</span>
          </p>

          {pacientes.map( paciente => (
            <Paciente
            key= {paciente.id}
            paciente = {paciente}
            setPaciente = {setPaciente}
            eliminarPaciente = {eliminarPaciente}
   
            />


          ))}
        
        </> 
      ) : (

         <>
            <h2 className="font-black text-3xl text-center">No hay pacientes aún</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Empieza a añadir pacientes {''}
              <span className="font-bold text-indigo-600">y se mostrarán aquí</span>
            </p>        
        
        </>

 
      )}

    </div>
  )
}

export default ListadoPacientes
