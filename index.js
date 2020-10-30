let pedido = new Promise((resolve, reject) => {
    enviarPedido = () => {
        let cantidadQueLlego = Math.floor(Math.random() * (100 - 10) + 10);
        if(cantidadQueLlego > 50)
        resolve({mensaje: `El pedido fue atendido satisfactoriamente, enviando ${cantidadQueLlego} unidades`, cantidad : cantidadQueLlego})
        else
        reject("Lo sentimos, no llego suficiente inventario del producto");
    }
    setTimeout(enviarPedido, 2000);
  });   

let calcularCosto = (cantidad) => {
  return cantidad * 5000
}

let calcularDescuento = (costo) => {
  return costo - costo * 0.05
}

pedido.then((x) => {
    console.log('Then',x) 
    return calcularCosto(x.cantidad)
}).then((x) => {
  console.log('Costo: ',x) 
  return calcularDescuento(x)
}).then((x) => {
  console.log('Descuento: ',x) 
}).catch((r) => { 
    console.log('Catch',r);
}).finally( () => {
  console.log("Termino la ejecución de la promesa")
})
