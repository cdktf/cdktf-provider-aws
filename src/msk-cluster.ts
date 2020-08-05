// https://www.terraform.io/docs/providers/aws/r/msk_cluster.html
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
      "bootstrap_brokers": {
        "type": "string",
        "computed": true
      },
      "bootstrap_brokers_tls": {
        "type": "string",
        "computed": true
      },
      "cluster_name": {
        "type": "string",
        "required": true
      },
      "current_version": {
        "type": "string",
        "computed": true
      },
      "enhanced_monitoring": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "kafka_version": {
        "type": "string",
        "required": true
      },
      "number_of_broker_nodes": {
        "type": "number",
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "zookeeper_connect_string": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "broker_node_group_info": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "az_distribution": {
              "type": "string",
              "optional": true
            },
            "client_subnets": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            },
            "ebs_volume_size": {
              "type": "number",
              "required": true
            },
            "instance_type": {
              "type": "string",
              "required": true
            },
            "security_groups": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        },
        "min_items": 1,
        "max_items": 1
      },
      "client_authentication": {
        "nesting_mode": "list",
        "block": {
          "block_types": {
            "tls": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "certificate_authority_arns": {
                    "type": [
                      "set",
                      "string"
                    ],
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
      "configuration_info": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "arn": {
              "type": "string",
              "required": true
            },
            "revision": {
              "type": "number",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "encryption_info": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "encryption_at_rest_kms_key_arn": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          },
          "block_types": {
            "encryption_in_transit": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "client_broker": {
                    "type": "string",
                    "optional": true
                  },
                  "in_cluster": {
                    "type": "bool",
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
      "logging_info": {
        "nesting_mode": "list",
        "block": {
          "block_types": {
            "broker_logs": {
              "nesting_mode": "list",
              "block": {
                "block_types": {
                  "cloudwatch_logs": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "enabled": {
                          "type": "bool",
                          "required": true
                        },
                        "log_group": {
                          "type": "string",
                          "optional": true
                        }
                      }
                    },
                    "max_items": 1
                  },
                  "firehose": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "delivery_stream": {
                          "type": "string",
                          "optional": true
                        },
                        "enabled": {
                          "type": "bool",
                          "required": true
                        }
                      }
                    },
                    "max_items": 1
                  },
                  "s3": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "bucket": {
                          "type": "string",
                          "optional": true
                        },
                        "enabled": {
                          "type": "bool",
                          "required": true
                        },
                        "prefix": {
                          "type": "string",
                          "optional": true
                        }
                      }
                    },
                    "max_items": 1
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
      "open_monitoring": {
        "nesting_mode": "list",
        "block": {
          "block_types": {
            "prometheus": {
              "nesting_mode": "list",
              "block": {
                "block_types": {
                  "jmx_exporter": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "enabled_in_broker": {
                          "type": "bool",
                          "required": true
                        }
                      }
                    },
                    "max_items": 1
                  },
                  "node_exporter": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "enabled_in_broker": {
                          "type": "bool",
                          "required": true
                        }
                      }
                    },
                    "max_items": 1
                  }
                }
              },
              "min_items": 1,
              "max_items": 1
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

export interface MskClusterConfig extends TerraformMetaArguments {
  readonly clusterName: string;
  readonly enhancedMonitoring?: string;
  readonly kafkaVersion: string;
  readonly numberOfBrokerNodes: number;
  readonly tags?: { [key: string]: string };
  /** broker_node_group_info block */
  readonly brokerNodeGroupInfo: MskClusterBrokerNodeGroupInfo[];
  /** client_authentication block */
  readonly clientAuthentication?: MskClusterClientAuthentication[];
  /** configuration_info block */
  readonly configurationInfo?: MskClusterConfigurationInfo[];
  /** encryption_info block */
  readonly encryptionInfo?: MskClusterEncryptionInfo[];
  /** logging_info block */
  readonly loggingInfo?: MskClusterLoggingInfo[];
  /** open_monitoring block */
  readonly openMonitoring?: MskClusterOpenMonitoring[];
}
export interface MskClusterBrokerNodeGroupInfo {
  readonly azDistribution?: string;
  readonly clientSubnets: string[];
  readonly ebsVolumeSize: number;
  readonly instanceType: string;
  readonly securityGroups: string[];
}
export interface MskClusterClientAuthenticationTls {
  readonly certificateAuthorityArns?: string[];
}
export interface MskClusterClientAuthentication {
  /** tls block */
  readonly tls?: MskClusterClientAuthenticationTls[];
}
export interface MskClusterConfigurationInfo {
  readonly arn: string;
  readonly revision: number;
}
export interface MskClusterEncryptionInfoEncryptionInTransit {
  readonly clientBroker?: string;
  readonly inCluster?: boolean;
}
export interface MskClusterEncryptionInfo {
  readonly encryptionAtRestKmsKeyArn?: string;
  /** encryption_in_transit block */
  readonly encryptionInTransit?: MskClusterEncryptionInfoEncryptionInTransit[];
}
export interface MskClusterLoggingInfoBrokerLogsCloudwatchLogs {
  readonly enabled: boolean;
  readonly logGroup?: string;
}
export interface MskClusterLoggingInfoBrokerLogsFirehose {
  readonly deliveryStream?: string;
  readonly enabled: boolean;
}
export interface MskClusterLoggingInfoBrokerLogsS3 {
  readonly bucket?: string;
  readonly enabled: boolean;
  readonly prefix?: string;
}
export interface MskClusterLoggingInfoBrokerLogs {
  /** cloudwatch_logs block */
  readonly cloudwatchLogs?: MskClusterLoggingInfoBrokerLogsCloudwatchLogs[];
  /** firehose block */
  readonly firehose?: MskClusterLoggingInfoBrokerLogsFirehose[];
  /** s3 block */
  readonly s3?: MskClusterLoggingInfoBrokerLogsS3[];
}
export interface MskClusterLoggingInfo {
  /** broker_logs block */
  readonly brokerLogs: MskClusterLoggingInfoBrokerLogs[];
}
export interface MskClusterOpenMonitoringPrometheusJmxExporter {
  readonly enabledInBroker: boolean;
}
export interface MskClusterOpenMonitoringPrometheusNodeExporter {
  readonly enabledInBroker: boolean;
}
export interface MskClusterOpenMonitoringPrometheus {
  /** jmx_exporter block */
  readonly jmxExporter?: MskClusterOpenMonitoringPrometheusJmxExporter[];
  /** node_exporter block */
  readonly nodeExporter?: MskClusterOpenMonitoringPrometheusNodeExporter[];
}
export interface MskClusterOpenMonitoring {
  /** prometheus block */
  readonly prometheus: MskClusterOpenMonitoringPrometheus[];
}

// Resource

export class MskCluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MskClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_msk_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterName = config.clusterName;
    this._enhancedMonitoring = config.enhancedMonitoring;
    this._kafkaVersion = config.kafkaVersion;
    this._numberOfBrokerNodes = config.numberOfBrokerNodes;
    this._tags = config.tags;
    this._brokerNodeGroupInfo = config.brokerNodeGroupInfo;
    this._clientAuthentication = config.clientAuthentication;
    this._configurationInfo = config.configurationInfo;
    this._encryptionInfo = config.encryptionInfo;
    this._loggingInfo = config.loggingInfo;
    this._openMonitoring = config.openMonitoring;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bootstrap_brokers - computed: true, optional: false, required: true
  public get bootstrapBrokers() {
    return this.getStringAttribute('bootstrap_brokers');
  }

  // bootstrap_brokers_tls - computed: true, optional: false, required: true
  public get bootstrapBrokersTls() {
    return this.getStringAttribute('bootstrap_brokers_tls');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName: string;
  public get clusterName() {
    return this._clusterName;
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }

  // current_version - computed: true, optional: false, required: true
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // enhanced_monitoring - computed: false, optional: true, required: false
  private _enhancedMonitoring?: string;
  public get enhancedMonitoring() {
    return this._enhancedMonitoring;
  }
  public set enhancedMonitoring(value: string | undefined) {
    this._enhancedMonitoring = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kafka_version - computed: false, optional: false, required: true
  private _kafkaVersion: string;
  public get kafkaVersion() {
    return this._kafkaVersion;
  }
  public set kafkaVersion(value: string) {
    this._kafkaVersion = value;
  }

  // number_of_broker_nodes - computed: false, optional: false, required: true
  private _numberOfBrokerNodes: number;
  public get numberOfBrokerNodes() {
    return this._numberOfBrokerNodes;
  }
  public set numberOfBrokerNodes(value: number) {
    this._numberOfBrokerNodes = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // zookeeper_connect_string - computed: true, optional: false, required: true
  public get zookeeperConnectString() {
    return this.getStringAttribute('zookeeper_connect_string');
  }

  // broker_node_group_info - computed: false, optional: false, required: true
  private _brokerNodeGroupInfo: MskClusterBrokerNodeGroupInfo[];
  public get brokerNodeGroupInfo() {
    return this._brokerNodeGroupInfo;
  }
  public set brokerNodeGroupInfo(value: MskClusterBrokerNodeGroupInfo[]) {
    this._brokerNodeGroupInfo = value;
  }

  // client_authentication - computed: false, optional: true, required: false
  private _clientAuthentication?: MskClusterClientAuthentication[];
  public get clientAuthentication() {
    return this._clientAuthentication;
  }
  public set clientAuthentication(value: MskClusterClientAuthentication[] | undefined) {
    this._clientAuthentication = value;
  }

  // configuration_info - computed: false, optional: true, required: false
  private _configurationInfo?: MskClusterConfigurationInfo[];
  public get configurationInfo() {
    return this._configurationInfo;
  }
  public set configurationInfo(value: MskClusterConfigurationInfo[] | undefined) {
    this._configurationInfo = value;
  }

  // encryption_info - computed: false, optional: true, required: false
  private _encryptionInfo?: MskClusterEncryptionInfo[];
  public get encryptionInfo() {
    return this._encryptionInfo;
  }
  public set encryptionInfo(value: MskClusterEncryptionInfo[] | undefined) {
    this._encryptionInfo = value;
  }

  // logging_info - computed: false, optional: true, required: false
  private _loggingInfo?: MskClusterLoggingInfo[];
  public get loggingInfo() {
    return this._loggingInfo;
  }
  public set loggingInfo(value: MskClusterLoggingInfo[] | undefined) {
    this._loggingInfo = value;
  }

  // open_monitoring - computed: false, optional: true, required: false
  private _openMonitoring?: MskClusterOpenMonitoring[];
  public get openMonitoring() {
    return this._openMonitoring;
  }
  public set openMonitoring(value: MskClusterOpenMonitoring[] | undefined) {
    this._openMonitoring = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: this._clusterName,
      enhanced_monitoring: this._enhancedMonitoring,
      kafka_version: this._kafkaVersion,
      number_of_broker_nodes: this._numberOfBrokerNodes,
      tags: this._tags,
      broker_node_group_info: this._brokerNodeGroupInfo,
      client_authentication: this._clientAuthentication,
      configuration_info: this._configurationInfo,
      encryption_info: this._encryptionInfo,
      logging_info: this._loggingInfo,
      open_monitoring: this._openMonitoring,
    };
  }
}
