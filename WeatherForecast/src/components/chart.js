import React from 'react';
import _ from 'lodash';

import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const Chart = (props) => {
    const roundedAvg = _.round(_.sum(props.data) / props.data.length);

    return (
        <div>
            <Sparklines height={ props.height } width={ props.width } data={ props.data }>
                <SparklinesLine color={ props.colour } />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>Avg : { roundedAvg } { props.units }</div>
        </div>
    );
};

export default Chart;