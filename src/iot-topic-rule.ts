// https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html
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
      "description": {
        "type": "string",
        "optional": true
      },
      "enabled": {
        "type": "bool",
        "required": true
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
      "sql": {
        "type": "string",
        "required": true
      },
      "sql_version": {
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
      "cloudwatch_alarm": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "alarm_name": {
              "type": "string",
              "required": true
            },
            "role_arn": {
              "type": "string",
              "required": true
            },
            "state_reason": {
              "type": "string",
              "required": true
            },
            "state_value": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "cloudwatch_metric": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "metric_name": {
              "type": "string",
              "required": true
            },
            "metric_namespace": {
              "type": "string",
              "required": true
            },
            "metric_timestamp": {
              "type": "string",
              "optional": true
            },
            "metric_unit": {
              "type": "string",
              "required": true
            },
            "metric_value": {
              "type": "string",
              "required": true
            },
            "role_arn": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "dynamodb": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "hash_key_field": {
              "type": "string",
              "required": true
            },
            "hash_key_type": {
              "type": "string",
              "optional": true
            },
            "hash_key_value": {
              "type": "string",
              "required": true
            },
            "operation": {
              "type": "string",
              "optional": true
            },
            "payload_field": {
              "type": "string",
              "optional": true
            },
            "range_key_field": {
              "type": "string",
              "optional": true
            },
            "range_key_type": {
              "type": "string",
              "optional": true
            },
            "range_key_value": {
              "type": "string",
              "optional": true
            },
            "role_arn": {
              "type": "string",
              "required": true
            },
            "table_name": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "dynamodbv2": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "role_arn": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "put_item": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "table_name": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            }
          }
        }
      },
      "elasticsearch": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "endpoint": {
              "type": "string",
              "required": true
            },
            "id": {
              "type": "string",
              "required": true
            },
            "index": {
              "type": "string",
              "required": true
            },
            "role_arn": {
              "type": "string",
              "required": true
            },
            "type": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "error_action": {
        "nesting_mode": "list",
        "block": {
          "block_types": {
            "cloudwatch_alarm": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "alarm_name": {
                    "type": "string",
                    "required": true
                  },
                  "role_arn": {
                    "type": "string",
                    "required": true
                  },
                  "state_reason": {
                    "type": "string",
                    "required": true
                  },
                  "state_value": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "cloudwatch_metric": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "metric_name": {
                    "type": "string",
                    "required": true
                  },
                  "metric_namespace": {
                    "type": "string",
                    "required": true
                  },
                  "metric_timestamp": {
                    "type": "string",
                    "optional": true
                  },
                  "metric_unit": {
                    "type": "string",
                    "required": true
                  },
                  "metric_value": {
                    "type": "string",
                    "required": true
                  },
                  "role_arn": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "dynamodb": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "hash_key_field": {
                    "type": "string",
                    "required": true
                  },
                  "hash_key_type": {
                    "type": "string",
                    "optional": true
                  },
                  "hash_key_value": {
                    "type": "string",
                    "required": true
                  },
                  "operation": {
                    "type": "string",
                    "optional": true
                  },
                  "payload_field": {
                    "type": "string",
                    "optional": true
                  },
                  "range_key_field": {
                    "type": "string",
                    "optional": true
                  },
                  "range_key_type": {
                    "type": "string",
                    "optional": true
                  },
                  "range_key_value": {
                    "type": "string",
                    "optional": true
                  },
                  "role_arn": {
                    "type": "string",
                    "required": true
                  },
                  "table_name": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "dynamodbv2": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "role_arn": {
                    "type": "string",
                    "required": true
                  }
                },
                "block_types": {
                  "put_item": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "table_name": {
                          "type": "string",
                          "required": true
                        }
                      }
                    },
                    "max_items": 1
                  }
                }
              },
              "max_items": 1
            },
            "elasticsearch": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "endpoint": {
                    "type": "string",
                    "required": true
                  },
                  "id": {
                    "type": "string",
                    "required": true
                  },
                  "index": {
                    "type": "string",
                    "required": true
                  },
                  "role_arn": {
                    "type": "string",
                    "required": true
                  },
                  "type": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "firehose": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "delivery_stream_name": {
                    "type": "string",
                    "required": true
                  },
                  "role_arn": {
                    "type": "string",
                    "required": true
                  },
                  "separator": {
                    "type": "string",
                    "optional": true
                  }
                }
              },
              "max_items": 1
            },
            "iot_analytics": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "channel_name": {
                    "type": "string",
                    "required": true
                  },
                  "role_arn": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "iot_events": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "input_name": {
                    "type": "string",
                    "required": true
                  },
                  "message_id": {
                    "type": "string",
                    "optional": true
                  },
                  "role_arn": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "kinesis": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "partition_key": {
                    "type": "string",
                    "optional": true
                  },
                  "role_arn": {
                    "type": "string",
                    "required": true
                  },
                  "stream_name": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "lambda": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "function_arn": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "republish": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "qos": {
                    "type": "number",
                    "optional": true
                  },
                  "role_arn": {
                    "type": "string",
                    "required": true
                  },
                  "topic": {
                    "type": "string",
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
                  "bucket_name": {
                    "type": "string",
                    "required": true
                  },
                  "key": {
                    "type": "string",
                    "required": true
                  },
                  "role_arn": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "sns": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "message_format": {
                    "type": "string",
                    "optional": true
                  },
                  "role_arn": {
                    "type": "string",
                    "required": true
                  },
                  "target_arn": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "sqs": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "queue_url": {
                    "type": "string",
                    "required": true
                  },
                  "role_arn": {
                    "type": "string",
                    "required": true
                  },
                  "use_base64": {
                    "type": "bool",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "step_functions": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "execution_name_prefix": {
                    "type": "string",
                    "optional": true
                  },
                  "role_arn": {
                    "type": "string",
                    "required": true
                  },
                  "state_machine_name": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "max_items": 1
      },
      "firehose": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "delivery_stream_name": {
              "type": "string",
              "required": true
            },
            "role_arn": {
              "type": "string",
              "required": true
            },
            "separator": {
              "type": "string",
              "optional": true
            }
          }
        }
      },
      "iot_analytics": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "channel_name": {
              "type": "string",
              "required": true
            },
            "role_arn": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "iot_events": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "input_name": {
              "type": "string",
              "required": true
            },
            "message_id": {
              "type": "string",
              "optional": true
            },
            "role_arn": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "kinesis": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "partition_key": {
              "type": "string",
              "optional": true
            },
            "role_arn": {
              "type": "string",
              "required": true
            },
            "stream_name": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "lambda": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "function_arn": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "republish": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "qos": {
              "type": "number",
              "optional": true
            },
            "role_arn": {
              "type": "string",
              "required": true
            },
            "topic": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "s3": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "bucket_name": {
              "type": "string",
              "required": true
            },
            "key": {
              "type": "string",
              "required": true
            },
            "role_arn": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "sns": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "message_format": {
              "type": "string",
              "optional": true
            },
            "role_arn": {
              "type": "string",
              "required": true
            },
            "target_arn": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "sqs": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "queue_url": {
              "type": "string",
              "required": true
            },
            "role_arn": {
              "type": "string",
              "required": true
            },
            "use_base64": {
              "type": "bool",
              "required": true
            }
          }
        }
      },
      "step_functions": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "execution_name_prefix": {
              "type": "string",
              "optional": true
            },
            "role_arn": {
              "type": "string",
              "required": true
            },
            "state_machine_name": {
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

export interface IotTopicRuleConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly enabled: boolean;
  readonly name: string;
  readonly sql: string;
  readonly sqlVersion: string;
  readonly tags?: { [key: string]: string };
  /** cloudwatch_alarm block */
  readonly cloudwatchAlarm?: IotTopicRuleCloudwatchAlarm[];
  /** cloudwatch_metric block */
  readonly cloudwatchMetric?: IotTopicRuleCloudwatchMetric[];
  /** dynamodb block */
  readonly dynamodb?: IotTopicRuleDynamodb[];
  /** dynamodbv2 block */
  readonly dynamodbv2?: IotTopicRuleDynamodbv2[];
  /** elasticsearch block */
  readonly elasticsearch?: IotTopicRuleElasticsearch[];
  /** error_action block */
  readonly errorAction?: IotTopicRuleErrorAction[];
  /** firehose block */
  readonly firehose?: IotTopicRuleFirehose[];
  /** iot_analytics block */
  readonly iotAnalytics?: IotTopicRuleIotAnalytics[];
  /** iot_events block */
  readonly iotEvents?: IotTopicRuleIotEvents[];
  /** kinesis block */
  readonly kinesis?: IotTopicRuleKinesis[];
  /** lambda block */
  readonly lambda?: IotTopicRuleLambda[];
  /** republish block */
  readonly republish?: IotTopicRuleRepublish[];
  /** s3 block */
  readonly s3?: IotTopicRuleS3[];
  /** sns block */
  readonly sns?: IotTopicRuleSns[];
  /** sqs block */
  readonly sqs?: IotTopicRuleSqs[];
  /** step_functions block */
  readonly stepFunctions?: IotTopicRuleStepFunctions[];
}
export interface IotTopicRuleCloudwatchAlarm {
  readonly alarmName: string;
  readonly roleArn: string;
  readonly stateReason: string;
  readonly stateValue: string;
}
export interface IotTopicRuleCloudwatchMetric {
  readonly metricName: string;
  readonly metricNamespace: string;
  readonly metricTimestamp?: string;
  readonly metricUnit: string;
  readonly metricValue: string;
  readonly roleArn: string;
}
export interface IotTopicRuleDynamodb {
  readonly hashKeyField: string;
  readonly hashKeyType?: string;
  readonly hashKeyValue: string;
  readonly operation?: string;
  readonly payloadField?: string;
  readonly rangeKeyField?: string;
  readonly rangeKeyType?: string;
  readonly rangeKeyValue?: string;
  readonly roleArn: string;
  readonly tableName: string;
}
export interface IotTopicRuleDynamodbv2PutItem {
  readonly tableName: string;
}
export interface IotTopicRuleDynamodbv2 {
  readonly roleArn: string;
  /** put_item block */
  readonly putItem?: IotTopicRuleDynamodbv2PutItem[];
}
export interface IotTopicRuleElasticsearch {
  readonly endpoint: string;
  readonly id: string;
  readonly index: string;
  readonly roleArn: string;
  readonly type: string;
}
export interface IotTopicRuleErrorActionCloudwatchAlarm {
  readonly alarmName: string;
  readonly roleArn: string;
  readonly stateReason: string;
  readonly stateValue: string;
}
export interface IotTopicRuleErrorActionCloudwatchMetric {
  readonly metricName: string;
  readonly metricNamespace: string;
  readonly metricTimestamp?: string;
  readonly metricUnit: string;
  readonly metricValue: string;
  readonly roleArn: string;
}
export interface IotTopicRuleErrorActionDynamodb {
  readonly hashKeyField: string;
  readonly hashKeyType?: string;
  readonly hashKeyValue: string;
  readonly operation?: string;
  readonly payloadField?: string;
  readonly rangeKeyField?: string;
  readonly rangeKeyType?: string;
  readonly rangeKeyValue?: string;
  readonly roleArn: string;
  readonly tableName: string;
}
export interface IotTopicRuleErrorActionDynamodbv2PutItem {
  readonly tableName: string;
}
export interface IotTopicRuleErrorActionDynamodbv2 {
  readonly roleArn: string;
  /** put_item block */
  readonly putItem?: IotTopicRuleErrorActionDynamodbv2PutItem[];
}
export interface IotTopicRuleErrorActionElasticsearch {
  readonly endpoint: string;
  readonly id: string;
  readonly index: string;
  readonly roleArn: string;
  readonly type: string;
}
export interface IotTopicRuleErrorActionFirehose {
  readonly deliveryStreamName: string;
  readonly roleArn: string;
  readonly separator?: string;
}
export interface IotTopicRuleErrorActionIotAnalytics {
  readonly channelName: string;
  readonly roleArn: string;
}
export interface IotTopicRuleErrorActionIotEvents {
  readonly inputName: string;
  readonly messageId?: string;
  readonly roleArn: string;
}
export interface IotTopicRuleErrorActionKinesis {
  readonly partitionKey?: string;
  readonly roleArn: string;
  readonly streamName: string;
}
export interface IotTopicRuleErrorActionLambda {
  readonly functionArn: string;
}
export interface IotTopicRuleErrorActionRepublish {
  readonly qos?: number;
  readonly roleArn: string;
  readonly topic: string;
}
export interface IotTopicRuleErrorActionS3 {
  readonly bucketName: string;
  readonly key: string;
  readonly roleArn: string;
}
export interface IotTopicRuleErrorActionSns {
  readonly messageFormat?: string;
  readonly roleArn: string;
  readonly targetArn: string;
}
export interface IotTopicRuleErrorActionSqs {
  readonly queueUrl: string;
  readonly roleArn: string;
  readonly useBase64: boolean;
}
export interface IotTopicRuleErrorActionStepFunctions {
  readonly executionNamePrefix?: string;
  readonly roleArn: string;
  readonly stateMachineName: string;
}
export interface IotTopicRuleErrorAction {
  /** cloudwatch_alarm block */
  readonly cloudwatchAlarm?: IotTopicRuleErrorActionCloudwatchAlarm[];
  /** cloudwatch_metric block */
  readonly cloudwatchMetric?: IotTopicRuleErrorActionCloudwatchMetric[];
  /** dynamodb block */
  readonly dynamodb?: IotTopicRuleErrorActionDynamodb[];
  /** dynamodbv2 block */
  readonly dynamodbv2?: IotTopicRuleErrorActionDynamodbv2[];
  /** elasticsearch block */
  readonly elasticsearch?: IotTopicRuleErrorActionElasticsearch[];
  /** firehose block */
  readonly firehose?: IotTopicRuleErrorActionFirehose[];
  /** iot_analytics block */
  readonly iotAnalytics?: IotTopicRuleErrorActionIotAnalytics[];
  /** iot_events block */
  readonly iotEvents?: IotTopicRuleErrorActionIotEvents[];
  /** kinesis block */
  readonly kinesis?: IotTopicRuleErrorActionKinesis[];
  /** lambda block */
  readonly lambda?: IotTopicRuleErrorActionLambda[];
  /** republish block */
  readonly republish?: IotTopicRuleErrorActionRepublish[];
  /** s3 block */
  readonly s3?: IotTopicRuleErrorActionS3[];
  /** sns block */
  readonly sns?: IotTopicRuleErrorActionSns[];
  /** sqs block */
  readonly sqs?: IotTopicRuleErrorActionSqs[];
  /** step_functions block */
  readonly stepFunctions?: IotTopicRuleErrorActionStepFunctions[];
}
export interface IotTopicRuleFirehose {
  readonly deliveryStreamName: string;
  readonly roleArn: string;
  readonly separator?: string;
}
export interface IotTopicRuleIotAnalytics {
  readonly channelName: string;
  readonly roleArn: string;
}
export interface IotTopicRuleIotEvents {
  readonly inputName: string;
  readonly messageId?: string;
  readonly roleArn: string;
}
export interface IotTopicRuleKinesis {
  readonly partitionKey?: string;
  readonly roleArn: string;
  readonly streamName: string;
}
export interface IotTopicRuleLambda {
  readonly functionArn: string;
}
export interface IotTopicRuleRepublish {
  readonly qos?: number;
  readonly roleArn: string;
  readonly topic: string;
}
export interface IotTopicRuleS3 {
  readonly bucketName: string;
  readonly key: string;
  readonly roleArn: string;
}
export interface IotTopicRuleSns {
  readonly messageFormat?: string;
  readonly roleArn: string;
  readonly targetArn: string;
}
export interface IotTopicRuleSqs {
  readonly queueUrl: string;
  readonly roleArn: string;
  readonly useBase64: boolean;
}
export interface IotTopicRuleStepFunctions {
  readonly executionNamePrefix?: string;
  readonly roleArn: string;
  readonly stateMachineName: string;
}

