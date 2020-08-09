// https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "description": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "max_concurrency": {
        "type": "string",
        "required": true
      },
      "max_errors": {
        "type": "string",
        "required": true
      },
      "name": {
        "type": "string",
        "optional": true
      },
      "priority": {
        "type": "number",
        "optional": true
      },
      "service_role_arn": {
        "type": "string",
        "required": true
      },
      "task_arn": {
        "type": "string",
        "required": true
      },
      "task_type": {
        "type": "string",
        "required": true
      },
      "window_id": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "logging_info": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "s3_bucket_name": {
              "type": "string",
              "required": true
            },
            "s3_bucket_prefix": {
              "type": "string",
              "optional": true
            },
            "s3_region": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "targets": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "key": {
              "type": "string",
              "required": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        },
        "min_items": 1
      },
      "task_invocation_parameters": {
        "nesting_mode": "list",
        "block": {
          "block_types": {
            "automation_parameters": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "document_version": {
                    "type": "string",
                    "optional": true
                  }
                },
                "block_types": {
                  "parameter": {
                    "nesting_mode": "set",
                    "block": {
                      "attributes": {
                        "name": {
                          "type": "string",
                          "required": true
                        },
                        "values": {
                          "type": [
                            "list",
                            "string"
                          ],
                          "required": true
                        }
                      }
                    }
                  }
                }
              },
              "max_items": 1
            },
            "lambda_parameters": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "client_context": {
                    "type": "string",
                    "optional": true
                  },
                  "payload": {
                    "type": "string",
                    "optional": true,
                    "sensitive": true
                  },
                  "qualifier": {
                    "type": "string",
                    "optional": true
                  }
                }
              },
              "max_items": 1
            },
            "run_command_parameters": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "comment": {
                    "type": "string",
                    "optional": true
                  },
                  "document_hash": {
                    "type": "string",
                    "optional": true
                  },
                  "document_hash_type": {
                    "type": "string",
                    "optional": true
                  },
                  "output_s3_bucket": {
                    "type": "string",
                    "optional": true
                  },
                  "output_s3_key_prefix": {
                    "type": "string",
                    "optional": true
                  },
                  "service_role_arn": {
                    "type": "string",
                    "optional": true
                  },
                  "timeout_seconds": {
                    "type": "number",
                    "optional": true
                  }
                },
                "block_types": {
                  "notification_config": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "notification_arn": {
                          "type": "string",
                          "optional": true
                        },
                        "notification_events": {
                          "type": [
                            "list",
                            "string"
                          ],
                          "optional": true
                        },
                        "notification_type": {
                          "type": "string",
                          "optional": true
                        }
                      }
                    },
                    "max_items": 1
                  },
                  "parameter": {
                    "nesting_mode": "set",
                    "block": {
                      "attributes": {
                        "name": {
                          "type": "string",
                          "required": true
                        },
                        "values": {
                          "type": [
                            "list",
                            "string"
                          ],
                          "required": true
                        }
                      }
                    }
                  }
                }
              },
              "max_items": 1
            },
            "step_functions_parameters": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "input": {
                    "type": "string",
                    "optional": true,
                    "sensitive": true
                  },
                  "name": {
                    "type": "string",
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
      "task_parameters": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
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

export interface SsmMaintenanceWindowTaskConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly maxConcurrency: string;
  readonly maxErrors: string;
  readonly name?: string;
  readonly priority?: number;
  readonly serviceRoleArn: string;
  readonly taskArn: string;
  readonly taskType: string;
  readonly windowId: string;
  /** logging_info block */
  readonly loggingInfo?: SsmMaintenanceWindowTaskLoggingInfo[];
  /** targets block */
  readonly targets: SsmMaintenanceWindowTaskTargets[];
  /** task_invocation_parameters block */
  readonly taskInvocationParameters?: SsmMaintenanceWindowTaskTaskInvocationParameters[];
  /** task_parameters block */
  readonly taskParameters?: SsmMaintenanceWindowTaskTaskParameters[];
}
export interface SsmMaintenanceWindowTaskLoggingInfo {
  readonly s3BucketName: string;
  readonly s3BucketPrefix?: string;
  readonly s3Region: string;
}
export interface SsmMaintenanceWindowTaskTargets {
  readonly key: string;
  readonly values: string[];
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter {
  readonly name: string;
  readonly values: string[];
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters {
  readonly documentVersion?: string;
  /** parameter block */
  readonly parameter?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[];
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters {
  readonly clientContext?: string;
  readonly payload?: string;
  readonly qualifier?: string;
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig {
  readonly notificationArn?: string;
  readonly notificationEvents?: string[];
  readonly notificationType?: string;
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter {
  readonly name: string;
  readonly values: string[];
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters {
  readonly comment?: string;
  readonly documentHash?: string;
  readonly documentHashType?: string;
  readonly outputS3Bucket?: string;
  readonly outputS3KeyPrefix?: string;
  readonly serviceRoleArn?: string;
  readonly timeoutSeconds?: number;
  /** notification_config block */
  readonly notificationConfig?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig[];
  /** parameter block */
  readonly parameter?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[];
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters {
  readonly input?: string;
  readonly name?: string;
}
export interface SsmMaintenanceWindowTaskTaskInvocationParameters {
  /** automation_parameters block */
  readonly automationParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters[];
  /** lambda_parameters block */
  readonly lambdaParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters[];
  /** run_command_parameters block */
  readonly runCommandParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters[];
  /** step_functions_parameters block */
  readonly stepFunctionsParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters[];
}
export interface SsmMaintenanceWindowTaskTaskParameters {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class SsmMaintenanceWindowTask extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SsmMaintenanceWindowTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_maintenance_window_task',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._maxConcurrency = config.maxConcurrency;
    this._maxErrors = config.maxErrors;
    this._name = config.name;
    this._priority = config.priority;
    this._serviceRoleArn = config.serviceRoleArn;
    this._taskArn = config.taskArn;
    this._taskType = config.taskType;
    this._windowId = config.windowId;
    this._loggingInfo = config.loggingInfo;
    this._targets = config.targets;
    this._taskInvocationParameters = config.taskInvocationParameters;
    this._taskParameters = config.taskParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // max_concurrency - computed: false, optional: false, required: true
  private _maxConcurrency: string;
  public get maxConcurrency() {
    return this._maxConcurrency;
  }
  public set maxConcurrency(value: string) {
    this._maxConcurrency = value;
  }

  // max_errors - computed: false, optional: false, required: true
  private _maxErrors: string;
  public get maxErrors() {
    return this._maxErrors;
  }
  public set maxErrors(value: string) {
    this._maxErrors = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number;
  public get priority() {
    return this._priority;
  }
  public set priority(value: number | undefined) {
    this._priority = value;
  }

  // service_role_arn - computed: false, optional: false, required: true
  private _serviceRoleArn: string;
  public get serviceRoleArn() {
    return this._serviceRoleArn;
  }
  public set serviceRoleArn(value: string) {
    this._serviceRoleArn = value;
  }

  // task_arn - computed: false, optional: false, required: true
  private _taskArn: string;
  public get taskArn() {
    return this._taskArn;
  }
  public set taskArn(value: string) {
    this._taskArn = value;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType: string;
  public get taskType() {
    return this._taskType;
  }
  public set taskType(value: string) {
    this._taskType = value;
  }

  // window_id - computed: false, optional: false, required: true
  private _windowId: string;
  public get windowId() {
    return this._windowId;
  }
  public set windowId(value: string) {
    this._windowId = value;
  }

  // logging_info - computed: false, optional: true, required: false
  private _loggingInfo?: SsmMaintenanceWindowTaskLoggingInfo[];
  public get loggingInfo() {
    return this._loggingInfo;
  }
  public set loggingInfo(value: SsmMaintenanceWindowTaskLoggingInfo[] | undefined) {
    this._loggingInfo = value;
  }

  // targets - computed: false, optional: false, required: true
  private _targets: SsmMaintenanceWindowTaskTargets[];
  public get targets() {
    return this._targets;
  }
  public set targets(value: SsmMaintenanceWindowTaskTargets[]) {
    this._targets = value;
  }

  // task_invocation_parameters - computed: false, optional: true, required: false
  private _taskInvocationParameters?: SsmMaintenanceWindowTaskTaskInvocationParameters[];
  public get taskInvocationParameters() {
    return this._taskInvocationParameters;
  }
  public set taskInvocationParameters(value: SsmMaintenanceWindowTaskTaskInvocationParameters[] | undefined) {
    this._taskInvocationParameters = value;
  }

  // task_parameters - computed: false, optional: true, required: false
  private _taskParameters?: SsmMaintenanceWindowTaskTaskParameters[];
  public get taskParameters() {
    return this._taskParameters;
  }
  public set taskParameters(value: SsmMaintenanceWindowTaskTaskParameters[] | undefined) {
    this._taskParameters = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      max_concurrency: this._maxConcurrency,
      max_errors: this._maxErrors,
      name: this._name,
      priority: this._priority,
      service_role_arn: this._serviceRoleArn,
      task_arn: this._taskArn,
      task_type: this._taskType,
      window_id: this._windowId,
      logging_info: this._loggingInfo,
      targets: this._targets,
      task_invocation_parameters: this._taskInvocationParameters,
      task_parameters: this._taskParameters,
    };
  }
}
