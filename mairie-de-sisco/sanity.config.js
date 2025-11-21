import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Mairie de Sisco',

  projectId: '0ytuv043',
  dataset: 'mairie',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
