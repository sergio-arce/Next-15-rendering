import { serverSideFunction } from "@/utils/server-utils";
import { ImageSlider } from "@/components/ImageSlider";
import { clientSideFunction } from "@/utils/client-utils";

export default function ServerRoutePage() {

  const result = serverSideFunction()

  const clienteResult = clientSideFunction()

  return <>
    <div>Server Route Page { result } { clienteResult }</div>
    <ImageSlider /> 
  </>
}
