'use client'

import styled from 'styled-components'
import OrderCard from '@molecules/OrderCard'
import { motion } from 'motion/react'

export const Container = motion.create(styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    grid-auto-rows: minmax(100px, 130px);
    gap: 15px;
    align-self: flex-start;
`)

export const AnimatedOrderCard = motion.create(styled(OrderCard)``)
