/**
 * Função jQuery para remover a ação do click
 * @author Victor Guilherme
 * 24/10/2018
 */
 //caso utilize somente a biblioteca jQuery, simplificar o código (+ desempenho)
 $(document).ready(function(){
	// .click(function(){}); -> quando clicar no objeto "<a>"
	$(".Detalhes").click(function(){
		return false;//sem ação
	});
 });
