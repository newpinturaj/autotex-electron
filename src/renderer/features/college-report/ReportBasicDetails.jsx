// import axios from 'axios';
import { FormProvider, useForm } from 'react-hook-form';
import ProjectDetails from './ProjectDetails';
import StudentsDetails from './StudentsDetails';
import FacultyDetails from './FacultyDetails';
import Form from '../../ui/Form';
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

function ReportBasicDetails() {
  const methods = useForm();

  const onSubmit = async (value) => {
    const latex =
      genPreamble(value) +
      genCover(value) +
      genCandidateDecl(value) +
      genCertificate(value) +
      genAck(value) +
      genTableOfContent() +
      genRef(value) +
      genCloser();

    // console.log(latex);
    // await axios.post('/api/v1/latex/pdf/compile', {
    //   latexContent: latex,
    // });
    console.log(latex);
  };

  function handleClick() {
    console.log('Clicked');
  }

  return (
    <>
      <FormProvider {...methods}>
        <Form onSubmit={onSubmit}>
          <ProjectDetails />
          <StudentsDetails />
          <FacultyDetails />
          {/* <AdditionalDetails /> */}
          <button type="button" onClick={handleClick}>
            Submit
          </button>
        </Form>
      </FormProvider>
      {/* <DevTool control={methods.control} /> */}
    </>
  );
}

export default ReportBasicDetails;
