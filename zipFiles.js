const stat = require('fs').statSync;
const AdmZip = require('adm-zip');

const nomeProjeto = 'nomeProjeto';

const folder = `pastaProjeto/`;

newArchive(`${nomeProjeto}.zip`, [
    `${folder}arquivo.sln`,
    `${folder}.nuget`,
    `${folder}pastaProjeto`
]);

function newArchive(zipFileName, pathNames) {

    const zip = new AdmZip();

    pathNames.forEach(pathCompleto => {
        const nomePathZip = pathCompleto.split('/')[3];
        const p = stat(pathCompleto);
        console.log(`Copiando ${nomePathZip} ...`);
        if (p.isFile()) {
            zip.addLocalFile(pathCompleto);
        } else if (p.isDirectory()) {
            zip.addLocalFolder(pathCompleto, nomePathZip);
        }
    });

    zip.writeZip(folder + zipFileName);
    console.log('Arquivos zipados com sucesso.');

}