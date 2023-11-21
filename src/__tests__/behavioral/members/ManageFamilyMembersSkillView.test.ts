import { fake } from '@sprucelabs/spruce-test-fixtures'
import MembersSkillViewController from '../../../members/Members.svc'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'

@fake.login()
export default class ManageFamilyMembersSkillViewTest extends AbstractEightBitTest {
	private static vc: MembersSkillViewController

	protected static async beforeEach() {
		await super.beforeEach()
		this.vc = this.views.Controller('eightbitstories.members', {})
	}
}
