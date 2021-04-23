import React from "react";
import { Row, Col } from 'react-materialize';
import UserProfile from '../user_profile/user_profile'
import Experience from '../experience/experience'
import company_avatar from '../../images/company.png';
import company_avatar2 from '../../images/company2.png';
import info_avatar from '../../images/download.png'
import about_avatar from '../../images/about_avatar.png'

const Home = () => (
    <Row>
        <Col m={3} s={12}>
            <UserProfile />
        </Col>
        <Col m={8} s={12}>
            <h5 className="subtitle">Sobre</h5>
            <Experience
                description="Estudante buscando experiência profissional com carreira ainda em desenvolvimento.Experiência de 6 meses em suporte remoto e presencial ao usuário.Habilidade em soluções de problemas, pensamento crítico e criatividade ."
                avatar={about_avatar}
            />



            <h5 className="subtitle">Formação Acadêmica</h5>
            <Experience title="Formação Acadêmica"
                description="Cursando último periodo do curso Tecnólogo em  Análise e Desenvolvimento de Sistema, faculdade Pitágoras."
                avatar={company_avatar}
            />


            <h5 className="subtitle">Experiências Proofissionais</h5>
            <Experience title="Analista de Suporte"
                description=" Estágio de TI na empresa Onnios Tecnologia  suporte ao usuário no  ERP Sankhya W.
                    Suporte em aplicações e soluções nas áreas de infraestrutura. 
                    Instalação e manutênção de servidores web e Análise e priorização de ocorrências."
                avatar={company_avatar2}
            />
            <Experience title="Estágio TI "
                description="Auxiliar de laboratório no Instituto Federal do Triângulo Mineiro, IFTM. Auxiliando os alunos em sala e monitoramento da redes.   "
                avatar={company_avatar2}

            />
            <h5 className="subtitle">Outras Informações</h5>
            <Experience 
                description="Coordenadora e Voluntária no Projeto Escola do Futuro na Escola Municipal do Bairro Shopping Park."
                avatar={info_avatar}
            />
        </Col>
    </Row>
);

export default Home;