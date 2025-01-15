"use client"
import React, { useEffect, useState } from 'react';

type Props = {
    totalCount: number;
    perPageCount: number;
    currentPage: number;
    onPageChange: (page: number) => void;
};

const Pagination = (props: Props) => {
    const stepper = 4;  // Number of pages to skip when clicking ">>" or "<<"
    const { totalCount, perPageCount, currentPage, onPageChange } = props;

    const [boxes, setBoxes] = useState<number[]>([]);

    useEffect(() => {
        // Calculate the number of pages
        const pageCount = Math.ceil(totalCount / perPageCount);
        setBoxes(Array.from({ length: pageCount }, (_, index) => index + 1));
    }, [totalCount, perPageCount]);

    // Helper to generate visible pages based on current page
    const getVisiblePages = () => {
        const start = Math.max(currentPage - Math.floor(stepper / 2), 0);
        const end = Math.min(start + stepper, boxes.length);
        return boxes.slice(start, end);
    };

    const handlePageClick = (page: number) => {
        onPageChange(page);
    };

    const onNextClick = () => {
        if (currentPage < boxes.length) {
            onPageChange(currentPage + 1);
        }
    };

    const onPrevClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const seekNext = () => {
        if (currentPage + stepper <= boxes.length) {
            onPageChange(currentPage + stepper);
        }
    };

    const seekPrev = () => {
        if (currentPage - stepper > 0) {
            onPageChange(currentPage - stepper);
        }
    };

    return (
        <div className="w-full h-auto flex justify-start items-center">
            {/* First and Previous Buttons */}
            <div className="flex gap-1 mr-1">
                <button
                    onClick={seekPrev}
                    disabled={currentPage <= stepper}
                    className="rounded-sm p-1 flex justify-center items-center text-sm text-gray-400">
                    {"<<"}
                </button>
                <button
                    onClick={onPrevClick}
                    disabled={currentPage <= 1}
                    className="rounded-sm p-1 flex justify-center items-center text-sm text-gray-400">
                    {"<"}
                </button>
            </div>

            {/* Visible Pages */}
            {getVisiblePages().map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={`rounded-sm px-2 py-1 flex justify-center items-center text-sm text-gray-400 
                    ${currentPage === page ? "ring-1 ring-red-500" : "ring-1 ring-gray-400"}`}>
                    {page}
                </button>
            ))}

            {/* Next and Last Buttons */}
            <div className="flex gap-1 ml-1">
                <button
                    onClick={onNextClick}
                    disabled={currentPage >= boxes.length}
                    className="rounded-md p-1 flex justify-center items-center text-sm text-gray-400">
                    {">"}
                </button>
                <button
                    onClick={seekNext}
                    disabled={currentPage + stepper >= boxes.length}
                    className="rounded-md p-1 flex justify-center items-center text-sm text-gray-400">
                    {">>"}
                </button>
            </div>
        </div>
    );
};

export default Pagination;
