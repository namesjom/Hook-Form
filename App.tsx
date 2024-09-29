import { useForm } from 'react-hook-form'
type Inputs = {
  email: string
  password: string
};
function App() {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input {...register('email')} />
      <input {...register('password')} />
      <input type="submit" />

    </form>
  )
}

export default App
