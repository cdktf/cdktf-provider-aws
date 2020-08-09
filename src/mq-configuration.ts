// https://www.terraform.io/docs/providers/aws/r/mq_configuration.html
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
      "data": {
        "type": "string",
        "required": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "engine_type": {
        "type": "string",
        "required": true
      },
      "engine_version": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "latest_revision": {
        "type": "number",
        "computed": true
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

export interface MqConfigurationConfig extends TerraformMetaArguments {
  readonly data: string;
  readonly description?: string;
  readonly engineType: string;
  readonly engineVersion: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class MqConfiguration extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MqConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_mq_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._data = config.data;
    this._description = config.description;
    this._engineType = config.engineType;
    this._engineVersion = config.engineVersion;
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

  // data - computed: false, optional: false, required: true
  private _data: string;
  public get data() {
    return this._data;
  }
  public set data(value: string) {
    this._data = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // engine_type - computed: false, optional: false, required: true
  private _engineType: string;
  public get engineType() {
    return this._engineType;
  }
  public set engineType(value: string) {
    this._engineType = value;
  }

  // engine_version - computed: false, optional: false, required: true
  private _engineVersion: string;
  public get engineVersion() {
    return this._engineVersion;
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // latest_revision - computed: true, optional: false, required: true
  public get latestRevision() {
    return this.getNumberAttribute('latest_revision');
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
      data: this._data,
      description: this._description,
      engine_type: this._engineType,
      engine_version: this._engineVersion,
      name: this._name,
      tags: this._tags,
    };
  }
}
