import { useEffect } from 'react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { MdDeleteForever } from 'react-icons/md';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import genLatex from './common';
import LeftUILayout from '../../ui/LeftUILayout';
import Button from '../../ui/Button';
import styles from './References.module.css';
import Hr from '../../ui/Hr';

function References() {
  const methods = useForm({
    defaultValues: {
      references: [{ refText: '', refUrl: '' }],
    },
  });

  const { control, register, formState, handleSubmit, watch } = methods;
  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: 'references',
    control,
  });

  useEffect(() => {
    const subscription = watch((value) => {
      window.localStorage.setItem(
        'references',
        JSON.stringify(value.references),
      );
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = async (value) => {
    window.localStorage.setItem('references', JSON.stringify(value.references));
    const latex = genLatex();
    await window.electronAPI.saveAsPDF(latex);
  };

  return (
    <LeftUILayout prev="/mainContent">
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field, index) => {
            return (
              <div key={field.id}>
                {index > 0 && (
                  <Button primary type="button" onClick={() => remove(index)}>
                    <MdDeleteForever />
                  </Button>
                )}
                <div className={styles.input_container}>
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
                <Hr />
              </div>
            );
          })}
        </Form>
        <Button
          primary
          type="button"
          onClick={() => append({ refText: '', refUrl: '' })}
        >
          Add
        </Button>
      </FormProvider>
    </LeftUILayout>
  );
}

export default References;
