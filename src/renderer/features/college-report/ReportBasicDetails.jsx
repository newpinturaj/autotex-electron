import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import ProjectDetails from './ProjectDetails';
import StudentsDetails from './StudentsDetails';
import FacultyDetails from './FacultyDetails';
import Form from '../../ui/Form';
import styles from './ReportBasicDetails.module.css';

import {
  genAck,
  genCandidateDecl,
  genCertificate,
  genCloser,
  genCover,
  genPreamble,
  genRef,
  genTableOfContent,
} from '../../template/latexGeneration';
import { NavLink } from 'react-router-dom';
import genLatex from './common';

function ReportBasicDetails() {
  const methods = useForm();
  const [message, setMessage] = useState('');

  const onSubmit = async (value) => {
    const latex = genLatex();

    const res = await window.electronAPI.saveAsPDF(latex);
    console.log(res);
    setMessage(res);

    // window.localStorage.setItem('basicInfo', value);
    // console.log('basicInfo saved');
  };

  const saveToLocalStorage = () => {
    window.localStorage.setItem(
      'basicInfo',
      JSON.stringify(methods.getValues()),
    );
    console.log(methods.getValues());
  };

  return (
    <>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className={styles.formContainer}>
            <div className={styles.formGroup}>
              <ProjectDetails />
            </div>
            <div className={styles.formGroup}>
              <StudentsDetails />
            </div>
            <div className={styles.formGroup}>
              <FacultyDetails />
            </div>
            {/* <hr /> <hr /> */}
            {/* <AdditionalDetails /> */}
            <div className={styles.formGroupButton}>
              <button type="submit">Generate PDF</button>
            </div>
            <div className={styles.formGroupButton}>
              <NavLink to="/mainContent" onClick={saveToLocalStorage}>
                Next
              </NavLink>
            </div>
          </div>
        </Form>
      </FormProvider>
      {/* <DevTool control={methods.control} /> */}
    </>
  );
}

export default ReportBasicDetails;
