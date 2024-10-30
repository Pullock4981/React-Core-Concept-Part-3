
import './App.css'
import SimpleForm from './Component/SimpleForm/SimpleForm'
import StatfullForm from './Component/StateWithForm/StatfullForm'

function App() {

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>React-Core-Concept-Part-3</h1>
        <div className='mt-4'>
          <h2 className='text-xl font-extrabold mb-4'>
            Learn Table with onSubmit
          </h2>
          <SimpleForm></SimpleForm>
          
        </div>
        <div className='mt-7'>
         <StatfullForm></StatfullForm>
        </div>
      </div>
    </>
  )
}

export default App
