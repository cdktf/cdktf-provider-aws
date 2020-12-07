// https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53ResolverEndpointConfig extends cdktf.TerraformMetaArguments {
  readonly direction: string;
  readonly name?: string;
  readonly securityGroupIds: string[];
  readonly tags?: { [key: string]: string };
  /** ip_address block */
  readonly ipAddress: Route53ResolverEndpointIpAddress[];
  /** timeouts block */
  readonly timeouts?: Route53ResolverEndpointTimeouts;
}
export interface Route53ResolverEndpointIpAddress {
  readonly ip?: string;
  readonly subnetId: string;
}

function route53ResolverEndpointIpAddressToTerraform(struct?: Route53ResolverEndpointIpAddress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface Route53ResolverEndpointTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function route53ResolverEndpointTimeoutsToTerraform(struct?: Route53ResolverEndpointTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Route53ResolverEndpoint extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Route53ResolverEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_resolver_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._direction = config.direction;
    this._name = config.name;
    this._securityGroupIds = config.securityGroupIds;
    this._tags = config.tags;
    this._ipAddress = config.ipAddress;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // direction - computed: false, optional: false, required: true
  private _direction: string;
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction
  }

  // host_vpc_id - computed: true, optional: false, required: false
  public get hostVpcId() {
    return this.getStringAttribute('host_vpc_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds: string[];
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress: Route53ResolverEndpointIpAddress[];
  public get ipAddress() {
    return this.interpolationForAttribute('ip_address') as any;
  }
  public set ipAddress(value: Route53ResolverEndpointIpAddress[]) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: Route53ResolverEndpointTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: Route53ResolverEndpointTimeouts ) {
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
      direction: cdktf.stringToTerraform(this._direction),
      name: cdktf.stringToTerraform(this._name),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      ip_address: cdktf.listMapper(route53ResolverEndpointIpAddressToTerraform)(this._ipAddress),
      timeouts: route53ResolverEndpointTimeoutsToTerraform(this._timeouts),
    };
  }
}
