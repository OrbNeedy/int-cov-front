import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import UpdatesSidebar from '../components/UpdatesSidebar'
import SectionHeader from '../components/SectionHeader';
import './Common.css';
import './Modal.css';
import { SiteContext } from '../context/SiteContext';

// All images, Id array, Current id, Close function
const Modal = ({images, state, setState, close}) => {
  let context = useContext(SiteContext);
  function GetImage() {
    const imageIndex = state.imageIdList[state.selectedId];

    return images.find((img) => {return img._id == imageIndex});
  }

  return (
    <div className='modal-overlay' onClick={close}>
      <div className='modal-content' onClick={(e) => {e.stopPropagation()}}>
        <div className='modal-close' onClick={close} style={{ textAlign: 'right' }}>X</div>
        <div className='modal-image'>
          <div className='modal-title'>{GetImage().title}</div>
          <div className='modal-image-container'>
            <img src={context.back + '/images/storage/' + GetImage().path}/>
          </div>
          <div className='modal-image-bar'>
            {state.imageIdList.map((value, key) => {
              return(
                <div key={key} className={'modal-selector' + 
                (key == 0 ? ' selector-left' : '') + 
                (key == state.imageIdList.length - 1 ? ' selector-right' : '') + 
                (key == state.selectedId ? ' active-selector' : '')}
                onClick={() => {setState({ imageIdList: state.imageIdList, selectedId: key })}}>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const GalleryContainer = ({category, images, openModal}) => {
  let context = useContext(SiteContext);

  return (
    <div className='gallery-container'>
      <div className='gallery-title-container'>
        {category.title}
      </div>
      <div style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>
        {images.map((value, key) => {
          if (!category.images.includes(value._id)) return;
          
          const index = category.images.findIndex((x) => {return x == value._id});
          // category, imageIndex
          // console.log(context);
          return(
            <div className='image-container' onClick={() => {openModal(category, index)}} key={key}>
              <img alt={value.title} src={context.back + '/images/storage/' + value.path}/>
              <div>{value.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Gallery = () => {
  let context = useContext(SiteContext);
  const [ images, setImages ] = useState([]);
  const [ categories, setCategories ] = useState([]);

  const initialValues = {
    imageIdList: [], 
    selectedId: 0
  };
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ modalState, setModalState ] = useState(initialValues);

  useEffect(() => {
    DeactivateModal();

    axios.get(context.back + "/images").then((res) => {
      setImages(res.data.Images);
    });

    axios.get(context.back + "/image_categories").then((res) => {
      setCategories(res.data.Categories);
    });
  }, []);

  function ActivateModal(category, imageIndex) {
    setModalOpen(true);
    setModalState({ imageIdList: category.images, selectedId: imageIndex });
  }

  function DeactivateModal() {
    setModalOpen(false);
    setModalState(initialValues);
  }

  return (
    <div className='content-with-side'>
      <div className='content' style={{ width: '70%' }}>
        <SectionHeader text={'Gallery'}/>
        {categories.map((value, key) => {
          return(
            <GalleryContainer category={value} images={images} openModal={ActivateModal} key={key}/>
          );
        })}
      </div>
      <UpdatesSidebar/>
      {/*images, selected, currentId, close*/}
      {modalOpen ? 
      <Modal images={images} state={modalState} setState={setModalState} close={DeactivateModal}/> :
      ''}
    </div>
  )
}

export default Gallery