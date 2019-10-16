const stat = require('fs').statSync;
const AdmZip = require('adm-zip');

//const nomeProjeto = 'PCF4CustomPM025210';

//const folder = `../Projetos/BARTIRA/PCF4CustomPM025210/`;

const ziparArquivos = (nomeProjeto, folder) => {
    const retorno = newArchive(`${nomeProjeto}.zip`, [
        `${folder}${nomeProjeto}.sln`,
        `${folder}.nuget`,
        `${folder}${nomeProjeto}`
    ],
    folder);  

    return retorno;
}

/*newArchive(`${nomeProjeto}.zip`, [
    `${folder}PCF4CustomPM025210.sln`,
    `${folder}.nuget`,
    `${folder}PCF4CustomPM025210`
]);*/

function newArchive(zipFileName, pathNames, folder) {

    const retorno = {
        err : true,
        message: ''
    }

    const zip = new AdmZip();

    pathNames.forEach(pathCompleto => {
        const nomePathZip = pathCompleto.split('/')[pathCompleto.split('/').length-1];
        const p = stat(pathCompleto);
        console.log(`Copiando ${nomePathZip} ...`);
        try{
            if (p.isFile()) {
                console.log(p.isFile())
                zip.addLocalFile(pathCompleto);
            } else if (p.isDirectory()) {
                zip.addLocalFolder(pathCompleto, nomePathZip);
            }
        }catch(e){
            retorno.message = e;
            return retorno;
        } 
        
    });
    
    try {
        zip.writeZip(folder + zipFileName);   
    } catch (e) {
        retorno.message = e;

        return retorno;
    }
    console.log('Arquivos zipados com sucesso. ');
    retorno.message = 'Arquivos compactados com sucesso.';

    return retorno;

}


module.exports = {ziparArquivos};
