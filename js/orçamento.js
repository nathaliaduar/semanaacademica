if (localStorage.getItem('total_inscritos') !== null) {

    document.getElementById('numero_participantes').value = localStorage.getItem('total_inscritos');
}
  
// document.getElementById('numero_participantes').addEventListener('change', function () {
  
//     var totalInscritos = document.getElementById('numero_participantes').value;
  
  
//     localStorage.setItem('total_inscritos', totalInscritos);
//   });
  
  document.addEventListener('DOMContentLoaded', function () {
  
    document.getElementById('calcular').addEventListener('click', function () {
  
      var numeroParticipantes = document.getElementById('numero_participantes').value;
      var quantidadeCafe = document.getElementById('cafe_quantidade').value;
      var precoCafe = document.getElementById('cafe_preco').value;
      var quantidadeBolo = document.getElementById('bolo_quantidade').value;
      var precoBolo = document.getElementById('bolo_preco').value;
      var quantidadeCachorroQuente = document.getElementById('cachorro_quantidade').value;
      var precoCachorroQuente = document.getElementById('cachorro_preco').value;
      var quantidadeBanner = document.getElementById('banner_quantidade').value;
      var precoBanner = document.getElementById('banner_preco').value;
      var quantidadeCracha = document.getElementById('cracha_quantidade').value;
      var precoCracha = document.getElementById('cracha_preco').value;
      var quantidadeCamiseta = document.getElementById('camiseta_quantidade').value;
      var precoCamiseta = document.getElementById('camiseta_preco').value;
  
      // Função para verificar e ajustar números negativos
      function validarNumero(value, inputId) {
        if (value < 0) {
          alert(`O valor em ${inputId} não pode ser negativo. O valor será ajustado para 0.`);
          value = 0;
          document.getElementById(inputId).value = value;
        }
        return value;
      }
  
      // Aplica a função validarNumero a todos os campos de quantidade e preço
      quantidadeCafe = validarNumero(quantidadeCafe, 'cafe_quantidade');
      precoCafe = validarNumero(precoCafe, 'cafe_preco');
      quantidadeBolo = validarNumero(quantidadeBolo, 'bolo_quantidade');
      precoBolo = validarNumero(precoBolo, 'bolo_preco');
      quantidadeCachorroQuente = validarNumero(quantidadeCachorroQuente, 'cachorro_quantidade');
      precoCachorroQuente = validarNumero(precoCachorroQuente, 'cachorro_preco');
      quantidadeBanner = validarNumero(quantidadeBanner, 'banner_quantidade');
      precoBanner = validarNumero(precoBanner, 'banner_preco');
      quantidadeCracha = validarNumero(quantidadeCracha, 'cracha_quantidade');
      precoCracha = validarNumero(precoCracha, 'cracha_preco');
      quantidadeCamiseta = validarNumero(quantidadeCamiseta, 'camiseta_quantidade');
      precoCamiseta = validarNumero(precoCamiseta, 'camiseta_preco');
  
      // Calcula os custos totais
      var custoTotalCafe = quantidadeCafe * precoCafe;
      var custoTotalBolo = quantidadeBolo * precoBolo;
      var custoTotalCachorro = quantidadeCachorroQuente * precoCachorroQuente;
      var custoTotalBanner = quantidadeBanner * precoBanner;
      var custoTotalCracha = quantidadeCracha * precoCracha;
      var custoTotalCamiseta = quantidadeCamiseta * precoCamiseta;
      var custoEvento = custoTotalBanner + custoTotalBolo + custoTotalCachorro + custoTotalCafe + custoTotalCamiseta + custoTotalCracha;
  
      // Define os custos totais nos campos de saída
      document.getElementById('cafe_total').value = custoTotalCafe.toFixed(2);
      document.getElementById('bolo_total').value = custoTotalBolo.toFixed(2);
      document.getElementById('cachorro_total').value = custoTotalCachorro.toFixed(2);
      document.getElementById('banner_total').value = custoTotalBanner.toFixed(2);
      document.getElementById('cracha_total').value = custoTotalCracha.toFixed(2);
      document.getElementById('camiseta_total').value = custoTotalCamiseta.toFixed(2);
      document.getElementById('custoEvento').value = custoEvento.toFixed(2);
  
      var formData = {
        numeroParticipantes: numeroParticipantes,
        cafe: { quantidade: quantidadeCafe, preco: precoCafe, cafeTotal: custoTotalCafe },
        bolo: { quantidade: quantidadeBolo, preco: precoBolo, boloTotal: custoTotalBolo },
        cachorroQuente: { quantidade: quantidadeCachorroQuente, preco: precoCachorroQuente, cachorroTotal: custoTotalCachorro },
        banner: { quantidade: quantidadeBanner, preco: precoBanner, bannerTotal: custoTotalBanner },
        cracha: { quantidade: quantidadeCracha, preco: precoCracha, crachaTotal: custoTotalCracha },
        camiseta: { quantidade: quantidadeCamiseta, preco: precoCamiseta, camisetaTotal: custoTotalCamiseta },
        custoEvento: {custoEvento}
      };
  
      fetch('https://app.headlessforms.cloud/api/v1/form-submission/nkJtA1ewcj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(function (response) {
          if (response.ok) {
            return response.json();
          } else {
            throw Error('Erro ao enviar o formulário.');
          }
        })
        .then(function (data) {
          console.log('Resposta do servidor:', data);
        })
        .catch(function (error) {
          console.error('Erro:', error);
        });
    });
  });