import streamlit as st
import random
import time

# Configuración de la página
st.set_page_config(
    page_title="NefroChat - Educación Renal",
    page_icon="💙",
    layout="centered"
)

# --- BANCO DE PREGUNTAS (50 Ítems) ---
QUESTIONS = [
  # --- NUTRICIÓN: SAL Y LÍQUIDOS ---
  {
    "id": 1,
    "text": "**La Sal y los Riñones**\n\n¿Cuál es la recomendación general sobre el consumo de sal si tienes Enfermedad Renal Crónica (ERC)?",
    "options": [
      { "id": 'a', "text": "Usar sal marina a gusto", "isCorrect": False },
      { "id": 'b', "text": "Reducir la sal y evitar ultraprocesados", "isCorrect": True },
      { "id": 'c', "text": "La sal no afecta a los riñones", "isCorrect": False }
    ],
    "explanation": "El exceso de sodio aumenta la presión arterial y fuerza a los riñones. Es vital reducir la sal añadida y evitar alimentos enlatados o procesados."
  },
  {
    "id": 2,
    "text": "**Hidratación**\n\nSobre la ingesta de líquidos (agua):",
    "options": [
      { "id": 'a', "text": "Siempre debo beber 3 litros al día", "isCorrect": False },
      { "id": 'b', "text": "Ajustar según indique mi nefrólogo", "isCorrect": True },
      { "id": 'c', "text": "Dejar de beber líquidos por completo", "isCorrect": False }
    ],
    "explanation": "No todos los pacientes necesitan beber mucho; en etapas avanzadas o diálisis puede haber restricción. Tu médico te dará la meta exacta."
  },
  {
    "id": 3,
    "text": "**Sustitutos de Sal**\n\n¿Son seguros los sustitutos de sal (bajos en sodio) para todos los pacientes renales?",
    "options": [
      { "id": 'a', "text": "Sí, son perfectos para todos", "isCorrect": False },
      { "id": 'b', "text": "No, muchos contienen mucho potasio", "isCorrect": True },
      { "id": 'c', "text": "Solo si son de marca reconocida", "isCorrect": False }
    ],
    "explanation": "Muchos sustitutos de sal reemplazan el sodio por potasio, lo cual puede ser peligroso si tienes niveles altos de potasio. Consulta a tu médico."
  },
  {
    "id": 4,
    "text": "**Alimentos Enlatados**\n\n¿Qué se recomienda hacer si vas a consumir verduras enlatadas?",
    "options": [
      { "id": 'a', "text": "Comerlas directamente", "isCorrect": False },
      { "id": 'b', "text": "Enjuagarlas con agua para quitar sodio", "isCorrect": True },
      { "id": 'c', "text": "Cocinarlas con más sal", "isCorrect": False }
    ],
    "explanation": "Enjuagar los alimentos enlatados puede reducir significativamente su contenido de sodio."
  },
  # --- MEDICACIÓN Y TÓXICOS ---
  {
    "id": 5,
    "text": "**Medicamentos (AINEs)**\n\n¿Qué tipo de analgésicos se deben evitar generalmente sin consultar al médico?",
    "options": [
      { "id": 'a', "text": "Paracetamol (en dosis bajas)", "isCorrect": False },
      { "id": 'b', "text": "Ibuprofeno o Naproxeno", "isCorrect": True },
      { "id": 'c', "text": "Vitaminas del complejo B", "isCorrect": False }
    ],
    "explanation": "Los antiinflamatorios no esteroideos (AINEs) como el ibuprofeno pueden reducir el flujo sanguíneo al riñón y causar daño."
  },
  {
    "id": 6,
    "text": "**Tabaco**\n\n¿Fumar afecta a la salud renal?",
    "options": [
      { "id": 'a', "text": "Sí, daña los vasos sanguíneos del riñón", "isCorrect": True },
      { "id": 'b', "text": "No, solo afecta a los pulmones", "isCorrect": False },
      { "id": 'c', "text": "Ayuda a bajar la presión", "isCorrect": False }
    ],
    "explanation": "Fumar endurece las arterias y reduce el flujo sanguíneo renal, acelerando la progresión de la enfermedad."
  },
  {
    "id": 7,
    "text": "**Remedios Naturales**\n\n¿Es seguro tomar cualquier hierba o té natural para 'limpiar' el riñón?",
    "options": [
      { "id": 'a', "text": "Sí, lo natural nunca hace daño", "isCorrect": False },
      { "id": 'b', "text": "No, algunas hierbas pueden ser tóxicas", "isCorrect": True },
      { "id": 'c', "text": "Solo si se toma en ayunas", "isCorrect": False }
    ],
    "explanation": "Algunas hierbas (como la carambola o ciertas raíces) pueden ser tóxicas para el riñón o interactuar con tus medicamentos."
  },
  {
    "id": 8,
    "text": "**Contrastes Médicos**\n\nSi te van a hacer una tomografía (TAC) con contraste, ¿qué debes hacer?",
    "options": [
      { "id": 'a', "text": "No decir nada", "isCorrect": False },
      { "id": 'b', "text": "Avisar que tienes enfermedad renal", "isCorrect": True },
      { "id": 'c', "text": "Ir en ayunas de 24 horas", "isCorrect": False }
    ],
    "explanation": "El tinte de contraste puede dañar los riñones. Avisar permite a los médicos tomar medidas de protección (nefroprotección)."
  },
  # --- SÍNTOMAS Y ALERTA ---
  {
    "id": 9,
    "text": "**Síntomas de Alarma**\n\nSi notas hinchazón repentina (edema) en piernas o cara, ¿qué debes hacer?",
    "options": [
      { "id": 'a', "text": "Esperar una semana", "isCorrect": False },
      { "id": 'b', "text": "Beber más agua", "isCorrect": False },
      { "id": 'c', "text": "Consultar a tu equipo médico", "isCorrect": True }
    ],
    "explanation": "La retención repentina de líquidos puede indicar un empeoramiento de la función renal o problemas cardíacos."
  },
  {
    "id": 10,
    "text": "**Orina Espumosa**\n\n¿Qué suele indicar la presencia constante de espuma en la orina?",
    "options": [
      { "id": 'a', "text": "Que bebiste mucha agua", "isCorrect": False },
      { "id": 'b', "text": "Pérdida de proteínas (proteinuria)", "isCorrect": True },
      { "id": 'c', "text": "Infección urinaria segura", "isCorrect": False }
    ],
    "explanation": "La espuma persistente suele ser señal de que el riñón está dejando escapar proteínas, un signo de daño renal."
  },
  {
    "id": 11,
    "text": "**Picazón en la Piel**\n\n¿A qué puede deberse la picazón intensa (prurito) en pacientes renales?",
    "options": [
      { "id": 'a', "text": "Niveles altos de fósforo", "isCorrect": True },
      { "id": 'b', "text": "Alergia al sol", "isCorrect": False },
      { "id": 'c', "text": "Falta de cremas", "isCorrect": False }
    ],
    "explanation": "El exceso de fósforo en sangre puede causar picazón intensa en la piel y debilitar los huesos."
  },
  {
    "id": 12,
    "text": "**Cansancio (Anemia)**\n\n¿Por qué la ERC puede causar anemia (cansancio y palidez)?",
    "options": [
      { "id": 'a', "text": "Por dormir poco", "isCorrect": False },
      { "id": 'b', "text": "El riñón produce menos eritropoyetina", "isCorrect": True },
      { "id": 'c', "text": "Por comer mucha carne", "isCorrect": False }
    ],
    "explanation": "Los riñones sanos producen eritropoyetina (EPO), hormona que crea glóbulos rojos. En ERC, esta producción disminuye."
  },
  # --- NUTRICIÓN: POTASIO Y FÓSFORO ---
  {
    "id": 13,
    "text": "**Potasio: Alimentos Altos**\n\n¿Cuál de estos grupos suele tener MÁS potasio?",
    "options": [
      { "id": 'a', "text": "Plátano, naranja, tomate", "isCorrect": True },
      { "id": 'b', "text": "Manzana, pera, arroz", "isCorrect": False },
      { "id": 'c', "text": "Aceite de oliva", "isCorrect": False }
    ],
    "explanation": "El plátano, los cítricos, el tomate y el aguacate son ricos en potasio. Si tienes restricción, modera su consumo."
  },
  {
    "id": 14,
    "text": "**Potasio: Técnicas de Cocina**\n\n¿Cómo puedes reducir el potasio de las patatas o verduras?",
    "options": [
      { "id": 'a', "text": "Friendo directamente", "isCorrect": False },
      { "id": 'b', "text": "Remojo y doble cocción", "isCorrect": True },
      { "id": 'c', "text": "Congelándolas", "isCorrect": False }
    ],
    "explanation": "Remojar las verduras picadas y cambiar el agua a mitad de cocción reduce significativamente el potasio."
  },
  {
    "id": 15,
    "text": "**Fósforo Oculto**\n\n¿Dónde se encuentra el fósforo que peor se absorbe y más daña?",
    "options": [
      { "id": 'a', "text": "En las nueces naturales", "isCorrect": False },
      { "id": 'b', "text": "En aditivos de comida procesada/refrescos", "isCorrect": True },
      { "id": 'c', "text": "En el pescado fresco", "isCorrect": False }
    ],
    "explanation": "El fósforo inorgánico (aditivos conservantes en refrescos oscuros, embutidos) se absorbe casi al 100% y es muy dañino."
  },
  {
    "id": 16,
    "text": "**Salud Ósea**\n\nEl descontrol del calcio y fósforo puede provocar:",
    "options": [
      { "id": 'a', "text": "Huesos débiles y fracturas", "isCorrect": True },
      { "id": 'b', "text": "Mejor visión", "isCorrect": False },
      { "id": 'c', "text": "Aumento de masa muscular", "isCorrect": False }
    ],
    "explanation": "La ERC altera el metabolismo mineral, pudiendo causar enfermedad ósea y calcificación de vasos sanguíneos."
  },
  # --- COMORBILIDADES: DIABETES Y PRESIÓN ---
  {
    "id": 17,
    "text": "**Presión Arterial**\n\n¿Por qué es crucial controlar la hipertensión?",
    "options": [
      { "id": 'a', "text": "Es la causa #2 de fallo renal", "isCorrect": True },
      { "id": 'b', "text": "Para evitar mareos solamente", "isCorrect": False },
      { "id": 'c', "text": "No es relevante en ERC", "isCorrect": False }
    ],
    "explanation": "La presión alta daña las unidades de filtración del riñón. Mantenerla en meta (ej. <130/80) protege tu función renal."
  },
  {
    "id": 18,
    "text": "**Diabetes**\n\nSi eres diabético, ¿cuál es la mejor forma de proteger tus riñones?",
    "options": [
      { "id": 'a', "text": "Comer mucha fruta", "isCorrect": False },
      { "id": 'b', "text": "Mantener la glucosa en rangos normales", "isCorrect": True },
      { "id": 'c', "text": "Dejar de beber agua", "isCorrect": False }
    ],
    "explanation": "El exceso de azúcar en sangre es la causa número 1 de enfermedad renal en el mundo."
  },
  {
    "id": 19,
    "text": "**Colesterol**\n\n¿Afecta el colesterol alto a los riñones?",
    "options": [
      { "id": 'a', "text": "No, solo al corazón", "isCorrect": False },
      { "id": 'b', "text": "Sí, puede obstruir arterias renales", "isCorrect": True },
      { "id": 'c', "text": "Es beneficioso", "isCorrect": False }
    ],
    "explanation": "La acumulación de placas de grasa puede reducir el flujo de sangre a los riñones, empeorando la función renal."
  },
  {
    "id": 20,
    "text": "**Hipoglucemia**\n\nEn etapas avanzadas de ERC, los diabéticos pueden sufrir hipoglucemias (bajadas de azúcar) más fácil porque:",
    "options": [
      { "id": 'a', "text": "Comen menos", "isCorrect": False },
      { "id": 'b', "text": "La insulina dura más tiempo en sangre", "isCorrect": True },
      { "id": 'c', "text": "El riñón produce glucosa", "isCorrect": False }
    ],
    "explanation": "El riñón elimina la insulina. Si falla, la insulina circula más tiempo, aumentando el riesgo de bajadas de azúcar."
  },
  # --- ESTILO DE VIDA ---
  {
    "id": 21,
    "text": "**Ejercicio Físico**\n\n¿Se recomienda hacer ejercicio con ERC?",
    "options": [
      { "id": 'a', "text": "No, es mejor reposo absoluto", "isCorrect": False },
      { "id": 'b', "text": "Sí, actividad moderada regular", "isCorrect": True },
      { "id": 'c', "text": "Solo maratones", "isCorrect": False }
    ],
    "explanation": "El ejercicio moderado ayuda a controlar la presión, el azúcar y mejora el ánimo. Consulta a tu médico antes de empezar."
  },
  {
    "id": 22,
    "text": "**Peso Corporal**\n\n¿Cómo influye la obesidad en el riñón?",
    "options": [
      { "id": 'a', "text": "Protege al riñón de golpes", "isCorrect": False },
      { "id": 'b', "text": "Obliga al riñón a hiperfiltrar (trabajar más)", "isCorrect": True },
      { "id": 'c', "text": "No tiene relación", "isCorrect": False }
    ],
    "explanation": "El sobrepeso exige que los riñones filtren más sangre para satisfacer las demandas metabólicas, desgastándolos a largo plazo."
  },
  {
    "id": 23,
    "text": "**Sueño**\n\n¿Es común tener problemas de sueño en ERC?",
    "options": [
      { "id": 'a', "text": "Sí, como apnea o insomnio", "isCorrect": True },
      { "id": 'b', "text": "No, duermen mejor", "isCorrect": False },
      { "id": 'c', "text": "Solo si toman café", "isCorrect": False }
    ],
    "explanation": "La apnea del sueño y el síndrome de piernas inquietas son comunes y pueden afectar la calidad de vida y la presión arterial."
  },
  {
    "id": 24,
    "text": "**Salud Mental**\n\n¿Es normal sentir ansiedad o tristeza tras el diagnóstico?",
    "options": [
      { "id": 'a', "text": "No, no es para tanto", "isCorrect": False },
      { "id": 'b', "text": "Sí, es importante buscar apoyo emocional", "isCorrect": True },
      { "id": 'c', "text": "Se pasa comiendo chocolate", "isCorrect": False }
    ],
    "explanation": "El impacto emocional de una enfermedad crónica es real. Cuidar tu mente es parte del tratamiento."
  },
  # --- TRATAMIENTOS Y GENERALIDADES ---
  {
    "id": 25,
    "text": "**Etapas de la ERC**\n\nLa ERC se divide en 5 etapas. ¿En qué se basa esta clasificación?",
    "options": [
      { "id": 'a', "text": "En el dolor que sientes", "isCorrect": False },
      { "id": 'b', "text": "En la Tasa de Filtrado Glomerular (FG)", "isCorrect": True },
      { "id": 'c', "text": "En la cantidad de orina", "isCorrect": False }
    ],
    "explanation": "Se clasifica según el porcentaje de función renal (FG). La etapa 5 es cuando el riñón funciona a menos del 15%."
  },
  {
    "id": 26,
    "text": "**Diálisis**\n\n¿Qué hace la diálisis?",
    "options": [
      { "id": 'a', "text": "Cura el riñón definitivamente", "isCorrect": False },
      { "id": 'b', "text": "Reemplaza parte de la función de limpieza", "isCorrect": True },
      { "id": 'c', "text": "Genera hormonas nuevas", "isCorrect": False }
    ],
    "explanation": "La diálisis limpia la sangre de toxinas y exceso de agua, pero no realiza todas las funciones hormonales del riñón."
  },
  {
    "id": 27,
    "text": "**Trasplante Renal**\n\nEl trasplante renal:",
    "options": [
      { "id": 'a', "text": "Es una cura mágica sin medicación", "isCorrect": False },
      { "id": 'b', "text": "Es un tratamiento que requiere cuidados de por vida", "isCorrect": True },
      { "id": 'c', "text": "Solo se hace entre hermanos", "isCorrect": False }
    ],
    "explanation": "El trasplante es el mejor tratamiento sustitutivo, pero requiere tomar inmunosupresores siempre para evitar el rechazo."
  },
  {
    "id": 28,
    "text": "**Vacunación**\n\n¿Se recomienda la vacuna de la gripe y hepatitis B?",
    "options": [
      { "id": 'a', "text": "Sí, son altamente recomendadas", "isCorrect": True },
      { "id": 'b', "text": "No, bajan las defensas", "isCorrect": False },
      { "id": 'c', "text": "Solo la de la gripe", "isCorrect": False }
    ],
    "explanation": "Los pacientes renales tienen mayor riesgo de infecciones. Las vacunas son una protección esencial."
  },
  # --- CUIDADOS ESPECÍFICOS ---
  {
    "id": 29,
    "text": "**Cuidado del Acceso (Fístula)**\n\nSi tienes una fístula para hemodiálisis, ¿qué NO debes hacer?",
    "options": [
      { "id": 'a', "text": "Lavarla con agua y jabón", "isCorrect": False },
      { "id": 'b', "text": "Dormir sobre ese brazo o usar ropa apretada", "isCorrect": True },
      { "id": 'c', "text": "Palpar el 'thrill' (vibración)", "isCorrect": False }
    ],
    "explanation": "No se debe comprimir la fístula (relojes, bolsos, dormir encima) para evitar que se pare el flujo de sangre."
  },
  {
    "id": 30,
    "text": "**Catéter**\n\nSi tienes un catéter para diálisis, el mayor riesgo es:",
    "options": [
      { "id": 'a', "text": "Que se salga al caminar", "isCorrect": False },
      { "id": 'b', "text": "La infección", "isCorrect": True },
      { "id": 'c', "text": "Que te dé alergia", "isCorrect": False }
    ],
    "explanation": "Mantener el catéter limpio y seco es vital. La infección de catéter puede ser grave y llegar a la sangre."
  },
  {
    "id": 31,
    "text": "**Proteínas**\n\nEn etapas previas a diálisis (1-4), ¿qué suele pasar con las proteínas?",
    "options": [
      { "id": 'a', "text": "Se aumentan al máximo", "isCorrect": False },
      { "id": 'b', "text": "Se modera su consumo", "isCorrect": True },
      { "id": 'c', "text": "Se prohíben totalmente", "isCorrect": False }
    ],
    "explanation": "Moderar las proteínas reduce la carga de trabajo del riñón y la producción de desechos urémicos."
  },
  {
    "id": 32,
    "text": "**Proteínas en Diálisis**\n\nUna vez en diálisis, ¿cómo cambia la necesidad de proteínas?",
    "options": [
      { "id": 'a', "text": "Sigue siendo baja", "isCorrect": False },
      { "id": 'b', "text": "Aumenta, necesitas comer más proteína", "isCorrect": True },
      { "id": 'c', "text": "Es indiferente", "isCorrect": False }
    ],
    "explanation": "La diálisis hace perder proteínas, por lo que los pacientes en diálisis suelen necesitar comer MÁS proteínas (clara de huevo, pescado, pollo)."
  },
  # --- MISCELÁNEA ---
  {
    "id": 33,
    "text": "**Sed**\n\nSi tienes restricción de líquidos y tienes mucha sed, un truco es:",
    "options": [
      { "id": 'a', "text": "Beber un vaso grande rápido", "isCorrect": False },
      { "id": 'b', "text": "Chupar un cubito de hielo o limón", "isCorrect": True },
      { "id": 'c', "text": "Comer algo salado", "isCorrect": False }
    ],
    "explanation": "Chupar hielo, rodajas de limón o caramelos ácidos sin azúcar ayuda a estimular la saliva y calmar la sed sin beber mucho líquido."
  },
  {
    "id": 34,
    "text": "**Etiquetas Nutricionales**\n\n¿Qué ingrediente debes buscar para evitar el fósforo oculto?",
    "options": [
      { "id": 'a', "text": "Azúcar", "isCorrect": False },
      { "id": 'b', "text": "Palabras con 'FOS' (Fosfato...)", "isCorrect": True },
      { "id": 'c', "text": "Harina de trigo", "isCorrect": False }
    ],
    "explanation": "Busca 'Fosfato' en los ingredientes. Si aparece, ese alimento tiene aditivos de fósforo muy absorbibles."
  },
  {
    "id": 35,
    "text": "**Fruta Estrellada (Carambola)**\n\n¿Por qué se prohíbe la carambola (Star fruit) en pacientes renales?",
    "options": [
      { "id": 'a', "text": "Tiene mucho azúcar", "isCorrect": False },
      { "id": 'b', "text": "Contiene una neurotoxina peligrosa", "isCorrect": True },
      { "id": 'c', "text": "Es muy ácida", "isCorrect": False }
    ],
    "explanation": "La carambola tiene una toxina que los riñones enfermos no pueden filtrar, pudiendo causar daños neurológicos graves."
  },
  {
    "id": 36,
    "text": "**Viajes**\n\n¿Puedes viajar si estás en diálisis?",
    "options": [
      { "id": 'a', "text": "Nunca", "isCorrect": False },
      { "id": 'b', "text": "Sí, coordinando con centros del destino", "isCorrect": True },
      { "id": 'c', "text": "Solo viajes de 1 día", "isCorrect": False }
    ],
    "explanation": "Se puede viajar planificando con antelación para asegurar sesiones de diálisis en el lugar de destino (diálisis vacacional)."
  },
  {
    "id": 37,
    "text": "**Sexualidad**\n\n¿La ERC puede afectar la vida sexual?",
    "options": [
      { "id": 'a', "text": "No, en absoluto", "isCorrect": False },
      { "id": 'b', "text": "Sí, por fatiga, hormonas o medicación", "isCorrect": True },
      { "id": 'c', "text": "Aumenta el deseo", "isCorrect": False }
    ],
    "explanation": "Es común y tratable. La fatiga y cambios hormonales influyen. Hablar con el médico es importante para buscar soluciones."
  },
  {
    "id": 38,
    "text": "**Embarazo**\n\n¿Una mujer con ERC puede quedarse embarazada?",
    "options": [
      { "id": 'a', "text": "Es imposible", "isCorrect": False },
      { "id": 'b', "text": "Es posible, pero de alto riesgo", "isCorrect": True },
      { "id": 'c', "text": "No hay ningún riesgo", "isCorrect": False }
    ],
    "explanation": "Es un embarazo de riesgo que requiere monitoreo muy estrecho y ajuste de medicación, pero es posible en muchos casos."
  },
  {
    "id": 39,
    "text": "**Días de Enfermedad**\n\nSi tienes vómitos o diarrea (gastroenteritis):",
    "options": [
      { "id": 'a', "text": "Sigue tomando todas las pastillas igual", "isCorrect": False },
      { "id": 'b', "text": "Consulta sobre pausar diuréticos/antihipertensivos", "isCorrect": True },
      { "id": 'c', "text": "Come más sal", "isCorrect": False }
    ],
    "explanation": "La deshidratación puede dañar el riñón agudamente ('Sick day rules'). A veces hay que suspender temporalmente ciertos fármacos."
  },
  {
    "id": 40,
    "text": "**Corazón**\n\nLa principal causa de muerte en pacientes renales es:",
    "options": [
      { "id": 'a', "text": "El fallo renal en sí", "isCorrect": False },
      { "id": 'b', "text": "Enfermedades cardiovasculares", "isCorrect": True },
      { "id": 'c', "text": "Infecciones", "isCorrect": False }
    ],
    "explanation": "Cuidar el corazón (colesterol, presión, tabaco) es tan importante como cuidar el riñón, ya que están conectados."
  },
  {
    "id": 41,
    "text": "**Gota (Ácido Úrico)**\n\n¿Qué relación tiene la gota con el riñón?",
    "options": [
      { "id": 'a', "text": "Ninguna", "isCorrect": False },
      { "id": 'b', "text": "El riñón no elimina bien el ácido úrico", "isCorrect": True },
      { "id": 'c', "text": "La gota mejora el riñón", "isCorrect": False }
    ],
    "explanation": "La acumulación de ácido úrico por mala filtración puede causar ataques de gota y también piedras en el riñón."
  },
  {
    "id": 42,
    "text": "**Bicarbonato**\n\n¿Por qué algunos pacientes toman bicarbonato?",
    "options": [
      { "id": 'a', "text": "Para la digestión solamente", "isCorrect": False },
      { "id": 'b', "text": "Para corregir la acidosis metabólica", "isCorrect": True },
      { "id": 'c', "text": "Para blanquear los dientes", "isCorrect": False }
    ],
    "explanation": "El riñón dañado no elimina bien los ácidos. El médico puede recetar bicarbonato para equilibrar el pH de la sangre."
  },
  {
    "id": 43,
    "text": "**Vitaminas**\n\n¿Debo tomar multivitamínicos normales de farmacia?",
    "options": [
      { "id": 'a', "text": "Sí, cuantos más mejor", "isCorrect": False },
      { "id": 'b', "text": "Mejor vitaminas específicas para renales", "isCorrect": True },
      { "id": 'c', "text": "No, las vitaminas son malas", "isCorrect": False }
    ],
    "explanation": "Los multivitamínicos comunes pueden tener demasiado potasio o vitamina A, que se acumulan. Existen complejos específicos (hidrosolubles)."
  },
  {
    "id": 44,
    "text": "**Calambres**\n\n¿Qué causa calambres frecuentes en diálisis?",
    "options": [
      { "id": 'a', "text": "Sacar demasiado líquido rápido", "isCorrect": True },
      { "id": 'b', "text": "Estar muy relajado", "isCorrect": False },
      { "id": 'c', "text": "Comer mucho pan", "isCorrect": False }
    ],
    "explanation": "Los cambios rápidos de fluidos y electrolitos durante la sesión pueden provocar calambres dolorosos."
  },
  {
    "id": 45,
    "text": "**Peso Seco**\n\nEn hemodiálisis, ¿qué es el 'peso seco'?",
    "options": [
      { "id": 'a', "text": "Tu peso sin ropa", "isCorrect": False },
      { "id": 'b', "text": "Tu peso ideal sin exceso de líquido", "isCorrect": True },
      { "id": 'c', "text": "Tu peso al nacer", "isCorrect": False }
    ],
    "explanation": "Es el peso objetivo al terminar la diálisis, donde estás normohidratado y la presión arterial debería estar controlada."
  },
  {
    "id": 46,
    "text": "**Trabajo Social**\n\n¿Puede un trabajador social ayudarme?",
    "options": [
      { "id": 'a', "text": "No, solo es tema médico", "isCorrect": False },
      { "id": 'b', "text": "Sí, con trámites, discapacidad y apoyo", "isCorrect": True },
      { "id": 'c', "text": "Solo si estoy hospitalizado", "isCorrect": False }
    ],
    "explanation": "La ERC tiene impacto laboral y económico. El trabajador social es clave para gestionar ayudas y adaptaciones."
  },
  {
    "id": 47,
    "text": "**Autocuidado**\n\n¿Quién es el miembro más importante del equipo de salud?",
    "options": [
      { "id": 'a', "text": "El médico", "isCorrect": False },
      { "id": 'b', "text": "Tú (el paciente)", "isCorrect": True },
      { "id": 'c', "text": "La enfermera", "isCorrect": False }
    ],
    "explanation": "Tú tomas decisiones cada día sobre qué comer, beber y tomar medicación. El éxito depende principalmente de ti."
  },
  {
    "id": 48,
    "text": "**Piedras en el Riñón**\n\nPara prevenir cálculos renales, generalmente se recomienda:",
    "options": [
      { "id": 'a', "text": "Beber poca agua", "isCorrect": False },
      { "id": 'b', "text": "Buena hidratación y moderar sal/proteína", "isCorrect": True },
      { "id": 'c', "text": "Comer mucho calcio en pastillas", "isCorrect": False }
    ],
    "explanation": "Mantener la orina diluida bebiendo agua es la medida más eficaz para prevenir la cristalización de piedras."
  },
  {
    "id": 49,
    "text": "**Infección Urinaria**\n\n¿Por qué tratar rápido una infección de orina?",
    "options": [
      { "id": 'a', "text": "Para que no suba al riñón (pielonefritis)", "isCorrect": True },
      { "id": 'b', "text": "Para no contagiar a otros", "isCorrect": False },
      { "id": 'c', "text": "Porque huele mal", "isCorrect": False }
    ],
    "explanation": "Una infección de vejiga no tratada puede ascender a los riñones y causar una infección grave que deje cicatrices renales."
  },
  {
    "id": 50,
    "text": "**Apoyo Familiar**\n\n¿Es bueno que la familia conozca mi dieta?",
    "options": [
      { "id": 'a', "text": "No, es mi problema", "isCorrect": False },
      { "id": 'b', "text": "Sí, facilita cocinar y da apoyo moral", "isCorrect": True },
      { "id": 'c', "text": "Solo si ellos también están enfermos", "isCorrect": False }
    ],
    "explanation": "El apoyo familiar facilita el cumplimiento de la dieta y reduce la sensación de aislamiento."
  }
]

