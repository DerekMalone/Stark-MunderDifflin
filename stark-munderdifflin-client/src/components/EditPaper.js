import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {  PaperForm } from '../components/index';
import { getPaperById } from '../data/paperData';

export default function EditProduct() {
  const { key } = useParams;
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    getPaperById(key).then(setEditItem);
  }, []);
  return (
    <>
      <h3 className="edit-view">
        Edit Paper
      </h3>
      <div className="form-container">
        <PaperForm editItem={editItem} />
      </div>
    </>
  );
}