import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [valorTela,setValorTela]=useState('')
  const [resultado,setResultado]=useState(0)
  const [acumulador,setAcumulador]=useState(0)
  const [operacao,setOperacao]=useState(false)

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
  // Estilos
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

 
}

export default App;
