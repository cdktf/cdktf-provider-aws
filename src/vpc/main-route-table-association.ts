// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface MainRouteTableAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/main_route_table_association.html#route_table_id MainRouteTableAssociation#route_table_id}
  */
  readonly routeTableId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/main_route_table_association.html#vpc_id MainRouteTableAssociation#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/main_route_table_association.html aws_main_route_table_association}
*/
export class MainRouteTableAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_main_route_table_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/main_route_table_association.html aws_main_route_table_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MainRouteTableAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: MainRouteTableAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_main_route_table_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._routeTableId = config.routeTableId;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // original_route_table_id - computed: true, optional: false, required: false
  public get originalRouteTableId() {
    return this.getStringAttribute('original_route_table_id');
  }

  // route_table_id - computed: false, optional: false, required: true
  private _routeTableId?: string; 
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      route_table_id: cdktf.stringToTerraform(this._routeTableId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }
}
