export const INITIAL_STATE = [{
    nick: 'name',
    subMonth: 3,
    avatar: 'https://i.pravatar.cc/150?u=name',
    description: 'The first sub'
  },
  {
    nick: 'name2',
    subMonth: 1,
    avatar: 'https://i.pravatar.cc/150?u=name2',
  }]

  export interface Sub {
    nick: string
    subMonth: number
    avatar: string
    description?: string
  }

