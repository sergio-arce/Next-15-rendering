import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {

  const result = serverSideFunction()
  return <div>ServerRoutePage { result }</div>;
}
