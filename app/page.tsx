import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Villan from "@/components/main/Villan";

export default function Home() {
  return (
    <main className="h-full w-full" >
      <div className="flex flex-col  gap-20" >
        <Villan/>
        <Skills/>
        <Encryption/>
        <Projects/>
      </div>
      
    </main>
  )
}
