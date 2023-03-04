// https://www.terraform.io/docs/providers/aws/r/opsworks_stack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpsworksStackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#agent_version OpsworksStack#agent_version}
  */
  readonly agentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#berkshelf_version OpsworksStack#berkshelf_version}
  */
  readonly berkshelfVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#color OpsworksStack#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_name OpsworksStack#configuration_manager_name}
  */
  readonly configurationManagerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_version OpsworksStack#configuration_manager_version}
  */
  readonly configurationManagerVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#custom_json OpsworksStack#custom_json}
  */
  readonly customJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_availability_zone OpsworksStack#default_availability_zone}
  */
  readonly defaultAvailabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_instance_profile_arn OpsworksStack#default_instance_profile_arn}
  */
  readonly defaultInstanceProfileArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_os OpsworksStack#default_os}
  */
  readonly defaultOs?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_root_device_type OpsworksStack#default_root_device_type}
  */
  readonly defaultRootDeviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_ssh_key_name OpsworksStack#default_ssh_key_name}
  */
  readonly defaultSshKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_subnet_id OpsworksStack#default_subnet_id}
  */
  readonly defaultSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#hostname_theme OpsworksStack#hostname_theme}
  */
  readonly hostnameTheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#id OpsworksStack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#manage_berkshelf OpsworksStack#manage_berkshelf}
  */
  readonly manageBerkshelf?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#name OpsworksStack#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#region OpsworksStack#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#service_role_arn OpsworksStack#service_role_arn}
  */
  readonly serviceRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags OpsworksStack#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags_all OpsworksStack#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_custom_cookbooks OpsworksStack#use_custom_cookbooks}
  */
  readonly useCustomCookbooks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_opsworks_security_groups OpsworksStack#use_opsworks_security_groups}
  */
  readonly useOpsworksSecurityGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#vpc_id OpsworksStack#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * custom_cookbooks_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#custom_cookbooks_source OpsworksStack#custom_cookbooks_source}
  */
  readonly customCookbooksSource?: OpsworksStackCustomCookbooksSource;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#timeouts OpsworksStack#timeouts}
  */
  readonly timeouts?: OpsworksStackTimeouts;
}
export interface OpsworksStackCustomCookbooksSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#password OpsworksStack#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#revision OpsworksStack#revision}
  */
  readonly revision?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#ssh_key OpsworksStack#ssh_key}
  */
  readonly sshKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#type OpsworksStack#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#url OpsworksStack#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#username OpsworksStack#username}
  */
  readonly username?: string;
}

export function opsworksStackCustomCookbooksSourceToTerraform(struct?: OpsworksStackCustomCookbooksSourceOutputReference | OpsworksStackCustomCookbooksSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class OpsworksStackCustomCookbooksSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpsworksStackCustomCookbooksSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsworksStackCustomCookbooksSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._revision = undefined;
      this._sshKey = undefined;
      this._type = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._revision = value.revision;
      this._sshKey = value.sshKey;
      this._type = value.type;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  public resetSshKey() {
    this._sshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface OpsworksStackTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#create OpsworksStack#create}
  */
  readonly create?: string;
}

export function opsworksStackTimeoutsToTerraform(struct?: OpsworksStackTimeoutsOutputReference | OpsworksStackTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}

export class OpsworksStackTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpsworksStackTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsworksStackTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack aws_opsworks_stack}
*/
export class OpsworksStack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_opsworks_stack";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack aws_opsworks_stack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpsworksStackConfig
  */
  public constructor(scope: Construct, id: string, config: OpsworksStackConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opsworks_stack',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
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
    this._id = config.id;
    this._manageBerkshelf = config.manageBerkshelf;
    this._name = config.name;
    this._region = config.region;
    this._serviceRoleArn = config.serviceRoleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._useCustomCookbooks = config.useCustomCookbooks;
    this._useOpsworksSecurityGroups = config.useOpsworksSecurityGroups;
    this._vpcId = config.vpcId;
    this._customCookbooksSource.internalValue = config.customCookbooksSource;
    this._timeouts.internalValue = config.timeouts;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // manage_berkshelf - computed: false, optional: true, required: false
  private _manageBerkshelf?: boolean | cdktf.IResolvable; 
  public get manageBerkshelf() {
    return this.getBooleanAttribute('manage_berkshelf');
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
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
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
    return this.getBooleanAttribute('use_custom_cookbooks');
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
    return this.getBooleanAttribute('use_opsworks_security_groups');
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
  private _customCookbooksSource = new OpsworksStackCustomCookbooksSourceOutputReference(this, "custom_cookbooks_source");
  public get customCookbooksSource() {
    return this._customCookbooksSource;
  }
  public putCustomCookbooksSource(value: OpsworksStackCustomCookbooksSource) {
    this._customCookbooksSource.internalValue = value;
  }
  public resetCustomCookbooksSource() {
    this._customCookbooksSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCookbooksSourceInput() {
    return this._customCookbooksSource.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OpsworksStackTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OpsworksStackTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      id: cdktf.stringToTerraform(this._id),
      manage_berkshelf: cdktf.booleanToTerraform(this._manageBerkshelf),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      service_role_arn: cdktf.stringToTerraform(this._serviceRoleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      use_custom_cookbooks: cdktf.booleanToTerraform(this._useCustomCookbooks),
      use_opsworks_security_groups: cdktf.booleanToTerraform(this._useOpsworksSecurityGroups),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      custom_cookbooks_source: opsworksStackCustomCookbooksSourceToTerraform(this._customCookbooksSource.internalValue),
      timeouts: opsworksStackTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