# --- LÓGICA DEL JUEGO ---

def initialize_session():
    """Inicializa el estado de la sesión si no existe"""
    if "messages" not in st.session_state:
        st.session_state.messages = []
    
    if "quiz_active" not in st.session_state:
        st.session_state.quiz_active = False

def start_quiz():
    """Configura una nueva ronda de preguntas"""
    st.session_state.messages = []
    
    # Seleccionar 10 preguntas aleatorias
    session_questions = random.sample(QUESTIONS, 10)
    
    st.session_state.quiz_data = {
        "questions": session_questions,
        "current_idx": 0,
        "score": 0,
        "total": len(session_questions)
    }
    st.session_state.quiz_active = True
    
    # Mensaje de bienvenida
    add_bot_message("¡Hola! Soy **NefroAmigo** 👋.\n\nSoy tu asistente virtual para repasar conocimientos clave sobre el cuidado de tus riñones.")
    add_bot_message(f"Te haré **{len(session_questions)} preguntas breves**. ¡Vamos a aprender juntos!")
    
    # Lanzar primera pregunta
    ask_current_question()

def add_bot_message(text):
    st.session_state.messages.append({"role": "assistant", "content": text})

def add_user_message(text):
    st.session_state.messages.append({"role": "user", "content": text})

def ask_current_question():
    """Añade la pregunta actual al chat"""
    idx = st.session_state.quiz_data["current_idx"]
    if idx < st.session_state.quiz_data["total"]:
        question = st.session_state.quiz_data["questions"][idx]
        add_bot_message(question["text"])
    else:
        finish_quiz()

