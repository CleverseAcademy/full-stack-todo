import { FieldProps } from 'formik'

export const TextInput = ({ field }: FieldProps) => (
  <input
    type="text"
    className="h-8 w-full ml-4 border-b-primary/80 border-b-2 rounded"
    {...field}
  />
)
export const DateInput = ({ field }: FieldProps) => (
  <input
    type="date"
    className="h-8 w-full ml-4 border-b-primary/80 border-b-2 rounded"
    {...field}
  />
)
