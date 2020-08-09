// https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "activation_key": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "cloudwatch_log_group_arn": {
        "type": "string",
        "optional": true
      },
      "gateway_id": {
        "type": "string",
        "computed": true
      },
      "gateway_ip_address": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "gateway_name": {
        "type": "string",
        "required": true
      },
      "gateway_timezone": {
        "type": "string",
        "required": true
      },
      "gateway_type": {
        "type": "string",
        "optional": true
      },
      "gateway_vpc_endpoint": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "medium_changer_type": {
        "type": "string",
        "optional": true
      },
      "smb_guest_password": {
        "type": "string",
        "optional": true,
        "sensitive": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "tape_drive_type": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "smb_active_directory_settings": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "domain_name": {
              "type": "string",
              "required": true
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
        "max_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
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

export interface StoragegatewayGatewayConfig extends TerraformMetaArguments {
  readonly activationKey?: string;
  readonly cloudwatchLogGroupArn?: string;
  readonly gatewayIpAddress?: string;
  readonly gatewayName: string;
  readonly gatewayTimezone: string;
  readonly gatewayType?: string;
  readonly gatewayVpcEndpoint?: string;
  readonly mediumChangerType?: string;
  readonly smbGuestPassword?: string;
  readonly tags?: { [key: string]: string };
  readonly tapeDriveType?: string;
  /** smb_active_directory_settings block */
  readonly smbActiveDirectorySettings?: StoragegatewayGatewaySmbActiveDirectorySettings[];
  /** timeouts block */
  readonly timeouts?: StoragegatewayGatewayTimeouts;
}
export interface StoragegatewayGatewaySmbActiveDirectorySettings {
  readonly domainName: string;
  readonly password: string;
  readonly username: string;
}
export interface StoragegatewayGatewayTimeouts {
  readonly create?: string;
}

// Resource

export class StoragegatewayGateway extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StoragegatewayGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_storagegateway_gateway',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._activationKey = config.activationKey;
    this._cloudwatchLogGroupArn = config.cloudwatchLogGroupArn;
    this._gatewayIpAddress = config.gatewayIpAddress;
    this._gatewayName = config.gatewayName;
    this._gatewayTimezone = config.gatewayTimezone;
    this._gatewayType = config.gatewayType;
    this._gatewayVpcEndpoint = config.gatewayVpcEndpoint;
    this._mediumChangerType = config.mediumChangerType;
    this._smbGuestPassword = config.smbGuestPassword;
    this._tags = config.tags;
    this._tapeDriveType = config.tapeDriveType;
    this._smbActiveDirectorySettings = config.smbActiveDirectorySettings;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_key - computed: true, optional: true, required: false
  private _activationKey?: string;
  public get activationKey() {
    return this._activationKey ?? this.getStringAttribute('activation_key');
  }
  public set activationKey(value: string | undefined) {
    this._activationKey = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cloudwatch_log_group_arn - computed: false, optional: true, required: false
  private _cloudwatchLogGroupArn?: string;
  public get cloudwatchLogGroupArn() {
    return this._cloudwatchLogGroupArn;
  }
  public set cloudwatchLogGroupArn(value: string | undefined) {
    this._cloudwatchLogGroupArn = value;
  }

  // gateway_id - computed: true, optional: false, required: true
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // gateway_ip_address - computed: true, optional: true, required: false
  private _gatewayIpAddress?: string;
  public get gatewayIpAddress() {
    return this._gatewayIpAddress ?? this.getStringAttribute('gateway_ip_address');
  }
  public set gatewayIpAddress(value: string | undefined) {
    this._gatewayIpAddress = value;
  }

  // gateway_name - computed: false, optional: false, required: true
  private _gatewayName: string;
  public get gatewayName() {
    return this._gatewayName;
  }
  public set gatewayName(value: string) {
    this._gatewayName = value;
  }

  // gateway_timezone - computed: false, optional: false, required: true
  private _gatewayTimezone: string;
  public get gatewayTimezone() {
    return this._gatewayTimezone;
  }
  public set gatewayTimezone(value: string) {
    this._gatewayTimezone = value;
  }

  // gateway_type - computed: false, optional: true, required: false
  private _gatewayType?: string;
  public get gatewayType() {
    return this._gatewayType;
  }
  public set gatewayType(value: string | undefined) {
    this._gatewayType = value;
  }

  // gateway_vpc_endpoint - computed: false, optional: true, required: false
  private _gatewayVpcEndpoint?: string;
  public get gatewayVpcEndpoint() {
    return this._gatewayVpcEndpoint;
  }
  public set gatewayVpcEndpoint(value: string | undefined) {
    this._gatewayVpcEndpoint = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // medium_changer_type - computed: false, optional: true, required: false
  private _mediumChangerType?: string;
  public get mediumChangerType() {
    return this._mediumChangerType;
  }
  public set mediumChangerType(value: string | undefined) {
    this._mediumChangerType = value;
  }

  // smb_guest_password - computed: false, optional: true, required: false
  private _smbGuestPassword?: string;
  public get smbGuestPassword() {
    return this._smbGuestPassword;
  }
  public set smbGuestPassword(value: string | undefined) {
    this._smbGuestPassword = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // tape_drive_type - computed: false, optional: true, required: false
  private _tapeDriveType?: string;
  public get tapeDriveType() {
    return this._tapeDriveType;
  }
  public set tapeDriveType(value: string | undefined) {
    this._tapeDriveType = value;
  }

  // smb_active_directory_settings - computed: false, optional: true, required: false
  private _smbActiveDirectorySettings?: StoragegatewayGatewaySmbActiveDirectorySettings[];
  public get smbActiveDirectorySettings() {
    return this._smbActiveDirectorySettings;
  }
  public set smbActiveDirectorySettings(value: StoragegatewayGatewaySmbActiveDirectorySettings[] | undefined) {
    this._smbActiveDirectorySettings = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StoragegatewayGatewayTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: StoragegatewayGatewayTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      activation_key: this._activationKey,
      cloudwatch_log_group_arn: this._cloudwatchLogGroupArn,
      gateway_ip_address: this._gatewayIpAddress,
      gateway_name: this._gatewayName,
      gateway_timezone: this._gatewayTimezone,
      gateway_type: this._gatewayType,
      gateway_vpc_endpoint: this._gatewayVpcEndpoint,
      medium_changer_type: this._mediumChangerType,
      smb_guest_password: this._smbGuestPassword,
      tags: this._tags,
      tape_drive_type: this._tapeDriveType,
      smb_active_directory_settings: this._smbActiveDirectorySettings,
      timeouts: this._timeouts,
    };
  }
}
