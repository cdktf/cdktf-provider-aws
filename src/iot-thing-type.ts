// https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html
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
      "deprecated": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "properties": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "description": {
              "type": "string",
              "optional": true
            },
            "searchable_attributes": {
              "type": [
                "set",
                "string"
              ],
              "optional": true,
              "computed": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IotThingTypeConfig extends TerraformMetaArguments {
  readonly deprecated?: boolean;
  readonly name: string;
  /** properties block */
  readonly properties?: IotThingTypeProperties[];
}
export interface IotThingTypeProperties {
  readonly description?: string;
  readonly searchableAttributes?: string[];
}

// Resource

export class IotThingType extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IotThingTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_thing_type',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deprecated = config.deprecated;
    this._name = config.name;
    this._properties = config.properties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // deprecated - computed: false, optional: true, required: false
  private _deprecated?: boolean;
  public get deprecated() {
    return this._deprecated;
  }
  public set deprecated(value: boolean | undefined) {
    this._deprecated = value;
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

  // properties - computed: false, optional: true, required: false
  private _properties?: IotThingTypeProperties[];
  public get properties() {
    return this._properties;
  }
  public set properties(value: IotThingTypeProperties[] | undefined) {
    this._properties = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      deprecated: this._deprecated,
      name: this._name,
      properties: this._properties,
    };
  }
}
