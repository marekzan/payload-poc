import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'last_name',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      options: [
        'Admin',
        'Editor',
        'User'
      ],
      access: {
        create: ({ req: { user } }) => { return user?.role === 'Admin'; },
        read: ({ req: { user } }) => { return user?.role === 'Admin'; },
        update: ({ req: { user } }) => { return user?.role === 'Admin'; },
      }
    }
  ],
  timestamps: true,
}
