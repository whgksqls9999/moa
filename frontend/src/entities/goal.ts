export interface Goal {
	title: string;
	amount: number;
	start_date: Date;
	end_date: Date;
	sub_goals: SubGoal[];
}

export interface SubGoal {
	description: string;
	amount: number;
	due_date: Date;
}
