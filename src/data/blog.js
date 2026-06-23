export const posts = [
  {
    slug: 'designing-with-restraint',
    title: 'Projetando com Contenção',
    date: 'Abr 21, 2026',
    category: 'Frontend',
    excerpt:
      'Como reduzir excessos visuais pode tornar interfaces web mais claras, consistentes e fáceis de manter.',
    readTime: '5 min read',
    content: `
Existe algo em comum entre interfaces que continuam funcionando bem com o tempo: **elas não dependem de exagero**.

- Menos cor  
- Menos ruído  
- Menos decisões visuais feitas só para preencher espaço  

Não se trata apenas de seguir uma estética minimalista. A ideia é **reduzir a complexidade** para que a interface fique mais clara, consistente e fácil de evoluir.

## O problema da complexidade visual

Durante o desenvolvimento, é normal recorrer a soluções visuais rápidas.

Um botão não chama atenção o suficiente → ganha uma nova cor.  
Uma seção parece sem vida → ganha mais contraste.

O problema é que cada nova escolha acaba criando **uma regra nova**, mesmo que isso não esteja explícito.

Com o tempo:
- decisões se acumulam  
- a interface fica mais difícil de manter  
- surgem inconsistências entre componentes  

## Contenção como estratégia

Trabalhar com uma paleta mais restrita obriga decisões mais conscientes.

- A hierarquia passa a depender mais da **tipografia**
- O espaçamento organiza melhor os blocos
- Componentes ficam mais consistentes e reutilizáveis

Esse tipo de abordagem reduz correções constantes e torna o sistema mais previsível.

## O impacto no desenvolvimento

Quando o design é mais contido, o desenvolvimento também tende a ficar mais simples.

O código costuma ter:
- menos variações  
- menos exceções  
- menos remendos  

Os componentes ficam mais fáceis de:
- reaproveitar  
- entender  
- manter  

No fim, isso reduz tanto a complexidade **visual** quanto **estrutural**.

## O que vale a pena manter

Antes de adicionar uma nova cor ou variação, vale perguntar:

> Isso resolve o problema ou só disfarça?

Na maioria dos casos:
- ajustar estrutura  
- melhorar espaçamento  
- refinar hierarquia  

traz uma solução mais consistente.

Interfaces que envelhecem bem não são as mais chamativas,  
são as que continuam **claras, coerentes e fáceis de usar** com o tempo.
`.trim(),
  },
  {
    slug: 'building-rest-api-spring-boot',
    title: 'Criando uma API REST com Spring Boot',
    date: 'Abr 21, 2026',
    category: 'Backend',
    excerpt:
      'Uma visão prática de como estruturar uma API REST com Java e Spring Boot, com foco em organização, clareza e evolução do projeto.',
    readTime: '6 min read',
    content: `
Quando a gente começa a estudar Spring Boot, é comum querer apenas **fazer a API funcionar**.

- Criar endpoints  
- Conectar com o banco  
- Testar o mais rápido possível  

Mas conforme a aplicação cresce, o desafio muda:  
não é mais só rodar, é **manter organizado**.

## Estrutura básica

Uma API bem organizada separa responsabilidades de forma clara:

- **Controller:** Lida com a requisição  
- **Service:** Contém a lógica de negócio  
- **Repository:** Comunicação com o banco  

Essa divisão:
- facilita manutenção  
- evita código confuso  
- ajuda na escalabilidade  

## Criando endpoints REST

Uma API REST segue padrões simples:

- \`GET /items\`
- \`GET /items/{id}\`
- \`POST /items\`
- \`PUT /items/{id}\`
- \`DELETE /items/{id}\`

Mais importante que decorar métodos é manter **consistência**.

Isso deixa a API:
- previsível para quem consome  
- fácil de manter  

## O papel do Service

Erro comum:

> colocar toda a lógica no controller

O \`service\` existe para:
- centralizar regras de negócio  
- validar dados  
- processar informações  

Resultado:
- código mais limpo  
- melhor organização  
- maior reaproveitamento  

## Integração com banco

Com **Spring Data JPA**, trabalhar com banco fica mais direto.

Exemplo:

\`\`\`java
repository.save(entity);
repository.findById(id);
repository.delete(entity);
\`\`\`

Isso reduz código boilerplate e permite focar no que importa:  
**a lógica da aplicação**.

## Pensando além do básico

Mesmo em projetos pequenos, vale investir em:

- tratamento de erros  
- padronização de respostas  
- separação de responsabilidades  

Esses pontos fazem diferença quando o sistema cresce.

## Conclusão

Aprender Spring Boot não é só criar endpoints.

É entender como estruturar uma aplicação backend que seja:

- clara  
- organizada  
- fácil de evoluir  

com o passar do tempo.
`.trim(),
  },
  {
  slug: 'guia-estudos-mongodb',
  title: 'Guia de Estudos MongoDB',
  date: 'Jun 22, 2026',
  category: 'Banco de Dados',
  excerpt:
    'Aprenda os fundamentos do MongoDB, incluindo CRUD, operadores, índices e gerenciamento de coleções.',
  readTime: '15 min read',
  content: `

Introdução

MongoDB é um banco de dados NoSQL orientado a documentos que armazena informações em formato BSON, semelhante ao JSON.

Acessando o MongoDB

flatpak-spawn --host bash → Abre um terminal do sistema host.

which mongosh → Verifica onde o MongoDB Shell está instalado.

mongosh → Inicia o shell do MongoDB.

cls → Limpa a tela.

Bancos de Dados

show dbs → Lista todos os bancos de dados.

use schol → Seleciona ou cria o banco schol.

db.dropDatabase() → Remove o banco atual.

Criando Coleções

db.createCollection("students") → Cria a coleção students.

show collections → Lista todas as coleções.

Inserindo Documentos

db.students.insertOne({name:"Spongebob", age:30, gpa:3.2}) → Insere um documento.

db.students.insertMany([...]) → Insere vários documentos de uma vez.

db.students.find() → Exibe todos os documentos da coleção.

Tipos de Dados
String → Texto.
Number → Valores numéricos.
Boolean → true ou false.
Date → Datas.
Null → Valor nulo.
Array → Lista de valores.
Object → Documento aninhado.
Ordenação e Limitação

db.students.find().sort({name:-1}) → Ordena por nome em ordem decrescente.

db.students.find().sort({gpa:1}) → Ordena GPA crescente.

db.students.find().sort({gpa:-1}) → Ordena GPA decrescente.

db.students.find().limit(1) → Retorna apenas um documento.

db.students.find().sort({gpa:-1}).limit(1) → Retorna o aluno com maior GPA.

Consultas

db.students.find({name:"Patrick"}) → Busca por nome.

db.students.find({fullTime}) → Busca alunos em período parcial.

db.students.find({gpa:4.0, fullTime}) → Busca usando múltiplas condições.

Projeções

db.students.find({}, {name}) → Mostra apenas o campo name.

db.students.find({}, {_id, name}) → Oculta o _id.

db.students.find({}, {_id, name, gpa}) → Mostra apenas name e gpa.

Atualização

db.students.updateOne({name:"Sandy"}, {$set:{fullTime}}) → Atualiza um documento.

db.students.updateMany({}, {$set:{fullTime}}) → Atualiza vários documentos.

db.students.updateOne({name:"Gary"}, {$unset:{fullTime:""}}) → Remove um campo.

Exclusão

db.students.deleteOne({name:"Larry"}) → Remove um documento.

db.students.deleteMany({fullTime}) → Remove vários documentos.

Operadores de Comparação

$ne → Diferente.

$lt → Menor que.

$lte → Menor ou igual.

$gt → Maior que.

$gte → Maior ou igual.

$in → Dentro de uma lista.

$nin → Fora de uma lista.

Operadores Lógicos

$and → Todas as condições devem ser verdadeiras.

$or → Pelo menos uma condição deve ser verdadeira.

$nor → Nenhuma condição pode ser verdadeira.

$not → Inverte a condição informada.

Índices

db.students.createIndex({name:-1}) → Cria índice para acelerar buscas.

db.students.getIndexes() → Lista índices existentes.

db.students.dropIndex("name_-1") → Remove um índice.

Gerenciamento de Coleções

db.createCollection("teacher",{capped,size:1000000,max:100}) → Cria uma coleção capped.

db.createCollection("courses") → Cria uma coleção comum.

db.courses.drop() → Remove a coleção.

Resumo

MongoDB utiliza documentos em formato BSON e fornece recursos para inserção, consulta, atualização, exclusão e indexação de dados de forma eficiente.

`.trim(),
  },
]
