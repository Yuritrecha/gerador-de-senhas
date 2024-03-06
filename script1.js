function gerarSenha() {

    // Caracteres disponíveis para serem utilizados na senha.
    var caracteres = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";

    // Quantidade de caracteres que devem conter na senha
    var tamanhoSenha = 16;

    // variável que ira receber a senha aleatória
    var senha = "";

    // Para cada i, enquanto i for menor que o tamanho da senha
    // irá ser sorteado um caractere que será salvo na variável "senha".
    for (var i = 0; i < tamanhoSenha; i++) {
      var numeroAleatorio = Math.floor(Math.random() * caracteres.length);
      senha += caracteres.substring(numeroAleatorio, numeroAleatorio + 1);
    }
    document.getElementById('senha').value = senha
  }