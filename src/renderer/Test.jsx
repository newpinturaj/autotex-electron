import { useForm } from 'react-hook-form';

function Test() {
  const { register, handleSubmit } = useForm();
  function onSubmit(value) {
    console.log('clicked');
    window.test.clickBtn();
    // console.log(window);
    window.electron.ipcRenderer.sendMessage('ipc-example', 'hello');
  }

  async function handleDialog() {
    const path = await window.electronAPI.openFile('dialog:openFile');
    console.log(path);
  }

  async function handleSave() {
    await window.electronAPI.saveAsPDF();
  }

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} />
        <button type="submit">Submit</button>
      </form>
      <button type="button" onClick={handleDialog}>
        Open Dialog
      </button>
      <button type="button" onClick={handleSave}>
        Save
      </button>
    </>
  );
}

export default Test;
