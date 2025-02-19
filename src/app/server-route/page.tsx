import { serverSideFunction } from "@/utils/server-utils";
import { ImageSlider } from "@/components/ImageSlider";

export default function ServerRoutePage() {

  const result = serverSideFunction()

  return <>
    <div>Server Route Page { result }</div>
    <ImageSlider /> 
  </>
}
