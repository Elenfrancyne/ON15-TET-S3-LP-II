//switch /case

let regiao = 'centro-oeste'

switch (regiao) {
    case 'nordeste':
        console.log('possui 9 estados');
        break;
    case 'norte':
        console.log('possui 7 estados');
        break;
    case 'centro-oeste':
        console.log('possui 3 estados e DF');
        break;
    case 'sudeste':
        console.log('possui 4 estados');
        break;
    case 'sul':
        console.log('possui 3 estados');
        break;
    default:
        console.log('essa região não existe no Brasil')
}
console.log('.................................................')


if (horario >= 0 && horario < 6) {
    console.log("madrugada");
} else if (horario >= 6 && horario < 12) {
    console.log("manhã");
} else if (horario >= 12 && horario < 18) {
    console.log("tarde");
} else if (horario >= 18 && horario < 24) {
    console.log("noite");
} else {
    console.log("horário inválido");
}
// construindo o mesmo caso acima do if... else com switch e limitações de uso
console.log('.................................................')
switch (horario) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('madrugada')
        break;
        switch (horario) {
            case 6:
            case 7:
            case 8:
            case 9:
                case10:
                    case 11:
                console.log('manhã')
                break;
                switch (horario) {
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                        console.log('tarde')
                        break;
                }
                witch(horario) {
                        case 18:
                        case 19:
                        case 20:
                        case 21:
                        case 22:
                        case 23:
                            console.log('noite')
                            break;
                        default:
                            console.log('Horário inválido');
                            console.log('.................................................');