import { Incentive } from "@/types/global";
import React, { useState } from "react";
import styled from "styled-components";

const IncentivePagination: React.FC<{
    data: Incentive[];
    itemsPerPage: number;
    onPageChange: (page: number) => void;

}> = ({ data, itemsPerPage, onPageChange }) => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        onPageChange(page);
    };

    return (
        <div>
            {data.length >= 6 && (
                <ArrowParent>
                    {data.length > itemsPerPage && (
                        <PaginArrows
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.05357 0.323903L-4.31687e-07 8.00333L8.05357 15.6828C8.27308 15.8914 8.56759 16.0054 8.87232 15.9998C9.17705 15.9942 9.46703 15.8693 9.67847 15.6528C9.88992 15.4362 10.0055 15.1456 9.9998 14.8449C9.9941 14.5443 9.86758 14.2582 9.64807 14.0496L3.30385 8.00333L9.64807 1.95045C9.86758 1.74183 9.9941 1.45572 9.9998 1.15505C10.0055 0.854394 9.88992 0.563812 9.67847 0.347234C9.46703 0.130657 9.17705 0.00582467 8.87232 0.000199004C8.56759 -0.00542666 8.27308 0.108615 8.05357 0.317237L8.05357 0.323903Z" fill="black"/>
                            </svg>
                        </PaginArrows>
                    )}
                    <div className="page-buttons">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => handlePageChange(i + 1)}
                                className={i + 1 === currentPage ? "active" : ""}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                    {data.length > itemsPerPage && (
                        <PaginArrows
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.94643 15.6761L10 7.99667L1.94643 0.317236C1.72692 0.108614 1.43241 -0.00542734 1.12768 0.00019832C0.822955 0.00582398 0.532972 0.130656 0.321528 0.347234C0.110085 0.563811 -0.00549892 0.854392 0.000202127 1.15505C0.00590413 1.45571 0.132425 1.74183 0.351932 1.95045L6.69614 7.99667L0.351932 14.0496C0.132425 14.2582 0.00590354 14.5443 0.000201508 14.8449C-0.00549957 15.1456 0.110085 15.4362 0.321528 15.6528C0.532972 15.8693 0.822954 15.9942 1.12768 15.9998C1.43241 16.0054 1.72692 15.8914 1.94643 15.6828L1.94643 15.6761Z" fill="black" />
                            </svg>
                        </PaginArrows>
                    )}
                </ArrowParent>
            )}
        </div>
    );
};

export default IncentivePagination;

const PaginArrows = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    &:nth-child(1) {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border-left: 1px solid #00000020;
    }
    &:nth-last-child(1) {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top: 1px solid #00000020;
        border-right: 1px solid #00000020;
    }
`;

const ArrowParent = styled.div`
    display:flex;
    align-items: center;
    button {
        background: transparent;
        // padding: 14px;
        width: 52px;
        height: 52px;
        border: .5px solid #00000020;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        border-top: 1px solid #00000020;
        border-bottom: 1px solid #00000020;
    }
    .active {
        color: var(--primary);
    }
    svg {
        width: 16px;
        height: 16px;
        opacity: .5;
    }
`