
import Head from 'next/head';
import SafeEnviroment from 'ui/components/feedbacks/SafeEnviroment/SafeEnviroment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';

export default function Home() {
    return (
        <div>
            <SafeEnviroment />
            <PageTitle
                title={'Conheça os profissionais'}
                subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
            />

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
        </div>
    )
}
