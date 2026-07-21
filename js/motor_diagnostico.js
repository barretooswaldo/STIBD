// ============================================================
// MOTOR DE DIAGNÓSTICO - STI
// ============================================================
// Funciones para seleccionar preguntas adaptativas
// ============================================================

// ============================================================
// SELECCIONAR PREGUNTAS PARA EL DIAGNÓSTICO
// ============================================================
function seleccionarPreguntasDiagnostico(modulo, cantidadPorNivel) {
  // cantidadPorNivel = { basico: 2, intermedio: 2, avanzado: 1 }
  const preguntasSeleccionadas = [];
  const usadas = new Set();
  
  // Obtener preguntas del módulo
  const preguntasModulo = BASE_CONOCIMIENTO_DIAGNOSTICO[modulo];
  if (!preguntasModulo) return [];
  
  // Tipos de preguntas: multiple, completacion, vf
  const tipos = ['multiple', 'completacion', 'vf'];
  
  // Por cada tipo, seleccionar preguntas de cada nivel
  tipos.forEach(tipo => {
    const preguntasTipo = preguntasModulo.preguntas[tipo] || [];
    
    // Filtrar por nivel
    const niveles = ['básico', 'intermedio', 'avanzado'];
    niveles.forEach(nivel => {
      const disponibles = preguntasTipo.filter(p => 
        p.nivel === nivel && !usadas.has(p.id)
      );
      
      // Mezclar disponibles
      const mezcladas = mezclarArray(disponibles);
      
      // Seleccionar la cantidad indicada
      const cantidad = cantidadPorNivel[nivel] || 1;
      const seleccionadas = mezcladas.slice(0, cantidad);
      
      seleccionadas.forEach(p => {
        usadas.add(p.id);
        preguntasSeleccionadas.push(p);
      });
    });
  });
  
  return preguntasSeleccionadas;
}

// ============================================================
// SELECCIONAR PREGUNTAS ADAPTATIVAS SEGÚN RENDIMIENTO
// ============================================================
function seleccionarPreguntasAdaptativas(modulo, historial, totalPreguntas = 5) {
  // historial: array de { preguntaId, correcta, nivel }
  // Calcular rendimiento por nivel
  const rendimiento = {
    basico: { aciertos: 0, total: 0 },
    intermedio: { aciertos: 0, total: 0 },
    avanzado: { aciertos: 0, total: 0 }
  };
  
  historial.forEach(h => {
    if (rendimiento[h.nivel]) {
      rendimiento[h.nivel].total++;
      if (h.correcta) rendimiento[h.nivel].aciertos++;
    }
  });
  
  // Determinar el nivel actual basado en el rendimiento
  let nivelActual = 'basico';
  const pctBasico = rendimiento.basico.total > 0 ? (rendimiento.basico.aciertos / rendimiento.basico.total) * 100 : 0;
  const pctIntermedio = rendimiento.intermedio.total > 0 ? (rendimiento.intermedio.aciertos / rendimiento.intermedio.total) * 100 : 0;
  
  if (pctBasico >= 80 && rendimiento.basico.total >= 2) {
    nivelActual = 'intermedio';
  }
  if (pctIntermedio >= 80 && rendimiento.intermedio.total >= 2) {
    nivelActual = 'avanzado';
  }
  
  // Seleccionar preguntas según el nivel actual
  const distribucion = {
    'basico': { basico: 3, intermedio: 2, avanzado: 0 },
    'intermedio': { basico: 1, intermedio: 3, avanzado: 1 },
    'avanzado': { basico: 0, intermedio: 2, avanzado: 3 }
  };
  
  const cantidades = distribucion[nivelActual] || distribucion['basico'];
  
  // Seleccionar preguntas
  const seleccionadas = seleccionarPreguntasDiagnostico(modulo, cantidades);
  
  // Asegurar que tenemos exactamente totalPreguntas
  while (seleccionadas.length < totalPreguntas) {
    // Si faltan, agregar preguntas de contingencia
    const preguntasModulo = BASE_CONOCIMIENTO_DIAGNOSTICO[modulo];
    if (preguntasModulo) {
      const todosTipos = [...preguntasModulo.preguntas.multiple || [], ...preguntasModulo.preguntas.completacion || [], ...preguntasModulo.preguntas.vf || []];
      const noUsadas = todosTipos.filter(p => !seleccionadas.some(s => s.id === p.id));
      if (noUsadas.length > 0) {
        seleccionadas.push(noUsadas[Math.floor(Math.random() * noUsadas.length)]);
      } else {
        break;
      }
    }
  }
  
  return seleccionadas;
}

// ============================================================
// EVALUAR RESPUESTA
// ============================================================
function evaluarRespuestaDiagnostico(pregunta, respuestaUsuario) {
  let correcta = false;
  
  if (pregunta.tipo === 'vf') {
    // Verdadero/Falso
    const respuestaBool = respuestaUsuario === 'true' || respuestaUsuario === true;
    correcta = pregunta.respuestaCorrecta === respuestaBool;
  } else if (pregunta.tipo === 'completacion') {
    // Completación: comparar ignorando mayúsculas/minúsculas y espacios
    const respuestaNormalizada = respuestaUsuario.trim().toLowerCase();
    const correctaNormalizada = pregunta.respuestaCorrecta.trim().toLowerCase();
    correcta = respuestaNormalizada === correctaNormalizada;
  } else {
    // Selección múltiple
    correcta = respuestaUsuario === pregunta.respuestaCorrecta;
  }
  
  return {
    correcta: correcta,
    feedback: pregunta.feedback,
    respuestaCorrecta: pregunta.respuestaCorrecta
  };
}

// ============================================================
// UTILIDADES
// ============================================================
function mezclarArray(array) {
  const resultado = [...array];
  for (let i = resultado.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [resultado[i], resultado[j]] = [resultado[j], resultado[i]];
  }
  return resultado;
}

function getNivelTexto(nivel) {
  const map = {
    'basico': '🔵 Básico',
    'intermedio': '🟡 Intermedio',
    'avanzado': '🔴 Avanzado'
  };
  return map[nivel] || nivel;
}

function getTipoTexto(tipo) {
  const map = {
    'multiple': 'Selección Múltiple',
    'completacion': 'Completación',
    'vf': 'Verdadero/Falso'
  };
  return map[tipo] || tipo;
}