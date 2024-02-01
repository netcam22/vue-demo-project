const useChartDataPoints = (dataPoints, count) => {
    
    return dataPoints.map(dataPoint => {
        return {...dataPoint, y: count[dataPoint.name]};
    });
}
export default useChartDataPoints;