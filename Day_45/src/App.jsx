import React from 'react'
import { useForm } from "react-hook-form"


const App = () => {

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm()


  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);

    })
  }

  const onSubmit = async (data) => {
    await delay(3)
    console.log(data)
  }

  return (
    <div className='app'>
      {isSubmitting && <div>Loading...</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input placeholder='username' {...register("username", { required: { value: true, message: "This field is required" }, minLength: { value: 3, message: "Min length is 3" }, maxLength: { value: 8, message: "Max length is 8" } })} type="text" />
        </div>
        {errors.username && <div >{errors.username.message}</div>}
        {/* {errors.username == false ?  <div>{errors.username.massage}</div>: ""} */}
        <div>
          <input placeholder='password'  {...register("password", { minLength: { value: 7, message: "Min length of password is 7" }, })} type="password" />
          {errors.password && <div>{errors.password.message}</div>}
          <br />
        </div>
        <div>
          <input disabled={isSubmitting} type="submit" />
        </div>
      </form>
    </div>
  )
}

export default App
