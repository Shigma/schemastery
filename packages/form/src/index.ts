import { App, Component } from 'vue'
import { getFallback, Schema, toColumns, useDisabled, useEntries, useModel } from './utils'
import SchemaBase from './base.vue'
import Primitive from './primitive.vue'
import SchemaCheckbox from './extensions/checkbox.vue'
import SchemaGroup from './extensions/group.vue'
import SchemaIntersect from './extensions/intersect.vue'
import SchemaObject from './extensions/object.vue'
import SchemaRadio from './extensions/radio.vue'
import SchemaMultiSelect from './extensions/multiselect.vue'
import SchemaTable from './extensions/table.vue'
import SchemaTextarea from './extensions/textarea.vue'
import SchemaTuple from './extensions/tuple.vue'
import SchemaUnion from './extensions/union.vue'
import KBadge from './badge.vue'
import KSchema from './schema.vue'
import KForm from './form.vue'

import './styles/index.scss'

const extensions = new Set<form.Extension>()

export * from 'cosmokit'

export { Primitive }
export { Schema, useI18nText } from './utils'

export * from './icons'

export const form = Object.assign(SchemaBase, {
  Form: KForm,
  Badge: KBadge,
  Schema: KSchema,
  useModel,
  useEntries,
  useDisabled,
  getFallback,
  extensions,
  install(app: App) {
    app.provide('__SCHEMASTERY_EXTENSIONS__', extensions)
    app.component('k-form', KForm)
    app.component('k-badge', KBadge)
    app.component('k-schema', KSchema)
  },
}) as typeof SchemaBase & {
  Form: typeof KForm
  Badge: typeof KBadge
  Schema: typeof KSchema
  useModel: typeof useModel
  useEntries: typeof useEntries
  useDisabled: typeof useDisabled
  getFallback: typeof getFallback
  extensions: Set<form.Extension>
  install: (app: App) => void
}

export namespace form {
  export interface Extension {
    type?: string
    role?: string
    validate?: (value: any, schema: Schema) => boolean
    component: Component
    important?: boolean
  }
}

form.extensions.add({
  type: 'bitset',
  role: 'select',
  component: SchemaMultiSelect,
  validate: value => typeof value === 'number' || Array.isArray(value) && value.every(v => typeof v === 'string'),
})

form.extensions.add({
  type: 'array',
  role: 'select',
  component: SchemaMultiSelect,
  validate: value => Array.isArray(value) && value.every(v => typeof v === 'string'),
})

form.extensions.add({
  type: 'bitset',
  component: SchemaCheckbox,
  validate: value => typeof value === 'number' || Array.isArray(value) && value.every(v => typeof v === 'string'),
})

form.extensions.add({
  type: 'array',
  role: 'checkbox',
  component: SchemaCheckbox,
  validate: value => Array.isArray(value) && value.every(v => typeof v === 'string'),
})

form.extensions.add({
  type: 'array',
  component: SchemaGroup,
  validate: value => Array.isArray(value),
})

form.extensions.add({
  type: 'dict',
  component: SchemaGroup,
  validate: value => typeof value === 'object',
})

form.extensions.add({
  type: 'object',
  component: SchemaObject,
  validate: value => typeof value === 'object',
})

form.extensions.add({
  type: 'intersect',
  component: SchemaIntersect,
  validate: value => typeof value === 'object',
})

form.extensions.add({
  type: 'union',
  role: 'radio',
  component: SchemaRadio,
})

form.extensions.add({
  type: 'array',
  role: 'table',
  component: SchemaTable,
  validate: (value, schema) => Array.isArray(value) && !!toColumns(schema.inner),
})

form.extensions.add({
  type: 'dict',
  role: 'table',
  component: SchemaTable,
  validate: (value, schema) => typeof value === 'object' && !!toColumns(schema.inner),
})

form.extensions.add({
  type: 'string',
  role: 'textarea',
  component: SchemaTextarea,
  validate: value => typeof value === 'string',
})

form.extensions.add({
  type: 'tuple',
  component: SchemaTuple,
  validate: value => Array.isArray(value),
})

form.extensions.add({
  type: 'union',
  component: SchemaUnion,
})

export default form
