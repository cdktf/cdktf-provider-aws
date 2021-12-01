// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Image Builder
*/
export interface DataAwsImagebuilderDistributionConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration.html#arn DataAwsImagebuilderDistributionConfiguration#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration.html#tags DataAwsImagebuilderDistributionConfiguration#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}
export class DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission extends cdktf.ComplexComputedList {

  // user_groups - computed: true, optional: false, required: false
  public get userGroups() {
    return this.getListAttribute('user_groups');
  }

  // user_ids - computed: true, optional: false, required: false
  public get userIds() {
    return this.getListAttribute('user_ids');
  }
}
export class DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration extends cdktf.ComplexComputedList {

  // ami_tags - computed: true, optional: false, required: false
  public get amiTags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ami_tags') as any;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // launch_permission - computed: true, optional: false, required: false
  public get launchPermission() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('launch_permission') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // target_account_ids - computed: true, optional: false, required: false
  public get targetAccountIds() {
    return this.getListAttribute('target_account_ids');
  }
}
export class DataAwsImagebuilderDistributionConfigurationDistribution extends cdktf.ComplexComputedList {

  // ami_distribution_configuration - computed: true, optional: false, required: false
  public get amiDistributionConfiguration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ami_distribution_configuration') as any;
  }

  // license_configuration_arns - computed: true, optional: false, required: false
  public get licenseConfigurationArns() {
    return this.getListAttribute('license_configuration_arns');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration.html aws_imagebuilder_distribution_configuration}
*/
export class DataAwsImagebuilderDistributionConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_imagebuilder_distribution_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration.html aws_imagebuilder_distribution_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsImagebuilderDistributionConfigurationConfig
  */
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
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_updated - computed: true, optional: false, required: false
  public get dateUpdated() {
    return this.getStringAttribute('date_updated');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // distribution - computed: true, optional: false, required: false
  public distribution(index: string) {
    return new DataAwsImagebuilderDistributionConfigurationDistribution(this, 'distribution', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
