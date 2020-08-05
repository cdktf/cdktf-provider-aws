// https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "server_hostname": {
        "type": "string",
        "required": true
      },
      "subdirectory": {
        "type": "string",
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "uri": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "on_prem_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "agent_arns": {
              "type": [
                "set",
                "string"
              ],
              "required": true
            }
          }
        },
        "min_items": 1,
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

export interface DatasyncLocationNfsConfig extends TerraformMetaArguments {
  readonly serverHostname: string;
  readonly subdirectory: string;
  readonly tags?: { [key: string]: string };
  /** on_prem_config block */
  readonly onPremConfig: DatasyncLocationNfsOnPremConfig[];
}
export interface DatasyncLocationNfsOnPremConfig {
  readonly agentArns: string[];
}

// Resource

export class DatasyncLocationNfs extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatasyncLocationNfsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_location_nfs',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._serverHostname = config.serverHostname;
    this._subdirectory = config.subdirectory;
    this._tags = config.tags;
    this._onPremConfig = config.onPremConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // server_hostname - computed: false, optional: false, required: true
  private _serverHostname: string;
  public get serverHostname() {
    return this._serverHostname;
  }
  public set serverHostname(value: string) {
    this._serverHostname = value;
  }

  // subdirectory - computed: false, optional: false, required: true
  private _subdirectory: string;
  public get subdirectory() {
    return this._subdirectory;
  }
  public set subdirectory(value: string) {
    this._subdirectory = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // uri - computed: true, optional: false, required: true
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // on_prem_config - computed: false, optional: false, required: true
  private _onPremConfig: DatasyncLocationNfsOnPremConfig[];
  public get onPremConfig() {
    return this._onPremConfig;
  }
  public set onPremConfig(value: DatasyncLocationNfsOnPremConfig[]) {
    this._onPremConfig = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      server_hostname: this._serverHostname,
      subdirectory: this._subdirectory,
      tags: this._tags,
      on_prem_config: this._onPremConfig,
    };
  }
}
