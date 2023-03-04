// https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerNotebookInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#accelerator_types SagemakerNotebookInstance#accelerator_types}
  */
  readonly acceleratorTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#additional_code_repositories SagemakerNotebookInstance#additional_code_repositories}
  */
  readonly additionalCodeRepositories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#default_code_repository SagemakerNotebookInstance#default_code_repository}
  */
  readonly defaultCodeRepository?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#direct_internet_access SagemakerNotebookInstance#direct_internet_access}
  */
  readonly directInternetAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#id SagemakerNotebookInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#instance_type SagemakerNotebookInstance#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#kms_key_id SagemakerNotebookInstance#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#lifecycle_config_name SagemakerNotebookInstance#lifecycle_config_name}
  */
  readonly lifecycleConfigName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#name SagemakerNotebookInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#platform_identifier SagemakerNotebookInstance#platform_identifier}
  */
  readonly platformIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#role_arn SagemakerNotebookInstance#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#root_access SagemakerNotebookInstance#root_access}
  */
  readonly rootAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#security_groups SagemakerNotebookInstance#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#subnet_id SagemakerNotebookInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#tags SagemakerNotebookInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#tags_all SagemakerNotebookInstance#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#volume_size SagemakerNotebookInstance#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * instance_metadata_service_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#instance_metadata_service_configuration SagemakerNotebookInstance#instance_metadata_service_configuration}
  */
  readonly instanceMetadataServiceConfiguration?: SagemakerNotebookInstanceInstanceMetadataServiceConfiguration;
}
export interface SagemakerNotebookInstanceInstanceMetadataServiceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#minimum_instance_metadata_service_version SagemakerNotebookInstance#minimum_instance_metadata_service_version}
  */
  readonly minimumInstanceMetadataServiceVersion?: string;
}

export function sagemakerNotebookInstanceInstanceMetadataServiceConfigurationToTerraform(struct?: SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference | SagemakerNotebookInstanceInstanceMetadataServiceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_instance_metadata_service_version: cdktf.stringToTerraform(struct!.minimumInstanceMetadataServiceVersion),
  }
}

