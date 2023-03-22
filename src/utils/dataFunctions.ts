import { CharactersResponse, NormalizedCharacter } from '../types/types';

export const charactersTransform = (data: CharactersResponse) => {
  const normalizedData = data.results.map(({ id, name, species, image }) => ({
    id,
    name,
    species,
    image,
  }));
  return normalizedData;
};

export const sortResults = (data: NormalizedCharacter[]) => {
  const copy = [...data];
  return copy.sort((aCharacter, bCharacter) => aCharacter.name.localeCompare(bCharacter.name));
};
