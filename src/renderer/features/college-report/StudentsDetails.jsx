import { useFormContext } from 'react-hook-form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Option from '../../ui/Option';
import Select from '../../ui/Select';

function StudentsDetails() {
  const { register, formState } = useFormContext();
  const { errors } = formState;

  return (
    <div>
      <h3>Students Details</h3>
      <FormRow label="Student Name 1" error={errors?.stu_name1?.message}>
        <Input
          id="stu_name1"
          {...register('stu_name1', { required: 'This field is required' })}
        />
      </FormRow>
      <FormRow label="Registration No. 1" error={errors?.stu_reg1?.message}>
        <Input
          id="stu_reg1"
          {...register('stu_reg1', { required: 'This field is required' })}
        />
      </FormRow>
      <FormRow label="Student Name 2" error={errors?.stu_name2?.message}>
        <Input id="stu_name2" {...register('stu_name2')} />
      </FormRow>
      <FormRow label="Registration No. 2" error={errors?.stu_reg2?.message}>
        <Input id="stu_reg2" {...register('stu_reg2')} />
      </FormRow>
      <FormRow label="Student Name 3" error={errors?.stu_name3?.message}>
        <Input id="stu_name3" {...register('stu_name3')} />
      </FormRow>
      <FormRow label="Registration No. 3" error={errors?.stu_reg3?.message}>
        <Input id="stu_reg3" {...register('stu_reg3')} />
      </FormRow>
      <FormRow label="Student Name 4" error={errors?.stu_name4?.message}>
        <Input id="stu_name4" {...register('stu_name4')} />
      </FormRow>
      <FormRow label="Registration No. 4" error={errors?.stu_reg4?.message}>
        <Input id="stu_reg4" {...register('stu_reg4')} />
      </FormRow>
      <FormRow label="Semester" error={errors?.stu_reg4?.message}>
        <Select {...register('sem', { required: 'This field is required' })}>
          {Array.from({ length: 8 }, (_, index) => index + 1).map(ind => (
            <Option key={ind} value={ind}>
              {ind}
            </Option>
          ))}
        </Select>
      </FormRow>
    </div>
  );
}

export default StudentsDetails;
