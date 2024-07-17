import { useFormContext } from 'react-hook-form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import styles from './ProjectDetails.module.css';
import Select from '../../ui/Select';
import Option from '../../ui/Option';

function ProjectDetails() {
  const { register, formState } = useFormContext();
  const { errors } = formState;
  const dept = ['IT', 'CSE', 'ECE', 'ME', 'EE', 'LT'];

  return (
    <div className={styles.projectContainer}>
      <h3 className={styles.heading}>Project Details</h3>
      <div className={styles.formContainer}>
        <div>
          <FormRow label="Title" error={errors?.title?.message}>
            <Input
              id="title"
              {...register('title', { required: 'This field is required' })}
            />
          </FormRow>
        </div>
        <div>
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
        </div>
      </div>
      <div className={styles.workContainer}>
        <div>
          <FormRow
            id="workLabel"
            label="Work Duration"
            error={errors?.work_duration?.message}
          >
            <div>
              <p>From</p>
              <Input
                id="work_duration_from"
                type="date"
                {...register('work_duration.from', {
                  required: 'This field is required',
                })}
              />
              <p>To</p>
              <Input
                id="work_duration_to"
                type="date"
                {...register('work_duration.to', {
                  required: 'This field is required',
                })}
              />
            </div>
          </FormRow>
        </div>
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
      </div>
    </div>
  );
}

export default ProjectDetails;
