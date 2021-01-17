export const LABELS = {
    DEFENSE: 'defense',
    ATTACK: 'attack',
    HEALTH: 'health',
};

export const ICONS = {
    [LABELS.DEFENSE]: '/dist/images/icons/shield.png',
    [LABELS.ATTACK]: '/dist/images/icons/battle.png',
    [LABELS.HEALTH]: '/dist/images/icons/like.png',
};

export const LIMIT_VALUES = {
    [LABELS.DEFENSE]: {
        min: 1,
        max: 10
    },
    [LABELS.ATTACK]: {
        min: 1,
        max: 10
    },
    [LABELS.HEALTH]: {
        min: 10,
        max: 100
    },
};
