Você vai precisar instalar as seguintes dependências:

	1. npm install --save-dev typescript
	2. npm install --save-dev typeorm
	3. npm install --save-dev @types/express
	4. npm install --save-dev mysql2
	5. npm isntall --save-dev ts-node
	5. npm isntall --save-dev ts-node-dev
	6. npm install --save-dev reflect-metadata

Configuração

Você precisa configurar um arquivo chamado tsconfig.json, neste arquivo ficará as configurações do do banco de dados como host, password ...

Quanto ao tsconfig.json -> habilite as seguintes linhas de códigos:

	1. "experimentalDecorators": true
	2. "emitDecoratorMetadata": true 

Dentro do package.json, você coloca os seguintes scripts:
```
	"scripts": {
	    "dev:server": "ts-node-dev --respawn --transpile-only src/index.ts"
	    "typeorm": "ts-node ./node_modules/typeorm/cli.js"
	}
```
Estes são ofundamentais para o bom funcionamento do prjeto.

O que ficará o Build da aplicação?

Dentro do arquivo tsconfig.json, adicione este comando com valor sendo o diretório onde ficará o build da aplicação:
"outDir": "./build"

Agora vamos configurar um fluxo de desenvolvimento que ficará mais perfomático para nós - devs;
Refere-se a este comando: "dev:server": "ts-node-dev --respawn --transpile-only src/index.ts";

Migrações

Sua primeira migração: `npm run typeorm migration:create -- -n CreateUsersTable`

Configure do seu jeito o up e down.
Por fim, vamos executar uma migração: `npm run typeorm migration:run`;
