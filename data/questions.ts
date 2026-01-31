export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
  explanation: string;
}

export const QUESTIONS: Question[] = [
  // --- NUTRICIÓN: SAL Y LÍQUIDOS ---
  {
    id: 1,
    text: "**La Sal y los Riñones**\n\n¿Cuál es la recomendación general sobre el consumo de sal si tienes Enfermedad Renal Crónica (ERC)?",
    options: [
      { id: 'a', text: "Usar sal marina a gusto", isCorrect: false },
      { id: 'b', text: "Reducir la sal y evitar ultraprocesados", isCorrect: true },
      { id: 'c', text: "La sal no afecta a los riñones", isCorrect: false }
    ],
    explanation: "El exceso de sodio aumenta la presión arterial y fuerza a los riñones. Es vital reducir la sal añadida y evitar alimentos enlatados o procesados."
  },
  {
    id: 2,
    text: "**Hidratación**\n\nSobre la ingesta de líquidos (agua):",
    options: [
      { id: 'a', text: "Siempre debo beber 3 litros al día", isCorrect: false },
      { id: 'b', text: "Ajustar según indique mi nefrólogo", isCorrect: true },
      { id: 'c', text: "Dejar de beber líquidos por completo", isCorrect: false }
    ],
    explanation: "No todos los pacientes necesitan beber mucho; en etapas avanzadas o diálisis puede haber restricción. Tu médico te dará la meta exacta."
  },
  {
    id: 3,
    text: "**Sustitutos de Sal**\n\n¿Son seguros los sustitutos de sal (bajos en sodio) para todos los pacientes renales?",
    options: [
      { id: 'a', text: "Sí, son perfectos para todos", isCorrect: false },
      { id: 'b', text: "No, muchos contienen mucho potasio", isCorrect: true },
      { id: 'c', text: "Solo si son de marca reconocida", isCorrect: false }
    ],
    explanation: "Muchos sustitutos de sal reemplazan el sodio por potasio, lo cual puede ser peligroso si tienes niveles altos de potasio. Consulta a tu médico."
  },
  {
    id: 4,
    text: "**Alimentos Enlatados**\n\n¿Qué se recomienda hacer si vas a consumir verduras enlatadas?",
    options: [
      { id: 'a', text: "Comerlas directamente", isCorrect: false },
      { id: 'b', text: "Enjuagarlas con agua para quitar sodio", isCorrect: true },
      { id: 'c', text: "Cocinarlas con más sal", isCorrect: false }
    ],
    explanation: "Enjuagar los alimentos enlatados puede reducir significativamente su contenido de sodio."
  },

  // --- MEDICACIÓN Y TÓXICOS ---
  {
    id: 5,
    text: "**Medicamentos (AINEs)**\n\n¿Qué tipo de analgésicos se deben evitar generalmente sin consultar al médico?",
    options: [
      { id: 'a', text: "Paracetamol (en dosis bajas)", isCorrect: false },
      { id: 'b', text: "Ibuprofeno o Naproxeno", isCorrect: true },
      { id: 'c', text: "Vitaminas del complejo B", isCorrect: false }
    ],
    explanation: "Los antiinflamatorios no esteroideos (AINEs) como el ibuprofeno pueden reducir el flujo sanguíneo al riñón y causar daño."
  },
  {
    id: 6,
    text: "**Tabaco**\n\n¿Fumar afecta a la salud renal?",
    options: [
      { id: 'a', text: "Sí, daña los vasos sanguíneos del riñón", isCorrect: true },
      { id: 'b', text: "No, solo afecta a los pulmones", isCorrect: false },
      { id: 'c', text: "Ayuda a bajar la presión", isCorrect: false }
    ],
    explanation: "Fumar endurece las arterias y reduce el flujo sanguíneo renal, acelerando la progresión de la enfermedad."
  },
  {
    id: 7,
    text: "**Remedios Naturales**\n\n¿Es seguro tomar cualquier hierba o té natural para 'limpiar' el riñón?",
    options: [
      { id: 'a', text: "Sí, lo natural nunca hace daño", isCorrect: false },
      { id: 'b', text: "No, algunas hierbas pueden ser tóxicas", isCorrect: true },
      { id: 'c', text: "Solo si se toma en ayunas", isCorrect: false }
    ],
    explanation: "Algunas hierbas (como la carambola o ciertas raíces) pueden ser tóxicas para el riñón o interactuar con tus medicamentos."
  },
  {
    id: 8,
    text: "**Contrastes Médicos**\n\nSi te van a hacer una tomografía (TAC) con contraste, ¿qué debes hacer?",
    options: [
      { id: 'a', text: "No decir nada", isCorrect: false },
      { id: 'b', text: "Avisar que tienes enfermedad renal", isCorrect: true },
      { id: 'c', text: "Ir en ayunas de 24 horas", isCorrect: false }
    ],
    explanation: "El tinte de contraste puede dañar los riñones. Avisar permite a los médicos tomar medidas de protección (nefroprotección)."
  },

  // --- SÍNTOMAS Y ALERTA ---
  {
    id: 9,
    text: "**Síntomas de Alarma**\n\nSi notas hinchazón repentina (edema) en piernas o cara, ¿qué debes hacer?",
    options: [
      { id: 'a', text: "Esperar una semana", isCorrect: false },
      { id: 'b', text: "Beber más agua", isCorrect: false },
      { id: 'c', text: "Consultar a tu equipo médico", isCorrect: true }
    ],
    explanation: "La retención repentina de líquidos puede indicar un empeoramiento de la función renal o problemas cardíacos."
  },
  {
    id: 10,
    text: "**Orina Espumosa**\n\n¿Qué suele indicar la presencia constante de espuma en la orina?",
    options: [
      { id: 'a', text: "Que bebiste mucha agua", isCorrect: false },
      { id: 'b', text: "Pérdida de proteínas (proteinuria)", isCorrect: true },
      { id: 'c', text: "Infección urinaria segura", isCorrect: false }
    ],
    explanation: "La espuma persistente suele ser señal de que el riñón está dejando escapar proteínas, un signo de daño renal."
  },
  {
    id: 11,
    text: "**Picazón en la Piel**\n\n¿A qué puede deberse la picazón intensa (prurito) en pacientes renales?",
    options: [
      { id: 'a', text: "Niveles altos de fósforo", isCorrect: true },
      { id: 'b', text: "Alergia al sol", isCorrect: false },
      { id: 'c', text: "Falta de cremas", isCorrect: false }
    ],
    explanation: "El exceso de fósforo en sangre puede causar picazón intensa en la piel y debilitar los huesos."
  },
  {
    id: 12,
    text: "**Cansancio (Anemia)**\n\n¿Por qué la ERC puede causar anemia (cansancio y palidez)?",
    options: [
      { id: 'a', text: "Por dormir poco", isCorrect: false },
      { id: 'b', text: "El riñón produce menos eritropoyetina", isCorrect: true },
      { id: 'c', text: "Por comer mucha carne", isCorrect: false }
    ],
    explanation: "Los riñones sanos producen eritropoyetina (EPO), hormona que crea glóbulos rojos. En ERC, esta producción disminuye."
  },

  // --- NUTRICIÓN: POTASIO Y FÓSFORO ---
  {
    id: 13,
    text: "**Potasio: Alimentos Altos**\n\n¿Cuál de estos grupos suele tener MÁS potasio?",
    options: [
      { id: 'a', text: "Plátano, naranja, tomate", isCorrect: true },
      { id: 'b', text: "Manzana, pera, arroz", isCorrect: false },
      { id: 'c', text: "Aceite de oliva", isCorrect: false }
    ],
    explanation: "El plátano, los cítricos, el tomate y el aguacate son ricos en potasio. Si tienes restricción, modera su consumo."
  },
  {
    id: 14,
    text: "**Potasio: Técnicas de Cocina**\n\n¿Cómo puedes reducir el potasio de las patatas o verduras?",
    options: [
      { id: 'a', text: "Friendo directamente", isCorrect: false },
      { id: 'b', text: "Remojo y doble cocción", isCorrect: true },
      { id: 'c', text: "Congelándolas", isCorrect: false }
    ],
    explanation: "Remojar las verduras picadas y cambiar el agua a mitad de cocción reduce significativamente el potasio."
  },
  {
    id: 15,
    text: "**Fósforo Oculto**\n\n¿Dónde se encuentra el fósforo que peor se absorbe y más daña?",
    options: [
      { id: 'a', text: "En las nueces naturales", isCorrect: false },
      { id: 'b', text: "En aditivos de comida procesada/refrescos", isCorrect: true },
      { id: 'c', text: "En el pescado fresco", isCorrect: false }
    ],
    explanation: "El fósforo inorgánico (aditivos conservantes en refrescos oscuros, embutidos) se absorbe casi al 100% y es muy dañino."
  },
  {
    id: 16,
    text: "**Salud Ósea**\n\nEl descontrol del calcio y fósforo puede provocar:",
    options: [
      { id: 'a', text: "Huesos débiles y fracturas", isCorrect: true },
      { id: 'b', text: "Mejor visión", isCorrect: false },
      { id: 'c', text: "Aumento de masa muscular", isCorrect: false }
    ],
    explanation: "La ERC altera el metabolismo mineral, pudiendo causar enfermedad ósea y calcificación de vasos sanguíneos."
  },

  // --- COMORBILIDADES: DIABETES Y PRESIÓN ---
  {
    id: 17,
    text: "**Presión Arterial**\n\n¿Por qué es crucial controlar la hipertensión?",
    options: [
      { id: 'a', text: "Es la causa #2 de fallo renal", isCorrect: true },
      { id: 'b', text: "Para evitar mareos solamente", isCorrect: false },
      { id: 'c', text: "No es relevante en ERC", isCorrect: false }
    ],
    explanation: "La presión alta daña las unidades de filtración del riñón. Mantenerla en meta (ej. <130/80) protege tu función renal."
  },
  {
    id: 18,
    text: "**Diabetes**\n\nSi eres diabético, ¿cuál es la mejor forma de proteger tus riñones?",
    options: [
      { id: 'a', text: "Comer mucha fruta", isCorrect: false },
      { id: 'b', text: "Mantener la glucosa en rangos normales", isCorrect: true },
      { id: 'c', text: "Dejar de beber agua", isCorrect: false }
    ],
    explanation: "El exceso de azúcar en sangre es la causa número 1 de enfermedad renal en el mundo."
  },
  {
    id: 19,
    text: "**Colesterol**\n\n¿Afecta el colesterol alto a los riñones?",
    options: [
      { id: 'a', text: "No, solo al corazón", isCorrect: false },
      { id: 'b', text: "Sí, puede obstruir arterias renales", isCorrect: true },
      { id: 'c', text: "Es beneficioso", isCorrect: false }
    ],
    explanation: "La acumulación de placas de grasa puede reducir el flujo de sangre a los riñones, empeorando la función renal."
  },
  {
    id: 20,
    text: "**Hipoglucemia**\n\nEn etapas avanzadas de ERC, los diabéticos pueden sufrir hipoglucemias (bajadas de azúcar) más fácil porque:",
    options: [
      { id: 'a', text: "Comen menos", isCorrect: false },
      { id: 'b', text: "La insulina dura más tiempo en sangre", isCorrect: true },
      { id: 'c', text: "El riñón produce glucosa", isCorrect: false }
    ],
    explanation: "El riñón elimina la insulina. Si falla, la insulina circula más tiempo, aumentando el riesgo de bajadas de azúcar."
  },

  // --- ESTILO DE VIDA ---
  {
    id: 21,
    text: "**Ejercicio Físico**\n\n¿Se recomienda hacer ejercicio con ERC?",
    options: [
      { id: 'a', text: "No, es mejor reposo absoluto", isCorrect: false },
      { id: 'b', text: "Sí, actividad moderada regular", isCorrect: true },
      { id: 'c', text: "Solo maratones", isCorrect: false }
    ],
    explanation: "El ejercicio moderado ayuda a controlar la presión, el azúcar y mejora el ánimo. Consulta a tu médico antes de empezar."
  },
  {
    id: 22,
    text: "**Peso Corporal**\n\n¿Cómo influye la obesidad en el riñón?",
    options: [
      { id: 'a', text: "Protege al riñón de golpes", isCorrect: false },
      { id: 'b', text: "Obliga al riñón a hiperfiltrar (trabajar más)", isCorrect: true },
      { id: 'c', text: "No tiene relación", isCorrect: false }
    ],
    explanation: "El sobrepeso exige que los riñones filtren más sangre para satisfacer las demandas metabólicas, desgastándolos a largo plazo."
  },
  {
    id: 23,
    text: "**Sueño**\n\n¿Es común tener problemas de sueño en ERC?",
    options: [
      { id: 'a', text: "Sí, como apnea o insomnio", isCorrect: true },
      { id: 'b', text: "No, duermen mejor", isCorrect: false },
      { id: 'c', text: "Solo si toman café", isCorrect: false }
    ],
    explanation: "La apnea del sueño y el síndrome de piernas inquietas son comunes y pueden afectar la calidad de vida y la presión arterial."
  },
  {
    id: 24,
    text: "**Salud Mental**\n\n¿Es normal sentir ansiedad o tristeza tras el diagnóstico?",
    options: [
      { id: 'a', text: "No, no es para tanto", isCorrect: false },
      { id: 'b', text: "Sí, es importante buscar apoyo emocional", isCorrect: true },
      { id: 'c', text: "Se pasa comiendo chocolate", isCorrect: false }
    ],
    explanation: "El impacto emocional de una enfermedad crónica es real. Cuidar tu mente es parte del tratamiento."
  },

  // --- TRATAMIENTOS Y GENERALIDADES ---
  {
    id: 25,
    text: "**Etapas de la ERC**\n\nLa ERC se divide en 5 etapas. ¿En qué se basa esta clasificación?",
    options: [
      { id: 'a', text: "En el dolor que sientes", isCorrect: false },
      { id: 'b', text: "En la Tasa de Filtrado Glomerular (FG)", isCorrect: true },
      { id: 'c', text: "En la cantidad de orina", isCorrect: false }
    ],
    explanation: "Se clasifica según el porcentaje de función renal (FG). La etapa 5 es cuando el riñón funciona a menos del 15%."
  },
  {
    id: 26,
    text: "**Diálisis**\n\n¿Qué hace la diálisis?",
    options: [
      { id: 'a', text: "Cura el riñón definitivamente", isCorrect: false },
      { id: 'b', text: "Reemplaza parte de la función de limpieza", isCorrect: true },
      { id: 'c', text: "Genera hormonas nuevas", isCorrect: false }
    ],
    explanation: "La diálisis limpia la sangre de toxinas y exceso de agua, pero no realiza todas las funciones hormonales del riñón."
  },
  {
    id: 27,
    text: "**Trasplante Renal**\n\nEl trasplante renal:",
    options: [
      { id: 'a', text: "Es una cura mágica sin medicación", isCorrect: false },
      { id: 'b', text: "Es un tratamiento que requiere cuidados de por vida", isCorrect: true },
      { id: 'c', text: "Solo se hace entre hermanos", isCorrect: false }
    ],
    explanation: "El trasplante es el mejor tratamiento sustitutivo, pero requiere tomar inmunosupresores siempre para evitar el rechazo."
  },
  {
    id: 28,
    text: "**Vacunación**\n\n¿Se recomienda la vacuna de la gripe y hepatitis B?",
    options: [
      { id: 'a', text: "Sí, son altamente recomendadas", isCorrect: true },
      { id: 'b', text: "No, bajan las defensas", isCorrect: false },
      { id: 'c', text: "Solo la de la gripe", isCorrect: false }
    ],
    explanation: "Los pacientes renales tienen mayor riesgo de infecciones. Las vacunas son una protección esencial."
  },

  // --- CUIDADOS ESPECÍFICOS ---
  {
    id: 29,
    text: "**Cuidado del Acceso (Fístula)**\n\nSi tienes una fístula para hemodiálisis, ¿qué NO debes hacer?",
    options: [
      { id: 'a', text: "Lavarla con agua y jabón", isCorrect: false },
      { id: 'b', text: "Dormir sobre ese brazo o usar ropa apretada", isCorrect: true },
      { id: 'c', text: "Palpar el 'thrill' (vibración)", isCorrect: false }
    ],
    explanation: "No se debe comprimir la fístula (relojes, bolsos, dormir encima) para evitar que se pare el flujo de sangre."
  },
  {
    id: 30,
    text: "**Catéter**\n\nSi tienes un catéter para diálisis, el mayor riesgo es:",
    options: [
      { id: 'a', text: "Que se salga al caminar", isCorrect: false },
      { id: 'b', text: "La infección", isCorrect: true },
      { id: 'c', text: "Que te dé alergia", isCorrect: false }
    ],
    explanation: "Mantener el catéter limpio y seco es vital. La infección de catéter puede ser grave y llegar a la sangre."
  },
  {
    id: 31,
    text: "**Proteínas**\n\nEn etapas previas a diálisis (1-4), ¿qué suele pasar con las proteínas?",
    options: [
      { id: 'a', text: "Se aumentan al máximo", isCorrect: false },
      { id: 'b', text: "Se modera su consumo", isCorrect: true },
      { id: 'c', text: "Se prohíben totalmente", isCorrect: false }
    ],
    explanation: "Moderar las proteínas reduce la carga de trabajo del riñón y la producción de desechos urémicos."
  },
  {
    id: 32,
    text: "**Proteínas en Diálisis**\n\nUna vez en diálisis, ¿cómo cambia la necesidad de proteínas?",
    options: [
      { id: 'a', text: "Sigue siendo baja", isCorrect: false },
      { id: 'b', text: "Aumenta, necesitas comer más proteína", isCorrect: true },
      { id: 'c', text: "Es indiferente", isCorrect: false }
    ],
    explanation: "La diálisis hace perder proteínas, por lo que los pacientes en diálisis suelen necesitar comer MÁS proteínas (clara de huevo, pescado, pollo)."
  },

  // --- MISCELÁNEA ---
  {
    id: 33,
    text: "**Sed**\n\nSi tienes restricción de líquidos y tienes mucha sed, un truco es:",
    options: [
      { id: 'a', text: "Beber un vaso grande rápido", isCorrect: false },
      { id: 'b', text: "Chupar un cubito de hielo o limón", isCorrect: true },
      { id: 'c', text: "Comer algo salado", isCorrect: false }
    ],
    explanation: "Chupar hielo, rodajas de limón o caramelos ácidos sin azúcar ayuda a estimular la saliva y calmar la sed sin beber mucho líquido."
  },
  {
    id: 34,
    text: "**Etiquetas Nutricionales**\n\n¿Qué ingrediente debes buscar para evitar el fósforo oculto?",
    options: [
      { id: 'a', text: "Azúcar", isCorrect: false },
      { id: 'b', text: "Palabras con 'FOS' (Fosfato...)", isCorrect: true },
      { id: 'c', text: "Harina de trigo", isCorrect: false }
    ],
    explanation: "Busca 'Fosfato' en los ingredientes. Si aparece, ese alimento tiene aditivos de fósforo muy absorbibles."
  },
  {
    id: 35,
    text: "**Fruta Estrellada (Carambola)**\n\n¿Por qué se prohíbe la carambola (Star fruit) en pacientes renales?",
    options: [
      { id: 'a', text: "Tiene mucho azúcar", isCorrect: false },
      { id: 'b', text: "Contiene una neurotoxina peligrosa", isCorrect: true },
      { id: 'c', text: "Es muy ácida", isCorrect: false }
    ],
    explanation: "La carambola tiene una toxina que los riñones enfermos no pueden filtrar, pudiendo causar daños neurológicos graves."
  },
  {
    id: 36,
    text: "**Viajes**\n\n¿Puedes viajar si estás en diálisis?",
    options: [
      { id: 'a', text: "Nunca", isCorrect: false },
      { id: 'b', text: "Sí, coordinando con centros del destino", isCorrect: true },
      { id: 'c', text: "Solo viajes de 1 día", isCorrect: false }
    ],
    explanation: "Se puede viajar planificando con antelación para asegurar sesiones de diálisis en el lugar de destino (diálisis vacacional)."
  },
  {
    id: 37,
    text: "**Sexualidad**\n\n¿La ERC puede afectar la vida sexual?",
    options: [
      { id: 'a', text: "No, en absoluto", isCorrect: false },
      { id: 'b', text: "Sí, por fatiga, hormonas o medicación", isCorrect: true },
      { id: 'c', text: "Aumenta el deseo", isCorrect: false }
    ],
    explanation: "Es común y tratable. La fatiga y cambios hormonales influyen. Hablar con el médico es importante para buscar soluciones."
  },
  {
    id: 38,
    text: "**Embarazo**\n\n¿Una mujer con ERC puede quedarse embarazada?",
    options: [
      { id: 'a', text: "Es imposible", isCorrect: false },
      { id: 'b', text: "Es posible, pero de alto riesgo", isCorrect: true },
      { id: 'c', text: "No hay ningún riesgo", isCorrect: false }
    ],
    explanation: "Es un embarazo de riesgo que requiere monitoreo muy estrecho y ajuste de medicación, pero es posible en muchos casos."
  },
  {
    id: 39,
    text: "**Días de Enfermedad**\n\nSi tienes vómitos o diarrea (gastroenteritis):",
    options: [
      { id: 'a', text: "Sigue tomando todas las pastillas igual", isCorrect: false },
      { id: 'b', text: "Consulta sobre pausar diuréticos/antihipertensivos", isCorrect: true },
      { id: 'c', text: "Come más sal", isCorrect: false }
    ],
    explanation: "La deshidratación puede dañar el riñón agudamente ('Sick day rules'). A veces hay que suspender temporalmente ciertos fármacos."
  },
  {
    id: 40,
    text: "**Corazón**\n\nLa principal causa de muerte en pacientes renales es:",
    options: [
      { id: 'a', text: "El fallo renal en sí", isCorrect: false },
      { id: 'b', text: "Enfermedades cardiovasculares", isCorrect: true },
      { id: 'c', text: "Infecciones", isCorrect: false }
    ],
    explanation: "Cuidar el corazón (colesterol, presión, tabaco) es tan importante como cuidar el riñón, ya que están conectados."
  },
  {
    id: 41,
    text: "**Gota (Ácido Úrico)**\n\n¿Qué relación tiene la gota con el riñón?",
    options: [
      { id: 'a', text: "Ninguna", isCorrect: false },
      { id: 'b', text: "El riñón no elimina bien el ácido úrico", isCorrect: true },
      { id: 'c', text: "La gota mejora el riñón", isCorrect: false }
    ],
    explanation: "La acumulación de ácido úrico por mala filtración puede causar ataques de gota y también piedras en el riñón."
  },
  {
    id: 42,
    text: "**Bicarbonato**\n\n¿Por qué algunos pacientes toman bicarbonato?",
    options: [
      { id: 'a', text: "Para la digestión solamente", isCorrect: false },
      { id: 'b', text: "Para corregir la acidosis metabólica", isCorrect: true },
      { id: 'c', text: "Para blanquear los dientes", isCorrect: false }
    ],
    explanation: "El riñón dañado no elimina bien los ácidos. El médico puede recetar bicarbonato para equilibrar el pH de la sangre."
  },
  {
    id: 43,
    text: "**Vitaminas**\n\n¿Debo tomar multivitamínicos normales de farmacia?",
    options: [
      { id: 'a', text: "Sí, cuantos más mejor", isCorrect: false },
      { id: 'b', text: "Mejor vitaminas específicas para renales", isCorrect: true },
      { id: 'c', text: "No, las vitaminas son malas", isCorrect: false }
    ],
    explanation: "Los multivitamínicos comunes pueden tener demasiado potasio o vitamina A, que se acumulan. Existen complejos específicos (hidrosolubles)."
  },
  {
    id: 44,
    text: "**Calambres**\n\n¿Qué causa calambres frecuentes en diálisis?",
    options: [
      { id: 'a', text: "Sacar demasiado líquido rápido", isCorrect: true },
      { id: 'b', text: "Estar muy relajado", isCorrect: false },
      { id: 'c', text: "Comer mucho pan", isCorrect: false }
    ],
    explanation: "Los cambios rápidos de fluidos y electrolitos durante la sesión pueden provocar calambres dolorosos."
  },
  {
    id: 45,
    text: "**Peso Seco**\n\nEn hemodiálisis, ¿qué es el 'peso seco'?",
    options: [
      { id: 'a', text: "Tu peso sin ropa", isCorrect: false },
      { id: 'b', text: "Tu peso ideal sin exceso de líquido", isCorrect: true },
      { id: 'c', text: "Tu peso al nacer", isCorrect: false }
    ],
    explanation: "Es el peso objetivo al terminar la diálisis, donde estás normohidratado y la presión arterial debería estar controlada."
  },
  {
    id: 46,
    text: "**Trabajo Social**\n\n¿Puede un trabajador social ayudarme?",
    options: [
      { id: 'a', text: "No, solo es tema médico", isCorrect: false },
      { id: 'b', text: "Sí, con trámites, discapacidad y apoyo", isCorrect: true },
      { id: 'c', text: "Solo si estoy hospitalizado", isCorrect: false }
    ],
    explanation: "La ERC tiene impacto laboral y económico. El trabajador social es clave para gestionar ayudas y adaptaciones."
  },
  {
    id: 47,
    text: "**Autocuidado**\n\n¿Quién es el miembro más importante del equipo de salud?",
    options: [
      { id: 'a', text: "El médico", isCorrect: false },
      { id: 'b', text: "Tú (el paciente)", isCorrect: true },
      { id: 'c', text: "La enfermera", isCorrect: false }
    ],
    explanation: "Tú tomas decisiones cada día sobre qué comer, beber y tomar medicación. El éxito depende principalmente de ti."
  },
  {
    id: 48,
    text: "**Piedras en el Riñón**\n\nPara prevenir cálculos renales, generalmente se recomienda:",
    options: [
      { id: 'a', text: "Beber poca agua", isCorrect: false },
      { id: 'b', text: "Buena hidratación y moderar sal/proteína", isCorrect: true },
      { id: 'c', text: "Comer mucho calcio en pastillas", isCorrect: false }
    ],
    explanation: "Mantener la orina diluida bebiendo agua es la medida más eficaz para prevenir la cristalización de piedras."
  },
  {
    id: 49,
    text: "**Infección Urinaria**\n\n¿Por qué tratar rápido una infección de orina?",
    options: [
      { id: 'a', text: "Para que no suba al riñón (pielonefritis)", isCorrect: true },
      { id: 'b', text: "Para no contagiar a otros", isCorrect: false },
      { id: 'c', text: "Porque huele mal", isCorrect: false }
    ],
    explanation: "Una infección de vejiga no tratada puede ascender a los riñones y causar una infección grave que deje cicatrices renales."
  },
  {
    id: 50,
    text: "**Apoyo Familiar**\n\n¿Es bueno que la familia conozca mi dieta?",
    options: [
      { id: 'a', text: "No, es mi problema", isCorrect: false },
      { id: 'b', text: "Sí, facilita cocinar y da apoyo moral", isCorrect: true },
      { id: 'c', text: "Solo si ellos también están enfermos", isCorrect: false }
    ],
    explanation: "El apoyo familiar facilita el cumplimiento de la dieta y reduce la sensación de aislamiento."
  }
];

export const getRandomQuestions = (count: number): Question[] => {
  // Fisher-Yates shuffle copy
  const shuffled = [...QUESTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};