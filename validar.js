<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Formulário de Contato</title>
  <style>
    .error {
      border: 1px solid red;
    }

    .error-message {
      color: red;
      font-size: 0.9em;
      margin-top: 2px;
    }

    form {
      max-width: 400px;
      margin: 20px auto;
      font-family: Arial, sans-serif;
    }

    label {
      display: block;
      margin-top: 10px;
    }

    input {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
    }

    button {
      margin-top: 15px;
      padding: 10px 15px;
    }
  </style>
</head>
<body>

  <form id="contatoForm">
    <label for="nome">Nome Completo:</label>
    <input type="text" id="nome" name="nome" />
    <div id="nome-error" class="error-message"></div>

    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" />
    <div id="email-error" class="error-message"></div>

    <label for="telefone">Telefone (formato: (xx) xxxxx-xxxx):</label>
    <input type="text" id="telefone" name="telefone" placeholder="(11) 91234-5678" />
    <div id="telefone-error" class="error-message"></div>

    <button type="submit">Enviar</button>
  </form>

  <script>
    document.addEventListener('DOMContentLoaded', function () {
      document.getElementById('contatoForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio do formulário por padrão

        // Limpar mensagens de erro
        clearErrors();

        // Obter os dados dos campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();

        let isValid = true;

        // Validar Nome
        if (nome === '') {
          isValid = false;
          showError('nome', 'O nome completo é obrigatório.');
        }

        // Validar E-mail
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email === '' || !emailRegex.test(email)) {
          isValid = false;
          showError('email', 'Por favor, insira um e-mail válido.');
        }

        // Validar Telefone
        const telefoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
        if (telefone === '' || !telefoneRegex.test(telefone)) {
          isValid = false;
          showError('telefone', 'Por favor, insira um telefone válido no formato (xx) xxxxx-xxxx.');
        }

        // Se for válido, podemos enviar o formulário
        if (isValid) {
          alert('Formulário enviado com sucesso!');
          // Aqui você pode enviar via AJAX ou com form.submit()
        }
      });

      function showError(field, message) {
        document.getElementById(`${field}-error`).textContent = message;
        document.getElementById(field).classList.add('error');
      }

      function clearErrors() {
        const fields = ['nome', 'email', 'telefone'];
        fields.forEach(field => {
          document.getElementById(`${field}-error`).textContent = '';
          document.getElementById(field).classList.remove('error');
        });
      }
    });
  </script>

</body>
</html>
