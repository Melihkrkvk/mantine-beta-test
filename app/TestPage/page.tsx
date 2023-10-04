'use client';
import SimpleCard from '@/components/Cards/SimpleCard/SimpleCard'
import DetailSystem from '@/components/DetailSystem/DetailSystem'
import React from 'react'
import { useMediaQuery } from '@mantine/hooks';
import { Button, Container } from '@mantine/core';
import BasicCard from '@/components/Cards/BasicCard/BasicCard';

const TestPage = () => {
    const mobile = useMediaQuery('(max-width: 36em)', true, { getInitialValueInEffect: false });
    const tablet = useMediaQuery('(max-width: 62em)', true, { getInitialValueInEffect: false });

    if (mobile) {
        return (
            <>
                <Container size={'xs'}>
                    <h1>Mobile Design</h1>
                    <SimpleCard link='/' title='Mobile Design' descp='this is a descp' />
                </Container>
            </>
        );
    } else if (tablet) {
        return (
            <>
                <Container size={'sm'}>
                    <h1>Table Design</h1>
                    <BasicCard />
                </Container>
            </>
        );
    }

    return (
        <>
            <DetailSystem sideBarPos='right' />

        </>

    )
}

export default TestPage
