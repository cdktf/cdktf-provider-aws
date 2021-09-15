// https://www.terraform.io/docs/providers/aws/r/guardduty_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuarddutyMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#account_id GuarddutyMember#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#detector_id GuarddutyMember#detector_id}
  */
  readonly detectorId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#disable_email_notification GuarddutyMember#disable_email_notification}
  */
  readonly disableEmailNotification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#email GuarddutyMember#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#invitation_message GuarddutyMember#invitation_message}
  */
  readonly invitationMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#invite GuarddutyMember#invite}
  */
  readonly invite?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#timeouts GuarddutyMember#timeouts}
  */
  readonly timeouts?: GuarddutyMemberTimeouts;
}
export interface GuarddutyMemberTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#create GuarddutyMember#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#update GuarddutyMember#update}
  */
  readonly update?: string;
}

function guarddutyMemberTimeoutsToTerraform(struct?: GuarddutyMemberTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html aws_guardduty_member}
*/
export class GuarddutyMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_guardduty_member";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html aws_guardduty_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuarddutyMemberConfig
  */
  public constructor(scope: Construct, id: string, config: GuarddutyMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_guardduty_member',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._detectorId = config.detectorId;
    this._disableEmailNotification = config.disableEmailNotification;
    this._email = config.email;
    this._invitationMessage = config.invitationMessage;
    this._invite = config.invite;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId: string;
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId
  }

  // detector_id - computed: false, optional: false, required: true
  private _detectorId: string;
  public get detectorId() {
    return this.getStringAttribute('detector_id');
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorIdInput() {
    return this._detectorId
  }

  // disable_email_notification - computed: false, optional: true, required: false
  private _disableEmailNotification?: boolean | cdktf.IResolvable;
  public get disableEmailNotification() {
    return this.getBooleanAttribute('disable_email_notification');
  }
  public set disableEmailNotification(value: boolean | cdktf.IResolvable ) {
    this._disableEmailNotification = value;
  }
  public resetDisableEmailNotification() {
    this._disableEmailNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEmailNotificationInput() {
    return this._disableEmailNotification
  }

  // email - computed: false, optional: false, required: true
  private _email: string;
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // invitation_message - computed: false, optional: true, required: false
  private _invitationMessage?: string;
  public get invitationMessage() {
    return this.getStringAttribute('invitation_message');
  }
  public set invitationMessage(value: string ) {
    this._invitationMessage = value;
  }
  public resetInvitationMessage() {
    this._invitationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invitationMessageInput() {
    return this._invitationMessage
  }

  // invite - computed: false, optional: true, required: false
  private _invite?: boolean | cdktf.IResolvable;
  public get invite() {
    return this.getBooleanAttribute('invite');
  }
  public set invite(value: boolean | cdktf.IResolvable ) {
    this._invite = value;
  }
  public resetInvite() {
    this._invite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteInput() {
    return this._invite
  }

  // relationship_status - computed: true, optional: false, required: false
  public get relationshipStatus() {
    return this.getStringAttribute('relationship_status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GuarddutyMemberTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: GuarddutyMemberTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      detector_id: cdktf.stringToTerraform(this._detectorId),
      disable_email_notification: cdktf.booleanToTerraform(this._disableEmailNotification),
      email: cdktf.stringToTerraform(this._email),
      invitation_message: cdktf.stringToTerraform(this._invitationMessage),
      invite: cdktf.booleanToTerraform(this._invite),
      timeouts: guarddutyMemberTimeoutsToTerraform(this._timeouts),
    };
  }
}
