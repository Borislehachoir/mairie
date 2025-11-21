import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Catégories',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nom de la catégorie',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL automatique)',
      type: 'slug',
      options: {
        source: 'title', // génère automatiquement à partir du titre
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description (optionnelle)',
      type: 'text',
    }),
  ],
})