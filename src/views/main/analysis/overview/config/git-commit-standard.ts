import { IDependence } from '@/base-ui/descriptions'

export const gitCommitStandard: IDependence[] = [
  {
    name: 'add操作',
    description: 'git add .'
  },
  {
    name: 'commit操作',
    description: 'git commit -u "upolad files"'
  },
  {
    name: 'remote操作',
    description: 'git remote add origin https://github.com'
  },
  {
    name: 'pull操作',
    description: 'git pull'
  },
  {
    name: 'push操作',
    description: 'git push'
  }
]
