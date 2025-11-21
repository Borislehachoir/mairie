import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'article',
  title: 'Articles',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date de publication',
      type: 'date',
      options: {dateFormat: 'DD/MM/YYYY'},
    }),
    defineField({
      name: 'image',
      title: 'Image principale',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'content',
      title: 'Contenu de l’article',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'link',
      title: 'Lien externe (optionnel)',
      type: 'url',
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'author',
      title: 'Auteur',
      type: 'string',
      initialValue: 'Mairie de Sisco',
      readOnly: true,
    }),
  ],
})