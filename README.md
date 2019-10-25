# Programa para descargar las actas
Descarga las actas por numero de mesa, tanto del TREP como del COMPUTO.
Si bien el sistema no es accesible por que lo cortaron, su API si lo es, ademas del cache de su cloud mantiene aun los archivos de imagenes que en algun momento han tenido que estar ahi.
Nota, las actas pueden cambiarse de la noche a la manana. Uno nunca sabe...

##Instalacion:
``` sh
$ npm install
```
## Ejecucion:
Cambia el inicio y el final, este es un ejemplo.

``` sh
$ node index.js --start 515411 --end 515420
```
Encontraras las imagenes en la carpeta images/computo o images/trep

Opcional
Si deseas puedes ejecutarlo con Docker tambien.
``` sh
$ docker build -t granfraude/actas:latest .
$ docker run --rm -e START=45882 -e END=45888 -v $(pwd)/images/computo:/app/images/computo granfraude/actas
```
