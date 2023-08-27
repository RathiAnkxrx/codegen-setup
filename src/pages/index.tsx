import { useAllFilmsQuery } from "../types/graphql";

export default function Home() {
  const { data } = useAllFilmsQuery();

  console.log("faultu k change");

  return (
    <main className={"main center"}>
      <div className="grid">
        {data?.allFilms?.films?.map((film) => (
          <div key={film?.id}>
            {film?.speciesConnection?.species?.map((spe) => (
              <div key={spe?.name}>{spe?.homeworld?.name}</div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
