export const Tag = {
  'Backend / API': 'Backend / API',
  'Frontend / Website': 'Frontend / Website',
  'Mobile App': 'Mobile App'
} as const
export type Tag = keyof typeof Tag;

export type Client = {
  name: string,
  services: string,
  website: string,
  phone?: string,
}

export type Project = {
  id: string,
  title: string,
  date: string,
  tag: Tag,
  img: string,
  description: string,
  techstack: string[],
  limitations: string[],
  client: Client,
}