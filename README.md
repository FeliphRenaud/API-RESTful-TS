# API-RESTful-TS

Repositório dedicado para API RESTful com padrões de TypeScript aplicados, sem interface (somente backend).

## Descrição do Projeto

Este projeto consiste em criar uma API no padrão MVC utilizando o pacote **Express**, um dos frameworks mais populares para backend em **Node.js**. O Express oferece flexibilidade na criação de uma estrutura de pastas, facilitando a manutenção do código.

### Pacotes adicionais

- **Config**: Arquivo de configuração.
- **dotenv**: Para variáveis de ambiente.
- **express-validator**: Validações no backend.
- **Mongoose**: Integração com o MongoDB (usando o MongoDB Atlas na nuvem).
- **Morgan**: Realiza o log das requisições HTTP, auxiliando no monitoramento de acesso e tempo de resposta.
- **Winston**: Cria arquivos de log detalhados para facilitar a depuração de erros.
- **Pacotes de tipo**: Tipos do TypeScript necessários para várias bibliotecas.

## Início e Instalação

### 1. Clonar o repositório

Primeiro, crie seu repositório no GitHub e faça o clone para sua máquina local:

```bash
git clone <url-do-repositorio>
```

### 2. Configurar o projeto

Abra sua IDE (no exemplo, utilizamos o **VSCode**) e navegue até a pasta do repositório. Em seguida, execute os comandos abaixo no terminal:

```bash
npm init -y
```

Este comando criará o arquivo `package.json` com as configurações iniciais.

```bash
tsc --init
```

Este comando inicializa o TypeScript, gerando o arquivo de configuração `tsconfig.json`.

### 3. Instalar as dependências de produção

O projeto possui duas categorias de dependências: de produção e de desenvolvimento.

#### Dependências de produção

Execute o seguinte comando para instalar as principais dependências:

```bash
npm install config dotenv express express-validator mongoose morgan winston
```

**Descrição das dependências:**

- **config**: Gerencia as configurações da aplicação.
- **dotenv**: Gerencia variáveis de ambiente (como credenciais de banco de dados).
- **express**: Framework principal para criar a API.
- **express-validator**: Valida os dados no backend.
- **mongoose**: Facilita a conexão e manipulação do banco de dados MongoDB.
- **morgan**: Loga requisições HTTP.
- **winston**: Gera arquivos de log para depuração.

#### Dependências de desenvolvimento

Agora, instale as dependências de desenvolvimento, que incluem pacotes de tipo e utilitários para o TypeScript:

```bash
npm install @types/config @types/express @types/mongoose @types/morgan @types/node ts-node-dev typescript --save-dev
```

### 4. Configuração do arquivo .gitignore

Crie um arquivo `.gitignore` na raiz do projeto e adicione a seguinte linha para evitar o upload da pasta `node_modules` ao GitHub:

```
/node_modules

```

## Configurando o package.json

### 3. Configurando o `package.json`

No arquivo `package.json`, edite a seção de scripts para incluir um comando de inicialização para desenvolvimento:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "ts-node-dev --respawn --transpile-only src/app.ts"
}
```

### 4. Executando o Projeto

Para rodar o projeto com o TypeScript e o Express, execute o seguinte comando no terminal:

```bash
npm run dev
```

Isso inicializa o servidor, converte o código TypeScript para JavaScript e recarrega automaticamente a cada modificação no código.

## Finalizando a instalação do projeto

Após seguir estes passos, você está pronto para começar a desenvolver sua API RESTful utilizando TypeScript e Express. Não se esqueça de configurar suas variáveis de ambiente no arquivo `.env` e utilizar o MongoDB Atlas para conectar ao banco de dados.

Bom desenvolvimento!

## Observação final

O servidor do Mongo Atlas utiliza a porta 27017 que pode estar bloquada no seu dispotivo ou até mesmo pelo seu provedor de internet.
No meu caso foi necessario criar as portas de entrada e saida no meu sistema operacional e acessar o provedor de internet via serviço de VPN
