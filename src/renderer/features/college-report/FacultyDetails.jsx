import { useFormContext } from 'react-hook-form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Option from '../../ui/Option';
import Select from '../../ui/Select';
import Container from '../../ui/Container';
import FlexBox from '../../ui/FlexBox';

function FacultyDetails() {
  const { register, formState } = useFormContext();
  const { errors } = formState;
  const dept = ['IT', 'CSE', 'ECE', 'ME', 'EE', 'LT'];

  return (
    <Container heading="Faculty Details">
      <FormRow label="Guide Name" error={errors?.guide_name?.message}>
        <Input
          id="guide_name"
          {...register('guide_name', { required: 'This field is required' })}
        />
      </FormRow>

      <FlexBox>
        <FormRow label="Guide Designation" error={errors?.guide_degn?.message}>
          <Input
            id="guide_degn"
            {...register('guide_degn', { required: 'This field is required' })}
          />
        </FormRow>
        <FormRow label="Guide Department" error={errors?.guide_dept?.message}>
          <Select
            {...register('guide_dept', { required: 'This field is required' })}
          >
            {dept.map((d) => (
              <Option key={d} value={d}>
                {d}
              </Option>
            ))}
          </Select>
        </FormRow>
      </FlexBox>
      <FlexBox>
        <FormRow label="HoD Name" error={errors?.hod_name?.message}>
          <Input
            {...register('hod_name', { required: 'This field is required' })}
          />
        </FormRow>
        <FormRow label="HoD Department" error={errors?.hod_dept?.message}>
          <Select
            {...register('hod_dept', { required: 'This field is required' })}
          >
            {dept.map((d) => (
              <Option key={d} value={d}>
                {d}
              </Option>
            ))}
          </Select>
        </FormRow>
      </FlexBox>
    </Container>
  );
}

export default FacultyDetails;
