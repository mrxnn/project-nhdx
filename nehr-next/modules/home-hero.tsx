import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="flex flex-col w-full  mt-32 text-center items-center ">
      <h1 className="text-2xl lg:text-5xl px-3 lg:px-60 font-extrabold tracking-tighter">
        Welcome to the National Electronic Health Record Platform.
      </h1>
      <p className="text-slate-500 text-sm px-4 lg:px-72 lg:text-base mt-2 lg:mt-4">
        {`The National Electronic Health Record (NEHR) is a key enabler for Sri
        Lanka’s strategic vision of "One Patient, One Health Record".`}
      </p>
      <div className="flex mt-2 lg:mt-4 gap-2">
        <Button>Sign In</Button>
        <Button variant="outline">Register</Button>
      </div>
    </div>
  );
};
