import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

function Linechart({ graphLink }) {
    const [graphData, setGraphData] = useState([]);
    const [options, setOptions] = useState({
        xaxis: {
            categories: []
        },
        yaxis: {
            title: { text: "Price" }
        }
    });

    useEffect(() => {
        const fetchGraphData = async () => {
            try {
                const response = await axios.get(graphLink);
                const { graphData, high, mean, low } = response.data.data;
                
                setGraphData(graphData);

                const categories = graphData.map(data => new Date(data[0] * 1000).toLocaleDateString());
                setOptions(prevOptions => ({
                    ...prevOptions,
                    xaxis: {
                        categories
                    }
                }));

                console.log("High:", high);
                console.log("Mean:", mean);
                console.log("Low:", low);
            } catch (error) {
                console.error('Error fetching graph data: ', error);
            }
        };

        fetchGraphData();
    }, [graphLink]);

    return (
        <React.Fragment>
            <div className='container-fluid mt-3 mb-3'>
                <Chart
                    type='line'
                    width={1490}
                    height={550}
                    series={[{ data: graphData }]}
                    options={options}
                />
            </div>
        </React.Fragment>
    );
}

export default Linechart;
