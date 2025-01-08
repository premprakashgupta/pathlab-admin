"use client"

import { useAuthRedirect } from '@/lib/hooks';
import React from 'react';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import RoundedBtn from '@/app/components/buttons/RoundedBtn';
import { superAdminSidebarData } from '@/app/constants/sidebar';

function SuperAdminDashboard() {
  useAuthRedirect();
    const [organizations, setOrganizations] = useState([
        { id: 1, name: 'HealthFirst', branches: 10 },
        { id: 2, name: 'MediCore', branches: 7 },
        { id: 3, name: 'PathWay Labs', branches: 5 }
    ]);

    return (
            <div className="flex h-full w-full">            
                <div className="flex-grow bg-gray-100 p-6">
                    <div className='flex justify-between items-center'>
                    <h1 className="text-3xl font-bold mb-6">Organizations</h1> <RoundedBtn className='bg-light-primary-500 text-white dark:bg-dark-primary-200 dark:text-dark-primary-900' onClick={()=>console.log("clicked")} >Organisation</RoundedBtn>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4">
                        <h2 className="text-xl font-semibold mb-4">Total Organizations: {organizations.length}</h2>
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th className="border-b p-2">#</th>
                                    <th className="border-b p-2">Organization Name</th>
                                    <th className="border-b p-2">Number of Branches</th>
                                    <th className="border-b p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {organizations.map((org, index) => (
                                    <tr key={org.id}>
                                        <td className="border-b p-2">{index + 1}</td>
                                        <td className="border-b p-2">{org.name}</td>
                                        <td className="border-b p-2">{org.branches}</td>
                                        <td className="border-b p-2">
                                            <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600">Edit</button>
                                            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    );
}

export default SuperAdminDashboard;
