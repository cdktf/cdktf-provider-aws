// https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ImagebuilderInfrastructureConfigurationConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly instanceProfileName: string;
  readonly instanceTypes?: string[];
  readonly keyPair?: string;
  readonly name: string;
  readonly resourceTags?: { [key: string]: string };
  readonly securityGroupIds?: string[];
  readonly snsTopicArn?: string;
  readonly subnetId?: string;
  readonly tags?: { [key: string]: string };
  readonly terminateInstanceOnFailure?: boolean;
  /** logging block */
  readonly logging?: ImagebuilderInfrastructureConfigurationLogging[];
}
export interface ImagebuilderInfrastructureConfigurationLoggingS3Logs {
  readonly s3BucketName: string;
  readonly s3KeyPrefix?: string;
}
export interface ImagebuilderInfrastructureConfigurationLogging {
  /** s3_logs block */
  readonly s3Logs: ImagebuilderInfrastructureConfigurationLoggingS3Logs[];
}

// Resource

export class ImagebuilderInfrastructureConfiguration extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._terminateInstanceOnFailure = config.terminateInstanceOnFailure;
    this._logging = config.logging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // date_created - computed: true, optional: false, required: true
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_updated - computed: true, optional: false, required: true
  public get dateUpdated() {
    return this.getStringAttribute('date_updated');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_profile_name - computed: false, optional: false, required: true
  private _instanceProfileName: string;
  public get instanceProfileName() {
    return this._instanceProfileName;
  }
  public set instanceProfileName(value: string) {
    this._instanceProfileName = value;
  }

  // instance_types - computed: false, optional: true, required: false
  private _instanceTypes?: string[];
  public get instanceTypes() {
    return this._instanceTypes;
  }
  public set instanceTypes(value: string[] | undefined) {
    this._instanceTypes = value;
  }

  // key_pair - computed: false, optional: true, required: false
  private _keyPair?: string;
  public get keyPair() {
    return this._keyPair;
  }
  public set keyPair(value: string | undefined) {
    this._keyPair = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags?: { [key: string]: string };
  public get resourceTags() {
    return this._resourceTags;
  }
  public set resourceTags(value: { [key: string]: string } | undefined) {
    this._resourceTags = value;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[];
  public get securityGroupIds() {
    return this._securityGroupIds;
  }
  public set securityGroupIds(value: string[] | undefined) {
    this._securityGroupIds = value;
  }

  // sns_topic_arn - computed: false, optional: true, required: false
  private _snsTopicArn?: string;
  public get snsTopicArn() {
    return this._snsTopicArn;
  }
  public set snsTopicArn(value: string | undefined) {
    this._snsTopicArn = value;
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

  // terminate_instance_on_failure - computed: false, optional: true, required: false
  private _terminateInstanceOnFailure?: boolean;
  public get terminateInstanceOnFailure() {
    return this._terminateInstanceOnFailure;
  }
  public set terminateInstanceOnFailure(value: boolean | undefined) {
    this._terminateInstanceOnFailure = value;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: ImagebuilderInfrastructureConfigurationLogging[];
  public get logging() {
    return this._logging;
  }
  public set logging(value: ImagebuilderInfrastructureConfigurationLogging[] | undefined) {
    this._logging = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      instance_profile_name: this._instanceProfileName,
      instance_types: this._instanceTypes,
      key_pair: this._keyPair,
      name: this._name,
      resource_tags: this._resourceTags,
      security_group_ids: this._securityGroupIds,
      sns_topic_arn: this._snsTopicArn,
      subnet_id: this._subnetId,
      tags: this._tags,
      terminate_instance_on_failure: this._terminateInstanceOnFailure,
      logging: this._logging,
    };
  }
}
