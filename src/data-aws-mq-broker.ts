// https://www.terraform.io/docs/providers/aws/r/data_aws_mq_broker.html
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
      "auto_minor_version_upgrade": {
        "type": "bool",
        "computed": true
      },
      "broker_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "broker_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "configuration": {
        "type": [
          "list",
          [
            "object",
            {
              "id": "string",
              "revision": "number"
            }
          ]
        ],
        "computed": true
      },
      "deployment_mode": {
        "type": "string",
        "computed": true
      },
      "encryption_options": {
        "type": [
          "list",
          [
            "object",
            {
              "kms_key_id": "string",
              "use_aws_owned_key": "bool"
            }
          ]
        ],
        "computed": true
      },
      "engine_type": {
        "type": "string",
        "computed": true
      },
      "engine_version": {
        "type": "string",
        "computed": true
      },
      "host_instance_type": {
        "type": "string",
        "computed": true
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
      "maintenance_window_start_time": {
        "type": [
          "list",
          [
            "object",
            {
              "day_of_week": "string",
              "time_of_day": "string",
              "time_zone": "string"
            }
          ]
        ],
        "computed": true
      },
      "publicly_accessible": {
        "type": "bool",
        "computed": true
      },
      "security_groups": {
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
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "user": {
        "type": [
          "set",
          [
            "object",
            {
              "console_access": "bool",
              "groups": [
                "set",
                "string"
              ],
              "username": "string"
            }
          ]
        ],
        "computed": true
      }
    },
    "block_types": {
      "logs": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "audit": {
              "type": "bool",
              "computed": true
            },
            "general": {
              "type": "bool",
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
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsMqBrokerConfig extends TerraformMetaArguments {
  readonly brokerId?: string;
  readonly brokerName?: string;
  readonly tags?: { [key: string]: string };
  /** logs block */
  readonly logs?: DataAwsMqBrokerLogs[];
}
export class DataAwsMqBrokerConfiguration extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // revision - computed: true, optional: false, required: true
  public get revision() {
    return this.getNumberAttribute('revision');
  }
}
export class DataAwsMqBrokerEncryptionOptions extends ComplexComputedList {

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // use_aws_owned_key - computed: true, optional: false, required: true
  public get useAwsOwnedKey() {
    return this.getBooleanAttribute('use_aws_owned_key');
  }
}
export class DataAwsMqBrokerInstances extends ComplexComputedList {

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
export class DataAwsMqBrokerMaintenanceWindowStartTime extends ComplexComputedList {

  // day_of_week - computed: true, optional: false, required: true
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }

  // time_of_day - computed: true, optional: false, required: true
  public get timeOfDay() {
    return this.getStringAttribute('time_of_day');
  }

  // time_zone - computed: true, optional: false, required: true
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
}
export class DataAwsMqBrokerUser extends ComplexComputedList {

  // console_access - computed: true, optional: false, required: true
  public get consoleAccess() {
    return this.getBooleanAttribute('console_access');
  }

  // groups - computed: true, optional: false, required: true
  public get groups() {
    return this.getListAttribute('groups');
  }

  // username - computed: true, optional: false, required: true
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAwsMqBrokerLogs {
}

// Resource

export class DataAwsMqBroker extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsMqBrokerConfig = {}) {
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
    this._brokerId = config.brokerId;
    this._brokerName = config.brokerName;
    this._tags = config.tags;
    this._logs = config.logs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_minor_version_upgrade - computed: true, optional: false, required: true
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }

  // broker_id - computed: true, optional: true, required: false
  private _brokerId?: string;
  public get brokerId() {
    return this._brokerId ?? this.getStringAttribute('broker_id');
  }
  public set brokerId(value: string | undefined) {
    this._brokerId = value;
  }

  // broker_name - computed: true, optional: true, required: false
  private _brokerName?: string;
  public get brokerName() {
    return this._brokerName ?? this.getStringAttribute('broker_name');
  }
  public set brokerName(value: string | undefined) {
    this._brokerName = value;
  }

  // configuration - computed: true, optional: false, required: true
  public configuration(index: string) {
    return new DataAwsMqBrokerConfiguration(this, 'configuration', index);
  }

  // deployment_mode - computed: true, optional: false, required: true
  public get deploymentMode() {
    return this.getStringAttribute('deployment_mode');
  }

  // encryption_options - computed: true, optional: false, required: true
  public encryptionOptions(index: string) {
    return new DataAwsMqBrokerEncryptionOptions(this, 'encryption_options', index);
  }

  // engine_type - computed: true, optional: false, required: true
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }

  // engine_version - computed: true, optional: false, required: true
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // host_instance_type - computed: true, optional: false, required: true
  public get hostInstanceType() {
    return this.getStringAttribute('host_instance_type');
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
    return new DataAwsMqBrokerInstances(this, 'instances', index);
  }

  // maintenance_window_start_time - computed: true, optional: false, required: true
  public maintenanceWindowStartTime(index: string) {
    return new DataAwsMqBrokerMaintenanceWindowStartTime(this, 'maintenance_window_start_time', index);
  }

  // publicly_accessible - computed: true, optional: false, required: true
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }

  // security_groups - computed: true, optional: false, required: true
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // subnet_ids - computed: true, optional: false, required: true
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // user - computed: true, optional: false, required: true
  public user(index: string) {
    return new DataAwsMqBrokerUser(this, 'user', index);
  }

  // logs - computed: false, optional: true, required: false
  private _logs?: DataAwsMqBrokerLogs[];
  public get logs() {
    return this._logs;
  }
  public set logs(value: DataAwsMqBrokerLogs[] | undefined) {
    this._logs = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      broker_id: this._brokerId,
      broker_name: this._brokerName,
      tags: this._tags,
      logs: this._logs,
    };
  }
}
