// https://www.terraform.io/docs/providers/aws/r/data_aws_imagebuilder_infrastructure_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsImagebuilderInfrastructureConfigurationConfig extends TerraformMetaArguments {
  readonly arn: string;
  readonly resourceTags?: { [key: string]: string };
  readonly tags?: { [key: string]: string };
}
export class DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs extends ComplexComputedList {

  // s3_bucket_name - computed: true, optional: false, required: true
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }

  // s3_key_prefix - computed: true, optional: false, required: true
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }
}
export class DataAwsImagebuilderInfrastructureConfigurationLogging extends ComplexComputedList {

  // s3_logs - computed: true, optional: false, required: true
  public get s3Logs() {
    return 'not implemented' as any;
  }
}

// Resource

export class DataAwsImagebuilderInfrastructureConfiguration extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _arn: string;
  public get arn() {
    return this._arn;
  }
  public set arn(value: string) {
    this._arn = value;
  }

  // date_created - computed: true, optional: false, required: true
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_updated - computed: true, optional: false, required: true
  public get dateUpdated() {
    return this.getStringAttribute('date_updated');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_profile_name - computed: true, optional: false, required: true
  public get instanceProfileName() {
    return this.getStringAttribute('instance_profile_name');
  }

  // instance_types - computed: true, optional: false, required: true
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }

  // key_pair - computed: true, optional: false, required: true
  public get keyPair() {
    return this.getStringAttribute('key_pair');
  }

  // logging - computed: true, optional: false, required: true
  public logging(index: string) {
    return new DataAwsImagebuilderInfrastructureConfigurationLogging(this, 'logging', index);
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_tags - computed: true, optional: true, required: false
  private _resourceTags?: { [key: string]: string }
  public get resourceTags(): { [key: string]: string } | undefined {
    return this._resourceTags; // Getting the computed value is not yet implemented
  }
  public set resourceTags(value: { [key: string]: string } | undefined) {
    this._resourceTags = value;
  }

  // security_group_ids - computed: true, optional: false, required: true
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // sns_topic_arn - computed: true, optional: false, required: true
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // terminate_instance_on_failure - computed: true, optional: false, required: true
  public get terminateInstanceOnFailure() {
    return this.getBooleanAttribute('terminate_instance_on_failure');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: this._arn,
      resource_tags: this._resourceTags,
      tags: this._tags,
    };
  }
}
