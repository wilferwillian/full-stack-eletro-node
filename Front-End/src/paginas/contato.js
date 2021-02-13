
import { Form, Button, ButtonGroup } from "react-bootstrap";
import Email from '../imagens/email2.jpg';
import Whatsapp from '../imagens/whatsapp.jpg';
import './Contato/estilo.css';
import React, {useState, useEffect} from 'react';


export default function Contatos(props) {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const mandarDados = async (nome, mensagem) => {
    const resposta = await fetch(`http://localhost:3009/comentarios/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": " application/json",
      },
      body: JSON.stringify({ nome, msg: mensagem }),
    }).then((response) => {
      console.log(response.data);
    });
    setNome("");
    setMensagem("");
  };

  return (
    <div className="container mt-5">
        <header>
             <h2 className="text-primary">Fale Conosco</h2>
         </header>
         <hr />
         <section className="control">
             <div className="contato">
                 <img src={Email} />
                <strong>contato@fullstackeletro.com.br</strong> 
             </div>
             <div className="contato">
                 <img src={Whatsapp} />
                <strong> (11) 959237091</strong>
   </div>
  </section>

      <br />
      <Form className="col-lg-6 col-sm-12 mx-auto">
        <h4>Deixe sua mensagem:</h4>
        <Form.Group controlId="formGroupNome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control
            onChange={(e) => {
              setNome(e.target.value);
            }}
            type="text"
            placeholder="Nome"
            value={nome}
          />
        </Form.Group>
        <Form.Group controlId="FormControlTextarea">
          <Form.Label>Mensagem:</Form.Label>
          <Form.Control
            onChange={(e) => {
              setMensagem(e.target.value);
            }}
            value={mensagem}
            as="textarea"
            placeholder="Nome"
            rows={6}
          />
        </Form.Group>
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="danger"
            type="submit"
            size="lg"
            active
            onClick={() => {
              mandarDados(nome, mensagem);
              console.log("Enviando: " + nome + " mensagem: " + mensagem);
            }}
          >
            Enviar
          </Button>
        </ButtonGroup>
      </Form>
    </div>
  );
}