def handle_answer(option_selected):
    """Procesa la respuesta del usuario"""
    idx = st.session_state.quiz_data["current_idx"]
    question = st.session_state.quiz_data["questions"][idx]
    
    # Buscar el objeto opción completo
    selected_opt = next((opt for opt in question["options"] if opt["text"] == option_selected), None)
    
    if selected_opt:
        # 1. Registrar respuesta usuario
        add_user_message(selected_opt["text"])
        
        # 2. Evaluar
        is_correct = selected_opt["isCorrect"]
        if is_correct:
            st.session_state.quiz_data["score"] += 1
            feedback = f"✅ **¡Correcto!** {question['explanation']}"
        else:
            feedback = f"❌ **No exactamente.** {question['explanation']}"
        
        add_bot_message(feedback)
        
        # 3. Avanzar
        st.session_state.quiz_data["current_idx"] += 1
        time.sleep(0.5) # Pequeña pausa visual
        ask_current_question()
        st.rerun()

def finish_quiz():
    score = st.session_state.quiz_data["score"]
    total = st.session_state.quiz_data["total"]
    
    evaluation = ""
    if score == total:
        evaluation = "¡Excelente! 🌟 Tienes un gran conocimiento sobre el cuidado renal."
    elif score >= total * 0.7:
        evaluation = "¡Muy bien! 👍 Tienes buenas bases, pero siempre hay algo nuevo que aprender."
    else:
        evaluation = "Gracias por participar. 💪 Aprender es el primer paso para cuidarse mejor."
        
    add_bot_message(f"🎉 **¡Cuestionario completado!**\n\nHas acertado **{score} de {total}** preguntas.\n\n{evaluation}")
    st.session_state.quiz_active = False # Permitir reiniciar

