// https://www.terraform.io/docs/providers/aws/r/data_aws_ec2_transit_gateway_dx_gateway_attachment.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "dx_gateway_id": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "transit_gateway_id": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsEc2TransitGatewayDxGatewayAttachmentConfig extends TerraformMetaArguments {
  readonly dxGatewayId?: string;
  readonly tags?: { [key: string]: string };
  readonly transitGatewayId?: string;
  /** filter block */
  readonly filter?: DataAwsEc2TransitGatewayDxGatewayAttachmentFilter[];
}
export interface DataAwsEc2TransitGatewayDxGatewayAttachmentFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsEc2TransitGatewayDxGatewayAttachment extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEc2TransitGatewayDxGatewayAttachmentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_dx_gateway_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dxGatewayId = config.dxGatewayId;
    this._tags = config.tags;
    this._transitGatewayId = config.transitGatewayId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dx_gateway_id - computed: false, optional: true, required: false
  private _dxGatewayId?: string;
  public get dxGatewayId() {
    return this._dxGatewayId;
  }
  public set dxGatewayId(value: string | undefined) {
    this._dxGatewayId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // transit_gateway_id - computed: false, optional: true, required: false
  private _transitGatewayId?: string;
  public get transitGatewayId() {
    return this._transitGatewayId;
  }
  public set transitGatewayId(value: string | undefined) {
    this._transitGatewayId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2TransitGatewayDxGatewayAttachmentFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsEc2TransitGatewayDxGatewayAttachmentFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      dx_gateway_id: this._dxGatewayId,
      tags: this._tags,
      transit_gateway_id: this._transitGatewayId,
      filter: this._filter,
    };
  }
}
