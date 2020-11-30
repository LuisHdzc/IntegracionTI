var array_sintomas = ['fiebre','tosseca','cansancio','molestiasydolores','dolordegarganta','diarrea','conjuntivitis','dolordecabeza','perdida','erupciones','dificultad','doloropresionenelpecho','incapacidadparahablaromoverse']
var json_sintomas = {
    'fiebre' : 0,
    'tosseca' : 0,
    'cansancio' : 0,
    'molestiasydolores' : 0,
    'dolordegarganta' : 0,
    'diarrea' : 0,
    'conjuntivitis' : 0,
    'dolordecabeza' : 0,
    'perdida' : 0,
    'erupciones' : 0,
    'dificultad' : 0,
    'doloropresionenelpecho' : 0,
    'incapacidadparahablaromoverse' : 0
};

//Con esta configuracion no tiene
//[0,0,0,0,1,1,0,1,0,0,0,1,0]

function elegir_sintoma(id){

    var sintoma = id.split('_');
    sintoma = sintoma[1];

    if( $('#'+id).hasClass('gris') ){
        $('#'+id).removeClass('gris')
        json_sintomas[sintoma] = 0;
    }else{
        $('#'+id).addClass('gris')
        json_sintomas[sintoma] = 1;
    }

}

function array_de_sintomas(){
    var array = [];

    for(var i = 0; i < array_sintomas.length; i++){

        if( json_sintomas[ array_sintomas[i] ] == 1){
            array.push(1);
        }else{
            array.push(0);
        }

    }

    return array;
}

function mostrar_modal(resultado){

    if(resultado[0] < 0.5){
        $('#modal_bien').modal('show');
    }else{
        $('#modal_mal').modal('show');        
    }
}