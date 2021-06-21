var name_client=['Alexa','Clebin','Felipin','Nicolas','Roberta'];
var priority=['procuro compromisso sério','só quero um namoro casual','não quero compromisso','só quero ficar','quero um relacionamento aberto'];
var current_situation=['solteiro','em um relacionamento'];
var age=[18,22,23,20,19];
var image=['IMG/alexa.png','IMG/clebin.png','IMG/felipin_da_massa.png','IMG/nikolas_da_Skol.png','IMG/roberta.png'];

cria(name_client,"list");

function cria(nDiv,sId){
    var sIdDiv = document.getElementById(sId);
    for(var i=0;i<nDiv.length;i++){

        var divUser = document.createElement("div");
        divUser.style.borderRadius = "20px";
        divUser.style.padding = "5px";
        divUser.setAttribute("id","container");
        sIdDiv.appendChild(divUser);

        var pName = document.createElement("p");
        pName.style.fontSize = "25px";
        pName.style.maxWidth = "300px";
        pName.style.float = "left";
        pName.style.margin = "10px 200px auto 200px";
        var nomes = document.createTextNode("NOME: "+name_client[i]+".");
        pName.appendChild(nomes);
        divUser.appendChild(pName);

        var link = document.createElement("a");
        var ftDePerfil = document.createElement("img");
        ftDePerfil.setAttribute("src",image[i]);
        ftDePerfil.setAttribute("id","ftPerfil");
        ftDePerfil.style.float = "right";
        divUser.appendChild(ftDePerfil);

        var pAge = document.createElement("p");
        pAge.style.maxWidth = "300px";
        var idades = document.createTextNode("IDADE: "+age[i]+" anos.");
        pAge.appendChild(idades);
        divUser.appendChild(pAge);

        var estadoAtual = document.createElement("p");
        estadoAtual.style.color = "blue";
        estadoAtual.style.maxWidth = "300px";
        estadoAtual.style.float = "left";
        var possiveisEstados = document.createTextNode(priority[i]);
        estadoAtual.appendChild(possiveisEstados);
        divUser.appendChild(estadoAtual);

        var btnconversar = document.createElement("input");
        btnconversar.setAttribute("type","button");
        btnconversar.setAttribute("value","conversar");
        btnconversar.style.margin = "50px";
        btnconversar.style.backgroundColor = "blue";
        btnconversar.style.float = "right";
        btnconversar.style.color = "yellow";
        btnconversar.style.borderRadius = "5px";
        divUser.appendChild(btnconversar);

        var link = document.createElement("a");
        link.setAttribute("href","opa.html");
        link.appendChild(btnconversar);
        divUser.appendChild(link);
    }
}