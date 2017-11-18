# Amigo Oculto

> Projeto em Node.js que lê um arquivo CSV com os participantes, embaralha o array e envia por SMS.

## Como utilizar
Baixe as dependências do projeto com
```npm install```

Copie os arquivos da pasta examples para a pasta de root e renomeie:
```
config.example.json => config.json 
people.example.csv => people.csv
```

Edite o arquivo `config.json` inserindo os dados de conexão com a Amazon

Edite o arquivo `people.csv` com os dados dos participantes. Formato:


## Configuração do people.csv
```
nome;telefone;presentes
```
**Note o separador por ponto e vírgula (;)*

**nome** => Nome do participante

**telefone** => Telefone com DDD

**presentes** => Descrição do presente