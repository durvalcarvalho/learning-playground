angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatos, operadoras, serialGenerator, upperFilter) {
	$scope.app = upperFilter("Lista Telefonica");
	$scope.contatos = contatos.data;
	$scope.operadoras = operadoras.data;
	$scope.hasContatoSelecionado = false;

	let calcularImpostos = function(contatos, imposto) {
		contatos.forEach(function(contato) {
			contato.operadora.precoComImposto = contato.operadora.preco * imposto;
		}); 
	};

	let generateSerial = function (contatos) {
		contatos.forEach(function (item) {
			item.serial = serialGenerator.generate();
		});
	};

	let init = function () {
		generateSerial($scope.contatos);
		
		let imposto = 1.2;
		calcularImpostos($scope.contatos, imposto);
	};
	init();

	$scope.adicionarContato = function (contato) {
		contato.serial = serialGenerator.generate();
		contatosAPI.saveContato(contato).success(function (data) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		});
	};

	$scope.resetContatos = function() {
		$scope.contatos = angular.copy($scope.contatos);
	}

	$scope.apagarContatos = function (contatos) {
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
		$scope.verificarContatoSelecionado();
	};

	$scope.verificarContatoSelecionado = function (contatos) {
		$scope.hasContatoSelecionado = contatos.some(function (contato) {
			return contato.selecionado;
		});
	};

	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	
	
});