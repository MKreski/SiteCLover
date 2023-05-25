let data = [
    {"dtRecord" : "2023-05-01 10:10:35",
    "nome": "Ageu Duarte Junior",
    "eMail": "ageu@ageu.com.br",
    "assunto": "Dúvidas",
    "mensagem": "Mensagem 1 | SENAI - SESI - Alunos do curso desenvolvimento de sistemas"
    },

    {"dtRecord" : "2023-05-01 12:15:35",
    "nome": "Ageu Duarte Junior",
    "eMail": "ageu@ageu.com.br",
    "assunto": "Opções de Entrega",
    "mensagem": "Mensagem 2 | SENAI - SESI - Alunos do curso desenvolvimento de sistemas"
    },

    {"dtRecord" : "2023-05-01 13:15:35",
    "nome": "Ageu Duarte Junior",
    "eMail": "ageu@ageu.com.br",
    "assunto": "Telefone de Contato",
    "mensagem": "Mensagem 3 | SENAI - SESI - Alunos do curso desenvolvimento de sistemas"
    },
    
    {"dtRecord" : "2023-05-01 14:15:35",
    "nome": "Ageu Duarte Junior",
    "eMail": "ageu@ageu.com.br",
    "assunto": "Endereço para Retirada",
    "mensagem": "Mensagem 4 | SENAI - SESI - Alunos do curso desenvolvimento de sistemas"
    },

    {"dtRecord" : "2023-05-01 15:15:35",
    "nome": "Ageu Duarte Junior",
    "eMail": "ageu@ageu.com.br",
    "assunto": "Oportunidades de trabalho",
    "mensagem": "Mensagem 5 | SENAI - SESI - Alunos do curso desenvolvimento de sistemas"
    }
];

let table = document.getElementById("myTable");
let rowCount = table.rows.length;

for (let i = 0; i < data.length; i++) {
    const reg = data[i];

    let row = table.insertRow(rowCount);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
        
    cell1.innerHTML = data[i].dtRecord;
    cell2.innerHTML = data[i].nome;
    cell3.innerHTML = data[i].eMail;
    cell4.innerHTML = data[i].assunto;
    cell5.innerHTML = data[i].mensagem;

    rowCount++;    
}

