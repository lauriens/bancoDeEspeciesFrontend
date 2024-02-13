export type StepProps = {
    visible?: boolean
    landscapeId?: number
    setLandscapeId?: React.Dispatch<React.SetStateAction<number>>
    cultureId?: number
    setCultureId?: React.Dispatch<React.SetStateAction<number>>
    occurrenceId?: number
    setOccurrenceId?: React.Dispatch<React.SetStateAction<number>>
}