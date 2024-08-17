import { useEffect, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';

import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import FlexBox from '../../ui/FlexBox';
import LeftUILayout from '../../ui/LeftUILayout';
import Container from '../../ui/Container';
import PathSelector from '../../ui/PathSelector';
import styles from './MainContent.module.css';

import Hr from '../../ui/Hr';

function MainContent() {
  const [mainContent, setMainContent] = useState(
    JSON.parse(window.localStorage.getItem('mainContent')) || [
      {
        head: '',
        sHead: '',
        ssHead: '',
        para: '',
        img: { imgPath: '', imgCaption: '', imgWidth: '', imgRotate: '' },
      },
    ],
  );

  const handleChange = (e, index, name) => {
    setMainContent((prev) => {
      const updatedState = [...prev];
      updatedState[index][name] = e.target.value;
      return updatedState;
    });
  };

  const append = (index, obj) => {
    setMainContent((prev) => {
      const updatedState = [...prev];
      updatedState.splice(index + 1, 0, obj);
      return updatedState;
    });
  };

  const appendListItem = (index, listInd) => {
    setMainContent((prev) => {
      const updatedState = [...prev];
      updatedState[index]?.list.splice(listInd + 1, 0, '');
      return updatedState;
    });
  };

  const remove = (index) => {
    setMainContent((prev) => {
      const updatedState = prev.filter((_, i) => {
        if (i === index) {
          return false;
        }
        return true;
      });

      return updatedState;
    });
  };

  const removeListItem = (index, listInd) => {
    setMainContent((prev) => {
      const updatedState = [...prev];

      updatedState[index].list = updatedState[index]?.list.filter((item, i) => {
        if (i === listInd) {
          return false;
        }
        return true;
      });

      if (updatedState[index].list.length === 0) {
        remove(index);
      }

      return updatedState;
    });
  };

  const handleImg = async (e, index, name) => {
    if (name === 'imgPath') {
      let path = await window.electronAPI.getFilesPath();
      if (!path) {
        path = [''];
      }

      path[0] = path[0].replace(/\\/g, '/');
      e.target.value = [path];
    }

    setMainContent((prev) => {
      const updatedState = [...prev];
      updatedState[index].img[name] = e.target.value;
      return updatedState;
    });
  };

  const handleListChange = (e, index, listInd) => {
    setMainContent((prev) => {
      const updatedState = [...prev];
      updatedState[index].list[listInd] = e.target.value;
      return updatedState;
    });
  };

  // save data on each render
  useEffect(() => {
    window.localStorage.setItem('mainContent', JSON.stringify(mainContent));
  }, [mainContent]);

  return (
    <LeftUILayout prev="/" next="/references">
      <Container heading="Main Content">
        {mainContent.map((element, index) => {
          return (
            <div key={index}>
              <Hr />
              <FlexBox className={styles.btnContainer}>
                <Button primary type="button" onClick={() => remove(index)}>
                  <MdDeleteForever />
                </Button>
                <Button
                  primary
                  type="button"
                  onClick={() => {
                    append(index - 1, { head: '' });
                  }}
                >
                  Heading
                </Button>
                <Button
                  primary
                  type="button"
                  onClick={() => {
                    append(index - 1, { sHead: '' });
                  }}
                >
                  Sub Heading
                </Button>
                <Button
                  primary
                  type="button"
                  onClick={() => {
                    append(index - 1, { ssHead: '' });
                  }}
                >
                  Sub Sub Heading
                </Button>
                <Button
                  primary
                  type="button"
                  onClick={() => {
                    append(index - 1, {
                      img: { imgPath: '', imgWidth: '50', imgRotate: '0' },
                    });
                  }}
                >
                  Image
                </Button>
                <Button
                  primary
                  type="button"
                  onClick={() => {
                    append(index - 1, { list: [''] });
                  }}
                >
                  Bullet Points
                </Button>
                <Button
                  primary
                  type="button"
                  onClick={() => {
                    append(index - 1, { para: '' });
                  }}
                >
                  Paragraph
                </Button>
              </FlexBox>

              {(element?.head || element?.head === '') && (
                <FormRow label="Heading">
                  <Input
                    name="head"
                    value={mainContent[index].head}
                    onChange={(e) => handleChange(e, index, 'head')}
                  />
                </FormRow>
              )}
              {(element?.sHead || element?.sHead === '') && (
                <FormRow label="Sub Heading">
                  <Input
                    name="sHead"
                    value={mainContent[index].sHead}
                    onChange={(e) => handleChange(e, index, 'sHead')}
                  />
                </FormRow>
              )}
              {(element?.ssHead || element?.ssHead === '') && (
                <FormRow label="Sub Sub Heading">
                  <Input
                    name="ssHead"
                    value={mainContent[index].ssHead}
                    onChange={(e) => handleChange(e, index, 'ssHead')}
                  />
                </FormRow>
              )}
              {(element?.img || element?.img === '') && (
                <>
                  <FlexBox>
                    <FormRow label="Image Path">
                      <PathSelector
                        name="imgPath"
                        value={mainContent[index].img.imgPath}
                        onClick={(e) => handleImg(e, index, 'imgPath')}
                      />
                    </FormRow>
                    <FlexBox className={styles.flexContainer}>
                      <FormRow label="Rotation (in Deg)">
                        <Input
                          name="imgRotate"
                          value={mainContent[index].img.imgRotate}
                          onChange={(e) => handleImg(e, index, 'imgRotate')}
                        />
                      </FormRow>
                      <FormRow label="Image Width (in %)">
                        <Input
                          name="imgWidth"
                          value={mainContent[index].img.imgWidth}
                          onChange={(e) => handleImg(e, index, 'imgWidth')}
                        />
                      </FormRow>
                    </FlexBox>
                  </FlexBox>
                  <FormRow label="Image Caption">
                    <Input
                      name="imgCaption"
                      value={mainContent[index].img.imgCaption}
                      onChange={(e) => handleImg(e, index, 'imgCaption')}
                    />
                  </FormRow>
                </>
              )}
              {(element?.list || element?.list === []) && (
                <FormRow label="Bullet Points">
                  <div className={styles.border}>
                    {element?.list.map((item, i) => (
                      <FlexBox
                        key={`list${i}`}
                        className={styles.listContainer}
                      >
                        <Input
                          name={`item${i}`}
                          value={item}
                          onChange={(e) => handleListChange(e, index, i)}
                        />
                        <Button
                          type="button"
                          onClick={() => appendListItem(index, i)}
                        >
                          Add
                        </Button>
                        <Button
                          className={styles.test}
                          type="button"
                          onClick={() => removeListItem(index, i)}
                        >
                          <MdDeleteForever />
                        </Button>
                      </FlexBox>
                    ))}
                  </div>
                </FormRow>
              )}

              {(element?.para || element?.para === '') && (
                <FormRow label="Paragraph">
                  <Input
                    rows={5}
                    name="para"
                    value={mainContent[index].para}
                    onChange={(e) => handleChange(e, index, 'para')}
                  />
                </FormRow>
              )}
            </div>
          );
        })}
        <FlexBox className={styles.btnContainer}>
          <Button
            primary
            type="button"
            onClick={() => {
              append(mainContent.length - 1, { head: '' });
            }}
          >
            Heading
          </Button>
          <Button
            primary
            type="button"
            onClick={() => {
              append(mainContent.length - 1, { sHead: '' });
            }}
          >
            Sub Heading
          </Button>
          <Button
            primary
            type="button"
            onClick={() => {
              append(mainContent.length - 1, { ssHead: '' });
            }}
          >
            Sub Sub Heading
          </Button>
          <Button
            primary
            type="button"
            onClick={() => {
              append(mainContent.length - 1, {
                img: { imgPath: '', imgWidth: '50', imgRotate: '0' },
              });
            }}
          >
            Image
          </Button>
          <Button
            primary
            type="button"
            onClick={() => {
              append(mainContent.length - 1, { list: [''] });
            }}
          >
            Bullet Points
          </Button>
          <Button
            primary
            type="button"
            onClick={() => {
              append(mainContent.length - 1, { para: '' });
            }}
          >
            Paragraph
          </Button>
        </FlexBox>
      </Container>
      <Button onClick={() => console.log(mainContent)}>Log Data</Button>
    </LeftUILayout>
  );
}

export default MainContent;
