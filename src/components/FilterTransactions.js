import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: space-between;
`

export const FilterTransactions = () => {
    const [filteredYear, setFilteredYear] = useState(2022);
    return (
        <>
            <Container>
                <h4>Filter</h4>
                <select name="year" id="year-select" defaultValue="2022">
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </Container>
        </>
    )
}
