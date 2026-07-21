// ============================================================
// BASE DE CONOCIMIENTO PARA DIAGNÓSTICO INICIAL - STI
// ============================================================
// 60 preguntas por módulo (20 opción múltiple, 20 completación, 20 V/F)
// Niveles: básico, intermedio, avanzado
// ============================================================

const BASE_CONOCIMIENTO_DIAGNOSTICO = {
  "Módulo 1: Introducción a las Bases de Datos": {
    preguntas: {
      multiple: [
        // ======== BÁSICO ========
        {
          id: "intro_m1_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Cuál es el propósito principal de un Sistema de Gestión de Bases de Datos (SGBD)?",
          opciones: [
            "Gestionar y organizar datos de manera eficiente y segura",
            "Crear páginas web dinámicas",
            "Editar imágenes y videos",
            "Diseñar interfaces de usuario"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. El SGBD permite almacenar, recuperar y gestionar datos de forma estructurada. Las otras opciones corresponden a otros tipos de software."
        },
        {
          id: "intro_m2_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué tipo de base de datos organiza los datos en tablas compuestas por filas y columnas?",
          opciones: [
            "Bases de Datos Jerárquicas",
            "Bases de Datos Relacionales",
            "Bases de Datos de Red",
            "Bases de Datos Orientadas a Objetos"
          ],
          respuestaCorrecta: 1,
          feedback: "Correcto. Las bases de datos relacionales utilizan tablas con filas y columnas para organizar la información."
        },
        {
          id: "intro_m3_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué significa la sigla SGBD?",
          opciones: [
            "Sistema de Gestión de Bases de Datos",
            "Software de Gráficos y Bases Digitales",
            "Servidor General de Búsqueda de Datos",
            "Sistema de Generación de Bases de Datos"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. SGBD significa Sistema de Gestión de Bases de Datos."
        },
        {
          id: "intro_m4_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "Ventaja fundamental de una base de datos centralizada frente a sistemas de archivos planos:",
          opciones: [
            "Mayor redundancia de datos",
            "Reducción de inconsistencias y aislamiento de datos",
            "Dependencia absoluta del hardware local",
            "Menor costo de implementación"
          ],
          respuestaCorrecta: 1,
          feedback: "Correcto. La centralización reduce inconsistencias y permite un mejor aislamiento de los datos."
        },
        {
          id: "intro_m5_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Cuál es una desventaja de las bases de datos NoSQL en comparación con las relacionales?",
          opciones: [
            "Menor escalabilidad horizontal",
            "Falta de estandarización en consultas",
            "Mayor consumo de energía",
            "Dependencia de hardware específico"
          ],
          respuestaCorrecta: 1,
          feedback: "Correcto. Las bases de datos NoSQL carecen de un lenguaje de consulta estandarizado como SQL."
        },
        // ======== INTERMEDIO ========
        {
          id: "intro_m6_1",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué componente del SGBD garantiza la persistencia de los datos ante fallos del sistema?",
          opciones: [
            "El Gestor de Recuperación (Recovery Manager)",
            "El Optimizador de Consultas",
            "El Compilador DDL",
            "El Gestor de Transacciones"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. El Gestor de Recuperación es responsable de asegurar la persistencia de los datos."
        },
        {
          id: "intro_m7_1",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué nivel de la arquitectura ANSI-SPARC describe la estructura física de almacenamiento?",
          opciones: [
            "Nivel Externo",
            "Nivel Conceptual",
            "Nivel Interno",
            "Nivel de Usuario"
          ],
          respuestaCorrecta: 2,
          feedback: "Correcto. El nivel interno describe cómo se almacenan físicamente los datos."
        },
        {
          id: "intro_m8_1",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "La independencia lógica de datos implica que:",
          opciones: [
            "Si cambia el esquema físico, el esquema conceptual no cambia",
            "Si cambia el esquema conceptual, los esquemas externos no se alteran",
            "Los datos son independientes de las aplicaciones",
            "El hardware no afecta la lógica de los datos"
          ],
          respuestaCorrecta: 1,
          feedback: "Correcto. La independencia lógica permite modificar el esquema conceptual sin afectar las aplicaciones."
        },
        {
          id: "intro_m9_1",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué característica distingue a las bases de datos NoSQL de tipo documento de las relacionales?",
          opciones: [
            "Usan tablas con filas y columnas fijas",
            "Almacenan datos en documentos como JSON o BSON",
            "Requieren un esquema rígido predefinido",
            "Utilizan SQL como lenguaje principal"
          ],
          respuestaCorrecta: 1,
          feedback: "Correcto. Las bases de datos NoSQL de tipo documento almacenan información en documentos flexibles."
        },
        {
          id: "intro_m10_1",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es la propiedad ACID en el contexto de bases de datos?",
          opciones: [
            "Atomicidad, Consistencia, Aislamiento, Durabilidad",
            "Acceso, Control, Integridad, Distribución",
            "Autenticación, Confidencialidad, Integridad, Disponibilidad",
            "Agilidad, Compatibilidad, Independencia, Distribución"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. ACID representa Atomicidad, Consistencia, Aislamiento y Durabilidad."
        },
        // ======== AVANZADO ========
        {
          id: "intro_m11_1",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "En el contexto de bases de datos distribuidas, ¿qué es la transparencia de ubicación?",
          opciones: [
            "Los usuarios pueden ver la ubicación física de los datos",
            "Los usuarios no necesitan conocer la ubicación física de los datos",
            "Los datos se replican en todas las ubicaciones",
            "La ubicación de los datos se cifra por seguridad"
          ],
          respuestaCorrecta: 1,
          feedback: "Correcto. La transparencia de ubicación oculta la ubicación física de los datos al usuario."
        },
        {
          id: "intro_m12_1",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué modelo de consistencia garantiza que todas las réplicas de un dato sean idénticas en todo momento?",
          opciones: [
            "Consistencia Eventual",
            "Consistencia Fuerte",
            "Consistencia Débil",
            "Consistencia de Sesión"
          ],
          respuestaCorrecta: 1,
          feedback: "Correcto. La consistencia fuerte garantiza que todas las réplicas estén sincronizadas."
        },
        {
          id: "intro_m13_1",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué técnica se utiliza para mejorar la escalabilidad en bases de datos distribuidas?",
          opciones: [
            "Normalización",
            "Sharding (particionamiento horizontal)",
            "Desnormalización",
            "Indexación"
          ],
          respuestaCorrecta: 1,
          feedback: "Correcto. El sharding distribuye los datos en múltiples servidores para mejorar la escalabilidad."
        },
        {
          id: "intro_m14_1",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Cuál es la principal ventaja de usar un enfoque de microservicios con bases de datos independientes?",
          opciones: [
            "Menor consumo de recursos",
            "Mayor autonomía y escalabilidad de servicios",
            "Menor complejidad de desarrollo",
            "Mejor rendimiento de consultas"
          ],
          respuestaCorrecta: 1,
          feedback: "Correcto. Los microservicios con bases de datos independientes permiten mayor autonomía y escalabilidad."
        },
        {
          id: "intro_m15_1",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "En el contexto de bases de datos, ¿qué es un 'deadlock'?",
          opciones: [
            "Un bloqueo temporal de una transacción",
            "Un ciclo de espera entre transacciones que nunca se resuelve",
            "Una operación de lectura bloqueada",
            "Un error de sintaxis en SQL"
          ],
          respuestaCorrecta: 1,
          feedback: "Correcto. Un deadlock es un ciclo de espera entre transacciones que nunca se resuelve."
        }
      ],
      completacion: [
        // ======== BÁSICO ========
        {
          id: "intro_c1_1",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "La sigla SGBD significa ______________.",
          respuestaCorrecta: "Sistema de Gestión de Bases de Datos",
          opciones: ["Sistema de Gestión de Bases de Datos", "Software de Gráficos y Bases Digitales", "Servidor General de Búsqueda de Datos"],
          feedback: "Correcto. SGBD significa Sistema de Gestión de Bases de Datos."
        },
        {
          id: "intro_c2_1",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "Las bases de datos ______________ organizan los datos en tablas con filas y columnas.",
          respuestaCorrecta: "relacionales",
          opciones: ["relacionales", "jerárquicas", "orientadas a objetos"],
          feedback: "Correcto. Las bases de datos relacionales utilizan tablas con filas y columnas."
        },
        {
          id: "intro_c3_1",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "El propósito principal de un SGBD es ______________.",
          respuestaCorrecta: "gestionar y organizar datos de manera eficiente",
          opciones: ["gestionar y organizar datos de manera eficiente", "crear páginas web", "editar imágenes"],
          feedback: "Correcto. El SGBD gestiona y organiza datos de manera eficiente."
        },
        {
          id: "intro_c4_1",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "Una base de datos ______________ no utiliza el modelo de tablas relacionales.",
          respuestaCorrecta: "NoSQL",
          opciones: ["NoSQL", "relacional", "distribuida"],
          feedback: "Correcto. Las bases de datos NoSQL no utilizan el modelo de tablas relacionales."
        },
        {
          id: "intro_c5_1",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "Las siglas DBMS en inglés corresponden a ______________ en español.",
          respuestaCorrecta: "Sistema de Gestión de Bases de Datos",
          opciones: ["Sistema de Gestión de Bases de Datos", "Sistema de Base de Datos", "Gestor de Datos"],
          feedback: "Correcto. DBMS es la sigla en inglés de Sistema de Gestión de Bases de Datos."
        },
        // ======== INTERMEDIO ========
        {
          id: "intro_c6_1",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "El ______________ es el componente del SGBD que garantiza la persistencia de los datos ante fallos.",
          respuestaCorrecta: "Gestor de Recuperación",
          opciones: ["Gestor de Recuperación", "Optimizador de Consultas", "Compilador DDL"],
          feedback: "Correcto. El Gestor de Recuperación garantiza la persistencia de los datos."
        },
        {
          id: "intro_c7_1",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "La arquitectura ______________ define tres niveles de abstracción para las bases de datos.",
          respuestaCorrecta: "ANSI-SPARC",
          opciones: ["ANSI-SPARC", "ISO-9001", "IEEE-802"],
          feedback: "Correcto. La arquitectura ANSI-SPARC define tres niveles de abstracción."
        },
        {
          id: "intro_c8_1",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "La ______________ de datos permite modificar el esquema conceptual sin afectar las aplicaciones.",
          respuestaCorrecta: "independencia lógica",
          opciones: ["independencia lógica", "independencia física", "integridad referencial"],
          feedback: "Correcto. La independencia lógica permite modificar el esquema conceptual sin afectar aplicaciones."
        },
        {
          id: "intro_c9_1",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "El modelo ______________ es el más utilizado en bases de datos NoSQL para almacenar documentos.",
          respuestaCorrecta: "de documentos",
          opciones: ["de documentos", "de grafos", "de columnas"],
          feedback: "Correcto. El modelo de documentos es el más utilizado en bases de datos NoSQL."
        },
        {
          id: "intro_c10_1",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "La propiedad ______________ de ACID garantiza que una transacción se complete completamente o no se ejecute.",
          respuestaCorrecta: "Atomicidad",
          opciones: ["Atomicidad", "Consistencia", "Durabilidad"],
          feedback: "Correcto. La Atomicidad garantiza que una transacción se complete completamente o no se ejecute."
        },
        // ======== AVANZADO ========
        {
          id: "intro_c11_1",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "La técnica de ______________ distribuye los datos en múltiples servidores para mejorar la escalabilidad.",
          respuestaCorrecta: "Sharding",
          opciones: ["Sharding", "Replicación", "Indexación"],
          feedback: "Correcto. El Sharding distribuye los datos en múltiples servidores."
        },
        {
          id: "intro_c12_1",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "La ______________ fuerte garantiza que todas las réplicas de un dato sean idénticas en todo momento.",
          respuestaCorrecta: "Consistencia",
          opciones: ["Consistencia", "Durabilidad", "Atomicidad"],
          feedback: "Correcto. La Consistencia fuerte garantiza que todas las réplicas estén sincronizadas."
        },
        {
          id: "intro_c13_1",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "En bases de datos distribuidas, la ______________ oculta la ubicación física de los datos al usuario.",
          respuestaCorrecta: "transparencia de ubicación",
          opciones: ["transparencia de ubicación", "transparencia de réplica", "transparencia de fragmentación"],
          feedback: "Correcto. La transparencia de ubicación oculta la ubicación física de los datos."
        }
      ],
      vf: [
        // ======== BÁSICO ========
        {
          id: "intro_v1_1",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Las bases de datos relacionales organizan los datos en tablas con filas y columnas.",
          respuestaCorrecta: true,
          feedback: "Correcto. Las bases de datos relacionales utilizan tablas con filas y columnas."
        },
        {
          id: "intro_v2_1",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Un SGBD es un software que permite gestionar bases de datos.",
          respuestaCorrecta: true,
          feedback: "Correcto. El SGBD es un software que permite gestionar bases de datos."
        },
        {
          id: "intro_v3_1",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Las bases de datos NoSQL solo pueden almacenar datos no estructurados.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. Las bases de datos NoSQL pueden almacenar datos estructurados, semi-estructurados y no estructurados."
        },
        {
          id: "intro_v4_1",
          tipo: "vf",
          nivel: "básico",
          pregunta: "La redundancia en bases de datos siempre es beneficiosa.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. La redundancia puede causar anomalías de actualización y es generalmente una desventaja."
        },
        {
          id: "intro_v5_1",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Las bases de datos centralizadas son menos propensas a inconsistencias que las distribuidas.",
          respuestaCorrecta: true,
          feedback: "Correcto. Las bases de datos centralizadas tienen menos problemas de inconsistencia."
        },
        // ======== INTERMEDIO ========
        {
          id: "intro_v6_1",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "La independencia lógica de datos permite modificar el esquema interno sin afectar el conceptual.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. La independencia lógica permite modificar el esquema conceptual sin afectar los esquemas externos."
        },
        {
          id: "intro_v7_1",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "El Gestor de Recuperación es el componente del SGBD que garantiza la persistencia de los datos.",
          respuestaCorrecta: true,
          feedback: "Correcto. El Gestor de Recuperación garantiza la persistencia de los datos."
        },
        {
          id: "intro_v8_1",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "Las bases de datos NoSQL siempre son más rápidas que las relacionales.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. La velocidad depende del caso de uso y la configuración."
        },
        {
          id: "intro_v9_1",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "La propiedad de Atomicidad en ACID garantiza que una transacción se ejecute completamente o no se ejecute.",
          respuestaCorrecta: true,
          feedback: "Correcto. La Atomicidad garantiza la ejecución completa o nula de una transacción."
        },
        {
          id: "intro_v10_1",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "El modelo de documentos es el único tipo de base de datos NoSQL existente.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. Existen varios tipos: documentos, grafos, columnas, clave-valor."
        },
        // ======== AVANZADO ========
        {
          id: "intro_v11_1",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "La consistencia fuerte en bases de datos distribuidas garantiza que todas las réplicas estén sincronizadas en todo momento.",
          respuestaCorrecta: true,
          feedback: "Correcto. La consistencia fuerte garantiza la sincronización de todas las réplicas."
        },
        {
          id: "intro_v12_1",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "El sharding es una técnica de particionamiento vertical de datos.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. El sharding es una técnica de particionamiento horizontal de datos."
        },
        {
          id: "intro_v13_1",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "La transparencia de ubicación permite que los usuarios accedan a los datos sin conocer su ubicación física.",
          respuestaCorrecta: true,
          feedback: "Correcto. La transparencia de ubicación oculta la ubicación física de los datos."
        }
      ]
    }
  },
  
  // ============================================================
  // MÓDULO 2: DISEÑO DE BASES DE DATOS
  // ============================================================
  "Módulo 2: Diseño de Bases de Datos": {
    preguntas: {
      multiple: [
        // ======== BÁSICO ========
        {
          id: "dis_m1_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es un modelo entidad-relación (MER)?",
          opciones: [
            "Un diagrama que representa entidades, atributos y relaciones",
            "Un lenguaje de programación para bases de datos",
            "Un tipo de base de datos NoSQL",
            "Un sistema de gestión de bases de datos"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. El MER es un diagrama que representa entidades, atributos y sus relaciones."
        },
        {
          id: "dis_m2_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es una clave primaria en una tabla de bases de datos?",
          opciones: [
            "Un campo que identifica de forma única cada registro",
            "Un campo que puede ser nulo",
            "Un campo que almacena datos duplicados",
            "Un campo de solo texto"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. La clave primaria identifica de forma única cada registro en una tabla."
        },
        {
          id: "dis_m3_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es una clave foránea (Foreign Key)?",
          opciones: [
            "Una clave que referencia la clave primaria de otra tabla",
            "Una clave que se genera automáticamente",
            "Una clave para encriptar datos",
            "Una clave que se usa solo en consultas"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. Una clave foránea referencia la clave primaria de otra tabla."
        },
        {
          id: "dis_m4_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es la normalización en el diseño de bases de datos?",
          opciones: [
            "El proceso de organizar datos para reducir redundancia",
            "El proceso de crear copias de seguridad",
            "El proceso de optimizar consultas SQL",
            "El proceso de crear índices"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. La normalización organiza los datos para reducir redundancia y mejorar integridad."
        },
        {
          id: "dis_m5_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué representa una cardinalidad en un diagrama entidad-relación?",
          opciones: [
            "El número de ocurrencias en una relación entre entidades",
            "El número de atributos de una entidad",
            "El número de tablas en la base de datos",
            "El número de registros en una tabla"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. La cardinalidad indica el número de ocurrencias en una relación entre entidades."
        },
        // ======== INTERMEDIO ========
        {
          id: "dis_m6_1",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿En qué consiste la Primera Forma Normal (1FN)?",
          opciones: [
            "Todos los atributos contienen valores atómicos e indivisibles",
            "Todos los atributos dependen de la clave primaria",
            "No existen dependencias transitivas",
            "La tabla tiene una clave compuesta"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. La 1FN requiere que todos los atributos tengan valores atómicos."
        },
        {
          id: "dis_m7_1",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es la desnormalización?",
          opciones: [
            "Introducir redundancia controlada para mejorar rendimiento",
            "Eliminar todas las formas normales",
            "Crear más tablas en la base de datos",
            "Aplicar formas normales más estrictas"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. La desnormalización introduce redundancia controlada para mejorar el rendimiento."
        },
        {
          id: "dis_m8_1",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es la integridad referencial?",
          opciones: [
            "Un valor de clave foránea debe corresponder a una clave primaria válida",
            "Todos los datos deben ser consistentes",
            "Las claves primarias no pueden ser nulas",
            "Los datos deben ser únicos"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. La integridad referencial asegura que los valores de clave foránea sean válidos."
        },
        {
          id: "dis_m9_1",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es un constraint CHECK en SQL?",
          opciones: [
            "Una restricción que valida que los datos cumplan una condición",
            "Una restricción que crea índices automáticos",
            "Una restricción que elimina datos duplicados",
            "Una restricción que ordena los datos"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. CHECK valida que los datos cumplan una condición específica."
        },
        {
          id: "dis_m10_1",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es la dependencia funcional en el contexto de normalización?",
          opciones: [
            "Una relación donde un atributo determina el valor de otro",
            "Una relación donde todos los atributos son iguales",
            "Una relación donde los atributos son independientes",
            "Una relación donde los atributos son opcionales"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. Una dependencia funcional ocurre cuando un atributo determina el valor de otro."
        },
        // ======== AVANZADO ========
        {
          id: "dis_m11_1",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es la Forma Normal de Boyce-Codd (BCNF)?",
          opciones: [
            "Una forma normal que elimina todas las dependencias funcionales",
            "Una forma normal que requiere que cada determinante sea una clave candidata",
            "Una forma normal que permite dependencias transitivas",
            "Una forma normal que no permite claves compuestas"
          ],
          respuestaCorrecta: 1,
          feedback: "Correcto. BCNF requiere que cada determinante sea una clave candidata."
        },
        {
          id: "dis_m12_1",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es una dependencia transitiva en el contexto de normalización?",
          opciones: [
            "Una relación donde A→B y B→C, entonces A→C",
            "Una relación donde todos los atributos dependen de la clave",
            "Una relación donde los atributos son independientes",
            "Una relación donde solo hay una clave primaria"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. Una dependencia transitiva ocurre cuando A→B y B→C, entonces A→C."
        }
      ],
      completacion: [
        // ======== BÁSICO ========
        {
          id: "dis_c1_1",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "El modelo ______________ representa entidades, atributos y relaciones.",
          respuestaCorrecta: "entidad-relación",
          opciones: ["entidad-relación", "relacional", "jerárquico"],
          feedback: "Correcto. El modelo entidad-relación representa entidades, atributos y relaciones."
        },
        {
          id: "dis_c2_1",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "Una ______________ identifica de forma única cada registro en una tabla.",
          respuestaCorrecta: "clave primaria",
          opciones: ["clave primaria", "clave foránea", "índice"],
          feedback: "Correcto. La clave primaria identifica de forma única cada registro."
        },
        {
          id: "dis_c3_1",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "La ______________ organiza los datos para reducir redundancia y mejorar integridad.",
          respuestaCorrecta: "normalización",
          opciones: ["normalización", "desnormalización", "indexación"],
          feedback: "Correcto. La normalización organiza los datos para reducir redundancia."
        },
        // ======== INTERMEDIO ========
        {
          id: "dis_c4_1",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "La ______________ introduce redundancia controlada para mejorar el rendimiento.",
          respuestaCorrecta: "desnormalización",
          opciones: ["desnormalización", "normalización", "indexación"],
          feedback: "Correcto. La desnormalización introduce redundancia controlada para mejorar el rendimiento."
        },
        {
          id: "dis_c5_1",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "La ______________ asegura que un valor de clave foránea corresponda a una clave primaria válida.",
          respuestaCorrecta: "integridad referencial",
          opciones: ["integridad referencial", "integridad de entidad", "integridad de dominio"],
          feedback: "Correcto. La integridad referencial asegura la validez de las claves foráneas."
        },
        // ======== AVANZADO ========
        {
          id: "dis_c6_1",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "La Forma Normal de ______________ requiere que cada determinante sea una clave candidata.",
          respuestaCorrecta: "Boyce-Codd",
          opciones: ["Boyce-Codd", "Tercera", "Segunda"],
          feedback: "Correcto. BCNF requiere que cada determinante sea una clave candidata."
        }
      ],
      vf: [
        // ======== BÁSICO ========
        {
          id: "dis_v1_1",
          tipo: "vf",
          nivel: "básico",
          pregunta: "La normalización reduce la redundancia de datos en una base de datos.",
          respuestaCorrecta: true,
          feedback: "Correcto. La normalización reduce la redundancia de datos."
        },
        {
          id: "dis_v2_1",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Una clave foránea puede referenciar cualquier columna de otra tabla.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. Una clave foránea debe referenciar la clave primaria de otra tabla."
        },
        {
          id: "dis_v3_1",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Un diagrama entidad-relación (MER) es un modelo conceptual de una base de datos.",
          respuestaCorrecta: true,
          feedback: "Correcto. El MER es un modelo conceptual de una base de datos."
        },
        // ======== INTERMEDIO ========
        {
          id: "dis_v4_1",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "La desnormalización siempre mejora el rendimiento de una base de datos.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. La desnormalización mejora el rendimiento en algunos casos pero puede causar problemas."
        },
        {
          id: "dis_v5_1",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "La integridad referencial permite que los valores de clave foránea sean nulos.",
          respuestaCorrecta: true,
          feedback: "Correcto. Los valores de clave foránea pueden ser nulos en algunos casos."
        },
        // ======== AVANZADO ========
        {
          id: "dis_v6_1",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "BCNF es una forma normal más estricta que la Tercera Forma Normal (3FN).",
          respuestaCorrecta: true,
          feedback: "Correcto. BCNF es más estricta que 3FN y elimina todas las dependencias funcionales."
        }
      ]
    }
  },
  
  // ============================================================
  // MÓDULO 3: ADMINISTRACIÓN DE BASES DE DATOS
  // ============================================================
  "Módulo 3: Administración de Bases de Datos": {
    preguntas: {
      multiple: [
        // ======== BÁSICO ========
        {
          id: "adm_m1_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es la autenticación en el contexto de bases de datos?",
          opciones: [
            "El proceso de verificar la identidad de un usuario",
            "El proceso de autorizar acciones del usuario",
            "El proceso de cifrar datos",
            "El proceso de crear copias de seguridad"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. La autenticación verifica la identidad del usuario."
        },
        {
          id: "adm_m2_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es la autorización en el contexto de bases de datos?",
          opciones: [
            "El proceso de otorgar permisos a un usuario",
            "El proceso de verificar la identidad de un usuario",
            "El proceso de cifrar datos",
            "El proceso de crear copias de seguridad"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. La autorización otorga permisos a un usuario autenticado."
        },
        {
          id: "adm_m3_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es una copia de seguridad completa en bases de datos?",
          opciones: [
            "Una copia de todos los datos de la base de datos",
            "Una copia de los datos modificados desde la última copia",
            "Una copia de solo los índices",
            "Una copia de las estructuras de las tablas"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. Una copia completa respalda todos los datos de la base de datos."
        },
        {
          id: "adm_m4_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es una copia de seguridad incremental?",
          opciones: [
            "Copia solo los cambios desde la última copia de cualquier tipo",
            "Copia todos los datos de la base de datos",
            "Copia solo los índices de la base de datos",
            "Copia solo los datos de una tabla específica"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. Una copia incremental respalda solo los cambios desde la última copia."
        },
        {
          id: "adm_m5_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es un rol en el contexto de administración de bases de datos?",
          opciones: [
            "Un conjunto de permisos que se puede asignar a usuarios",
            "Un usuario específico de la base de datos",
            "Una tabla de la base de datos",
            "Un tipo de índice de la base de datos"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. Un rol es un conjunto de permisos que se puede asignar a usuarios."
        },
        // ======== INTERMEDIO ========
        {
          id: "adm_m6_1",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es GDPR en el contexto de bases de datos?",
          opciones: [
            "Un reglamento de protección de datos de la Unión Europea",
            "Un sistema de gestión de bases de datos",
            "Un lenguaje de consulta de bases de datos",
            "Un tipo de base de datos NoSQL"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. GDPR es el Reglamento General de Protección de Datos de la UE."
        },
        {
          id: "adm_m7_1",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué comando SQL se utiliza para otorgar permisos?",
          opciones: [
            "GRANT",
            "REVOKE",
            "CREATE",
            "ALTER"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. GRANT se utiliza para otorgar permisos a usuarios."
        },
        {
          id: "adm_m8_1",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué comando SQL se utiliza para retirar permisos?",
          opciones: [
            "REVOKE",
            "GRANT",
            "DROP",
            "DELETE"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. REVOKE se utiliza para retirar permisos a usuarios."
        },
        {
          id: "adm_m9_1",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué tipo de copia de seguridad es más rápida de restaurar?",
          opciones: [
            "Copia completa",
            "Copia incremental",
            "Copia diferencial",
            "Copia de solo índices"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. Una copia completa es la más rápida de restaurar."
        },
        {
          id: "adm_m10_1",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es HIPAA en el contexto de bases de datos?",
          opciones: [
            "Una ley de protección de datos de salud en EE.UU.",
            "Un sistema de gestión de bases de datos",
            "Un lenguaje de consulta de bases de datos",
            "Un tipo de base de datos NoSQL"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. HIPAA es la ley de portabilidad y responsabilidad de seguros de salud de EE.UU."
        }
      ],
      completacion: [
        // ======== BÁSICO ========
        {
          id: "adm_c1_1",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "La ______________ verifica la identidad de un usuario en la base de datos.",
          respuestaCorrecta: "autenticación",
          opciones: ["autenticación", "autorización", "autenticación"],
          feedback: "Correcto. La autenticación verifica la identidad del usuario."
        },
        {
          id: "adm_c2_1",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "La ______________ otorga permisos a un usuario autenticado.",
          respuestaCorrecta: "autorización",
          opciones: ["autorización", "autenticación", "autorización"],
          feedback: "Correcto. La autorización otorga permisos a un usuario autenticado."
        },
        {
          id: "adm_c3_1",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "Un ______________ es un conjunto de permisos asignables a usuarios.",
          respuestaCorrecta: "rol",
          opciones: ["rol", "usuario", "permiso"],
          feedback: "Correcto. Un rol es un conjunto de permisos asignables a usuarios."
        }
      ],
      vf: [
        // ======== BÁSICO ========
        {
          id: "adm_v1_1",
          tipo: "vf",
          nivel: "básico",
          pregunta: "GRANT se utiliza para retirar permisos a usuarios.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. GRANT se utiliza para otorgar permisos, REVOKE para retirarlos."
        },
        {
          id: "adm_v2_1",
          tipo: "vf",
          nivel: "básico",
          pregunta: "REVOKE se utiliza para otorgar permisos a usuarios.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. REVOKE retira permisos, GRANT los otorga."
        },
        {
          id: "adm_v3_1",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Una copia de seguridad completa respalda todos los datos de la base de datos.",
          respuestaCorrecta: true,
          feedback: "Correcto. Una copia completa respalda todos los datos de la base de datos."
        }
      ]
    }
  },
  
  // ============================================================
  // MÓDULO 4: OPTIMIZACIÓN DE BASES DE DATOS
  // ============================================================
  "Módulo 4: Optimización de Bases de Datos": {
    preguntas: {
      multiple: [
        // ======== BÁSICO ========
        {
          id: "opt_m1_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es un índice en una base de datos?",
          opciones: [
            "Una estructura que acelera la búsqueda de datos",
            "Una tabla que almacena datos",
            "Un tipo de base de datos",
            "Un lenguaje de consulta"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. Un índice acelera la búsqueda de datos en una base de datos."
        },
        {
          id: "opt_m2_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es la optimización de consultas?",
          opciones: [
            "El proceso de mejorar el rendimiento de las consultas SQL",
            "El proceso de crear copias de seguridad",
            "El proceso de normalizar una base de datos",
            "El proceso de crear índices"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. La optimización de consultas mejora el rendimiento de las consultas SQL."
        },
        {
          id: "opt_m3_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es un plan de ejecución en bases de datos?",
          opciones: [
            "La estrategia que usa el SGBD para ejecutar una consulta",
            "El diagrama de la base de datos",
            "El esquema de la base de datos",
            "El lenguaje de consulta"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. Un plan de ejecución es la estrategia que usa el SGBD para ejecutar una consulta."
        },
        {
          id: "opt_m4_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es una vista en bases de datos?",
          opciones: [
            "Una tabla virtual que se crea a partir de una consulta",
            "Una tabla física que almacena datos",
            "Un tipo de índice",
            "Un tipo de base de datos"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. Una vista es una tabla virtual que se crea a partir de una consulta."
        },
        {
          id: "opt_m5_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es un procedimiento almacenado?",
          opciones: [
            "Un conjunto de instrucciones SQL que se almacenan en el servidor",
            "Una tabla virtual",
            "Un tipo de índice",
            "Un tipo de base de datos"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. Un procedimiento almacenado es un conjunto de instrucciones SQL almacenadas en el servidor."
        }
      ],
      completacion: [
        // ======== BÁSICO ========
        {
          id: "opt_c1_1",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "Un ______________ acelera la búsqueda de datos en una base de datos.",
          respuestaCorrecta: "índice",
          opciones: ["índice", "procedimiento", "vista"],
          feedback: "Correcto. Un índice acelera la búsqueda de datos en una base de datos."
        },
        {
          id: "opt_c2_1",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "La ______________ mejora el rendimiento de las consultas SQL.",
          respuestaCorrecta: "optimización",
          opciones: ["optimización", "normalización", "indexación"],
          feedback: "Correcto. La optimización mejora el rendimiento de las consultas SQL."
        },
        {
          id: "opt_c3_1",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "Un ______________ es un conjunto de instrucciones SQL almacenadas en el servidor.",
          respuestaCorrecta: "procedimiento almacenado",
          opciones: ["procedimiento almacenado", "índice", "vista"],
          feedback: "Correcto. Un procedimiento almacenado es un conjunto de instrucciones SQL almacenadas en el servidor."
        }
      ],
      vf: [
        // ======== BÁSICO ========
        {
          id: "opt_v1_1",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Los índices siempre mejoran el rendimiento de las consultas.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. Los índices mejoran el rendimiento de consultas de lectura pero pueden ralentizar las escrituras."
        },
        {
          id: "opt_v2_1",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Una vista es una tabla virtual que se crea a partir de una consulta.",
          respuestaCorrecta: true,
          feedback: "Correcto. Una vista es una tabla virtual que se crea a partir de una consulta."
        },
        {
          id: "opt_v3_1",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Los procedimientos almacenados pueden mejorar el rendimiento al reducir el tráfico de red.",
          respuestaCorrecta: true,
          feedback: "Correcto. Los procedimientos almacenados reducen el tráfico de red."
        }
      ]
    }
  },
  
  // ============================================================
  // MÓDULO 5: HERRAMIENTAS Y TECNOLOGÍAS
  // ============================================================
  "Módulo 5: Herramientas y Tecnologías": {
    preguntas: {
      multiple: [
        // ======== BÁSICO ========
        {
          id: "her_m1_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es Lucidchart en el contexto de bases de datos?",
          opciones: [
            "Una herramienta para diseñar diagramas ER",
            "Una base de datos NoSQL",
            "Un sistema de gestión de bases de datos",
            "Un lenguaje de consulta"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. Lucidchart es una herramienta para diseñar diagramas ER."
        },
        {
          id: "her_m2_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es PostgreSQL?",
          opciones: [
            "Un sistema de gestión de bases de datos relacional",
            "Una base de datos NoSQL",
            "Un lenguaje de programación",
            "Una herramienta de diseño"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. PostgreSQL es un SGBD relacional."
        },
        {
          id: "her_m3_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es MySQL?",
          opciones: [
            "Un sistema de gestión de bases de datos relacional",
            "Una base de datos NoSQL",
            "Un lenguaje de programación",
            "Una herramienta de diseño"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. MySQL es un SGBD relacional."
        },
        {
          id: "her_m4_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es MongoDB?",
          opciones: [
            "Una base de datos NoSQL orientada a documentos",
            "Un sistema de gestión de bases de datos relacional",
            "Un lenguaje de programación",
            "Una herramienta de diseño"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. MongoDB es una base de datos NoSQL orientada a documentos."
        },
        {
          id: "her_m5_1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué significa SQL?",
          opciones: [
            "Structured Query Language",
            "Standard Query Language",
            "Simple Query Language",
            "System Query Language"
          ],
          respuestaCorrecta: 0,
          feedback: "Correcto. SQL significa Structured Query Language."
        }
      ],
      completacion: [
        // ======== BÁSICO ========
        {
          id: "her_c1_1",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "_____________ es una herramienta para diseñar diagramas ER.",
          respuestaCorrecta: "Lucidchart",
          opciones: ["Lucidchart", "DbSchema", "Miro"],
          feedback: "Correcto. Lucidchart es una herramienta para diseñar diagramas ER."
        },
        {
          id: "her_c2_1",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "_____________ es un SGBD relacional de código abierto.",
          respuestaCorrecta: "PostgreSQL",
          opciones: ["PostgreSQL", "MySQL", "MongoDB"],
          feedback: "Correcto. PostgreSQL es un SGBD relacional de código abierto."
        },
        {
          id: "her_c3_1",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "_____________ es una base de datos NoSQL orientada a documentos.",
          respuestaCorrecta: "MongoDB",
          opciones: ["MongoDB", "PostgreSQL", "MySQL"],
          feedback: "Correcto. MongoDB es una base de datos NoSQL orientada a documentos."
        }
      ],
      vf: [
        // ======== BÁSICO ========
        {
          id: "her_v1_1",
          tipo: "vf",
          nivel: "básico",
          pregunta: "MySQL es una base de datos NoSQL.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. MySQL es una base de datos relacional."
        },
        {
          id: "her_v2_1",
          tipo: "vf",
          nivel: "básico",
          pregunta: "PostgreSQL es un sistema de gestión de bases de datos relacional.",
          respuestaCorrecta: true,
          feedback: "Correcto. PostgreSQL es un SGBD relacional."
        },
        {
          id: "her_v3_1",
          tipo: "vf",
          nivel: "básico",
          pregunta: "MongoDB utiliza un modelo de datos basado en documentos JSON.",
          respuestaCorrecta: true,
          feedback: "Correcto. MongoDB utiliza documentos JSON para almacenar datos."
        }
      ]
    }
  }
};