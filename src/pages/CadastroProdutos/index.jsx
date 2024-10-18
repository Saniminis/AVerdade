import React from 'react';
import styles from './index.module.css';
import  { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import MainNavBar from '../../components/MainNavBar/index';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

const CadastroProdutos = () => {
  const [nomeProduto, setNomeProduto] = useState("")
  const [alertaMensagem, setAlertaMensagem] = useState('')
  const [precoProduto, setPrecoProduto] = useState("")
  const [url] = useState("http://localhost:3000/produtos")
  const [tipoProduto, setTipoProduto] = useState("")
  const [alertaClass, setAlertaClass] = useState('mb-3 d-none')
  const handleSubmit = async (e) =>{    
  e.preventDefault()
    
    if(!nomeProduto == "" ){
    if(!tipoProduto == ""){
    if(!precoProduto == ""){
          
      const produto = {nomeProduto, tipoProduto, precoProduto}
      const res = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
          body: JSON.stringify(produto)})
          alert("Produto cadastrado com sucesso!!")
          setNomeProduto("")
          setTipoProduto("")
          setPrecoProduto("")
        }
        else{
          setAlertaClass("mb-3")
          setAlertaMensagem("Esse campo não pode ser vazio!")
        }
      }
      else{
        setAlertaClass("mb-3")
        setAlertaMensagem("Esse campo não pode ser vazia!")
      }      
  }
  else{
      setAlertaClass("mb-3")
      setAlertaMensagem("Esse campo não pode ser vazio!")
  }
}
  return (
      <div>
      <MainNavBar/>
      <Container
      className={styles.mainContainer}>
        <Alert
        key="danger"
        variant="danger"
        className={alertaClass}>
          {alertaMensagem}
        </Alert>
        <h1>Cadastro de Produtos</h1>
        <form onSubmit={handleSubmit}>

          <FloatingLabel
            controlId="nomeProdutoInput"
            label="Nome produto"
            className="mb-3">
            <Form.Control
             type="text" 
             placeholder="name@example.com" 
             value={nomeProduto}
              onChange={(e)=>{
                  setNomeProduto(e.target.value)
                  console.log(nomeProduto)}}/>
          </FloatingLabel>

          <FloatingLabel
            controlId="tipoProdutoInput"
            label="Tipo do produto"
            className="mb-3">
            <Form.Control 
            type="text"
            placeholder="name@example.com" 
            value={tipoProduto}
              onChange={(e)=>{
                  setTipoProduto(e.target.value)
                  console.log(tipoProduto)}}/>
          </FloatingLabel>

          <FloatingLabel
            controlId="precoProdutoInput"
            label="Preço do produto"
            className="mb-3">
            <Form.Control 
            type="number" 
            placeholder="name@example.com" 
            value={precoProduto}
              onChange={(e)=>{
                  setPrecoProduto(e.target.value)
                  console.log(precoProduto)}}/>
          </FloatingLabel>

          <Button 
          variant="primary"
          type="submit"
          className={styles.cadastrarBtn}>Cadastrar Produto</Button>
        </form>
        </Container></div>
  )
}
export default CadastroProdutos