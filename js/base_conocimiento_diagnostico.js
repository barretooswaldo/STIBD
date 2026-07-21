// ============================================================
// BASE DE CONOCIMIENTO PARA DIAGNÓSTICO INICIAL - 300 PREGUNTAS
// ============================================================
// 60 preguntas por módulo:
//   - 20 de Selección Múltiple (4 opciones)
//   - 20 de Completación
//   - 20 de Verdadero/Falso
// Niveles: básico, intermedio, avanzado
// ============================================================

const BASE_CONOCIMIENTO_DIAGNOSTICO = {
  "Módulo 1: Introducción a las Bases de Datos": {
    preguntas: {
      multiple: [
        // ======== BÁSICO (7 preguntas) ========
        {
          id: "intro_m_b1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Cuál es el propósito principal de un Sistema de Gestión de Bases de Datos (SGBD)?",
          opciones: ["Gestionar y organizar datos de manera eficiente", "Crear páginas web dinámicas", "Editar imágenes y videos", "Diseñar interfaces de usuario"],
          respuestaCorrecta: 0,
          feedback: "Correcto. El SGBD permite almacenar, recuperar y gestionar datos de forma estructurada."
        },
        {
          id: "intro_m_b2",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué tipo de base de datos organiza los datos en tablas compuestas por filas y columnas?",
          opciones: ["Jerárquicas", "Relacionales", "De Red", "Orientadas a Objetos"],
          respuestaCorrecta: 1,
          feedback: "Correcto. Las bases de datos relacionales utilizan tablas con filas y columnas."
        },
        {
          id: "intro_m_b3",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué significa la sigla SGBD?",
          opciones: ["Sistema de Gestión de Bases de Datos", "Software de Gráficos y Bases Digitales", "Servidor General de Búsqueda de Datos", "Sistema de Generación de Bases de Datos"],
          respuestaCorrecta: 0,
          feedback: "Correcto. SGBD significa Sistema de Gestión de Bases de Datos."
        },
        {
          id: "intro_m_b4",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Cuál es una ventaja de una base de datos centralizada frente a sistemas de archivos planos?",
          opciones: ["Mayor redundancia de datos", "Reducción de inconsistencias", "Dependencia del hardware local", "Menor costo de implementación"],
          respuestaCorrecta: 1,
          feedback: "Correcto. La centralización reduce inconsistencias y mejora el aislamiento de los datos."
        },
        {
          id: "intro_m_b5",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Cuál es una desventaja de las bases de datos NoSQL frente a las relacionales?",
          opciones: ["Menor escalabilidad horizontal", "Falta de estandarización en consultas", "Mayor consumo de energía", "Dependencia de hardware específico"],
          respuestaCorrecta: 1,
          feedback: "Correcto. Las bases de datos NoSQL carecen de un lenguaje de consulta estandarizado como SQL."
        },
        {
          id: "intro_m_b6",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es un DBMS (Database Management System)?",
          opciones: ["Un sistema para gestionar bases de datos", "Un lenguaje de programación", "Un tipo de base de datos", "Un servidor web"],
          respuestaCorrecta: 0,
          feedback: "Correcto. DBMS es un sistema para gestionar bases de datos."
        },
        {
          id: "intro_m_b7",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué tipo de datos se almacenan en una base de datos relacional?",
          opciones: ["Datos estructurados", "Datos no estructurados", "Solo imágenes", "Solo texto"],
          respuestaCorrecta: 0,
          feedback: "Correcto. Las bases de datos relacionales almacenan datos estructurados en tablas."
        },

        // ======== INTERMEDIO (7 preguntas) ========
        {
          id: "intro_m_i1",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué componente del SGBD garantiza la persistencia de los datos ante fallos del sistema?",
          opciones: ["Gestor de Recuperación", "Optimizador de Consultas", "Compilador DDL", "Gestor de Transacciones"],
          respuestaCorrecta: 0,
          feedback: "Correcto. El Gestor de Recuperación es responsable de asegurar la persistencia de los datos."
        },
        {
          id: "intro_m_i2",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué nivel de la arquitectura ANSI-SPARC describe la estructura física de almacenamiento?",
          opciones: ["Nivel Externo", "Nivel Conceptual", "Nivel Interno", "Nivel de Usuario"],
          respuestaCorrecta: 2,
          feedback: "Correcto. El nivel interno describe cómo se almacenan físicamente los datos."
        },
        {
          id: "intro_m_i3",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "La independencia lógica de datos implica que:",
          opciones: ["Si cambia el esquema físico, el conceptual no cambia", "Si cambia el conceptual, los externos no se alteran", "Los datos son independientes de las aplicaciones", "El hardware no afecta la lógica"],
          respuestaCorrecta: 1,
          feedback: "Correcto. La independencia lógica permite modificar el esquema conceptual sin afectar las aplicaciones."
        },
        {
          id: "intro_m_i4",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué característica distingue a las bases de datos NoSQL de tipo documento de las relacionales?",
          opciones: ["Usan tablas con filas fijas", "Almacenan datos en documentos como JSON", "Requieren un esquema rígido", "Utilizan SQL como lenguaje principal"],
          respuestaCorrecta: 1,
          feedback: "Correcto. Las bases de datos NoSQL de tipo documento almacenan información en documentos flexibles."
        },
        {
          id: "intro_m_i5",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es la propiedad ACID en bases de datos?",
          opciones: ["Atomicidad, Consistencia, Aislamiento, Durabilidad", "Acceso, Control, Integridad, Distribución", "Autenticación, Confidencialidad, Integridad, Disponibilidad", "Agilidad, Compatibilidad, Independencia, Distribución"],
          respuestaCorrecta: 0,
          feedback: "Correcto. ACID representa Atomicidad, Consistencia, Aislamiento y Durabilidad."
        },
        {
          id: "intro_m_i6",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es la independencia física de datos?",
          opciones: ["Permite cambiar el esquema interno sin afectar el conceptual", "Permite cambiar el conceptual sin afectar las aplicaciones", "Los datos son independientes del hardware", "Los datos son independientes del software"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La independencia física permite cambiar el esquema interno sin afectar el conceptual."
        },
        {
          id: "intro_m_i7",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es un modelo de datos en el contexto de bases de datos?",
          opciones: ["Un conjunto de conceptos para describir la estructura de los datos", "Un tipo de base de datos", "Un lenguaje de programación", "Un servidor de bases de datos"],
          respuestaCorrecta: 0,
          feedback: "Correcto. Un modelo de datos es un conjunto de conceptos para describir la estructura de los datos."

        // ======== AVANZADO (6 preguntas) ========
        },
        {
          id: "intro_m_a1",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "En bases de datos distribuidas, ¿qué es la transparencia de ubicación?",
          opciones: ["Los usuarios ven la ubicación física", "Los usuarios no necesitan conocer la ubicación física", "Los datos se replican en todas las ubicaciones", "La ubicación de los datos se cifra"],
          respuestaCorrecta: 1,
          feedback: "Correcto. La transparencia de ubicación oculta la ubicación física de los datos al usuario."
        },
        {
          id: "intro_m_a2",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué modelo de consistencia garantiza que todas las réplicas de un dato sean idénticas en todo momento?",
          opciones: ["Consistencia Eventual", "Consistencia Fuerte", "Consistencia Débil", "Consistencia de Sesión"],
          respuestaCorrecta: 1,
          feedback: "Correcto. La consistencia fuerte garantiza que todas las réplicas estén sincronizadas."
        },
        {
          id: "intro_m_a3",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué técnica se utiliza para mejorar la escalabilidad en bases de datos distribuidas?",
          opciones: ["Normalización", "Sharding (particionamiento horizontal)", "Desnormalización", "Indexación"],
          respuestaCorrecta: 1,
          feedback: "Correcto. El sharding distribuye los datos en múltiples servidores para mejorar la escalabilidad."
        },
        {
          id: "intro_m_a4",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Cuál es la principal ventaja de usar un enfoque de microservicios con bases de datos independientes?",
          opciones: ["Menor consumo de recursos", "Mayor autonomía y escalabilidad", "Menor complejidad de desarrollo", "Mejor rendimiento de consultas"],
          respuestaCorrecta: 1,
          feedback: "Correcto. Los microservicios con bases de datos independientes permiten mayor autonomía y escalabilidad."
        },
        {
          id: "intro_m_a5",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "En bases de datos, ¿qué es un 'deadlock'?",
          opciones: ["Un bloqueo temporal", "Un ciclo de espera entre transacciones", "Una operación de lectura bloqueada", "Un error de sintaxis en SQL"],
          respuestaCorrecta: 1,
          feedback: "Correcto. Un deadlock es un ciclo de espera entre transacciones que nunca se resuelve."
        },
        {
          id: "intro_m_a6",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es la consistencia eventual en bases de datos distribuidas?",
          opciones: ["Los datos siempre están sincronizados", "Los datos se sincronizan eventualmente", "Los datos nunca se sincronizan", "Los datos se sincronizan instantáneamente"],
          respuestaCorrecta: 1,
          feedback: "Correcto. La consistencia eventual garantiza que los datos se sincronicen eventualmente."
        }
      ],

      completacion: [
        // ======== BÁSICO (7 preguntas) ========
        {
          id: "intro_c_b1",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "La sigla SGBD significa ______________.",
          respuestaCorrecta: "Sistema de Gestión de Bases de Datos",
          opciones: ["Sistema de Gestión de Bases de Datos", "Software de Gráficos", "Servidor General de Búsqueda"],
          feedback: "Correcto. SGBD significa Sistema de Gestión de Bases de Datos."
        },
        {
          id: "intro_c_b2",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "Las bases de datos ______________ organizan los datos en tablas con filas y columnas.",
          respuestaCorrecta: "relacionales",
          opciones: ["relacionales", "jerárquicas", "orientadas a objetos"],
          feedback: "Correcto. Las bases de datos relacionales utilizan tablas con filas y columnas."
        },
        {
          id: "intro_c_b3",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "El propósito principal de un SGBD es ______________.",
          respuestaCorrecta: "gestionar y organizar datos",
          opciones: ["gestionar y organizar datos", "crear páginas web", "editar imágenes"],
          feedback: "Correcto. El SGBD gestiona y organiza datos de manera eficiente."
        },
        {
          id: "intro_c_b4",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "Una base de datos ______________ no utiliza el modelo de tablas relacionales.",
          respuestaCorrecta: "NoSQL",
          opciones: ["NoSQL", "relacional", "distribuida"],
          feedback: "Correcto. Las bases de datos NoSQL no utilizan el modelo de tablas relacionales."
        },
        {
          id: "intro_c_b5",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "Las siglas DBMS en inglés corresponden a ______________ en español.",
          respuestaCorrecta: "Sistema de Gestión de Bases de Datos",
          opciones: ["Sistema de Gestión de Bases de Datos", "Sistema de Base de Datos", "Gestor de Datos"],
          feedback: "Correcto. DBMS es la sigla en inglés de Sistema de Gestión de Bases de Datos."
        },
        {
          id: "intro_c_b6",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "Una base de datos ______________ almacena datos en forma de pares clave-valor.",
          respuestaCorrecta: "NoSQL",
          opciones: ["NoSQL", "relacional", "jerárquica"],
          feedback: "Correcto. Las bases de datos NoSQL pueden almacenar datos en forma de pares clave-valor."
        },
        {
          id: "intro_c_b7",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "El ______________ es el software que permite interactuar con una base de datos.",
          respuestaCorrecta: "SGBD",
          opciones: ["SGBD", "SQL", "Sistema Operativo"],
          feedback: "Correcto. El SGBD es el software que permite interactuar con una base de datos."
        },

        // ======== INTERMEDIO (7 preguntas) ========
        {
          id: "intro_c_i1",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "El ______________ es el componente del SGBD que garantiza la persistencia de los datos ante fallos.",
          respuestaCorrecta: "Gestor de Recuperación",
          opciones: ["Gestor de Recuperación", "Optimizador de Consultas", "Compilador DDL"],
          feedback: "Correcto. El Gestor de Recuperación garantiza la persistencia de los datos."
        },
        {
          id: "intro_c_i2",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "La arquitectura ______________ define tres niveles de abstracción para las bases de datos.",
          respuestaCorrecta: "ANSI-SPARC",
          opciones: ["ANSI-SPARC", "ISO-9001", "IEEE-802"],
          feedback: "Correcto. La arquitectura ANSI-SPARC define tres niveles de abstracción."
        },
        {
          id: "intro_c_i3",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "La ______________ de datos permite modificar el esquema conceptual sin afectar las aplicaciones.",
          respuestaCorrecta: "independencia lógica",
          opciones: ["independencia lógica", "independencia física", "integridad referencial"],
          feedback: "Correcto. La independencia lógica permite modificar el esquema conceptual sin afectar aplicaciones."
        },
        {
          id: "intro_c_i4",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "El modelo ______________ es el más utilizado en bases de datos NoSQL para almacenar documentos.",
          respuestaCorrecta: "de documentos",
          opciones: ["de documentos", "de grafos", "de columnas"],
          feedback: "Correcto. El modelo de documentos es el más utilizado en bases de datos NoSQL."
        },
        {
          id: "intro_c_i5",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "La propiedad ______________ de ACID garantiza que una transacción se complete completamente o no se ejecute.",
          respuestaCorrecta: "Atomicidad",
          opciones: ["Atomicidad", "Consistencia", "Durabilidad"],
          feedback: "Correcto. La Atomicidad garantiza que una transacción se complete completamente o no se ejecute."
        },
        {
          id: "intro_c_i6",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "La ______________ de datos permite cambiar la estructura de almacenamiento sin afectar el esquema conceptual.",
          respuestaCorrecta: "independencia física",
          opciones: ["independencia física", "independencia lógica", "integridad"],
          feedback: "Correcto. La independencia física permite cambiar la estructura de almacenamiento sin afectar el esquema conceptual."
        },
        {
          id: "intro_c_i7",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "El ______________ es el lenguaje estándar para consultar bases de datos relacionales.",
          respuestaCorrecta: "SQL",
          opciones: ["SQL", "NoSQL", "JSON"],
          feedback: "Correcto. SQL es el lenguaje estándar para consultar bases de datos relacionales."
        },

        // ======== AVANZADO (6 preguntas) ========
        {
          id: "intro_c_a1",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "La técnica de ______________ distribuye los datos en múltiples servidores para mejorar la escalabilidad.",
          respuestaCorrecta: "Sharding",
          opciones: ["Sharding", "Replicación", "Indexación"],
          feedback: "Correcto. El Sharding distribuye los datos en múltiples servidores."
        },
        {
          id: "intro_c_a2",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "La ______________ fuerte garantiza que todas las réplicas de un dato sean idénticas en todo momento.",
          respuestaCorrecta: "Consistencia",
          opciones: ["Consistencia", "Durabilidad", "Atomicidad"],
          feedback: "Correcto. La Consistencia fuerte garantiza que todas las réplicas estén sincronizadas."
        },
        {
          id: "intro_c_a3",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "En bases de datos distribuidas, la ______________ oculta la ubicación física de los datos al usuario.",
          respuestaCorrecta: "transparencia de ubicación",
          opciones: ["transparencia de ubicación", "transparencia de réplica", "transparencia de fragmentación"],
          feedback: "Correcto. La transparencia de ubicación oculta la ubicación física de los datos."
        },
        {
          id: "intro_c_a4",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "El ______________ es un sistema de gestión de bases de datos distribuido que usa consistencia eventual.",
          respuestaCorrecta: "DynamoDB",
          opciones: ["DynamoDB", "PostgreSQL", "MySQL"],
          feedback: "Correcto. DynamoDB es un sistema de gestión de bases de datos distribuido que usa consistencia eventual."
        },
        {
          id: "intro_c_a5",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "La ______________ es la propiedad que garantiza que los datos sean correctos y válidos en todo momento.",
          respuestaCorrecta: "integridad",
          opciones: ["integridad", "atomicidad", "durabilidad"],
          feedback: "Correcto. La integridad garantiza que los datos sean correctos y válidos en todo momento."
        },
        {
          id: "intro_c_a6",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "El ______________ es el proceso de convertir un modelo de datos conceptual en un modelo físico.",
          respuestaCorrecta: "diseño físico",
          opciones: ["diseño físico", "diseño lógico", "normalización"],
          feedback: "Correcto. El diseño físico convierte un modelo conceptual en un modelo físico."
        }
      ],

      vf: [
        // ======== BÁSICO (7 preguntas) ========
        {
          id: "intro_v_b1",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Las bases de datos relacionales organizan los datos en tablas con filas y columnas.",
          respuestaCorrecta: true,
          feedback: "Correcto. Las bases de datos relacionales utilizan tablas con filas y columnas."
        },
        {
          id: "intro_v_b2",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Un SGBD es un software que permite gestionar bases de datos.",
          respuestaCorrecta: true,
          feedback: "Correcto. El SGBD es un software que permite gestionar bases de datos."
        },
        {
          id: "intro_v_b3",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Las bases de datos NoSQL solo pueden almacenar datos no estructurados.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. Las bases de datos NoSQL pueden almacenar datos estructurados, semi-estructurados y no estructurados."
        },
        {
          id: "intro_v_b4",
          tipo: "vf",
          nivel: "básico",
          pregunta: "La redundancia en bases de datos siempre es beneficiosa.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. La redundancia puede causar anomalías de actualización y es generalmente una desventaja."
        },
        {
          id: "intro_v_b5",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Las bases de datos centralizadas son menos propensas a inconsistencias que las distribuidas.",
          respuestaCorrecta: true,
          feedback: "Correcto. Las bases de datos centralizadas tienen menos problemas de inconsistencia."
        },
        {
          id: "intro_v_b6",
          tipo: "vf",
          nivel: "básico",
          pregunta: "SQL es un lenguaje de programación para crear aplicaciones web.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. SQL es un lenguaje de consulta para bases de datos, no para crear aplicaciones web."
        },
        {
          id: "intro_v_b7",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Una base de datos puede ser gestionada por múltiples SGBD simultáneamente.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. Una base de datos generalmente es gestionada por un solo SGBD a la vez."
        },

        // ======== INTERMEDIO (7 preguntas) ========
        {
          id: "intro_v_i1",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "La independencia lógica de datos permite modificar el esquema interno sin afectar el conceptual.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. La independencia lógica permite modificar el esquema conceptual sin afectar los esquemas externos."
        },
        {
          id: "intro_v_i2",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "El Gestor de Recuperación es el componente del SGBD que garantiza la persistencia de los datos.",
          respuestaCorrecta: true,
          feedback: "Correcto. El Gestor de Recuperación garantiza la persistencia de los datos."
        },
        {
          id: "intro_v_i3",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "Las bases de datos NoSQL siempre son más rápidas que las relacionales.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. La velocidad depende del caso de uso y la configuración."
        },
        {
          id: "intro_v_i4",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "La propiedad de Atomicidad en ACID garantiza que una transacción se ejecute completamente o no se ejecute.",
          respuestaCorrecta: true,
          feedback: "Correcto. La Atomicidad garantiza la ejecución completa o nula de una transacción."
        },
        {
          id: "intro_v_i5",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "El modelo de documentos es el único tipo de base de datos NoSQL existente.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. Existen varios tipos: documentos, grafos, columnas, clave-valor."
        },
        {
          id: "intro_v_i6",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "La independencia física de datos permite cambiar el esquema interno sin afectar el conceptual.",
          respuestaCorrecta: true,
          feedback: "Correcto. La independencia física permite cambiar el esquema interno sin afectar el conceptual."
        },
        {
          id: "intro_v_i7",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "Un modelo de datos describe la estructura y las relaciones de los datos.",
          respuestaCorrecta: true,
          feedback: "Correcto. Un modelo de datos describe la estructura y las relaciones de los datos."
        },

        // ======== AVANZADO (6 preguntas) ========
        {
          id: "intro_v_a1",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "La consistencia fuerte en bases de datos distribuidas garantiza que todas las réplicas estén sincronizadas en todo momento.",
          respuestaCorrecta: true,
          feedback: "Correcto. La consistencia fuerte garantiza la sincronización de todas las réplicas."
        },
        {
          id: "intro_v_a2",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "El sharding es una técnica de particionamiento vertical de datos.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. El sharding es una técnica de particionamiento horizontal de datos."
        },
        {
          id: "intro_v_a3",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "La transparencia de ubicación permite que los usuarios accedan a los datos sin conocer su ubicación física.",
          respuestaCorrecta: true,
          feedback: "Correcto. La transparencia de ubicación oculta la ubicación física de los datos."
        },
        {
          id: "intro_v_a4",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "La consistencia eventual es más estricta que la consistencia fuerte.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. La consistencia fuerte es más estricta que la eventual."
        },
        {
          id: "intro_v_a5",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "En microservicios, cada servicio debe tener su propia base de datos.",
          respuestaCorrecta: true,
          feedback: "Correcto. En microservicios, cada servicio debe tener su propia base de datos independiente."
        },
        {
          id: "intro_v_a6",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "Un deadlock en bases de datos siempre se resuelve automáticamente.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. Los deadlocks deben ser resueltos por el SGBD o por el administrador."
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
        // ======== BÁSICO (7 preguntas) ========
        {
          id: "dis_m_b1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es un modelo entidad-relación (MER)?",
          opciones: ["Un diagrama que representa entidades, atributos y relaciones", "Un lenguaje de programación", "Un tipo de base de datos NoSQL", "Un sistema de gestión de bases de datos"],
          respuestaCorrecta: 0,
          feedback: "Correcto. El MER es un diagrama que representa entidades, atributos y sus relaciones."
        },
        {
          id: "dis_m_b2",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es una clave primaria en una tabla de bases de datos?",
          opciones: ["Un campo que identifica de forma única cada registro", "Un campo que puede ser nulo", "Un campo que almacena datos duplicados", "Un campo de solo texto"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La clave primaria identifica de forma única cada registro en una tabla."
        },
        {
          id: "dis_m_b3",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es una clave foránea (Foreign Key)?",
          opciones: ["Una clave que referencia la clave primaria de otra tabla", "Una clave que se genera automáticamente", "Una clave para encriptar datos", "Una clave que se usa solo en consultas"],
          respuestaCorrecta: 0,
          feedback: "Correcto. Una clave foránea referencia la clave primaria de otra tabla."
        },
        {
          id: "dis_m_b4",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es la normalización en el diseño de bases de datos?",
          opciones: ["El proceso de organizar datos para reducir redundancia", "El proceso de crear copias de seguridad", "El proceso de optimizar consultas SQL", "El proceso de crear índices"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La normalización organiza los datos para reducir redundancia y mejorar integridad."
        },
        {
          id: "dis_m_b5",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué representa una cardinalidad en un diagrama entidad-relación?",
          opciones: ["El número de ocurrencias en una relación entre entidades", "El número de atributos de una entidad", "El número de tablas en la base de datos", "El número de registros en una tabla"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La cardinalidad indica el número de ocurrencias en una relación entre entidades."
        },
        {
          id: "dis_m_b6",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es una entidad en un diagrama entidad-relación?",
          opciones: ["Un objeto o concepto del mundo real que se representa en la base de datos", "Una tabla de la base de datos", "Un atributo de una tabla", "Un tipo de dato"],
          respuestaCorrecta: 0,
          feedback: "Correcto. Una entidad es un objeto o concepto del mundo real que se representa en la base de datos."
        },
        {
          id: "dis_m_b7",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es un atributo en un diagrama entidad-relación?",
          opciones: ["Una característica o propiedad de una entidad", "Una tabla de la base de datos", "Una relación entre entidades", "Un tipo de dato"],
          respuestaCorrecta: 0,
          feedback: "Correcto. Un atributo es una característica o propiedad de una entidad."
        },

        // ======== INTERMEDIO (7 preguntas) ========
        {
          id: "dis_m_i1",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿En qué consiste la Primera Forma Normal (1FN)?",
          opciones: ["Todos los atributos contienen valores atómicos e indivisibles", "Todos los atributos dependen de la clave primaria", "No existen dependencias transitivas", "La tabla tiene una clave compuesta"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La 1FN requiere que todos los atributos tengan valores atómicos."
        },
        {
          id: "dis_m_i2",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es la desnormalización?",
          opciones: ["Introducir redundancia controlada para mejorar rendimiento", "Eliminar todas las formas normales", "Crear más tablas en la base de datos", "Aplicar formas normales más estrictas"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La desnormalización introduce redundancia controlada para mejorar el rendimiento."
        },
        {
          id: "dis_m_i3",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es la integridad referencial?",
          opciones: ["Un valor de clave foránea debe corresponder a una clave primaria válida", "Todos los datos deben ser consistentes", "Las claves primarias no pueden ser nulas", "Los datos deben ser únicos"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La integridad referencial asegura que los valores de clave foránea sean válidos."
        },
        {
          id: "dis_m_i4",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es un constraint CHECK en SQL?",
          opciones: ["Una restricción que valida que los datos cumplan una condición", "Una restricción que crea índices automáticos", "Una restricción que elimina datos duplicados", "Una restricción que ordena los datos"],
          respuestaCorrecta: 0,
          feedback: "Correcto. CHECK valida que los datos cumplan una condición específica."
        },
        {
          id: "dis_m_i5",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es la dependencia funcional en el contexto de normalización?",
          opciones: ["Una relación donde un atributo determina el valor de otro", "Una relación donde todos los atributos son iguales", "Una relación donde los atributos son independientes", "Una relación donde los atributos son opcionales"],
          respuestaCorrecta: 0,
          feedback: "Correcto. Una dependencia funcional ocurre cuando un atributo determina el valor de otro."
        },
        {
          id: "dis_m_i6",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es la Segunda Forma Normal (2FN)?",
          opciones: ["La tabla está en 1FN y todos los atributos no clave dependen de toda la clave primaria", "La tabla está en 1FN y no hay dependencias transitivas", "La tabla no tiene atributos multivalorados", "La tabla tiene una clave primaria simple"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La 2FN requiere que la tabla esté en 1FN y que todos los atributos no clave dependan de toda la clave primaria."
        },
        {
          id: "dis_m_i7",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es la Tercera Forma Normal (3FN)?",
          opciones: ["La tabla está en 2FN y no hay dependencias transitivas", "La tabla está en 1FN y no hay dependencias transitivas", "La tabla no tiene atributos multivalorados", "La tabla tiene una clave primaria compuesta"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La 3FN requiere que la tabla esté en 2FN y que no haya dependencias transitivas."
        },

        // ======== AVANZADO (6 preguntas) ========
        {
          id: "dis_m_a1",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es la Forma Normal de Boyce-Codd (BCNF)?",
          opciones: ["Una forma normal que elimina todas las dependencias funcionales", "Una forma normal que requiere que cada determinante sea una clave candidata", "Una forma normal que permite dependencias transitivas", "Una forma normal que no permite claves compuestas"],
          respuestaCorrecta: 1,
          feedback: "Correcto. BCNF requiere que cada determinante sea una clave candidata."
        },
        {
          id: "dis_m_a2",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es una dependencia transitiva en el contexto de normalización?",
          opciones: ["Una relación donde A→B y B→C, entonces A→C", "Una relación donde todos los atributos dependen de la clave", "Una relación donde los atributos son independientes", "Una relación donde solo hay una clave primaria"],
          respuestaCorrecta: 0,
          feedback: "Correcto. Una dependencia transitiva ocurre cuando A→B y B→C, entonces A→C."
        },
        {
          id: "dis_m_a3",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es la descomposición de relaciones en el contexto de normalización?",
          opciones: ["Dividir una tabla en varias para eliminar redundancias", "Unir varias tablas en una", "Crear índices para mejorar el rendimiento", "Agregar columnas a una tabla"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La descomposición divide una tabla en varias para eliminar redundancias."
        },
        {
          id: "dis_m_a4",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es un determinante en el contexto de dependencias funcionales?",
          opciones: ["Un atributo que determina el valor de otro atributo", "Un atributo que es determinado por otro", "Un atributo que es clave primaria", "Un atributo que es clave foránea"],
          respuestaCorrecta: 0,
          feedback: "Correcto. Un determinante es un atributo que determina el valor de otro atributo."
        },
        {
          id: "dis_m_a5",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es la dependencia multivalorada en el contexto de normalización?",
          opciones: ["Una relación donde un atributo determina múltiples valores de otro", "Una relación donde todos los atributos son iguales", "Una relación donde los atributos son independientes", "Una relación donde solo hay una clave primaria"],
          respuestaCorrecta: 0,
          feedback: "Correcto. Una dependencia multivalorada ocurre cuando un atributo determina múltiples valores de otro."
        },
        {
          id: "dis_m_a6",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es la Cuarta Forma Normal (4FN)?",
          opciones: ["Elimina las dependencias multivaloradas", "Elimina las dependencias transitivas", "Elimina las dependencias funcionales", "Elimina las claves primarias compuestas"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La 4FN elimina las dependencias multivaloradas."
        }
      ],

      completacion: [
        // ======== BÁSICO (7 preguntas) ========
        {
          id: "dis_c_b1",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "El modelo ______________ representa entidades, atributos y relaciones.",
          respuestaCorrecta: "entidad-relación",
          opciones: ["entidad-relación", "relacional", "jerárquico"],
          feedback: "Correcto. El modelo entidad-relación representa entidades, atributos y relaciones."
        },
        {
          id: "dis_c_b2",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "Una ______________ identifica de forma única cada registro en una tabla.",
          respuestaCorrecta: "clave primaria",
          opciones: ["clave primaria", "clave foránea", "índice"],
          feedback: "Correcto. La clave primaria identifica de forma única cada registro."
        },
        {
          id: "dis_c_b3",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "La ______________ organiza los datos para reducir redundancia y mejorar integridad.",
          respuestaCorrecta: "normalización",
          opciones: ["normalización", "desnormalización", "indexación"],
          feedback: "Correcto. La normalización organiza los datos para reducir redundancia."
        },
        {
          id: "dis_c_b4",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "Una ______________ es un objeto del mundo real que se representa en la base de datos.",
          respuestaCorrecta: "entidad",
          opciones: ["entidad", "atributo", "relación"],
          feedback: "Correcto. Una entidad es un objeto del mundo real que se representa en la base de datos."
        },
        {
          id: "dis_c_b5",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "Un ______________ es una característica o propiedad de una entidad.",
          respuestaCorrecta: "atributo",
          opciones: ["atributo", "entidad", "relación"],
          feedback: "Correcto. Un atributo es una característica o propiedad de una entidad."
        },
        {
          id: "dis_c_b6",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "Una ______________ es una asociación entre dos o más entidades.",
          respuestaCorrecta: "relación",
          opciones: ["relación", "entidad", "atributo"],
          feedback: "Correcto. Una relación es una asociación entre dos o más entidades."
        },
        {
          id: "dis_c_b7",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "La ______________ indica el número de ocurrencias en una relación entre entidades.",
          respuestaCorrecta: "cardinalidad",
          opciones: ["cardinalidad", "normalización", "integridad"],
          feedback: "Correcto. La cardinalidad indica el número de ocurrencias en una relación entre entidades."
        },

        // ======== INTERMEDIO (7 preguntas) ========
        {
          id: "dis_c_i1",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "La ______________ introduce redundancia controlada para mejorar el rendimiento.",
          respuestaCorrecta: "desnormalización",
          opciones: ["desnormalización", "normalización", "indexación"],
          feedback: "Correcto. La desnormalización introduce redundancia controlada para mejorar el rendimiento."
        },
        {
          id: "dis_c_i2",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "La ______________ asegura que un valor de clave foránea corresponda a una clave primaria válida.",
          respuestaCorrecta: "integridad referencial",
          opciones: ["integridad referencial", "integridad de entidad", "integridad de dominio"],
          feedback: "Correcto. La integridad referencial asegura la validez de las claves foráneas."
        },
        {
          id: "dis_c_i3",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "La ______________ es el proceso de dividir una tabla en varias para eliminar redundancias.",
          respuestaCorrecta: "descomposición",
          opciones: ["descomposición", "normalización", "desnormalización"],
          feedback: "Correcto. La descomposición divide una tabla en varias para eliminar redundancias."
        },
        {
          id: "dis_c_i4",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "La ______________ es una restricción que valida que los datos cumplan una condición.",
          respuestaCorrecta: "CHECK",
          opciones: ["CHECK", "DEFAULT", "UNIQUE"],
          feedback: "Correcto. CHECK es una restricción que valida que los datos cumplan una condición."
        },
        {
          id: "dis_c_i5",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "La ______________ es una relación donde un atributo determina el valor de otro.",
          respuestaCorrecta: "dependencia funcional",
          opciones: ["dependencia funcional", "dependencia transitiva", "dependencia multivalorada"],
          feedback: "Correcto. Una dependencia funcional ocurre cuando un atributo determina el valor de otro."
        },
        {
          id: "dis_c_i6",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "La ______________ requiere que la tabla esté en 1FN y que todos los atributos no clave dependan de toda la clave primaria.",
          respuestaCorrecta: "Segunda Forma Normal",
          opciones: ["Segunda Forma Normal", "Tercera Forma Normal", "Primera Forma Normal"],
          feedback: "Correcto. La 2FN requiere que la tabla esté en 1FN y que todos los atributos no clave dependan de toda la clave primaria."
        },
        {
          id: "dis_c_i7",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "La ______________ requiere que la tabla esté en 2FN y que no haya dependencias transitivas.",
          respuestaCorrecta: "Tercera Forma Normal",
          opciones: ["Tercera Forma Normal", "Segunda Forma Normal", "Primera Forma Normal"],
          feedback: "Correcto. La 3FN requiere que la tabla esté en 2FN y que no haya dependencias transitivas."
        },

        // ======== AVANZADO (6 preguntas) ========
        {
          id: "dis_c_a1",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "La Forma Normal de ______________ requiere que cada determinante sea una clave candidata.",
          respuestaCorrecta: "Boyce-Codd",
          opciones: ["Boyce-Codd", "Tercera", "Segunda"],
          feedback: "Correcto. BCNF requiere que cada determinante sea una clave candidata."
        },
        {
          id: "dis_c_a2",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "La ______________ elimina las dependencias multivaloradas.",
          respuestaCorrecta: "Cuarta Forma Normal",
          opciones: ["Cuarta Forma Normal", "Tercera Forma Normal", "Segunda Forma Normal"],
          feedback: "Correcto. La 4FN elimina las dependencias multivaloradas."
        },
        {
          id: "dis_c_a3",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "Un ______________ es un atributo que determina el valor de otro atributo en una dependencia funcional.",
          respuestaCorrecta: "determinante",
          opciones: ["determinante", "dependiente", "atributo"],
          feedback: "Correcto. Un determinante es un atributo que determina el valor de otro atributo."
        },
        {
          id: "dis_c_a4",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "La ______________ es una dependencia donde A→B y B→C, entonces A→C.",
          respuestaCorrecta: "dependencia transitiva",
          opciones: ["dependencia transitiva", "dependencia funcional", "dependencia multivalorada"],
          feedback: "Correcto. Una dependencia transitiva ocurre cuando A→B y B→C, entonces A→C."
        },
        {
          id: "dis_c_a5",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "La ______________ es una dependencia donde un atributo determina múltiples valores de otro.",
          respuestaCorrecta: "dependencia multivalorada",
          opciones: ["dependencia multivalorada", "dependencia funcional", "dependencia transitiva"],
          feedback: "Correcto. Una dependencia multivalorada ocurre cuando un atributo determina múltiples valores de otro."
        },
        {
          id: "dis_c_a6",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "La ______________ es el proceso de convertir un modelo de datos conceptual en un modelo lógico.",
          respuestaCorrecta: "diseño lógico",
          opciones: ["diseño lógico", "diseño físico", "normalización"],
          feedback: "Correcto. El diseño lógico convierte un modelo conceptual en un modelo lógico."
        }
      ],

      vf: [
        // ======== BÁSICO (7 preguntas) ========
        {
          id: "dis_v_b1",
          tipo: "vf",
          nivel: "básico",
          pregunta: "La normalización reduce la redundancia de datos en una base de datos.",
          respuestaCorrecta: true,
          feedback: "Correcto. La normalización reduce la redundancia de datos."
        },
        {
          id: "dis_v_b2",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Una clave foránea puede referenciar cualquier columna de otra tabla.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. Una clave foránea debe referenciar la clave primaria de otra tabla."
        },
        {
          id: "dis_v_b3",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Un diagrama entidad-relación (MER) es un modelo conceptual de una base de datos.",
          respuestaCorrecta: true,
          feedback: "Correcto. El MER es un modelo conceptual de una base de datos."
        },
        {
          id: "dis_v_b4",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Una entidad en un MER es una tabla de la base de datos.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. Una entidad es un objeto del mundo real, no una tabla."
        },
        {
          id: "dis_v_b5",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Un atributo en un MER es una característica o propiedad de una entidad.",
          respuestaCorrecta: true,
          feedback: "Correcto. Un atributo es una característica o propiedad de una entidad."
        },
        {
          id: "dis_v_b6",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Una relación en un MER es una asociación entre dos o más entidades.",
          respuestaCorrecta: true,
          feedback: "Correcto. Una relación es una asociación entre dos o más entidades."
        },
        {
          id: "dis_v_b7",
          tipo: "vf",
          nivel: "básico",
          pregunta: "La cardinalidad en un MER indica el número de atributos de una entidad.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. La cardinalidad indica el número de ocurrencias en una relación entre entidades."
        },

        // ======== INTERMEDIO (7 preguntas) ========
        {
          id: "dis_v_i1",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "La desnormalización siempre mejora el rendimiento de una base de datos.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. La desnormalización mejora el rendimiento en algunos casos pero puede causar problemas."
        },
        {
          id: "dis_v_i2",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "La integridad referencial permite que los valores de clave foránea sean nulos.",
          respuestaCorrecta: true,
          feedback: "Correcto. Los valores de clave foránea pueden ser nulos en algunos casos."
        },
        {
          id: "dis_v_i3",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "La 1FN requiere que todos los atributos tengan valores atómicos.",
          respuestaCorrecta: true,
          feedback: "Correcto. La 1FN requiere que todos los atributos tengan valores atómicos."
        },
        {
          id: "dis_v_i4",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "La 2FN requiere que la tabla esté en 1FN y que no haya dependencias transitivas.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. La 2FN requiere que la tabla esté en 1FN y que todos los atributos no clave dependan de toda la clave primaria."
        },
        {
          id: "dis_v_i5",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "La 3FN requiere que la tabla esté en 2FN y que no haya dependencias transitivas.",
          respuestaCorrecta: true,
          feedback: "Correcto. La 3FN requiere que la tabla esté en 2FN y que no haya dependencias transitivas."
        },
        {
          id: "dis_v_i6",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "Un constraint CHECK en SQL valida que los datos cumplan una condición.",
          respuestaCorrecta: true,
          feedback: "Correcto. CHECK valida que los datos cumplan una condición específica."
        },
        {
          id: "dis_v_i7",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "La dependencia funcional es una relación donde todos los atributos son iguales.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. Una dependencia funcional ocurre cuando un atributo determina el valor de otro."
        },

        // ======== AVANZADO (6 preguntas) ========
        {
          id: "dis_v_a1",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "BCNF es una forma normal más estricta que la Tercera Forma Normal (3FN).",
          respuestaCorrecta: true,
          feedback: "Correcto. BCNF es más estricta que 3FN y elimina todas las dependencias funcionales."
        },
        {
          id: "dis_v_a2",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "La 4FN elimina las dependencias transitivas.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. La 4FN elimina las dependencias multivaloradas."
        },
        {
          id: "dis_v_a3",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "Un determinante es un atributo que determina el valor de otro atributo.",
          respuestaCorrecta: true,
          feedback: "Correcto. Un determinante es un atributo que determina el valor de otro atributo."
        },
        {
          id: "dis_v_a4",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "La dependencia transitiva ocurre cuando A→B y B→C, entonces A→C.",
          respuestaCorrecta: true,
          feedback: "Correcto. Una dependencia transitiva ocurre cuando A→B y B→C, entonces A→C."
        },
        {
          id: "dis_v_a5",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "La dependencia multivalorada ocurre cuando un atributo determina múltiples valores de otro.",
          respuestaCorrecta: true,
          feedback: "Correcto. Una dependencia multivalorada ocurre cuando un atributo determina múltiples valores de otro."
        },
        {
          id: "dis_v_a6",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "El diseño lógico convierte un modelo conceptual en un modelo físico.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. El diseño lógico convierte un modelo conceptual en un modelo lógico, no físico."
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
        // ======== BÁSICO (7 preguntas) ========
        {
          id: "adm_m_b1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es la autenticación en el contexto de bases de datos?",
          opciones: ["El proceso de verificar la identidad de un usuario", "El proceso de autorizar acciones", "El proceso de cifrar datos", "El proceso de crear copias de seguridad"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La autenticación verifica la identidad del usuario."
        },
        {
          id: "adm_m_b2",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es la autorización en el contexto de bases de datos?",
          opciones: ["El proceso de otorgar permisos a un usuario", "El proceso de verificar la identidad", "El proceso de cifrar datos", "El proceso de crear copias de seguridad"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La autorización otorga permisos a un usuario autenticado."
        },
        {
          id: "adm_m_b3",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es una copia de seguridad completa en bases de datos?",
          opciones: ["Una copia de todos los datos de la base de datos", "Una copia de los datos modificados", "Una copia de solo los índices", "Una copia de las estructuras de las tablas"],
          respuestaCorrecta: 0,
          feedback: "Correcto. Una copia completa respalda todos los datos de la base de datos."
        },
        {
          id: "adm_m_b4",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es una copia de seguridad incremental?",
          opciones: ["Copia solo los cambios desde la última copia", "Copia todos los datos de la base de datos", "Copia solo los índices", "Copia solo los datos de una tabla"],
          respuestaCorrecta: 0,
          feedback: "Correcto. Una copia incremental respalda solo los cambios desde la última copia."
        },
        {
          id: "adm_m_b5",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es un rol en el contexto de administración de bases de datos?",
          opciones: ["Un conjunto de permisos asignable a usuarios", "Un usuario específico", "Una tabla de la base de datos", "Un tipo de índice"],
          respuestaCorrecta: 0,
          feedback: "Correcto. Un rol es un conjunto de permisos que se puede asignar a usuarios."
        },
        {
          id: "adm_m_b6",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es una copia de seguridad diferencial?",
          opciones: ["Copia los cambios desde la última copia completa", "Copia todos los datos", "Copia solo los índices", "Copia solo los datos de una tabla"],
          respuestaCorrecta: 0,
          feedback: "Correcto. Una copia diferencial respalda los cambios desde la última copia completa."
        },
        {
          id: "adm_m_b7",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es la gestión de usuarios en bases de datos?",
          opciones: ["El proceso de crear y administrar cuentas de usuario", "El proceso de cifrar datos", "El proceso de crear copias de seguridad", "El proceso de optimizar consultas"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La gestión de usuarios crea y administra cuentas de usuario."
        },

        // ======== INTERMEDIO (7 preguntas) ========
        {
          id: "adm_m_i1",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es GDPR en el contexto de bases de datos?",
          opciones: ["Reglamento de protección de datos de la UE", "Sistema de gestión de bases de datos", "Lenguaje de consulta", "Tipo de base de datos NoSQL"],
          respuestaCorrecta: 0,
          feedback: "Correcto. GDPR es el Reglamento General de Protección de Datos de la UE."
        },
        {
          id: "adm_m_i2",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué comando SQL se utiliza para otorgar permisos?",
          opciones: ["GRANT", "REVOKE", "CREATE", "ALTER"],
          respuestaCorrecta: 0,
          feedback: "Correcto. GRANT se utiliza para otorgar permisos a usuarios."
        },
        {
          id: "adm_m_i3",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué comando SQL se utiliza para retirar permisos?",
          opciones: ["REVOKE", "GRANT", "DROP", "DELETE"],
          respuestaCorrecta: 0,
          feedback: "Correcto. REVOKE se utiliza para retirar permisos a usuarios."
        },
        {
          id: "adm_m_i4",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué tipo de copia de seguridad es más rápida de restaurar?",
          opciones: ["Copia completa", "Copia incremental", "Copia diferencial", "Copia de solo índices"],
          respuestaCorrecta: 0,
          feedback: "Correcto. Una copia completa es la más rápida de restaurar."
        },
        {
          id: "adm_m_i5",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es HIPAA en el contexto de bases de datos?",
          opciones: ["Ley de protección de datos de salud en EE.UU.", "Sistema de gestión de bases de datos", "Lenguaje de consulta", "Tipo de base de datos NoSQL"],
          respuestaCorrecta: 0,
          feedback: "Correcto. HIPAA es la ley de portabilidad y responsabilidad de seguros de salud de EE.UU."
        },
        {
          id: "adm_m_i6",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es la autenticación multifactor en bases de datos?",
          opciones: ["El uso de múltiples métodos para verificar la identidad", "El uso de una sola contraseña", "El uso de cifrado", "El uso de copias de seguridad"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La autenticación multifactor usa múltiples métodos para verificar la identidad."
        },
        {
          id: "adm_m_i7",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es la encriptación de datos en reposo?",
          opciones: ["Encriptar los datos almacenados en disco", "Encriptar los datos en tránsito", "Encriptar los datos en memoria", "Encriptar los datos en copias de seguridad"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La encriptación de datos en reposo encripta los datos almacenados en disco."
        },

        // ======== AVANZADO (6 preguntas) ========
        {
          id: "adm_m_a1",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es el principio de mínimo privilegio en administración de bases de datos?",
          opciones: ["Otorgar solo los permisos necesarios para realizar las tareas", "Otorgar todos los permisos posibles", "No otorgar ningún permiso", "Otorgar permisos temporales"],
          respuestaCorrecta: 0,
          feedback: "Correcto. El principio de mínimo privilegio otorga solo los permisos necesarios."
        },
        {
          id: "adm_m_a2",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es el cifrado de datos en tránsito?",
          opciones: ["Encriptar los datos que viajan por la red", "Encriptar los datos almacenados en disco", "Encriptar los datos en memoria", "Encriptar los datos en copias de seguridad"],
          respuestaCorrecta: 0,
          feedback: "Correcto. El cifrado de datos en tránsito encripta los datos que viajan por la red."
        },
        {
          id: "adm_m_a3",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es el auditoría de bases de datos?",
          opciones: ["El proceso de registrar y analizar las actividades de la base de datos", "El proceso de crear copias de seguridad", "El proceso de optimizar consultas", "El proceso de gestionar usuarios"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La auditoría registra y analiza las actividades de la base de datos."
        },
        {
          id: "adm_m_a4",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es la recuperación punto en el tiempo en bases de datos?",
          opciones: ["Restaurar la base de datos a un estado anterior en el tiempo", "Restaurar la base de datos al estado actual", "Restaurar la base de datos al estado de la última copia de seguridad", "Restaurar la base de datos al estado inicial"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La recuperación punto en el tiempo restaura la base de datos a un estado anterior en el tiempo."
        },
        {
          id: "adm_m_a5",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es la encriptación de datos en uso?",
          opciones: ["Encriptar los datos mientras se procesan en memoria", "Encriptar los datos almacenados en disco", "Encriptar los datos en tránsito", "Encriptar los datos en copias de seguridad"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La encriptación de datos en uso encripta los datos mientras se procesan en memoria."
        },
        {
          id: "adm_m_a6",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es el masking de datos (enmascaramiento)?",
          opciones: ["Ocultar datos sensibles en entornos no productivos", "Eliminar datos sensibles", "Cifrar datos sensibles", "Copiar datos sensibles"],
          respuestaCorrecta: 0,
          feedback: "Correcto. El masking oculta datos sensibles en entornos no productivos."
        }
      ],

      completacion: [
        // ======== BÁSICO (7 preguntas) ========
        {
          id: "adm_c_b1",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "La ______________ verifica la identidad de un usuario en la base de datos.",
          respuestaCorrecta: "autenticación",
          opciones: ["autenticación", "autorización", "encriptación"],
          feedback: "Correcto. La autenticación verifica la identidad del usuario."
        },
        {
          id: "adm_c_b2",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "La ______________ otorga permisos a un usuario autenticado.",
          respuestaCorrecta: "autorización",
          opciones: ["autorización", "autenticación", "encriptación"],
          feedback: "Correcto. La autorización otorga permisos a un usuario autenticado."
        },
        {
          id: "adm_c_b3",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "Un ______________ es un conjunto de permisos asignables a usuarios.",
          respuestaCorrecta: "rol",
          opciones: ["rol", "usuario", "permiso"],
          feedback: "Correcto. Un rol es un conjunto de permisos asignables a usuarios."
        },
        {
          id: "adm_c_b4",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "Una ______________ completa respalda todos los datos de la base de datos.",
          respuestaCorrecta: "copia de seguridad",
          opciones: ["copia de seguridad", "copia incremental", "copia diferencial"],
          feedback: "Correcto. Una copia de seguridad completa respalda todos los datos."
        },
        {
          id: "adm_c_b5",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "La ______________ incremental respalda solo los cambios desde la última copia.",
          respuestaCorrecta: "copia",
          opciones: ["copia", "copia completa", "copia diferencial"],
          feedback: "Correcto. La copia incremental respalda solo los cambios desde la última copia."
        },
        {
          id: "adm_c_b6",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "_____________ es el proceso de crear y administrar cuentas de usuario.",
          respuestaCorrecta: "Gestión de usuarios",
          opciones: ["Gestión de usuarios", "Gestión de roles", "Gestión de permisos"],
          feedback: "Correcto. La gestión de usuarios crea y administra cuentas de usuario."
        },
        {
          id: "adm_c_b7",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "La ______________ diferencial respalda los cambios desde la última copia completa.",
          respuestaCorrecta: "copia",
          opciones: ["copia", "copia completa", "copia incremental"],
          feedback: "Correcto. La copia diferencial respalda los cambios desde la última copia completa."
        },

        // ======== INTERMEDIO (7 preguntas) ========
        {
          id: "adm_c_i1",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "El ______________ es el reglamento de protección de datos de la Unión Europea.",
          respuestaCorrecta: "GDPR",
          opciones: ["GDPR", "HIPAA", "PCI DSS"],
          feedback: "Correcto. GDPR es el Reglamento General de Protección de Datos de la UE."
        },
        {
          id: "adm_c_i2",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "_____________ se utiliza para otorgar permisos a usuarios en SQL.",
          respuestaCorrecta: "GRANT",
          opciones: ["GRANT", "REVOKE", "CREATE"],
          feedback: "Correcto. GRANT se utiliza para otorgar permisos a usuarios."
        },
        {
          id: "adm_c_i3",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "_____________ se utiliza para retirar permisos a usuarios en SQL.",
          respuestaCorrecta: "REVOKE",
          opciones: ["REVOKE", "GRANT", "DROP"],
          feedback: "Correcto. REVOKE se utiliza para retirar permisos a usuarios."
        },
        {
          id: "adm_c_i4",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "La ______________ es la ley de protección de datos de salud en EE.UU.",
          respuestaCorrecta: "HIPAA",
          opciones: ["HIPAA", "GDPR", "PCI DSS"],
          feedback: "Correcto. HIPAA es la ley de protección de datos de salud en EE.UU."
        },
        {
          id: "adm_c_i5",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "La ______________ multifactor usa múltiples métodos para verificar la identidad.",
          respuestaCorrecta: "autenticación",
          opciones: ["autenticación", "autorización", "encriptación"],
          feedback: "Correcto. La autenticación multifactor usa múltiples métodos."
        },
        {
          id: "adm_c_i6",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "La ______________ de datos en reposo encripta los datos almacenados en disco.",
          respuestaCorrecta: "encriptación",
          opciones: ["encriptación", "desencriptación", "cifrado"],
          feedback: "Correcto. La encriptación de datos en reposo encripta los datos almacenados en disco."
        },
        {
          id: "adm_c_i7",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "La ______________ de datos en tránsito encripta los datos que viajan por la red.",
          respuestaCorrecta: "encriptación",
          opciones: ["encriptación", "desencriptación", "cifrado"],
          feedback: "Correcto. La encriptación de datos en tránsito encripta los datos que viajan por la red."
        },

        // ======== AVANZADO (6 preguntas) ========
        {
          id: "adm_c_a1",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "El principio de ______________ privilegio otorga solo los permisos necesarios.",
          respuestaCorrecta: "mínimo",
          opciones: ["mínimo", "máximo", "temporal"],
          feedback: "Correcto. El principio de mínimo privilegio otorga solo los permisos necesarios."
        },
        {
          id: "adm_c_a2",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "La ______________ registra y analiza las actividades de la base de datos.",
          respuestaCorrecta: "auditoría",
          opciones: ["auditoría", "encriptación", "autenticación"],
          feedback: "Correcto. La auditoría registra y analiza las actividades de la base de datos."
        },
        {
          id: "adm_c_a3",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "La recuperación ______________ restaura la base de datos a un estado anterior.",
          respuestaCorrecta: "punto en el tiempo",
          opciones: ["punto en el tiempo", "completa", "incremental"],
          feedback: "Correcto. La recuperación punto en el tiempo restaura a un estado anterior."
        },
        {
          id: "adm_c_a4",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "El ______________ de datos oculta datos sensibles en entornos no productivos.",
          respuestaCorrecta: "masking",
          opciones: ["masking", "cifrado", "encriptación"],
          feedback: "Correcto. El masking oculta datos sensibles en entornos no productivos."
        },
        {
          id: "adm_c_a5",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "La ______________ de datos en uso encripta los datos mientras se procesan en memoria.",
          respuestaCorrecta: "encriptación",
          opciones: ["encriptación", "desencriptación", "cifrado"],
          feedback: "Correcto. La encriptación de datos en uso encripta los datos mientras se procesan en memoria."
        },
        {
          id: "adm_c_a6",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "El ______________ de mínimo privilegio es un principio de seguridad en bases de datos.",
          respuestaCorrecta: "principio",
          opciones: ["principio", "rol", "permiso"],
          feedback: "Correcto. El principio de mínimo privilegio es un principio de seguridad en bases de datos."
        }
      ],

      vf: [
        // ======== BÁSICO (7 preguntas) ========
        {
          id: "adm_v_b1",
          tipo: "vf",
          nivel: "básico",
          pregunta: "GRANT se utiliza para retirar permisos a usuarios.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. GRANT se utiliza para otorgar permisos, REVOKE para retirarlos."
        },
        {
          id: "adm_v_b2",
          tipo: "vf",
          nivel: "básico",
          pregunta: "REVOKE se utiliza para otorgar permisos a usuarios.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. REVOKE retira permisos, GRANT los otorga."
        },
        {
          id: "adm_v_b3",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Una copia de seguridad completa respalda todos los datos de la base de datos.",
          respuestaCorrecta: true,
          feedback: "Correcto. Una copia completa respalda todos los datos de la base de datos."
        },
        {
          id: "adm_v_b4",
          tipo: "vf",
          nivel: "básico",
          pregunta: "La autenticación es el proceso de otorgar permisos a un usuario.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. La autenticación verifica la identidad, la autorización otorga permisos."
        },
        {
          id: "adm_v_b5",
          tipo: "vf",
          nivel: "básico",
          pregunta: "La autorización es el proceso de verificar la identidad de un usuario.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. La autorización otorga permisos, la autenticación verifica la identidad."
        },
        {
          id: "adm_v_b6",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Un rol es un conjunto de permisos asignable a usuarios.",
          respuestaCorrecta: true,
          feedback: "Correcto. Un rol es un conjunto de permisos asignable a usuarios."
        },
        {
          id: "adm_v_b7",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Una copia de seguridad incremental respalda todos los datos de la base de datos.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. Una copia incremental respalda solo los cambios desde la última copia."
        },

        // ======== INTERMEDIO (7 preguntas) ========
        {
          id: "adm_v_i1",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "GDPR es el reglamento de protección de datos de la Unión Europea.",
          respuestaCorrecta: true,
          feedback: "Correcto. GDPR es el Reglamento General de Protección de Datos de la UE."
        },
        {
          id: "adm_v_i2",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "HIPAA es una ley de protección de datos en la Unión Europea.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. HIPAA es una ley de protección de datos de salud en EE.UU."
        },
        {
          id: "adm_v_i3",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "La autenticación multifactor usa múltiples métodos para verificar la identidad.",
          respuestaCorrecta: true,
          feedback: "Correcto. La autenticación multifactor usa múltiples métodos para verificar la identidad."
        },
        {
          id: "adm_v_i4",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "La encriptación de datos en reposo encripta los datos que viajan por la red.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. La encriptación de datos en reposo encripta los datos almacenados en disco."
        },
        {
          id: "adm_v_i5",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "La encriptación de datos en tránsito encripta los datos que viajan por la red.",
          respuestaCorrecta: true,
          feedback: "Correcto. La encriptación de datos en tránsito encripta los datos que viajan por la red."
        },
        {
          id: "adm_v_i6",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "Una copia diferencial respalda los cambios desde la última copia completa.",
          respuestaCorrecta: true,
          feedback: "Correcto. Una copia diferencial respalda los cambios desde la última copia completa."
        },
        {
          id: "adm_v_i7",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "GRANT se utiliza para retirar permisos y REVOKE para otorgarlos.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. GRANT otorga permisos y REVOKE los retira."
        },

        // ======== AVANZADO (6 preguntas) ========
        {
          id: "adm_v_a1",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "El principio de mínimo privilegio otorga solo los permisos necesarios.",
          respuestaCorrecta: true,
          feedback: "Correcto. El principio de mínimo privilegio otorga solo los permisos necesarios."
        },
        {
          id: "adm_v_a2",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "La auditoría de bases de datos registra y analiza las actividades de la base de datos.",
          respuestaCorrecta: true,
          feedback: "Correcto. La auditoría registra y analiza las actividades de la base de datos."
        },
        {
          id: "adm_v_a3",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "La recuperación punto en el tiempo restaura la base de datos al estado actual.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. La recuperación punto en el tiempo restaura a un estado anterior."
        },
        {
          id: "adm_v_a4",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "El masking de datos oculta datos sensibles en entornos no productivos.",
          respuestaCorrecta: true,
          feedback: "Correcto. El masking oculta datos sensibles en entornos no productivos."
        },
        {
          id: "adm_v_a5",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "La encriptación de datos en uso encripta los datos almacenados en disco.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. La encriptación de datos en uso encripta los datos mientras se procesan en memoria."
        },
        {
          id: "adm_v_a6",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "El principio de mínimo privilegio es un principio de seguridad en bases de datos.",
          respuestaCorrecta: true,
          feedback: "Correcto. El principio de mínimo privilegio es un principio de seguridad en bases de datos."
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
        // ======== BÁSICO (7 preguntas) ========
        {
          id: "opt_m_b1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es un índice en una base de datos?",
          opciones: ["Una estructura que acelera la búsqueda de datos", "Una tabla que almacena datos", "Un tipo de base de datos", "Un lenguaje de consulta"],
          respuestaCorrecta: 0,
          feedback: "Correcto. Un índice acelera la búsqueda de datos en una base de datos."
        },
        {
          id: "opt_m_b2",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es la optimización de consultas?",
          opciones: ["El proceso de mejorar el rendimiento de las consultas SQL", "El proceso de crear copias de seguridad", "El proceso de normalizar una base de datos", "El proceso de crear índices"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La optimización de consultas mejora el rendimiento de las consultas SQL."
        },
        {
          id: "opt_m_b3",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es un plan de ejecución en bases de datos?",
          opciones: ["La estrategia que usa el SGBD para ejecutar una consulta", "El diagrama de la base de datos", "El esquema de la base de datos", "El lenguaje de consulta"],
          respuestaCorrecta: 0,
          feedback: "Correcto. Un plan de ejecución es la estrategia que usa el SGBD para ejecutar una consulta."
        },
        {
          id: "opt_m_b4",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es una vista en bases de datos?",
          opciones: ["Una tabla virtual que se crea a partir de una consulta", "Una tabla física que almacena datos", "Un tipo de índice", "Un tipo de base de datos"],
          respuestaCorrecta: 0,
          feedback: "Correcto. Una vista es una tabla virtual que se crea a partir de una consulta."
        },
        {
          id: "opt_m_b5",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es un procedimiento almacenado?",
          opciones: ["Un conjunto de instrucciones SQL almacenadas en el servidor", "Una tabla virtual", "Un tipo de índice", "Un tipo de base de datos"],
          respuestaCorrecta: 0,
          feedback: "Correcto. Un procedimiento almacenado es un conjunto de instrucciones SQL almacenadas en el servidor."
        },
        {
          id: "opt_m_b6",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es el particionamiento en bases de datos?",
          opciones: ["Dividir una tabla grande en partes más pequeñas", "Unir varias tablas pequeñas", "Crear índices", "Optimizar consultas"],
          respuestaCorrecta: 0,
          feedback: "Correcto. El particionamiento divide una tabla grande en partes más pequeñas."
        },
        {
          id: "opt_m_b7",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es la configuración del servidor en optimización?",
          opciones: ["Ajustar los parámetros del servidor para mejorar el rendimiento", "Crear copias de seguridad", "Normalizar la base de datos", "Crear índices"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La configuración del servidor ajusta los parámetros para mejorar el rendimiento."
        },

        // ======== INTERMEDIO (7 preguntas) ========
        {
          id: "opt_m_i1",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es el análisis de planes de ejecución?",
          opciones: ["El proceso de revisar cómo el SGBD ejecuta una consulta", "El proceso de crear índices", "El proceso de normalizar la base de datos", "El proceso de crear copias de seguridad"],
          respuestaCorrecta: 0,
          feedback: "Correcto. El análisis de planes de ejecución revisa cómo el SGBD ejecuta una consulta."
        },
        {
          id: "opt_m_i2",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué tipo de índice es más adecuado para consultas de rango?",
          opciones: ["Índice B-tree", "Índice Hash", "Índice de texto completo", "Índice de mapa de bits"],
          respuestaCorrecta: 0,
          feedback: "Correcto. El índice B-tree es más adecuado para consultas de rango."
        },
        {
          id: "opt_m_i3",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es la denormalización?",
          opciones: ["Introducir redundancia controlada para mejorar el rendimiento", "Eliminar todas las formas normales", "Crear más tablas", "Aplicar formas normales más estrictas"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La denormalización introduce redundancia controlada para mejorar el rendimiento."
        },
        {
          id: "opt_m_i4",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es el uso de índices en consultas?",
          opciones: ["Utilizar índices para acelerar la búsqueda de datos", "Crear índices automáticos", "Eliminar índices", "Optimizar consultas"],
          respuestaCorrecta: 0,
          feedback: "Correcto. El uso de índices acelera la búsqueda de datos."
        },
        {
          id: "opt_m_i5",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es la configuración del servidor de base de datos?",
          opciones: ["Ajustar los parámetros del servidor para mejorar el rendimiento", "Crear copias de seguridad", "Normalizar la base de datos", "Crear índices"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La configuración del servidor ajusta los parámetros para mejorar el rendimiento."
        },
        {
          id: "opt_m_i6",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es el particionamiento horizontal?",
          opciones: ["Dividir una tabla por filas", "Dividir una tabla por columnas", "Unir varias tablas", "Crear índices"],
          respuestaCorrecta: 0,
          feedback: "Correcto. El particionamiento horizontal divide una tabla por filas."
        },
        {
          id: "opt_m_i7",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es el particionamiento vertical?",
          opciones: ["Dividir una tabla por columnas", "Dividir una tabla por filas", "Unir varias tablas", "Crear índices"],
          respuestaCorrecta: 0,
          feedback: "Correcto. El particionamiento vertical divide una tabla por columnas."
        },

        // ======== AVANZADO (6 preguntas) ========
        {
          id: "opt_m_a1",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es un índice compuesto?",
          opciones: ["Un índice que incluye múltiples columnas", "Un índice que incluye una sola columna", "Un índice que incluye todas las columnas", "Un índice que no incluye columnas"],
          respuestaCorrecta: 0,
          feedback: "Correcto. Un índice compuesto incluye múltiples columnas."
        },
        {
          id: "opt_m_a2",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es el análisis de costo en optimización de consultas?",
          opciones: ["Evaluar el costo de diferentes estrategias de ejecución", "Evaluar el costo de crear índices", "Evaluar el costo de normalizar", "Evaluar el costo de desnormalizar"],
          respuestaCorrecta: 0,
          feedback: "Correcto. El análisis de costo evalúa el costo de diferentes estrategias de ejecución."
        },
        {
          id: "opt_m_a3",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es el query tuning en bases de datos?",
          opciones: ["El proceso de ajustar consultas para mejorar el rendimiento", "El proceso de crear índices", "El proceso de normalizar", "El proceso de desnormalizar"],
          respuestaCorrecta: 0,
          feedback: "Correcto. El query tuning ajusta consultas para mejorar el rendimiento."
        },
        {
          id: "opt_m_a4",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es el particionamiento por rango?",
          opciones: ["Dividir una tabla basada en un rango de valores", "Dividir una tabla basada en una lista de valores", "Dividir una tabla basada en una función hash", "Dividir una tabla basada en el tiempo"],
          respuestaCorrecta: 0,
          feedback: "Correcto. El particionamiento por rango divide una tabla basada en un rango de valores."
        },
        {
          id: "opt_m_a5",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es el particionamiento por lista?",
          opciones: ["Dividir una tabla basada en una lista de valores", "Dividir una tabla basada en un rango de valores", "Dividir una tabla basada en una función hash", "Dividir una tabla basada en el tiempo"],
          respuestaCorrecta: 0,
          feedback: "Correcto. El particionamiento por lista divide una tabla basada en una lista de valores."
        },
        {
          id: "opt_m_a6",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es el particionamiento por hash?",
          opciones: ["Dividir una tabla basada en una función hash", "Dividir una tabla basada en un rango de valores", "Dividir una tabla basada en una lista de valores", "Dividir una tabla basada en el tiempo"],
          respuestaCorrecta: 0,
          feedback: "Correcto. El particionamiento por hash divide una tabla basada en una función hash."
        }
      ],

      completacion: [
        // ======== BÁSICO (7 preguntas) ========
        {
          id: "opt_c_b1",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "Un ______________ acelera la búsqueda de datos en una base de datos.",
          respuestaCorrecta: "índice",
          opciones: ["índice", "procedimiento", "vista"],
          feedback: "Correcto. Un índice acelera la búsqueda de datos en una base de datos."
        },
        {
          id: "opt_c_b2",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "La ______________ mejora el rendimiento de las consultas SQL.",
          respuestaCorrecta: "optimización",
          opciones: ["optimización", "normalización", "indexación"],
          feedback: "Correcto. La optimización mejora el rendimiento de las consultas SQL."
        },
        {
          id: "opt_c_b3",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "Un ______________ es un conjunto de instrucciones SQL almacenadas en el servidor.",
          respuestaCorrecta: "procedimiento almacenado",
          opciones: ["procedimiento almacenado", "índice", "vista"],
          feedback: "Correcto. Un procedimiento almacenado es un conjunto de instrucciones SQL almacenadas en el servidor."
        },
        {
          id: "opt_c_b4",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "Una ______________ es una tabla virtual que se crea a partir de una consulta.",
          respuestaCorrecta: "vista",
          opciones: ["vista", "tabla", "índice"],
          feedback: "Correcto. Una vista es una tabla virtual que se crea a partir de una consulta."
        },
        {
          id: "opt_c_b5",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "El ______________ es la estrategia que usa el SGBD para ejecutar una consulta.",
          respuestaCorrecta: "plan de ejecución",
          opciones: ["plan de ejecución", "índice", "procedimiento"],
          feedback: "Correcto. El plan de ejecución es la estrategia que usa el SGBD para ejecutar una consulta."
        },
        {
          id: "opt_c_b6",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "La ______________ divide una tabla grande en partes más pequeñas.",
          respuestaCorrecta: "particionamiento",
          opciones: ["particionamiento", "normalización", "desnormalización"],
          feedback: "Correcto. El particionamiento divide una tabla grande en partes más pequeñas."
        },
        {
          id: "opt_c_b7",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "La ______________ del servidor ajusta los parámetros para mejorar el rendimiento.",
          respuestaCorrecta: "configuración",
          opciones: ["configuración", "optimización", "normalización"],
          feedback: "Correcto. La configuración del servidor ajusta los parámetros para mejorar el rendimiento."
        },

        // ======== INTERMEDIO (7 preguntas) ========
        {
          id: "opt_c_i1",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "El análisis de ______________ revisa cómo el SGBD ejecuta una consulta.",
          respuestaCorrecta: "planes de ejecución",
          opciones: ["planes de ejecución", "índices", "tablas"],
          feedback: "Correcto. El análisis de planes de ejecución revisa cómo el SGBD ejecuta una consulta."
        },
        {
          id: "opt_c_i2",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "El índice ______________ es más adecuado para consultas de rango.",
          respuestaCorrecta: "B-tree",
          opciones: ["B-tree", "Hash", "Mapa de bits"],
          feedback: "Correcto. El índice B-tree es más adecuado para consultas de rango."
        },
        {
          id: "opt_c_i3",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "La ______________ introduce redundancia controlada para mejorar el rendimiento.",
          respuestaCorrecta: "denormalización",
          opciones: ["denormalización", "normalización", "indexación"],
          feedback: "Correcto. La denormalización introduce redundancia controlada para mejorar el rendimiento."
        },
        {
          id: "opt_c_i4",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "El ______________ horizontal divide una tabla por filas.",
          respuestaCorrecta: "particionamiento",
          opciones: ["particionamiento", "indexación", "normalización"],
          feedback: "Correcto. El particionamiento horizontal divide una tabla por filas."
        },
        {
          id: "opt_c_i5",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "El ______________ vertical divide una tabla por columnas.",
          respuestaCorrecta: "particionamiento",
          opciones: ["particionamiento", "indexación", "normalización"],
          feedback: "Correcto. El particionamiento vertical divide una tabla por columnas."
        },
        {
          id: "opt_c_i6",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "La ______________ del servidor ajusta los parámetros para mejorar el rendimiento.",
          respuestaCorrecta: "configuración",
          opciones: ["configuración", "optimización", "normalización"],
          feedback: "Correcto. La configuración del servidor ajusta los parámetros para mejorar el rendimiento."
        },
        {
          id: "opt_c_i7",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "El ______________ de índices acelera la búsqueda de datos en una base de datos.",
          respuestaCorrecta: "uso",
          opciones: ["uso", "creación", "eliminación"],
          feedback: "Correcto. El uso de índices acelera la búsqueda de datos."
        },

        // ======== AVANZADO (6 preguntas) ========
        {
          id: "opt_c_a1",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "Un índice ______________ incluye múltiples columnas.",
          respuestaCorrecta: "compuesto",
          opciones: ["compuesto", "simple", "único"],
          feedback: "Correcto. Un índice compuesto incluye múltiples columnas."
        },
        {
          id: "opt_c_a2",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "El análisis de ______________ evalúa el costo de diferentes estrategias de ejecución.",
          respuestaCorrecta: "costo",
          opciones: ["costo", "índices", "tablas"],
          feedback: "Correcto. El análisis de costo evalúa el costo de diferentes estrategias de ejecución."
        },
        {
          id: "opt_c_a3",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "El ______________ tuning ajusta consultas para mejorar el rendimiento.",
          respuestaCorrecta: "query",
          opciones: ["query", "índice", "tabla"],
          feedback: "Correcto. El query tuning ajusta consultas para mejorar el rendimiento."
        },
        {
          id: "opt_c_a4",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "El particionamiento por ______________ divide una tabla basada en un rango de valores.",
          respuestaCorrecta: "rango",
          opciones: ["rango", "lista", "hash"],
          feedback: "Correcto. El particionamiento por rango divide una tabla basada en un rango de valores."
        },
        {
          id: "opt_c_a5",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "El particionamiento por ______________ divide una tabla basada en una lista de valores.",
          respuestaCorrecta: "lista",
          opciones: ["lista", "rango", "hash"],
          feedback: "Correcto. El particionamiento por lista divide una tabla basada en una lista de valores."
        },
        {
          id: "opt_c_a6",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "El particionamiento por ______________ divide una tabla basada en una función hash.",
          respuestaCorrecta: "hash",
          opciones: ["hash", "rango", "lista"],
          feedback: "Correcto. El particionamiento por hash divide una tabla basada en una función hash."
        }
      ],

      vf: [
        // ======== BÁSICO (7 preguntas) ========
        {
          id: "opt_v_b1",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Los índices siempre mejoran el rendimiento de las consultas.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. Los índices mejoran el rendimiento de consultas de lectura pero pueden ralentizar las escrituras."
        },
        {
          id: "opt_v_b2",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Una vista es una tabla virtual que se crea a partir de una consulta.",
          respuestaCorrecta: true,
          feedback: "Correcto. Una vista es una tabla virtual que se crea a partir de una consulta."
        },
        {
          id: "opt_v_b3",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Los procedimientos almacenados pueden mejorar el rendimiento al reducir el tráfico de red.",
          respuestaCorrecta: true,
          feedback: "Correcto. Los procedimientos almacenados reducen el tráfico de red."
        },
        {
          id: "opt_v_b4",
          tipo: "vf",
          nivel: "básico",
          pregunta: "La optimización de consultas siempre mejora el rendimiento.",
          respuestaCorrecta: true,
          feedback: "Correcto. La optimización de consultas siempre mejora el rendimiento."
        },
        {
          id: "opt_v_b5",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Un plan de ejecución es la estrategia que usa el SGBD para ejecutar una consulta.",
          respuestaCorrecta: true,
          feedback: "Correcto. Un plan de ejecución es la estrategia que usa el SGBD para ejecutar una consulta."
        },
        {
          id: "opt_v_b6",
          tipo: "vf",
          nivel: "básico",
          pregunta: "El particionamiento siempre mejora el rendimiento de todas las consultas.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. El particionamiento mejora el rendimiento en algunos casos pero no en todos."
        },
        {
          id: "opt_v_b7",
          tipo: "vf",
          nivel: "básico",
          pregunta: "La configuración del servidor puede mejorar el rendimiento de la base de datos.",
          respuestaCorrecta: true,
          feedback: "Correcto. La configuración del servidor puede mejorar el rendimiento de la base de datos."
        },

        // ======== INTERMEDIO (7 preguntas) ========
        {
          id: "opt_v_i1",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "El análisis de planes de ejecución es el proceso de revisar cómo el SGBD ejecuta una consulta.",
          respuestaCorrecta: true,
          feedback: "Correcto. El análisis de planes de ejecución revisa cómo el SGBD ejecuta una consulta."
        },
        {
          id: "opt_v_i2",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "El índice B-tree es más adecuado para consultas de rango.",
          respuestaCorrecta: true,
          feedback: "Correcto. El índice B-tree es más adecuado para consultas de rango."
        },
        {
          id: "opt_v_i3",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "La denormalización introduce redundancia controlada para mejorar el rendimiento.",
          respuestaCorrecta: true,
          feedback: "Correcto. La denormalización introduce redundancia controlada para mejorar el rendimiento."
        },
        {
          id: "opt_v_i4",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "El particionamiento horizontal divide una tabla por columnas.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. El particionamiento horizontal divide una tabla por filas."
        },
        {
          id: "opt_v_i5",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "El particionamiento vertical divide una tabla por columnas.",
          respuestaCorrecta: true,
          feedback: "Correcto. El particionamiento vertical divide una tabla por columnas."
        },
        {
          id: "opt_v_i6",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "La configuración del servidor es irrelevante para el rendimiento de la base de datos.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. La configuración del servidor es importante para el rendimiento."
        },
        {
          id: "opt_v_i7",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "El uso de índices siempre acelera la búsqueda de datos.",
          respuestaCorrecta: true,
          feedback: "Correcto. El uso de índices siempre acelera la búsqueda de datos."
        },

        // ======== AVANZADO (6 preguntas) ========
        {
          id: "opt_v_a1",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "Un índice compuesto incluye múltiples columnas.",
          respuestaCorrecta: true,
          feedback: "Correcto. Un índice compuesto incluye múltiples columnas."
        },
        {
          id: "opt_v_a2",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "El análisis de costo evalúa el costo de diferentes estrategias de ejecución.",
          respuestaCorrecta: true,
          feedback: "Correcto. El análisis de costo evalúa el costo de diferentes estrategias de ejecución."
        },
        {
          id: "opt_v_a3",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "El query tuning ajusta consultas para mejorar el rendimiento.",
          respuestaCorrecta: true,
          feedback: "Correcto. El query tuning ajusta consultas para mejorar el rendimiento."
        },
        {
          id: "opt_v_a4",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "El particionamiento por rango divide una tabla basada en una lista de valores.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. El particionamiento por rango divide una tabla basada en un rango de valores."
        },
        {
          id: "opt_v_a5",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "El particionamiento por lista divide una tabla basada en una lista de valores.",
          respuestaCorrecta: true,
          feedback: "Correcto. El particionamiento por lista divide una tabla basada en una lista de valores."
        },
        {
          id: "opt_v_a6",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "El particionamiento por hash divide una tabla basada en un rango de valores.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. El particionamiento por hash divide una tabla basada en una función hash."
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
        // ======== BÁSICO (7 preguntas) ========
        {
          id: "her_m_b1",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es Lucidchart en el contexto de bases de datos?",
          opciones: ["Herramienta para diseñar diagramas ER", "Base de datos NoSQL", "Sistema de gestión", "Lenguaje de consulta"],
          respuestaCorrecta: 0,
          feedback: "Correcto. Lucidchart es una herramienta para diseñar diagramas ER."
        },
        {
          id: "her_m_b2",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es PostgreSQL?",
          opciones: ["Sistema de gestión de bases de datos relacional", "Base de datos NoSQL", "Lenguaje de programación", "Herramienta de diseño"],
          respuestaCorrecta: 0,
          feedback: "Correcto. PostgreSQL es un SGBD relacional."
        },
        {
          id: "her_m_b3",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es MySQL?",
          opciones: ["Sistema de gestión de bases de datos relacional", "Base de datos NoSQL", "Lenguaje de programación", "Herramienta de diseño"],
          respuestaCorrecta: 0,
          feedback: "Correcto. MySQL es un SGBD relacional."
        },
        {
          id: "her_m_b4",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es MongoDB?",
          opciones: ["Base de datos NoSQL orientada a documentos", "Sistema de gestión relacional", "Lenguaje de programación", "Herramienta de diseño"],
          respuestaCorrecta: 0,
          feedback: "Correcto. MongoDB es una base de datos NoSQL orientada a documentos."
        },
        {
          id: "her_m_b5",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué significa SQL?",
          opciones: ["Structured Query Language", "Standard Query Language", "Simple Query Language", "System Query Language"],
          respuestaCorrecta: 0,
          feedback: "Correcto. SQL significa Structured Query Language."
        },
        {
          id: "her_m_b6",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es DbSchema?",
          opciones: ["Herramienta para diseñar diagramas ER", "Base de datos NoSQL", "Sistema de gestión", "Lenguaje de consulta"],
          respuestaCorrecta: 0,
          feedback: "Correcto. DbSchema es una herramienta para diseñar diagramas ER."
        },
        {
          id: "her_m_b7",
          tipo: "multiple",
          nivel: "básico",
          pregunta: "¿Qué es Miro?",
          opciones: ["Herramienta de colaboración visual y diseño", "Base de datos NoSQL", "Sistema de gestión", "Lenguaje de consulta"],
          respuestaCorrecta: 0,
          feedback: "Correcto. Miro es una herramienta de colaboración visual y diseño."
        },

        // ======== INTERMEDIO (7 preguntas) ========
        {
          id: "her_m_i1",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es DML en SQL?",
          opciones: ["Data Manipulation Language", "Data Definition Language", "Data Control Language", "Data Query Language"],
          respuestaCorrecta: 0,
          feedback: "Correcto. DML significa Data Manipulation Language."
        },
        {
          id: "her_m_i2",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es DDL en SQL?",
          opciones: ["Data Definition Language", "Data Manipulation Language", "Data Control Language", "Data Query Language"],
          respuestaCorrecta: 0,
          feedback: "Correcto. DDL significa Data Definition Language."
        },
        {
          id: "her_m_i3",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es DCL en SQL?",
          opciones: ["Data Control Language", "Data Manipulation Language", "Data Definition Language", "Data Query Language"],
          respuestaCorrecta: 0,
          feedback: "Correcto. DCL significa Data Control Language."
        },
        {
          id: "her_m_i4",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es PL/pgSQL?",
          opciones: ["Lenguaje procedural de PostgreSQL", "Lenguaje de consulta de PostgreSQL", "Lenguaje de diseño de PostgreSQL", "Lenguaje de administración de PostgreSQL"],
          respuestaCorrecta: 0,
          feedback: "Correcto. PL/pgSQL es el lenguaje procedural de PostgreSQL."
        },
        {
          id: "her_m_i5",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué diferencia a MySQL de PostgreSQL?",
          opciones: ["PostgreSQL es más avanzado en características", "MySQL es más avanzado", "Son iguales", "MySQL es NoSQL"],
          respuestaCorrecta: 0,
          feedback: "Correcto. PostgreSQL es más avanzado en características que MySQL."
        },
        {
          id: "her_m_i6",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué tipo de base de datos es MongoDB?",
          opciones: ["NoSQL orientada a documentos", "Relacional", "Jerárquica", "De red"],
          respuestaCorrecta: 0,
          feedback: "Correcto. MongoDB es una base de datos NoSQL orientada a documentos."
        },
        {
          id: "her_m_i7",
          tipo: "multiple",
          nivel: "intermedio",
          pregunta: "¿Qué es SQL en el contexto de bases de datos?",
          opciones: ["Lenguaje estándar para consultar bases de datos", "Lenguaje de programación", "Herramienta de diseño", "Sistema de gestión"],
          respuestaCorrecta: 0,
          feedback: "Correcto. SQL es el lenguaje estándar para consultar bases de datos."
        },

        // ======== AVANZADO (6 preguntas) ========
        {
          id: "her_m_a1",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es la diferencia entre SQL y NoSQL?",
          opciones: ["SQL usa tablas fijas, NoSQL usa documentos flexibles", "SQL es NoSQL", "NoSQL usa tablas fijas", "Son iguales"],
          respuestaCorrecta: 0,
          feedback: "Correcto. SQL usa tablas fijas mientras NoSQL usa documentos flexibles."
        },
        {
          id: "her_m_a2",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es el ACID en el contexto de bases de datos?",
          opciones: ["Atomicidad, Consistencia, Aislamiento, Durabilidad", "Acceso, Control, Integridad, Disponibilidad", "Autenticación, Confidencialidad, Integridad, Disponibilidad", "Agilidad, Compatibilidad, Independencia, Distribución"],
          respuestaCorrecta: 0,
          feedback: "Correcto. ACID representa Atomicidad, Consistencia, Aislamiento y Durabilidad."
        },
        {
          id: "her_m_a3",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es el CAP theorem en bases de datos distribuidas?",
          opciones: ["Consistencia, Disponibilidad, Tolerancia a particiones", "Consistencia, Atomicidad, Persistencia", "Capacidad, Aislamiento, Persistencia", "Control, Acceso, Persistencia"],
          respuestaCorrecta: 0,
          feedback: "Correcto. CAP theorem representa Consistencia, Disponibilidad y Tolerancia a particiones."
        },
        {
          id: "her_m_a4",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es la consistencia eventual en NoSQL?",
          opciones: ["Los datos se sincronizan eventualmente", "Los datos siempre están sincronizados", "Los datos nunca se sincronizan", "Los datos se sincronizan instantáneamente"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La consistencia eventual garantiza que los datos se sincronicen eventualmente."
        },
        {
          id: "her_m_a5",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es el sharding en bases de datos distribuidas?",
          opciones: ["Partitioning horizontal de datos", "Partitioning vertical de datos", "Replicación de datos", "Indexación de datos"],
          respuestaCorrecta: 0,
          feedback: "Correcto. El sharding es un particionamiento horizontal de datos."
        },
        {
          id: "her_m_a6",
          tipo: "multiple",
          nivel: "avanzado",
          pregunta: "¿Qué es la replicación en bases de datos?",
          opciones: ["Copiar datos a múltiples servidores", "Dividir datos en múltiples servidores", "Indexar datos", "Optimizar datos"],
          respuestaCorrecta: 0,
          feedback: "Correcto. La replicación copia datos a múltiples servidores."
        }
      ],

      completacion: [
        // ======== BÁSICO (7 preguntas) ========
        {
          id: "her_c_b1",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "_____________ es una herramienta para diseñar diagramas ER.",
          respuestaCorrecta: "Lucidchart",
          opciones: ["Lucidchart", "DbSchema", "Miro"],
          feedback: "Correcto. Lucidchart es una herramienta para diseñar diagramas ER."
        },
        {
          id: "her_c_b2",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "_____________ es un SGBD relacional de código abierto.",
          respuestaCorrecta: "PostgreSQL",
          opciones: ["PostgreSQL", "MySQL", "MongoDB"],
          feedback: "Correcto. PostgreSQL es un SGBD relacional de código abierto."
        },
        {
          id: "her_c_b3",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "_____________ es una base de datos NoSQL orientada a documentos.",
          respuestaCorrecta: "MongoDB",
          opciones: ["MongoDB", "PostgreSQL", "MySQL"],
          feedback: "Correcto. MongoDB es una base de datos NoSQL orientada a documentos."
        },
        {
          id: "her_c_b4",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "SQL significa ______________.",
          respuestaCorrecta: "Structured Query Language",
          opciones: ["Structured Query Language", "Standard Query Language", "Simple Query Language"],
          feedback: "Correcto. SQL significa Structured Query Language."
        },
        {
          id: "her_c_b5",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "_____________ es un SGBD relacional ampliamente utilizado.",
          respuestaCorrecta: "MySQL",
          opciones: ["MySQL", "PostgreSQL", "MongoDB"],
          feedback: "Correcto. MySQL es un SGBD relacional ampliamente utilizado."
        },
        {
          id: "her_c_b6",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "_____________ es una herramienta de colaboración visual y diseño.",
          respuestaCorrecta: "Miro",
          opciones: ["Miro", "Lucidchart", "DbSchema"],
          feedback: "Correcto. Miro es una herramienta de colaboración visual y diseño."
        },
        {
          id: "her_c_b7",
          tipo: "completacion",
          nivel: "básico",
          pregunta: "_____________ es una herramienta para diseñar diagramas ER.",
          respuestaCorrecta: "DbSchema",
          opciones: ["DbSchema", "Lucidchart", "Miro"],
          feedback: "Correcto. DbSchema es una herramienta para diseñar diagramas ER."
        },

        // ======== INTERMEDIO (7 preguntas) ========
        {
          id: "her_c_i1",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "DML significa ______________.",
          respuestaCorrecta: "Data Manipulation Language",
          opciones: ["Data Manipulation Language", "Data Definition Language", "Data Control Language"],
          feedback: "Correcto. DML significa Data Manipulation Language."
        },
        {
          id: "her_c_i2",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "DDL significa ______________.",
          respuestaCorrecta: "Data Definition Language",
          opciones: ["Data Definition Language", "Data Manipulation Language", "Data Control Language"],
          feedback: "Correcto. DDL significa Data Definition Language."
        },
        {
          id: "her_c_i3",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "DCL significa ______________.",
          respuestaCorrecta: "Data Control Language",
          opciones: ["Data Control Language", "Data Manipulation Language", "Data Definition Language"],
          feedback: "Correcto. DCL significa Data Control Language."
        },
        {
          id: "her_c_i4",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "PL/pgSQL es el lenguaje procedural de ______________.",
          respuestaCorrecta: "PostgreSQL",
          opciones: ["PostgreSQL", "MySQL", "MongoDB"],
          feedback: "Correcto. PL/pgSQL es el lenguaje procedural de PostgreSQL."
        },
        {
          id: "her_c_i5",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "SQL es el lenguaje estándar para consultar ______________.",
          respuestaCorrecta: "bases de datos",
          opciones: ["bases de datos", "aplicaciones web", "sistemas operativos"],
          feedback: "Correcto. SQL es el lenguaje estándar para consultar bases de datos."
        },
        {
          id: "her_c_i6",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "MongoDB es una base de datos ______________.",
          respuestaCorrecta: "NoSQL",
          opciones: ["NoSQL", "SQL", "relacional"],
          feedback: "Correcto. MongoDB es una base de datos NoSQL."
        },
        {
          id: "her_c_i7",
          tipo: "completacion",
          nivel: "intermedio",
          pregunta: "PostgreSQL es más ______________ que MySQL.",
          respuestaCorrecta: "avanzado",
          opciones: ["avanzado", "simple", "rápido"],
          feedback: "Correcto. PostgreSQL es más avanzado que MySQL."
        },

        // ======== AVANZADO (6 preguntas) ========
        {
          id: "her_c_a1",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "SQL usa tablas ______________ mientras NoSQL usa documentos flexibles.",
          respuestaCorrecta: "fijas",
          opciones: ["fijas", "dinámicas", "jerárquicas"],
          feedback: "Correcto. SQL usa tablas fijas mientras NoSQL usa documentos flexibles."
        },
        {
          id: "her_c_a2",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "ACID representa Atomicidad, Consistencia, Aislamiento y ______________.",
          respuestaCorrecta: "Durabilidad",
          opciones: ["Durabilidad", "Distribución", "Disponibilidad"],
          feedback: "Correcto. ACID representa Atomicidad, Consistencia, Aislamiento y Durabilidad."
        },
        {
          id: "her_c_a3",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "El CAP theorem representa Consistencia, Disponibilidad y ______________.",
          respuestaCorrecta: "Tolerancia a particiones",
          opciones: ["Tolerancia a particiones", "Persistencia", "Atomicidad"],
          feedback: "Correcto. CAP theorem representa Consistencia, Disponibilidad y Tolerancia a particiones."
        },
        {
          id: "her_c_a4",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "La consistencia eventual es común en bases de datos ______________.",
          respuestaCorrecta: "NoSQL",
          opciones: ["NoSQL", "SQL", "relacionales"],
          feedback: "Correcto. La consistencia eventual es común en bases de datos NoSQL."
        },
        {
          id: "her_c_a5",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "El sharding es un particionamiento ______________ de datos.",
          respuestaCorrecta: "horizontal",
          opciones: ["horizontal", "vertical", "funcional"],
          feedback: "Correcto. El sharding es un particionamiento horizontal de datos."
        },
        {
          id: "her_c_a6",
          tipo: "completacion",
          nivel: "avanzado",
          pregunta: "La replicación copia datos a ______________ servidores.",
          respuestaCorrecta: "múltiples",
          opciones: ["múltiples", "uno", "todos"],
          feedback: "Correcto. La replicación copia datos a múltiples servidores."
        }
      ],

      vf: [
        // ======== BÁSICO (7 preguntas) ========
        {
          id: "her_v_b1",
          tipo: "vf",
          nivel: "básico",
          pregunta: "MySQL es una base de datos NoSQL.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. MySQL es una base de datos relacional."
        },
        {
          id: "her_v_b2",
          tipo: "vf",
          nivel: "básico",
          pregunta: "PostgreSQL es un sistema de gestión de bases de datos relacional.",
          respuestaCorrecta: true,
          feedback: "Correcto. PostgreSQL es un SGBD relacional."
        },
        {
          id: "her_v_b3",
          tipo: "vf",
          nivel: "básico",
          pregunta: "MongoDB utiliza un modelo de datos basado en documentos JSON.",
          respuestaCorrecta: true,
          feedback: "Correcto. MongoDB utiliza documentos JSON para almacenar datos."
        },
        {
          id: "her_v_b4",
          tipo: "vf",
          nivel: "básico",
          pregunta: "SQL es un lenguaje de programación.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. SQL es un lenguaje de consulta de bases de datos."
        },
        {
          id: "her_v_b5",
          tipo: "vf",
          nivel: "básico",
          pregunta: "Lucidchart es una herramienta para diseñar diagramas ER.",
          respuestaCorrecta: true,
          feedback: "Correcto. Lucidchart es una herramienta para diseñar diagramas ER."
        },
        {
          id: "her_v_b6",
          tipo: "vf",
          nivel: "básico",
          pregunta: "PostgreSQL es más avanzado que MySQL.",
          respuestaCorrecta: true,
          feedback: "Correcto. PostgreSQL es más avanzado que MySQL."
        },
        {
          id: "her_v_b7",
          tipo: "vf",
          nivel: "básico",
          pregunta: "MongoDB es una base de datos relacional.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. MongoDB es una base de datos NoSQL."
        },

        // ======== INTERMEDIO (7 preguntas) ========
        {
          id: "her_v_i1",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "DML es Data Manipulation Language.",
          respuestaCorrecta: true,
          feedback: "Correcto. DML significa Data Manipulation Language."
        },
        {
          id: "her_v_i2",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "DDL es Data Control Language.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. DDL es Data Definition Language."
        },
        {
          id: "her_v_i3",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "DCL es Data Control Language.",
          respuestaCorrecta: true,
          feedback: "Correcto. DCL significa Data Control Language."
        },
        {
          id: "her_v_i4",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "PL/pgSQL es el lenguaje procedural de PostgreSQL.",
          respuestaCorrecta: true,
          feedback: "Correcto. PL/pgSQL es el lenguaje procedural de PostgreSQL."
        },
        {
          id: "her_v_i5",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "MySQL es un sistema de gestión de bases de datos NoSQL.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. MySQL es un sistema de gestión de bases de datos relacional."
        },
        {
          id: "her_v_i6",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "MongoDB es una base de datos NoSQL orientada a documentos.",
          respuestaCorrecta: true,
          feedback: "Correcto. MongoDB es una base de datos NoSQL orientada a documentos."
        },
        {
          id: "her_v_i7",
          tipo: "vf",
          nivel: "intermedio",
          pregunta: "PostgreSQL es un sistema de gestión de bases de datos NoSQL.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. PostgreSQL es un sistema de gestión de bases de datos relacional."
        },

        // ======== AVANZADO (6 preguntas) ========
        {
          id: "her_v_a1",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "SQL usa tablas fijas mientras NoSQL usa documentos flexibles.",
          respuestaCorrecta: true,
          feedback: "Correcto. SQL usa tablas fijas mientras NoSQL usa documentos flexibles."
        },
        {
          id: "her_v_a2",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "ACID representa Atomicidad, Consistencia, Aislamiento y Distribución.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. ACID representa Atomicidad, Consistencia, Aislamiento y Durabilidad."
        },
        {
          id: "her_v_a3",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "El CAP theorem representa Consistencia, Disponibilidad y Tolerancia a particiones.",
          respuestaCorrecta: true,
          feedback: "Correcto. CAP theorem representa Consistencia, Disponibilidad y Tolerancia a particiones."
        },
        {
          id: "her_v_a4",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "La consistencia eventual es común en bases de datos SQL.",
          respuestaCorrecta: false,
          feedback: "Incorrecto. La consistencia eventual es común en bases de datos NoSQL."
        },
        {
          id: "her_v_a5",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "El sharding es un particionamiento horizontal de datos.",
          respuestaCorrecta: true,
          feedback: "Correcto. El sharding es un particionamiento horizontal de datos."
        },
        {
          id: "her_v_a6",
          tipo: "vf",
          nivel: "avanzado",
          pregunta: "La replicación copia datos a múltiples servidores.",
          respuestaCorrecta: true,
          feedback: "Correcto. La replicación copia datos a múltiples servidores."
        }
      ]
    }
  }
};