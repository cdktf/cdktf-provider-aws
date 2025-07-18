/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/connect_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/connect_queue#description ConnectQueue#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/connect_queue#hours_of_operation_id ConnectQueue#hours_of_operation_id}
  */
  readonly hoursOfOperationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/connect_queue#id ConnectQueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/connect_queue#instance_id ConnectQueue#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/connect_queue#max_contacts ConnectQueue#max_contacts}
  */
  readonly maxContacts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/connect_queue#name ConnectQueue#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/connect_queue#quick_connect_ids ConnectQueue#quick_connect_ids}
  */
  readonly quickConnectIds?: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/connect_queue#region ConnectQueue#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/connect_queue#status ConnectQueue#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/connect_queue#tags ConnectQueue#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/connect_queue#tags_all ConnectQueue#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * outbound_caller_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/connect_queue#outbound_caller_config ConnectQueue#outbound_caller_config}
  */
  readonly outboundCallerConfig?: ConnectQueueOutboundCallerConfig;
}
export interface ConnectQueueOutboundCallerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/connect_queue#outbound_caller_id_name ConnectQueue#outbound_caller_id_name}
  */
  readonly outboundCallerIdName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/connect_queue#outbound_caller_id_number_id ConnectQueue#outbound_caller_id_number_id}
  */
  readonly outboundCallerIdNumberId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/connect_queue#outbound_flow_id ConnectQueue#outbound_flow_id}
  */
  readonly outboundFlowId?: string;
}

export function connectQueueOutboundCallerConfigToTerraform(struct?: ConnectQueueOutboundCallerConfigOutputReference | ConnectQueueOutboundCallerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    outbound_caller_id_name: cdktf.stringToTerraform(struct!.outboundCallerIdName),
    outbound_caller_id_number_id: cdktf.stringToTerraform(struct!.outboundCallerIdNumberId),
    outbound_flow_id: cdktf.stringToTerraform(struct!.outboundFlowId),
  }
}


export function connectQueueOutboundCallerConfigToHclTerraform(struct?: ConnectQueueOutboundCallerConfigOutputReference | ConnectQueueOutboundCallerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    outbound_caller_id_name: {
      value: cdktf.stringToHclTerraform(struct!.outboundCallerIdName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_caller_id_number_id: {
      value: cdktf.stringToHclTerraform(struct!.outboundCallerIdNumberId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_flow_id: {
      value: cdktf.stringToHclTerraform(struct!.outboundFlowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectQueueOutboundCallerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectQueueOutboundCallerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outboundCallerIdName !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundCallerIdName = this._outboundCallerIdName;
    }
    if (this._outboundCallerIdNumberId !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundCallerIdNumberId = this._outboundCallerIdNumberId;
    }
    if (this._outboundFlowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundFlowId = this._outboundFlowId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectQueueOutboundCallerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outboundCallerIdName = undefined;
      this._outboundCallerIdNumberId = undefined;
      this._outboundFlowId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outboundCallerIdName = value.outboundCallerIdName;
      this._outboundCallerIdNumberId = value.outboundCallerIdNumberId;
      this._outboundFlowId = value.outboundFlowId;
    }
  }

  // outbound_caller_id_name - computed: false, optional: true, required: false
  private _outboundCallerIdName?: string; 
  public get outboundCallerIdName() {
    return this.getStringAttribute('outbound_caller_id_name');
  }
  public set outboundCallerIdName(value: string) {
    this._outboundCallerIdName = value;
  }
  public resetOutboundCallerIdName() {
    this._outboundCallerIdName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundCallerIdNameInput() {
    return this._outboundCallerIdName;
  }

  // outbound_caller_id_number_id - computed: false, optional: true, required: false
  private _outboundCallerIdNumberId?: string; 
  public get outboundCallerIdNumberId() {
    return this.getStringAttribute('outbound_caller_id_number_id');
  }
  public set outboundCallerIdNumberId(value: string) {
    this._outboundCallerIdNumberId = value;
  }
  public resetOutboundCallerIdNumberId() {
    this._outboundCallerIdNumberId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundCallerIdNumberIdInput() {
    return this._outboundCallerIdNumberId;
  }

  // outbound_flow_id - computed: false, optional: true, required: false
  private _outboundFlowId?: string; 
  public get outboundFlowId() {
    return this.getStringAttribute('outbound_flow_id');
  }
  public set outboundFlowId(value: string) {
    this._outboundFlowId = value;
  }
  public resetOutboundFlowId() {
    this._outboundFlowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundFlowIdInput() {
    return this._outboundFlowId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/connect_queue aws_connect_queue}
*/
export class ConnectQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_connect_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectQueue to import
  * @param importFromId The id of the existing ConnectQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/connect_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_connect_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/connect_queue aws_connect_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectQueueConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_connect_queue',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
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
    this._description = config.description;
    this._hoursOfOperationId = config.hoursOfOperationId;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._maxContacts = config.maxContacts;
    this._name = config.name;
    this._quickConnectIds = config.quickConnectIds;
    this._region = config.region;
    this._status = config.status;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._outboundCallerConfig.internalValue = config.outboundCallerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // hours_of_operation_id - computed: false, optional: false, required: true
  private _hoursOfOperationId?: string; 
  public get hoursOfOperationId() {
    return this.getStringAttribute('hours_of_operation_id');
  }
  public set hoursOfOperationId(value: string) {
    this._hoursOfOperationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursOfOperationIdInput() {
    return this._hoursOfOperationId;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // max_contacts - computed: false, optional: true, required: false
  private _maxContacts?: number; 
  public get maxContacts() {
    return this.getNumberAttribute('max_contacts');
  }
  public set maxContacts(value: number) {
    this._maxContacts = value;
  }
  public resetMaxContacts() {
    this._maxContacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxContactsInput() {
    return this._maxContacts;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // queue_id - computed: true, optional: false, required: false
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }

  // quick_connect_ids - computed: false, optional: true, required: false
  private _quickConnectIds?: string[]; 
  public get quickConnectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('quick_connect_ids'));
  }
  public set quickConnectIds(value: string[]) {
    this._quickConnectIds = value;
  }
  public resetQuickConnectIds() {
    this._quickConnectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quickConnectIdsInput() {
    return this._quickConnectIds;
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
    return this._status;
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

  // outbound_caller_config - computed: false, optional: true, required: false
  private _outboundCallerConfig = new ConnectQueueOutboundCallerConfigOutputReference(this, "outbound_caller_config");
  public get outboundCallerConfig() {
    return this._outboundCallerConfig;
  }
  public putOutboundCallerConfig(value: ConnectQueueOutboundCallerConfig) {
    this._outboundCallerConfig.internalValue = value;
  }
  public resetOutboundCallerConfig() {
    this._outboundCallerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundCallerConfigInput() {
    return this._outboundCallerConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      hours_of_operation_id: cdktf.stringToTerraform(this._hoursOfOperationId),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      max_contacts: cdktf.numberToTerraform(this._maxContacts),
      name: cdktf.stringToTerraform(this._name),
      quick_connect_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._quickConnectIds),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      outbound_caller_config: connectQueueOutboundCallerConfigToTerraform(this._outboundCallerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hours_of_operation_id: {
        value: cdktf.stringToHclTerraform(this._hoursOfOperationId),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_contacts: {
        value: cdktf.numberToHclTerraform(this._maxContacts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quick_connect_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._quickConnectIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      outbound_caller_config: {
        value: connectQueueOutboundCallerConfigToHclTerraform(this._outboundCallerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectQueueOutboundCallerConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
