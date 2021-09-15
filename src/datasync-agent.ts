// https://www.terraform.io/docs/providers/aws/r/datasync_agent.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasyncAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#activation_key DatasyncAgent#activation_key}
  */
  readonly activationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#ip_address DatasyncAgent#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#name DatasyncAgent#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#private_link_endpoint DatasyncAgent#private_link_endpoint}
  */
  readonly privateLinkEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#security_group_arns DatasyncAgent#security_group_arns}
  */
  readonly securityGroupArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#subnet_arns DatasyncAgent#subnet_arns}
  */
  readonly subnetArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#tags DatasyncAgent#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#tags_all DatasyncAgent#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#vpc_endpoint_id DatasyncAgent#vpc_endpoint_id}
  */
  readonly vpcEndpointId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#timeouts DatasyncAgent#timeouts}
  */
  readonly timeouts?: DatasyncAgentTimeouts;
}
export interface DatasyncAgentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#create DatasyncAgent#create}
  */
  readonly create?: string;
}

function datasyncAgentTimeoutsToTerraform(struct?: DatasyncAgentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html aws_datasync_agent}
*/
export class DatasyncAgent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_datasync_agent";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html aws_datasync_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncAgentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DatasyncAgentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_agent',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._activationKey = config.activationKey;
    this._ipAddress = config.ipAddress;
    this._name = config.name;
    this._privateLinkEndpoint = config.privateLinkEndpoint;
    this._securityGroupArns = config.securityGroupArns;
    this._subnetArns = config.subnetArns;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._vpcEndpointId = config.vpcEndpointId;
    this._timeouts = config.timeouts;
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
    return this._activationKey
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._ipAddress
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // private_link_endpoint - computed: false, optional: true, required: false
  private _privateLinkEndpoint?: string;
  public get privateLinkEndpoint() {
    return this.getStringAttribute('private_link_endpoint');
  }
  public set privateLinkEndpoint(value: string ) {
    this._privateLinkEndpoint = value;
  }
  public resetPrivateLinkEndpoint() {
    this._privateLinkEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkEndpointInput() {
    return this._privateLinkEndpoint
  }

  // security_group_arns - computed: false, optional: true, required: false
  private _securityGroupArns?: string[];
  public get securityGroupArns() {
    return this.getListAttribute('security_group_arns');
  }
  public set securityGroupArns(value: string[] ) {
    this._securityGroupArns = value;
  }
  public resetSecurityGroupArns() {
    this._securityGroupArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupArnsInput() {
    return this._securityGroupArns
  }

  // subnet_arns - computed: false, optional: true, required: false
  private _subnetArns?: string[];
  public get subnetArns() {
    return this.getListAttribute('subnet_arns');
  }
  public set subnetArns(value: string[] ) {
    this._subnetArns = value;
  }
  public resetSubnetArns() {
    this._subnetArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetArnsInput() {
    return this._subnetArns
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

  // vpc_endpoint_id - computed: false, optional: true, required: false
  private _vpcEndpointId?: string;
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }
  public set vpcEndpointId(value: string ) {
    this._vpcEndpointId = value;
  }
  public resetVpcEndpointId() {
    this._vpcEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdInput() {
    return this._vpcEndpointId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatasyncAgentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DatasyncAgentTimeouts ) {
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
      activation_key: cdktf.stringToTerraform(this._activationKey),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      name: cdktf.stringToTerraform(this._name),
      private_link_endpoint: cdktf.stringToTerraform(this._privateLinkEndpoint),
      security_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupArns),
      subnet_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetArns),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
      timeouts: datasyncAgentTimeoutsToTerraform(this._timeouts),
    };
  }
}
