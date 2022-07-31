import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const WatchClient = () => {
    const { id } = useParams();
    const [client, setClient] = useState({});
    const [loading, setLoading] = useState(false);
    const { nombre, empresa, email, telefono, notas } = client;
    useEffect(() => {
        setLoading(!loading);
        const getClientApi = async () => {
            try {
                const url = `http://localhost:4000/clientes/${id}`;
                const answerApi = await fetch(url);
                const resultApi = await answerApi.json()
                setClient(resultApi);
            } catch (error) {
            }
            setLoading(false);
        }
        getClientApi();
    }, [])

    return (
        Object.keys(client).length === 0 ? <p>No hay datos</p> : (

            <div>


                <h1 className="font-black text-4xl text-blue-900">Ver perfil de {nombre}</h1>
                <p className="mt-3 text-lg">
                    Mira de manera detallada los datos del perfil
                </p>


                <p className="mt-8 text-3xl text-blue-300 font-bold">
                    Cliente: <span className="text-violet-300 font-black font-mono text-4xl ">{nombre}</span>
                </p>

                <p className="mt-8 text-3xl text-blue-300 font-bold">
                    Empresa: <span className="text-violet-300 font-black font-mono text-4xl ">{empresa}</span>
                </p>

                <p className="mt-8 text-3xl text-blue-300 font-bold">
                    Email: <span className="text-violet-300 font-black font-mono text-4xl ">{email}</span>
                </p>

                {telefono ? (<p className="mt-8 text-3xl text-blue-300 font-bold">
                    Teléfono: <span className="text-violet-300 font-black font-mono text-4xl ">{telefono}</span>
                </p>) : null}


                {notas ? (<p className="mt-8 text-3xl text-blue-300 font-bold">
                    Notas: <span className="text-violet-300 font-black font-mono text-4xl ">{notas}</span>
                </p>) : null}
            </div>
        )

    )
}

export default WatchClient