// https://www.terraform.io/docs/providers/aws/r/route_table_association.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "gateway_id": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "route_table_id": {
        "type": "string",
        "required": true
      },
      "subnet_id": {
        "type": "string",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RouteTableAssociationConfig extends TerraformMetaArguments {
  readonly gatewayId?: string;
  readonly routeTableId: string;
  readonly subnetId?: string;
}

// Resource

export class RouteTableAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RouteTableAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route_table_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._gatewayId = config.gatewayId;
    this._routeTableId = config.routeTableId;
    this._subnetId = config.subnetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gateway_id - computed: false, optional: true, required: false
  private _gatewayId?: string;
  public get gatewayId() {
    return this._gatewayId;
  }
  public set gatewayId(value: string | undefined) {
    this._gatewayId = value;
  }

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

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this._subnetId;
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      gateway_id: this._gatewayId,
      route_table_id: this._routeTableId,
      subnet_id: this._subnetId,
    };
  }
}
