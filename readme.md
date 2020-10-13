# Configuração

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

# O que ficará o Build da aplicação?

Dentro do arquivo tsconfig.json, adicione este comando com valor sendo o diretório onde ficará o build da aplicação:
"outDir": "./build"

Agora vamos configurar um fluxo de desenvolvimento que ficará mais perfomático para nós - devs;
Refere-se a este comando: "dev:server": "ts-node-dev --respawn --transpile-only src/index.ts";
