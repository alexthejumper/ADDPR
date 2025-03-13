import ChurchCalendar from "@/app/components/ChurchCalendar";
import AsideEvents from "@/app/components/asideEvents";

export default function Events() {
    return (
        <div style={{height: "100vh", display: "flex", justifyContent: "space-between" }}>
            <div className="aside-events-container">
                <AsideEvents />
            </div>
            <div id="churchCalendar" style={{ marginRight: "20px"}}>
                <ChurchCalendar />
            </div>
        </div>
    );
}