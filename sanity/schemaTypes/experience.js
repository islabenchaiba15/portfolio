export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Title of the experience (e.g., "graduation")',
        validation: Rule => Rule.required()
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
        description: 'Location of the experience (e.g., "ESI-SBA")',
        validation: Rule => Rule.required()
      },
      {
        name: 'date',
        title: 'Date',
        type: 'string',
        description: 'Date or duration of the experience (e.g., "Jul- 2024")',
        validation: Rule => Rule.required()
      },
      {
        name: 'img',
        title: 'Image',
        type: 'image',
        description: 'An image representing the experience',
        options: {
          hotspot: true // Enables image cropping
        }
      },
      {
        name: 'points',
        title: 'Points',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'List of key points or achievements during the experience',
        validation: Rule => Rule.required()
      }
    ]
  }