# --- INTERFAZ DE USUARIO ---

initialize_session()

st.title("NefroChat 🩺")
st.caption("Cuestionario de Salud Renal")

# Mostrar historial de chat
for msg in st.session_state.messages:
    with st.chat_message(msg["role"]):
        st.markdown(msg["content"])

# Área de interacción
if not st.session_state.quiz_active:
    if st.button("Comenzar Cuestionario", type="primary", use_container_width=True):
        start_quiz()
        st.rerun()
else:
    # Mostrar opciones para la pregunta actual si el juego no ha terminado
    # (El juego termina cuando idx == total, manejado en ask_current_question -> finish_quiz)
    idx = st.session_state.quiz_data["current_idx"]
    total = st.session_state.quiz_data["total"]
    
    if idx < total:
        current_q = st.session_state.quiz_data["questions"][idx]
        
        # Usamos un formulario para agrupar los botones y evitar reruns prematuros
        # O simplemente botones directos. En Streamlit los botones reinician el script.
        st.markdown("---")
        st.write("Selecciona una opción:")
        
        cols = st.columns(1)
        for opt in current_q["options"]:
            if st.button(opt["text"], key=f"q{idx}_{opt['id']}", use_container_width=True):
                handle_answer(opt["text"])

    else:
        # Juego terminado, mostrar botón de reinicio
        if st.button("🔄 Reiniciar Cuestionario", type="primary"):
            start_quiz()
            st.rerun()
