// https://www.terraform.io/docs/providers/aws/r/data_aws_route53_resolver_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsRoute53ResolverEndpointConfig extends TerraformMetaArguments {
  readonly resolverEndpointId?: string;
  /** filter block */
  readonly filter?: DataAwsRoute53ResolverEndpointFilter[];
}
export interface DataAwsRoute53ResolverEndpointFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsRoute53ResolverEndpoint extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsRoute53ResolverEndpointConfig = {}) {
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
    this._resolverEndpointId = config.resolverEndpointId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // direction - computed: true, optional: false, required: true
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_addresses - computed: true, optional: false, required: true
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // resolver_endpoint_id - computed: false, optional: true, required: false
  private _resolverEndpointId?: string;
  public get resolverEndpointId() {
    return this._resolverEndpointId;
  }
  public set resolverEndpointId(value: string | undefined) {
    this._resolverEndpointId = value;
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsRoute53ResolverEndpointFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsRoute53ResolverEndpointFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      resolver_endpoint_id: this._resolverEndpointId,
      filter: this._filter,
    };
  }
}
