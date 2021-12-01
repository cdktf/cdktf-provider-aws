// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS OpsWorks
*/
export interface OpsworksStackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#agent_version OpsworksStack#agent_version}
  */
  readonly agentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#berkshelf_version OpsworksStack#berkshelf_version}
  */
  readonly berkshelfVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#color OpsworksStack#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#configuration_manager_name OpsworksStack#configuration_manager_name}
  */
  readonly configurationManagerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#configuration_manager_version OpsworksStack#configuration_manager_version}
  */
  readonly configurationManagerVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#custom_json OpsworksStack#custom_json}
  */
  readonly customJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_availability_zone OpsworksStack#default_availability_zone}
  */
  readonly defaultAvailabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_instance_profile_arn OpsworksStack#default_instance_profile_arn}
  */
  readonly defaultInstanceProfileArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_os OpsworksStack#default_os}
  */
  readonly defaultOs?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_root_device_type OpsworksStack#default_root_device_type}
  */
  readonly defaultRootDeviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_ssh_key_name OpsworksStack#default_ssh_key_name}
  */
  readonly defaultSshKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_subnet_id OpsworksStack#default_subnet_id}
  */
  readonly defaultSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#hostname_theme OpsworksStack#hostname_theme}
  */
  readonly hostnameTheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#manage_berkshelf OpsworksStack#manage_berkshelf}
  */
  readonly manageBerkshelf?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#name OpsworksStack#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#region OpsworksStack#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#service_role_arn OpsworksStack#service_role_arn}
  */
  readonly serviceRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#tags OpsworksStack#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#tags_all OpsworksStack#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#use_custom_cookbooks OpsworksStack#use_custom_cookbooks}
  */
  readonly useCustomCookbooks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#use_opsworks_security_groups OpsworksStack#use_opsworks_security_groups}
  */
  readonly useOpsworksSecurityGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#vpc_id OpsworksStack#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * custom_cookbooks_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#custom_cookbooks_source OpsworksStack#custom_cookbooks_source}
  */
  readonly customCookbooksSource?: OpsworksStackCustomCookbooksSource[];
}
export interface OpsworksStackCustomCookbooksSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#password OpsworksStack#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#revision OpsworksStack#revision}
  */
  readonly revision?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#ssh_key OpsworksStack#ssh_key}
  */
  readonly sshKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#type OpsworksStack#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#url OpsworksStack#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#username OpsworksStack#username}
  */
  readonly username?: string;
}

