import React, { useEffect, useState } from "react";
import styles from "./PeoplePage.module.css";
import { getApiResource } from "../../utils/network";
import { API_PEOPLE} from "../../constants/api";
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";
import PeopleList from "../../components/PeoplePage/PeopleList/PeopleList";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import { PropTypes } from 'prop-types';
import { useQueryParams } from "../../hooks/useQueryParams";

 function PeoplePage({setErrorApi}) {
  const [people, setPeople] = useState(null);

  const query = useQueryParams()
  const queryPage = query.get('page')


  const getResource = async (url) => {
    const res = await getApiResource(url);

    if(res){
        const peopleList = res.results.map(({ name, url }) => {
            const id = getPeopleId(url);
            const img = getPeopleImage(id);
            return {
              id,
              name,
              img,
            };
        });
        setPeople(peopleList);
        setErrorApi(false)
    } else {
        setErrorApi(true)
    }
  };
  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, [queryPage]);
  return (
    <>
      {
        people ? (
            <PeopleList people = {people}/>
          ) : (
            <h2>Loading...</h2>
          )
      }
    </>
  );
}

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);