export class SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerNotebookInstanceInstanceMetadataServiceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumInstanceMetadataServiceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumInstanceMetadataServiceVersion = this._minimumInstanceMetadataServiceVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerNotebookInstanceInstanceMetadataServiceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minimumInstanceMetadataServiceVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minimumInstanceMetadataServiceVersion = value.minimumInstanceMetadataServiceVersion;
    }
  }

  // minimum_instance_metadata_service_version - computed: true, optional: true, required: false
  private _minimumInstanceMetadataServiceVersion?: string; 
  public get minimumInstanceMetadataServiceVersion() {
    return this.getStringAttribute('minimum_instance_metadata_service_version');
  }
  public set minimumInstanceMetadataServiceVersion(value: string) {
    this._minimumInstanceMetadataServiceVersion = value;
  }
  public resetMinimumInstanceMetadataServiceVersion() {
    this._minimumInstanceMetadataServiceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInstanceMetadataServiceVersionInput() {
    return this._minimumInstanceMetadataServiceVersion;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance aws_sagemaker_notebook_instance}
*/
export class SagemakerNotebookInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_notebook_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance aws_sagemaker_notebook_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerNotebookInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerNotebookInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_notebook_instance',
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
    this._acceleratorTypes = config.acceleratorTypes;
    this._additionalCodeRepositories = config.additionalCodeRepositories;
    this._defaultCodeRepository = config.defaultCodeRepository;
    this._directInternetAccess = config.directInternetAccess;
    this._id = config.id;
    this._instanceType = config.instanceType;
    this._kmsKeyId = config.kmsKeyId;
    this._lifecycleConfigName = config.lifecycleConfigName;
    this._name = config.name;
    this._platformIdentifier = config.platformIdentifier;
    this._roleArn = config.roleArn;
    this._rootAccess = config.rootAccess;
    this._securityGroups = config.securityGroups;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._volumeSize = config.volumeSize;
    this._instanceMetadataServiceConfiguration.internalValue = config.instanceMetadataServiceConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerator_types - computed: false, optional: true, required: false
  private _acceleratorTypes?: string[]; 
  public get acceleratorTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('accelerator_types'));
  }
  public set acceleratorTypes(value: string[]) {
    this._acceleratorTypes = value;
  }
  public resetAcceleratorTypes() {
    this._acceleratorTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypesInput() {
    return this._acceleratorTypes;
  }

  // additional_code_repositories - computed: false, optional: true, required: false
  private _additionalCodeRepositories?: string[]; 
  public get additionalCodeRepositories() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_code_repositories'));
  }
  public set additionalCodeRepositories(value: string[]) {
    this._additionalCodeRepositories = value;
  }
  public resetAdditionalCodeRepositories() {
    this._additionalCodeRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalCodeRepositoriesInput() {
    return this._additionalCodeRepositories;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_code_repository - computed: false, optional: true, required: false
  private _defaultCodeRepository?: string; 
  public get defaultCodeRepository() {
    return this.getStringAttribute('default_code_repository');
  }
  public set defaultCodeRepository(value: string) {
    this._defaultCodeRepository = value;
  }
  public resetDefaultCodeRepository() {
    this._defaultCodeRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCodeRepositoryInput() {
    return this._defaultCodeRepository;
  }

  // direct_internet_access - computed: false, optional: true, required: false
  private _directInternetAccess?: string; 
  public get directInternetAccess() {
    return this.getStringAttribute('direct_internet_access');
  }
  public set directInternetAccess(value: string) {
    this._directInternetAccess = value;
  }
  public resetDirectInternetAccess() {
    this._directInternetAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directInternetAccessInput() {
    return this._directInternetAccess;
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

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // lifecycle_config_name - computed: false, optional: true, required: false
  private _lifecycleConfigName?: string; 
  public get lifecycleConfigName() {
    return this.getStringAttribute('lifecycle_config_name');
  }
  public set lifecycleConfigName(value: string) {
    this._lifecycleConfigName = value;
  }
  public resetLifecycleConfigName() {
    this._lifecycleConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigNameInput() {
    return this._lifecycleConfigName;
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

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // platform_identifier - computed: true, optional: true, required: false
  private _platformIdentifier?: string; 
  public get platformIdentifier() {
    return this.getStringAttribute('platform_identifier');
  }
  public set platformIdentifier(value: string) {
    this._platformIdentifier = value;
  }
  public resetPlatformIdentifier() {
    this._platformIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformIdentifierInput() {
    return this._platformIdentifier;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // root_access - computed: false, optional: true, required: false
  private _rootAccess?: string; 
  public get rootAccess() {
    return this.getStringAttribute('root_access');
  }
  public set rootAccess(value: string) {
    this._rootAccess = value;
  }
  public resetRootAccess() {
    this._rootAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootAccessInput() {
    return this._rootAccess;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // volume_size - computed: false, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // instance_metadata_service_configuration - computed: false, optional: true, required: false
  private _instanceMetadataServiceConfiguration = new SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference(this, "instance_metadata_service_configuration");
  public get instanceMetadataServiceConfiguration() {
    return this._instanceMetadataServiceConfiguration;
  }
  public putInstanceMetadataServiceConfiguration(value: SagemakerNotebookInstanceInstanceMetadataServiceConfiguration) {
    this._instanceMetadataServiceConfiguration.internalValue = value;
  }
  public resetInstanceMetadataServiceConfiguration() {
    this._instanceMetadataServiceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMetadataServiceConfigurationInput() {
    return this._instanceMetadataServiceConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accelerator_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._acceleratorTypes),
      additional_code_repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalCodeRepositories),
      default_code_repository: cdktf.stringToTerraform(this._defaultCodeRepository),
      direct_internet_access: cdktf.stringToTerraform(this._directInternetAccess),
      id: cdktf.stringToTerraform(this._id),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      lifecycle_config_name: cdktf.stringToTerraform(this._lifecycleConfigName),
      name: cdktf.stringToTerraform(this._name),
      platform_identifier: cdktf.stringToTerraform(this._platformIdentifier),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      root_access: cdktf.stringToTerraform(this._rootAccess),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      volume_size: cdktf.numberToTerraform(this._volumeSize),
      instance_metadata_service_configuration: sagemakerNotebookInstanceInstanceMetadataServiceConfigurationToTerraform(this._instanceMetadataServiceConfiguration.internalValue),
    };
  }
}
