// https://www.terraform.io/docs/providers/aws/r/data_aws_iot_endpoint.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "endpoint_address": {
        "type": "string",
        "computed": true
      },
      "endpoint_type": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsIotEndpointConfig extends TerraformMetaArguments {
  readonly endpointType?: string;
}

// Resource

export class DataAwsIotEndpoint extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsIotEndpointConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._endpointType = config.endpointType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint_address - computed: true, optional: false, required: true
  public get endpointAddress() {
    return this.getStringAttribute('endpoint_address');
  }

  // endpoint_type - computed: false, optional: true, required: false
  private _endpointType?: string;
  public get endpointType() {
    return this._endpointType;
  }
  public set endpointType(value: string | undefined) {
    this._endpointType = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_type: this._endpointType,
    };
  }
}
