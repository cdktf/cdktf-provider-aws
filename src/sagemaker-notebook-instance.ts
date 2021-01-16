// https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerNotebookInstanceConfig extends cdktf.TerraformMetaArguments {
  readonly additionalCodeRepositories?: string[];
  readonly defaultCodeRepository?: string;
  readonly directInternetAccess?: string;
  readonly instanceType: string;
  readonly kmsKeyId?: string;
  readonly lifecycleConfigName?: string;
  readonly name: string;
  readonly roleArn: string;
  readonly rootAccess?: string;
  readonly securityGroups?: string[];
  readonly subnetId?: string;
  readonly tags?: { [key: string]: string };
  readonly volumeSize?: number;
}

// Resource

export class SagemakerNotebookInstance extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SagemakerNotebookInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_notebook_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._additionalCodeRepositories = config.additionalCodeRepositories;
    this._defaultCodeRepository = config.defaultCodeRepository;
    this._directInternetAccess = config.directInternetAccess;
    this._instanceType = config.instanceType;
    this._kmsKeyId = config.kmsKeyId;
    this._lifecycleConfigName = config.lifecycleConfigName;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._rootAccess = config.rootAccess;
    this._securityGroups = config.securityGroups;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._volumeSize = config.volumeSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_code_repositories - computed: false, optional: true, required: false
  private _additionalCodeRepositories?: string[];
  public get additionalCodeRepositories() {
    return this.getListAttribute('additional_code_repositories');
  }
  public set additionalCodeRepositories(value: string[] ) {
    this._additionalCodeRepositories = value;
  }
  public resetAdditionalCodeRepositories() {
    this._additionalCodeRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalCodeRepositoriesInput() {
    return this._additionalCodeRepositories
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
  public set defaultCodeRepository(value: string ) {
    this._defaultCodeRepository = value;
  }
  public resetDefaultCodeRepository() {
    this._defaultCodeRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCodeRepositoryInput() {
    return this._defaultCodeRepository
  }

  // direct_internet_access - computed: false, optional: true, required: false
  private _directInternetAccess?: string;
  public get directInternetAccess() {
    return this.getStringAttribute('direct_internet_access');
  }
  public set directInternetAccess(value: string ) {
    this._directInternetAccess = value;
  }
  public resetDirectInternetAccess() {
    this._directInternetAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directInternetAccessInput() {
    return this._directInternetAccess
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType: string;
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string ) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }

  // lifecycle_config_name - computed: false, optional: true, required: false
  private _lifecycleConfigName?: string;
  public get lifecycleConfigName() {
    return this.getStringAttribute('lifecycle_config_name');
  }
  public set lifecycleConfigName(value: string ) {
    this._lifecycleConfigName = value;
  }
  public resetLifecycleConfigName() {
    this._lifecycleConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigNameInput() {
    return this._lifecycleConfigName
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

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // root_access - computed: false, optional: true, required: false
  private _rootAccess?: string;
  public get rootAccess() {
    return this.getStringAttribute('root_access');
  }
  public set rootAccess(value: string ) {
    this._rootAccess = value;
  }
  public resetRootAccess() {
    this._rootAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootAccessInput() {
    return this._rootAccess
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[];
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string ) {
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // volume_size - computed: false, optional: true, required: false
  private _volumeSize?: number;
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number ) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_code_repositories: cdktf.listMapper(cdktf.stringToTerraform)(this._additionalCodeRepositories),
      default_code_repository: cdktf.stringToTerraform(this._defaultCodeRepository),
      direct_internet_access: cdktf.stringToTerraform(this._directInternetAccess),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      lifecycle_config_name: cdktf.stringToTerraform(this._lifecycleConfigName),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      root_access: cdktf.stringToTerraform(this._rootAccess),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      volume_size: cdktf.numberToTerraform(this._volumeSize),
    };
  }
}