export function opsworksStackCustomCookbooksSourceToTerraform(struct?: OpsworksStackCustomCookbooksSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    revision: cdktf.stringToTerraform(struct!.revision),
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html aws_opsworks_stack}
*/
export class OpsworksStack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_opsworks_stack";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html aws_opsworks_stack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpsworksStackConfig
  */
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
    this._tagsAll = config.tagsAll;
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
    return this._agentVersion;
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
  public set berkshelfVersion(value: string) {
    this._berkshelfVersion = value;
  }
  public resetBerkshelfVersion() {
    this._berkshelfVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get berkshelfVersionInput() {
    return this._berkshelfVersion;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // configuration_manager_name - computed: false, optional: true, required: false
  private _configurationManagerName?: string; 
  public get configurationManagerName() {
    return this.getStringAttribute('configuration_manager_name');
  }
  public set configurationManagerName(value: string) {
    this._configurationManagerName = value;
  }
  public resetConfigurationManagerName() {
    this._configurationManagerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationManagerNameInput() {
    return this._configurationManagerName;
  }

  // configuration_manager_version - computed: false, optional: true, required: false
  private _configurationManagerVersion?: string; 
  public get configurationManagerVersion() {
    return this.getStringAttribute('configuration_manager_version');
  }
  public set configurationManagerVersion(value: string) {
    this._configurationManagerVersion = value;
  }
  public resetConfigurationManagerVersion() {
    this._configurationManagerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationManagerVersionInput() {
    return this._configurationManagerVersion;
  }

  // custom_json - computed: false, optional: true, required: false
  private _customJson?: string; 
  public get customJson() {
    return this.getStringAttribute('custom_json');
  }
  public set customJson(value: string) {
    this._customJson = value;
  }
  public resetCustomJson() {
    this._customJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customJsonInput() {
    return this._customJson;
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
    return this._defaultAvailabilityZone;
  }

  // default_instance_profile_arn - computed: false, optional: false, required: true
  private _defaultInstanceProfileArn?: string; 
  public get defaultInstanceProfileArn() {
    return this.getStringAttribute('default_instance_profile_arn');
  }
  public set defaultInstanceProfileArn(value: string) {
    this._defaultInstanceProfileArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInstanceProfileArnInput() {
    return this._defaultInstanceProfileArn;
  }

  // default_os - computed: false, optional: true, required: false
  private _defaultOs?: string; 
  public get defaultOs() {
    return this.getStringAttribute('default_os');
  }
  public set defaultOs(value: string) {
    this._defaultOs = value;
  }
  public resetDefaultOs() {
    this._defaultOs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOsInput() {
    return this._defaultOs;
  }

  // default_root_device_type - computed: false, optional: true, required: false
  private _defaultRootDeviceType?: string; 
  public get defaultRootDeviceType() {
    return this.getStringAttribute('default_root_device_type');
  }
  public set defaultRootDeviceType(value: string) {
    this._defaultRootDeviceType = value;
  }
  public resetDefaultRootDeviceType() {
    this._defaultRootDeviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRootDeviceTypeInput() {
    return this._defaultRootDeviceType;
  }

  // default_ssh_key_name - computed: false, optional: true, required: false
  private _defaultSshKeyName?: string; 
  public get defaultSshKeyName() {
    return this.getStringAttribute('default_ssh_key_name');
  }
  public set defaultSshKeyName(value: string) {
    this._defaultSshKeyName = value;
  }
  public resetDefaultSshKeyName() {
    this._defaultSshKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSshKeyNameInput() {
    return this._defaultSshKeyName;
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
    return this._defaultSubnetId;
  }

  // hostname_theme - computed: false, optional: true, required: false
  private _hostnameTheme?: string; 
  public get hostnameTheme() {
    return this.getStringAttribute('hostname_theme');
  }
  public set hostnameTheme(value: string) {
    this._hostnameTheme = value;
  }
  public resetHostnameTheme() {
    this._hostnameTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameThemeInput() {
    return this._hostnameTheme;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // manage_berkshelf - computed: false, optional: true, required: false
  private _manageBerkshelf?: boolean | cdktf.IResolvable; 
  public get manageBerkshelf() {
    return this.getBooleanAttribute('manage_berkshelf') as any;
  }
  public set manageBerkshelf(value: boolean | cdktf.IResolvable) {
    this._manageBerkshelf = value;
  }
  public resetManageBerkshelf() {
    this._manageBerkshelf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageBerkshelfInput() {
    return this._manageBerkshelf;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service_role_arn - computed: false, optional: false, required: true
  private _serviceRoleArn?: string; 
  public get serviceRoleArn() {
    return this.getStringAttribute('service_role_arn');
  }
  public set serviceRoleArn(value: string) {
    this._serviceRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleArnInput() {
    return this._serviceRoleArn;
  }

  // stack_endpoint - computed: true, optional: false, required: false
  public get stackEndpoint() {
    return this.getStringAttribute('stack_endpoint');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // use_custom_cookbooks - computed: false, optional: true, required: false
  private _useCustomCookbooks?: boolean | cdktf.IResolvable; 
  public get useCustomCookbooks() {
    return this.getBooleanAttribute('use_custom_cookbooks') as any;
  }
  public set useCustomCookbooks(value: boolean | cdktf.IResolvable) {
    this._useCustomCookbooks = value;
  }
  public resetUseCustomCookbooks() {
    this._useCustomCookbooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCustomCookbooksInput() {
    return this._useCustomCookbooks;
  }

  // use_opsworks_security_groups - computed: false, optional: true, required: false
  private _useOpsworksSecurityGroups?: boolean | cdktf.IResolvable; 
  public get useOpsworksSecurityGroups() {
    return this.getBooleanAttribute('use_opsworks_security_groups') as any;
  }
  public set useOpsworksSecurityGroups(value: boolean | cdktf.IResolvable) {
    this._useOpsworksSecurityGroups = value;
  }
  public resetUseOpsworksSecurityGroups() {
    this._useOpsworksSecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOpsworksSecurityGroupsInput() {
    return this._useOpsworksSecurityGroups;
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
    return this._vpcId;
  }

  // custom_cookbooks_source - computed: false, optional: true, required: false
  private _customCookbooksSource?: OpsworksStackCustomCookbooksSource[]; 
  public get customCookbooksSource() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_cookbooks_source') as any;
  }
  public set customCookbooksSource(value: OpsworksStackCustomCookbooksSource[]) {
    this._customCookbooksSource = value;
  }
  public resetCustomCookbooksSource() {
    this._customCookbooksSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCookbooksSourceInput() {
    return this._customCookbooksSource;
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
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      use_custom_cookbooks: cdktf.booleanToTerraform(this._useCustomCookbooks),
      use_opsworks_security_groups: cdktf.booleanToTerraform(this._useOpsworksSecurityGroups),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      custom_cookbooks_source: cdktf.listMapper(opsworksStackCustomCookbooksSourceToTerraform)(this._customCookbooksSource),
    };
  }
}
