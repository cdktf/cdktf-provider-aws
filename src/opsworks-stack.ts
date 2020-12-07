// https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpsworksStackConfig extends cdktf.TerraformMetaArguments {
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

function opsworksStackCustomCookbooksSourceToTerraform(struct?: OpsworksStackCustomCookbooksSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    revision: cdktf.stringToTerraform(struct!.revision),
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


// Resource

export class OpsworksStack extends cdktf.TerraformResource {

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
    return this.getStringAttribute('agent_version');
  }
  public set agentVersion(value: string) {
    this._agentVersion = value;
  }
  public resetAgentVersion() {
    this._agentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentVersionInput() {
    return this._agentVersion
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // berkshelf_version - computed: false, optional: true, required: false
  private _berkshelfVersion?: string;
  public get berkshelfVersion() {
    return this.getStringAttribute('berkshelf_version');
  }
  public set berkshelfVersion(value: string ) {
    this._berkshelfVersion = value;
  }
  public resetBerkshelfVersion() {
    this._berkshelfVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get berkshelfVersionInput() {
    return this._berkshelfVersion
  }

  // color - computed: false, optional: true, required: false
  private _color?: string;
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string ) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color
  }

  // configuration_manager_name - computed: false, optional: true, required: false
  private _configurationManagerName?: string;
  public get configurationManagerName() {
    return this.getStringAttribute('configuration_manager_name');
  }
  public set configurationManagerName(value: string ) {
    this._configurationManagerName = value;
  }
  public resetConfigurationManagerName() {
    this._configurationManagerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationManagerNameInput() {
    return this._configurationManagerName
  }

  // configuration_manager_version - computed: false, optional: true, required: false
  private _configurationManagerVersion?: string;
  public get configurationManagerVersion() {
    return this.getStringAttribute('configuration_manager_version');
  }
  public set configurationManagerVersion(value: string ) {
    this._configurationManagerVersion = value;
  }
  public resetConfigurationManagerVersion() {
    this._configurationManagerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationManagerVersionInput() {
    return this._configurationManagerVersion
  }

  // custom_json - computed: false, optional: true, required: false
  private _customJson?: string;
  public get customJson() {
    return this.getStringAttribute('custom_json');
  }
  public set customJson(value: string ) {
    this._customJson = value;
  }
  public resetCustomJson() {
    this._customJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customJsonInput() {
    return this._customJson
  }

  // default_availability_zone - computed: true, optional: true, required: false
  private _defaultAvailabilityZone?: string;
  public get defaultAvailabilityZone() {
    return this.getStringAttribute('default_availability_zone');
  }
  public set defaultAvailabilityZone(value: string) {
    this._defaultAvailabilityZone = value;
  }
  public resetDefaultAvailabilityZone() {
    this._defaultAvailabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAvailabilityZoneInput() {
    return this._defaultAvailabilityZone
  }

  // default_instance_profile_arn - computed: false, optional: false, required: true
  private _defaultInstanceProfileArn: string;
  public get defaultInstanceProfileArn() {
    return this.getStringAttribute('default_instance_profile_arn');
  }
  public set defaultInstanceProfileArn(value: string) {
    this._defaultInstanceProfileArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInstanceProfileArnInput() {
    return this._defaultInstanceProfileArn
  }

  // default_os - computed: false, optional: true, required: false
  private _defaultOs?: string;
  public get defaultOs() {
    return this.getStringAttribute('default_os');
  }
  public set defaultOs(value: string ) {
    this._defaultOs = value;
  }
  public resetDefaultOs() {
    this._defaultOs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOsInput() {
    return this._defaultOs
  }

  // default_root_device_type - computed: false, optional: true, required: false
  private _defaultRootDeviceType?: string;
  public get defaultRootDeviceType() {
    return this.getStringAttribute('default_root_device_type');
  }
  public set defaultRootDeviceType(value: string ) {
    this._defaultRootDeviceType = value;
  }
  public resetDefaultRootDeviceType() {
    this._defaultRootDeviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRootDeviceTypeInput() {
    return this._defaultRootDeviceType
  }

  // default_ssh_key_name - computed: false, optional: true, required: false
  private _defaultSshKeyName?: string;
  public get defaultSshKeyName() {
    return this.getStringAttribute('default_ssh_key_name');
  }
  public set defaultSshKeyName(value: string ) {
    this._defaultSshKeyName = value;
  }
  public resetDefaultSshKeyName() {
    this._defaultSshKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSshKeyNameInput() {
    return this._defaultSshKeyName
  }

  // default_subnet_id - computed: true, optional: true, required: false
  private _defaultSubnetId?: string;
  public get defaultSubnetId() {
    return this.getStringAttribute('default_subnet_id');
  }
  public set defaultSubnetId(value: string) {
    this._defaultSubnetId = value;
  }
  public resetDefaultSubnetId() {
    this._defaultSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSubnetIdInput() {
    return this._defaultSubnetId
  }

  // hostname_theme - computed: false, optional: true, required: false
  private _hostnameTheme?: string;
  public get hostnameTheme() {
    return this.getStringAttribute('hostname_theme');
  }
  public set hostnameTheme(value: string ) {
    this._hostnameTheme = value;
  }
  public resetHostnameTheme() {
    this._hostnameTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameThemeInput() {
    return this._hostnameTheme
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // manage_berkshelf - computed: false, optional: true, required: false
  private _manageBerkshelf?: boolean;
  public get manageBerkshelf() {
    return this.getBooleanAttribute('manage_berkshelf');
  }
  public set manageBerkshelf(value: boolean ) {
    this._manageBerkshelf = value;
  }
  public resetManageBerkshelf() {
    this._manageBerkshelf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageBerkshelfInput() {
    return this._manageBerkshelf
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // region - computed: false, optional: false, required: true
  private _region: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // service_role_arn - computed: false, optional: false, required: true
  private _serviceRoleArn: string;
  public get serviceRoleArn() {
    return this.getStringAttribute('service_role_arn');
  }
  public set serviceRoleArn(value: string) {
    this._serviceRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleArnInput() {
    return this._serviceRoleArn
  }

  // stack_endpoint - computed: true, optional: false, required: false
  public get stackEndpoint() {
    return this.getStringAttribute('stack_endpoint');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // use_custom_cookbooks - computed: false, optional: true, required: false
  private _useCustomCookbooks?: boolean;
  public get useCustomCookbooks() {
    return this.getBooleanAttribute('use_custom_cookbooks');
  }
  public set useCustomCookbooks(value: boolean ) {
    this._useCustomCookbooks = value;
  }
  public resetUseCustomCookbooks() {
    this._useCustomCookbooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCustomCookbooksInput() {
    return this._useCustomCookbooks
  }

  // use_opsworks_security_groups - computed: false, optional: true, required: false
  private _useOpsworksSecurityGroups?: boolean;
  public get useOpsworksSecurityGroups() {
    return this.getBooleanAttribute('use_opsworks_security_groups');
  }
  public set useOpsworksSecurityGroups(value: boolean ) {
    this._useOpsworksSecurityGroups = value;
  }
  public resetUseOpsworksSecurityGroups() {
    this._useOpsworksSecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOpsworksSecurityGroupsInput() {
    return this._useOpsworksSecurityGroups
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string;
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // custom_cookbooks_source - computed: false, optional: true, required: false
  private _customCookbooksSource?: OpsworksStackCustomCookbooksSource[];
  public get customCookbooksSource() {
    return this.interpolationForAttribute('custom_cookbooks_source') as any;
  }
  public set customCookbooksSource(value: OpsworksStackCustomCookbooksSource[] ) {
    this._customCookbooksSource = value;
  }
  public resetCustomCookbooksSource() {
    this._customCookbooksSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCookbooksSourceInput() {
    return this._customCookbooksSource
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_version: cdktf.stringToTerraform(this._agentVersion),
      berkshelf_version: cdktf.stringToTerraform(this._berkshelfVersion),
      color: cdktf.stringToTerraform(this._color),
      configuration_manager_name: cdktf.stringToTerraform(this._configurationManagerName),
      configuration_manager_version: cdktf.stringToTerraform(this._configurationManagerVersion),
      custom_json: cdktf.stringToTerraform(this._customJson),
      default_availability_zone: cdktf.stringToTerraform(this._defaultAvailabilityZone),
      default_instance_profile_arn: cdktf.stringToTerraform(this._defaultInstanceProfileArn),
      default_os: cdktf.stringToTerraform(this._defaultOs),
      default_root_device_type: cdktf.stringToTerraform(this._defaultRootDeviceType),
      default_ssh_key_name: cdktf.stringToTerraform(this._defaultSshKeyName),
      default_subnet_id: cdktf.stringToTerraform(this._defaultSubnetId),
      hostname_theme: cdktf.stringToTerraform(this._hostnameTheme),
      manage_berkshelf: cdktf.booleanToTerraform(this._manageBerkshelf),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      service_role_arn: cdktf.stringToTerraform(this._serviceRoleArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      use_custom_cookbooks: cdktf.booleanToTerraform(this._useCustomCookbooks),
      use_opsworks_security_groups: cdktf.booleanToTerraform(this._useOpsworksSecurityGroups),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      custom_cookbooks_source: cdktf.listMapper(opsworksStackCustomCookbooksSourceToTerraform)(this._customCookbooksSource),
    };
  }
}
