const input = document.getElementById('command-input');
const output = document.getElementById('output');

const commands = {
  help: `
    <span class="cmd-name">about</span> Quem sou eu<br>
    <span class="cmd-name">experience</span> Onde já atuei<br>
    <span class="cmd-name">skills</span> Tecnologias e ferramentas<br>
    <span class="cmd-name">projects</span> Meus repositórios e projetos<br>
    <span class="cmd-name">contact</span> Como falar comigo<br>
    <span class="cmd-name">clear</span> Limpar a tela
  `,
  about: `Engenheiro de Cibersegurança focado em automação de infraestrutura, gestão de agentes de endpoint (EDR/SIEM) e orquestração de ambientes em larga escala.`,
  skills: `Ansible / AWX | PowerShell & Bash | SentinelOne | Wazuh | Python | Linux & Windows Server`,
  experience: `Atuação na automação e sustentação de parques com milhares de endpoints, desenvolvimento de scripts EDR/SIEM e gerenciamento de politicas de segurança.`,
  projects: `
    • <a href="https://github.com" target="_blank" style="color:#00ff66">Ansible-Playbooks</a> - Automação de EDR em larga escala<br>
    • <a href="https://github.com" target="_blank" style="color:#00ff66">Security-Automation</a> - Scripts de resposta a incidentes
  `,
  contact: `Email: alexandresilvaoficial1@gmail.com | LinkedIn: https://www.linkedin.com/in/alexandre-silva-37b6a1153/ | GitHub: https://asaw1982.github.io/Aleporti/`
};

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const command = input.value.trim().toLowerCase();
    
    // Imprime o comando digitado no terminal
    const userLine = document.createElement('div');
    userLine.innerHTML = `<span class="prompt">visitor@alexandre:~$</span> ${command}`;
    output.appendChild(userLine);

    // Lógica do comando
    if (command === 'clear') {
      output.innerHTML = '';
    } else if (commands[command]) {
      const responseLine = document.createElement('div');
      responseLine.className = 'command-response';
      responseLine.innerHTML = commands[command];
      output.appendChild(responseLine);
    } else if (command !== '') {
      const errorLine = document.createElement('div');
      errorLine.className = 'command-response';
      errorLine.style.color = '#ff5555';
      errorLine.innerHTML = `Comando não encontrado: '${command}'. Digite 'help' para ver os comandos disponíveis.`;
      output.appendChild(errorLine);
    }

    input.value = '';
    window.scrollTo(0, document.body.scrollHeight);
  }
});