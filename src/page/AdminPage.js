import React from 'react'
import CreatorList from '../component/Admin/CreatorList'
import ReportList from '../component/Admin/ReportList'
// import Statistics from '../component/CreatorStatistics/Statistics'
import Statistics from '../component/Admin/Statistics'

export default function AdminPage() {
    return (
        <div>
            {/* <CreatorList /> */}
            <Statistics />
            <ReportList  />
            {/* <Statistics /> */}
        </div>
    )
}
