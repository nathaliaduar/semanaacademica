document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formulario");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); 
  
      const nome = document.getElementById("nome").value;
      const matricula = document.getElementById("matricula").value;
      const cpf = document.getElementById("cpf").value;
      const email = document.getElementById("email").value;
      const turma = document.getElementById("turma").value;
  
      const dados = {
        nome: nome,
        matricula: matricula,
        cpf: cpf,
        email: email,
        turma: turma,
      };
  
      const url = "http://jkorpela.fi/cgi-bin/echo.cgi";
  
      fetch(url, {
        method: "POST",
        body: JSON.stringify(dados),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Resposta do servidor:", data);
  
          if (data) {
            document.getElementById("mensagem").textContent = "Inscrição efetuada com sucesso.";
            form.reset();
          } else {
            alert("Ocorreu um erro ao processar a inscrição. Por favor, tente novamente.");
          }
        })
        .catch((error) => {
          console.error("Erro ao enviar inscrição:", error);
          alert("Ocorreu um erro ao enviar a inscrição. Por favor, tente novamente mais tarde.");
        });
    });
  });