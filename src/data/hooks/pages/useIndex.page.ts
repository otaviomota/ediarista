import { useState, useMemo } from 'react';
import { UserShortInterface } from 'data/@types/UserInterface';
import { ValidatorServices } from 'data/services/ValidatorServices';
import { ApiService } from 'data/services/ApiService';

export default function useIndex() {
    const [cep, setCep] = useState(''),
        cepValido = useMemo(() => {
            return ValidatorServices.cep(cep)
        }, [cep]),
        [erro, setErro] = useState(''),
        [buscaFeita, setBuscaFeita] = useState(false),
        [carregando, setCarregando] = useState(false),
        [diaristas, setDiaristas] = useState([] as UserShortInterface[]),
        [diaristasRestantes, setDiaristasRestantes] = useState(0);


    async function buscarProfissionais(cep: string) {
        setBuscaFeita(false);
        setCarregando(true);
        setErro('');

        try {
            const { data } = await ApiService.get<{
                diaristas: UserShortInterface[],
                quantidade_diaristas: number
            }>('/api/diaristas-cidade?cep=' + cep.replace(/\D/g, ''));
            

            setDiaristas(data.diaristas);
            setDiaristasRestantes(data.quantidade_diaristas);

            setBuscaFeita(true);
        } catch (error) {
            setErro('CEP não encontrado!');
        }

        setCarregando(false);
    }

    return {
        cep,
        setCep,
        cepValido,
        buscarProfissionais,
        erro,
        diaristas,
        buscaFeita,
        carregando,
        diaristasRestantes
    }
}