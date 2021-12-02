// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Route 53
*/
export interface Route53VpcAssociationAuthorizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization.html#vpc_id Route53VpcAssociationAuthorization#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization.html#vpc_region Route53VpcAssociationAuthorization#vpc_region}
  */
  readonly vpcRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization.html#zone_id Route53VpcAssociationAuthorization#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization.html aws_route53_vpc_association_authorization}
*/
export class Route53VpcAssociationAuthorization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_route53_vpc_association_authorization";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization.html aws_route53_vpc_association_authorization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53VpcAssociationAuthorizationConfig
  */
  public constructor(scope: Construct, id: string, config: Route53VpcAssociationAuthorizationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_vpc_association_authorization',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._vpcId = config.vpcId;
    this._vpcRegion = config.vpcRegion;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpc_region - computed: true, optional: true, required: false
  private _vpcRegion?: string; 
  public get vpcRegion() {
    return this.getStringAttribute('vpc_region');
  }
  public set vpcRegion(value: string) {
    this._vpcRegion = value;
  }
  public resetVpcRegion() {
    this._vpcRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcRegionInput() {
    return this._vpcRegion;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vpc_region: cdktf.stringToTerraform(this._vpcRegion),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
