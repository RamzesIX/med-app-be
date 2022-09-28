import { IDiseaseDetails } from '../../diseases/diseases.types'

export const defaultDiseases: IDiseaseDetails[] = [
    {
        id: '59336032-3f17-11ed-b878-0242ac120002',
        name: 'Asthma',
        description:
            'Asthma is a chronic lung disease characterized by episodes of airway narrowing and obstruction, causing wheezing, coughing, chest tightness and shortness of breath.',
        risks: [
            {
                id: '6c5aae72-3f17-11ed-b878-0242ac120002',
                name: 'Allergies',
                description: 'House dust mites, animal fur or pollen',
            },
            {
                id: '77782bfe-3f17-11ed-b878-0242ac120002',
                name: 'Smoking',
                description: 'Cigarette smoking, pollution.',
            },
            {
                id: '903ad376-3f17-11ed-b878-0242ac120002',
                name: 'Exercise',
                description: 'Lack of exercise.',
            },
            {
                id: 'a321c904-3f17-11ed-b878-0242ac120002',
                name: 'Infections',
                description: 'Different infections',
            },
        ],
        symptoms: [
            {
                id: 'bb301a00-3f17-11ed-b878-0242ac120002',
                name: 'Wheezing',
                description: 'A whistling sound when breathing.',
            },
            {
                id: 'c21417ae-3f17-11ed-b878-0242ac120002',
                name: 'Breathlessness',
                description: 'Shortness of breath.',
            },
            {
                id: 'cd68b2d6-3f17-11ed-b878-0242ac120002',
                name: 'Cough',
                description: 'A reflex action to clear your airways of mucus and irritants such as dust or smoke.',
            },
        ],
    },
    {
        id: 'e423c920-3f17-11ed-b878-0242ac120002',
        name: 'Diabetes',
        description: "Diabetes is a lifelong condition that causes a person's blood sugar level to become too high.",
        risks: [],
        symptoms: [
            {
                id: '17285f8e-3f18-11ed-b878-0242ac120002',
                name: 'Tiredness',
                description: 'Feeling very tired',
            },
            {
                id: '20387c26-3f18-11ed-b878-0242ac120002',
                name: 'Blurred vision',
                description: 'If you have blurred vision, the things you see will not look sharp and clear.',
            },
            {
                id: '25591ecc-3f18-11ed-b878-0242ac120002',
                name: 'Excessive thirst',
                description:
                    "It's normal to sometimes feel thirsty, but it's not normal to constantly feel thirsty even when you're drinking a lot.",
            },
        ],
    },
    {
        id: '2d82e268-3f18-11ed-b878-0242ac120002',
        name: 'Flu',
        description:
            'Flu is a contagious respiratory illness caused by influenza viruses that infect the nose, throat, and sometimes the lungs. It can cause mild to severe illness, and at times can lead to death. The best way to prevent flu is by getting a flu vaccine each year. Flu Symptoms.',
        risks: [
            {
                id: '38090d02-3f18-11ed-b878-0242ac120002',
                name: 'Immune',
                description: 'Weakened immune system.',
            },
            {
                id: '3ca4f100-3f18-11ed-b878-0242ac120002',
                name: 'Asthma',
                description:
                    'Asthma is a chronic lung disease characterized by episodes of airway narrowing and obstruction, causing wheezing, coughing, chest tightness and shortness of breath.',
            },
            {
                id: '4009fdd6-3f18-11ed-b878-0242ac120002',
                name: 'Diabetes',
                description: "Diabetes is a lifelong condition that causes a person's blood sugar level to become too high.",
            },
        ],
        symptoms: [
            {
                id: '47469b90-3f18-11ed-b878-0242ac120002',
                name: 'Temperature',
                description: 'A sudden high temperature',
            },
            {
                id: '17285f8e-3f18-11ed-b878-0242ac120002',
                name: 'Tiredness',
                description: 'Feeling very tired',
            },
            {
                id: '4adcdc1a-3f18-11ed-b878-0242ac120002',
                name: 'Headache',
                description:
                    "A headache is a pain in your head or face that's often described as a pressure that's throbbing, constant, sharp or dull. Headaches can differ greatly in regard to pain type, severity, location and frequency. Headaches are a very common condition that most people will experience many times during their lives.",
            },
        ],
    },
    {
        id: '52717a3a-3f18-11ed-b878-0242ac120002',
        name: 'Heart Attack',
        description:
            'A heart attack (myocardial infarction or MI) is a serious medical emergency in which the supply of blood to the heart is suddenly blocked, usually by a blood clot.',
        risks: [
            {
                id: '77782bfe-3f17-11ed-b878-0242ac120002',
                name: 'Smoking',
                description: 'Cigarette smoking, pollution.',
            },
            {
                id: '58ad7336-3f18-11ed-b878-0242ac120002',
                name: 'Weight',
                description: 'You are overweight or obese.',
            },
            {
                id: '903ad376-3f17-11ed-b878-0242ac120002',
                name: 'Exercise',
                description: 'Lack of exercise.',
            },
            {
                id: '5dc68ff6-3f18-11ed-b878-0242ac120002',
                name: 'Alcohol',
                description: 'Alcohol consumption in big amounts.',
            },
        ],
        symptoms: [
            {
                id: '641593d4-3f18-11ed-b878-0242ac120002',
                name: 'Chest pain',
                description: 'A feeling of pressure, heaviness, tightness or squeezing across your chest.',
            },
            {
                id: '66eb62dc-3f18-11ed-b878-0242ac120002',
                name: 'Sweating',
                description: 'If you sweat a lot.',
            },
        ],
    },
    {
        id: '6e214b66-3f18-11ed-b878-0242ac120002',
        name: 'Coronary heart disease',
        description:
            'Coronary heart disease (CHD) is a major cause of death in the UK and worldwide. CHD is sometimes called ischaemic heart disease or coronary artery disease.',
        risks: [
            {
                id: '72fb0f28-3f18-11ed-b878-0242ac120002',
                name: 'Unhealthy diet',
                description: 'A diet high in sugars, saturated and trans- fats, low fibre foods and high-sugar drinks',
            },
            {
                id: '903ad376-3f17-11ed-b878-0242ac120002',
                name: 'Exercise',
                description: 'Lack of exercise.',
            },
            {
                id: '77782bfe-3f17-11ed-b878-0242ac120002',
                name: 'Smoking',
                description: 'Cigarette smoking, pollution.',
            },
        ],
        symptoms: [
            {
                id: '641593d4-3f18-11ed-b878-0242ac120002',
                name: 'Chest pain',
                description: 'A feeling of pressure, heaviness, tightness or squeezing across your chest.',
            },
            {
                id: '8d8abbea-3f18-11ed-b878-0242ac120002',
                name: 'Fainting',
                description:
                    'Standing up too quickly – this could be a sign of low blood pressure. not eating or drinking enough. being too hot. being very upset, angry or in severe pain.',
            },
            {
                id: 'c21417ae-3f17-11ed-b878-0242ac120002',
                name: 'Breathlessness',
                description: 'Shortness of breath.',
            },
        ],
    },
    {
        id: '9d22da2e-3f18-11ed-b878-0242ac120002',
        name: 'Stress',
        description: 'Stress is the body’s reaction to a perceived threat; it is often called the “fight or flight” syndrome',
        risks: [
            {
                id: '72fb0f28-3f18-11ed-b878-0242ac120002',
                name: 'Unhealthy diet',
                description: 'A diet high in sugars, saturated and trans- fats, low fibre foods and high-sugar drinks',
            },
            {
                id: '903ad376-3f17-11ed-b878-0242ac120002',
                name: 'Exercise',
                description: 'Lack of exercise.',
            },
            {
                id: 'ba5eab18-3f18-11ed-b878-0242ac120002',
                name: 'Sleepiness',
                description: 'Lose of sleep',
            },
        ],
        symptoms: [
            {
                id: '641593d4-3f18-11ed-b878-0242ac120002',
                name: 'Chest pain',
                description: 'A feeling of pressure, heaviness, tightness or squeezing across your chest.',
            },
            {
                id: '8d8abbea-3f18-11ed-b878-0242ac120002',
                name: 'Fainting',
                description:
                    'Standing up too quickly – this could be a sign of low blood pressure. not eating or drinking enough. being too hot. being very upset, angry or in severe pain.',
            },
        ],
    },
]
