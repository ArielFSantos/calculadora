import './App.css';
import { useState } from 'react';

function App() {

  const [valorTela,setValorTela]=useState('')
  const [resultado,setResultado]=useState(0)
  const [acumulador,setAcumulador]=useState(0)
  const [operacao,setOperacao]=useState(false)

  // Componentes 
  const Tela=(valor,res)=>{
    return(
      <div style={cssTela}>
        <span style={cssTelaOp}>{valor}</span>
        <span style={cssTelaRes}>{res}</span>
      </div>
    )
  }
  const Btn=(label,onClick)=>{
    return(
      <button style={cssBtn} onClick={onClick}>{label}</button>
    )
  }
  //Funções
  const addDigitoTela=(d)=>{
    if((d=='+' || d=='-'  || d=='/' || d=='*')&& operacao){
      console.log('+*-/')
      setOperacao(false)
      setValorTela(resultado+d)
      return
    }
    if(operacao){
      setValorTela(d) 
      setOperacao(false)
      return
    }
    const valorDigitadoTela=valorTela+d
    setValorTela(valorDigitadoTela)
  }
  const limparMemoria=()=>{
    setOperacao(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
    return
  }
  const operation =(oper)=>{
    if (oper == 'bs'){
      let vtela = valorTela
      vtela=vtela.substring(0,(vtela.length-1))
      setValorTela(vtela)
      setOperacao(false)
      return
    }
    try{
      const r=eval(valorTela) //
      setAcumulador(r)
      setResultado(r)
      setOperacao(true)
    }catch{
      setResultado('ERRO')
    }
  }


  // Estilos

  const cssContainer={
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'column',
    width:300,
    border:'1px solid #000'
  }
  const cssBotoes={
    flexDirection:'row',
    flexWrap:'wrap'
  }
  const cssTela={
    display:'flex',
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'center',
    alignItems:'flex-start',
    backgroundColor:'#444',
    flexDirection:'column',
    window:260
  }
  const cssTelaOp={
    fontSize:25,
    color:'white',
    heigth:20,
  }
  const cssTelaRes={
    fontSize:50,
    color:'white',
  }
  const cssBtn={
    fontSize:30,
    heigth:75,
    width:75,
    padding:20,
    backgroundColor:'#000',
    color:"#fff",
    borderColor:'#000',
    textAlign:'center',
    outline:'none'
  }
return(
  <div style={cssContainer}>
    <h3>Simple Calculator</h3>
    {Tela(valorTela,resultado)}
    <div style={cssBotoes}>
      {Btn('AC', limparMemoria)}
      {Btn('(',()=>addDigitoTela('('))}
      {Btn(')',()=>addDigitoTela(')'))}
      {Btn('/',()=>addDigitoTela('/'))}
      {Btn('7',()=>addDigitoTela('7'))}
      {Btn('8',()=>addDigitoTela('8'))}
      {Btn('9',()=>addDigitoTela('9'))}
      {Btn('*',()=>addDigitoTela('*'))}
      {Btn('4',()=>addDigitoTela('4'))}
      {Btn('5',()=>addDigitoTela('5'))}
      {Btn('6',()=>addDigitoTela('6'))}
      {Btn('-',()=>addDigitoTela('-'))}
      {Btn('1',()=>addDigitoTela('1'))}
      {Btn('2',()=>addDigitoTela('2'))}
      {Btn('3',()=>addDigitoTela('3'))}
      {Btn('+',()=>addDigitoTela('+'))}
      {Btn('0',()=>addDigitoTela('0'))}
      {Btn('.',()=>addDigitoTela('.'))}
      {Btn('<-',()=>operation('<-'))}
      {Btn('=',()=>operation('='))}
    </div>

  </div>
)
 
}

export default App;
