import { useEffect } from 'react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { MdDeleteForever } from 'react-icons/md';
// import { DevTool } from '@hookform/devtools';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import LeftUILayout from '../../ui/LeftUILayout';
import Button from '../../ui/Button';
import Hr from '../../ui/Hr';
import PathSelector from '../../ui/PathSelector';
import FlexBox from '../../ui/FlexBox';
import styles from './MainContent.module.css';
import Container from '../../ui/Container';

function MainContent() {
  const methods = useForm({
    defaultValues: {
      mainContent: JSON.parse(window.localStorage.getItem('mainContent')) || [
        {
          head: '',
          sHead: '',
          ssHead: '',
          para: '',
          imgCaption: '',
          points: ['', ''],
          imgPath: '',
          imgWidth: '50',
          imgRotate: '0',
        },
      ],
    },
  });

  const { control, register, formState, watch, setValue } = methods;
  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: 'mainContent',
    control,
  });

  useEffect(() => {
    const subscription = watch((value) => {
      window.localStorage.setItem(
        'mainContent',
        JSON.stringify(value.mainContent),
      );
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = () => {
    console.log('onSubmit Called in MainContent');
  };

  return (
    <LeftUILayout prev="/" next="/references">
      <Container heading="Main Content">
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmit)}>
            {fields.map((field, index) => (
              <div key={field.id}>
                {index > 0 && (
                  <Button primary type="button" onClick={() => remove(index)}>
                    <MdDeleteForever />
                  </Button>
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

                <FlexBox>
                  <FormRow label="Image Path">
                    <PathSelector
                      {...register(`mainContent.${index}.imgPath`)}
                      onClick={async () => {
                        let path = await window.electronAPI.getFilesPath();
                        if (!path) {
                          path = [''];
                        }

                        path[0] = path[0].replace(/\\/g, '/');
                        setValue(`mainContent.${index}.imgPath`, path[0], {
                          shouldDirty: true,
                          shouldTouch: true,
                          shouldValidate: true,
                        });
                      }}
                    />
                  </FormRow>
                  <FlexBox className={styles.flexContainer}>
                    <FormRow label="Rotation (in Deg.)">
                      <Input
                        {...register(`mainContent.${index}.imgRotate`, {
                          valueAsNumber: true,
                        })}
                      />
                    </FormRow>
                    <FormRow label="Image Width (in %)">
                      <Input
                        {...register(`mainContent.${index}.imgWidth`, {
                          valueAsNumber: true,
                        })}
                      />
                    </FormRow>
                  </FlexBox>
                  {console.log(field?.points)}
                </FlexBox>
                <FormRow label="Image Caption">
                  <Input {...register(`mainContent.${index}.imgCaption`)} />
                </FormRow>
                {field?.points.map((point, ind) => (
                  <FormRow label="Bullet Point">
                    <Input
                      {...register(`mainContent.${index}.points.${ind}`)}
                    />
                  </FormRow>
                ))}
                <Button onClick={() => append({ points: [''] })}>
                  Add Points
                </Button>
                <FormRow
                  label="Paragraph"
                  error={errors?.[index]?.para?.message}
                >
                  <Input rows={5} {...register(`mainContent.${index}.para`)} />
                </FormRow>

                <Hr />
              </div>
            ))}
            <Button
              primary
              type="button"
              onClick={() =>
                append({
                  head: '',
                  sHead: '',
                  ssHead: '',
                  para: '',
                  imgCaption: '',
                  imgPath: '',
                  imgWidth: '50',
                  imgRotate: '0',
                })
              }
            >
              Add Fields
            </Button>
          </Form>
        </FormProvider>
      </Container>

      {/* <DevTool control={methods.control} /> */}
    </LeftUILayout>
  );
}

export default MainContent;
