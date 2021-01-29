const initState = {
    items: [
        {id: 1, title: "SWENG Lecture", where: "CSU33333", when: "2.00pm-4.00pm"},
        {id: 2, title: "AI Lecture", where: "CSU12345", when: "5.00pm-6.00pm"},
        {id: 3, title: "Swimming", where: "Hotel", when: "8.00pm-9.00pm"}
    ]
}

const calendarReducer = (state = initState, action) => {
    return state
}
 
export default calendarReducer;