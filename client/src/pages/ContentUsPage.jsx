import React, { useState } from 'react';
import EditInfoDiv from '../components/EditInfoDiv/EditInfoDiv';
// import axios from 'axios'
// import CardItem from '../components/CardItem/CardItem'
// import endPoint from '../endPoints/serverEndPoint'
export default function ContentUsPage() {
  const [data, setData] = useState(null);
  return (
    <div>
      <EditInfoDiv />
    </div>
  );
}
