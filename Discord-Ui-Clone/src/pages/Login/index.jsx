import './assets/bg.css'
import InputStyle from './components/inputStyle'
import ButtonStyle from './components/buttonStyle'
function App(){


return(
<div className=''>
   <div className="bg-[#36393F] absolute top-[20%] left-[22%]  h-[360px] w-[600px] rounded-[4px]">
    <div className="text-left ml-20 mt-7">
        <h1 className='text-white font-bold text-2xl'>Boas-vindas de volta!</h1>
    </div>
    {/* Descrição */}
    <div className="text-left ml-14 mt-2">
        <h3 className='text-[#979A9D]  '>Estamos animadados em te ver novamente!</h3>
    </div>
    {/* Login */}
   <div className="mt-3 ml-8">
    <h5 className='text-[#B9BBBE] font-bold text-sm'>E-MAIL OU NÚMERO DE TELEFONE</h5>
    <InputStyle  />
    {/* Senha */}
    <h5 className='text-[#B9BBBE] mt-2 font-bold text-sm'>SENHA</h5>
    <InputStyle type="password"  />
    {/* Esqueci Minha senha text */}
    <p className='text-sm text-sky-500 font-semibold'>Esqueceu sua senha?</p>
   </div>
   {/** button */}
    <div className="mt-3 ml-8 ">
    <ButtonStyle text="Entrar" type="submit" />
    </div>
    {/* não tem conta text */}
    <p className='text-sm mt-1 ml-8 text-[#A3A6AA] '>Precisando de uma conta <span className='text-sky-500'>Registre-se</span></p>


   </div>
   
</div>
)
}

export default App