import React, { useState } from "react";
import "./listItem.scss";
import {
	PlayArrow,
	Add,
	ThumbUpAltOutlined,
	ThumbDownOutlined,
} from "@material-ui/icons";

const ListItem = ({ index }) => {
	const [isHovered, setIsHovered] = useState(false);
	const trailer =
		"https://vod-progressive.akamaized.net/exp=1624452918~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2400%2F14%2F362003850%2F1486625955.mp4~hmac=d6f829e7bb83f1ee6a28047d00aa2c1083c8fe5036c8084a4adf1c3903085856/vimeo-prod-skyfire-std-us/01/2400/14/362003850/1486625955.mp4";
	return (
		<div
			className="listItem"
			style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img
				src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQfKi-Y7-eac_rGBB1z0xKUvizR_GJcbZpBDveoHcZckseLIVi9BGVG4i1V-gDM5t9FUWR6wp7bHJJgc6bL4zM-39FJ1-SJgWbcalbybayGQMH8ZfcFVGtUA6g5t333SMuf09RQ6V177VNctfTo8YMYhD9Ws.jpg?r=fc6"
				alt=""
			/>
			{isHovered && (
				<>
					<video src={trailer} autoPlay={true} loop></video>
					<div className="itemInfo">
						<div className="icons">
							<PlayArrow className="icon" />
							<Add className="icon" />
							<ThumbUpAltOutlined className="icon" />
							<ThumbDownOutlined className="icon" />
						</div>
						<div className="itemInfotop">
							<span>1 hour 14 min</span>
							<span className="limit">+16</span>
							<span>1999</span>
						</div>
						<div className="desc">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
							distinctio a nam fuga atque, perspiciatis natus dolorem quo quidem
							nesciunt? Blanditiis optio iste illo debitis placeat veritatis
							sunt officia architecto.
						</div>
						<div className="genre">Action</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ListItem;
