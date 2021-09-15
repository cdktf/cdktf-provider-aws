// https://www.terraform.io/docs/providers/aws/r/macie2_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Macie2MemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#account_id Macie2Member#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#email Macie2Member#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#invitation_disable_email_notification Macie2Member#invitation_disable_email_notification}
  */
  readonly invitationDisableEmailNotification?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#invitation_message Macie2Member#invitation_message}
  */
  readonly invitationMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#invite Macie2Member#invite}
  */
  readonly invite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#status Macie2Member#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#tags Macie2Member#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#tags_all Macie2Member#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#timeouts Macie2Member#timeouts}
  */
  readonly timeouts?: Macie2MemberTimeouts;
}
export interface Macie2MemberTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#create Macie2Member#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#update Macie2Member#update}
  */
  readonly update?: string;
}

function macie2MemberTimeoutsToTerraform(struct?: Macie2MemberTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html aws_macie2_member}
*/
export class Macie2Member extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_macie2_member";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html aws_macie2_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Macie2MemberConfig
  */
  public constructor(scope: Construct, id: string, config: Macie2MemberConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_macie2_member',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._email = config.email;
    this._invitationDisableEmailNotification = config.invitationDisableEmailNotification;
    this._invitationMessage = config.invitationMessage;
    this._invite = config.invite;
    this._status = config.status;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
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

  // administrator_account_id - computed: true, optional: false, required: false
  public get administratorAccountId() {
    return this.getStringAttribute('administrator_account_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // invitation_disable_email_notification - computed: false, optional: true, required: false
  private _invitationDisableEmailNotification?: string;
  public get invitationDisableEmailNotification() {
    return this.getStringAttribute('invitation_disable_email_notification');
  }
  public set invitationDisableEmailNotification(value: string ) {
    this._invitationDisableEmailNotification = value;
  }
  public resetInvitationDisableEmailNotification() {
    this._invitationDisableEmailNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invitationDisableEmailNotificationInput() {
    return this._invitationDisableEmailNotification
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

  // invite - computed: true, optional: true, required: false
  private _invite?: boolean | cdktf.IResolvable;
  public get invite() {
    return this.getBooleanAttribute('invite');
  }
  public set invite(value: boolean | cdktf.IResolvable) {
    this._invite = value;
  }
  public resetInvite() {
    this._invite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteInput() {
    return this._invite
  }

  // invited_at - computed: true, optional: false, required: false
  public get invitedAt() {
    return this.getStringAttribute('invited_at');
  }

  // master_account_id - computed: true, optional: false, required: false
  public get masterAccountId() {
    return this.getStringAttribute('master_account_id');
  }

  // relationship_status - computed: true, optional: false, required: false
  public get relationshipStatus() {
    return this.getStringAttribute('relationship_status');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: Macie2MemberTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: Macie2MemberTimeouts ) {
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
      email: cdktf.stringToTerraform(this._email),
      invitation_disable_email_notification: cdktf.stringToTerraform(this._invitationDisableEmailNotification),
      invitation_message: cdktf.stringToTerraform(this._invitationMessage),
      invite: cdktf.booleanToTerraform(this._invite),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      timeouts: macie2MemberTimeoutsToTerraform(this._timeouts),
    };
  }
}
