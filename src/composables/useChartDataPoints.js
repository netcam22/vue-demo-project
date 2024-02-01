import useGetChartData from "./useGetChartData";
import useCountData from "./useCountData";

export const useChartDataPoints = (dataPoints, countValues, DATA_TYPE, noOfValues) => {
    
    const count = useCountData(DATA_TYPE, useGetChartData(DATA_TYPE, noOfValues), countValues);
    return dataPoints.map(dataPoint => {
        return {...dataPoint, y: count[dataPoint.name]};
    });
}