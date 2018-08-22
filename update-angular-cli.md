Actualizar Angular CLI
---

_Documentacion creada para OS `Windows 10s` y version de Angular CLI 5.x_ 

#### TOC

+ [Desinstalar Angular CLI](#desinstalar-angular-cli)
+ [Instalar ultima version de Angular CLI](#instalar-ultima-version-de-angular-cli)
+ [Actualizar los paquetes del framework de Angular a la versión adecuada](#actualizar-paquetes-de-angular)
+ [Volver a Indice](README.md)



# Desinstalar Angular CLI

```bash
# Remover version anterior de Angular CLI
npm uninstall -g angular-cli

# Limpiar Cache
npm cache clean or npm cache verify

# Borrar node_modules
rm -rf node_modules

# Desinstalar angular-cli de dev
npm uninstall --save-dev angular-cli
```

# Instalar ultima version de Angular CLI

```bash
# Instalar globalmente Version Latest de Angular CLI
npm install -g @angular/cli@latest

# Instalar localmente Version Latest de Angular CLI
npm install @angular/cli@latest

# Instalar angular-cli en dev
npm install --save-dev @angular/cli@latest

# Migrar la vieja configuración angular-cli.json al nuevo formato angular.json
ng update @angular/cli
```

# Actualizar paquetes de Angular

En este caso, actualizamos los paquetes de versión 5.x a 6.0.0

```bash
# Actualizar los distintos paquetes de Angular encontrados en package.json
ng update angular/animations@^6.0.0 angular/common@^6.0.0 angular/compiler@^6.0.0 angular/core@^6.0.0 angular/forms@^6.0.0 angular/http@^6.0.0 angular/router@^6.0.0 --save

# Actualizar otros paquetes que fuesen necesarios para el proyecto 
npm i @angular/cdk@6 @angular/compiler-cli@6 @angular/material@6 rxjs@6 --save

# Actualizar todo
ng update --all --save

# Actualizar Angular core:
ng update @angular/core

# Si aún no se puede levantar el servidor, es posible que falte actualizar typescript. E.g:
npm install typescript@'>=2.7.0 <2.8.0'
```