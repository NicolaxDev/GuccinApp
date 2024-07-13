import {Spinner} from "@nextui-org/react";

export default function SpinnerLoad() {
  return (
    <div className="bg-white flex items-center justify-center h-[100vh]">
      <Spinner label="Loading..." color="danger" labelColor="danger" size="lg"/>
    </div>
  );
}