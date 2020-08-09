// https://www.terraform.io/docs/providers/aws/r/mq_broker.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "apply_immediately": {
        "type": "bool",
        "optional": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "auto_minor_version_upgrade": {
        "type": "bool",
        "optional": true
      },
      "broker_name": {
        "type": "string",
        "required": true
      },
      "deployment_mode": {
        "type": "string",
        "optional": true
      },
      "engine_type": {
        "type": "string",
        "required": true
      },
      "engine_version": {
        "type": "string",
        "required": true
      },
      "host_instance_type": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instances": {
        "type": [
          "list",
          [
            "object",
            {
              "console_url": "string",
              "endpoints": [
                "list",
                "string"
              ],
              "ip_address": "string"
            }
          ]
        ],
        "computed": true
      },
      "publicly_accessible": {
        "type": "bool",
        "optional": true
      },
      "security_groups": {
        "type": [
          "set",
          "string"
        ],
        "required": true
      },
      "subnet_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
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
      "configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "id": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "revision": {
              "type": "number",
              "optional": true,
              "computed": true
            }
          }
        },
        "max_items": 1
      },
      "encryption_options": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "kms_key_id": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "use_aws_owned_key": {
              "type": "bool",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "logs": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "audit": {
              "type": "bool",
              "optional": true
            },
            "general": {
              "type": "bool",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "maintenance_window_start_time": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "day_of_week": {
              "type": "string",
              "required": true
            },
            "time_of_day": {
              "type": "string",
              "required": true
            },
            "time_zone": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "user": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "console_access": {
              "type": "bool",
              "optional": true
            },
            "groups": {
              "type": [
                "set",
                "string"
              ],
              "optional": true
            },
            "password": {
              "type": "string",
              "required": true,
              "sensitive": true
            },
            "username": {
              "type": "string",
              "required": true
            }
          }
        },
        "min_items": 1
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

export interface MqBrokerConfig extends TerraformMetaArguments {
  readonly applyImmediately?: boolean;
  readonly autoMinorVersionUpgrade?: boolean;
  readonly brokerName: string;
  readonly deploymentMode?: string;
  readonly engineType: string;
  readonly engineVersion: string;
  readonly hostInstanceType: string;
  readonly publiclyAccessible?: boolean;
  readonly securityGroups: string[];
  readonly subnetIds?: string[];
  readonly tags?: { [key: string]: string };
  /** configuration block */
  readonly configuration?: MqBrokerConfiguration[];
  /** encryption_options block */
  readonly encryptionOptions?: MqBrokerEncryptionOptions[];
  /** logs block */
  readonly logs?: MqBrokerLogs[];
  /** maintenance_window_start_time block */
  readonly maintenanceWindowStartTime?: MqBrokerMaintenanceWindowStartTime[];
  /** user block */
  readonly user: MqBrokerUser[];
}
export class MqBrokerInstances extends ComplexComputedList {

  // console_url - computed: true, optional: false, required: true
  public get consoleUrl() {
    return this.getStringAttribute('console_url');
  }

  // endpoints - computed: true, optional: false, required: true
  public get endpoints() {
    return this.getListAttribute('endpoints');
  }

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
}
export interface MqBrokerConfiguration {
  readonly id?: string;
  readonly revision?: number;
}
export interface MqBrokerEncryptionOptions {
  readonly kmsKeyId?: string;
  readonly useAwsOwnedKey?: boolean;
}
export interface MqBrokerLogs {
  readonly audit?: boolean;
  readonly general?: boolean;
}
export interface MqBrokerMaintenanceWindowStartTime {
  readonly dayOfWeek: string;
  readonly timeOfDay: string;
  readonly timeZone: string;
}
export interface MqBrokerUser {
  readonly consoleAccess?: boolean;
  readonly groups?: string[];
  readonly password: string;
  readonly username: string;
}

// Resource

