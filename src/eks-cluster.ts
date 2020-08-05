// https://www.terraform.io/docs/providers/aws/r/eks_cluster.html
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
      "certificate_authority": {
        "type": [
          "list",
          [
            "object",
            {
              "data": "string"
            }
          ]
        ],
        "computed": true
      },
      "created_at": {
        "type": "string",
        "computed": true
      },
      "enabled_cluster_log_types": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "endpoint": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "identity": {
        "type": [
          "list",
          [
            "object",
            {
              "oidc": [
                "list",
                [
                  "object",
                  {
                    "issuer": "string"
                  }
                ]
              ]
            }
          ]
        ],
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "platform_version": {
        "type": "string",
        "computed": true
      },
      "role_arn": {
        "type": "string",
        "required": true
      },
      "status": {
        "type": "string",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "version": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "encryption_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "resources": {
              "type": [
                "set",
                "string"
              ],
              "required": true
            }
          },
          "block_types": {
            "provider": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "key_arn": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "min_items": 1,
              "max_items": 1
            }
          }
        },
        "max_items": 1
      },
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
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      },
      "vpc_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "cluster_security_group_id": {
              "type": "string",
              "computed": true
            },
            "endpoint_private_access": {
              "type": "bool",
              "optional": true
            },
            "endpoint_public_access": {
              "type": "bool",
              "optional": true
            },
            "public_access_cidrs": {
              "type": [
                "set",
                "string"
              ],
              "optional": true,
              "computed": true
            },
            "security_group_ids": {
              "type": [
                "set",
                "string"
              ],
              "optional": true
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
              "computed": true
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface EksClusterConfig extends TerraformMetaArguments {
  readonly enabledClusterLogTypes?: string[];
  readonly name: string;
  readonly roleArn: string;
  readonly tags?: { [key: string]: string };
  readonly version?: string;
  /** encryption_config block */
  readonly encryptionConfig?: EksClusterEncryptionConfig[];
  /** timeouts block */
  readonly timeouts?: EksClusterTimeouts;
  /** vpc_config block */
  readonly vpcConfig: EksClusterVpcConfig[];
}
export class EksClusterCertificateAuthority extends ComplexComputedList {

  // data - computed: true, optional: false, required: true
  public get data() {
    return this.getStringAttribute('data');
  }
}
export class EksClusterIdentityOidc extends ComplexComputedList {

  // issuer - computed: true, optional: false, required: true
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
}
export class EksClusterIdentity extends ComplexComputedList {

  // oidc - computed: true, optional: false, required: true
  public get oidc() {
    return 'not implemented' as any;
  }
}
export interface EksClusterEncryptionConfigProvider {
  readonly keyArn: string;
}
export interface EksClusterEncryptionConfig {
  readonly resources: string[];
  /** provider block */
  readonly provider: EksClusterEncryptionConfigProvider[];
}
export interface EksClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}
export interface EksClusterVpcConfig {
  readonly endpointPrivateAccess?: boolean;
  readonly endpointPublicAccess?: boolean;
  readonly publicAccessCidrs?: string[];
  readonly securityGroupIds?: string[];
  readonly subnetIds: string[];
}

// Resource

export class EksCluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EksClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_eks_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabledClusterLogTypes = config.enabledClusterLogTypes;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._version = config.version;
    this._encryptionConfig = config.encryptionConfig;
    this._timeouts = config.timeouts;
    this._vpcConfig = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_authority - computed: true, optional: false, required: true
  public certificateAuthority(index: string) {
    return new EksClusterCertificateAuthority(this, 'certificate_authority', index);
  }

  // created_at - computed: true, optional: false, required: true
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled_cluster_log_types - computed: false, optional: true, required: false
  private _enabledClusterLogTypes?: string[];
  public get enabledClusterLogTypes() {
    return this._enabledClusterLogTypes;
  }
  public set enabledClusterLogTypes(value: string[] | undefined) {
    this._enabledClusterLogTypes = value;
  }

  // endpoint - computed: true, optional: false, required: true
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // identity - computed: true, optional: false, required: true
  public identity(index: string) {
    return new EksClusterIdentity(this, 'identity', index);
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // platform_version - computed: true, optional: false, required: true
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string;
  public get version() {
    return this._version ?? this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
    this._version = value;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig?: EksClusterEncryptionConfig[];
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public set encryptionConfig(value: EksClusterEncryptionConfig[] | undefined) {
    this._encryptionConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EksClusterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: EksClusterTimeouts | undefined) {
    this._timeouts = value;
  }

  // vpc_config - computed: false, optional: false, required: true
  private _vpcConfig: EksClusterVpcConfig[];
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public set vpcConfig(value: EksClusterVpcConfig[]) {
    this._vpcConfig = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled_cluster_log_types: this._enabledClusterLogTypes,
      name: this._name,
      role_arn: this._roleArn,
      tags: this._tags,
      version: this._version,
      encryption_config: this._encryptionConfig,
      timeouts: this._timeouts,
      vpc_config: this._vpcConfig,
    };
  }
}
