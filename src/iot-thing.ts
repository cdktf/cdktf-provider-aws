// https://www.terraform.io/docs/providers/aws/r/iot_thing.html
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
      "attributes": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "default_client_id": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "thing_type_name": {
        "type": "string",
        "optional": true
      },
      "version": {
        "type": "number",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IotThingConfig extends TerraformMetaArguments {
  readonly attributes?: { [key: string]: string };
  readonly name: string;
  readonly thingTypeName?: string;
}

// Resource

export class IotThing extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IotThingConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_thing',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._attributes = config.attributes;
    this._name = config.name;
    this._thingTypeName = config.thingTypeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string };
  public get attributes() {
    return this._attributes;
  }
  public set attributes(value: { [key: string]: string } | undefined) {
    this._attributes = value;
  }

  // default_client_id - computed: true, optional: false, required: true
  public get defaultClientId() {
    return this.getStringAttribute('default_client_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // thing_type_name - computed: false, optional: true, required: false
  private _thingTypeName?: string;
  public get thingTypeName() {
    return this._thingTypeName;
  }
  public set thingTypeName(value: string | undefined) {
    this._thingTypeName = value;
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: this._attributes,
      name: this._name,
      thing_type_name: this._thingTypeName,
    };
  }
}