export class MqBroker extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MqBrokerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_mq_broker',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applyImmediately = config.applyImmediately;
    this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
    this._brokerName = config.brokerName;
    this._deploymentMode = config.deploymentMode;
    this._engineType = config.engineType;
    this._engineVersion = config.engineVersion;
    this._hostInstanceType = config.hostInstanceType;
    this._publiclyAccessible = config.publiclyAccessible;
    this._securityGroups = config.securityGroups;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._configuration = config.configuration;
    this._encryptionOptions = config.encryptionOptions;
    this._logs = config.logs;
    this._maintenanceWindowStartTime = config.maintenanceWindowStartTime;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_immediately - computed: false, optional: true, required: false
  private _applyImmediately?: boolean;
  public get applyImmediately() {
    return this._applyImmediately;
  }
  public set applyImmediately(value: boolean | undefined) {
    this._applyImmediately = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_minor_version_upgrade - computed: false, optional: true, required: false
  private _autoMinorVersionUpgrade?: boolean;
  public get autoMinorVersionUpgrade() {
    return this._autoMinorVersionUpgrade;
  }
  public set autoMinorVersionUpgrade(value: boolean | undefined) {
    this._autoMinorVersionUpgrade = value;
  }

  // broker_name - computed: false, optional: false, required: true
  private _brokerName: string;
  public get brokerName() {
    return this._brokerName;
  }
  public set brokerName(value: string) {
    this._brokerName = value;
  }

  // deployment_mode - computed: false, optional: true, required: false
  private _deploymentMode?: string;
  public get deploymentMode() {
    return this._deploymentMode;
  }
  public set deploymentMode(value: string | undefined) {
    this._deploymentMode = value;
  }

  // engine_type - computed: false, optional: false, required: true
  private _engineType: string;
  public get engineType() {
    return this._engineType;
  }
  public set engineType(value: string) {
    this._engineType = value;
  }

  // engine_version - computed: false, optional: false, required: true
  private _engineVersion: string;
  public get engineVersion() {
    return this._engineVersion;
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }

  // host_instance_type - computed: false, optional: false, required: true
  private _hostInstanceType: string;
  public get hostInstanceType() {
    return this._hostInstanceType;
  }
  public set hostInstanceType(value: string) {
    this._hostInstanceType = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instances - computed: true, optional: false, required: true
  public instances(index: string) {
    return new MqBrokerInstances(this, 'instances', index);
  }

  // publicly_accessible - computed: false, optional: true, required: false
  private _publiclyAccessible?: boolean;
  public get publiclyAccessible() {
    return this._publiclyAccessible;
  }
  public set publiclyAccessible(value: boolean | undefined) {
    this._publiclyAccessible = value;
  }

  // security_groups - computed: false, optional: false, required: true
  private _securityGroups: string[];
  public get securityGroups() {
    return this._securityGroups;
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[];
  public get subnetIds() {
    return this._subnetIds ?? this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[] | undefined) {
    this._subnetIds = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: MqBrokerConfiguration[];
  public get configuration() {
    return this._configuration;
  }
  public set configuration(value: MqBrokerConfiguration[] | undefined) {
    this._configuration = value;
  }

  // encryption_options - computed: false, optional: true, required: false
  private _encryptionOptions?: MqBrokerEncryptionOptions[];
  public get encryptionOptions() {
    return this._encryptionOptions;
  }
  public set encryptionOptions(value: MqBrokerEncryptionOptions[] | undefined) {
    this._encryptionOptions = value;
  }

  // logs - computed: false, optional: true, required: false
  private _logs?: MqBrokerLogs[];
  public get logs() {
    return this._logs;
  }
  public set logs(value: MqBrokerLogs[] | undefined) {
    this._logs = value;
  }

  // maintenance_window_start_time - computed: false, optional: true, required: false
  private _maintenanceWindowStartTime?: MqBrokerMaintenanceWindowStartTime[];
  public get maintenanceWindowStartTime() {
    return this._maintenanceWindowStartTime;
  }
  public set maintenanceWindowStartTime(value: MqBrokerMaintenanceWindowStartTime[] | undefined) {
    this._maintenanceWindowStartTime = value;
  }

  // user - computed: false, optional: false, required: true
  private _user: MqBrokerUser[];
  public get user() {
    return this._user;
  }
  public set user(value: MqBrokerUser[]) {
    this._user = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_immediately: this._applyImmediately,
      auto_minor_version_upgrade: this._autoMinorVersionUpgrade,
      broker_name: this._brokerName,
      deployment_mode: this._deploymentMode,
      engine_type: this._engineType,
      engine_version: this._engineVersion,
      host_instance_type: this._hostInstanceType,
      publicly_accessible: this._publiclyAccessible,
      security_groups: this._securityGroups,
      subnet_ids: this._subnetIds,
      tags: this._tags,
      configuration: this._configuration,
      encryption_options: this._encryptionOptions,
      logs: this._logs,
      maintenance_window_start_time: this._maintenanceWindowStartTime,
      user: this._user,
    };
  }
}
