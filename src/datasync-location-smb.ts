// https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "agent_arns": {
        "type": [
          "set",
          "string"
        ],
        "required": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "domain": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "password": {
        "type": "string",
        "required": true,
        "sensitive": true
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
      },
      "user": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "mount_options": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "version": {
              "type": "string",
              "optional": true
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

export interface DatasyncLocationSmbConfig extends TerraformMetaArguments {
  readonly agentArns: string[];
  readonly domain?: string;
  readonly password: string;
  readonly serverHostname: string;
  readonly subdirectory: string;
  readonly tags?: { [key: string]: string };
  readonly user: string;
  /** mount_options block */
  readonly mountOptions?: DatasyncLocationSmbMountOptions[];
}
export interface DatasyncLocationSmbMountOptions {
  readonly version?: string;
}

// Resource

export class DatasyncLocationSmb extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatasyncLocationSmbConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_location_smb',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._agentArns = config.agentArns;
    this._domain = config.domain;
    this._password = config.password;
    this._serverHostname = config.serverHostname;
    this._subdirectory = config.subdirectory;
    this._tags = config.tags;
    this._user = config.user;
    this._mountOptions = config.mountOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_arns - computed: false, optional: false, required: true
  private _agentArns: string[];
  public get agentArns() {
    return this._agentArns;
  }
  public set agentArns(value: string[]) {
    this._agentArns = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string;
  public get domain() {
    return this._domain ?? this.getStringAttribute('domain');
  }
  public set domain(value: string | undefined) {
    this._domain = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // password - computed: false, optional: false, required: true
  private _password: string;
  public get password() {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
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

  // user - computed: false, optional: false, required: true
  private _user: string;
  public get user() {
    return this._user;
  }
  public set user(value: string) {
    this._user = value;
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: DatasyncLocationSmbMountOptions[];
  public get mountOptions() {
    return this._mountOptions;
  }
  public set mountOptions(value: DatasyncLocationSmbMountOptions[] | undefined) {
    this._mountOptions = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_arns: this._agentArns,
      domain: this._domain,
      password: this._password,
      server_hostname: this._serverHostname,
      subdirectory: this._subdirectory,
      tags: this._tags,
      user: this._user,
      mount_options: this._mountOptions,
    };
  }
}
