/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/pinpointsmsvoicev2_phone_number
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Pinpointsmsvoicev2PhoneNumberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/pinpointsmsvoicev2_phone_number#deletion_protection_enabled Pinpointsmsvoicev2PhoneNumber#deletion_protection_enabled}
  */
  readonly deletionProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/pinpointsmsvoicev2_phone_number#iso_country_code Pinpointsmsvoicev2PhoneNumber#iso_country_code}
  */
  readonly isoCountryCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/pinpointsmsvoicev2_phone_number#message_type Pinpointsmsvoicev2PhoneNumber#message_type}
  */
  readonly messageType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/pinpointsmsvoicev2_phone_number#number_capabilities Pinpointsmsvoicev2PhoneNumber#number_capabilities}
  */
  readonly numberCapabilities: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/pinpointsmsvoicev2_phone_number#number_type Pinpointsmsvoicev2PhoneNumber#number_type}
  */
  readonly numberType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/pinpointsmsvoicev2_phone_number#opt_out_list_name Pinpointsmsvoicev2PhoneNumber#opt_out_list_name}
  */
  readonly optOutListName?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/pinpointsmsvoicev2_phone_number#region Pinpointsmsvoicev2PhoneNumber#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/pinpointsmsvoicev2_phone_number#registration_id Pinpointsmsvoicev2PhoneNumber#registration_id}
  */
  readonly registrationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/pinpointsmsvoicev2_phone_number#self_managed_opt_outs_enabled Pinpointsmsvoicev2PhoneNumber#self_managed_opt_outs_enabled}
  */
  readonly selfManagedOptOutsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/pinpointsmsvoicev2_phone_number#tags Pinpointsmsvoicev2PhoneNumber#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_arn Pinpointsmsvoicev2PhoneNumber#two_way_channel_arn}
  */
  readonly twoWayChannelArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_enabled Pinpointsmsvoicev2PhoneNumber#two_way_channel_enabled}
  */
  readonly twoWayChannelEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/pinpointsmsvoicev2_phone_number#two_way_channel_role Pinpointsmsvoicev2PhoneNumber#two_way_channel_role}
  */
  readonly twoWayChannelRole?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/pinpointsmsvoicev2_phone_number#timeouts Pinpointsmsvoicev2PhoneNumber#timeouts}
  */
  readonly timeouts?: Pinpointsmsvoicev2PhoneNumberTimeouts;
}
export interface Pinpointsmsvoicev2PhoneNumberTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/pinpointsmsvoicev2_phone_number#create Pinpointsmsvoicev2PhoneNumber#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/pinpointsmsvoicev2_phone_number#delete Pinpointsmsvoicev2PhoneNumber#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/pinpointsmsvoicev2_phone_number#update Pinpointsmsvoicev2PhoneNumber#update}
  */
  readonly update?: string;
}

