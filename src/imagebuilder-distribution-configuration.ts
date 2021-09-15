// https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImagebuilderDistributionConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#description ImagebuilderDistributionConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#name ImagebuilderDistributionConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#tags ImagebuilderDistributionConfiguration#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#tags_all ImagebuilderDistributionConfiguration#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * distribution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#distribution ImagebuilderDistributionConfiguration#distribution}
  */
  readonly distribution: ImagebuilderDistributionConfigurationDistribution[];
}
export interface ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#user_groups ImagebuilderDistributionConfiguration#user_groups}
  */
  readonly userGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#user_ids ImagebuilderDistributionConfiguration#user_ids}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#ami_tags ImagebuilderDistributionConfiguration#ami_tags}
  */
  readonly amiTags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#description ImagebuilderDistributionConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#kms_key_id ImagebuilderDistributionConfiguration#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#name ImagebuilderDistributionConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#target_account_ids ImagebuilderDistributionConfiguration#target_account_ids}
  */
  readonly targetAccountIds?: string[];
  /**
  * launch_permission block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#launch_permission ImagebuilderDistributionConfiguration#launch_permission}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#license_configuration_arns ImagebuilderDistributionConfiguration#license_configuration_arns}
  */
  readonly licenseConfigurationArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#region ImagebuilderDistributionConfiguration#region}
  */
  readonly region: string;
  /**
  * ami_distribution_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#ami_distribution_configuration ImagebuilderDistributionConfiguration#ami_distribution_configuration}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html aws_imagebuilder_distribution_configuration}
*/
export class ImagebuilderDistributionConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_imagebuilder_distribution_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html aws_imagebuilder_distribution_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagebuilderDistributionConfigurationConfig
  */
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
    this._tagsAll = config.tagsAll;
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
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
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      distribution: cdktf.listMapper(imagebuilderDistributionConfigurationDistributionToTerraform)(this._distribution),
    };
  }
}
