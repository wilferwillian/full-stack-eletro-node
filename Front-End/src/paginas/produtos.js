import React from 'react';
import {useState, useEffect} from 'react';
import '../components/estilo.css';

export default function Produtos() {
    

    const aumentar = (event) => {
        if (event.target.style.width === "250px") {
            event.target.style.width = "100px";
        }
        else {
            event.target.style.width = "250px";
        }
    }
    
    const diminuir = (event) => {
        if (event.target.style.width === "100px") {
            event.target.style.width = "250px";
        }
        else {
            event.target.style.width = "100px";
        }
    }
    
    const [ produtos, setProdutos ] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            const resposta = await fetch("http://localhost:3009/produtos")
            const dados = await resposta.json()
            setProdutos(dados);
        }
        fetchData();
        
    }, []); 


    function exibir_todos() {
        let elementos = document.getElementsByClassName('celula');
        for(let i=0; i<elementos.length; i++){
            elementos[i].style="display:inline-block";
        }
    }

    function exibir_categorias(categorias) {
        let elementos = document.getElementsByClassName('celula');
        for(let i = 0; i < elementos.length; i++){
            if (categorias === elementos[i].children[0].id)
                elementos[i].style="display: inline-block";
            else
                elementos[i].style="display:none";
        }
    }



    return(

        <div>
           
            <div className="categoriaprodutos">
               
                <h1>Nossos produtos</h1>
                
               
                <h4>Categorias</h4>
                
                <nav className="nav">
                    <ul className="list-group">
                        <li className="list-group-item border-0 p-1">
                            <button className="list-group-item list-group-item-action border-0 p-1" href="#"  onClick={exibir_todos}>Todos (12)</button>
                        </li>
                        <li className="list-group-item border-0 p-1">
                            <button className="list-group-item list-group-item-action border-0 p-1" href="#" onClick={() => exibir_categorias('geladeira')}>Geladeiras (3)</button>
                        </li>
                        <li className="list-group-item border-0 p-1">
                            <button className="list-group-item list-group-item-action border-0 p-1" href="#" onClick={() => exibir_categorias('fogao')}>Fogões (2)</button>
                        </li>
                        <li className="list-group-item border-0 p-1">
                            <button className="list-group-item list-group-item-action border-0 p-1" href="#" onClick={() => exibir_categorias('microondas')}>Micro-ondas (3)</button>
                        </li>
                        <li className="list-group-item border-0 p-1"> 
                            <button className="list-group-item list-group-item-action border-0 p-1" href="#"  onClick={() => exibir_categorias('lavadouraderoupa')}>Lavadora de roupas (2)</button>
                        </li>
                        <li className="list-group-item border-0 p-1">
                            <button className="list-group-item list-group-item-action border-0 p-1" href="#" onClick={() => exibir_categorias('lavaloucas')}>Lava-louças (2)</button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="container-margem pl-5">
                <div className="row">
                    {produtos.map((item) =>{
                        
                        return(
                            <div className="celula">    
                                <div className="pr-3 itens" key={item.idproduto} id={item.categoria}>
                                    <div>
                                        <img id="imagens" onMouseOver={aumentar}  onMouseOut={diminuir} style={{width:100}} src={item.imagem} alt={item.categoria} />
                                    </div> 
                                    <div className="descricao">
                                        {item.descricao}
                                        <hr/>
                                    </div>
                                    <div className="preco_antigo">
                                        R${item.preco}
                                    </div>
                                    <div className="preco">
                                        R${item.precofinal}
                                    </div>
                                </div>
                            </div>
                        )            
                    })}
                </div>
            </div>
         </div>
    )
}
  
           
