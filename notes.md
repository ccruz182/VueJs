# VueJs
Notas de VueJs.

## Propiedades computadas
Las propiedades computadas son cacheadas basándose en sus dependencias. Una propiedad computada sólo se reevaluará cuando alguna de sus dependencias haya cambiado.

## Ciclo de vida
- **Before Create:** Antes de que cree el objeto de Vue.
- **Created:** Ya se crearon los métodos, observadores, eventos, pero aún no se accede al DOM -> Aún no es posible tomar variable 'el'.
- **Before Mount:** Se ejecuta antes de insertar el DOM.
- **Mounted:** Se ejecuta al insertar el DOM.
- **Before Update:** Se ejecuta al detectar un cambio.
- **Updated:** Se ejecuta la realizar los cambios.
- **Before Destroy:** Se ejecuta antes de destruir la instancia.
- **Destroyed:** Es cuando se destruye toda la instancia.