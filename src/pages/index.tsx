
import Head from 'next/head';
import SafeEnviroment from 'ui/components/feedbacks/SafeEnviroment/SafeEnviroment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';

import TextfieldMask from 'ui/components/inputs/TextfieldMask/TextfieldMask';
import {
    FormElementsContainer,
    ProfissionaisPaper,
    ProfissionaisContainer
} from 'ui/styles/pages/index.style';

import { Button, Typography, Container, CircularProgress} from '@material-ui/core';
import { useState } from 'react';

import useIndex from 'data/hooks/pages/useIndex.page';

export default function Home() {
    const { 
        cep,
        setCep,
        cepValido,
        buscarProfissionais,
        erro,
        diaristas,
        buscaFeita,
        carregando,
        diaristasRestantes } = useIndex();

    return (
        <div>
            <SafeEnviroment />
            <PageTitle
                title={'Conheça os profissionais'}
                subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
            />

            <Container>
                <FormElementsContainer>
                    <TextfieldMask
                        mask={'99.999-999'}
                        label={'Digite seu CEP'}
                        fullWidth
                        variant={'outlined'}
                        value={cep}
                        onChange={(event) => setCep(event.target.value) }
                    />
                    
                    {erro && <Typography color={'error'}>{erro}</Typography>}

                    <Button
                        variant={'contained'}
                        color={'secondary'}
                        sx={{ width: '220px' }}
                        disabled={!cepValido || carregando }
                        onClick={ () => buscarProfissionais(cep) }
                    >
                        { carregando ? <CircularProgress size={20} /> : 'Buscar' }
                    </Button>
                </FormElementsContainer>

                {buscaFeita && ( diaristas.length > 0 ?
                    <ProfissionaisPaper>
                        <ProfissionaisContainer>
                            <UserInformation
                                name={'Otavio Mota'}
                                picture={'https://github.com/otaviomota.png'}
                                rating={4}
                                description={'Rio de Janeiro'}
                            />

                            <UserInformation
                                name={'Augusto dos Santos'}
                                rating={2}
                                description={'São Paulo'}
                            />
                        </ProfissionaisContainer>
                    </ProfissionaisPaper>
                    :
                    (
                        <Typography align={'center'} color={'textPrimary'}>
                            Ainda não temos nenhuma diarista disponível em sua região!
                        </Typography>
                    )
                )}
            </Container>
        </div>
    )
}
