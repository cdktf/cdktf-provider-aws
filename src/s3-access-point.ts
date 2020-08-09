// https://www.terraform.io/docs/providers/aws/r/s3_access_point.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface S3AccessPointConfig extends TerraformMetaArguments {
  readonly accountId?: string;
  readonly bucket: string;
  readonly name: string;
  readonly policy?: string;
  /** public_access_block_configuration block */
  readonly publicAccessBlockConfiguration?: S3AccessPointPublicAccessBlockConfiguration[];
  /** vpc_configuration block */
  readonly vpcConfiguration?: S3AccessPointVpcConfiguration[];
}
export interface S3AccessPointPublicAccessBlockConfiguration {
  readonly blockPublicAcls?: boolean;
  readonly blockPublicPolicy?: boolean;
  readonly ignorePublicAcls?: boolean;
  readonly restrictPublicBuckets?: boolean;
}
export interface S3AccessPointVpcConfiguration {
  readonly vpcId: string;
}

// Resource

export class S3AccessPoint extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: S3AccessPointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_access_point',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._bucket = config.bucket;
    this._name = config.name;
    this._policy = config.policy;
    this._publicAccessBlockConfiguration = config.publicAccessBlockConfiguration;
    this._vpcConfiguration = config.vpcConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string;
  public get accountId() {
    return this._accountId ?? this.getStringAttribute('account_id');
  }
  public set accountId(value: string | undefined) {
    this._accountId = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this._bucket;
  }
  public set bucket(value: string) {
    this._bucket = value;
  }

  // domain_name - computed: true, optional: false, required: true
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // has_public_access_policy - computed: true, optional: false, required: true
  public get hasPublicAccessPolicy() {
    return this.getBooleanAttribute('has_public_access_policy');
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

  // network_origin - computed: true, optional: false, required: true
  public get networkOrigin() {
    return this.getStringAttribute('network_origin');
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string;
  public get policy() {
    return this._policy;
  }
  public set policy(value: string | undefined) {
    this._policy = value;
  }

  // public_access_block_configuration - computed: false, optional: true, required: false
  private _publicAccessBlockConfiguration?: S3AccessPointPublicAccessBlockConfiguration[];
  public get publicAccessBlockConfiguration() {
    return this._publicAccessBlockConfiguration;
  }
  public set publicAccessBlockConfiguration(value: S3AccessPointPublicAccessBlockConfiguration[] | undefined) {
    this._publicAccessBlockConfiguration = value;
  }

  // vpc_configuration - computed: false, optional: true, required: false
  private _vpcConfiguration?: S3AccessPointVpcConfiguration[];
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
  public set vpcConfiguration(value: S3AccessPointVpcConfiguration[] | undefined) {
    this._vpcConfiguration = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: this._accountId,
      bucket: this._bucket,
      name: this._name,
      policy: this._policy,
      public_access_block_configuration: this._publicAccessBlockConfiguration,
      vpc_configuration: this._vpcConfiguration,
    };
  }
}
