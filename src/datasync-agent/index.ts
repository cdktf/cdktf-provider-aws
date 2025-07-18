/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasyncAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_agent#activation_key DatasyncAgent#activation_key}
  */
  readonly activationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_agent#id DatasyncAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_agent#ip_address DatasyncAgent#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_agent#name DatasyncAgent#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_agent#private_link_endpoint DatasyncAgent#private_link_endpoint}
  */
  readonly privateLinkEndpoint?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_agent#region DatasyncAgent#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_agent#security_group_arns DatasyncAgent#security_group_arns}
  */
  readonly securityGroupArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_agent#subnet_arns DatasyncAgent#subnet_arns}
  */
  readonly subnetArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_agent#tags DatasyncAgent#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_agent#tags_all DatasyncAgent#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_agent#vpc_endpoint_id DatasyncAgent#vpc_endpoint_id}
  */
  readonly vpcEndpointId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_agent#timeouts DatasyncAgent#timeouts}
  */
  readonly timeouts?: DatasyncAgentTimeouts;
}
export interface DatasyncAgentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_agent#create DatasyncAgent#create}
  */
  readonly create?: string;
}

export function datasyncAgentTimeoutsToTerraform(struct?: DatasyncAgentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function datasyncAgentTimeoutsToHclTerraform(struct?: DatasyncAgentTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncAgentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatasyncAgentTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncAgentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_agent aws_datasync_agent}
*/
export class DatasyncAgent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_datasync_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatasyncAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatasyncAgent to import
  * @param importFromId The id of the existing DatasyncAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatasyncAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_datasync_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datasync_agent aws_datasync_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncAgentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DatasyncAgentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_agent',
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
    this._activationKey = config.activationKey;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._name = config.name;
    this._privateLinkEndpoint = config.privateLinkEndpoint;
    this._region = config.region;
    this._securityGroupArns = config.securityGroupArns;
    this._subnetArns = config.subnetArns;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._vpcEndpointId = config.vpcEndpointId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_key - computed: true, optional: true, required: false
  private _activationKey?: string; 
  public get activationKey() {
    return this.getStringAttribute('activation_key');
  }
  public set activationKey(value: string) {
    this._activationKey = value;
  }
  public resetActivationKey() {
    this._activationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationKeyInput() {
    return this._activationKey;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // private_link_endpoint - computed: true, optional: true, required: false
  private _privateLinkEndpoint?: string; 
  public get privateLinkEndpoint() {
    return this.getStringAttribute('private_link_endpoint');
  }
  public set privateLinkEndpoint(value: string) {
    this._privateLinkEndpoint = value;
  }
  public resetPrivateLinkEndpoint() {
    this._privateLinkEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkEndpointInput() {
    return this._privateLinkEndpoint;
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

  // security_group_arns - computed: false, optional: true, required: false
  private _securityGroupArns?: string[]; 
  public get securityGroupArns() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_arns'));
  }
  public set securityGroupArns(value: string[]) {
    this._securityGroupArns = value;
  }
  public resetSecurityGroupArns() {
    this._securityGroupArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupArnsInput() {
    return this._securityGroupArns;
  }

  // subnet_arns - computed: false, optional: true, required: false
  private _subnetArns?: string[]; 
  public get subnetArns() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_arns'));
  }
  public set subnetArns(value: string[]) {
    this._subnetArns = value;
  }
  public resetSubnetArns() {
    this._subnetArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetArnsInput() {
    return this._subnetArns;
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

  // vpc_endpoint_id - computed: false, optional: true, required: false
  private _vpcEndpointId?: string; 
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }
  public set vpcEndpointId(value: string) {
    this._vpcEndpointId = value;
  }
  public resetVpcEndpointId() {
    this._vpcEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdInput() {
    return this._vpcEndpointId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatasyncAgentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatasyncAgentTimeouts) {
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
      activation_key: cdktf.stringToTerraform(this._activationKey),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      name: cdktf.stringToTerraform(this._name),
      private_link_endpoint: cdktf.stringToTerraform(this._privateLinkEndpoint),
      region: cdktf.stringToTerraform(this._region),
      security_group_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupArns),
      subnet_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetArns),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
      timeouts: datasyncAgentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activation_key: {
        value: cdktf.stringToHclTerraform(this._activationKey),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_link_endpoint: {
        value: cdktf.stringToHclTerraform(this._privateLinkEndpoint),
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
      security_group_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subnet_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      vpc_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._vpcEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: datasyncAgentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatasyncAgentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
