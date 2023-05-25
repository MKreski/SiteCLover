let data = [
    {"dtRecord" : "2023-05-01 10:10:35",
    "nome": "John Phyton",
    "eMail": "johnpython@unimar.com.br",
    "assunto": "Dúvidas",
    "mensagem": "como diminui a fomte?"
    },

    {"dtRecord" : "2023-05-01 12:15:35",
    "nome": "Pedro Silva Mandela",
    "eMail": "pedromandela@caraio.com.br",
    "assunto": "Opções de compra",
    "mensagem": "quero comprar caraio"
    },

    {"dtRecord" : "2023-05-01 13:15:35",
    "nome": "Vivienne Westwood",
    "eMail": "viviwood@gmail.com.br",
    "assunto": "Telefone de Contato",
    "mensagem": "morri tentando achar saporra"
    },
    
    {"dtRecord" : "2023-05-01 14:15:35",
    "nome": "Vitor Schiavon",
    "eMail": "gemaplys@contato.com.br",
    "assunto": "Opções",
    "mensagem": "achei mó bosta os perfumekk, é foda lek"
    },

    {"dtRecord" : "2023-05-01 15:15:35",
    "nome": "Ana Carolina De Oliveira Gomes",
    "eMail": "anacarol@portalsesisp.org.br",
    "assunto": "Oportunidades de trabalho",
    "mensagem": "paga quanto ai"
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

