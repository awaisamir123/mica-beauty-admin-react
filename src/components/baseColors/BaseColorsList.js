import React,{Fragment} from 'react'
import BaseColorModal from './BaseColorModal'
function BaseColorsList({color,number}) {
    
    return (
        <Fragment>
        <tr >
            <th scope="row">{number}</th>
            <th scope="col">{color.colorIdentifier}</th>
            <th scope="col">{color.colorCode}</th>
            <Fragment>
                {color.definition === 'New Color' ? (
                    <th scope="col">
                        <BaseColorModal color={color}/>
                    </th>
                ): <th scope="col">{color.definition}</th>}
            </Fragment>
        </tr>
    </Fragment>
    )
}

export default BaseColorsList
