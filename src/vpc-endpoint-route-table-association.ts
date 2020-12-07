// https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_route_table_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcEndpointRouteTableAssociationConfig extends cdktf.TerraformMetaArguments {
  readonly routeTableId: string;
  readonly vpcEndpointId: string;
}

// Resource

export class VpcEndpointRouteTableAssociation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpcEndpointRouteTableAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_endpoint_route_table_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._routeTableId = config.routeTableId;
    this._vpcEndpointId = config.vpcEndpointId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // route_table_id - computed: false, optional: false, required: true
  private _routeTableId: string;
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId
  }

  // vpc_endpoint_id - computed: false, optional: false, required: true
  private _vpcEndpointId: string;
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }
  public set vpcEndpointId(value: string) {
    this._vpcEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdInput() {
    return this._vpcEndpointId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      route_table_id: cdktf.stringToTerraform(this._routeTableId),
      vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
    };
  }
}
