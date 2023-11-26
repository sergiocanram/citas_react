

const Error = ({mensaje}) => {
  return (
    <div className="bg-red-800 text-white text-center p-5 mb-6 rounded-xl uppercase font-bold">
        <p>{mensaje}</p>
    </div>  
  )
}

export default Error;