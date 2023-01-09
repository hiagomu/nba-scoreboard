export namespace Models {

    export interface Events {
        data: {
            events: Event[]
        }
    }

    export interface Leagues {
        id: number
        uid: string
        name: string
        abbreviation: string
        slug: string
        season: {
            year: number
            startDate: Date
            endDate: Date
            type: {
                id: number
                type: number
                name: string
                abbreviation: string
            }
        }
        logos: Logos[]
    }

    export interface Game {
        id: number
        name: string
        competitions: Competitions[]
        status: Status
        links: Links[]
    }

    export interface Logos {
        href: string
        width: number
        height: number
        alt: string
        lastUpdated: Date
    }

    export interface Competitions {
        id: number
        date: Date
        attendance: number
        venue: {
            id: number
            fullName: string
            address: {
                city: number
                state: string
            }
            capacity: number
            indoor: boolean
        }
        competitors: Competitors[]
        links: Links[]
        situation: GameSituation
    }

    export interface Competitors {
        id: number
        homeAway: string
        team: {
            id: number
            location: string
            name: string
            abbreviation: string
            displayName: string
            shortDisplayName: string
            color: string
            alternateColor: string
            logo: string
        }
        score: string
        linescores: {
            value: string
        }[]
        records: {
            name: string
            abbreviation: string
            type: string
            summary: string
        }[]
    }

    export interface Links {
        language: "en-US" | "pt-BR"
        href: string
        text: string
        shortText: string
        isExternal: boolean
        isPremium: boolean
    }

    export interface GameSituation {
        lastPlay: {
            id: number
            type: {
                id: string
                text: string
            }
            text: string
            scoreValue: number
            team: {
                id: number
            }
        }
    }

    export interface Status {
        clock: number
        displayClock: string
        period: number
        type: {
            id: number
            name: string
            state: string
            completed: boolean
            description: string
            detail: string
            shortDetail: string
        }
    }

    export interface Event {
        event: Game
        teams: Competitors[]
    }
    
    export interface Linescores {
        teams: Competitors[]
    }

    export interface Situation {
        situation: string
        teamLogo: string | null | undefined
    }
}