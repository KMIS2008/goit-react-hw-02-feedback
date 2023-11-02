import {
        Button,
        ButtonContainer} from './FeedbackOptions.style'

export const FeedbackOptions = ()=>{
    return (
       
            <ButtonContainer>
                <Button type="button">Good</Button>
                <Button type="button">Neutral</Button>
                <Button type="button">Bad</Button>
            </ButtonContainer>
            
    )
}