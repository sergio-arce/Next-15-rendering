/**
 * server-only:
 *  
 *  Se utiliza para marcar módulos o archivos que deben ejecutarse exclusivamente en el servidor. 
 *  Esto evita que dicho código se incluya en el bundle del cliente, protegiendo información sensible y asegurando 
 *  que funciones o dependencias específicas del servidor no se ejecuten en el entorno del navegador.
 */
import 'server-only'

export const serverSideFunction = () => {
  console.log(`
    use enviroments variables,
    interact with a database,
    process confidential information
    `)
  return "server result"
}