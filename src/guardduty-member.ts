// https://www.terraform.io/docs/providers/aws/r/guardduty_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuarddutyMemberConfig extends cdktf.TerraformMetaArguments {
  readonly accountId: string;
  readonly detectorId: string;
  readonly disableEmailNotification?: boolean;
  readonly email: string;
  readonly invitationMessage?: string;
  readonly invite?: boolean;
  /** timeouts block */
  readonly timeouts?: GuarddutyMemberTimeouts;
}
export interface GuarddutyMemberTimeouts {
  readonly create?: string;
  readonly update?: string;
}

function guarddutyMemberTimeoutsToTerraform(struct?: GuarddutyMemberTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class GuarddutyMember extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _disableEmailNotification?: boolean;
  public get disableEmailNotification() {
    return this.getBooleanAttribute('disable_email_notification');
  }
  public set disableEmailNotification(value: boolean ) {
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
  private _invite?: boolean;
  public get invite() {
    return this.getBooleanAttribute('invite');
  }
  public set invite(value: boolean ) {
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
