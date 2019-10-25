# Programa para descargar las actas de Bolivia ante el fraude electoral 2019
Descarga las actas por numero de mesa, tanto del TREP como del COMPUTO.
Si bien el sistema no es accesible por que lo cortaron, su API si lo es, ademas del cache de su cloud mantiene aun los archivos de imagenes que en algun momento han tenido que estar ahi.
Nota, las actas pueden cambiarse de la noche a la manana. Uno nunca sabe...

## Instalacion:
``` sh
$ npm install
```
## Ejecucion:
Cambia el inicio y el final segun el numero de mesa, este es un ejemplo.

``` sh
$ node index.js --start 51541 --end 51550
```
Encontraras las imagenes en la carpeta images/computo o images/trep

Opcional
Si deseas puedes ejecutarlo con Docker tambien.
``` sh
$ docker build -t granfraude/actas:latest .
$ docker run --rm -e START=51541 -e END=51550 -v $(pwd)/images/computo:/app/images/computo granfraude/actas
```

Tambien puedes guardar todos en un solo directorio, usa el branch `oneFolderOnly` para esto:
``` sh
$ git checkout oneFolderOnly
```
