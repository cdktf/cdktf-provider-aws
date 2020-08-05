// https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "access_policies": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "advanced_options": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "domain_id": {
        "type": "string",
        "computed": true
      },
      "domain_name": {
        "type": "string",
        "required": true
      },
      "elasticsearch_version": {
        "type": "string",
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
      "kibana_endpoint": {
        "type": "string",
        "computed": true
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
      "advanced_security_options": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "enabled": {
              "type": "bool",
              "required": true
            },
            "internal_user_database_enabled": {
              "type": "bool",
              "optional": true
            }
          },
          "block_types": {
            "master_user_options": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "master_user_arn": {
                    "type": "string",
                    "optional": true
                  },
                  "master_user_name": {
                    "type": "string",
                    "optional": true
                  },
                  "master_user_password": {
                    "type": "string",
                    "optional": true,
                    "sensitive": true
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "max_items": 1
      },
      "cluster_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "dedicated_master_count": {
              "type": "number",
              "optional": true
            },
            "dedicated_master_enabled": {
              "type": "bool",
              "optional": true
            },
            "dedicated_master_type": {
              "type": "string",
              "optional": true
            },
            "instance_count": {
              "type": "number",
              "optional": true
            },
            "instance_type": {
              "type": "string",
              "optional": true
            },
            "warm_count": {
              "type": "number",
              "optional": true
            },
            "warm_enabled": {
              "type": "bool",
              "optional": true
            },
            "warm_type": {
              "type": "string",
              "optional": true
            },
            "zone_awareness_enabled": {
              "type": "bool",
              "optional": true
            }
          },
          "block_types": {
            "zone_awareness_config": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "availability_zone_count": {
                    "type": "number",
                    "optional": true
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "max_items": 1
      },
      "cognito_options": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "enabled": {
              "type": "bool",
              "optional": true
            },
            "identity_pool_id": {
              "type": "string",
              "required": true
            },
            "role_arn": {
              "type": "string",
              "required": true
            },
            "user_pool_id": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "domain_endpoint_options": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "enforce_https": {
              "type": "bool",
              "required": true
            },
            "tls_security_policy": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        },
        "max_items": 1
      },
      "ebs_options": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "ebs_enabled": {
              "type": "bool",
              "required": true
            },
            "iops": {
              "type": "number",
              "optional": true
            },
            "volume_size": {
              "type": "number",
              "optional": true
            },
            "volume_type": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        },
        "max_items": 1
      },
      "encrypt_at_rest": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "enabled": {
              "type": "bool",
              "required": true
            },
            "kms_key_id": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        },
        "max_items": 1
      },
      "log_publishing_options": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "cloudwatch_log_group_arn": {
              "type": "string",
              "required": true
            },
            "enabled": {
              "type": "bool",
              "optional": true
            },
            "log_type": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "node_to_node_encryption": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "enabled": {
              "type": "bool",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "snapshot_options": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "automated_snapshot_start_hour": {
              "type": "number",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      },
      "vpc_options": {
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
              "optional": true
            },
            "vpc_id": {
              "type": "string",
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

export interface ElasticsearchDomainConfig extends TerraformMetaArguments {
  readonly accessPolicies?: string;
  readonly advancedOptions?: { [key: string]: string };
  readonly domainName: string;
  readonly elasticsearchVersion?: string;
  readonly tags?: { [key: string]: string };
  /** advanced_security_options block */
  readonly advancedSecurityOptions?: ElasticsearchDomainAdvancedSecurityOptions[];
  /** cluster_config block */
  readonly clusterConfig?: ElasticsearchDomainClusterConfig[];
  /** cognito_options block */
  readonly cognitoOptions?: ElasticsearchDomainCognitoOptions[];
  /** domain_endpoint_options block */
  readonly domainEndpointOptions?: ElasticsearchDomainDomainEndpointOptions[];
  /** ebs_options block */
  readonly ebsOptions?: ElasticsearchDomainEbsOptions[];
  /** encrypt_at_rest block */
  readonly encryptAtRest?: ElasticsearchDomainEncryptAtRest[];
  /** log_publishing_options block */
  readonly logPublishingOptions?: ElasticsearchDomainLogPublishingOptions[];
  /** node_to_node_encryption block */
  readonly nodeToNodeEncryption?: ElasticsearchDomainNodeToNodeEncryption[];
  /** snapshot_options block */
  readonly snapshotOptions?: ElasticsearchDomainSnapshotOptions[];
  /** timeouts block */
  readonly timeouts?: ElasticsearchDomainTimeouts;
  /** vpc_options block */
  readonly vpcOptions?: ElasticsearchDomainVpcOptions[];
}
export interface ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions {
  readonly masterUserArn?: string;
  readonly masterUserName?: string;
  readonly masterUserPassword?: string;
}
export interface ElasticsearchDomainAdvancedSecurityOptions {
  readonly enabled: boolean;
  readonly internalUserDatabaseEnabled?: boolean;
  /** master_user_options block */
  readonly masterUserOptions?: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions[];
}
export interface ElasticsearchDomainClusterConfigZoneAwarenessConfig {
  readonly availabilityZoneCount?: number;
}
export interface ElasticsearchDomainClusterConfig {
  readonly dedicatedMasterCount?: number;
  readonly dedicatedMasterEnabled?: boolean;
  readonly dedicatedMasterType?: string;
  readonly instanceCount?: number;
  readonly instanceType?: string;
  readonly warmCount?: number;
  readonly warmEnabled?: boolean;
  readonly warmType?: string;
  readonly zoneAwarenessEnabled?: boolean;
  /** zone_awareness_config block */
  readonly zoneAwarenessConfig?: ElasticsearchDomainClusterConfigZoneAwarenessConfig[];
}
export interface ElasticsearchDomainCognitoOptions {
  readonly enabled?: boolean;
  readonly identityPoolId: string;
  readonly roleArn: string;
  readonly userPoolId: string;
}
export interface ElasticsearchDomainDomainEndpointOptions {
  readonly enforceHttps: boolean;
  readonly tlsSecurityPolicy?: string;
}
export interface ElasticsearchDomainEbsOptions {
  readonly ebsEnabled: boolean;
  readonly iops?: number;
  readonly volumeSize?: number;
  readonly volumeType?: string;
}
export interface ElasticsearchDomainEncryptAtRest {
  readonly enabled: boolean;
  readonly kmsKeyId?: string;
}
export interface ElasticsearchDomainLogPublishingOptions {
  readonly cloudwatchLogGroupArn: string;
  readonly enabled?: boolean;
  readonly logType: string;
}
export interface ElasticsearchDomainNodeToNodeEncryption {
  readonly enabled: boolean;
}
export interface ElasticsearchDomainSnapshotOptions {
  readonly automatedSnapshotStartHour: number;
}
export interface ElasticsearchDomainTimeouts {
  readonly update?: string;
}
export interface ElasticsearchDomainVpcOptions {
  readonly securityGroupIds?: string[];
  readonly subnetIds?: string[];
}

// Resource

export class ElasticsearchDomain extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ElasticsearchDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elasticsearch_domain',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessPolicies = config.accessPolicies;
    this._advancedOptions = config.advancedOptions;
    this._domainName = config.domainName;
    this._elasticsearchVersion = config.elasticsearchVersion;
    this._tags = config.tags;
    this._advancedSecurityOptions = config.advancedSecurityOptions;
    this._clusterConfig = config.clusterConfig;
    this._cognitoOptions = config.cognitoOptions;
    this._domainEndpointOptions = config.domainEndpointOptions;
    this._ebsOptions = config.ebsOptions;
    this._encryptAtRest = config.encryptAtRest;
    this._logPublishingOptions = config.logPublishingOptions;
    this._nodeToNodeEncryption = config.nodeToNodeEncryption;
    this._snapshotOptions = config.snapshotOptions;
    this._timeouts = config.timeouts;
    this._vpcOptions = config.vpcOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policies - computed: true, optional: true, required: false
  private _accessPolicies?: string;
  public get accessPolicies() {
    return this._accessPolicies ?? this.getStringAttribute('access_policies');
  }
  public set accessPolicies(value: string | undefined) {
    this._accessPolicies = value;
  }

  // advanced_options - computed: true, optional: true, required: false
  private _advancedOptions?: { [key: string]: string }
  public get advancedOptions(): { [key: string]: string } | undefined {
    return this._advancedOptions; // Getting the computed value is not yet implemented
  }
  public set advancedOptions(value: { [key: string]: string } | undefined) {
    this._advancedOptions = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_id - computed: true, optional: false, required: true
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this._domainName;
  }
  public set domainName(value: string) {
    this._domainName = value;
  }

  // elasticsearch_version - computed: false, optional: true, required: false
  private _elasticsearchVersion?: string;
  public get elasticsearchVersion() {
    return this._elasticsearchVersion;
  }
  public set elasticsearchVersion(value: string | undefined) {
    this._elasticsearchVersion = value;
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

  // kibana_endpoint - computed: true, optional: false, required: true
  public get kibanaEndpoint() {
    return this.getStringAttribute('kibana_endpoint');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // advanced_security_options - computed: false, optional: true, required: false
  private _advancedSecurityOptions?: ElasticsearchDomainAdvancedSecurityOptions[];
  public get advancedSecurityOptions() {
    return this._advancedSecurityOptions;
  }
  public set advancedSecurityOptions(value: ElasticsearchDomainAdvancedSecurityOptions[] | undefined) {
    this._advancedSecurityOptions = value;
  }

  // cluster_config - computed: false, optional: true, required: false
  private _clusterConfig?: ElasticsearchDomainClusterConfig[];
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public set clusterConfig(value: ElasticsearchDomainClusterConfig[] | undefined) {
    this._clusterConfig = value;
  }

  // cognito_options - computed: false, optional: true, required: false
  private _cognitoOptions?: ElasticsearchDomainCognitoOptions[];
  public get cognitoOptions() {
    return this._cognitoOptions;
  }
  public set cognitoOptions(value: ElasticsearchDomainCognitoOptions[] | undefined) {
    this._cognitoOptions = value;
  }

  // domain_endpoint_options - computed: false, optional: true, required: false
  private _domainEndpointOptions?: ElasticsearchDomainDomainEndpointOptions[];
  public get domainEndpointOptions() {
    return this._domainEndpointOptions;
  }
  public set domainEndpointOptions(value: ElasticsearchDomainDomainEndpointOptions[] | undefined) {
    this._domainEndpointOptions = value;
  }

  // ebs_options - computed: false, optional: true, required: false
  private _ebsOptions?: ElasticsearchDomainEbsOptions[];
  public get ebsOptions() {
    return this._ebsOptions;
  }
  public set ebsOptions(value: ElasticsearchDomainEbsOptions[] | undefined) {
    this._ebsOptions = value;
  }

  // encrypt_at_rest - computed: false, optional: true, required: false
  private _encryptAtRest?: ElasticsearchDomainEncryptAtRest[];
  public get encryptAtRest() {
    return this._encryptAtRest;
  }
  public set encryptAtRest(value: ElasticsearchDomainEncryptAtRest[] | undefined) {
    this._encryptAtRest = value;
  }

  // log_publishing_options - computed: false, optional: true, required: false
  private _logPublishingOptions?: ElasticsearchDomainLogPublishingOptions[];
  public get logPublishingOptions() {
    return this._logPublishingOptions;
  }
  public set logPublishingOptions(value: ElasticsearchDomainLogPublishingOptions[] | undefined) {
    this._logPublishingOptions = value;
  }

  // node_to_node_encryption - computed: false, optional: true, required: false
  private _nodeToNodeEncryption?: ElasticsearchDomainNodeToNodeEncryption[];
  public get nodeToNodeEncryption() {
    return this._nodeToNodeEncryption;
  }
  public set nodeToNodeEncryption(value: ElasticsearchDomainNodeToNodeEncryption[] | undefined) {
    this._nodeToNodeEncryption = value;
  }

  // snapshot_options - computed: false, optional: true, required: false
  private _snapshotOptions?: ElasticsearchDomainSnapshotOptions[];
  public get snapshotOptions() {
    return this._snapshotOptions;
  }
  public set snapshotOptions(value: ElasticsearchDomainSnapshotOptions[] | undefined) {
    this._snapshotOptions = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ElasticsearchDomainTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ElasticsearchDomainTimeouts | undefined) {
    this._timeouts = value;
  }

  // vpc_options - computed: false, optional: true, required: false
  private _vpcOptions?: ElasticsearchDomainVpcOptions[];
  public get vpcOptions() {
    return this._vpcOptions;
  }
  public set vpcOptions(value: ElasticsearchDomainVpcOptions[] | undefined) {
    this._vpcOptions = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policies: this._accessPolicies,
      advanced_options: this._advancedOptions,
      domain_name: this._domainName,
      elasticsearch_version: this._elasticsearchVersion,
      tags: this._tags,
      advanced_security_options: this._advancedSecurityOptions,
      cluster_config: this._clusterConfig,
      cognito_options: this._cognitoOptions,
      domain_endpoint_options: this._domainEndpointOptions,
      ebs_options: this._ebsOptions,
      encrypt_at_rest: this._encryptAtRest,
      log_publishing_options: this._logPublishingOptions,
      node_to_node_encryption: this._nodeToNodeEncryption,
      snapshot_options: this._snapshotOptions,
      timeouts: this._timeouts,
      vpc_options: this._vpcOptions,
    };
  }
}
