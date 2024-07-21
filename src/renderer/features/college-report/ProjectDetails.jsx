import { useFormContext } from 'react-hook-form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import Option from '../../ui/Option';
import Fieldset from '../../ui/Fieldset';
import Container from '../../ui/Container';
import FlexBox from '../../ui/FlexBox';

function ProjectDetails() {
  const { register, formState } = useFormContext();
  const { errors } = formState;
  const dept = ['IT', 'CSE', 'ECE', 'ME', 'EE', 'LT'];

  return (
    <Container heading="Project Details">
      <FormRow label="Title" error={errors?.title?.message}>
        <Input
          id="title"
          {...register('title', { required: 'This field is required' })}
        />
      </FormRow>
      <FlexBox>
        <FormRow
          label="Submission Date"
          error={errors?.submission_date?.message}
        >
          <Input
            id="submission_date"
            type="date"
            {...register('submission_date', {
              required: 'This field is required',
            })}
          />
        </FormRow>

        <FormRow label="Department" error={errors?.stu_dept?.message}>
          <Select
            {...register('stu_dept', { required: 'This field is required' })}
          >
            {dept.map((d) => (
              <Option key={d} value={d}>
                {d}
              </Option>
            ))}
          </Select>
        </FormRow>
      </FlexBox>

      <Fieldset name="Work Duration">
        <FormRow
          id="workLabel_from"
          label="From"
          error={errors?.work_duration?.to?.message}
        >
          <Input
            id="work_duration_from"
            type="date"
            {...register('work_duration.from', {
              required: 'This field is required',
            })}
          />
        </FormRow>
        <FormRow
          id="workLabel_to"
          label="To"
          error={errors?.work_duration?.from?.message}
        >
          <Input
            id="work_duration_to"
            type="date"
            {...register('work_duration.to', {
              required: 'This field is required',
            })}
          />
        </FormRow>
      </Fieldset>
    </Container>
  );
}

export default ProjectDetails;
