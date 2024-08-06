import {Spinner} from "@nextui-org/react"

export default function SpinnerLoad() {
  return (
    <div className="bg-black flex items-center justify-center h-[100vh]">
      <Spinner label="Loading..." color="success" labelColor="success" size="lg"/>
    </div>
  )
}