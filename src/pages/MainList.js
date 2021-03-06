import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MenuBar from '../components/common/MenuBar';
import { Inner } from '../components/layout/Inner';
import DefaultHeader from '../components/layout/write/DefaultHeader';
import StuffList from '../components/layout/write/StuffList';
import useCallList from '../utils/hooks/useCallList';
import WritePlus from '../components/layout/write/WritePlus';
import getLocation from '../components/layout/neighborhood/getLocation';
import filterArray from '../utils/filterArray';

const MainList = () => {
  const stuff = useSelector((state) => state.stuffs.data);
  const filterStatus = useSelector((state) => state.filter);
  const selecAddr = useSelector(({ neighbor: { address } }) => address);
  const geolocation = getLocation();
  const [addr, setAddr] = useState([]);
  useCallList();

  useEffect(() => {
    geolocation.then((res) => setAddr(Array.from(res)));
  }, []);

  useCallList();

  const filter = stuff?.filter((list) => {
    const filterValue = filterArray[list.category - 1].value;
    if (filterStatus[filterValue]) {
      return filterStatus[filterValue];
    }
    return 0;
  });

  return (
    <div>
      <DefaultHeader addr={addr} selecAddr={selecAddr} />
      <Inner>
        <StuffList data={filter} />
      </Inner>
      <WritePlus />
      <MenuBar />
    </div>
  );
};

export default MainList;
