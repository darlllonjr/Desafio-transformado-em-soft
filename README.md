🎓 Classificação de Média Escolar

Este repositório contém a resolução do desafio de classificação de média escolar da DIO, adaptado tanto para testes rápidos na plataforma quanto para rodar como um aplicativo CLI interativo no seu próprio computador.

🗂️ Estrutura dos Arquivos

classificacao-media.js: Código original otimizado para submissão no portal da DIO (usa as funções globais gets() e print()).
classificacao-media-app.js: Versão adaptada para console com Node.js. Roda em loop contínuo e permite classificar vários alunos até que a palavra sair seja digitada.
classificacao-media-app.exe: Versão compilada como executável independente para Windows (não necessita de Node.js instalado para rodar).

🚀 Como Executar

1. Executável no Windows (Fácil e Rápido)
Basta abrir o terminal (PowerShell ou Prompt de Comando) na pasta deste projeto e executar:

powershell

.\desafios\classificacao-media-app.exe
Ou dê dois cliques no arquivo classificacao-media-app.exe através do Windows Explorer.

2. Rodando via Node.js
Se você tiver o Node.js instalado, execute o comando abaixo no terminal da pasta do projeto:

bash

node desafios/classificacao-media-app.js

🎯 Regras de Negócio e Lógica aplicada

O sistema inica perguntando qual aluno voce gostaria de classificar a nota
atraves da resposta ele lê a nota e retorna uma das três classificações abaixo:

Média do Aluno	

Retorno	Descrição

Menor que 5	REP = (Reprovado) ❌	O aluno precisa refazer a matéria.

Entre 5 e 6.9	REC = (Recuperação) ⚠️	O aluno terá direito a uma prova de recuperação.

7 ou superior	APR = (Aprovado) 🎉	O aluno foi aprovado e concluiu o período.

Apos isso ele retorna a lista de Alunos e pede para selecionar o proximo a classificar.
No final ele dá um Relatorio dos alunos com notas e descrição de APR , REC , REP.
Deixando assim as informações claras sobre o mesmo.

🛠️ Tecnologias Utilizadas

JavaScript (ES6)
Node.js (módulo nativo readline para interação via CLI)
PKG (compilação do script para executável Windows)
Desenvolvido durante a jornada de aprendizado na DIO. 🚀
