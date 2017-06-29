import TitieView from "./components/pages/titleView.jsx";
import VideoView from "./components/pages/videoView.jsx";
import PlanView from "./components/pages/planView.jsx";
import ProgramView from "./components/pages/programView.jsx";
import WhyView from "./components/pages/whyView.jsx";
import BecauseView from "./components/pages/becauseView.jsx";
import CoauchView from "./components/pages/coauchView.jsx";
import BottomView from "./components/pages/bottomView.jsx";

const ViewList = [
	{
		view: TitieView,
		wrap: "title"
	},
	{
		view: VideoView,
		wrap: "video"
	},
	{
		view: PlanView,
		wrap: "plan"
	},
	{
		view: ProgramView,
		wrap: "program"
	},
	{
		view: WhyView,
		wrap: "why"
	},
	{
		view: BecauseView,
		wrap: "because"
	},
	{
		view: CoauchView,
		wrap: "coauch"
	},
	{
		view: BottomView,
		wrap: "bottom"
	}
]

export default ViewList;