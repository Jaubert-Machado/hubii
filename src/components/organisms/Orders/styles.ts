'use client'

import styled from 'styled-components'

export const Container = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    grid-auto-rows: minmax(100px, 130px);
    gap: 15px;
`