export function pinpointsmsvoicev2PhoneNumberTimeoutsToTerraform(struct?: Pinpointsmsvoicev2PhoneNumberTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function pinpointsmsvoicev2PhoneNumberTimeoutsToHclTerraform(struct?: Pinpointsmsvoicev2PhoneNumberTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
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

export class Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Pinpointsmsvoicev2PhoneNumberTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Pinpointsmsvoicev2PhoneNumberTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
      this._delete = value.delete;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/pinpointsmsvoicev2_phone_number aws_pinpointsmsvoicev2_phone_number}
*/
export class Pinpointsmsvoicev2PhoneNumber extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_pinpointsmsvoicev2_phone_number";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pinpointsmsvoicev2PhoneNumber resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pinpointsmsvoicev2PhoneNumber to import
  * @param importFromId The id of the existing Pinpointsmsvoicev2PhoneNumber that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/pinpointsmsvoicev2_phone_number#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pinpointsmsvoicev2PhoneNumber to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_pinpointsmsvoicev2_phone_number", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/pinpointsmsvoicev2_phone_number aws_pinpointsmsvoicev2_phone_number} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Pinpointsmsvoicev2PhoneNumberConfig
  */
  public constructor(scope: Construct, id: string, config: Pinpointsmsvoicev2PhoneNumberConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_pinpointsmsvoicev2_phone_number',
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
    this._deletionProtectionEnabled = config.deletionProtectionEnabled;
    this._isoCountryCode = config.isoCountryCode;
    this._messageType = config.messageType;
    this._numberCapabilities = config.numberCapabilities;
    this._numberType = config.numberType;
    this._optOutListName = config.optOutListName;
    this._region = config.region;
    this._registrationId = config.registrationId;
    this._selfManagedOptOutsEnabled = config.selfManagedOptOutsEnabled;
    this._tags = config.tags;
    this._twoWayChannelArn = config.twoWayChannelArn;
    this._twoWayChannelEnabled = config.twoWayChannelEnabled;
    this._twoWayChannelRole = config.twoWayChannelRole;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // deletion_protection_enabled - computed: true, optional: true, required: false
  private _deletionProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get deletionProtectionEnabled() {
    return this.getBooleanAttribute('deletion_protection_enabled');
  }
  public set deletionProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._deletionProtectionEnabled = value;
  }
  public resetDeletionProtectionEnabled() {
    this._deletionProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionEnabledInput() {
    return this._deletionProtectionEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iso_country_code - computed: false, optional: false, required: true
  private _isoCountryCode?: string; 
  public get isoCountryCode() {
    return this.getStringAttribute('iso_country_code');
  }
  public set isoCountryCode(value: string) {
    this._isoCountryCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isoCountryCodeInput() {
    return this._isoCountryCode;
  }

  // message_type - computed: false, optional: false, required: true
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
  }

  // monthly_leasing_price - computed: true, optional: false, required: false
  public get monthlyLeasingPrice() {
    return this.getStringAttribute('monthly_leasing_price');
  }

  // number_capabilities - computed: false, optional: false, required: true
  private _numberCapabilities?: string[]; 
  public get numberCapabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('number_capabilities'));
  }
  public set numberCapabilities(value: string[]) {
    this._numberCapabilities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberCapabilitiesInput() {
    return this._numberCapabilities;
  }

  // number_type - computed: false, optional: false, required: true
  private _numberType?: string; 
  public get numberType() {
    return this.getStringAttribute('number_type');
  }
  public set numberType(value: string) {
    this._numberType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberTypeInput() {
    return this._numberType;
  }

  // opt_out_list_name - computed: true, optional: true, required: false
  private _optOutListName?: string; 
  public get optOutListName() {
    return this.getStringAttribute('opt_out_list_name');
  }
  public set optOutListName(value: string) {
    this._optOutListName = value;
  }
  public resetOptOutListName() {
    this._optOutListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optOutListNameInput() {
    return this._optOutListName;
  }

  // phone_number - computed: true, optional: false, required: false
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
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

  // registration_id - computed: false, optional: true, required: false
  private _registrationId?: string; 
  public get registrationId() {
    return this.getStringAttribute('registration_id');
  }
  public set registrationId(value: string) {
    this._registrationId = value;
  }
  public resetRegistrationId() {
    this._registrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationIdInput() {
    return this._registrationId;
  }

  // self_managed_opt_outs_enabled - computed: true, optional: true, required: false
  private _selfManagedOptOutsEnabled?: boolean | cdktf.IResolvable; 
  public get selfManagedOptOutsEnabled() {
    return this.getBooleanAttribute('self_managed_opt_outs_enabled');
  }
  public set selfManagedOptOutsEnabled(value: boolean | cdktf.IResolvable) {
    this._selfManagedOptOutsEnabled = value;
  }
  public resetSelfManagedOptOutsEnabled() {
    this._selfManagedOptOutsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedOptOutsEnabledInput() {
    return this._selfManagedOptOutsEnabled;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // two_way_channel_arn - computed: false, optional: true, required: false
  private _twoWayChannelArn?: string; 
  public get twoWayChannelArn() {
    return this.getStringAttribute('two_way_channel_arn');
  }
  public set twoWayChannelArn(value: string) {
    this._twoWayChannelArn = value;
  }
  public resetTwoWayChannelArn() {
    this._twoWayChannelArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoWayChannelArnInput() {
    return this._twoWayChannelArn;
  }

  // two_way_channel_enabled - computed: true, optional: true, required: false
  private _twoWayChannelEnabled?: boolean | cdktf.IResolvable; 
  public get twoWayChannelEnabled() {
    return this.getBooleanAttribute('two_way_channel_enabled');
  }
  public set twoWayChannelEnabled(value: boolean | cdktf.IResolvable) {
    this._twoWayChannelEnabled = value;
  }
  public resetTwoWayChannelEnabled() {
    this._twoWayChannelEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoWayChannelEnabledInput() {
    return this._twoWayChannelEnabled;
  }

  // two_way_channel_role - computed: false, optional: true, required: false
  private _twoWayChannelRole?: string; 
  public get twoWayChannelRole() {
    return this.getStringAttribute('two_way_channel_role');
  }
  public set twoWayChannelRole(value: string) {
    this._twoWayChannelRole = value;
  }
  public resetTwoWayChannelRole() {
    this._twoWayChannelRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoWayChannelRoleInput() {
    return this._twoWayChannelRole;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Pinpointsmsvoicev2PhoneNumberTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Pinpointsmsvoicev2PhoneNumberTimeouts) {
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
      deletion_protection_enabled: cdktf.booleanToTerraform(this._deletionProtectionEnabled),
      iso_country_code: cdktf.stringToTerraform(this._isoCountryCode),
      message_type: cdktf.stringToTerraform(this._messageType),
      number_capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._numberCapabilities),
      number_type: cdktf.stringToTerraform(this._numberType),
      opt_out_list_name: cdktf.stringToTerraform(this._optOutListName),
      region: cdktf.stringToTerraform(this._region),
      registration_id: cdktf.stringToTerraform(this._registrationId),
      self_managed_opt_outs_enabled: cdktf.booleanToTerraform(this._selfManagedOptOutsEnabled),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      two_way_channel_arn: cdktf.stringToTerraform(this._twoWayChannelArn),
      two_way_channel_enabled: cdktf.booleanToTerraform(this._twoWayChannelEnabled),
      two_way_channel_role: cdktf.stringToTerraform(this._twoWayChannelRole),
      timeouts: pinpointsmsvoicev2PhoneNumberTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_protection_enabled: {
        value: cdktf.booleanToHclTerraform(this._deletionProtectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      iso_country_code: {
        value: cdktf.stringToHclTerraform(this._isoCountryCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_type: {
        value: cdktf.stringToHclTerraform(this._messageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_capabilities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._numberCapabilities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      number_type: {
        value: cdktf.stringToHclTerraform(this._numberType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opt_out_list_name: {
        value: cdktf.stringToHclTerraform(this._optOutListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registration_id: {
        value: cdktf.stringToHclTerraform(this._registrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      self_managed_opt_outs_enabled: {
        value: cdktf.booleanToHclTerraform(this._selfManagedOptOutsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      two_way_channel_arn: {
        value: cdktf.stringToHclTerraform(this._twoWayChannelArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      two_way_channel_enabled: {
        value: cdktf.booleanToHclTerraform(this._twoWayChannelEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      two_way_channel_role: {
        value: cdktf.stringToHclTerraform(this._twoWayChannelRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: pinpointsmsvoicev2PhoneNumberTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Pinpointsmsvoicev2PhoneNumberTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
