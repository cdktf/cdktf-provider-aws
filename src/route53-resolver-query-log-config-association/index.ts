// https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/route53_resolver_query_log_config_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53ResolverQueryLogConfigAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/route53_resolver_query_log_config_association#id Route53ResolverQueryLogConfigAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/route53_resolver_query_log_config_association#resolver_query_log_config_id Route53ResolverQueryLogConfigAssociation#resolver_query_log_config_id}
  */
  readonly resolverQueryLogConfigId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/route53_resolver_query_log_config_association#resource_id Route53ResolverQueryLogConfigAssociation#resource_id}
  */
  readonly resourceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/route53_resolver_query_log_config_association aws_route53_resolver_query_log_config_association}
*/
export class Route53ResolverQueryLogConfigAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53_resolver_query_log_config_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Route53ResolverQueryLogConfigAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Route53ResolverQueryLogConfigAssociation to import
  * @param importFromId The id of the existing Route53ResolverQueryLogConfigAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/route53_resolver_query_log_config_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Route53ResolverQueryLogConfigAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_route53_resolver_query_log_config_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/route53_resolver_query_log_config_association aws_route53_resolver_query_log_config_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53ResolverQueryLogConfigAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: Route53ResolverQueryLogConfigAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_resolver_query_log_config_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.50.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._resolverQueryLogConfigId = config.resolverQueryLogConfigId;
    this._resourceId = config.resourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
      id: cdktf.stringToTerraform(this._id),
      resolver_query_log_config_id: cdktf.stringToTerraform(this._resolverQueryLogConfigId),
      resource_id: cdktf.stringToTerraform(this._resourceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolver_query_log_config_id: {
        value: cdktf.stringToHclTerraform(this._resolverQueryLogConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
