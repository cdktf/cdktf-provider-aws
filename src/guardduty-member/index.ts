/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/guardduty_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuarddutyMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/guardduty_member#account_id GuarddutyMember#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/guardduty_member#detector_id GuarddutyMember#detector_id}
  */
  readonly detectorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/guardduty_member#disable_email_notification GuarddutyMember#disable_email_notification}
  */
  readonly disableEmailNotification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/guardduty_member#email GuarddutyMember#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/guardduty_member#id GuarddutyMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/guardduty_member#invitation_message GuarddutyMember#invitation_message}
  */
  readonly invitationMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/guardduty_member#invite GuarddutyMember#invite}
  */
  readonly invite?: boolean | cdktf.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/guardduty_member#region GuarddutyMember#region}
  */
  readonly region?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/guardduty_member#timeouts GuarddutyMember#timeouts}
  */
  readonly timeouts?: GuarddutyMemberTimeouts;
}
export interface GuarddutyMemberTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/guardduty_member#create GuarddutyMember#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/guardduty_member#update GuarddutyMember#update}
  */
  readonly update?: string;
}

export function guarddutyMemberTimeoutsToTerraform(struct?: GuarddutyMemberTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function guarddutyMemberTimeoutsToHclTerraform(struct?: GuarddutyMemberTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuarddutyMemberTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GuarddutyMemberTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuarddutyMemberTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/guardduty_member aws_guardduty_member}
*/
export class GuarddutyMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_guardduty_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GuarddutyMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GuarddutyMember to import
  * @param importFromId The id of the existing GuarddutyMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/guardduty_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GuarddutyMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_guardduty_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/guardduty_member aws_guardduty_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuarddutyMemberConfig
  */
  public constructor(scope: Construct, id: string, config: GuarddutyMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_guardduty_member',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.14.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._detectorId = config.detectorId;
    this._disableEmailNotification = config.disableEmailNotification;
    this._email = config.email;
    this._id = config.id;
    this._invitationMessage = config.invitationMessage;
    this._invite = config.invite;
    this._region = config.region;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // detector_id - computed: false, optional: false, required: true
  private _detectorId?: string; 
  public get detectorId() {
    return this.getStringAttribute('detector_id');
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorIdInput() {
    return this._detectorId;
  }

  // disable_email_notification - computed: false, optional: true, required: false
  private _disableEmailNotification?: boolean | cdktf.IResolvable; 
  public get disableEmailNotification() {
    return this.getBooleanAttribute('disable_email_notification');
  }
  public set disableEmailNotification(value: boolean | cdktf.IResolvable) {
    this._disableEmailNotification = value;
  }
  public resetDisableEmailNotification() {
    this._disableEmailNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEmailNotificationInput() {
    return this._disableEmailNotification;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // invitation_message - computed: false, optional: true, required: false
  private _invitationMessage?: string; 
  public get invitationMessage() {
    return this.getStringAttribute('invitation_message');
  }
  public set invitationMessage(value: string) {
    this._invitationMessage = value;
  }
  public resetInvitationMessage() {
    this._invitationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invitationMessageInput() {
    return this._invitationMessage;
  }

  // invite - computed: false, optional: true, required: false
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
    return this._invite;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // relationship_status - computed: true, optional: false, required: false
  public get relationshipStatus() {
    return this.getStringAttribute('relationship_status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GuarddutyMemberTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GuarddutyMemberTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      id: cdktf.stringToTerraform(this._id),
      invitation_message: cdktf.stringToTerraform(this._invitationMessage),
      invite: cdktf.booleanToTerraform(this._invite),
      region: cdktf.stringToTerraform(this._region),
      timeouts: guarddutyMemberTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detector_id: {
        value: cdktf.stringToHclTerraform(this._detectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_email_notification: {
        value: cdktf.booleanToHclTerraform(this._disableEmailNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invitation_message: {
        value: cdktf.stringToHclTerraform(this._invitationMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invite: {
        value: cdktf.booleanToHclTerraform(this._invite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: guarddutyMemberTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GuarddutyMemberTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
