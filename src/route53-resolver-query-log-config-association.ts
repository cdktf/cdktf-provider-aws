// https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Route53ResolverQueryLogConfigAssociationConfig extends TerraformMetaArguments {
  readonly resolverQueryLogConfigId: string;
  readonly resourceId: string;
}

// Resource

export class Route53ResolverQueryLogConfigAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Route53ResolverQueryLogConfigAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_resolver_query_log_config_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._resolverQueryLogConfigId = config.resolverQueryLogConfigId;
    this._resourceId = config.resourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // resolver_query_log_config_id - computed: false, optional: false, required: true
  private _resolverQueryLogConfigId: string;
  public get resolverQueryLogConfigId() {
    return this._resolverQueryLogConfigId;
  }
  public set resolverQueryLogConfigId(value: string) {
    this._resolverQueryLogConfigId = value;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId: string;
  public get resourceId() {
    return this._resourceId;
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      resolver_query_log_config_id: this._resolverQueryLogConfigId,
      resource_id: this._resourceId,
    };
  }
}
