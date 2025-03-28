# CQRS Proof of Concept (PoC)

## Descripción de la Prueba

Este proyecto es una prueba de concepto (PoC) que implementa el patrón **Command Query Responsibility Segregation (CQRS)** utilizando **NestJS** y **Sequelize con SQLite**. La aplicación gestiona una base de datos en memoria y proporciona una API para la gestión de usuarios, separando claramente la lógica de comandos (escritura) y consultas (lectura).

## ¿Cómo funciona?

El patrón CQRS divide la lógica de la aplicación en dos partes principales:

1. **Comandos (Commands)**: Se encargan de las operaciones de escritura, como la creación, actualización y eliminación de datos.
2. **Consultas (Queries)**: Se utilizan para recuperar datos, asegurando que las lecturas estén optimizadas sin afectar la consistencia del sistema.

En esta implementación:

-   Se utilizan **Handlers** para procesar comandos y consultas.
-   Los **DTOs** garantizan la estructura de los datos en las solicitudes.
-   **Swagger** documenta la API generada.

## Objetivo(s) de la Prueba

1. **Demostrar la aplicación del patrón CQRS** en una arquitectura basada en NestJS.
2. **Separar la lógica de lectura y escritura** utilizando **Commands y Queries**.
3. **Implementar Event Sourcing** con la publicación de eventos tras la ejecución de comandos.
4. **Utilizar una base de datos en memoria (SQLite)** para facilitar la prueba sin necesidad de configuración adicional.
5. **Proporcionar una API documentada con Swagger** para facilitar su uso y pruebas.

## Pasos Implementados para Llevar a Cabo la Prueba

1. **Configuración del Proyecto**:
    - Creación de un proyecto NestJS.
    - Instalación de dependencias necesarias (Sequelize, SQLite, CQRS module).
2. **Definición de Entidades y DTOs**:
    - Creación de la entidad principal (ejemplo: `User`).
    - Creación de DTOs para validación de datos en comandos y consultas.
3. **Implementación de CQRS**:
    - Creación de **Commands** para operaciones de escritura.
    - Creación de **Queries** para operaciones de lectura.
    - Implementación de **Handlers** para procesar los comandos y consultas.
4. **Exposición de la API**:
    - Creación de un controlador que interactúa con el bus de CQRS.
    - Documentación con Swagger.
5. **Pruebas de la API**:
    - Se realizaron pruebas para verificar el correcto funcionamiento de los comandos y queries.

## Tecnologías Usadas en la Prueba

-   **Lenguaje**: TypeScript
-   **Framework Backend**: NestJS
-   **Base de Datos**: SQLite en memoria
-   **ORM**: Sequelize con sequelize-typescript
-   **CQRS Module**: `@nestjs/cqrs`
-   **Swagger para documentación**: `@nestjs/swagger`

## Resultados

Tras ejecutar la prueba, se obtuvo:

-   Un servicio REST funcional con endpoints para la gestión de usuarios.
-   Separación clara entre **comandos (escritura)** y **consultas (lectura)**.
-   Registro de eventos tras la ejecución de operaciones CRUD.
-   API documentada en **Swagger UI** para fácil prueba e integración.
-   Comprobación de que la base de datos en memoria funciona correctamente sin necesidad de configuración persistente.

## Ejecución

### Prerequisitos

Para reproducir la prueba se debe tener instalado **Docker**.

### Instrucciones

1. Construir la imagen:
    ```sh
    docker build -t cqrs-nestjs .
    ```
2. Ejecutar el contenedor:
    ```sh
    docker run -dp 3000:3000 cqrs-nestjs
    ```
3. Ver logs:

    ```sh
    docker logs -f <ID_CONTENEDOR>
    ```

4. Acceder a la API en `http://localhost:3000/api`

5. Para detener y eliminar el contenedor:
    ```sh
    docker stop <ID_CONTENEDOR>
    docker rm <ID_CONTENEDOR>
    ```

## Consideraciones para Implementación en Producción

Si se desea aplicar CQRS en una aplicación real, se deben considerar:

-   Evaluar si la separación de lectura y escritura es necesaria: No todos los sistemas requieren CQRS; su implementación debe justificarse por necesidades de escalabilidad y rendimiento.

-   Definir estrategias de consistencia: Como la replicación de datos o eventos de compensación para mantener la integridad.

-   Planificar la infraestructura: Puede requerir bases de datos optimizadas para lectura (ej. NoSQL) y otras para escritura (ej. SQL).

-   Asegurar monitoreo y logging: Para detectar problemas en la sincronización de datos y optimizar el rendimiento.

-   Capacitar al equipo: La adopción de CQRS requiere que los desarrolladores y arquitectos comprendan sus implicaciones y mejores prácticas.

En resumen, CQRS es una poderosa herramienta para aplicaciones escalables y distribuidas, pero debe aplicarse con un análisis detallado de costos, beneficios y complejidades antes de su implementación en entornos productivos.

## Conclusiones

El patrón CQRS ofrece múltiples ventajas y desafíos al aplicarse en sistemas reales:

### Ventajas e Impacto

-   Escalabilidad: Permite optimizar las consultas de lectura sin afectar la eficiencia de las escrituras.

-   Separación de responsabilidades: Facilita la mantenibilidad del código y la evolución del sistema.

-   Mejor rendimiento en sistemas con alta concurrencia: Reduce la contención entre operaciones de lectura y escritura.

-   Facilita la implementación de event sourcing: Permite registrar el historial de cambios de los datos.

### Desafíos y Retos

-   Complejidad arquitectónica: Requiere mayor esfuerzo de diseño y desarrollo.

-   Gestión de consistencia eventual: Puede ser un reto en sistemas con alta disponibilidad.

-   Mayor costo de infraestructura: Puede implicar el uso de múltiples bases de datos u orígenes de datos optimizados.

-   Sincronización de datos: Se necesita un mecanismo adecuado para asegurar la coherencia entre los modelos de lectura y escritura.
