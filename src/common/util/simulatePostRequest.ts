export function simulatePostRequest(data: number) {
  return new Promise((resolve) => {
    // Simulación de retraso en la respuesta (para imitar una solicitud real)
    setTimeout(() => {
      const response = data
      resolve(response)
    }, 2000) // Simula un retraso de 1 segundo
  })
}

// // Datos que deseas enviar en la solicitud POST
// const postData = {
//   key1: 'valor1',
//   key2: 'valor2'
// };

// // Simulación de la solicitud POST y manejo de la respuesta
// simulatePostRequest(postData)
//   .then(result => {
//     console.log('Respuesta:', result);
//     // Aquí puedes hacer lo que quieras con la respuesta, como mostrarla en la página
//   })
//   .catch(error => {
//     console.error('Error:', error);
//     // Manejar el error de alguna manera si ocurre
//   });
