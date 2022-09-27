import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { LoaderContainer } from './styles';

const Loading = ({ loading = true, LoadingSize = 80}) => {

  return (
    <LoaderContainer>
        <ClipLoader color={"var(--mainColor)"} loading={loading} size={LoadingSize} />
    </LoaderContainer>
  )
}

export default Loading;