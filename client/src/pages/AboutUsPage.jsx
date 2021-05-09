import axios from 'axios';
import React from 'react';

export default function AboutUsPage() {
  const search = async () => {
    console.time('check');
    const { data } = await axios.get(
      'https://raw.githubusercontent.com/GabMic/israeli-cities-and-streets-list/master/israeli_street_and_cities_names.json'
    );

    const list2 = {};
    data.streets.forEach((item, i) => {
      if (!list2[item.city_name]) list2[item.city_name] = [];
      list2[item.city_name].push(item.street_name);
    });
    console.log(list2);
    console.timeEnd('check');
  };
  return (
    <div>
      <button onClick={search}>חפש</button>
    </div>
  );
}
