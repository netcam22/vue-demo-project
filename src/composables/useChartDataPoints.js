import useGetChartData from "./useGetChartData";
import useCountData from "./useCountData";

export const useChartDataPoints = (dataPoints, countValues, DATA_TYPE) => {
    
    const count = useCountData(DATA_TYPE, useGetChartData(DATA_TYPE, 10), countValues);
    return dataPoints.map(dataPoint => {
        return {...dataPoint, y: count[dataPoint.name]};
    });
}