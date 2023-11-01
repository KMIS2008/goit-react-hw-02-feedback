import {Title,
        Button,
        ButtonContainer} from './Feedback.style'

export const Feedback = ()=>{
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