// Taxa de corretagem pela tabela Bovespa, utilizada pelo Bradesco e Santader.
function tabelaBovespa(valorInput) {
	total = 0
	
	if (valorInput <= 135.07) {
		total = 2.7;
	} else if ((valorInput >= 135.08) && (valorInput <= 498.62)) {
		total = 0.02 * valorInput;
	} else if ((valorInput >= 498.63) && (valorInput <= 1514.69)) {
		total = ((0.015 * valorInput) + 2.49);
	} else if ((valorInput >= 1514.7) && (valorInput <= 3029.38)) {
		total = ((0.01 * valorInput) + 10.06);
	} else {
		total = ((0.005 * valorInput) + 25.21);
	}

	return total;

}


// Taxas por faixa de investimento das corretoras.
function calcularTarifa() {
	tarifa = 0;
	valorInput = document.getElementById('valor-investido').value
	corretora = document.getElementById('corretora').value

	// No$$a:
	if (corretora == 'N') {
		tarifa = 2;
	}
	
	// Ágora:
	if (corretora == 'A') {
		tarifa = 20;
	}
	
	// Bradesco:
	if (corretora == 'B') {
		tarifa = tabelaBovespa(valorInput);
	}
	
	// Easynvest:
	if (corretora == 'E') {
		tarifa = 10;
	}
	
	// HSBC:
	if (corretora == 'H') {
		tarifa = 18;
	}
	
	// Itaú:
	if (corretora == 'I') {
		tarifa = 10 + (0.003 * valorInput);
	}
	
	// Santander:
	if (corretora == 'S') {
		tarifa = tabelaBovespa(valorInput);
	}
	
	// Coloca o valor arredondado no elemento:
	document.getElementById('tarifa-readonly').value = Math.round(tarifa * 100) / 100;

}