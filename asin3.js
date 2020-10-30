const mi_funcion_asincrona = async () => 900;

const value = mi_funcion_asincrona();             // Promise { <fulfilled>: 900 }

async function main(){
  const asyncValue = await mi_funcion_asincrona();  // 900
  console.log(asyncValue)
}
 
main()