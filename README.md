# AutomaTron
1. Instalar android studio, 
2. Cuadrar el sdk
3. Cuadrar variables de entorno
4. Descargar los dispositivos

primero mirar listado de celulares conectados
ionic cordova run android --list
Elegir el id del celular y copiarlo
ionic cordova run android --target="355a323154493098"
ionic cordova run android --target=" Nexus_6_API_28"
ionic cordova run android --target="X9F4C20108002756”
"
X9F4C20108002756
remover app
ionic cordova platform rm
instalar version
ionic cordova platform add android@9.0.0
para depurar un movil
chrome://inspect/#devices
para construis de manera directa
primero se instalan dependencias
segundo se borra la carpeta de las plataformas
tercero se ejecuta este comando
ionic cordova build android---
cuanto
acá queda la apk wioba-app\platforms\android\app\build\outputs\apk\debug
para pluguin de push notification firebase x
el problema de la pantalla blanco de cordova se soluciono con  h ref
