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
    text: "**Hidratación**\n\nSobre la ingesta de líquidos (agua) en etapas pre-diálisis:",
    options: [
      { id: 'a', text: "Siempre debo beber 5 litros al día", isCorrect: false },
      { id: 'b', text: "Mantenerse hidratado, ajustando si hay retención de líquidos", isCorrect: true },
      { id: 'c', text: "Dejar de beber líquidos por completo", isCorrect: false }
    ],
    explanation: "En etapas 1-4, beber agua es bueno para el riñón, salvo que tengas retención de líquidos (hinchazón) severa y tu médico te indique restricción."
  },
  {
    id: 3,
    text: "**Sustitutos de Sal**\n\n¿Son seguros los sustitutos de sal (bajos en sodio) para todos los pacientes renales?",
    options: [
      { id: 'a', text: "Sí, son perfectos para todos", isCorrect: false },
      { id: 'b', text: "No, muchos contienen mucho potasio", isCorrect: true },
      { id: 'c', text: "Solo si son de marca reconocida", isCorrect: false }
    ],
    explanation: "Muchos sustitutos de sal reemplazan el sodio por potasio, lo cual puede ser peligroso si tus riñones ya no filtran bien el potasio."
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
    explanation: "Los antiinflamatorios no esteroideos (AINEs) como el ibuprofeno pueden reducir el flujo sanguíneo al riñón y causar daño agudo."
  },
  {
    id: 6,
    text: "**Tabaco**\n\n¿Fumar afecta a la salud renal?",
    options: [
      { id: 'a', text: "Sí, daña los vasos sanguíneos del riñón", isCorrect: true },
      { id: 'b', text: "No, solo afecta a los pulmones", isCorrect: false },
      { id: 'c', text: "Ayuda a bajar la presión", isCorrect: false }
    ],
    explanation: "Fumar endurece las arterias y reduce el flujo sanguíneo renal, acelerando la progresión de la enfermedad hacia la diálisis."
  },
  {
    id: 7,
    text: "**Remedios Naturales**\n\n¿Es seguro tomar cualquier hierba o té natural para 'limpiar' el riñón?",
    options: [
      { id: 'a', text: "Sí, lo natural nunca hace daño", isCorrect: false },
      { id: 'b', text: "No, algunas hierbas pueden ser tóxicas", isCorrect: true },
      { id: 'c', text: "Solo si se toma en ayunas", isCorrect: false }
    ],
    explanation: "Algunas hierbas (como la carambola o ciertas raíces) pueden ser tóxicas para el riñón o interactuar negativamente con tus medicamentos."
  },
  {
    id: 8,
    text: "**Contrastes Médicos**\n\nSi te van a hacer una tomografía (TAC) con contraste, ¿qué debes hacer?",
    options: [
      { id: 'a', text: "No decir nada", isCorrect: false },
      { id: 'b', text: "Avisar que tienes enfermedad renal", isCorrect: true },
      { id: 'c', text: "Ir en ayunas de 24 horas", isCorrect: false }
    ],
    explanation: "El tinte de contraste puede dañar los riñones. Avisar permite a los médicos tomar medidas de nefroprotección (hidratación previa)."
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
    explanation: "La retención repentina de líquidos puede indicar un empeoramiento de la función renal o problemas cardíacos que requieren atención."
  },
  {
    id: 10,
    text: "**Orina Espumosa**\n\n¿Qué suele indicar la presencia constante de espuma en la orina?",
    options: [
      { id: 'a', text: "Que bebiste mucha agua", isCorrect: false },
      { id: 'b', text: "Pérdida de proteínas (proteinuria)", isCorrect: true },
      { id: 'c', text: "Infección urinaria segura", isCorrect: false }
    ],
    explanation: "La espuma persistente suele ser señal de que el riñón está dejando escapar proteínas (albúmina), un signo clave de daño renal."
  },
  {
    id: 11,
    text: "**Picazón en la Piel**\n\n¿A qué puede deberse la picazón intensa (prurito) en pacientes renales?",
    options: [
      { id: 'a', text: "Niveles altos de fósforo", isCorrect: true },
      { id: 'b', text: "Alergia al sol", isCorrect: false },
      { id: 'c', "text": "Falta de cremas", isCorrect: false }
    ],
    explanation: "Cuando los riñones no eliminan bien el fósforo, este se acumula causando picazón en la piel y problemas en los huesos."
  },
  {
    id: 12,
    text: "**Cansancio (Anemia)**\n\n¿Por qué la ERC puede causar anemia (cansancio y palidez)?",
    options: [
      { id: 'a', text: "Por dormir poco", isCorrect: false },
      { id: 'b', text: "El riñón produce menos eritropoyetina", isCorrect: true },
      { id: 'c', text: "Por comer mucha carne", isCorrect: false }
    ],
    explanation: "Los riñones sanos producen eritropoyetina (EPO), hormona que crea glóbulos rojos. En ERC avanzada, esta producción disminuye."
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
    explanation: "El plátano, cítricos, tomate y aguacate son ricos en potasio. Si tu médico te restringió el potasio, modera su consumo."
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
    explanation: "El fósforo inorgánico (aditivos en embutidos, refrescos oscuros) se absorbe casi al 100% y es muy dañino para tus vasos sanguíneos."
  },
  {
    id: 16,
    text: "**Salud Ósea**\n\nEl descontrol del calcio y fósforo puede provocar:",
    options: [
      { id: 'a', text: "Huesos débiles y fracturas", isCorrect: true },
      { id: 'b', text: "Mejor visión", isCorrect: false },
      { id: 'c', text: "Aumento de masa muscular", isCorrect: false }
    ],
    explanation: "La ERC altera el equilibrio mineral. Controlar el fósforo protege tus huesos y evita calcificaciones en el corazón."
  },

  // --- COMORBILIDADES Y PREVENCIÓN ---
  {
    id: 17,
    text: "**Presión Arterial**\n\n¿Por qué es crucial controlar la hipertensión en pre-diálisis?",
    options: [
      { id: 'a', text: "Para retrasar la necesidad de diálisis", isCorrect: true },
      { id: 'b', text: "Para evitar mareos solamente", isCorrect: false },
      { id: 'c', text: "No es relevante en ERC", isCorrect: false }
    ],
    explanation: "La presión alta golpea y daña los filtros del riñón. Mantenerla controlada es la mejor forma de frenar la enfermedad."
  },
  {
    id: 18,
    text: "**Diabetes**\n\nSi eres diabético, ¿cuál es la mejor forma de proteger tus riñones?",
    options: [
      { id: 'a', text: "Comer mucha fruta", isCorrect: false },
      { id: 'b', text: "Mantener la glucosa en rangos normales", isCorrect: true },
      { id: 'c', text: "Dejar de beber agua", isCorrect: false }
    ],
    explanation: "El exceso de azúcar en sangre es la causa principal de daño renal. Un buen control de glucosa protege la función renal restante."
  },
  {
    id: 19,
    text: "**Colesterol**\n\n¿Afecta el colesterol alto a los riñones?",
    options: [
      { id: 'a', text: "No, solo al corazón", isCorrect: false },
      { id: 'b', text: "Sí, puede obstruir arterias renales", isCorrect: true },
      { id: 'c', text: "Es beneficioso", isCorrect: false }
    ],
    explanation: "La grasa puede obstruir las arterias del riñón igual que las del corazón, reduciendo su capacidad de limpieza."
  },
  {
    id: 20,
    text: "**Hipoglucemia**\n\nEn etapas avanzadas de ERC, los diabéticos pueden sufrir hipoglucemias (bajadas de azúcar) más fácil porque:",
    options: [
      { id: 'a', text: "Comen menos", isCorrect: false },
      { id: 'b', text: "La insulina dura más tiempo en sangre", isCorrect: true },
      { id: 'c', text: "El riñón produce glucosa", isCorrect: false }
    ],
    explanation: "El riñón enfermo tarda más en eliminar la insulina del cuerpo, lo que aumenta el riesgo de bajadas de azúcar peligrosas."
  },

  // --- ESTILO DE VIDA ---
  {
    id: 21,
    text: "**Ejercicio Físico**\n\n¿Se recomienda hacer ejercicio en etapas 1-4?",
    options: [
      { id: 'a', text: "No, es mejor reposo absoluto", isCorrect: false },
      { id: 'b', text: "Sí, actividad moderada regular ayuda a controlar la presión", isCorrect: true },
      { id: 'c', text: "Solo deportes extremos", isCorrect: false }
    ],
    explanation: "El ejercicio aeróbico moderado (caminar, nadar) ayuda a controlar el peso y la presión arterial, protegiendo el riñón."
  },
  {
    id: 22,
    text: "**Peso Corporal**\n\n¿Cómo influye la obesidad en el riñón?",
    options: [
      { id: 'a', text: "Protege al riñón de golpes", isCorrect: false },
      { id: 'b', text: "Obliga al riñón a hiperfiltrar (trabajar más)", isCorrect: true },
      { id: 'c', text: "No tiene relación", isCorrect: false }
    ],
    explanation: "El sobrepeso exige un esfuerzo extra a los riñones para filtrar más sangre. Bajar de peso ayuda a reducir la proteinuria."
  },
  {
    id: 23,
    text: "**Sueño**\n\n¿Es común tener problemas de sueño en ERC?",
    options: [
      { id: 'a', text: "Sí, como apnea o insomnio", isCorrect: true },
      { id: 'b', text: "No, duermen mejor", isCorrect: false },
      { id: 'c', text: "Solo si toman café", isCorrect: false }
    ],
    explanation: "El mal descanso afecta la presión arterial. Si roncas mucho o dejas de respirar al dormir, consulta a tu médico."
  },
  {
    id: 24,
    text: "**Salud Mental**\n\n¿Es normal sentir ansiedad por el diagnóstico?",
    options: [
      { id: 'a', text: "No, no es para tanto", isCorrect: false },
      { id: 'b', text: "Sí, buscar apoyo emocional ayuda al tratamiento", isCorrect: true },
      { id: 'c', text: "Se pasa comiendo chocolate", isCorrect: false }
    ],
    explanation: "El estrés crónico puede elevar la presión arterial. Cuidar tu mente es parte esencial de cuidar tus riñones."
  },

  // --- TRATAMIENTOS Y GENERALIDADES ---
  {
    id: 25,
    text: "**Etapas de la ERC**\n\nLa ERC se divide en 5 etapas. ¿En qué se basa esta clasificación?",
    options: [
      { id: 'a', text: "En el dolor que sientes", isCorrect: false },
      { id: 'b', text: "En la Tasa de Filtrado Glomerular (función renal)", isCorrect: true },
      { id: 'c', text: "En la cantidad de orina", isCorrect: false }
    ],
    explanation: "Se clasifica según cuánto limpian tus riñones. Conocer tu etapa te ayuda a saber qué cuidados específicos necesitas."
  },
  {
    id: 26,
    text: "**Función Renal**\n\n¿Qué significa que los riñones 'fallen'?",
    options: [
      { id: 'a', text: "Que duelen mucho", isCorrect: false },
      { id: 'b', text: "Que no limpian bien la sangre de desechos y agua", isCorrect: true },
      { id: 'c', text: "Que se caen de su lugar", isCorrect: false }
    ],
    explanation: "La insuficiencia renal es la acumulación de toxinas y líquidos que el riñón ya no puede eliminar por la orina."
  },
  {
    id: 27,
    text: "**Trasplante Renal**\n\n¿Es posible un trasplante antes de llegar a diálisis?",
    options: [
      { id: 'a', text: "Nunca", isCorrect: false },
      { id: 'b', text: "Sí, se llama trasplante anticipado", isCorrect: true },
      { id: 'c', text: "Solo si es un niño", isCorrect: false }
    ],
    explanation: "El trasplante anticipado (pre-diálisis) es una opción ideal si hay donante vivo, evitando el desgaste de la diálisis."
  },
  {
    id: 28,
    text: "**Vacunación**\n\n¿Se recomienda la vacuna de la gripe y hepatitis B?",
    options: [
      { id: 'a', text: "Sí, son altamente recomendadas", isCorrect: true },
      { id: 'b', text: "No, bajan las defensas", isCorrect: false },
      { id: 'c', text: "Solo la de la gripe", isCorrect: false }
    ],
    explanation: "Los pacientes renales tienen mayor riesgo de infecciones. Mantener el esquema de vacunación al día es vital."
  },

  // --- CUIDADOS ESPECÍFICOS PRE-DIÁLISIS ---
  {
    id: 29,
    text: "**Preservación de Venas**\n\nPensando en el futuro, ¿qué recomendación se da sobre las venas de tus brazos?",
    options: [
      { id: 'a', text: "Se pueden usar para sacar sangre siempre", isCorrect: false },
      { id: 'b', text: "Evitar punciones en el brazo no dominante (reserva)", isCorrect: true },
      { id: 'c', text: "Hacer tatuajes encima", isCorrect: false }
    ],
    explanation: "Es vital 'guardar' las venas de un brazo (generalmente el izquierdo si eres diestro) por si en el futuro necesitas una fístula."
  },
  {
    id: 30,
    text: "**Vacunación Neumococo**\n\nAdemás de la gripe, ¿qué otra vacuna es importante en ERC?",
    options: [
      { id: 'a', text: "Fiebre amarilla anual", isCorrect: false },
      { id: 'b', text: "Neumococo (Neumonía)", isCorrect: true },
      { id: 'c', text: "Ninguna más", isCorrect: false }
    ],
    explanation: "La ERC debilita el sistema inmune. La vacuna contra el neumococo protege de neumonías graves."
  },
  {
    id: 31,
    text: "**Proteínas**\n\nEn etapas previas a diálisis (1-4), ¿qué suele pasar con las proteínas?",
    options: [
      { id: 'a', text: "Se aumentan al máximo", isCorrect: false },
      { id: 'b', text: "Se modera su consumo", isCorrect: true },
      { id: 'c', text: "Se prohíben totalmente", isCorrect: false }
    ],
    explanation: "Moderar las proteínas reduce la carga de trabajo del riñón y la producción de desechos, retrasando la diálisis."
  },
  {
    id: 32,
    text: "**Proteínas Vegetales**\n\n¿Qué ventaja tienen las proteínas vegetales (legumbres) en la dieta renal?",
    options: [
      { id: 'a', text: "Saben mejor", isCorrect: false },
      { id: 'b', text: "Generan menos toxinas y carga ácida", isCorrect: true },
      { id: 'c', text: "Tienen más fósforo absorbible", isCorrect: false }
    ],
    explanation: "Las proteínas vegetales son más 'amables' con el riñón y su fósforo se absorbe menos que el de las carnes."
  },

  // --- MISCELÁNEA ---
  {
    id: 33,
    text: "**Sed**\n\nSi tienes restricción de líquidos, un truco para calmar la sed es:",
    options: [
      { id: 'a', text: "Beber un vaso grande rápido", isCorrect: false },
      { id: 'b', text: "Chupar un cubito de hielo o limón", isCorrect: true },
      { id: 'c', text: "Comer algo salado", isCorrect: false }
    ],
    explanation: "Chupar hielo o rodajas de limón ayuda a estimular la saliva y calmar la sed sin ingerir grandes cantidades de líquido."
  },
  {
    id: 34,
    text: "**Etiquetas Nutricionales**\n\n¿Qué ingrediente debes buscar para evitar el fósforo oculto?",
    options: [
      { id: 'a', text: "Azúcar", isCorrect: false },
      { id: 'b', text: "Palabras con 'FOS' (Fosfato...)", isCorrect: true },
      { id: 'c', text: "Harina de trigo", isCorrect: false }
    ],
    explanation: "Busca 'Fosfato' en los ingredientes. Si aparece, ese alimento tiene aditivos de fósforo muy dañinos."
  },
  {
    id: 35,
    text: "**Fruta Estrellada (Carambola)**\n\n¿Por qué se prohíbe la carambola en pacientes renales?",
    options: [
      { id: 'a', text: "Tiene mucho azúcar", isCorrect: false },
      { id: 'b', text: "Contiene una neurotoxina peligrosa", isCorrect: true },
      { id: 'c', text: "Es muy ácida", isCorrect: false }
    ],
    explanation: "La carambola tiene una toxina que los riñones enfermos no pueden filtrar, pudiendo causar daños neurológicos."
  },
  {
    id: 36,
    text: "**Comer Fuera**\n\nSi vas a un restaurante, una buena estrategia es:",
    options: [
      { id: 'a', text: "Pedir todo frito", isCorrect: false },
      { id: 'b', text: "Pedir salsas y aderezos aparte", isCorrect: true },
      { id: 'c', text: "No comer nada", isCorrect: false }
    ],
    explanation: "Las salsas suelen esconder mucho sodio. Pedirlas aparte te permite controlar cuánto consumes."
  },
  {
    id: 37,
    text: "**Sexualidad**\n\n¿La ERC puede afectar la vida sexual?",
    options: [
      { id: 'a', text: "No, en absoluto", isCorrect: false },
      { id: 'b', text: "Sí, por fatiga o medicación, pero tiene tratamiento", isCorrect: true },
      { id: 'c', text: "Aumenta el deseo", isCorrect: false }
    ],
    explanation: "Es común. Hablar con el médico es importante para buscar soluciones y mejorar la calidad de vida."
  },
  {
    id: 38,
    text: "**Embarazo**\n\n¿Una mujer con ERC puede quedarse embarazada?",
    options: [
      { id: 'a', text: "Es imposible", isCorrect: false },
      { id: 'b', text: "Es posible, pero requiere planificación médica estricta", isCorrect: true },
      { id: 'c', text: "No hay ningún riesgo", isCorrect: false }
    ],
    explanation: "Es un embarazo de riesgo que requiere monitoreo muy estrecho y ajuste de medicación para proteger a la madre y al bebé."
  },
  {
    id: 39,
    text: "**Días de Enfermedad**\n\nSi tienes vómitos o diarrea (gastroenteritis), ¿qué debes vigilar?",
    options: [
      { id: 'a', text: "Nada en especial", isCorrect: false },
      { id: 'b', text: "Deshidratación y posible pausa de diuréticos/IECA", isCorrect: true },
      { id: 'c', text: "Comer más sal", isCorrect: false }
    ],
    explanation: "La deshidratación puede causar un fallo renal agudo. A veces hay que suspender temporalmente ciertos fármacos ('Sick day rules')."
  },
  {
    id: 40,
    text: "**Corazón**\n\nLa principal causa de complicación en pacientes renales es:",
    options: [
      { id: 'a', text: "El fallo renal en sí", isCorrect: false },
      { id: 'b', text: "Enfermedades cardiovasculares", isCorrect: true },
      { id: 'c', text: "Infecciones", isCorrect: false }
    ],
    explanation: "Cuidar el corazón (colesterol, presión) es tan importante como cuidar el riñón, ya que están conectados."
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
      { id: 'b', text: "Para corregir la acidez de la sangre (acidosis)", isCorrect: true },
      { id: 'c', text: "Para blanquear los dientes", isCorrect: false }
    ],
    explanation: "El riñón dañado no elimina bien los ácidos. Corregir la acidosis ayuda a preservar el riñón y el hueso."
  },
  {
    id: 43,
    text: "**Vitaminas**\n\n¿Debo tomar multivitamínicos normales de farmacia?",
    options: [
      { id: 'a', text: "Sí, cuantos más mejor", isCorrect: false },
      { id: 'b', text: "Mejor consultar, algunos tienen potasio o dañan el riñón", isCorrect: true },
      { id: 'c', text: "No, las vitaminas son malas", isCorrect: false }
    ],
    explanation: "Los multivitamínicos comunes pueden no ser seguros. Existen complejos específicos para pacientes renales."
  },
  {
    id: 44,
    text: "**Sabor Metálico**\n\nSi sientes un sabor metálico o amargo en la boca, puede indicar:",
    options: [
      { id: 'a', text: "Que has comido hierro", isCorrect: false },
      { id: 'b', text: "Niveles altos de urea (toxinas) en sangre", isCorrect: true },
      { id: 'c', text: "Mala higiene dental solamente", isCorrect: false }
    ],
    explanation: "La uremia (toxinas altas) altera el gusto y a menudo provoca rechazo a la carne, indicando necesidad de ajuste dietético o médico."
  },
  {
    id: 45,
    text: "**Control de Peso**\n\n¿Por qué es bueno pesarse regularmente en ayunas?",
    options: [
      { id: 'a', text: "Para ver si engordé por comer", isCorrect: false },
      { id: 'b', text: "Para detectar retención de líquidos (edema)", isCorrect: true },
      { id: 'c', text: "No sirve de nada", isCorrect: false }
    ],
    explanation: "Un aumento rápido de peso (ej. 1-2 kg en días) suele ser agua, no grasa, avisando de que el riñón está reteniendo líquidos."
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
    explanation: "Tú tomas decisiones cada día sobre qué comer, beber y tomar medicación. El éxito del tratamiento depende de ti."
  },
  {
    id: 48,
    text: "**Piedras en el Riñón**\n\nPara prevenir cálculos renales, generalmente se recomienda:",
    options: [
      { id: 'a', text: "Beber poca agua", isCorrect: false },
      { id: 'b', text: "Buena hidratación y moderar sal/proteína animal", isCorrect: true },
      { id: 'c', text: "Comer mucho calcio en pastillas", isCorrect: false }
    ],
    explanation: "Mantener la orina diluida bebiendo agua y reducir la sal es la medida más eficaz para prevenir piedras."
  },
  {
    id: 49,
    text: "**Infección Urinaria**\n\n¿Por qué tratar rápido una infección de orina?",
    options: [
      { id: 'a', text: "Para que no suba al riñón (pielonefritis)", isCorrect: true },
      { id: 'b', text: "Para no contagiar a otros", isCorrect: false },
      { id: 'c', text: "Porque huele mal", isCorrect: false }
    ],
    explanation: "Una infección de vejiga no tratada puede ascender a los riñones, causando cicatrices que empeoran la función renal."
  },
  {
    id: 50,
    text: "**Apoyo Familiar**\n\n¿Es bueno que la familia conozca mi dieta?",
    options: [
      { id: 'a', text: "No, es mi problema", isCorrect: false },
      { id: 'b', text: "Sí, facilita cocinar y da apoyo moral", isCorrect: true },
      { id: 'c', text: "Solo si ellos también están enfermos", isCorrect: false }
    ],
    explanation: "El apoyo familiar facilita el cumplimiento de la dieta y reduce la carga emocional de la enfermedad."
  }
];

export const getRandomQuestions = (count: number): Question[] => {
  // Fisher-Yates shuffle copy
  const shuffled = [...QUESTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};