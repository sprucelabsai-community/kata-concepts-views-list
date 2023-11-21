import {
	SkillView,
	ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'
import AbstractEightBitSkillView from '../skillViewControllers/AbstractEightBitSkillView'

export default class MembersSkillViewController extends AbstractEightBitSkillView {
	public static id = 'members'

	public constructor(options: ViewControllerOptions) {
		super(options)
	}

	public render(): SkillView {
		return {
			layouts: [
				{
					cards: [],
				},
			],
		}
	}
}
