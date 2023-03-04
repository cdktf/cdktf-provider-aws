// https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueDevEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#arguments GlueDevEndpoint#arguments}
  */
  readonly arguments?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#extra_jars_s3_path GlueDevEndpoint#extra_jars_s3_path}
  */
  readonly extraJarsS3Path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#extra_python_libs_s3_path GlueDevEndpoint#extra_python_libs_s3_path}
  */
  readonly extraPythonLibsS3Path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#glue_version GlueDevEndpoint#glue_version}
  */
  readonly glueVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#id GlueDevEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#name GlueDevEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#number_of_nodes GlueDevEndpoint#number_of_nodes}
  */
  readonly numberOfNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#number_of_workers GlueDevEndpoint#number_of_workers}
  */
  readonly numberOfWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#public_key GlueDevEndpoint#public_key}
  */
  readonly publicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#public_keys GlueDevEndpoint#public_keys}
  */
  readonly publicKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#role_arn GlueDevEndpoint#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#security_configuration GlueDevEndpoint#security_configuration}
  */
  readonly securityConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#security_group_ids GlueDevEndpoint#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#subnet_id GlueDevEndpoint#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#tags GlueDevEndpoint#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#tags_all GlueDevEndpoint#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#worker_type GlueDevEndpoint#worker_type}
  */
  readonly workerType?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint aws_glue_dev_endpoint}
*/
export class GlueDevEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_dev_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint aws_glue_dev_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueDevEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: GlueDevEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_dev_endpoint',
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
    this._arguments = config.arguments;
    this._extraJarsS3Path = config.extraJarsS3Path;
    this._extraPythonLibsS3Path = config.extraPythonLibsS3Path;
    this._glueVersion = config.glueVersion;
    this._id = config.id;
    this._name = config.name;
    this._numberOfNodes = config.numberOfNodes;
    this._numberOfWorkers = config.numberOfWorkers;
    this._publicKey = config.publicKey;
    this._publicKeys = config.publicKeys;
    this._roleArn = config.roleArn;
    this._securityConfiguration = config.securityConfiguration;
    this._securityGroupIds = config.securityGroupIds;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._workerType = config.workerType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arguments - computed: false, optional: true, required: false
  private _arguments?: { [key: string]: string }; 
  public get arguments() {
    return this.getStringMapAttribute('arguments');
  }
  public set arguments(value: { [key: string]: string }) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // extra_jars_s3_path - computed: false, optional: true, required: false
  private _extraJarsS3Path?: string; 
  public get extraJarsS3Path() {
    return this.getStringAttribute('extra_jars_s3_path');
  }
  public set extraJarsS3Path(value: string) {
    this._extraJarsS3Path = value;
  }
  public resetExtraJarsS3Path() {
    this._extraJarsS3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraJarsS3PathInput() {
    return this._extraJarsS3Path;
  }

  // extra_python_libs_s3_path - computed: false, optional: true, required: false
  private _extraPythonLibsS3Path?: string; 
  public get extraPythonLibsS3Path() {
    return this.getStringAttribute('extra_python_libs_s3_path');
  }
  public set extraPythonLibsS3Path(value: string) {
    this._extraPythonLibsS3Path = value;
  }
  public resetExtraPythonLibsS3Path() {
    this._extraPythonLibsS3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraPythonLibsS3PathInput() {
    return this._extraPythonLibsS3Path;
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // glue_version - computed: false, optional: true, required: false
  private _glueVersion?: string; 
  public get glueVersion() {
    return this.getStringAttribute('glue_version');
  }
  public set glueVersion(value: string) {
    this._glueVersion = value;
  }
  public resetGlueVersion() {
    this._glueVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glueVersionInput() {
    return this._glueVersion;
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

  // number_of_nodes - computed: false, optional: true, required: false
  private _numberOfNodes?: number; 
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }
  public set numberOfNodes(value: number) {
    this._numberOfNodes = value;
  }
  public resetNumberOfNodes() {
    this._numberOfNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfNodesInput() {
    return this._numberOfNodes;
  }

  // number_of_workers - computed: false, optional: true, required: false
  private _numberOfWorkers?: number; 
  public get numberOfWorkers() {
    return this.getNumberAttribute('number_of_workers');
  }
  public set numberOfWorkers(value: number) {
    this._numberOfWorkers = value;
  }
  public resetNumberOfWorkers() {
    this._numberOfWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfWorkersInput() {
    return this._numberOfWorkers;
  }

  // private_address - computed: true, optional: false, required: false
  public get privateAddress() {
    return this.getStringAttribute('private_address');
  }

  // public_address - computed: true, optional: false, required: false
  public get publicAddress() {
    return this.getStringAttribute('public_address');
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // public_keys - computed: false, optional: true, required: false
  private _publicKeys?: string[]; 
  public get publicKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('public_keys'));
  }
  public set publicKeys(value: string[]) {
    this._publicKeys = value;
  }
  public resetPublicKeys() {
    this._publicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeysInput() {
    return this._publicKeys;
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

  // security_configuration - computed: false, optional: true, required: false
  private _securityConfiguration?: string; 
  public get securityConfiguration() {
    return this.getStringAttribute('security_configuration');
  }
  public set securityConfiguration(value: string) {
    this._securityConfiguration = value;
  }
  public resetSecurityConfiguration() {
    this._securityConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityConfigurationInput() {
    return this._securityConfiguration;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // worker_type - computed: false, optional: true, required: false
  private _workerType?: string; 
  public get workerType() {
    return this.getStringAttribute('worker_type');
  }
  public set workerType(value: string) {
    this._workerType = value;
  }
  public resetWorkerType() {
    this._workerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerTypeInput() {
    return this._workerType;
  }

  // yarn_endpoint_address - computed: true, optional: false, required: false
  public get yarnEndpointAddress() {
    return this.getStringAttribute('yarn_endpoint_address');
  }

  // zeppelin_remote_spark_interpreter_port - computed: true, optional: false, required: false
  public get zeppelinRemoteSparkInterpreterPort() {
    return this.getNumberAttribute('zeppelin_remote_spark_interpreter_port');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arguments: cdktf.hashMapper(cdktf.stringToTerraform)(this._arguments),
      extra_jars_s3_path: cdktf.stringToTerraform(this._extraJarsS3Path),
      extra_python_libs_s3_path: cdktf.stringToTerraform(this._extraPythonLibsS3Path),
      glue_version: cdktf.stringToTerraform(this._glueVersion),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      number_of_nodes: cdktf.numberToTerraform(this._numberOfNodes),
      number_of_workers: cdktf.numberToTerraform(this._numberOfWorkers),
      public_key: cdktf.stringToTerraform(this._publicKey),
      public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._publicKeys),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      security_configuration: cdktf.stringToTerraform(this._securityConfiguration),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      worker_type: cdktf.stringToTerraform(this._workerType),
    };
  }
}
