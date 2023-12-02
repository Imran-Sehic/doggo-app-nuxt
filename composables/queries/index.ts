import { type ResponseType } from "../../types";

export const fetchBreeds = async (): Promise<Ref<ResponseType>> => {
  const { data } = await useFetch("https://dog.ceo/api/breeds/list/all");

  return data as Ref<ResponseType>;
};

export const fetchDogsByBreedAndSubBreed = async (
  breed: string,
  subBreed: string
): Promise<Ref<ResponseType>> => {
  const { data } = await useFetch(
    subBreed === "All"
      ? `https://dog.ceo/api/breed/${breed}/images/random/3`
      : `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random/3`
  );

  return data as Ref<ResponseType>;
};
