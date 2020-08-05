// https://www.terraform.io/docs/providers/aws/r/datasync_agent.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "activation_key": {
        "type": "string",
        "optional": true,
        "computed": true
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
      "ip_address": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true
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

export interface DatasyncAgentConfig extends TerraformMetaArguments {
  readonly activationKey?: string;
  readonly ipAddress?: string;
  readonly name?: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: DatasyncAgentTimeouts;
}
export interface DatasyncAgentTimeouts {
  readonly create?: string;
}

// Resource

export class DatasyncAgent extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatasyncAgentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_agent',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._activationKey = config.activationKey;
    this._ipAddress = config.ipAddress;
    this._name = config.name;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_key - computed: true, optional: true, required: false
  private _activationKey?: string;
  public get activationKey() {
    return this._activationKey ?? this.getStringAttribute('activation_key');
  }
  public set activationKey(value: string | undefined) {
    this._activationKey = value;
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

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string;
  public get ipAddress() {
    return this._ipAddress ?? this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string | undefined) {
    this._ipAddress = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
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
  private _timeouts?: DatasyncAgentTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatasyncAgentTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      activation_key: this._activationKey,
      ip_address: this._ipAddress,
      name: this._name,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
