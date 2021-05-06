import React from 'react';
import AddItemsDiv from '../components/AddItemsDiv/AddItemsDiv';
import ItemsDiv from '../components/ItemsDiv/ItemsDiv';

export default function SettingsPage() {
  return (
    <div>
      <ItemsDiv />
      <h2>המוצרים להוספה:</h2>
      <AddItemsDiv />
    </div>
  );
}
