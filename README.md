## Introdução

Essa aplicação utilizada a [API Swapi](https://swapi.dev/) para construir um repositório de naves intergalácticas da franquia de filmes de Star Wars. Sendo necessário para a listagem das naves o usuário digitar uma distância em MGLT\*, essa distância é utilizada para calcular o número de paradas necessárias que cada nave precisará fazer para o reabastecimento.

A Swapi é uma API JSON com diversas rotas, entre essas rotas, existe a rota `straships` onde são listadas as naves utilizadas nos filmes de Star Wars, nesta rota é possível obter várias informações interessantes sobre as naves.

São utilizados algumas informações sobre as naves da API e valores inseridos pelo usuário para listar a seguinte estrutura:

- `name`: O nome desta nave intergaláctica.

- `mglt`: O número máximo de Megalights que está nave pode viajar em uma hora padrão. Um "Megalight" é uma unidade padrão de distância e nunca foi definida antes no universo de Star Wars.

- `consumables`: O período máximo de tempo que esta nave pode fornecer consumíveis para toda a sua tripulação sem ter que reabastecer.

- `passengers`: O número de pessoas não essenciais que esta nave pode transportar.

- `stops`: Número de paradas necessárias para o reabastecimento de uma nave dependendo da distância em MGLT fornecida pelo usuário.

Para o cálculo da quantidade de `stops` utilizei a distância fornecida pelo usuário em MGLT, a velocidade máxima da nave em MGLT e o tempo máximo de consumíveis da nave em horas. A fórmula utilidade foi a seguinte:

![alt text](https://i.imgur.com/OdldnMb.png)

## Como instalar?

Clone aplicação para sua máquina utilizando os comandos:

```
git clone
```

Para instalar os utilize digite:

```
yarn
```

Ou

```
npm install
```

## Tecnologias:

- Javascript
- ReactJs
- TypeScript
- NodeJs

### Bibliotecas

- React Hook Forms
- Styled Components
- Axios
- React Router

### Porque utilizei TypeScript?

O TypeScript é uma linguagem que estende os recursos atuais do JavaScript com a possibilidade de adicionar tipos estáticos predefinidos na sua aplicação, em tempo de compilação. Existem muitos pontos positivos ao utilizar o TypeScript, mais especificamente uma linguagem tipada, principalmente quando se trata de aplicações de grande porte.
