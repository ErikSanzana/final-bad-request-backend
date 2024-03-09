import express from "express";
import { createNewUser } from "../../src/api/v1/controllers/usersController.js";
import { validateParametersUser } from "../../middlewares/validateParamsUser.js";

const router = express.Router();
// REVISAR CON EL SWAGGER QUE NOSOTROS DEFINIMOS LO QUE VIENE A CONTINUACIÓN. ESTÁ ECHO, SOLO HAY QUE RESCATARLO
// DE LA FILA 8 A LA 55 DEBE IR??

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API para la gestión de usuarios
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - nombre
 *         - apellido
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the users
 *         nombre:
 *           type: string
 *           description: The user's name
 *         apellido:
 *           type: string
 *           description: The user's last name
 *         email:
 *           type: string
 *           description: The user's email
 *         password:
 *           type: string
 *           description: The user's password
 *         createdAt:
 *           type: string
 *           description: The date of the record's creation
 *         updatedAt:
 *           type: string
 *           description: The date of the record's last update
 *
 *       example:
 *         nombre: The New Turing Omnibus
 *         apellido: Alexander K. Dewdney
 *         email: user@test.com
 *         password: password
 */

/**
 * @swagger
 * /user:
    post:
      tags:
        - user
      summary: Register NEW user
      description: This can only be done by the non-logged in user.
      operationId: createUser
      requestBody:
        description: >-
          Register a new user, as default, has the **Rol: _USER_** ;
          Postal_codes only 1 needed 
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/user'
          application/xml:
            schema:
              $ref: '#/components/schemas/user'
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/user'
      responses:
        default:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/user'
            application/xml:
              schema:
                $ref: '#/components/schemas/user'
 */

router.post("/users", validateParametersUser, createNewUser);

export default router;
