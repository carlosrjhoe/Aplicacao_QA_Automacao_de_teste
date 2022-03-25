## Aplicacao_QA_Automacao_de_teste
Aqui irei ver como uma pessoa QA faz no dia a dia, como montar um planejamento de testes, o que testar e quais os tipos de testes existentes, vamos te dar exemplos do mundo real e te inserir no universo da qualidade!

# Aula 01

Nessa aula, Eu aprendi:
- Iniciar um novo projeto usando o NodeJS, através do comando npm init, inicializando o arquivo package.json;
- Criar um novo arquivo de teste, com extensão .spec.js dentro da pasta integration e utilizar o comando describe para descrever a suite de testes;
- Usar a função beforEach e o comando cy.visit(), para indicar a URL que será carregada antes de cada novo caso de teste;
- Criar um novo caso de teste utilizando a função it e utilizar os recursos cy.get(), bem como as opção .type, .click e .should para fazer os assertions;
- Usar o Selector Playground do Cypress para identificar o nome do elemento;
- Usar as ferramentas de desenvolvedor para melhor identificar os elementos html da página.

# Aula 02

Nessa aula, Eu aprendi:

- Criar uma nova suite de testes, criando um novo arquivo com a extensão .spec.js dentro da pasta integration;
- Utilizar com mais detalhes as ferramentas de desenvolvedor (DevTools) do navegador para explorar e identificar os elementos com que o - - Cypress irá interagir;
Utilizar o comando cy.contains() para procurar por um texto dentro de um seletor, facilitando a busca por um elemento;
- Criar novos casos de teste, incluindo a função it(). Não há limites para a quantidade de testes incluídos.

# Aula 03

Nessa aula, Eu aprendi:

- Executar os testes em modo headless, sem abrir a interface gráfica do Cypress;
- Verificar os relatórios e vídeos gerados ao executar testes em modo headless;
- Usar o pacote Mochawesome para personalizar a geração do relatório e ter a possibilidade de gerá-los como arquivos html, visualizando-os no browser;
- Utilizar o Dashboard para integrar os resultados dos testes e ter uma visão mais analítica e completa dos dados;
- Criar novos comandos personalizados, de acordo com a necessidade e referenciá-los como se fossem comando nativos do Cypress, como por exemplo: cy.login(), cy.registrar() ou da forma que considerar melhor.