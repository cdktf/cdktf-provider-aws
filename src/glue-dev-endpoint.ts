// https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GlueDevEndpointConfig extends TerraformMetaArguments {
  readonly arguments?: { [key: string]: string };
  readonly extraJarsS3Path?: string;
  readonly extraPythonLibsS3Path?: string;
  readonly glueVersion?: string;
  readonly name: string;
  readonly numberOfNodes?: number;
  readonly numberOfWorkers?: number;
  readonly publicKey?: string;
  readonly publicKeys?: string[];
  readonly roleArn: string;
  readonly securityConfiguration?: string;
  readonly securityGroupIds?: string[];
  readonly subnetId?: string;
  readonly tags?: { [key: string]: string };
  readonly workerType?: string;
}

// Resource

export class GlueDevEndpoint extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GlueDevEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_dev_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._arguments = config.arguments;
    this._extraJarsS3Path = config.extraJarsS3Path;
    this._extraPythonLibsS3Path = config.extraPythonLibsS3Path;
    this._glueVersion = config.glueVersion;
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
    this._workerType = config.workerType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arguments - computed: false, optional: true, required: false
  private _arguments?: { [key: string]: string };
  public get arguments() {
    return this._arguments;
  }
  public set arguments(value: { [key: string]: string } | undefined) {
    this._arguments = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone - computed: true, optional: false, required: true
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // extra_jars_s3_path - computed: false, optional: true, required: false
  private _extraJarsS3Path?: string;
  public get extraJarsS3Path() {
    return this._extraJarsS3Path;
  }
  public set extraJarsS3Path(value: string | undefined) {
    this._extraJarsS3Path = value;
  }

  // extra_python_libs_s3_path - computed: false, optional: true, required: false
  private _extraPythonLibsS3Path?: string;
  public get extraPythonLibsS3Path() {
    return this._extraPythonLibsS3Path;
  }
  public set extraPythonLibsS3Path(value: string | undefined) {
    this._extraPythonLibsS3Path = value;
  }

  // failure_reason - computed: true, optional: false, required: true
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // glue_version - computed: false, optional: true, required: false
  private _glueVersion?: string;
  public get glueVersion() {
    return this._glueVersion;
  }
  public set glueVersion(value: string | undefined) {
    this._glueVersion = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // number_of_nodes - computed: false, optional: true, required: false
  private _numberOfNodes?: number;
  public get numberOfNodes() {
    return this._numberOfNodes;
  }
  public set numberOfNodes(value: number | undefined) {
    this._numberOfNodes = value;
  }

  // number_of_workers - computed: false, optional: true, required: false
  private _numberOfWorkers?: number;
  public get numberOfWorkers() {
    return this._numberOfWorkers;
  }
  public set numberOfWorkers(value: number | undefined) {
    this._numberOfWorkers = value;
  }

  // private_address - computed: true, optional: false, required: true
  public get privateAddress() {
    return this.getStringAttribute('private_address');
  }

  // public_address - computed: true, optional: false, required: true
  public get publicAddress() {
    return this.getStringAttribute('public_address');
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string;
  public get publicKey() {
    return this._publicKey;
  }
  public set publicKey(value: string | undefined) {
    this._publicKey = value;
  }

  // public_keys - computed: false, optional: true, required: false
  private _publicKeys?: string[];
  public get publicKeys() {
    return this._publicKeys;
  }
  public set publicKeys(value: string[] | undefined) {
    this._publicKeys = value;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }

  // security_configuration - computed: false, optional: true, required: false
  private _securityConfiguration?: string;
  public get securityConfiguration() {
    return this._securityConfiguration;
  }
  public set securityConfiguration(value: string | undefined) {
    this._securityConfiguration = value;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[];
  public get securityGroupIds() {
    return this._securityGroupIds;
  }
  public set securityGroupIds(value: string[] | undefined) {
    this._securityGroupIds = value;
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
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

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // worker_type - computed: false, optional: true, required: false
  private _workerType?: string;
  public get workerType() {
    return this._workerType;
  }
  public set workerType(value: string | undefined) {
    this._workerType = value;
  }

  // yarn_endpoint_address - computed: true, optional: false, required: true
  public get yarnEndpointAddress() {
    return this.getStringAttribute('yarn_endpoint_address');
  }

  // zeppelin_remote_spark_interpreter_port - computed: true, optional: false, required: true
  public get zeppelinRemoteSparkInterpreterPort() {
    return this.getNumberAttribute('zeppelin_remote_spark_interpreter_port');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arguments: this._arguments,
      extra_jars_s3_path: this._extraJarsS3Path,
      extra_python_libs_s3_path: this._extraPythonLibsS3Path,
      glue_version: this._glueVersion,
      name: this._name,
      number_of_nodes: this._numberOfNodes,
      number_of_workers: this._numberOfWorkers,
      public_key: this._publicKey,
      public_keys: this._publicKeys,
      role_arn: this._roleArn,
      security_configuration: this._securityConfiguration,
      security_group_ids: this._securityGroupIds,
      subnet_id: this._subnetId,
      tags: this._tags,
      worker_type: this._workerType,
    };
  }
}
