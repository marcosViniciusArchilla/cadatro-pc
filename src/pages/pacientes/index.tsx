import { useEffect, useState } from "react";    
import api from "../../services/api";

interface Paciente {
    id: number;
    nome: string;
    idade: number;
    pagamento: boolean;
}

export default function Pacientes(){
    const [pacientes, setPacientes] = useState<Paciente[]>([]);

    useEffect(() => {
        api.get("/pacientes").then((response) => {
            setPacientes(response.data)
        })
    },[]);

    return (
        <div>
            <h1>Lista de pacientes</h1>
            <ul>
                {pacientes.map((paciente) => (
                     <li key={paciente.id} >
                     {paciente.nome} - {paciente.idade} anos - {" "}
                     {paciente.pagamento ? "Pagamento ok" : " "}
                 </li>
                ))}
            </ul>
        </div>
               
    )
}