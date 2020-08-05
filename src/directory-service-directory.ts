// https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "access_url": {
        "type": "string",
        "computed": true
      },
      "alias": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "dns_ip_addresses": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "edition": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "enable_sso": {
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
      },
      "password": {
        "type": "string",
        "required": true,
        "sensitive": true
      },
      "security_group_id": {
        "type": "string",
        "computed": true
      },
      "short_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "size": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "type": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "connect_settings": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "availability_zones": {
              "type": [
                "set",
                "string"
              ],
              "computed": true
            },
            "connect_ips": {
              "type": [
                "set",
                "string"
              ],
              "computed": true
            },
            "customer_dns_ips": {
              "type": [
                "set",
                "string"
              ],
              "required": true
            },
            "customer_username": {
              "type": "string",
              "required": true
            },
            "subnet_ids": {
              "type": [
                "set",
                "string"
              ],
              "required": true
            },
            "vpc_id": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "vpc_settings": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "availability_zones": {
              "type": [
                "set",
                "string"
              ],
              "computed": true
            },
            "subnet_ids": {
              "type": [
                "set",
                "string"
              ],
              "required": true
            },
            "vpc_id": {
              "type": "string",
              "required": true
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

export interface DirectoryServiceDirectoryConfig extends TerraformMetaArguments {
  readonly alias?: string;
  readonly description?: string;
  readonly edition?: string;
  readonly enableSso?: boolean;
  readonly name: string;
  readonly password: string;
  readonly shortName?: string;
  readonly size?: string;
  readonly tags?: { [key: string]: string };
  readonly type?: string;
  /** connect_settings block */
  readonly connectSettings?: DirectoryServiceDirectoryConnectSettings[];
  /** vpc_settings block */
  readonly vpcSettings?: DirectoryServiceDirectoryVpcSettings[];
}
export interface DirectoryServiceDirectoryConnectSettings {
  readonly customerDnsIps: string[];
  readonly customerUsername: string;
  readonly subnetIds: string[];
  readonly vpcId: string;
}
export interface DirectoryServiceDirectoryVpcSettings {
  readonly subnetIds: string[];
  readonly vpcId: string;
}

// Resource

export class DirectoryServiceDirectory extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DirectoryServiceDirectoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_directory_service_directory',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alias = config.alias;
    this._description = config.description;
    this._edition = config.edition;
    this._enableSso = config.enableSso;
    this._name = config.name;
    this._password = config.password;
    this._shortName = config.shortName;
    this._size = config.size;
    this._tags = config.tags;
    this._type = config.type;
    this._connectSettings = config.connectSettings;
    this._vpcSettings = config.vpcSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_url - computed: true, optional: false, required: true
  public get accessUrl() {
    return this.getStringAttribute('access_url');
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string;
  public get alias() {
    return this._alias ?? this.getStringAttribute('alias');
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // dns_ip_addresses - computed: true, optional: false, required: true
  public get dnsIpAddresses() {
    return this.getListAttribute('dns_ip_addresses');
  }

  // edition - computed: true, optional: true, required: false
  private _edition?: string;
  public get edition() {
    return this._edition ?? this.getStringAttribute('edition');
  }
  public set edition(value: string | undefined) {
    this._edition = value;
  }

  // enable_sso - computed: false, optional: true, required: false
  private _enableSso?: boolean;
  public get enableSso() {
    return this._enableSso;
  }
  public set enableSso(value: boolean | undefined) {
    this._enableSso = value;
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

  // password - computed: false, optional: false, required: true
  private _password: string;
  public get password() {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }

  // security_group_id - computed: true, optional: false, required: true
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // short_name - computed: true, optional: true, required: false
  private _shortName?: string;
  public get shortName() {
    return this._shortName ?? this.getStringAttribute('short_name');
  }
  public set shortName(value: string | undefined) {
    this._shortName = value;
  }

  // size - computed: true, optional: true, required: false
  private _size?: string;
  public get size() {
    return this._size ?? this.getStringAttribute('size');
  }
  public set size(value: string | undefined) {
    this._size = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this._type;
  }
  public set type(value: string | undefined) {
    this._type = value;
  }

  // connect_settings - computed: false, optional: true, required: false
  private _connectSettings?: DirectoryServiceDirectoryConnectSettings[];
  public get connectSettings() {
    return this._connectSettings;
  }
  public set connectSettings(value: DirectoryServiceDirectoryConnectSettings[] | undefined) {
    this._connectSettings = value;
  }

  // vpc_settings - computed: false, optional: true, required: false
  private _vpcSettings?: DirectoryServiceDirectoryVpcSettings[];
  public get vpcSettings() {
    return this._vpcSettings;
  }
  public set vpcSettings(value: DirectoryServiceDirectoryVpcSettings[] | undefined) {
    this._vpcSettings = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: this._alias,
      description: this._description,
      edition: this._edition,
      enable_sso: this._enableSso,
      name: this._name,
      password: this._password,
      short_name: this._shortName,
      size: this._size,
      tags: this._tags,
      type: this._type,
      connect_settings: this._connectSettings,
      vpc_settings: this._vpcSettings,
    };
  }
}
