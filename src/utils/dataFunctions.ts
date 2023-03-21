import { CharacterResponse, NormalizedCharacter } from '../types/types';

export const charactersReducer = (data: CharacterResponse) => {
  const normalizedArr = data.results.map(
    ({ id, name, status, species, gender, origin: { name: location }, type, image }) => ({
      id,
      name,
      status,
      species,
      type,
      gender,
      location,
      image,
    }),
  );
  return normalizedArr;
};

export const sortResults = (data: NormalizedCharacter[]) => {
  const copy = [...data];
  return copy.sort((aCharacter, bCharacter) => aCharacter.name.localeCompare(bCharacter.name));
};

// export default charactersReducer;
