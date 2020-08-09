// https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html
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
      "subnet_id": {
        "type": "string",
        "required": true
      },
      "vpc_endpoint_id": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VpcEndpointSubnetAssociationConfig extends TerraformMetaArguments {
  readonly subnetId: string;
  readonly vpcEndpointId: string;
  /** timeouts block */
  readonly timeouts?: VpcEndpointSubnetAssociationTimeouts;
}
export interface VpcEndpointSubnetAssociationTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class VpcEndpointSubnetAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpcEndpointSubnetAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_endpoint_subnet_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._subnetId = config.subnetId;
    this._vpcEndpointId = config.vpcEndpointId;
    this._timeouts = config.timeouts;
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

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this._subnetId;
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }

  // vpc_endpoint_id - computed: false, optional: false, required: true
  private _vpcEndpointId: string;
  public get vpcEndpointId() {
    return this._vpcEndpointId;
  }
  public set vpcEndpointId(value: string) {
    this._vpcEndpointId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpcEndpointSubnetAssociationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: VpcEndpointSubnetAssociationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      subnet_id: this._subnetId,
      vpc_endpoint_id: this._vpcEndpointId,
      timeouts: this._timeouts,
    };
  }
}
