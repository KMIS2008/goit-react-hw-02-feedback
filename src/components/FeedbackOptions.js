import {Title,
        Button,
        ButtonContainer} from './FeedbackOptions.style'

export const FeedbackOptions = ()=>{
    return (
        <div>
            <Title>
                Please leave feadback
            </Title>
            <ButtonContainer>
                <Button type="button">Good</Button>
                <Button type="button">Neutral</Button>
                <Button type="button">Bad</Button>
            </ButtonContainer>
            
        </div>
    )
}