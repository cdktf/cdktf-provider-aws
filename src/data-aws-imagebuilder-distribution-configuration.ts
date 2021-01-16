// https://www.terraform.io/docs/providers/aws/r/data_aws_imagebuilder_distribution_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsImagebuilderDistributionConfigurationConfig extends TerraformMetaArguments {
  readonly arn: string;
  readonly tags?: { [key: string]: string };
}
export class DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission extends ComplexComputedList {

  // user_groups - computed: true, optional: false, required: true
  public get userGroups() {
    return this.getListAttribute('user_groups');
  }

  // user_ids - computed: true, optional: false, required: true
  public get userIds() {
    return this.getListAttribute('user_ids');
  }
}
export class DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration extends ComplexComputedList {

  // ami_tags - computed: true, optional: false, required: true
  public get amiTags() {
    return 'not implemented' as any;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // launch_permission - computed: true, optional: false, required: true
  public get launchPermission() {
    return 'not implemented' as any;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // target_account_ids - computed: true, optional: false, required: true
  public get targetAccountIds() {
    return this.getListAttribute('target_account_ids');
  }
}
export class DataAwsImagebuilderDistributionConfigurationDistribution extends ComplexComputedList {

  // ami_distribution_configuration - computed: true, optional: false, required: true
  public get amiDistributionConfiguration() {
    return 'not implemented' as any;
  }

  // license_configuration_arns - computed: true, optional: false, required: true
  public get licenseConfigurationArns() {
    return this.getListAttribute('license_configuration_arns');
  }

  // region - computed: true, optional: false, required: true
  public get region() {
    return this.getStringAttribute('region');
  }
}

// Resource

export class DataAwsImagebuilderDistributionConfiguration extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsImagebuilderDistributionConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_imagebuilder_distribution_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._arn = config.arn;
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

  // distribution - computed: true, optional: false, required: true
  public distribution(index: string) {
    return new DataAwsImagebuilderDistributionConfigurationDistribution(this, 'distribution', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: this._arn,
      tags: this._tags,
    };
  }
}
