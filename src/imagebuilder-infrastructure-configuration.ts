// https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImagebuilderInfrastructureConfigurationConfig extends cdktf.TerraformMetaArguments {
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

function imagebuilderInfrastructureConfigurationLoggingS3LogsToTerraform(struct?: ImagebuilderInfrastructureConfigurationLoggingS3Logs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_key_prefix: cdktf.stringToTerraform(struct!.s3KeyPrefix),
  }
}

export interface ImagebuilderInfrastructureConfigurationLogging {
  /** s3_logs block */
  readonly s3Logs: ImagebuilderInfrastructureConfigurationLoggingS3Logs[];
}

function imagebuilderInfrastructureConfigurationLoggingToTerraform(struct?: ImagebuilderInfrastructureConfigurationLogging): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_logs: cdktf.listMapper(imagebuilderInfrastructureConfigurationLoggingS3LogsToTerraform)(struct!.s3Logs),
  }
}


// Resource

export class ImagebuilderInfrastructureConfiguration extends cdktf.TerraformResource {

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
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
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
  private _instanceProfileName: string;
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
  private _instanceTypes?: string[];
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }
  public set instanceTypes(value: string[] ) {
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
  private _keyPair?: string;
  public get keyPair() {
    return this.getStringAttribute('key_pair');
  }
  public set keyPair(value: string ) {
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

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags?: { [key: string]: string };
  public get resourceTags() {
    return this.interpolationForAttribute('resource_tags') as any;
  }
  public set resourceTags(value: { [key: string]: string } ) {
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
  private _securityGroupIds?: string[];
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[] ) {
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
  private _snsTopicArn?: string;
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
  public set snsTopicArn(value: string ) {
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

  // terminate_instance_on_failure - computed: false, optional: true, required: false
  private _terminateInstanceOnFailure?: boolean;
  public get terminateInstanceOnFailure() {
    return this.getBooleanAttribute('terminate_instance_on_failure');
  }
  public set terminateInstanceOnFailure(value: boolean ) {
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
  private _logging?: ImagebuilderInfrastructureConfigurationLogging[];
  public get logging() {
    return this.interpolationForAttribute('logging') as any;
  }
  public set logging(value: ImagebuilderInfrastructureConfigurationLogging[] ) {
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
      terminate_instance_on_failure: cdktf.booleanToTerraform(this._terminateInstanceOnFailure),
      logging: cdktf.listMapper(imagebuilderInfrastructureConfigurationLoggingToTerraform)(this._logging),
    };
  }
}
