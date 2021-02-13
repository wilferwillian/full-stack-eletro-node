
export default function Lojas(props){
    return (
    <div className="container mt-5">
        <header>
            <h1 className="text-dark">Nossas Lojas!</h1>
        </header>
        <hr />
        <section className="container-fluid text-info ">
                <div>
                    <h3 className="text-primary">Rio de Janeiro</h3>
                        <p>Avenida Presidente Varga, 5000</p>
                        <p>10°andar</p>
                        <p>Centro</p>
                        <p>(21) 3333-3333</p>
                </div>
                <div >
                <h3 className="text-primary">São Paulo</h3>
                        <p>Avenida Paulista, 985</p>
                        <p>3°andar</p>
                        <p>Centro</p>
                        <p>(21) 4444-4443</p> 
                </div>
                <div >
                <h3 className="text-primary">Santa Catarina</h3>
                    <p>Rua Major Ávila,370</p>
                    <p>Vila Mariana</p>
                    <p>(47) 5555-5555</p>
                    </div>
                    </section>
                </div>
  );
}