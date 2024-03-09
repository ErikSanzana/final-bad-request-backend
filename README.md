# final-bad-request-backend

Tansuani Gerardo {
05/03/24:
-se instalan paquetes:
"bcryptjs"
"cors"
"dotenv"
"express",
"jsonwebtoken"
"logger-express"
"pg":
"pg-format"
"swagger-jsdoc"
"swagger-ui-express"
-se instalan dependencias:
"@babel/preset-env"
"@faker-js/faker"
"jest"
"supertest"
-se especifica jest en el package.json
    "transform": {
    "^.+\\.js$": "babel-jest"
    },
    "collectCoverageFrom": [
    "/*.js"
    ],
    "coveragePathIgnorePatterns": [
    "/node_modules/"
    ],
    "coverageThreshold": {
    "global": {
    "statements": 100,
    "branches": 100,
    "functions": 100,
    "lines": 100
    }
    }
-se crea archivo server.js
-se crean carpetas y archivos base
NO OLVIDAR crear trigger en base de datos
06/03/2024
-En swagger.js se cambió nombre:
        title: "Jabones Vegan",
            version: "1.0.0",
            description: "API para la venta de jabones"
07/03/24
-se cargó lo asociado a "user"
-se cargan todas las dependencias
-se realiza npm audit y se ejecuta npm audit fix para reparar vulnerabilidades
-se realiza npm fund
-queda el código con 0 vulneramilidades
}
Tansuani{
    -actualizar query según tablas en usermodel
    -se corta el código de "user" del archivo openapi y se pega de fila 58 a 89 debajo de swagger en userRoutes
    -se corta el código de "user/login" del archivo openapi y se pega de fila 38 a 80 debajo de swagger en loginRoutes
    -comentario de lo que falta corregir en product
}
gerardo
{

    -se crea productrouter con todas sus rutas
    -se crea modelo y controller para agregar productos a la db

}