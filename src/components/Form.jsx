import Intro from "@/components/Intro";

function Form() {
  return (
    <>
      <Intro />
      <form className="flex flex-col gap-2">
        <input type="text"
          name="fullname"
          id="fullname"
          placeholder="your name"
          className="border-stone-700 bg-zinc-50 placeholder:text-slate-700"
          required
        />
        <input type="email"
          name="email"
          id="email"
          placeholder="your@gmail.com"
          className="border-stone-700 md:bg-lime-400 bg-zinc-50 placeholder:text-slate-700"
        />
        <input type="text"
          name="message"
          id="message"
          placeholder="Tell us bit about your project"
          className="h-24 border-stone-700 border-b-2 md:bg-lime-400 bg-zinc-50 placeholder:text-slate-700"
        />
        <p className="my-5 text-zinc-800">How can We Help</p>
        <label >
          <input type="checkbox"
            name="website-design"
            className="size-5"
          />
          Website Design
        </label>
      </form>
    </>
  );
}

export default Form;