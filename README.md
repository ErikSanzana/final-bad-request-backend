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
}
