// https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerNotebookInstanceConfig extends cdktf.TerraformMetaArguments {
  readonly directInternetAccess?: string;
  readonly instanceType: string;
  readonly kmsKeyId?: string;
  readonly lifecycleConfigName?: string;
  readonly name: string;
  readonly roleArn: string;
  readonly securityGroups?: string[];
  readonly subnetId?: string;
  readonly tags?: { [key: string]: string };
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
    this._directInternetAccess = config.directInternetAccess;
    this._instanceType = config.instanceType;
    this._kmsKeyId = config.kmsKeyId;
    this._lifecycleConfigName = config.lifecycleConfigName;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._securityGroups = config.securityGroups;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      direct_internet_access: cdktf.stringToTerraform(this._directInternetAccess),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      lifecycle_config_name: cdktf.stringToTerraform(this._lifecycleConfigName),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
