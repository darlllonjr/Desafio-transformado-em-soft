// Importa o módulo nativo do Node.js para ler e escrever no terminal
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
/**
 * Função responsável por obter a média do aluno.
 * Ela é recursiva (chama a si mesma no final) para manter o programa em loop.
 */
function obterMedia() {
    // readline.question exibe a pergunta e aguarda a digitação do usuário
    readline.question('\nDigite a média do aluno (ou digite "sair" para encerrar): ', (entrada) => {
        
        // 1. Verifica se o usuário quer fechar o programa
        if (entrada.toLowerCase().trim() === 'sair') {
            console.log('Programa encerrado. Até mais!');
            readline.close(); // Fecha a interface do terminal
            return;           // Interrompe a execução desta rodada
        }
        // 2. Trata a entrada: substitui vírgula por ponto e converte para número decimal
        const media = parseFloat(entrada.replace(',', '.'));
        // 3. Valida se o que foi digitado é realmente uma nota válida (entre 0 e 10)
        if (isNaN(media) || media < 0 || media > 10) {
            console.log('❌ Erro: Por favor, digite uma nota válida entre 0 e 10.');
        } else {
            // 4. Lógica de classificação da média escolar
            if (media < 5) {
                console.log('Situação: REP (Reprovado) ❌');
            } else if (media < 7) {
                console.log('Situação: REC (Recuperação) ⚠️');
            } else {
                console.log('Situação: APR (Aprovado)  🎉');
            }
        }
        // 5. RECURSÃO: Chama a função novamente para criar a próxima rodada da pergunta
        obterMedia();
    });
}
// Inicia a execução do programa pela primeira vez
obterMedia();