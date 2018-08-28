export class LaunchSite {
    public site_id           : string;
    public site_name         : string;
    public site_name_long    : string;
    constructor(
        site_id           : string,
        site_name         : string,
        site_name_long    : string
    ) {
        this.site_id = site_id;
        this.site_name = site_name;
        this.site_name_long = site_name_long;
    }
}