// Resource

export class IotTopicRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IotTopicRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_topic_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._name = config.name;
    this._sql = config.sql;
    this._sqlVersion = config.sqlVersion;
    this._tags = config.tags;
    this._cloudwatchAlarm = config.cloudwatchAlarm;
    this._cloudwatchMetric = config.cloudwatchMetric;
    this._dynamodb = config.dynamodb;
    this._dynamodbv2 = config.dynamodbv2;
    this._elasticsearch = config.elasticsearch;
    this._errorAction = config.errorAction;
    this._firehose = config.firehose;
    this._iotAnalytics = config.iotAnalytics;
    this._iotEvents = config.iotEvents;
    this._kinesis = config.kinesis;
    this._lambda = config.lambda;
    this._republish = config.republish;
    this._s3 = config.s3;
    this._sns = config.sns;
    this._sqs = config.sqs;
    this._stepFunctions = config.stepFunctions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean) {
    this._enabled = value;
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

  // sql - computed: false, optional: false, required: true
  private _sql: string;
  public get sql() {
    return this._sql;
  }
  public set sql(value: string) {
    this._sql = value;
  }

  // sql_version - computed: false, optional: false, required: true
  private _sqlVersion: string;
  public get sqlVersion() {
    return this._sqlVersion;
  }
  public set sqlVersion(value: string) {
    this._sqlVersion = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // cloudwatch_alarm - computed: false, optional: true, required: false
  private _cloudwatchAlarm?: IotTopicRuleCloudwatchAlarm[];
  public get cloudwatchAlarm() {
    return this._cloudwatchAlarm;
  }
  public set cloudwatchAlarm(value: IotTopicRuleCloudwatchAlarm[] | undefined) {
    this._cloudwatchAlarm = value;
  }

  // cloudwatch_metric - computed: false, optional: true, required: false
  private _cloudwatchMetric?: IotTopicRuleCloudwatchMetric[];
  public get cloudwatchMetric() {
    return this._cloudwatchMetric;
  }
  public set cloudwatchMetric(value: IotTopicRuleCloudwatchMetric[] | undefined) {
    this._cloudwatchMetric = value;
  }

  // dynamodb - computed: false, optional: true, required: false
  private _dynamodb?: IotTopicRuleDynamodb[];
  public get dynamodb() {
    return this._dynamodb;
  }
  public set dynamodb(value: IotTopicRuleDynamodb[] | undefined) {
    this._dynamodb = value;
  }

  // dynamodbv2 - computed: false, optional: true, required: false
  private _dynamodbv2?: IotTopicRuleDynamodbv2[];
  public get dynamodbv2() {
    return this._dynamodbv2;
  }
  public set dynamodbv2(value: IotTopicRuleDynamodbv2[] | undefined) {
    this._dynamodbv2 = value;
  }

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch?: IotTopicRuleElasticsearch[];
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public set elasticsearch(value: IotTopicRuleElasticsearch[] | undefined) {
    this._elasticsearch = value;
  }

  // error_action - computed: false, optional: true, required: false
  private _errorAction?: IotTopicRuleErrorAction[];
  public get errorAction() {
    return this._errorAction;
  }
  public set errorAction(value: IotTopicRuleErrorAction[] | undefined) {
    this._errorAction = value;
  }

  // firehose - computed: false, optional: true, required: false
  private _firehose?: IotTopicRuleFirehose[];
  public get firehose() {
    return this._firehose;
  }
  public set firehose(value: IotTopicRuleFirehose[] | undefined) {
    this._firehose = value;
  }

  // iot_analytics - computed: false, optional: true, required: false
  private _iotAnalytics?: IotTopicRuleIotAnalytics[];
  public get iotAnalytics() {
    return this._iotAnalytics;
  }
  public set iotAnalytics(value: IotTopicRuleIotAnalytics[] | undefined) {
    this._iotAnalytics = value;
  }

  // iot_events - computed: false, optional: true, required: false
  private _iotEvents?: IotTopicRuleIotEvents[];
  public get iotEvents() {
    return this._iotEvents;
  }
  public set iotEvents(value: IotTopicRuleIotEvents[] | undefined) {
    this._iotEvents = value;
  }

  // kinesis - computed: false, optional: true, required: false
  private _kinesis?: IotTopicRuleKinesis[];
  public get kinesis() {
    return this._kinesis;
  }
  public set kinesis(value: IotTopicRuleKinesis[] | undefined) {
    this._kinesis = value;
  }

  // lambda - computed: false, optional: true, required: false
  private _lambda?: IotTopicRuleLambda[];
  public get lambda() {
    return this._lambda;
  }
  public set lambda(value: IotTopicRuleLambda[] | undefined) {
    this._lambda = value;
  }

  // republish - computed: false, optional: true, required: false
  private _republish?: IotTopicRuleRepublish[];
  public get republish() {
    return this._republish;
  }
  public set republish(value: IotTopicRuleRepublish[] | undefined) {
    this._republish = value;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3?: IotTopicRuleS3[];
  public get s3() {
    return this._s3;
  }
  public set s3(value: IotTopicRuleS3[] | undefined) {
    this._s3 = value;
  }

  // sns - computed: false, optional: true, required: false
  private _sns?: IotTopicRuleSns[];
  public get sns() {
    return this._sns;
  }
  public set sns(value: IotTopicRuleSns[] | undefined) {
    this._sns = value;
  }

  // sqs - computed: false, optional: true, required: false
  private _sqs?: IotTopicRuleSqs[];
  public get sqs() {
    return this._sqs;
  }
  public set sqs(value: IotTopicRuleSqs[] | undefined) {
    this._sqs = value;
  }

  // step_functions - computed: false, optional: true, required: false
  private _stepFunctions?: IotTopicRuleStepFunctions[];
  public get stepFunctions() {
    return this._stepFunctions;
  }
  public set stepFunctions(value: IotTopicRuleStepFunctions[] | undefined) {
    this._stepFunctions = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      enabled: this._enabled,
      name: this._name,
      sql: this._sql,
      sql_version: this._sqlVersion,
      tags: this._tags,
      cloudwatch_alarm: this._cloudwatchAlarm,
      cloudwatch_metric: this._cloudwatchMetric,
      dynamodb: this._dynamodb,
      dynamodbv2: this._dynamodbv2,
      elasticsearch: this._elasticsearch,
      error_action: this._errorAction,
      firehose: this._firehose,
      iot_analytics: this._iotAnalytics,
      iot_events: this._iotEvents,
      kinesis: this._kinesis,
      lambda: this._lambda,
      republish: this._republish,
      s3: this._s3,
      sns: this._sns,
      sqs: this._sqs,
      step_functions: this._stepFunctions,
    };
  }
}
