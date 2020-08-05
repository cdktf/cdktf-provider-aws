// https://www.terraform.io/docs/providers/aws/r/guardduty_ipset.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "activate": {
        "type": "bool",
        "required": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "detector_id": {
        "type": "string",
        "required": true
      },
      "format": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
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

export interface GuarddutyIpsetConfig extends TerraformMetaArguments {
  readonly activate: boolean;
  readonly detectorId: string;
  readonly format: string;
  readonly location: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class GuarddutyIpset extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GuarddutyIpsetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_guardduty_ipset',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._activate = config.activate;
    this._detectorId = config.detectorId;
    this._format = config.format;
    this._location = config.location;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activate - computed: false, optional: false, required: true
  private _activate: boolean;
  public get activate() {
    return this._activate;
  }
  public set activate(value: boolean) {
    this._activate = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // detector_id - computed: false, optional: false, required: true
  private _detectorId: string;
  public get detectorId() {
    return this._detectorId;
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }

  // format - computed: false, optional: false, required: true
  private _format: string;
  public get format() {
    return this._format;
  }
  public set format(value: string) {
    this._format = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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
      activate: this._activate,
      detector_id: this._detectorId,
      format: this._format,
      location: this._location,
      name: this._name,
      tags: this._tags,
    };
  }
}
