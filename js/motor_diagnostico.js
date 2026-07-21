// ============================================================
// MOTOR DE DIAGNÓSTICO - STI
// ============================================================
// Funciones para seleccionar preguntas adaptativas
// ============================================================

// ============================================================
// SELECCIONAR PREGUNTAS PARA EL DIAGNÓSTICO (VERSIÓN CORREGIDA)
// ============================================================
function seleccionarPreguntasDiagnostico(modulo, cantidadPorNivel, tiposRequeridos) {
  // cantidadPorNivel = { basico: 2, intermedio: 1, avanzado: 1 }
  // tiposRequeridos = ['multiple', 'completacion', 'vf']
  
  const preguntasSeleccionadas = [];
  const usadas = new Set();
  
  // Obtener preguntas del módulo
  const preguntasModulo = BASE_CONOCIMIENTO_DIAGNOSTICO[modulo];
  if (!preguntasModulo) return [];
  
  // Para cada nivel, seleccionar preguntas de diferentes tipos
  const niveles = ['básico', 'intermedio', 'avanzado'];
  
  niveles.forEach(nivel => {
    const cantidad = cantidadPorNivel[nivel] || 1;
    if (cantidad === 0) return;
    
    // Obtener todas las preguntas de este nivel (de todos los tipos)
    let preguntasNivel = [];
    
    // Recorrer los tipos de preguntas
    const tipos = tiposRequeridos || ['multiple', 'completacion', 'vf'];
    
    tipos.forEach(tipo => {
      const preguntasTipo = preguntasModulo.preguntas[tipo] || [];
      const filtradas = preguntasTipo.filter(p => 
        p.nivel === nivel && !usadas.has(p.id)
      );
      preguntasNivel = preguntasNivel.concat(filtradas);
    });
    
    // Mezclar y seleccionar la cantidad requerida
    const mezcladas = mezclarArray(preguntasNivel);
    const seleccionadas = mezcladas.slice(0, cantidad);
    
    seleccionadas.forEach(p => {
      usadas.add(p.id);
      preguntasSeleccionadas.push(p);
    });
  });
  
  // Si no se seleccionaron suficientes preguntas, buscar cualquier pregunta disponible
  if (preguntasSeleccionadas.length < 4) {
    const todasLasPreguntas = [];
    const tipos = ['multiple', 'completacion', 'vf'];
    tipos.forEach(tipo => {
      const preguntasTipo = preguntasModulo.preguntas[tipo] || [];
      const filtradas = preguntasTipo.filter(p => !usadas.has(p.id));
      todasLasPreguntas.push(...filtradas);
    });
    
    const mezcladas = mezclarArray(todasLasPreguntas);
    const faltantes = 4 - preguntasSeleccionadas.length;
    for (let i = 0; i < Math.min(faltantes, mezcladas.length); i++) {
      preguntasSeleccionadas.push(mezcladas[i]);
    }
  }
  
  return preguntasSeleccionadas;
}

// ============================================================
// SELECCIONAR PREGUNTAS ADAPTATIVAS (VERSIÓN CORREGIDA)
// ============================================================
function seleccionarPreguntasAdaptativas(modulo, historial, totalPreguntas = 4) {
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
  
  // Subir de nivel si tiene buen rendimiento en el nivel actual
  if (pctBasico >= 70 && rendimiento.basico.total >= 2) {
    nivelActual = 'intermedio';
  }
  if (pctIntermedio >= 70 && rendimiento.intermedio.total >= 2) {
    nivelActual = 'avanzado';
  }
  
  // Distribución de preguntas por nivel (4 preguntas en total)
  const distribucion = {
    'basico': { basico: 3, intermedio: 1, avanzado: 0 },
    'intermedio': { basico: 1, intermedio: 2, avanzado: 1 },
    'avanzado': { basico: 0, intermedio: 2, avanzado: 2 }
  };
  
  const cantidades = distribucion[nivelActual] || distribucion['basico'];
  
  // Tipos de preguntas que queremos incluir (al menos uno de cada tipo)
  const tiposRequeridos = ['multiple', 'completacion', 'vf'];
  
  // Seleccionar preguntas
  const seleccionadas = seleccionarPreguntasDiagnostico(modulo, cantidades, tiposRequeridos);
  
  // Asegurar que tenemos exactamente totalPreguntas
  while (seleccionadas.length < totalPreguntas) {
    const preguntasModulo = BASE_CONOCIMIENTO_DIAGNOSTICO[modulo];
    if (preguntasModulo) {
      const todosTipos = [];
      ['multiple', 'completacion', 'vf'].forEach(tipo => {
        const preguntas = preguntasModulo.preguntas[tipo] || [];
        todosTipos.push(...preguntas);
      });
      const noUsadas = todosTipos.filter(p => !seleccionadas.some(s => s.id === p.id));
      if (noUsadas.length > 0) {
        seleccionadas.push(noUsadas[Math.floor(Math.random() * noUsadas.length)]);
      } else {
        break;
      }
    } else {
      break;
    }
  }
  
  return seleccionadas.slice(0, totalPreguntas);
}

// ============================================================
// EVALUAR RESPUESTA
// ============================================================
function evaluarRespuestaDiagnostico(pregunta, respuestaUsuario) {
  let correcta = false;
  
  if (pregunta.tipo === 'vf') {
    const respuestaBool = respuestaUsuario === 'true' || respuestaUsuario === true;
    correcta = pregunta.respuestaCorrecta === respuestaBool;
  } else if (pregunta.tipo === 'completacion') {
    const respuestaNormalizada = respuestaUsuario.trim().toLowerCase();
    const correctaNormalizada = pregunta.respuestaCorrecta.trim().toLowerCase();
    correcta = respuestaNormalizada === correctaNormalizada;
  } else {
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