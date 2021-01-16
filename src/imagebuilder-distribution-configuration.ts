// https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImagebuilderDistributionConfigurationConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** distribution block */
  readonly distribution: ImagebuilderDistributionConfigurationDistribution[];
}
export interface ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission {
  readonly userGroups?: string[];
  readonly userIds?: string[];
}

function imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    user_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.userGroups),
    user_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.userIds),
  }
}

export interface ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration {
  readonly amiTags?: { [key: string]: string };
  readonly description?: string;
  readonly kmsKeyId?: string;
  readonly name?: string;
  readonly targetAccountIds?: string[];
  /** launch_permission block */
  readonly launchPermission?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission[];
}

function imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ami_tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.amiTags),
    description: cdktf.stringToTerraform(struct!.description),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    name: cdktf.stringToTerraform(struct!.name),
    target_account_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetAccountIds),
    launch_permission: cdktf.listMapper(imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionToTerraform)(struct!.launchPermission),
  }
}

export interface ImagebuilderDistributionConfigurationDistribution {
  readonly licenseConfigurationArns?: string[];
  readonly region: string;
  /** ami_distribution_configuration block */
  readonly amiDistributionConfiguration?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration[];
}

function imagebuilderDistributionConfigurationDistributionToTerraform(struct?: ImagebuilderDistributionConfigurationDistribution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    license_configuration_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.licenseConfigurationArns),
    region: cdktf.stringToTerraform(struct!.region),
    ami_distribution_configuration: cdktf.listMapper(imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationToTerraform)(struct!.amiDistributionConfiguration),
  }
}


// Resource

export class ImagebuilderDistributionConfiguration extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ImagebuilderDistributionConfigurationConfig) {
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
    this._description = config.description;
    this._name = config.name;
    this._tags = config.tags;
    this._distribution = config.distribution;
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

  // distribution - computed: false, optional: false, required: true
  private _distribution: ImagebuilderDistributionConfigurationDistribution[];
  public get distribution() {
    return this.interpolationForAttribute('distribution') as any;
  }
  public set distribution(value: ImagebuilderDistributionConfigurationDistribution[]) {
    this._distribution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      distribution: cdktf.listMapper(imagebuilderDistributionConfigurationDistributionToTerraform)(this._distribution),
    };
  }
}
