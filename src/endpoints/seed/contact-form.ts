import { RequiredDataFromCollectionSlug } from 'payload'

import { heading, paragraph, richText } from './richtext'

export const contactForm: RequiredDataFromCollectionSlug<'forms'> = {
  title: 'Formulario de contacto',
  submitButtonLabel: 'Enviar consulta',
  confirmationType: 'message',
  confirmationMessage: richText(
    heading('h2', '¡Gracias por escribirnos!'),
    paragraph('Recibimos su consulta y nos pondremos en contacto a la brevedad. Toda la información es confidencial.'),
  ),
  // Los avisos por correo se configuran cuando agreguemos el proveedor de email (Resend)
  emails: [],
  fields: [
    {
      name: 'nombre',
      blockName: 'nombre',
      blockType: 'text',
      label: 'Nombre',
      required: true,
      width: 50,
    },
    {
      name: 'telefono',
      blockName: 'telefono',
      blockType: 'text',
      label: 'Teléfono o WhatsApp',
      required: true,
      width: 50,
    },
    {
      name: 'email',
      blockName: 'email',
      blockType: 'email',
      label: 'Correo electrónico',
      required: false,
      width: 100,
    },
    {
      name: 'para-quien',
      blockName: 'para-quien',
      blockType: 'select',
      label: '¿Para quién es la consulta?',
      required: true,
      width: 100,
      options: [
        { label: 'Para mí', value: 'para-mi' },
        { label: 'Para un familiar o ser querido', value: 'familiar' },
        { label: 'Para una empresa o institución', value: 'institucion' },
      ],
    },
    {
      name: 'mensaje',
      blockName: 'mensaje',
      blockType: 'textarea',
      label: 'Mensaje',
      required: false,
      width: 100,
    },
    {
      name: 'consentimiento',
      blockName: 'consentimiento',
      blockType: 'checkbox',
      label: 'Acepto que Proyecto Equilibrio utilice estos datos únicamente para responder mi consulta.',
      required: true,
      width: 100,
    },
  ],
}
