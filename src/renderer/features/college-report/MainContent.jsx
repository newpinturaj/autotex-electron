import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { genMainContent } from '../../template/latexGeneration';

function MainContent() {
  // const { register, control, handleSubmit } = useForm({});
  const methods = useForm({
    defaultValues: {
      mainContent: [
        {
          head: '',
          sHead: '',
          ssHead: '',
        },
      ],
    },
  });
  const { control, register, formState } = methods;
  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: 'mainContent',
    control,
  });

  const onSubmit = async (value) => {
    let latex = window.localStorage.getItem('basicInfo');
    latex = latex.concat(genMainContent(value.mainContent));
    // const data = genMainContent(value.mainContent);
    // console.log(data);
    console.log(latex);
  };

  const saveToLocalStorage = () => {
    window.localStorage.setItem(
      'mainContent',
      JSON.stringify(methods.getValues().mainContent),
    );

    console.log(methods.getValues().mainContent);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          {fields.map((field, index) => (
            <div key={field.id}>
              {index > 0 && (
                <button type="button" onClick={() => remove(index)}>
                  &times;
                </button>
              )}
              <FormRow label="Heading" error={errors?.[index]?.head?.message}>
                <Input {...register(`mainContent.${index}.head`)} />
              </FormRow>
              <FormRow
                label="Sub Heading"
                error={errors?.[index]?.sHead?.message}
              >
                <Input {...register(`mainContent.${index}.sHead`)} />
              </FormRow>
              <FormRow
                label="Sub Sub Heading"
                error={errors?.[index]?.ssHead?.message}
              >
                <Input {...register(`mainContent.${index}.ssHead`)} />
              </FormRow>
              <FormRow label="Paragraph" error={errors?.[index]?.para?.message}>
                <textarea rows={5} {...register(`mainContent.${index}.para`)} />
              </FormRow>
            </div>
          ))}
          <button type="button" onClick={() => append({ head: '' })}>
            Add Fields
          </button>
          <button type="submit">Submit</button>
        </Form>
      </FormProvider>

      <NavLink to="/">Prev</NavLink>
      <NavLink to="/references" onClick={saveToLocalStorage}>
        Next
      </NavLink>
    </div>
  );
}

export default MainContent;
