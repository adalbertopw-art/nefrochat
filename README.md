# NefroChat - Cuestionario de Salud Renal

Este proyecto es un asistente virtual interactivo diseñado para evaluar y mejorar el conocimiento sobre la Enfermedad Renal Crónica (ERC).

Existen dos versiones de la aplicación disponibles en este repositorio:
1. **Versión Web (React/Vite)**: La aplicación web completa y moderna.
2. **Versión Streamlit (Python)**: Un prototipo rápido en Python.

---

## 1. Instrucciones para la Versión Web (React)

Esta es la versión principal, construida con React, TailwindCSS y TypeScript.

### Requisitos
- Node.js (versión 16 o superior)

### Instalación y Ejecución
1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Abrir el navegador en la URL que aparece (usualmente `http://localhost:5173`).

---

## 2. Instrucciones para Streamlit (Python)

Si prefieres ejecutar la versión en Python utilizando Streamlit.

### Requisitos
- Python 3.8 o superior

### Instalación
1. Crear un entorno virtual (opcional pero recomendado):
   ```bash
   python -m venv venv
   source venv/bin/activate  # En Windows: venv\Scripts\activate
   ```
2. Instalar Streamlit:
   ```bash
   pip install streamlit
   ```

### Ejecución
Ejecuta el archivo `streamlit_app.py`:

```bash
streamlit run streamlit_app.py
```

Esto abrirá automáticamente una pestaña en tu navegador con el cuestionario funcionando.