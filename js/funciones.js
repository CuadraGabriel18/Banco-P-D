const enviarDatos = () => {
    //Datos
    let LimDeCred = parseInt( document.getElementsByName('txtLimDeCred')[0].value);
    let tipoTarjeta = document.getElementsByName('cmbTipoDeTarjeta')[0].value;
    let nomClien = document.getElementsByName('txtNomClien')[0].value;

    if (isNaN(LimDeCred) || LimDeCred <= 0) {
        alert('Ingrese una cantidad válida de Limite De Credito.');
        return;
    }
    let nuevoLimite = 0;

    switch(tipoTarjeta){
        case "Tipo 1":
            nuevoLimite = LimDeCred * 0.25;
            break;
        case "Tipo 2":
            nuevoLimite = LimDeCred * 0.35;
            break;
        case "Tipo 3":
            nuevoLimite = LimDeCred * 0.40;
            break;
        case "Otro Tipo":
            nuevoLimite = LimDeCred * 0.50;
    }
    
    let NuevoLim = LimDeCred + nuevoLimite;
    alert(`Nombre del Cliente: ${nomClien}\nLimite De Credito Actual: $${LimDeCred}\nTipo De Tarjeta: ${tipoTarjeta}\nNuevo Limite Es De: $${NuevoLim}
           `);
  }