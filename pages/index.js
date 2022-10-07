import CountryList from "../components/CountryList";
import SecondaryButton from "../components/Buttons/SecondaryButton";

export default function Home() {
  return (
    <main>
      <header className="flex py-2 gap-2 justify-center">
        <h1 className="text-lg md:text-2xl  text-center font-sans">
          Country List
        </h1>

        <SecondaryButton href="/create" label="Add"></SecondaryButton>
      </header>
      <CountryList />
    </main>
  );
}
