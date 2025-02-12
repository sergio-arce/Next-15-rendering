'use client'

import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoutePage() {

  const result = serverSideFunction()
  return <div>ClientRoutePage { result }</div>;
}
