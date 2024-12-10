import Header from "@/components/Header";
import Aside from "@/components/Aside";
import Form from "@/components/Form";

function Home() {
    return (
        <div className="min-h w-full bg-zinc-50 px-4 py-2 md:px-8 md:py-4">
        <Header />
      <div className="grid grid-cols-8">
          <div className="col-span-2 hidden md:block bg-red-100">
          <Aside />
    </div>
    <div className="md:col-span-6 col-span-full bg-green-100">
            <Form />
            </div>
            </div >
                </div>
  );
}

export default Home;