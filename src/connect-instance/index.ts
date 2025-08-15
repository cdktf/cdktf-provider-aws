/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/connect_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/connect_instance#auto_resolve_best_voices_enabled ConnectInstance#auto_resolve_best_voices_enabled}
  */
  readonly autoResolveBestVoicesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/connect_instance#contact_flow_logs_enabled ConnectInstance#contact_flow_logs_enabled}
  */
  readonly contactFlowLogsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/connect_instance#contact_lens_enabled ConnectInstance#contact_lens_enabled}
  */
  readonly contactLensEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/connect_instance#directory_id ConnectInstance#directory_id}
  */
  readonly directoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/connect_instance#early_media_enabled ConnectInstance#early_media_enabled}
  */
  readonly earlyMediaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/connect_instance#id ConnectInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/connect_instance#identity_management_type ConnectInstance#identity_management_type}
  */
  readonly identityManagementType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/connect_instance#inbound_calls_enabled ConnectInstance#inbound_calls_enabled}
  */
  readonly inboundCallsEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/connect_instance#instance_alias ConnectInstance#instance_alias}
  */
  readonly instanceAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/connect_instance#multi_party_conference_enabled ConnectInstance#multi_party_conference_enabled}
  */
  readonly multiPartyConferenceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/connect_instance#outbound_calls_enabled ConnectInstance#outbound_calls_enabled}
  */
  readonly outboundCallsEnabled: boolean | cdktf.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/connect_instance#region ConnectInstance#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/connect_instance#tags ConnectInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/connect_instance#tags_all ConnectInstance#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/connect_instance#timeouts ConnectInstance#timeouts}
  */
  readonly timeouts?: ConnectInstanceTimeouts;
}
export interface ConnectInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/connect_instance#create ConnectInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/connect_instance#delete ConnectInstance#delete}
  */
  readonly delete?: string;
}

