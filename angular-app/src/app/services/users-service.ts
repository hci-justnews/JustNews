import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs';

var userData = {
    "Users": [
        {
            "Name": "Jessie Schmidt",
            "Age": 31,
            "Boints": 5620,
            "BointsGoal": 50,
            "BointsToday": 23,
            "Ranking": 1,
            "Awards": [
                "Speed Reader",
                "Bias Expert",
                "Daily User",
                "Source Detective",
                "Fact Hero"
            ],
            "Image": "assets/jessie.jpg",
            "History": [
                {
                    "Bias": 0.1,
                    "Day": "Sunday"
                },
                {
                    "Bias": 0.023,
                    "Day": "Saturday"
                },
                {
                    "Bias": -0.09,
                    "Day": "Friday"
                },
                {
                    "Bias": -0.17,
                    "Day": "Thursday"
                },
                {
                    "Bias": -0.08,
                    "Day": "Wednesday"
                },
                {
                    "Bias": 0,
                    "Day": "Tuesday"
                },
                {
                    "Bias": 0.2,
                    "Day": "Monday"
                }
            ]
        },
        {
            "Name": "Subrat Franzen",
            "Age": 24,
            "Boints": 2773,
            "BointsGoal": 35,
            "BointsToday": 17,
            "Ranking": 6,
            "Awards": [
                "Weekley User",
                "Speed Reader",
                "Sports Lover"
            ],
            "Image": "assets/subrat.jpg",

            "History": [
                {
                    "Bias": 0.3,
                    "Day": "Sunday"
                },
                {
                    "Bias": 0.45,
                    "Day": "Saturday"
                },
                {
                    "Bias": 0.27,
                    "Day": "Friday"
                },
                {
                    "Bias": 0.17,
                    "Day": "Thursday"
                },
                {
                    "Bias": 0.35,
                    "Day": "Wednesday"
                },
                {
                    "Bias": -0.7,
                    "Day": "Tuesday"
                },
                {
                    "Bias": -0.2,
                    "Day": "Monday"
                }
            ]
        },
        {
            "Name": "Jordan Hammond",
            "Age": 27,
            "Boints": 624,
            "BointsGoal": 10,
            "BointsToday": 7,
            "Ranking": 25,
            "Awards": [
                "Monthly User",
                "Bias Novice"
            ],
            "Image": "assets/jordan.jpg",
            "History": [
                {
                    "Bias": 0.85,
                    "Day": "Sunday"
                },
                {
                    "Bias": -0.5,
                    "Day": "Saturday"
                },
                {
                    "Bias": -0.55,
                    "Day": "Friday"
                },
                {
                    "Bias": 0.65,
                    "Day": "Thursday"
                },
                {
                    "Bias": -0.47,
                    "Day": "Wednesday"
                },
                {
                    "Bias": -0.5,
                    "Day": "Tuesday"
                },
                {
                    "Bias": 0.66,
                    "Day": "Monday"
                }
            ]
        }
    ]
}

export interface Entry {
    Bias: number,
    Day: string
}

export interface User {
    Name: string,
    Age: number,
    Boints: number,
    BointsGoal: number,
    BointsToday: number,
    Ranking: number,
    Awards: string[],
    History: Entry[],
    Image: string
}


@Injectable({
    providedIn: 'root'
})
export class UserService {
    private Users: User[] = []
    public currentUser: User;
    public updateUser = new BehaviorSubject<User>(this.currentUser); // {1} FALSE == HIDING
    public userChange: Subject<User> = new Subject<User>();
    constructor() {
        this.userChange.subscribe((value) => {
            this.currentUser = value
        });
        this.loadUsers();
    }
    loadUsers() {
        for (var ind in userData['Users']) {
            this.Users.push(userData['Users'][ind]);
        }
        this.setUser(0)
    }

    setUser(index: number) {
        var s: User = this.Users[index];
        this.userChange.next(s)
    }
    getFirstUser() {
        return userData.Users[0];
    }
    getCurrentUser() {
        return this.currentUser;
    }


}