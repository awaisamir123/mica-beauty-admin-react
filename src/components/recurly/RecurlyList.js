import React,{Fragment} from 'react'

function RecurlyList({recurlyUser,num}) {
    const gotoRecurlyInfo = (recurlyUserInfo) =>{
        localStorage.setItem('recurly_UserCode',recurlyUserInfo.code);
        window.location.href = "/recurlyUser";
    }
    return (
        <Fragment>
            <tr onClick={ () => gotoRecurlyInfo(recurlyUser)}>
                <th>{num}</th>
                <th>{recurlyUser.code}</th>
                <th>{recurlyUser.firstName + ' ' + recurlyUser.lastName}</th>
            </tr>
        </Fragment>
    )
}

export default RecurlyList
