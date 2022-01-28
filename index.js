import { createGitgraph } from "@gitgraph/js";

// Get the graph container HTML element.
const graphContainer = document.getElementById("graph-container");

// Instantiate the graph.
const gitgraph = createGitgraph(graphContainer,{
    author: "Reus <reus@maisaedu.com.br>",
    template: "blackarrow",
    branchLabelOnEveryCommit: true,
    //mode: "compact",
    orientation: "vertical-reverse",
});
const main = gitgraph.branch("main").commit('Início do projeto');
main.commit('Início do projeto').tag('1.0.0');
const deploy = main.branch("deploy").commit('deploy');
const homologation = main.branch("homologation").commit('homologation');
const development = main.branch("development").commit('development');
const featureNovoPagamento = main.branch("feature/NovoPagamento");
featureNovoPagamento.commit('Adicionando o backend');
const hotfixListagemCliente = main.branch("hotfix/ListagemClientes");
hotfixListagemCliente.commit('Correção na listagem de clientes');
featureNovoPagamento.commit('Adicionando o frontend');
homologation.merge(hotfixListagemCliente);
main.merge(hotfixListagemCliente);
main.merge(deploy);
deploy.merge(main);
homologation.merge(main);
development.merge(main);
main.tag('1.0.1')
featureNovoPagamento.commit('Lintfix');
development.merge(featureNovoPagamento);
homologation.merge(featureNovoPagamento);
deploy.merge(featureNovoPagamento);
main.merge(deploy);
deploy.merge(main);
homologation.merge(main);
development.merge(main);
main.tag('1.1.0');
