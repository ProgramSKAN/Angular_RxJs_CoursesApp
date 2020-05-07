import * as _ from 'lodash';


//GANG OF 4 OBSERVER PATTERN
export interface Observer {
    notify(data: any);
}
interface Subject {
    registerObserver(obs: Observer);
    unregisterObserver(obs: Observer);
    notifyObservers(data: any);

}

class EventBus implements Subject {
    private observers: Observer[] = [];

    registerObserver(obs: Observer) {
        this.observers.push(obs);
    }
    unregisterObserver(obs: Observer) {
        _.remove(this.observers, el => el === obs);//remove iterates over the array and removes if function returns true
    }
    notifyObservers(data: any) {
        this.observers.forEach(obs => obs.notify(data));//notify data for each observer
    }
}

export const globalEventBus = new EventBus();