export function connectInstanceTimeoutsToTerraform(struct?: ConnectInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function connectInstanceTimeoutsToHclTerraform(struct?: ConnectInstanceTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectInstanceTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/connect_instance aws_connect_instance}
*/
export class ConnectInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_connect_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectInstance to import
  * @param importFromId The id of the existing ConnectInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/connect_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_connect_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/connect_instance aws_connect_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_connect_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.9.0',
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
    this._autoResolveBestVoicesEnabled = config.autoResolveBestVoicesEnabled;
    this._contactFlowLogsEnabled = config.contactFlowLogsEnabled;
    this._contactLensEnabled = config.contactLensEnabled;
    this._directoryId = config.directoryId;
    this._earlyMediaEnabled = config.earlyMediaEnabled;
    this._id = config.id;
    this._identityManagementType = config.identityManagementType;
    this._inboundCallsEnabled = config.inboundCallsEnabled;
    this._instanceAlias = config.instanceAlias;
    this._multiPartyConferenceEnabled = config.multiPartyConferenceEnabled;
    this._outboundCallsEnabled = config.outboundCallsEnabled;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_resolve_best_voices_enabled - computed: false, optional: true, required: false
  private _autoResolveBestVoicesEnabled?: boolean | cdktf.IResolvable; 
  public get autoResolveBestVoicesEnabled() {
    return this.getBooleanAttribute('auto_resolve_best_voices_enabled');
  }
  public set autoResolveBestVoicesEnabled(value: boolean | cdktf.IResolvable) {
    this._autoResolveBestVoicesEnabled = value;
  }
  public resetAutoResolveBestVoicesEnabled() {
    this._autoResolveBestVoicesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoResolveBestVoicesEnabledInput() {
    return this._autoResolveBestVoicesEnabled;
  }

  // contact_flow_logs_enabled - computed: false, optional: true, required: false
  private _contactFlowLogsEnabled?: boolean | cdktf.IResolvable; 
  public get contactFlowLogsEnabled() {
    return this.getBooleanAttribute('contact_flow_logs_enabled');
  }
  public set contactFlowLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._contactFlowLogsEnabled = value;
  }
  public resetContactFlowLogsEnabled() {
    this._contactFlowLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactFlowLogsEnabledInput() {
    return this._contactFlowLogsEnabled;
  }

  // contact_lens_enabled - computed: false, optional: true, required: false
  private _contactLensEnabled?: boolean | cdktf.IResolvable; 
  public get contactLensEnabled() {
    return this.getBooleanAttribute('contact_lens_enabled');
  }
  public set contactLensEnabled(value: boolean | cdktf.IResolvable) {
    this._contactLensEnabled = value;
  }
  public resetContactLensEnabled() {
    this._contactLensEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactLensEnabledInput() {
    return this._contactLensEnabled;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // directory_id - computed: false, optional: true, required: false
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  public resetDirectoryId() {
    this._directoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
  }

  // early_media_enabled - computed: false, optional: true, required: false
  private _earlyMediaEnabled?: boolean | cdktf.IResolvable; 
  public get earlyMediaEnabled() {
    return this.getBooleanAttribute('early_media_enabled');
  }
  public set earlyMediaEnabled(value: boolean | cdktf.IResolvable) {
    this._earlyMediaEnabled = value;
  }
  public resetEarlyMediaEnabled() {
    this._earlyMediaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earlyMediaEnabledInput() {
    return this._earlyMediaEnabled;
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

  // identity_management_type - computed: false, optional: false, required: true
  private _identityManagementType?: string; 
  public get identityManagementType() {
    return this.getStringAttribute('identity_management_type');
  }
  public set identityManagementType(value: string) {
    this._identityManagementType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityManagementTypeInput() {
    return this._identityManagementType;
  }

  // inbound_calls_enabled - computed: false, optional: false, required: true
  private _inboundCallsEnabled?: boolean | cdktf.IResolvable; 
  public get inboundCallsEnabled() {
    return this.getBooleanAttribute('inbound_calls_enabled');
  }
  public set inboundCallsEnabled(value: boolean | cdktf.IResolvable) {
    this._inboundCallsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundCallsEnabledInput() {
    return this._inboundCallsEnabled;
  }

  // instance_alias - computed: false, optional: true, required: false
  private _instanceAlias?: string; 
  public get instanceAlias() {
    return this.getStringAttribute('instance_alias');
  }
  public set instanceAlias(value: string) {
    this._instanceAlias = value;
  }
  public resetInstanceAlias() {
    this._instanceAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceAliasInput() {
    return this._instanceAlias;
  }

  // multi_party_conference_enabled - computed: false, optional: true, required: false
  private _multiPartyConferenceEnabled?: boolean | cdktf.IResolvable; 
  public get multiPartyConferenceEnabled() {
    return this.getBooleanAttribute('multi_party_conference_enabled');
  }
  public set multiPartyConferenceEnabled(value: boolean | cdktf.IResolvable) {
    this._multiPartyConferenceEnabled = value;
  }
  public resetMultiPartyConferenceEnabled() {
    this._multiPartyConferenceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiPartyConferenceEnabledInput() {
    return this._multiPartyConferenceEnabled;
  }

  // outbound_calls_enabled - computed: false, optional: false, required: true
  private _outboundCallsEnabled?: boolean | cdktf.IResolvable; 
  public get outboundCallsEnabled() {
    return this.getBooleanAttribute('outbound_calls_enabled');
  }
  public set outboundCallsEnabled(value: boolean | cdktf.IResolvable) {
    this._outboundCallsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundCallsEnabledInput() {
    return this._outboundCallsEnabled;
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

  // service_role - computed: true, optional: false, required: false
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ConnectInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ConnectInstanceTimeouts) {
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
      auto_resolve_best_voices_enabled: cdktf.booleanToTerraform(this._autoResolveBestVoicesEnabled),
      contact_flow_logs_enabled: cdktf.booleanToTerraform(this._contactFlowLogsEnabled),
      contact_lens_enabled: cdktf.booleanToTerraform(this._contactLensEnabled),
      directory_id: cdktf.stringToTerraform(this._directoryId),
      early_media_enabled: cdktf.booleanToTerraform(this._earlyMediaEnabled),
      id: cdktf.stringToTerraform(this._id),
      identity_management_type: cdktf.stringToTerraform(this._identityManagementType),
      inbound_calls_enabled: cdktf.booleanToTerraform(this._inboundCallsEnabled),
      instance_alias: cdktf.stringToTerraform(this._instanceAlias),
      multi_party_conference_enabled: cdktf.booleanToTerraform(this._multiPartyConferenceEnabled),
      outbound_calls_enabled: cdktf.booleanToTerraform(this._outboundCallsEnabled),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      timeouts: connectInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_resolve_best_voices_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoResolveBestVoicesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      contact_flow_logs_enabled: {
        value: cdktf.booleanToHclTerraform(this._contactFlowLogsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      contact_lens_enabled: {
        value: cdktf.booleanToHclTerraform(this._contactLensEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      directory_id: {
        value: cdktf.stringToHclTerraform(this._directoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      early_media_enabled: {
        value: cdktf.booleanToHclTerraform(this._earlyMediaEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_management_type: {
        value: cdktf.stringToHclTerraform(this._identityManagementType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inbound_calls_enabled: {
        value: cdktf.booleanToHclTerraform(this._inboundCallsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_alias: {
        value: cdktf.stringToHclTerraform(this._instanceAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_party_conference_enabled: {
        value: cdktf.booleanToHclTerraform(this._multiPartyConferenceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      outbound_calls_enabled: {
        value: cdktf.booleanToHclTerraform(this._outboundCallsEnabled),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: connectInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
