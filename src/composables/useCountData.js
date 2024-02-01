const useCountData = (DATA_KIND, data, countValues) => {

  if (data) {
    return data.map((row) => {
      return DATA_KIND.filter((item) => {return item === row.data});
  }).reduce((acc, item) => {
      return {...acc, [item[0]]: acc[item[0]]+1} 
  }, countValues);
  }
  else {
    return countValues;
  }

};
export default useCountData;