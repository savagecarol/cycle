import React from 'react'
import LoginForm from '../../components/LoginForm'


const Login = () => {
  return (
    <div class=" mx-auto item-center py-24">
        <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl  title-font mb-4 text-gray-900 font-extrabold">Cycling Admin </h1>
        </div>
        <LoginForm/>
    </div>   
  )
}
export default Login