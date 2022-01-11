// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Route 53
*/
export interface Route53ResolverQueryLogConfigAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config_association#resolver_query_log_config_id Route53ResolverQueryLogConfigAssociation#resolver_query_log_config_id}
  */
  readonly resolverQueryLogConfigId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config_association#resource_id Route53ResolverQueryLogConfigAssociation#resource_id}
  */
  readonly resourceId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config_association aws_route53_resolver_query_log_config_association}
*/
export class Route53ResolverQueryLogConfigAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_route53_resolver_query_log_config_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config_association aws_route53_resolver_query_log_config_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53ResolverQueryLogConfigAssociationConfig
  */
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
  private _resolverQueryLogConfigId?: string; 
  public get resolverQueryLogConfigId() {
    return this.getStringAttribute('resolver_query_log_config_id');
  }
  public set resolverQueryLogConfigId(value: string) {
    this._resolverQueryLogConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverQueryLogConfigIdInput() {
    return this._resolverQueryLogConfigId;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
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
