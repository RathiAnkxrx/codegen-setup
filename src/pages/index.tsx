import { useAllFilmsQuery } from "../types/graphql";

export default function Home() {
  const { data } = useAllFilmsQuery();

  return (
    <main className={"main center"}>
      <div className="grid">
        {data?.allFilms?.films?.map((film) => (
          <div key={+Math.random()} className="movie">
            <h2>{film?.title}</h2>
            <h3>Director : {film?.director}</h3>

            <div className="species">
              {film?.speciesConnection?.species?.map((species) => (
                <p key={+Math.random()} className="tags">
                  {species?.name}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
