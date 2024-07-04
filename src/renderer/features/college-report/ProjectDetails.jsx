import { useFormContext } from 'react-hook-form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Option from '../../ui/Option';
import Select from '../../ui/Select';

function ProjectDetails() {
  const { register, formState } = useFormContext();
  const { errors } = formState;
  const dept = ['IT', 'CSE', 'ECE', 'ME', 'EE', 'LT'];

  return (
    <div>
      <h3>Project Details</h3>
      <FormRow label="Title" error={errors?.title?.message}>
        <Input
          id="title"
          {...register('title', { required: 'This field is required' })}
        />
      </FormRow>
      <FormRow label="Work Duration" error={errors?.work_duration?.message}>
        <div>
          <p>From</p>
          <Input
            id="work_duration_from"
            type="date"
            {...register('work_duration.from', {
              required: 'This field is required',
              valueAsDate: true,
            })}
          />
          <p>To</p>
          <Input
            id="work_duration_to"
            type="date"
            {...register('work_duration.to', {
              required: 'This field is required',
              valueAsDate: true,
            })}
          />
        </div>
      </FormRow>
      <FormRow label="Submission Date" error={errors?.submission_date?.message}>
        <Input
          id="submission_date"
          type="date"
          {...register('submission_date', {
            required: 'This field is required',
            valueAsDate: true,
          })}
        />
      </FormRow>
      <FormRow label="Department" error={errors?.hod_dept?.message}>
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
    </div>
  );
}

export default ProjectDetails;
