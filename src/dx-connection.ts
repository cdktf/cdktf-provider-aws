// https://www.terraform.io/docs/providers/aws/r/dx_connection.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "aws_device": {
        "type": "string",
        "computed": true
      },
      "bandwidth": {
        "type": "string",
        "required": true
      },
      "has_logical_redundancy": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "jumbo_frame_capable": {
        "type": "bool",
        "computed": true
      },
      "location": {
        "type": "string",
        "required": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
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

export interface DxConnectionConfig extends TerraformMetaArguments {
  readonly bandwidth: string;
  readonly location: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class DxConnection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DxConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_connection',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bandwidth = config.bandwidth;
    this._location = config.location;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_device - computed: true, optional: false, required: true
  public get awsDevice() {
    return this.getStringAttribute('aws_device');
  }

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth: string;
  public get bandwidth() {
    return this._bandwidth;
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }

  // has_logical_redundancy - computed: true, optional: false, required: true
  public get hasLogicalRedundancy() {
    return this.getStringAttribute('has_logical_redundancy');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // jumbo_frame_capable - computed: true, optional: false, required: true
  public get jumboFrameCapable() {
    return this.getBooleanAttribute('jumbo_frame_capable');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth: this._bandwidth,
      location: this._location,
      name: this._name,
      tags: this._tags,
    };
  }
}
