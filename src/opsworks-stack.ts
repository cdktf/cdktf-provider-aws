// https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "agent_version": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "berkshelf_version": {
        "type": "string",
        "optional": true
      },
      "color": {
        "type": "string",
        "optional": true
      },
      "configuration_manager_name": {
        "type": "string",
        "optional": true
      },
      "configuration_manager_version": {
        "type": "string",
        "optional": true
      },
      "custom_json": {
        "type": "string",
        "optional": true
      },
      "default_availability_zone": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "default_instance_profile_arn": {
        "type": "string",
        "required": true
      },
      "default_os": {
        "type": "string",
        "optional": true
      },
      "default_root_device_type": {
        "type": "string",
        "optional": true
      },
      "default_ssh_key_name": {
        "type": "string",
        "optional": true
      },
      "default_subnet_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "hostname_theme": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "manage_berkshelf": {
        "type": "bool",
        "optional": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "region": {
        "type": "string",
        "required": true
      },
      "service_role_arn": {
        "type": "string",
        "required": true
      },
      "stack_endpoint": {
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
      "use_custom_cookbooks": {
        "type": "bool",
        "optional": true
      },
      "use_opsworks_security_groups": {
        "type": "bool",
        "optional": true
      },
      "vpc_id": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "custom_cookbooks_source": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "password": {
              "type": "string",
              "optional": true,
              "sensitive": true
            },
            "revision": {
              "type": "string",
              "optional": true
            },
            "ssh_key": {
              "type": "string",
              "optional": true,
              "sensitive": true
            },
            "type": {
              "type": "string",
              "required": true
            },
            "url": {
              "type": "string",
              "required": true
            },
            "username": {
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

export interface OpsworksStackConfig extends TerraformMetaArguments {
  readonly agentVersion?: string;
  readonly berkshelfVersion?: string;
  readonly color?: string;
  readonly configurationManagerName?: string;
  readonly configurationManagerVersion?: string;
  readonly customJson?: string;
  readonly defaultAvailabilityZone?: string;
  readonly defaultInstanceProfileArn: string;
  readonly defaultOs?: string;
  readonly defaultRootDeviceType?: string;
  readonly defaultSshKeyName?: string;
  readonly defaultSubnetId?: string;
  readonly hostnameTheme?: string;
  readonly manageBerkshelf?: boolean;
  readonly name: string;
  readonly region: string;
  readonly serviceRoleArn: string;
  readonly tags?: { [key: string]: string };
  readonly useCustomCookbooks?: boolean;
  readonly useOpsworksSecurityGroups?: boolean;
  readonly vpcId?: string;
  /** custom_cookbooks_source block */
  readonly customCookbooksSource?: OpsworksStackCustomCookbooksSource[];
}
export interface OpsworksStackCustomCookbooksSource {
  readonly password?: string;
  readonly revision?: string;
  readonly sshKey?: string;
  readonly type: string;
  readonly url: string;
  readonly username?: string;
}

// Resource

export class OpsworksStack extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OpsworksStackConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opsworks_stack',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._agentVersion = config.agentVersion;
    this._berkshelfVersion = config.berkshelfVersion;
    this._color = config.color;
    this._configurationManagerName = config.configurationManagerName;
    this._configurationManagerVersion = config.configurationManagerVersion;
    this._customJson = config.customJson;
    this._defaultAvailabilityZone = config.defaultAvailabilityZone;
    this._defaultInstanceProfileArn = config.defaultInstanceProfileArn;
    this._defaultOs = config.defaultOs;
    this._defaultRootDeviceType = config.defaultRootDeviceType;
    this._defaultSshKeyName = config.defaultSshKeyName;
    this._defaultSubnetId = config.defaultSubnetId;
    this._hostnameTheme = config.hostnameTheme;
    this._manageBerkshelf = config.manageBerkshelf;
    this._name = config.name;
    this._region = config.region;
    this._serviceRoleArn = config.serviceRoleArn;
    this._tags = config.tags;
    this._useCustomCookbooks = config.useCustomCookbooks;
    this._useOpsworksSecurityGroups = config.useOpsworksSecurityGroups;
    this._vpcId = config.vpcId;
    this._customCookbooksSource = config.customCookbooksSource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_version - computed: true, optional: true, required: false
  private _agentVersion?: string;
  public get agentVersion() {
    return this._agentVersion ?? this.getStringAttribute('agent_version');
  }
  public set agentVersion(value: string | undefined) {
    this._agentVersion = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // berkshelf_version - computed: false, optional: true, required: false
  private _berkshelfVersion?: string;
  public get berkshelfVersion() {
    return this._berkshelfVersion;
  }
  public set berkshelfVersion(value: string | undefined) {
    this._berkshelfVersion = value;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string;
  public get color() {
    return this._color;
  }
  public set color(value: string | undefined) {
    this._color = value;
  }

  // configuration_manager_name - computed: false, optional: true, required: false
  private _configurationManagerName?: string;
  public get configurationManagerName() {
    return this._configurationManagerName;
  }
  public set configurationManagerName(value: string | undefined) {
    this._configurationManagerName = value;
  }

  // configuration_manager_version - computed: false, optional: true, required: false
  private _configurationManagerVersion?: string;
  public get configurationManagerVersion() {
    return this._configurationManagerVersion;
  }
  public set configurationManagerVersion(value: string | undefined) {
    this._configurationManagerVersion = value;
  }

  // custom_json - computed: false, optional: true, required: false
  private _customJson?: string;
  public get customJson() {
    return this._customJson;
  }
  public set customJson(value: string | undefined) {
    this._customJson = value;
  }

  // default_availability_zone - computed: true, optional: true, required: false
  private _defaultAvailabilityZone?: string;
  public get defaultAvailabilityZone() {
    return this._defaultAvailabilityZone ?? this.getStringAttribute('default_availability_zone');
  }
  public set defaultAvailabilityZone(value: string | undefined) {
    this._defaultAvailabilityZone = value;
  }

  // default_instance_profile_arn - computed: false, optional: false, required: true
  private _defaultInstanceProfileArn: string;
  public get defaultInstanceProfileArn() {
    return this._defaultInstanceProfileArn;
  }
  public set defaultInstanceProfileArn(value: string) {
    this._defaultInstanceProfileArn = value;
  }

  // default_os - computed: false, optional: true, required: false
  private _defaultOs?: string;
  public get defaultOs() {
    return this._defaultOs;
  }
  public set defaultOs(value: string | undefined) {
    this._defaultOs = value;
  }

  // default_root_device_type - computed: false, optional: true, required: false
  private _defaultRootDeviceType?: string;
  public get defaultRootDeviceType() {
    return this._defaultRootDeviceType;
  }
  public set defaultRootDeviceType(value: string | undefined) {
    this._defaultRootDeviceType = value;
  }

  // default_ssh_key_name - computed: false, optional: true, required: false
  private _defaultSshKeyName?: string;
  public get defaultSshKeyName() {
    return this._defaultSshKeyName;
  }
  public set defaultSshKeyName(value: string | undefined) {
    this._defaultSshKeyName = value;
  }

  // default_subnet_id - computed: true, optional: true, required: false
  private _defaultSubnetId?: string;
  public get defaultSubnetId() {
    return this._defaultSubnetId ?? this.getStringAttribute('default_subnet_id');
  }
  public set defaultSubnetId(value: string | undefined) {
    this._defaultSubnetId = value;
  }

  // hostname_theme - computed: false, optional: true, required: false
  private _hostnameTheme?: string;
  public get hostnameTheme() {
    return this._hostnameTheme;
  }
  public set hostnameTheme(value: string | undefined) {
    this._hostnameTheme = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // manage_berkshelf - computed: false, optional: true, required: false
  private _manageBerkshelf?: boolean;
  public get manageBerkshelf() {
    return this._manageBerkshelf;
  }
  public set manageBerkshelf(value: boolean | undefined) {
    this._manageBerkshelf = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // region - computed: false, optional: false, required: true
  private _region: string;
  public get region() {
    return this._region;
  }
  public set region(value: string) {
    this._region = value;
  }

  // service_role_arn - computed: false, optional: false, required: true
  private _serviceRoleArn: string;
  public get serviceRoleArn() {
    return this._serviceRoleArn;
  }
  public set serviceRoleArn(value: string) {
    this._serviceRoleArn = value;
  }

  // stack_endpoint - computed: true, optional: false, required: true
  public get stackEndpoint() {
    return this.getStringAttribute('stack_endpoint');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // use_custom_cookbooks - computed: false, optional: true, required: false
  private _useCustomCookbooks?: boolean;
  public get useCustomCookbooks() {
    return this._useCustomCookbooks;
  }
  public set useCustomCookbooks(value: boolean | undefined) {
    this._useCustomCookbooks = value;
  }

  // use_opsworks_security_groups - computed: false, optional: true, required: false
  private _useOpsworksSecurityGroups?: boolean;
  public get useOpsworksSecurityGroups() {
    return this._useOpsworksSecurityGroups;
  }
  public set useOpsworksSecurityGroups(value: boolean | undefined) {
    this._useOpsworksSecurityGroups = value;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string;
  public get vpcId() {
    return this._vpcId ?? this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string | undefined) {
    this._vpcId = value;
  }

  // custom_cookbooks_source - computed: false, optional: true, required: false
  private _customCookbooksSource?: OpsworksStackCustomCookbooksSource[];
  public get customCookbooksSource() {
    return this._customCookbooksSource;
  }
  public set customCookbooksSource(value: OpsworksStackCustomCookbooksSource[] | undefined) {
    this._customCookbooksSource = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_version: this._agentVersion,
      berkshelf_version: this._berkshelfVersion,
      color: this._color,
      configuration_manager_name: this._configurationManagerName,
      configuration_manager_version: this._configurationManagerVersion,
      custom_json: this._customJson,
      default_availability_zone: this._defaultAvailabilityZone,
      default_instance_profile_arn: this._defaultInstanceProfileArn,
      default_os: this._defaultOs,
      default_root_device_type: this._defaultRootDeviceType,
      default_ssh_key_name: this._defaultSshKeyName,
      default_subnet_id: this._defaultSubnetId,
      hostname_theme: this._hostnameTheme,
      manage_berkshelf: this._manageBerkshelf,
      name: this._name,
      region: this._region,
      service_role_arn: this._serviceRoleArn,
      tags: this._tags,
      use_custom_cookbooks: this._useCustomCookbooks,
      use_opsworks_security_groups: this._useOpsworksSecurityGroups,
      vpc_id: this._vpcId,
      custom_cookbooks_source: this._customCookbooksSource,
    };
  }
}
