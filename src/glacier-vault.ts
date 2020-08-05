// https://www.terraform.io/docs/providers/aws/r/glacier_vault.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "access_policy": {
        "type": "string",
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
      "location": {
        "type": "string",
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
      "notification": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "events": {
              "type": [
                "set",
                "string"
              ],
              "required": true
            },
            "sns_topic": {
              "type": "string",
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
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GlacierVaultConfig extends TerraformMetaArguments {
  readonly accessPolicy?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** notification block */
  readonly notification?: GlacierVaultNotification[];
}
export interface GlacierVaultNotification {
  readonly events: string[];
  readonly snsTopic: string;
}

// Resource

export class GlacierVault extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GlacierVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glacier_vault',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessPolicy = config.accessPolicy;
    this._name = config.name;
    this._tags = config.tags;
    this._notification = config.notification;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy - computed: false, optional: true, required: false
  private _accessPolicy?: string;
  public get accessPolicy() {
    return this._accessPolicy;
  }
  public set accessPolicy(value: string | undefined) {
    this._accessPolicy = value;
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

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
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

  // notification - computed: false, optional: true, required: false
  private _notification?: GlacierVaultNotification[];
  public get notification() {
    return this._notification;
  }
  public set notification(value: GlacierVaultNotification[] | undefined) {
    this._notification = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policy: this._accessPolicy,
      name: this._name,
      tags: this._tags,
      notification: this._notification,
    };
  }
}
