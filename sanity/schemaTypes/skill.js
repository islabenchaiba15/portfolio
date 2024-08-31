export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'Name of the skill',
        validation: Rule => Rule.required()
      },
      {
        name: 'percentage',
        title: 'Percentage',
        type: 'number',
        description: 'Proficiency percentage of the skill (0-100)',
        validation: Rule => Rule.required().min(0).max(100)
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        description: 'An image representing the skill',
        options: {
          hotspot: true // Enables image cropping
        }
      }
    ]
  }