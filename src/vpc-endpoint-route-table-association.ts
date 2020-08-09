// https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_route_table_association.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "route_table_id": {
        "type": "string",
        "required": true
      },
      "vpc_endpoint_id": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VpcEndpointRouteTableAssociationConfig extends TerraformMetaArguments {
  readonly routeTableId: string;
  readonly vpcEndpointId: string;
}

// Resource

export class VpcEndpointRouteTableAssociation extends TerraformResource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // route_table_id - computed: false, optional: false, required: true
  private _routeTableId: string;
  public get routeTableId() {
    return this._routeTableId;
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }

  // vpc_endpoint_id - computed: false, optional: false, required: true
  private _vpcEndpointId: string;
  public get vpcEndpointId() {
    return this._vpcEndpointId;
  }
  public set vpcEndpointId(value: string) {
    this._vpcEndpointId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      route_table_id: this._routeTableId,
      vpc_endpoint_id: this._vpcEndpointId,
    };
  }
}
