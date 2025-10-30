# 🛒 E-Shop React App

Esta es una aplicación web de e-commerce desarrollada con **React**, que permite a los usuarios explorar productos, agregarlos al carrito y realizar compras simuladas. El diseño es completamente responsive y está optimizado para una experiencia de usuario fluida.

## 🚀 Tecnologías utilizadas

- **React** con Hooks (`useState`, `useEffect`, `useContext`)
- **React Router DOM** para navegación entre páginas
- **Context API** para gestión global del carrito
- **CSS Modules / Styled Components** para estilos
- **Firebase** como fuente de productos

## 📦 Estructura del proyecto



## 🧠 ¿Cómo funciona?

### 1. Catálogo de productos
- Los productos se cargan desde una API o archivo local.
- Se muestran en tarjetas con imagen, nombre, precio y botón de "Agregar al carrito".

### 2. Carrito de compras
- El estado del carrito se gestiona con **Context API**.
- Al agregar un producto, se actualiza el contexto global.
- El ícono del carrito en el navbar muestra la cantidad total de ítems.

### 3. Detalle de producto
- Al hacer clic en un producto, se navega a una vista con más información.
- Se puede seleccionar cantidad y agregar al carrito desde allí.

### 4. Checkout
- El usuario puede revisar su carrito, eliminar productos o modificar cantidades.
- Al confirmar la compra, se simula un proceso de checkout (sin integración real de pagos).

## 🧪 Cómo correr el proyecto

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/e-shop-react.git
cd e-shop-react

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start
