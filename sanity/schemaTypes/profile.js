export default {
    name: 'profile',
    title: 'Profile',
    type: 'document',
    fields: [
      {
        name: 'userName',
        title: 'User Name',
        type: 'string',
        validation: Rule => Rule.required().min(2).max(100)
      },
      {
        name: 'jobs',
        title: 'Jobs',
        type: 'array',
        of: [
          {
            type: 'string',
            name: 'jobTitle',
            title: 'Job Title',
            validation: Rule => Rule.required()
          }
        ]
      },
      {
        name: 'summary',
        title: 'Summary',
        type: 'text',
        validation: Rule => Rule.required().min(10).max(500)
      }
    ]
  }