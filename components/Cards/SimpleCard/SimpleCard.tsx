import { Card, CardSection, Image, Text } from '@mantine/core';
import Link from 'next/link';
import classes from './SimpleCard.module.css'

interface SimpleCard {
    title?: string;
    descp?: string;
    link: string;
    cardImage?: string;
    cardImageAlt?: string;
    cardPadding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
    target?: 'blank' | 'self',
    cardShadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const SimpleCard = ({ cardPadding = 'lg', target = 'self', cardShadow = 'xl', title, descp, cardImageAlt, cardImage, link }: SimpleCard) => {
    return (
        <Card
            shadow={cardShadow}
            padding={cardPadding}
            component={Link}
            href={link}
            target={target === 'blank' ? '_blank' : '_self'}
        >
            <CardSection>
                <Image
                    src={cardImage}
                    h={160}
                    alt={cardImageAlt}
                />
            </CardSection>

            <Text fw={500} size="lg" mt="md">
                {title}
            </Text>

            <Text mt="xs" c="dimmed" size="sm">
                {descp}
            </Text>
        </Card>
    );
}
export default SimpleCard;