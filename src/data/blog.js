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
Abrir terminal do host

```bash
flatpak-spawn --host bash
```

Abre um terminal do sistema host.

Verificar instalação do MongoDB Shell

```bash
which mongosh
```

Verifica onde o MongoDB Shell está instalado.

Iniciar MongoDB Shell

```bash
mongosh
```

Inicia o shell do MongoDB.

Limpar terminal

```bash
cls
```

Limpa a tela.

Bancos de Dados
Listar bancos existentes

```javascript
show dbs
```

Lista todos os bancos de dados disponíveis.

Selecionar ou criar banco

```javascript
use schol
```

Seleciona ou cria o banco de dados chamado schol.

Excluir banco atual

```javascript
db.dropDatabase()
```

Remove o banco de dados atualmente selecionado.

Coleções
Criar coleção

```javascript
db.createCollection("students")
```

Cria a coleção students.

Listar coleções

```javascript
show collections
```

Exibe todas as coleções do banco atual.

Inserindo Dados
Inserir um documento

```javascript
db.students.insertOne({
name: "Spongebob",
age: 30,
gpa: 3.2
})
```

Insere um único documento na coleção.

Inserir vários documentos

```javascript
db.students.insertMany([
{ name: "Patrick", age: 38, gpa: 1.5 },
{ name: "Sandy", age: 27, gpa: 4.0 },
{ name: "Gary", age: 18, gpa: 2.5 }
])
```

Insere vários documentos de uma só vez.

Visualizar documentos

```javascript
db.students.find()
```

Exibe todos os documentos da coleção.

Tipos de Dados

MongoDB suporta diversos tipos de dados:

String
Number
Boolean
Date
Null
Array
Object
Exemplo completo

```javascript
db.students.insertOne({
name: "Larry123",
age: 32,
gpa: 2.8,
fullTime: false,
registerDate: {
"$date": "2023-01-02T03:00:00.000Z"
},
graduationDate: null,
courses: [
"Biology",
"Chemistry",
"Calculus"
],
address: {
street: "123 fake st.",
city: "Bikini Bot",
zip: 1234
}
})
```

Ordenação e Limitação
Ordenar por nome

```javascript
db.students.find().sort({name:-1})
```

Ordena os resultados por nome em ordem decrescente.

Ordenar GPA crescente

```javascript
db.students.find().sort({gpa:1})
```

Ordena os resultados por GPA crescente.

Ordenar GPA decrescente

```javascript
db.students.find().sort({gpa:-1})
```

Ordena os resultados por GPA decrescente.

Limitar resultados

```javascript
db.students.find().limit(1)
```

Retorna apenas um documento.

Retornar maior GPA

```javascript
db.students.find().sort({gpa:-1}).limit(1)
```

Retorna o aluno com maior GPA.

Consultas
Buscar por nome

```javascript
db.students.find({name:"Patrick"})
```

Busca documentos pelo nome.

Buscar por período parcial

```javascript
db.students.find({fullTime})
```

Retorna alunos com fullTime igual a false.

Buscar múltiplas condições

```javascript
db.students.find({gpa:4.0, fullTime})
```

Busca alunos com GPA 4.0 e fullTime true.

Projeções
Exibir apenas nome

```javascript
db.students.find({}, {name})
```

Mostra apenas o campo name.

Ocultar ID

```javascript
db.students.find({}, {_id, name})
```

Oculta o campo _id.

Exibir nome e GPA

```javascript
db.students.find({}, {_id, name, gpa})
```

Mostra apenas os campos name e gpa.

Atualização
Atualizar documento

```javascript
db.students.updateOne(
{name:"Sandy"},
{$set:{fullTime}}
)
```

Atualiza ou cria o campo fullTime.

Atualizar vários documentos

```javascript
db.students.updateMany(
{},
{$set:{fullTime}}
)
```

Atualiza todos os documentos.

Remover campo

```javascript
db.students.updateOne(
{name:"Gary"},
{$unset:{fullTime:""}}
)
```

Remove o campo fullTime.

Exclusão
Excluir um documento

```javascript
db.students.deleteOne({name:"Larry"})
```

Remove um único documento.

Excluir vários documentos

```javascript
db.students.deleteMany({fullTime})
```

Remove vários documentos.

Operadores de Comparação
Operador	Função
$ne	Diferente de
$lt	Menor que
$lte	Menor ou igual
$gt	Maior que
$gte	Maior ou igual
$in	Dentro de uma lista
$nin	Fora de uma lista
Operadores Lógicos
Operador	Função
$and	Todas as condições devem ser verdadeiras
$or	Pelo menos uma condição deve ser verdadeira
$nor	Nenhuma condição pode ser verdadeira
$not	Inverte uma condição
Índices
Criar índice

```javascript
db.students.createIndex({name:-1})
```

Cria um índice para acelerar buscas.

Listar índices

```javascript
db.students.getIndexes()
```

Mostra todos os índices da coleção.

Remover índice

```javascript
db.students.dropIndex("name_-1")
```

Remove o índice especificado.

Gerenciamento de Coleções
Criar coleção capped

```javascript
db.createCollection("teacher",{
capped,
size:1000000,
max:100
})
```

Cria uma coleção limitada por tamanho.

Criar coleção comum

```javascript
db.createCollection("courses")
```

Cria a coleção courses.

Excluir coleção

```javascript
db.courses.drop()
```

Remove a coleção courses.

Resumo

MongoDB é um banco de dados NoSQL flexível e orientado a documentos. Com ele é possível realizar operações CRUD, utilizar operadores avançados, criar índices para melhorar desempenho e gerenciar coleções de forma simples e eficiente.

`.trim(),
},
]
