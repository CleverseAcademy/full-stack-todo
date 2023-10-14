import { Field, Form, FormikProps } from 'formik'
import TodoFormFields from '../types/todo.form'
import { DateInput, TextInput } from './Fields'
import { FormSubmissionType, TodoSubmissionProps } from './TodoFormProps.type'

type TodoFormType = <T extends FormSubmissionType>(
  props: TodoSubmissionProps<T> & FormikProps<TodoFormFields>,
) => JSX.Element

const dictionary: { [k in FormSubmissionType]: string } = {
  create: 'Add',
  update: 'Update !',
  delete: 'Remove',
}

const TodoForm: TodoFormType = ({ type, errors, touched }) => {
  return (
    <Form>
      <div className="grid grid-rows-4 px-8">
        <div className="grid grid-cols-4">
          <div>
            <div className="flex flex-col text-left">
              <label htmlFor="title" className="text-lg font-Roboto">
                Title:
              </label>
              {touched.title && errors.title && (
                <p className="text-xl text-secondary font-semibold">
                  {errors.title}
                </p>
              )}
            </div>
          </div>
          <div className="col-span-2">
            <Field name="title" component={TextInput} />
          </div>
        </div>
        <div className="grid grid-cols-4 text-left">
          <label htmlFor="description" className="text-lg font-Roboto">
            Description:
          </label>
          <div className="col-span-2">
            <Field name="description" component={TextInput} />
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="flex flex-col text-left">
            <label htmlFor="dueDate" className="text-lg font-Roboto">
              Due Date:
            </label>
            {touched.dueDate && errors.dueDate && <p>{errors.dueDate}</p>}
          </div>
          <div className="col-span-2">
            <Field name="dueDate" component={DateInput} />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            className="shadow-lg bg-secondary rounded p-2 text-white font-Roboto"
            type="submit"
          >
            {dictionary[type]}
          </button>
        </div>
      </div>
    </Form>
  )
}

export default TodoForm
