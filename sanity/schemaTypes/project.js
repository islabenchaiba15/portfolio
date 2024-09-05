export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the project',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      description: 'An image representing the project',
      options: {
        hotspot: true // Enables image cropping
      }
    },
    {
      name: 'timeframe',
      title: 'Creation Timeframe',
      type: 'string',
      description: 'Range of time of project creation (e.g., "Jan 2023 - Mar 2023")',
      validation: Rule => Rule.required()
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'skill' }] }],
      description: 'Technologies used in the project (referenced to skill document)',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the project',
      validation: Rule => Rule.required()
    },
    {
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'Mobile App', value: 'mobileApp' },
          { title: 'Frontend', value: 'frontend' },
          { title: 'Fullstack', value: 'fullstack' },
          { title: 'Other', value: 'other' }
        ]
      },
      description: 'Type of the project',
      validation: Rule => Rule.required()
    },
    {
      name: 'githubLink',
      title: 'GitHub Link',
      type: 'url',
      description: 'Link to the project GitHub repository'
    },
    {
      name: 'websiteLink',
      title: 'Website Link',
      type: 'url',
      description: 'Link to the project website (if applicable)'
    },
    {
      name: 'article',
      title: 'Article',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Article content explaining the project',
    }
  ]
}