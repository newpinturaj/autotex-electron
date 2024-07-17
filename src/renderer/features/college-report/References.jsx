import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import genLatex from './common';

function References() {
  const methods = useForm({
    defaultValues: {
      references: [{ refText: '', refUrl: '' }],
    },
  });

  const { control, register, formState, handleSubmit } = methods;
  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: 'references',
    control,
  });

  const onSubmit = async (value) => {
    window.localStorage.setItem('references', JSON.stringify(value.references));
    const latex = genLatex();
    await window.electronAPI.saveAsPDF(latex);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field, index) => {
            return (
              <div key={field.id}>
                {index > 0 && (
                  <button type="button" onClick={() => remove(index)}>
                    &times;
                  </button>
                )}

                <FormRow
                  label={`Reference ${index + 1}`}
                  error={errors?.[index]?.refs?.message}
                >
                  <Input {...register(`references.${index}.refText`)} />
                </FormRow>
                <FormRow
                  label={`URL ${index + 1}`}
                  error={errors?.[index]?.refs?.message}
                >
                  <Input {...register(`references.${index}.refUrl`)} />
                </FormRow>
              </div>
            );
          })}
          <button type="submit">Submit</button>
        </Form>
        <button
          type="button"
          onClick={() => append({ refText: '', refUrl: '' })}
        >
          Add
        </button>
      </FormProvider>
      <NavLink to="/mainContent">Prev</NavLink>
      {/* // TODO: use appropriate element */}
      <button name="submit" type="submit">
        Generate PDF
      </button>
    </div>
  );
}

export default References;
