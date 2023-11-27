export interface PlayerStats {
    id: number;
    ast: number;
    blk: number;
    dreb: number;
    fg3_pct: number;
    fg3a: number;
    fg3m: number;
    fg_pct: number;
    fga: number;
    fgm: number;
    ft_pct: number;
    fta: number;
    ftm: number;
    game: {
        id: number;
        date: string;
        home_team_id: number;
        home_team_score: number;
        period: number;
        postseason: boolean;
        season: number;
        status: string;
        time: string | null;
        visitor_team_id: number;
        visitor_team_score: number;
    };
    min: string;
    oreb: number;
    pf: number;
    player: {
        id: number;
        first_name: string;
        height_feet: number;
        height_inches: number;
        last_name: string;
        position: string;
        team_id: number;
        weight_pounds: number;
    };
    pts: number;
    reb: number;
    stl: number;
    team: {
        id: number;
        abbreviation: string;
        city: string;
        conference: string;
        division: string;
        full_name: string;
        name: string;
    };
    turnover: number;
};
export interface BoxscoreComponent {
    boxscore: PlayerStats[]
    away: string
    home: string
};
export interface EventComponent {
    event: Event
    teams: TeamInfo[]
    goToMatch: () => void
};
export interface PaginationComponent {
    currentPage: number
    totalPages: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}
export interface SituationComponent {
    situation: string
    teamLogo: string | null | undefined
}
export interface ScoreboardComponent {
    team: PlayerStats[]
}
export interface LinescoresComponent {
    teams: Competitor[]
}
export interface Event {
    id: string;
    uid: string;
    date: Date;
    name: string;
    shortName: string;
    season: Season;
    competitions: {
        id: string;
        uid: string;
        date: string;
        attendance: number;
        type: {
            id: string;
            abbreviation: string;
        };
        timeValid: boolean;
        neutralSite: boolean;
        conferenceCompetition: boolean;
        playByPlayAvailable: boolean;
        recent: boolean;
        venue: {
            id: string;
            fullName: string;
            address: {
                city: string;
                state: string;
            };
            capacity: number;
            indoor: boolean;
        }
        competitors: Competitor[]
        situation: {
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
    }[]
    status: Status
    links: Link[]
}
export interface Competitor {
    id: string;
    uid: string;
    type: string;
    order: number;
    homeAway: string;
    team: Team;
    score: string;
    statistics: {
        name: string;
        abbreviation: string;
        displayValue: string;
        rankDisplayValue?: string;
    }[];
    records: {
        name: string;
        abbreviation?: string;
        type: string;
        summary: string;
    }[];
    leaders: Leader[];
    linescores?: {
        value: string
    }[]
};
interface Team {
    id: string;
    uid: string;
    location: string;
    name: string;
    abbreviation: string;
    displayName: string;
    shortDisplayName: string;
    color: string;
    alternateColor: string;
    isActive: boolean;
    venue: {
        id: string;
    };
    links: Link[];
    logo: string;
};
interface Leader {
    name: string;
    displayName: string;
    shortDisplayName: string;
    abbreviation: string;
    leaders: {
        displayValue: string;
        value: number;
        athlete: {
            id: string;
            fullName: string;
            displayName: string;
            shortName: string;
            links: Link[];
            headshot: string;
            jersey: string;
            position: {
                abbreviation: string;
            };
            team: {
                id: string;
            };
            active: boolean;
        };
        team: {
            id: string;
        };
    }[];
};
interface Link {
    language: "en-US" | "pt-BR";
    href: string;
    text: string;
    shortText: string;
    isExternal: boolean;
    isPremium: boolean;
};
interface Season {
    year: number;
    type: number;
    slug: string;
}
export interface TeamInfo {
    team: {
        id: number
        displayName: string
        shortDisplayName: string
        name: string
        nickname: string
        location: string
        color: string
        alternateColor: string
        logos: Logos[]
    }
}
interface Status {
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
export interface MatchIndex {
    index: number
    currentPage: number
    eventsPerPage: number
}

export namespace BDL {
    interface Competitor {
        homeAway: string;
        team: {
            displayName: string;
        };
    }
    interface Competitors {
        home: string;
        away: string;
    }
    export interface Team {
        id: number;
        abbreviation: string;
        city: string;
        conference: string;
        division: string;
        full_name: string;
        name: string;
    }
    interface Game {
        id: number;
        date: string;
        home_team: BDL.Team;
        home_team_score: number;
        period: number;
        postseason: boolean;
        season: number;
        status: string;
        time: string;
        visitor_team: BDL.Team;
        visitor_team_score: number;
    }
}