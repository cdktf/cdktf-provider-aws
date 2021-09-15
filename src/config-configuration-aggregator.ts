// https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigConfigurationAggregatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#name ConfigConfigurationAggregator#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#tags ConfigConfigurationAggregator#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#tags_all ConfigConfigurationAggregator#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * account_aggregation_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#account_aggregation_source ConfigConfigurationAggregator#account_aggregation_source}
  */
  readonly accountAggregationSource?: ConfigConfigurationAggregatorAccountAggregationSource[];
  /**
  * organization_aggregation_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#organization_aggregation_source ConfigConfigurationAggregator#organization_aggregation_source}
  */
  readonly organizationAggregationSource?: ConfigConfigurationAggregatorOrganizationAggregationSource[];
}
export interface ConfigConfigurationAggregatorAccountAggregationSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#account_ids ConfigConfigurationAggregator#account_ids}
  */
  readonly accountIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#all_regions ConfigConfigurationAggregator#all_regions}
  */
  readonly allRegions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#regions ConfigConfigurationAggregator#regions}
  */
  readonly regions?: string[];
}

function configConfigurationAggregatorAccountAggregationSourceToTerraform(struct?: ConfigConfigurationAggregatorAccountAggregationSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    account_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accountIds),
    all_regions: cdktf.booleanToTerraform(struct!.allRegions),
    regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.regions),
  }
}

export interface ConfigConfigurationAggregatorOrganizationAggregationSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#all_regions ConfigConfigurationAggregator#all_regions}
  */
  readonly allRegions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#regions ConfigConfigurationAggregator#regions}
  */
  readonly regions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#role_arn ConfigConfigurationAggregator#role_arn}
  */
  readonly roleArn: string;
}

function configConfigurationAggregatorOrganizationAggregationSourceToTerraform(struct?: ConfigConfigurationAggregatorOrganizationAggregationSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_regions: cdktf.booleanToTerraform(struct!.allRegions),
    regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.regions),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html aws_config_configuration_aggregator}
*/
export class ConfigConfigurationAggregator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_config_configuration_aggregator";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html aws_config_configuration_aggregator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigConfigurationAggregatorConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigConfigurationAggregatorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_configuration_aggregator',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._accountAggregationSource = config.accountAggregationSource;
    this._organizationAggregationSource = config.organizationAggregationSource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // account_aggregation_source - computed: false, optional: true, required: false
  private _accountAggregationSource?: ConfigConfigurationAggregatorAccountAggregationSource[];
  public get accountAggregationSource() {
    return this.interpolationForAttribute('account_aggregation_source') as any;
  }
  public set accountAggregationSource(value: ConfigConfigurationAggregatorAccountAggregationSource[] ) {
    this._accountAggregationSource = value;
  }
  public resetAccountAggregationSource() {
    this._accountAggregationSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountAggregationSourceInput() {
    return this._accountAggregationSource
  }

  // organization_aggregation_source - computed: false, optional: true, required: false
  private _organizationAggregationSource?: ConfigConfigurationAggregatorOrganizationAggregationSource[];
  public get organizationAggregationSource() {
    return this.interpolationForAttribute('organization_aggregation_source') as any;
  }
  public set organizationAggregationSource(value: ConfigConfigurationAggregatorOrganizationAggregationSource[] ) {
    this._organizationAggregationSource = value;
  }
  public resetOrganizationAggregationSource() {
    this._organizationAggregationSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationAggregationSourceInput() {
    return this._organizationAggregationSource
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      account_aggregation_source: cdktf.listMapper(configConfigurationAggregatorAccountAggregationSourceToTerraform)(this._accountAggregationSource),
      organization_aggregation_source: cdktf.listMapper(configConfigurationAggregatorOrganizationAggregationSourceToTerraform)(this._organizationAggregationSource),
    };
  }
}
