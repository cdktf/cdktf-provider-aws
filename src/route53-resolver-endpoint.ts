// https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Route53ResolverEndpointConfig extends TerraformMetaArguments {
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
export interface Route53ResolverEndpointTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class Route53ResolverEndpoint extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // direction - computed: false, optional: false, required: true
  private _direction: string;
  public get direction() {
    return this._direction;
  }
  public set direction(value: string) {
    this._direction = value;
  }

  // host_vpc_id - computed: true, optional: false, required: true
  public get hostVpcId() {
    return this.getStringAttribute('host_vpc_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds: string[];
  public get securityGroupIds() {
    return this._securityGroupIds;
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress: Route53ResolverEndpointIpAddress[];
  public get ipAddress() {
    return this._ipAddress;
  }
  public set ipAddress(value: Route53ResolverEndpointIpAddress[]) {
    this._ipAddress = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: Route53ResolverEndpointTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: Route53ResolverEndpointTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      direction: this._direction,
      name: this._name,
      security_group_ids: this._securityGroupIds,
      tags: this._tags,
      ip_address: this._ipAddress,
      timeouts: this._timeouts,
    };
  }
}
