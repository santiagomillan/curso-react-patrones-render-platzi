import React from 'react'
import {withStorageListener} from './withStorageListener'

function ChangeAlert({show,toggleShow}) {
    if(show){
        return (
            <p>ChangeAlert</p>
        )
    }
}
const ChangeAlertWhithStorageListener = withStorageListener(ChangeAlert)

export  {ChangeAlertWhithStorageListener}