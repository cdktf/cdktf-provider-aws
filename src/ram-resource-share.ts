// https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "allow_external_principals": {
        "type": "bool",
        "optional": true
      },
      "arn": {
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
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
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

export interface RamResourceShareConfig extends TerraformMetaArguments {
  readonly allowExternalPrincipals?: boolean;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: RamResourceShareTimeouts;
}
export interface RamResourceShareTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class RamResourceShare extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RamResourceShareConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ram_resource_share',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowExternalPrincipals = config.allowExternalPrincipals;
    this._name = config.name;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_external_principals - computed: false, optional: true, required: false
  private _allowExternalPrincipals?: boolean;
  public get allowExternalPrincipals() {
    return this._allowExternalPrincipals;
  }
  public set allowExternalPrincipals(value: boolean | undefined) {
    this._allowExternalPrincipals = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RamResourceShareTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: RamResourceShareTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_external_principals: this._allowExternalPrincipals,
      name: this._name,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
