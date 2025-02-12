/**
 * Streaming 
 * 
 *  En Next.js con SSR, el streaming permite que el servidor envíe partes del HTML al navegador 
 *  conforme se generan, acelerando la visualización del contenido. Por otro lado, Suspense de 
 *  React muestra contenido provisional mientras se cargan datos asíncronos, reemplazándolo luego 
 *  con la versión final. Combinando ambos, se consigue un renderizado progresivo que mejora la 
 *  experiencia del usuario al mostrar rápidamente lo que ya está listo y actualizar el resto conforme 
 *  se complete la carga.
 */

import { Product } from "@/components/product";
import { Review } from "@/components/review";
import { Suspense } from "react";

export default function ProuctReviewsPage() {
  return (
    <div>
      <h1>Product Reviews</h1>
      <Suspense fallback="loading...">
        <Product />
      </Suspense>
      <Suspense fallback={<div style={{ color: 'red' }}>Loading...</div>}>
        <Review />
      </Suspense>
    </div>
  );
}
