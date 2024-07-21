import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// import { DevTool } from '@hookform/devtools';

import ProjectDetails from './ProjectDetails';
import StudentsDetails from './StudentsDetails';
import FacultyDetails from './FacultyDetails';
import Form from '../../ui/Form';
import styles from './ReportBasicDetails.module.css';
import Button from '../../ui/Button';

function ReportBasicDetails() {
  const navigate = useNavigate();
  const methods = useForm({
    defaultValues: JSON.parse(window.localStorage.getItem('basicInfo')),
  });

  const onSubmit = async (value) => {
    window.localStorage.setItem('basicInfo', JSON.stringify(value));
    navigate('/mainContent');
  };

  return (
    <>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className={styles.container}>
            <div className={styles.projectContainer}>
              <ProjectDetails />
            </div>
            <div className={styles.studentContainer}>
              <StudentsDetails />
            </div>
            <div className={styles.facultyContainer}>
              <FacultyDetails />
            </div>
            {/* <hr /> <hr /> */}
            {/* <AdditionalDetails /> */}
            <div className={styles.buttonContainer}>
              <Button primary type="submit">
                Save & Next &#9002;
              </Button>
            </div>
          </div>
        </Form>
      </FormProvider>
      {/* <DevTool control={methods.control} /> */}
    </>
  );
}

export default ReportBasicDetails;
