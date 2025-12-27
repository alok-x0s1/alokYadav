"use client";

import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "../ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Link2 } from "lucide-react";
import { Badge } from "../ui/badge";
import type { Experience } from "@/utils/types";

const CompanyHoverCard = ({ item }: { item: Experience }) => {
	return (
		<HoverCard>
			<HoverCardTrigger className="text-xl text-foreground/85">
				@{item.company.title}
			</HoverCardTrigger>
			<HoverCardContent className="w-82 flex gap-1.5 flex-col">
				<div className="flex gap-2 items-start">
					<Avatar>
						<AvatarImage src={item.company.image} />
						<AvatarFallback>
							{item.company.name.slice(0, 2)}
						</AvatarFallback>
					</Avatar>

					<div className="flex flex-col w-full gap-0.5">
						<h4 className="text-sm flex justify-between w-full font-semibold">
							{item.company.name}{" "}
							<div
								onClick={() => {
									window.open(
										`${item.company.url}`,
										"_blank"
									);
								}}
							>
								<Link2 className="hover:text-purple cursor-alias duration-300" />
							</div>
						</h4>
						<div className="flex gap-1">
							<Badge>{item.company.type}</Badge>
							<Badge variant="outline">Website Development</Badge>
						</div>
					</div>
				</div>
				<div className="flex justify-between gap-2">
					<div className="space-y-1">
						<p className="text-sm">{item.company.description}</p>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	);
};

export default CompanyHoverCard;
