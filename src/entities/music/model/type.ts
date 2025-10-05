export type MusicType = {
  id: string
  name: string
  duration: number
  src: string
  image: string
  artists: ArtistType[]
}

export type ArtistType = {
  id: string
  name: string
}