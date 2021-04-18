import React from 'react';
import Header from '../../componets/Header';

import { Container } from './styles';

const About: React.FC = () => (
  <>
    <Header />
    <div className="container">
      <Container>
        <p>
          Essa aplicação utiliza a API Swapi (https://swapi.dev) para construir
          um repositório de naves intergalácticas da franquia de filmes de Star
          Wars. Sendo necessário para a listagem das naves o usuário digitar uma
          distância em MGLT*, essa distância é utilizada para calcular o número
          de paradas necessárias que cada nave precisará fazer para o
          reabastecimento.
        </p>
        <p>
          A Swapi é uma API JSON com diversas rotas, entre essas rotas, existe a
          rota straships onde são listadas as naves utilizadas nos filmes de
          Star Wars, nesta rota é possível obter várias informações
          interessantes sobre as naves.
        </p>
        <p>
          São utilizados algumas informações sobre as naves da API e valores
          inseridos pelo usuário para listar a seguinte estrutura:
        </p>
        <ul>
          <li>name: O nome desta nave intergaláctica.</li>
          <li>
            mglt: O número máximo de Megalights que está nave pode viajar em uma
            hora padrão. Um Megalight é uma unidade padrão de distância e nunca
            foi definida antes no universo de Star Wars.
          </li>
          <li>
            consumables: O período máximo de tempo que esta nave pode fornecer
            consumíveis para toda a sua tripulação sem ter que reabastecer.
          </li>
          <li>
            passengers: O número de pessoas não essenciais que esta nave pode
            transportar.
          </li>
          <li>
            stops: Número de paradas necessárias para o reabastecimento de uma
            nave dependendo da distância em MGLT fornecida pelo usuário.
          </li>
        </ul>
      </Container>
    </div>
  </>
);

export default About;
