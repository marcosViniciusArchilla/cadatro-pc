import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "@/services/api";


interface Paciente {
    id: number;
    nome: string;
    idade: number;
    pagamento: boolean;
}

export default function PacienteDetalhes () {
    const [paciente, setPaciente] = useState<Paciente | null>(null)
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if(id){
            api.get(`/pacientes/${id}`).then((response) => {
                setPaciente(response.data);
            })
        }
    },[id])

    const handleUpdate = () => {
        if(paciente) {
            api.put(`/pacientes/${id}`, paciente).then (() => {
                alert("Dados atualizados com sucesso !")
            })
        }
    }

    if(!paciente) return <p>Carregando...</p>

    return (
        <div>
            <h1>Atualizar pacientes</h1>
            <input type="text"
            value={paciente.nome}
            onChange={(e) => 
                setPaciente({...paciente, nome: e.target.value})
            } />

             <input type="text"
            value={paciente.nome}
            onChange={(e) => 
                setPaciente({...paciente, idade: +e.target.value})
            } />

            <button onClick={handleUpdate} >
                Atualizar
            </button>

        </div>
    )
}
