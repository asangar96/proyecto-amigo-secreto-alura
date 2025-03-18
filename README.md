# Sorteo de Amigos Secretos

Esta es una aplicación web que permite realizar un sorteo de "Amigo Secreto" de manera sencilla y automatizada. Los usuarios pueden agregar nombres a una lista y, posteriormente, sortearlos uno por uno hasta que todos los nombres hayan sido seleccionados.

## Características
- Agregar nombres a una lista.
- Eliminar nombres de la lista antes del sorteo.
- Sorteo secuencial sin repetición.
- Restricción para evitar el sorteo con solo un nombre.
- Mensaje emergente mostrando el nombre sorteado.
- Reinicio automático después de sortear todos los nombres o al cerrar la ventana emergente.
- Uso de `localStorage` para conservar los nombres ingresados.

## Requisitos
- Navegador web moderno con soporte para JavaScript.

## Cómo usar
1. **Agregar nombres**: Escribe un nombre en el campo de entrada y presiona el botón de agregar.
2. **Eliminar un nombre**: Presiona el botón ❌ junto a un nombre en la lista.
3. **Sortear un amigo**: Presiona el botón de sorteo. Un nombre aleatorio será seleccionado y mostrado en una ventana emergente.
   - Si solo hay un nombre en la lista, se mostrará una alerta indicando que no se puede realizar el sorteo.
   - El nombre sorteado será eliminado de la lista para evitar repeticiones.
4. **Finalización del sorteo**: Cuando todos los nombres hayan sido sorteados:
   - El juego se reiniciará automáticamente después de 4 segundos.
   - También se puede reiniciar manualmente cerrando la ventana emergente.

## Tecnologías utilizadas
- **HTML**: Estructura de la página.
- **CSS**: Estilos básicos.
- **JavaScript**: Lógica de la aplicación y manipulación del DOM.
- **localStorage**: Para almacenar temporalmente la lista de nombres.

## Mejoras futuras
- Implementar un diseño más atractivo con CSS.
- Soporte para múltiples sorteos sin necesidad de reiniciar el juego manualmente.

¡Diviértete sorteando! 🎉
