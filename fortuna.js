function apostar() {
    return new Promise((resolve, reject) => {
      const val = Math.round(Math.random() * 1); // 0 o 1 aleatoriedad
      console.log(val);
      val ? resolve('Gano!!') : reject('Perdió');
    });
}
  
async function buscar_fortuna() {
    try {
        const mensaje = await apostar();
        console.log(mensaje);
    } catch(error) {
        console.log(error);
    }
}

buscar_fortuna();
buscar_fortuna();
buscar_fortuna();
buscar_fortuna();
buscar_fortuna();
buscar_fortuna();

