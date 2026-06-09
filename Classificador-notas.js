// Importa o módulo nativo do Node.js para ler e escrever no terminal
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const alunos = [ "Amanda" , "Maria cicera" , "Luiz Gustavo" , "Inaldo Junior" , "Livia Andre" ];

// Objeto para armazenar as notas e situações dos alunos avaliados
const historico = {};

/**
 * Exibe a lista de alunos e solicita que o usuário selecione um deles pelo número.
 */
function escolherAluno() {
    console.log('\n--- Lista de Alunos ---');
    alunos.forEach((aluno, index) => {
        // Mostra um marcador se o aluno já foi avaliado
        const statusMarcador = historico[aluno] ? ' (Avaliado)' : '';
        console.log(`${index + 1}. ${aluno}${statusMarcador}`);
    });

    readline.question('\nEscolha o número do aluno que deseja avaliar (ou digite "sair" para encerrar e Verificar a lista de alunos e suas Situações): ', (opcao) => {
        if (opcao.toLowerCase().trim() === 'sair') {
            exibirRelatorioFinal();
            return;
        }

        const index = parseInt(opcao) - 1;

        // Valida se o número digitado é uma opção válida
        if (isNaN(index) || index < 0 || index >= alunos.length) {
            console.log('❌ Opção inválida! Escolha um número válido da lista.');
            escolherAluno(); // Retorna ao menu de seleção
            return;
        }

        const alunoSelecionado = alunos[index];
        obterMedia(alunoSelecionado); // Avança para a inserção de nota
    });
}

/**
 * Pede a média do aluno selecionado e define sua situação.
 */
function obterMedia(aluno) {
    readline.question(`\nDigite a média do(a) ${aluno} (ou digite "sair" para encerrar): `, (entrada) => {
        
        // Verifica se quer sair no meio do processo
        if (entrada.toLowerCase().trim() === 'sair') {
            exibirRelatorioFinal();
            return;
        }

        // Substitui vírgula por ponto e converte para número decimal
        const media = parseFloat(entrada.replace(',', '.'));

        // Valida se o que foi digitado é realmente uma nota válida (entre 0 e 10)
        if (isNaN(media) || media < 0 || media > 10) {
            console.log('❌ Erro: Por favor, digite uma nota válida entre 0 e 10.');
            obterMedia(aluno); // Pergunta novamente para o mesmo aluno
        } else {
            // Lógica de classificação da média escolar
            let situacao = '';
            if (media < 5) {
                situacao = 'REP (Reprovado) ❌';
            } else if (media < 7) {
                situacao = 'REC (Recuperação) ⚠️';
            } else {
                situacao = 'APR (Aprovado)  🎉';
            }
            
            // Salva a avaliação no histórico
            historico[aluno] = { media: media, situacao: situacao };
            console.log(`Situação de ${aluno}: ${situacao}`);
            
            // Retorna à lista para uma nova avaliação
            escolherAluno();
        }
    });
}

/**
 * Exibe o relatório final com a situação de todos os alunos antes de fechar o programa.
 */
function exibirRelatorioFinal() {
    console.log('\n======================================================');
    console.log('            RELATÓRIO FINAL DE AVALIAÇÕES            ');
    console.log('======================================================');
    
    alunos.forEach(aluno => {
        if (historico[aluno]) {
            const dados = historico[aluno];
            console.log(`- ${aluno.padEnd(15)} | Média: ${dados.media.toFixed(1).padStart(4)} | Status: ${dados.situacao}`);
        } else {
            console.log(`- ${aluno.padEnd(15)} | Sem nota registrada`);
        }
    });
    
    console.log('======================================================');
    console.log('Programa encerrado. Até mais!');
    readline.close();
}

// Inicia a execução do programa exibindo a lista de alunos
escolherAluno();