// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Image Builder
*/
export namespace ImageBuilder {
  export interface ImagebuilderComponentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html#change_description ImagebuilderComponent#change_description}
    */
    readonly changeDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html#data ImagebuilderComponent#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html#description ImagebuilderComponent#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html#kms_key_id ImagebuilderComponent#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html#name ImagebuilderComponent#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html#platform ImagebuilderComponent#platform}
    */
    readonly platform: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html#supported_os_versions ImagebuilderComponent#supported_os_versions}
    */
    readonly supportedOsVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html#tags ImagebuilderComponent#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html#tags_all ImagebuilderComponent#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html#uri ImagebuilderComponent#uri}
    */
    readonly uri?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html#version ImagebuilderComponent#version}
    */
    readonly version: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html aws_imagebuilder_component}
  */
  export class ImagebuilderComponent extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_imagebuilder_component";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html aws_imagebuilder_component} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderComponentConfig
    */
    public constructor(scope: Construct, id: string, config: ImagebuilderComponentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_imagebuilder_component',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._changeDescription = config.changeDescription;
      this._data = config.data;
      this._description = config.description;
      this._kmsKeyId = config.kmsKeyId;
      this._name = config.name;
      this._platform = config.platform;
      this._supportedOsVersions = config.supportedOsVersions;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._uri = config.uri;
      this._version = config.version;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // change_description - computed: false, optional: true, required: false
    private _changeDescription?: string | undefined; 
    public get changeDescription() {
      return this.getStringAttribute('change_description');
    }
    public set changeDescription(value: string | undefined) {
      this._changeDescription = value;
    }
    public resetChangeDescription() {
      this._changeDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get changeDescriptionInput() {
      return this._changeDescription
    }

    // data - computed: true, optional: true, required: false
    private _data?: string | undefined; 
    public get data() {
      return this.getStringAttribute('data');
    }
    public set data(value: string | undefined) {
      this._data = value;
    }
    public resetData() {
      this._data = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataInput() {
      return this._data
    }

    // date_created - computed: true, optional: false, required: false
    public get dateCreated() {
      return this.getStringAttribute('date_created');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // encrypted - computed: true, optional: false, required: false
    public get encrypted() {
      return this.getBooleanAttribute('encrypted') as any;
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: false, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
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
      return this._name
    }

    // owner - computed: true, optional: false, required: false
    public get owner() {
      return this.getStringAttribute('owner');
    }

    // platform - computed: false, optional: false, required: true
    private _platform?: string; 
    public get platform() {
      return this.getStringAttribute('platform');
    }
    public set platform(value: string) {
      this._platform = value;
    }
    // Temporarily expose input value. Use with caution.
    public get platformInput() {
      return this._platform
    }

    // supported_os_versions - computed: false, optional: true, required: false
    private _supportedOsVersions?: string[] | undefined; 
    public get supportedOsVersions() {
      return this.getListAttribute('supported_os_versions');
    }
    public set supportedOsVersions(value: string[] | undefined) {
      this._supportedOsVersions = value;
    }
    public resetSupportedOsVersions() {
      this._supportedOsVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedOsVersionsInput() {
      return this._supportedOsVersions
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }

    // uri - computed: false, optional: true, required: false
    private _uri?: string | undefined; 
    public get uri() {
      return this.getStringAttribute('uri');
    }
    public set uri(value: string | undefined) {
      this._uri = value;
    }
    public resetUri() {
      this._uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uriInput() {
      return this._uri
    }

    // version - computed: false, optional: false, required: true
    private _version?: string; 
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string) {
      this._version = value;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        change_description: cdktf.stringToTerraform(this._changeDescription),
        data: cdktf.stringToTerraform(this._data),
        description: cdktf.stringToTerraform(this._description),
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        name: cdktf.stringToTerraform(this._name),
        platform: cdktf.stringToTerraform(this._platform),
        supported_os_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._supportedOsVersions),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        uri: cdktf.stringToTerraform(this._uri),
        version: cdktf.stringToTerraform(this._version),
      };
    }
  }
  export interface ImagebuilderDistributionConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#description ImagebuilderDistributionConfiguration#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#name ImagebuilderDistributionConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#tags ImagebuilderDistributionConfiguration#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#tags_all ImagebuilderDistributionConfiguration#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * distribution block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#distribution ImagebuilderDistributionConfiguration#distribution}
    */
    readonly distribution: ImagebuilderDistributionConfigurationDistribution[];
  }
  export interface ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#user_groups ImagebuilderDistributionConfiguration#user_groups}
    */
    readonly userGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#user_ids ImagebuilderDistributionConfiguration#user_ids}
    */
    readonly userIds?: string[];
  }

  function imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference | ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      user_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.userGroups),
      user_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.userIds),
    }
  }

  export class ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // user_groups - computed: false, optional: true, required: false
    private _userGroups?: string[] | undefined; 
    public get userGroups() {
      return this.getListAttribute('user_groups');
    }
    public set userGroups(value: string[] | undefined) {
      this._userGroups = value;
    }
    public resetUserGroups() {
      this._userGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userGroupsInput() {
      return this._userGroups
    }

    // user_ids - computed: false, optional: true, required: false
    private _userIds?: string[] | undefined; 
    public get userIds() {
      return this.getListAttribute('user_ids');
    }
    public set userIds(value: string[] | undefined) {
      this._userIds = value;
    }
    public resetUserIds() {
      this._userIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userIdsInput() {
      return this._userIds
    }
  }
  export interface ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#ami_tags ImagebuilderDistributionConfiguration#ami_tags}
    */
    readonly amiTags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#description ImagebuilderDistributionConfiguration#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#kms_key_id ImagebuilderDistributionConfiguration#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#name ImagebuilderDistributionConfiguration#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#target_account_ids ImagebuilderDistributionConfiguration#target_account_ids}
    */
    readonly targetAccountIds?: string[];
    /**
    * launch_permission block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#launch_permission ImagebuilderDistributionConfiguration#launch_permission}
    */
    readonly launchPermission?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission;
  }

  function imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference | ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      ami_tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.amiTags),
      description: cdktf.stringToTerraform(struct!.description),
      kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
      name: cdktf.stringToTerraform(struct!.name),
      target_account_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetAccountIds),
      launch_permission: imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionToTerraform(struct!.launchPermission),
    }
  }

  export class ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // ami_tags - computed: false, optional: true, required: false
    private _amiTags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get amiTags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ami_tags') as any;
    }
    public set amiTags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._amiTags = value;
    }
    public resetAmiTags() {
      this._amiTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amiTagsInput() {
      return this._amiTags
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // kms_key_id - computed: false, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // name - computed: false, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // target_account_ids - computed: false, optional: true, required: false
    private _targetAccountIds?: string[] | undefined; 
    public get targetAccountIds() {
      return this.getListAttribute('target_account_ids');
    }
    public set targetAccountIds(value: string[] | undefined) {
      this._targetAccountIds = value;
    }
    public resetTargetAccountIds() {
      this._targetAccountIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetAccountIdsInput() {
      return this._targetAccountIds
    }

    // launch_permission - computed: false, optional: true, required: false
    private _launchPermission?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission | undefined; 
    private __launchPermissionOutput = new ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference(this as any, "launch_permission", true);
    public get launchPermission() {
      return this.__launchPermissionOutput;
    }
    public putLaunchPermission(value: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission | undefined) {
      this._launchPermission = value;
    }
    public resetLaunchPermission() {
      this._launchPermission = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchPermissionInput() {
      return this._launchPermission
    }
  }
  export interface ImagebuilderDistributionConfigurationDistribution {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#license_configuration_arns ImagebuilderDistributionConfiguration#license_configuration_arns}
    */
    readonly licenseConfigurationArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#region ImagebuilderDistributionConfiguration#region}
    */
    readonly region: string;
    /**
    * ami_distribution_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#ami_distribution_configuration ImagebuilderDistributionConfiguration#ami_distribution_configuration}
    */
    readonly amiDistributionConfiguration?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration;
  }

  function imagebuilderDistributionConfigurationDistributionToTerraform(struct?: ImagebuilderDistributionConfigurationDistribution): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      license_configuration_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.licenseConfigurationArns),
      region: cdktf.stringToTerraform(struct!.region),
      ami_distribution_configuration: imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationToTerraform(struct!.amiDistributionConfiguration),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html aws_imagebuilder_distribution_configuration}
  */
  export class ImagebuilderDistributionConfiguration extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_imagebuilder_distribution_configuration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html aws_imagebuilder_distribution_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderDistributionConfigurationConfig
    */
    public constructor(scope: Construct, id: string, config: ImagebuilderDistributionConfigurationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_imagebuilder_distribution_configuration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._distribution = config.distribution;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // date_created - computed: true, optional: false, required: false
    public get dateCreated() {
      return this.getStringAttribute('date_created');
    }

    // date_updated - computed: true, optional: false, required: false
    public get dateUpdated() {
      return this.getStringAttribute('date_updated');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // distribution - computed: false, optional: false, required: true
    private _distribution?: ImagebuilderDistributionConfigurationDistribution[]; 
    public get distribution() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('distribution') as any;
    }
    public set distribution(value: ImagebuilderDistributionConfigurationDistribution[]) {
      this._distribution = value;
    }
    // Temporarily expose input value. Use with caution.
    public get distributionInput() {
      return this._distribution
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        distribution: cdktf.listMapper(imagebuilderDistributionConfigurationDistributionToTerraform)(this._distribution),
      };
    }
  }
  export interface ImagebuilderImageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#distribution_configuration_arn ImagebuilderImage#distribution_configuration_arn}
    */
    readonly distributionConfigurationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#enhanced_image_metadata_enabled ImagebuilderImage#enhanced_image_metadata_enabled}
    */
    readonly enhancedImageMetadataEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#image_recipe_arn ImagebuilderImage#image_recipe_arn}
    */
    readonly imageRecipeArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#infrastructure_configuration_arn ImagebuilderImage#infrastructure_configuration_arn}
    */
    readonly infrastructureConfigurationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#tags ImagebuilderImage#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#tags_all ImagebuilderImage#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * image_tests_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#image_tests_configuration ImagebuilderImage#image_tests_configuration}
    */
    readonly imageTestsConfiguration?: ImagebuilderImageImageTestsConfiguration;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#timeouts ImagebuilderImage#timeouts}
    */
    readonly timeouts?: ImagebuilderImageTimeouts;
  }
  export class ImagebuilderImageOutputResourcesAmis extends cdktf.ComplexComputedList {

    // account_id - computed: true, optional: false, required: false
    public get accountId() {
      return this.getStringAttribute('account_id');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // image - computed: true, optional: false, required: false
    public get image() {
      return this.getStringAttribute('image');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // region - computed: true, optional: false, required: false
    public get region() {
      return this.getStringAttribute('region');
    }
  }
  export class ImagebuilderImageOutputResources extends cdktf.ComplexComputedList {

    // amis - computed: true, optional: false, required: false
    public get amis() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('amis') as any;
    }
  }
  export interface ImagebuilderImageImageTestsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#image_tests_enabled ImagebuilderImage#image_tests_enabled}
    */
    readonly imageTestsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#timeout_minutes ImagebuilderImage#timeout_minutes}
    */
    readonly timeoutMinutes?: number;
  }

  function imagebuilderImageImageTestsConfigurationToTerraform(struct?: ImagebuilderImageImageTestsConfigurationOutputReference | ImagebuilderImageImageTestsConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      image_tests_enabled: cdktf.booleanToTerraform(struct!.imageTestsEnabled),
      timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
    }
  }

  export class ImagebuilderImageImageTestsConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // image_tests_enabled - computed: false, optional: true, required: false
    private _imageTestsEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get imageTestsEnabled() {
      return this.getBooleanAttribute('image_tests_enabled') as any;
    }
    public set imageTestsEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._imageTestsEnabled = value;
    }
    public resetImageTestsEnabled() {
      this._imageTestsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageTestsEnabledInput() {
      return this._imageTestsEnabled
    }

    // timeout_minutes - computed: false, optional: true, required: false
    private _timeoutMinutes?: number | undefined; 
    public get timeoutMinutes() {
      return this.getNumberAttribute('timeout_minutes');
    }
    public set timeoutMinutes(value: number | undefined) {
      this._timeoutMinutes = value;
    }
    public resetTimeoutMinutes() {
      this._timeoutMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutMinutesInput() {
      return this._timeoutMinutes
    }
  }
  export interface ImagebuilderImageTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#create ImagebuilderImage#create}
    */
    readonly create?: string;
  }

  function imagebuilderImageTimeoutsToTerraform(struct?: ImagebuilderImageTimeoutsOutputReference | ImagebuilderImageTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
    }
  }

  export class ImagebuilderImageTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html aws_imagebuilder_image}
  */
  export class ImagebuilderImage extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_imagebuilder_image";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html aws_imagebuilder_image} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderImageConfig
    */
    public constructor(scope: Construct, id: string, config: ImagebuilderImageConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_imagebuilder_image',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._distributionConfigurationArn = config.distributionConfigurationArn;
      this._enhancedImageMetadataEnabled = config.enhancedImageMetadataEnabled;
      this._imageRecipeArn = config.imageRecipeArn;
      this._infrastructureConfigurationArn = config.infrastructureConfigurationArn;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._imageTestsConfiguration = config.imageTestsConfiguration;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // date_created - computed: true, optional: false, required: false
    public get dateCreated() {
      return this.getStringAttribute('date_created');
    }

    // distribution_configuration_arn - computed: false, optional: true, required: false
    private _distributionConfigurationArn?: string | undefined; 
    public get distributionConfigurationArn() {
      return this.getStringAttribute('distribution_configuration_arn');
    }
    public set distributionConfigurationArn(value: string | undefined) {
      this._distributionConfigurationArn = value;
    }
    public resetDistributionConfigurationArn() {
      this._distributionConfigurationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get distributionConfigurationArnInput() {
      return this._distributionConfigurationArn
    }

    // enhanced_image_metadata_enabled - computed: false, optional: true, required: false
    private _enhancedImageMetadataEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get enhancedImageMetadataEnabled() {
      return this.getBooleanAttribute('enhanced_image_metadata_enabled') as any;
    }
    public set enhancedImageMetadataEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enhancedImageMetadataEnabled = value;
    }
    public resetEnhancedImageMetadataEnabled() {
      this._enhancedImageMetadataEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enhancedImageMetadataEnabledInput() {
      return this._enhancedImageMetadataEnabled
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image_recipe_arn - computed: false, optional: false, required: true
    private _imageRecipeArn?: string; 
    public get imageRecipeArn() {
      return this.getStringAttribute('image_recipe_arn');
    }
    public set imageRecipeArn(value: string) {
      this._imageRecipeArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get imageRecipeArnInput() {
      return this._imageRecipeArn
    }

    // infrastructure_configuration_arn - computed: false, optional: false, required: true
    private _infrastructureConfigurationArn?: string; 
    public get infrastructureConfigurationArn() {
      return this.getStringAttribute('infrastructure_configuration_arn');
    }
    public set infrastructureConfigurationArn(value: string) {
      this._infrastructureConfigurationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get infrastructureConfigurationArnInput() {
      return this._infrastructureConfigurationArn
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // os_version - computed: true, optional: false, required: false
    public get osVersion() {
      return this.getStringAttribute('os_version');
    }

    // output_resources - computed: true, optional: false, required: false
    public outputResources(index: string) {
      return new ImagebuilderImageOutputResources(this, 'output_resources', index);
    }

    // platform - computed: true, optional: false, required: false
    public get platform() {
      return this.getStringAttribute('platform');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getStringAttribute('version');
    }

    // image_tests_configuration - computed: false, optional: true, required: false
    private _imageTestsConfiguration?: ImagebuilderImageImageTestsConfiguration | undefined; 
    private __imageTestsConfigurationOutput = new ImagebuilderImageImageTestsConfigurationOutputReference(this as any, "image_tests_configuration", true);
    public get imageTestsConfiguration() {
      return this.__imageTestsConfigurationOutput;
    }
    public putImageTestsConfiguration(value: ImagebuilderImageImageTestsConfiguration | undefined) {
      this._imageTestsConfiguration = value;
    }
    public resetImageTestsConfiguration() {
      this._imageTestsConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageTestsConfigurationInput() {
      return this._imageTestsConfiguration
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: ImagebuilderImageTimeouts | undefined; 
    private __timeoutsOutput = new ImagebuilderImageTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: ImagebuilderImageTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        distribution_configuration_arn: cdktf.stringToTerraform(this._distributionConfigurationArn),
        enhanced_image_metadata_enabled: cdktf.booleanToTerraform(this._enhancedImageMetadataEnabled),
        image_recipe_arn: cdktf.stringToTerraform(this._imageRecipeArn),
        infrastructure_configuration_arn: cdktf.stringToTerraform(this._infrastructureConfigurationArn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        image_tests_configuration: imagebuilderImageImageTestsConfigurationToTerraform(this._imageTestsConfiguration),
        timeouts: imagebuilderImageTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface ImagebuilderImagePipelineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#description ImagebuilderImagePipeline#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#distribution_configuration_arn ImagebuilderImagePipeline#distribution_configuration_arn}
    */
    readonly distributionConfigurationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#enhanced_image_metadata_enabled ImagebuilderImagePipeline#enhanced_image_metadata_enabled}
    */
    readonly enhancedImageMetadataEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#image_recipe_arn ImagebuilderImagePipeline#image_recipe_arn}
    */
    readonly imageRecipeArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#infrastructure_configuration_arn ImagebuilderImagePipeline#infrastructure_configuration_arn}
    */
    readonly infrastructureConfigurationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#name ImagebuilderImagePipeline#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#status ImagebuilderImagePipeline#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#tags ImagebuilderImagePipeline#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#tags_all ImagebuilderImagePipeline#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * image_tests_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#image_tests_configuration ImagebuilderImagePipeline#image_tests_configuration}
    */
    readonly imageTestsConfiguration?: ImagebuilderImagePipelineImageTestsConfiguration;
    /**
    * schedule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#schedule ImagebuilderImagePipeline#schedule}
    */
    readonly schedule?: ImagebuilderImagePipelineSchedule;
  }
  export interface ImagebuilderImagePipelineImageTestsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#image_tests_enabled ImagebuilderImagePipeline#image_tests_enabled}
    */
    readonly imageTestsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#timeout_minutes ImagebuilderImagePipeline#timeout_minutes}
    */
    readonly timeoutMinutes?: number;
  }

  function imagebuilderImagePipelineImageTestsConfigurationToTerraform(struct?: ImagebuilderImagePipelineImageTestsConfigurationOutputReference | ImagebuilderImagePipelineImageTestsConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      image_tests_enabled: cdktf.booleanToTerraform(struct!.imageTestsEnabled),
      timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
    }
  }

  export class ImagebuilderImagePipelineImageTestsConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // image_tests_enabled - computed: false, optional: true, required: false
    private _imageTestsEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get imageTestsEnabled() {
      return this.getBooleanAttribute('image_tests_enabled') as any;
    }
    public set imageTestsEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._imageTestsEnabled = value;
    }
    public resetImageTestsEnabled() {
      this._imageTestsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageTestsEnabledInput() {
      return this._imageTestsEnabled
    }

    // timeout_minutes - computed: false, optional: true, required: false
    private _timeoutMinutes?: number | undefined; 
    public get timeoutMinutes() {
      return this.getNumberAttribute('timeout_minutes');
    }
    public set timeoutMinutes(value: number | undefined) {
      this._timeoutMinutes = value;
    }
    public resetTimeoutMinutes() {
      this._timeoutMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutMinutesInput() {
      return this._timeoutMinutes
    }
  }
  export interface ImagebuilderImagePipelineSchedule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#pipeline_execution_start_condition ImagebuilderImagePipeline#pipeline_execution_start_condition}
    */
    readonly pipelineExecutionStartCondition?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#schedule_expression ImagebuilderImagePipeline#schedule_expression}
    */
    readonly scheduleExpression: string;
  }

  function imagebuilderImagePipelineScheduleToTerraform(struct?: ImagebuilderImagePipelineScheduleOutputReference | ImagebuilderImagePipelineSchedule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      pipeline_execution_start_condition: cdktf.stringToTerraform(struct!.pipelineExecutionStartCondition),
      schedule_expression: cdktf.stringToTerraform(struct!.scheduleExpression),
    }
  }

  export class ImagebuilderImagePipelineScheduleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // pipeline_execution_start_condition - computed: false, optional: true, required: false
    private _pipelineExecutionStartCondition?: string | undefined; 
    public get pipelineExecutionStartCondition() {
      return this.getStringAttribute('pipeline_execution_start_condition');
    }
    public set pipelineExecutionStartCondition(value: string | undefined) {
      this._pipelineExecutionStartCondition = value;
    }
    public resetPipelineExecutionStartCondition() {
      this._pipelineExecutionStartCondition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pipelineExecutionStartConditionInput() {
      return this._pipelineExecutionStartCondition
    }

    // schedule_expression - computed: false, optional: false, required: true
    private _scheduleExpression?: string; 
    public get scheduleExpression() {
      return this.getStringAttribute('schedule_expression');
    }
    public set scheduleExpression(value: string) {
      this._scheduleExpression = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleExpressionInput() {
      return this._scheduleExpression
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html aws_imagebuilder_image_pipeline}
  */
  export class ImagebuilderImagePipeline extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_imagebuilder_image_pipeline";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html aws_imagebuilder_image_pipeline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderImagePipelineConfig
    */
    public constructor(scope: Construct, id: string, config: ImagebuilderImagePipelineConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_imagebuilder_image_pipeline',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._distributionConfigurationArn = config.distributionConfigurationArn;
      this._enhancedImageMetadataEnabled = config.enhancedImageMetadataEnabled;
      this._imageRecipeArn = config.imageRecipeArn;
      this._infrastructureConfigurationArn = config.infrastructureConfigurationArn;
      this._name = config.name;
      this._status = config.status;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._imageTestsConfiguration = config.imageTestsConfiguration;
      this._schedule = config.schedule;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // date_created - computed: true, optional: false, required: false
    public get dateCreated() {
      return this.getStringAttribute('date_created');
    }

    // date_last_run - computed: true, optional: false, required: false
    public get dateLastRun() {
      return this.getStringAttribute('date_last_run');
    }

    // date_next_run - computed: true, optional: false, required: false
    public get dateNextRun() {
      return this.getStringAttribute('date_next_run');
    }

    // date_updated - computed: true, optional: false, required: false
    public get dateUpdated() {
      return this.getStringAttribute('date_updated');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // distribution_configuration_arn - computed: false, optional: true, required: false
    private _distributionConfigurationArn?: string | undefined; 
    public get distributionConfigurationArn() {
      return this.getStringAttribute('distribution_configuration_arn');
    }
    public set distributionConfigurationArn(value: string | undefined) {
      this._distributionConfigurationArn = value;
    }
    public resetDistributionConfigurationArn() {
      this._distributionConfigurationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get distributionConfigurationArnInput() {
      return this._distributionConfigurationArn
    }

    // enhanced_image_metadata_enabled - computed: false, optional: true, required: false
    private _enhancedImageMetadataEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get enhancedImageMetadataEnabled() {
      return this.getBooleanAttribute('enhanced_image_metadata_enabled') as any;
    }
    public set enhancedImageMetadataEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enhancedImageMetadataEnabled = value;
    }
    public resetEnhancedImageMetadataEnabled() {
      this._enhancedImageMetadataEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enhancedImageMetadataEnabledInput() {
      return this._enhancedImageMetadataEnabled
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image_recipe_arn - computed: false, optional: false, required: true
    private _imageRecipeArn?: string; 
    public get imageRecipeArn() {
      return this.getStringAttribute('image_recipe_arn');
    }
    public set imageRecipeArn(value: string) {
      this._imageRecipeArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get imageRecipeArnInput() {
      return this._imageRecipeArn
    }

    // infrastructure_configuration_arn - computed: false, optional: false, required: true
    private _infrastructureConfigurationArn?: string; 
    public get infrastructureConfigurationArn() {
      return this.getStringAttribute('infrastructure_configuration_arn');
    }
    public set infrastructureConfigurationArn(value: string) {
      this._infrastructureConfigurationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get infrastructureConfigurationArnInput() {
      return this._infrastructureConfigurationArn
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
      return this._name
    }

    // platform - computed: true, optional: false, required: false
    public get platform() {
      return this.getStringAttribute('platform');
    }

    // status - computed: false, optional: true, required: false
    private _status?: string | undefined; 
    public get status() {
      return this.getStringAttribute('status');
    }
    public set status(value: string | undefined) {
      this._status = value;
    }
    public resetStatus() {
      this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
      return this._status
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // image_tests_configuration - computed: false, optional: true, required: false
    private _imageTestsConfiguration?: ImagebuilderImagePipelineImageTestsConfiguration | undefined; 
    private __imageTestsConfigurationOutput = new ImagebuilderImagePipelineImageTestsConfigurationOutputReference(this as any, "image_tests_configuration", true);
    public get imageTestsConfiguration() {
      return this.__imageTestsConfigurationOutput;
    }
    public putImageTestsConfiguration(value: ImagebuilderImagePipelineImageTestsConfiguration | undefined) {
      this._imageTestsConfiguration = value;
    }
    public resetImageTestsConfiguration() {
      this._imageTestsConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageTestsConfigurationInput() {
      return this._imageTestsConfiguration
    }

    // schedule - computed: false, optional: true, required: false
    private _schedule?: ImagebuilderImagePipelineSchedule | undefined; 
    private __scheduleOutput = new ImagebuilderImagePipelineScheduleOutputReference(this as any, "schedule", true);
    public get schedule() {
      return this.__scheduleOutput;
    }
    public putSchedule(value: ImagebuilderImagePipelineSchedule | undefined) {
      this._schedule = value;
    }
    public resetSchedule() {
      this._schedule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
      return this._schedule
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        distribution_configuration_arn: cdktf.stringToTerraform(this._distributionConfigurationArn),
        enhanced_image_metadata_enabled: cdktf.booleanToTerraform(this._enhancedImageMetadataEnabled),
        image_recipe_arn: cdktf.stringToTerraform(this._imageRecipeArn),
        infrastructure_configuration_arn: cdktf.stringToTerraform(this._infrastructureConfigurationArn),
        name: cdktf.stringToTerraform(this._name),
        status: cdktf.stringToTerraform(this._status),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        image_tests_configuration: imagebuilderImagePipelineImageTestsConfigurationToTerraform(this._imageTestsConfiguration),
        schedule: imagebuilderImagePipelineScheduleToTerraform(this._schedule),
      };
    }
  }
  export interface ImagebuilderImageRecipeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#description ImagebuilderImageRecipe#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#name ImagebuilderImageRecipe#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#parent_image ImagebuilderImageRecipe#parent_image}
    */
    readonly parentImage: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#tags ImagebuilderImageRecipe#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#tags_all ImagebuilderImageRecipe#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#version ImagebuilderImageRecipe#version}
    */
    readonly version: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#working_directory ImagebuilderImageRecipe#working_directory}
    */
    readonly workingDirectory?: string;
    /**
    * block_device_mapping block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#block_device_mapping ImagebuilderImageRecipe#block_device_mapping}
    */
    readonly blockDeviceMapping?: ImagebuilderImageRecipeBlockDeviceMapping[];
    /**
    * component block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#component ImagebuilderImageRecipe#component}
    */
    readonly component: ImagebuilderImageRecipeComponent[];
  }
  export interface ImagebuilderImageRecipeBlockDeviceMappingEbs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#delete_on_termination ImagebuilderImageRecipe#delete_on_termination}
    */
    readonly deleteOnTermination?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#encrypted ImagebuilderImageRecipe#encrypted}
    */
    readonly encrypted?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#iops ImagebuilderImageRecipe#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#kms_key_id ImagebuilderImageRecipe#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#snapshot_id ImagebuilderImageRecipe#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#volume_size ImagebuilderImageRecipe#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#volume_type ImagebuilderImageRecipe#volume_type}
    */
    readonly volumeType?: string;
  }

  function imagebuilderImageRecipeBlockDeviceMappingEbsToTerraform(struct?: ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference | ImagebuilderImageRecipeBlockDeviceMappingEbs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete_on_termination: cdktf.stringToTerraform(struct!.deleteOnTermination),
      encrypted: cdktf.stringToTerraform(struct!.encrypted),
      iops: cdktf.numberToTerraform(struct!.iops),
      kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
      snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
      volume_size: cdktf.numberToTerraform(struct!.volumeSize),
      volume_type: cdktf.stringToTerraform(struct!.volumeType),
    }
  }

  export class ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // delete_on_termination - computed: false, optional: true, required: false
    private _deleteOnTermination?: string | undefined; 
    public get deleteOnTermination() {
      return this.getStringAttribute('delete_on_termination');
    }
    public set deleteOnTermination(value: string | undefined) {
      this._deleteOnTermination = value;
    }
    public resetDeleteOnTermination() {
      this._deleteOnTermination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteOnTerminationInput() {
      return this._deleteOnTermination
    }

    // encrypted - computed: false, optional: true, required: false
    private _encrypted?: string | undefined; 
    public get encrypted() {
      return this.getStringAttribute('encrypted');
    }
    public set encrypted(value: string | undefined) {
      this._encrypted = value;
    }
    public resetEncrypted() {
      this._encrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptedInput() {
      return this._encrypted
    }

    // iops - computed: false, optional: true, required: false
    private _iops?: number | undefined; 
    public get iops() {
      return this.getNumberAttribute('iops');
    }
    public set iops(value: number | undefined) {
      this._iops = value;
    }
    public resetIops() {
      this._iops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iopsInput() {
      return this._iops
    }

    // kms_key_id - computed: false, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // snapshot_id - computed: false, optional: true, required: false
    private _snapshotId?: string | undefined; 
    public get snapshotId() {
      return this.getStringAttribute('snapshot_id');
    }
    public set snapshotId(value: string | undefined) {
      this._snapshotId = value;
    }
    public resetSnapshotId() {
      this._snapshotId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotIdInput() {
      return this._snapshotId
    }

    // volume_size - computed: false, optional: true, required: false
    private _volumeSize?: number | undefined; 
    public get volumeSize() {
      return this.getNumberAttribute('volume_size');
    }
    public set volumeSize(value: number | undefined) {
      this._volumeSize = value;
    }
    public resetVolumeSize() {
      this._volumeSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeSizeInput() {
      return this._volumeSize
    }

    // volume_type - computed: false, optional: true, required: false
    private _volumeType?: string | undefined; 
    public get volumeType() {
      return this.getStringAttribute('volume_type');
    }
    public set volumeType(value: string | undefined) {
      this._volumeType = value;
    }
    public resetVolumeType() {
      this._volumeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeTypeInput() {
      return this._volumeType
    }
  }
  export interface ImagebuilderImageRecipeBlockDeviceMapping {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#device_name ImagebuilderImageRecipe#device_name}
    */
    readonly deviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#no_device ImagebuilderImageRecipe#no_device}
    */
    readonly noDevice?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#virtual_name ImagebuilderImageRecipe#virtual_name}
    */
    readonly virtualName?: string;
    /**
    * ebs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#ebs ImagebuilderImageRecipe#ebs}
    */
    readonly ebs?: ImagebuilderImageRecipeBlockDeviceMappingEbs;
  }

  function imagebuilderImageRecipeBlockDeviceMappingToTerraform(struct?: ImagebuilderImageRecipeBlockDeviceMapping): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      device_name: cdktf.stringToTerraform(struct!.deviceName),
      no_device: cdktf.booleanToTerraform(struct!.noDevice),
      virtual_name: cdktf.stringToTerraform(struct!.virtualName),
      ebs: imagebuilderImageRecipeBlockDeviceMappingEbsToTerraform(struct!.ebs),
    }
  }

  export interface ImagebuilderImageRecipeComponent {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#component_arn ImagebuilderImageRecipe#component_arn}
    */
    readonly componentArn: string;
  }

  function imagebuilderImageRecipeComponentToTerraform(struct?: ImagebuilderImageRecipeComponent): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      component_arn: cdktf.stringToTerraform(struct!.componentArn),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html aws_imagebuilder_image_recipe}
  */
  export class ImagebuilderImageRecipe extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_imagebuilder_image_recipe";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html aws_imagebuilder_image_recipe} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderImageRecipeConfig
    */
    public constructor(scope: Construct, id: string, config: ImagebuilderImageRecipeConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_imagebuilder_image_recipe',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._name = config.name;
      this._parentImage = config.parentImage;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._version = config.version;
      this._workingDirectory = config.workingDirectory;
      this._blockDeviceMapping = config.blockDeviceMapping;
      this._component = config.component;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // date_created - computed: true, optional: false, required: false
    public get dateCreated() {
      return this.getStringAttribute('date_created');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // owner - computed: true, optional: false, required: false
    public get owner() {
      return this.getStringAttribute('owner');
    }

    // parent_image - computed: false, optional: false, required: true
    private _parentImage?: string; 
    public get parentImage() {
      return this.getStringAttribute('parent_image');
    }
    public set parentImage(value: string) {
      this._parentImage = value;
    }
    // Temporarily expose input value. Use with caution.
    public get parentImageInput() {
      return this._parentImage
    }

    // platform - computed: true, optional: false, required: false
    public get platform() {
      return this.getStringAttribute('platform');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // version - computed: false, optional: false, required: true
    private _version?: string; 
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string) {
      this._version = value;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }

    // working_directory - computed: false, optional: true, required: false
    private _workingDirectory?: string | undefined; 
    public get workingDirectory() {
      return this.getStringAttribute('working_directory');
    }
    public set workingDirectory(value: string | undefined) {
      this._workingDirectory = value;
    }
    public resetWorkingDirectory() {
      this._workingDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workingDirectoryInput() {
      return this._workingDirectory
    }

    // block_device_mapping - computed: false, optional: true, required: false
    private _blockDeviceMapping?: ImagebuilderImageRecipeBlockDeviceMapping[] | undefined; 
    public get blockDeviceMapping() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('block_device_mapping') as any;
    }
    public set blockDeviceMapping(value: ImagebuilderImageRecipeBlockDeviceMapping[] | undefined) {
      this._blockDeviceMapping = value;
    }
    public resetBlockDeviceMapping() {
      this._blockDeviceMapping = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockDeviceMappingInput() {
      return this._blockDeviceMapping
    }

    // component - computed: false, optional: false, required: true
    private _component?: ImagebuilderImageRecipeComponent[]; 
    public get component() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('component') as any;
    }
    public set component(value: ImagebuilderImageRecipeComponent[]) {
      this._component = value;
    }
    // Temporarily expose input value. Use with caution.
    public get componentInput() {
      return this._component
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        parent_image: cdktf.stringToTerraform(this._parentImage),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        version: cdktf.stringToTerraform(this._version),
        working_directory: cdktf.stringToTerraform(this._workingDirectory),
        block_device_mapping: cdktf.listMapper(imagebuilderImageRecipeBlockDeviceMappingToTerraform)(this._blockDeviceMapping),
        component: cdktf.listMapper(imagebuilderImageRecipeComponentToTerraform)(this._component),
      };
    }
  }
  export interface ImagebuilderInfrastructureConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#description ImagebuilderInfrastructureConfiguration#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#instance_profile_name ImagebuilderInfrastructureConfiguration#instance_profile_name}
    */
    readonly instanceProfileName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#instance_types ImagebuilderInfrastructureConfiguration#instance_types}
    */
    readonly instanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#key_pair ImagebuilderInfrastructureConfiguration#key_pair}
    */
    readonly keyPair?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#name ImagebuilderInfrastructureConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#resource_tags ImagebuilderInfrastructureConfiguration#resource_tags}
    */
    readonly resourceTags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#security_group_ids ImagebuilderInfrastructureConfiguration#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#sns_topic_arn ImagebuilderInfrastructureConfiguration#sns_topic_arn}
    */
    readonly snsTopicArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#subnet_id ImagebuilderInfrastructureConfiguration#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#tags ImagebuilderInfrastructureConfiguration#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#tags_all ImagebuilderInfrastructureConfiguration#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#terminate_instance_on_failure ImagebuilderInfrastructureConfiguration#terminate_instance_on_failure}
    */
    readonly terminateInstanceOnFailure?: boolean | cdktf.IResolvable;
    /**
    * logging block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#logging ImagebuilderInfrastructureConfiguration#logging}
    */
    readonly logging?: ImagebuilderInfrastructureConfigurationLogging;
  }
  export interface ImagebuilderInfrastructureConfigurationLoggingS3Logs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#s3_bucket_name ImagebuilderInfrastructureConfiguration#s3_bucket_name}
    */
    readonly s3BucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#s3_key_prefix ImagebuilderInfrastructureConfiguration#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
  }

  function imagebuilderInfrastructureConfigurationLoggingS3LogsToTerraform(struct?: ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference | ImagebuilderInfrastructureConfigurationLoggingS3Logs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
      s3_key_prefix: cdktf.stringToTerraform(struct!.s3KeyPrefix),
    }
  }

  export class ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // s3_bucket_name - computed: false, optional: false, required: true
    private _s3BucketName?: string; 
    public get s3BucketName() {
      return this.getStringAttribute('s3_bucket_name');
    }
    public set s3BucketName(value: string) {
      this._s3BucketName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketNameInput() {
      return this._s3BucketName
    }

    // s3_key_prefix - computed: false, optional: true, required: false
    private _s3KeyPrefix?: string | undefined; 
    public get s3KeyPrefix() {
      return this.getStringAttribute('s3_key_prefix');
    }
    public set s3KeyPrefix(value: string | undefined) {
      this._s3KeyPrefix = value;
    }
    public resetS3KeyPrefix() {
      this._s3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyPrefixInput() {
      return this._s3KeyPrefix
    }
  }
  export interface ImagebuilderInfrastructureConfigurationLogging {
    /**
    * s3_logs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#s3_logs ImagebuilderInfrastructureConfiguration#s3_logs}
    */
    readonly s3Logs: ImagebuilderInfrastructureConfigurationLoggingS3Logs;
  }

  function imagebuilderInfrastructureConfigurationLoggingToTerraform(struct?: ImagebuilderInfrastructureConfigurationLoggingOutputReference | ImagebuilderInfrastructureConfigurationLogging): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      s3_logs: imagebuilderInfrastructureConfigurationLoggingS3LogsToTerraform(struct!.s3Logs),
    }
  }

  export class ImagebuilderInfrastructureConfigurationLoggingOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // s3_logs - computed: false, optional: false, required: true
    private _s3Logs?: ImagebuilderInfrastructureConfigurationLoggingS3Logs; 
    private __s3LogsOutput = new ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference(this as any, "s3_logs", true);
    public get s3Logs() {
      return this.__s3LogsOutput;
    }
    public putS3Logs(value: ImagebuilderInfrastructureConfigurationLoggingS3Logs) {
      this._s3Logs = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3LogsInput() {
      return this._s3Logs
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html aws_imagebuilder_infrastructure_configuration}
  */
  export class ImagebuilderInfrastructureConfiguration extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_imagebuilder_infrastructure_configuration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html aws_imagebuilder_infrastructure_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderInfrastructureConfigurationConfig
    */
    public constructor(scope: Construct, id: string, config: ImagebuilderInfrastructureConfigurationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_imagebuilder_infrastructure_configuration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._instanceProfileName = config.instanceProfileName;
      this._instanceTypes = config.instanceTypes;
      this._keyPair = config.keyPair;
      this._name = config.name;
      this._resourceTags = config.resourceTags;
      this._securityGroupIds = config.securityGroupIds;
      this._snsTopicArn = config.snsTopicArn;
      this._subnetId = config.subnetId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._terminateInstanceOnFailure = config.terminateInstanceOnFailure;
      this._logging = config.logging;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // date_created - computed: true, optional: false, required: false
    public get dateCreated() {
      return this.getStringAttribute('date_created');
    }

    // date_updated - computed: true, optional: false, required: false
    public get dateUpdated() {
      return this.getStringAttribute('date_updated');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_profile_name - computed: false, optional: false, required: true
    private _instanceProfileName?: string; 
    public get instanceProfileName() {
      return this.getStringAttribute('instance_profile_name');
    }
    public set instanceProfileName(value: string) {
      this._instanceProfileName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceProfileNameInput() {
      return this._instanceProfileName
    }

    // instance_types - computed: false, optional: true, required: false
    private _instanceTypes?: string[] | undefined; 
    public get instanceTypes() {
      return this.getListAttribute('instance_types');
    }
    public set instanceTypes(value: string[] | undefined) {
      this._instanceTypes = value;
    }
    public resetInstanceTypes() {
      this._instanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypesInput() {
      return this._instanceTypes
    }

    // key_pair - computed: false, optional: true, required: false
    private _keyPair?: string | undefined; 
    public get keyPair() {
      return this.getStringAttribute('key_pair');
    }
    public set keyPair(value: string | undefined) {
      this._keyPair = value;
    }
    public resetKeyPair() {
      this._keyPair = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyPairInput() {
      return this._keyPair
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
      return this._name
    }

    // resource_tags - computed: false, optional: true, required: false
    private _resourceTags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get resourceTags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('resource_tags') as any;
    }
    public set resourceTags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._resourceTags = value;
    }
    public resetResourceTags() {
      this._resourceTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTagsInput() {
      return this._resourceTags
    }

    // security_group_ids - computed: false, optional: true, required: false
    private _securityGroupIds?: string[] | undefined; 
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[] | undefined) {
      this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
      this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
      return this._securityGroupIds
    }

    // sns_topic_arn - computed: false, optional: true, required: false
    private _snsTopicArn?: string | undefined; 
    public get snsTopicArn() {
      return this.getStringAttribute('sns_topic_arn');
    }
    public set snsTopicArn(value: string | undefined) {
      this._snsTopicArn = value;
    }
    public resetSnsTopicArn() {
      this._snsTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsTopicArnInput() {
      return this._snsTopicArn
    }

    // subnet_id - computed: false, optional: true, required: false
    private _subnetId?: string | undefined; 
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string | undefined) {
      this._subnetId = value;
    }
    public resetSubnetId() {
      this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
      return this._subnetId
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // terminate_instance_on_failure - computed: false, optional: true, required: false
    private _terminateInstanceOnFailure?: boolean | cdktf.IResolvable | undefined; 
    public get terminateInstanceOnFailure() {
      return this.getBooleanAttribute('terminate_instance_on_failure') as any;
    }
    public set terminateInstanceOnFailure(value: boolean | cdktf.IResolvable | undefined) {
      this._terminateInstanceOnFailure = value;
    }
    public resetTerminateInstanceOnFailure() {
      this._terminateInstanceOnFailure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get terminateInstanceOnFailureInput() {
      return this._terminateInstanceOnFailure
    }

    // logging - computed: false, optional: true, required: false
    private _logging?: ImagebuilderInfrastructureConfigurationLogging | undefined; 
    private __loggingOutput = new ImagebuilderInfrastructureConfigurationLoggingOutputReference(this as any, "logging", true);
    public get logging() {
      return this.__loggingOutput;
    }
    public putLogging(value: ImagebuilderInfrastructureConfigurationLogging | undefined) {
      this._logging = value;
    }
    public resetLogging() {
      this._logging = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingInput() {
      return this._logging
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        instance_profile_name: cdktf.stringToTerraform(this._instanceProfileName),
        instance_types: cdktf.listMapper(cdktf.stringToTerraform)(this._instanceTypes),
        key_pair: cdktf.stringToTerraform(this._keyPair),
        name: cdktf.stringToTerraform(this._name),
        resource_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._resourceTags),
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
        sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn),
        subnet_id: cdktf.stringToTerraform(this._subnetId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        terminate_instance_on_failure: cdktf.booleanToTerraform(this._terminateInstanceOnFailure),
        logging: imagebuilderInfrastructureConfigurationLoggingToTerraform(this._logging),
      };
    }
  }
  export interface DataAwsImagebuilderComponentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_component.html#arn DataAwsImagebuilderComponent#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_component.html#tags DataAwsImagebuilderComponent#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_component.html aws_imagebuilder_component}
  */
  export class DataAwsImagebuilderComponent extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_imagebuilder_component";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_component.html aws_imagebuilder_component} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderComponentConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsImagebuilderComponentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_imagebuilder_component',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._arn = config.arn;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: false, optional: false, required: true
    private _arn?: string; 
    public get arn() {
      return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
      this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
      return this._arn
    }

    // change_description - computed: true, optional: false, required: false
    public get changeDescription() {
      return this.getStringAttribute('change_description');
    }

    // data - computed: true, optional: false, required: false
    public get data() {
      return this.getStringAttribute('data');
    }

    // date_created - computed: true, optional: false, required: false
    public get dateCreated() {
      return this.getStringAttribute('date_created');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // encrypted - computed: true, optional: false, required: false
    public get encrypted() {
      return this.getBooleanAttribute('encrypted') as any;
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // owner - computed: true, optional: false, required: false
    public get owner() {
      return this.getStringAttribute('owner');
    }

    // platform - computed: true, optional: false, required: false
    public get platform() {
      return this.getStringAttribute('platform');
    }

    // supported_os_versions - computed: true, optional: false, required: false
    public get supportedOsVersions() {
      return this.getListAttribute('supported_os_versions');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getStringAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        arn: cdktf.stringToTerraform(this._arn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsImagebuilderDistributionConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration.html#arn DataAwsImagebuilderDistributionConfiguration#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration.html#tags DataAwsImagebuilderDistributionConfiguration#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission extends cdktf.ComplexComputedList {

    // user_groups - computed: true, optional: false, required: false
    public get userGroups() {
      return this.getListAttribute('user_groups');
    }

    // user_ids - computed: true, optional: false, required: false
    public get userIds() {
      return this.getListAttribute('user_ids');
    }
  }
  export class DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration extends cdktf.ComplexComputedList {

    // ami_tags - computed: true, optional: false, required: false
    public get amiTags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ami_tags') as any;
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }

    // launch_permission - computed: true, optional: false, required: false
    public get launchPermission() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('launch_permission') as any;
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // target_account_ids - computed: true, optional: false, required: false
    public get targetAccountIds() {
      return this.getListAttribute('target_account_ids');
    }
  }
  export class DataAwsImagebuilderDistributionConfigurationDistribution extends cdktf.ComplexComputedList {

    // ami_distribution_configuration - computed: true, optional: false, required: false
    public get amiDistributionConfiguration() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ami_distribution_configuration') as any;
    }

    // license_configuration_arns - computed: true, optional: false, required: false
    public get licenseConfigurationArns() {
      return this.getListAttribute('license_configuration_arns');
    }

    // region - computed: true, optional: false, required: false
    public get region() {
      return this.getStringAttribute('region');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration.html aws_imagebuilder_distribution_configuration}
  */
  export class DataAwsImagebuilderDistributionConfiguration extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_imagebuilder_distribution_configuration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration.html aws_imagebuilder_distribution_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderDistributionConfigurationConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsImagebuilderDistributionConfigurationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_imagebuilder_distribution_configuration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._arn = config.arn;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: false, optional: false, required: true
    private _arn?: string; 
    public get arn() {
      return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
      this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
      return this._arn
    }

    // date_created - computed: true, optional: false, required: false
    public get dateCreated() {
      return this.getStringAttribute('date_created');
    }

    // date_updated - computed: true, optional: false, required: false
    public get dateUpdated() {
      return this.getStringAttribute('date_updated');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // distribution - computed: true, optional: false, required: false
    public distribution(index: string) {
      return new DataAwsImagebuilderDistributionConfigurationDistribution(this, 'distribution', index);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        arn: cdktf.stringToTerraform(this._arn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsImagebuilderImageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image.html#arn DataAwsImagebuilderImage#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image.html#tags DataAwsImagebuilderImage#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsImagebuilderImageImageTestsConfiguration extends cdktf.ComplexComputedList {

    // image_tests_enabled - computed: true, optional: false, required: false
    public get imageTestsEnabled() {
      return this.getBooleanAttribute('image_tests_enabled') as any;
    }

    // timeout_minutes - computed: true, optional: false, required: false
    public get timeoutMinutes() {
      return this.getNumberAttribute('timeout_minutes');
    }
  }
  export class DataAwsImagebuilderImageOutputResourcesAmis extends cdktf.ComplexComputedList {

    // account_id - computed: true, optional: false, required: false
    public get accountId() {
      return this.getStringAttribute('account_id');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // image - computed: true, optional: false, required: false
    public get image() {
      return this.getStringAttribute('image');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // region - computed: true, optional: false, required: false
    public get region() {
      return this.getStringAttribute('region');
    }
  }
  export class DataAwsImagebuilderImageOutputResources extends cdktf.ComplexComputedList {

    // amis - computed: true, optional: false, required: false
    public get amis() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('amis') as any;
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image.html aws_imagebuilder_image}
  */
  export class DataAwsImagebuilderImage extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_imagebuilder_image";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image.html aws_imagebuilder_image} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderImageConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsImagebuilderImageConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_imagebuilder_image',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._arn = config.arn;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: false, optional: false, required: true
    private _arn?: string; 
    public get arn() {
      return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
      this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
      return this._arn
    }

    // build_version_arn - computed: true, optional: false, required: false
    public get buildVersionArn() {
      return this.getStringAttribute('build_version_arn');
    }

    // date_created - computed: true, optional: false, required: false
    public get dateCreated() {
      return this.getStringAttribute('date_created');
    }

    // distribution_configuration_arn - computed: true, optional: false, required: false
    public get distributionConfigurationArn() {
      return this.getStringAttribute('distribution_configuration_arn');
    }

    // enhanced_image_metadata_enabled - computed: true, optional: false, required: false
    public get enhancedImageMetadataEnabled() {
      return this.getBooleanAttribute('enhanced_image_metadata_enabled') as any;
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image_recipe_arn - computed: true, optional: false, required: false
    public get imageRecipeArn() {
      return this.getStringAttribute('image_recipe_arn');
    }

    // image_tests_configuration - computed: true, optional: false, required: false
    public imageTestsConfiguration(index: string) {
      return new DataAwsImagebuilderImageImageTestsConfiguration(this, 'image_tests_configuration', index);
    }

    // infrastructure_configuration_arn - computed: true, optional: false, required: false
    public get infrastructureConfigurationArn() {
      return this.getStringAttribute('infrastructure_configuration_arn');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // os_version - computed: true, optional: false, required: false
    public get osVersion() {
      return this.getStringAttribute('os_version');
    }

    // output_resources - computed: true, optional: false, required: false
    public outputResources(index: string) {
      return new DataAwsImagebuilderImageOutputResources(this, 'output_resources', index);
    }

    // platform - computed: true, optional: false, required: false
    public get platform() {
      return this.getStringAttribute('platform');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getStringAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        arn: cdktf.stringToTerraform(this._arn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsImagebuilderImagePipelineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_pipeline.html#arn DataAwsImagebuilderImagePipeline#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_pipeline.html#tags DataAwsImagebuilderImagePipeline#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsImagebuilderImagePipelineImageTestsConfiguration extends cdktf.ComplexComputedList {

    // image_tests_enabled - computed: true, optional: false, required: false
    public get imageTestsEnabled() {
      return this.getBooleanAttribute('image_tests_enabled') as any;
    }

    // timeout_minutes - computed: true, optional: false, required: false
    public get timeoutMinutes() {
      return this.getNumberAttribute('timeout_minutes');
    }
  }
  export class DataAwsImagebuilderImagePipelineSchedule extends cdktf.ComplexComputedList {

    // pipeline_execution_start_condition - computed: true, optional: false, required: false
    public get pipelineExecutionStartCondition() {
      return this.getStringAttribute('pipeline_execution_start_condition');
    }

    // schedule_expression - computed: true, optional: false, required: false
    public get scheduleExpression() {
      return this.getStringAttribute('schedule_expression');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_pipeline.html aws_imagebuilder_image_pipeline}
  */
  export class DataAwsImagebuilderImagePipeline extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_imagebuilder_image_pipeline";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_pipeline.html aws_imagebuilder_image_pipeline} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderImagePipelineConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsImagebuilderImagePipelineConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_imagebuilder_image_pipeline',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._arn = config.arn;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: false, optional: false, required: true
    private _arn?: string; 
    public get arn() {
      return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
      this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
      return this._arn
    }

    // date_created - computed: true, optional: false, required: false
    public get dateCreated() {
      return this.getStringAttribute('date_created');
    }

    // date_last_run - computed: true, optional: false, required: false
    public get dateLastRun() {
      return this.getStringAttribute('date_last_run');
    }

    // date_next_run - computed: true, optional: false, required: false
    public get dateNextRun() {
      return this.getStringAttribute('date_next_run');
    }

    // date_updated - computed: true, optional: false, required: false
    public get dateUpdated() {
      return this.getStringAttribute('date_updated');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // distribution_configuration_arn - computed: true, optional: false, required: false
    public get distributionConfigurationArn() {
      return this.getStringAttribute('distribution_configuration_arn');
    }

    // enhanced_image_metadata_enabled - computed: true, optional: false, required: false
    public get enhancedImageMetadataEnabled() {
      return this.getBooleanAttribute('enhanced_image_metadata_enabled') as any;
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image_recipe_arn - computed: true, optional: false, required: false
    public get imageRecipeArn() {
      return this.getStringAttribute('image_recipe_arn');
    }

    // image_tests_configuration - computed: true, optional: false, required: false
    public imageTestsConfiguration(index: string) {
      return new DataAwsImagebuilderImagePipelineImageTestsConfiguration(this, 'image_tests_configuration', index);
    }

    // infrastructure_configuration_arn - computed: true, optional: false, required: false
    public get infrastructureConfigurationArn() {
      return this.getStringAttribute('infrastructure_configuration_arn');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // platform - computed: true, optional: false, required: false
    public get platform() {
      return this.getStringAttribute('platform');
    }

    // schedule - computed: true, optional: false, required: false
    public schedule(index: string) {
      return new DataAwsImagebuilderImagePipelineSchedule(this, 'schedule', index);
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        arn: cdktf.stringToTerraform(this._arn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsImagebuilderImageRecipeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe.html#arn DataAwsImagebuilderImageRecipe#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe.html#tags DataAwsImagebuilderImageRecipe#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs extends cdktf.ComplexComputedList {

    // delete_on_termination - computed: true, optional: false, required: false
    public get deleteOnTermination() {
      return this.getBooleanAttribute('delete_on_termination') as any;
    }

    // encrypted - computed: true, optional: false, required: false
    public get encrypted() {
      return this.getBooleanAttribute('encrypted') as any;
    }

    // iops - computed: true, optional: false, required: false
    public get iops() {
      return this.getNumberAttribute('iops');
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }

    // snapshot_id - computed: true, optional: false, required: false
    public get snapshotId() {
      return this.getStringAttribute('snapshot_id');
    }

    // volume_size - computed: true, optional: false, required: false
    public get volumeSize() {
      return this.getNumberAttribute('volume_size');
    }

    // volume_type - computed: true, optional: false, required: false
    public get volumeType() {
      return this.getStringAttribute('volume_type');
    }
  }
  export class DataAwsImagebuilderImageRecipeBlockDeviceMapping extends cdktf.ComplexComputedList {

    // device_name - computed: true, optional: false, required: false
    public get deviceName() {
      return this.getStringAttribute('device_name');
    }

    // ebs - computed: true, optional: false, required: false
    public get ebs() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ebs') as any;
    }

    // no_device - computed: true, optional: false, required: false
    public get noDevice() {
      return this.getStringAttribute('no_device');
    }

    // virtual_name - computed: true, optional: false, required: false
    public get virtualName() {
      return this.getStringAttribute('virtual_name');
    }
  }
  export class DataAwsImagebuilderImageRecipeComponent extends cdktf.ComplexComputedList {

    // component_arn - computed: true, optional: false, required: false
    public get componentArn() {
      return this.getStringAttribute('component_arn');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe.html aws_imagebuilder_image_recipe}
  */
  export class DataAwsImagebuilderImageRecipe extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_imagebuilder_image_recipe";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe.html aws_imagebuilder_image_recipe} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderImageRecipeConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsImagebuilderImageRecipeConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_imagebuilder_image_recipe',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._arn = config.arn;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: false, optional: false, required: true
    private _arn?: string; 
    public get arn() {
      return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
      this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
      return this._arn
    }

    // block_device_mapping - computed: true, optional: false, required: false
    public blockDeviceMapping(index: string) {
      return new DataAwsImagebuilderImageRecipeBlockDeviceMapping(this, 'block_device_mapping', index);
    }

    // component - computed: true, optional: false, required: false
    public component(index: string) {
      return new DataAwsImagebuilderImageRecipeComponent(this, 'component', index);
    }

    // date_created - computed: true, optional: false, required: false
    public get dateCreated() {
      return this.getStringAttribute('date_created');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // owner - computed: true, optional: false, required: false
    public get owner() {
      return this.getStringAttribute('owner');
    }

    // parent_image - computed: true, optional: false, required: false
    public get parentImage() {
      return this.getStringAttribute('parent_image');
    }

    // platform - computed: true, optional: false, required: false
    public get platform() {
      return this.getStringAttribute('platform');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getStringAttribute('version');
    }

    // working_directory - computed: true, optional: false, required: false
    public get workingDirectory() {
      return this.getStringAttribute('working_directory');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        arn: cdktf.stringToTerraform(this._arn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsImagebuilderInfrastructureConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration.html#arn DataAwsImagebuilderInfrastructureConfiguration#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration.html#resource_tags DataAwsImagebuilderInfrastructureConfiguration#resource_tags}
    */
    readonly resourceTags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration.html#tags DataAwsImagebuilderInfrastructureConfiguration#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs extends cdktf.ComplexComputedList {

    // s3_bucket_name - computed: true, optional: false, required: false
    public get s3BucketName() {
      return this.getStringAttribute('s3_bucket_name');
    }

    // s3_key_prefix - computed: true, optional: false, required: false
    public get s3KeyPrefix() {
      return this.getStringAttribute('s3_key_prefix');
    }
  }
  export class DataAwsImagebuilderInfrastructureConfigurationLogging extends cdktf.ComplexComputedList {

    // s3_logs - computed: true, optional: false, required: false
    public get s3Logs() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('s3_logs') as any;
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration.html aws_imagebuilder_infrastructure_configuration}
  */
  export class DataAwsImagebuilderInfrastructureConfiguration extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_imagebuilder_infrastructure_configuration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration.html aws_imagebuilder_infrastructure_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderInfrastructureConfigurationConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsImagebuilderInfrastructureConfigurationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_imagebuilder_infrastructure_configuration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._arn = config.arn;
      this._resourceTags = config.resourceTags;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: false, optional: false, required: true
    private _arn?: string; 
    public get arn() {
      return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
      this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
      return this._arn
    }

    // date_created - computed: true, optional: false, required: false
    public get dateCreated() {
      return this.getStringAttribute('date_created');
    }

    // date_updated - computed: true, optional: false, required: false
    public get dateUpdated() {
      return this.getStringAttribute('date_updated');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_profile_name - computed: true, optional: false, required: false
    public get instanceProfileName() {
      return this.getStringAttribute('instance_profile_name');
    }

    // instance_types - computed: true, optional: false, required: false
    public get instanceTypes() {
      return this.getListAttribute('instance_types');
    }

    // key_pair - computed: true, optional: false, required: false
    public get keyPair() {
      return this.getStringAttribute('key_pair');
    }

    // logging - computed: true, optional: false, required: false
    public logging(index: string) {
      return new DataAwsImagebuilderInfrastructureConfigurationLogging(this, 'logging', index);
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // resource_tags - computed: true, optional: true, required: false
    private _resourceTags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get resourceTags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('resource_tags') as any;
    }
    public set resourceTags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._resourceTags = value;
    }
    public resetResourceTags() {
      this._resourceTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTagsInput() {
      return this._resourceTags
    }

    // security_group_ids - computed: true, optional: false, required: false
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }

    // sns_topic_arn - computed: true, optional: false, required: false
    public get snsTopicArn() {
      return this.getStringAttribute('sns_topic_arn');
    }

    // subnet_id - computed: true, optional: false, required: false
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // terminate_instance_on_failure - computed: true, optional: false, required: false
    public get terminateInstanceOnFailure() {
      return this.getBooleanAttribute('terminate_instance_on_failure') as any;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        arn: cdktf.stringToTerraform(this._arn),
        resource_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._resourceTags),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
}
