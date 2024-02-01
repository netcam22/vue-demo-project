const useGetChartData = (DATA_KIND, number) => {
    
	function choose(arr){
		if (!arr) arr = [];
		return arr[Math.floor(Math.random() * arr.length)];
	}

	function setIndexedData(data) {
		const chartData = data.map((item, index) => {
				return {...item, indexValue : index.toString()}
			});
		return chartData;
	}

	const amount = number ?? 50;

	const chartData = [];

	for (let i = 0; i < amount; i++) {
		chartData.push({
			data: choose([...DATA_KIND])
		});
	}
	return setIndexedData(chartData);
}

export default useGetChartData;