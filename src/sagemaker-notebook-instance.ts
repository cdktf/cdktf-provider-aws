// https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SagemakerNotebookInstanceConfig extends TerraformMetaArguments {
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

export class SagemakerNotebookInstance extends TerraformResource {

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
    return this._additionalCodeRepositories;
  }
  public set additionalCodeRepositories(value: string[] | undefined) {
    this._additionalCodeRepositories = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_code_repository - computed: false, optional: true, required: false
  private _defaultCodeRepository?: string;
  public get defaultCodeRepository() {
    return this._defaultCodeRepository;
  }
  public set defaultCodeRepository(value: string | undefined) {
    this._defaultCodeRepository = value;
  }

  // direct_internet_access - computed: false, optional: true, required: false
  private _directInternetAccess?: string;
  public get directInternetAccess() {
    return this._directInternetAccess;
  }
  public set directInternetAccess(value: string | undefined) {
    this._directInternetAccess = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType: string;
  public get instanceType() {
    return this._instanceType;
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this._kmsKeyId;
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }

  // lifecycle_config_name - computed: false, optional: true, required: false
  private _lifecycleConfigName?: string;
  public get lifecycleConfigName() {
    return this._lifecycleConfigName;
  }
  public set lifecycleConfigName(value: string | undefined) {
    this._lifecycleConfigName = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network_interface_id - computed: true, optional: false, required: true
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }

  // root_access - computed: false, optional: true, required: false
  private _rootAccess?: string;
  public get rootAccess() {
    return this._rootAccess;
  }
  public set rootAccess(value: string | undefined) {
    this._rootAccess = value;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[];
  public get securityGroups() {
    return this._securityGroups ?? this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[] | undefined) {
    this._securityGroups = value;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this._subnetId;
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }

  // volume_size - computed: false, optional: true, required: false
  private _volumeSize?: number;
  public get volumeSize() {
    return this._volumeSize;
  }
  public set volumeSize(value: number | undefined) {
    this._volumeSize = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_code_repositories: this._additionalCodeRepositories,
      default_code_repository: this._defaultCodeRepository,
      direct_internet_access: this._directInternetAccess,
      instance_type: this._instanceType,
      kms_key_id: this._kmsKeyId,
      lifecycle_config_name: this._lifecycleConfigName,
      name: this._name,
      role_arn: this._roleArn,
      root_access: this._rootAccess,
      security_groups: this._securityGroups,
      subnet_id: this._subnetId,
      tags: this._tags,
      volume_size: this._volumeSize,
    };
  }
}
