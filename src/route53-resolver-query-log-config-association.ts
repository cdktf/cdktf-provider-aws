// https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53ResolverQueryLogConfigAssociationConfig extends cdktf.TerraformMetaArguments {
  readonly resolverQueryLogConfigId: string;
  readonly resourceId: string;
}

// Resource

export class Route53ResolverQueryLogConfigAssociation extends cdktf.TerraformResource {

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
  public get id() {
    return this.getStringAttribute('id');
  }

  // resolver_query_log_config_id - computed: false, optional: false, required: true
  private _resolverQueryLogConfigId: string;
  public get resolverQueryLogConfigId() {
    return this.getStringAttribute('resolver_query_log_config_id');
  }
  public set resolverQueryLogConfigId(value: string) {
    this._resolverQueryLogConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverQueryLogConfigIdInput() {
    return this._resolverQueryLogConfigId
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId: string;
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      resolver_query_log_config_id: cdktf.stringToTerraform(this._resolverQueryLogConfigId),
      resource_id: cdktf.stringToTerraform(this._resourceId),
    };
  }
}
