import { Rocket } from "./rocket.model";
import { Links } from "./links.model";
import { LaunchSite } from "./launch-site.model";

export class Launch {
    public flight_number   : string;
    public mission_name    : string;
    public launch_year     : string;
    public rocket          : Rocket;    
    public links           : Links;
    public launch_site     : LaunchSite;

    constructor (
        flight_number   : string,
        mission_name    : string,
        launch_year     : string,
        rocket          : Rocket,
        links           : Links,
        launch_site     : LaunchSite
    ) {
        this.flight_number = flight_number;        
        this.mission_name  = mission_name;
        this.launch_year   = launch_year;
        this.rocket        = rocket;
        this.links         = links;
        this.launch_site   = launch_site;        
    }
}