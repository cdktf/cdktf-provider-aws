// https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#auto_accept VpcEndpoint#auto_accept}
  */
  readonly autoAccept?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#policy VpcEndpoint#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#private_dns_enabled VpcEndpoint#private_dns_enabled}
  */
  readonly privateDnsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#route_table_ids VpcEndpoint#route_table_ids}
  */
  readonly routeTableIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#security_group_ids VpcEndpoint#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#service_name VpcEndpoint#service_name}
  */
  readonly serviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#subnet_ids VpcEndpoint#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#tags VpcEndpoint#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#tags_all VpcEndpoint#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#vpc_endpoint_type VpcEndpoint#vpc_endpoint_type}
  */
  readonly vpcEndpointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#vpc_id VpcEndpoint#vpc_id}
  */
  readonly vpcId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#timeouts VpcEndpoint#timeouts}
  */
  readonly timeouts?: VpcEndpointTimeouts;
}
export class VpcEndpointDnsEntry extends cdktf.ComplexComputedList {

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
}
export interface VpcEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#create VpcEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#delete VpcEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#update VpcEndpoint#update}
  */
  readonly update?: string;
}

function vpcEndpointTimeoutsToTerraform(struct?: VpcEndpointTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html aws_vpc_endpoint}
*/
export class VpcEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_vpc_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html aws_vpc_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: VpcEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoAccept = config.autoAccept;
    this._policy = config.policy;
    this._privateDnsEnabled = config.privateDnsEnabled;
    this._routeTableIds = config.routeTableIds;
    this._securityGroupIds = config.securityGroupIds;
    this._serviceName = config.serviceName;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._vpcEndpointType = config.vpcEndpointType;
    this._vpcId = config.vpcId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_accept - computed: false, optional: true, required: false
  private _autoAccept?: boolean | cdktf.IResolvable;
  public get autoAccept() {
    return this.getBooleanAttribute('auto_accept');
  }
  public set autoAccept(value: boolean | cdktf.IResolvable ) {
    this._autoAccept = value;
  }
  public resetAutoAccept() {
    this._autoAccept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAcceptInput() {
    return this._autoAccept
  }

  // cidr_blocks - computed: true, optional: false, required: false
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }

  // dns_entry - computed: true, optional: false, required: false
  public dnsEntry(index: string) {
    return new VpcEndpointDnsEntry(this, 'dns_entry', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_interface_ids - computed: true, optional: false, required: false
  public get networkInterfaceIds() {
    return this.getListAttribute('network_interface_ids');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string;
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy
  }

  // prefix_list_id - computed: true, optional: false, required: false
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }

  // private_dns_enabled - computed: false, optional: true, required: false
  private _privateDnsEnabled?: boolean | cdktf.IResolvable;
  public get privateDnsEnabled() {
    return this.getBooleanAttribute('private_dns_enabled');
  }
  public set privateDnsEnabled(value: boolean | cdktf.IResolvable ) {
    this._privateDnsEnabled = value;
  }
  public resetPrivateDnsEnabled() {
    this._privateDnsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsEnabledInput() {
    return this._privateDnsEnabled
  }

  // requester_managed - computed: true, optional: false, required: false
  public get requesterManaged() {
    return this.getBooleanAttribute('requester_managed');
  }

  // route_table_ids - computed: true, optional: true, required: false
  private _routeTableIds?: string[];
  public get routeTableIds() {
    return this.getListAttribute('route_table_ids');
  }
  public set routeTableIds(value: string[]) {
    this._routeTableIds = value;
  }
  public resetRouteTableIds() {
    this._routeTableIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdsInput() {
    return this._routeTableIds
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[];
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName: string;
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[];
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds
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

  // vpc_endpoint_type - computed: false, optional: true, required: false
  private _vpcEndpointType?: string;
  public get vpcEndpointType() {
    return this.getStringAttribute('vpc_endpoint_type');
  }
  public set vpcEndpointType(value: string ) {
    this._vpcEndpointType = value;
  }
  public resetVpcEndpointType() {
    this._vpcEndpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointTypeInput() {
    return this._vpcEndpointType
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpcEndpointTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VpcEndpointTimeouts ) {
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
      auto_accept: cdktf.booleanToTerraform(this._autoAccept),
      policy: cdktf.stringToTerraform(this._policy),
      private_dns_enabled: cdktf.booleanToTerraform(this._privateDnsEnabled),
      route_table_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._routeTableIds),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
      service_name: cdktf.stringToTerraform(this._serviceName),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      vpc_endpoint_type: cdktf.stringToTerraform(this._vpcEndpointType),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: vpcEndpointTimeoutsToTerraform(this._timeouts),
    };
  }
}
