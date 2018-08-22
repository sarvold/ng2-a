export class Launch {
    public flight_number   : string;
    public mission_name    : string;
    public launch_year     : string;
    public rocket_name     : string;
    public rocket_type     : string;
    public mission_patch   : string;
    public launch_site     : string;

    constructor (
        flight_number   : string,
        mission_name    : string,
        launch_year     : string,
        rocket_name     : string,
        rocket_type     : string,
        mission_patch   : string,
        launch_site     : string
    ) {
        this.flight_number = flight_number;        
        this.mission_name  = mission_name;
        this.launch_year   = launch_year;
        this.rocket_name   = rocket_name;
        this.rocket_type   = rocket_type;
        this.mission_patch = mission_patch;
        this.launch_site   = launch_site;        
    }
}