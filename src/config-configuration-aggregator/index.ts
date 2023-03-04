// https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigConfigurationAggregatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#id ConfigConfigurationAggregator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#name ConfigConfigurationAggregator#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#tags ConfigConfigurationAggregator#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#tags_all ConfigConfigurationAggregator#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * account_aggregation_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#account_aggregation_source ConfigConfigurationAggregator#account_aggregation_source}
  */
  readonly accountAggregationSource?: ConfigConfigurationAggregatorAccountAggregationSource;
  /**
  * organization_aggregation_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#organization_aggregation_source ConfigConfigurationAggregator#organization_aggregation_source}
  */
  readonly organizationAggregationSource?: ConfigConfigurationAggregatorOrganizationAggregationSource;
}
export interface ConfigConfigurationAggregatorAccountAggregationSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#account_ids ConfigConfigurationAggregator#account_ids}
  */
  readonly accountIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#all_regions ConfigConfigurationAggregator#all_regions}
  */
  readonly allRegions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#regions ConfigConfigurationAggregator#regions}
  */
  readonly regions?: string[];
}

export function configConfigurationAggregatorAccountAggregationSourceToTerraform(struct?: ConfigConfigurationAggregatorAccountAggregationSourceOutputReference | ConfigConfigurationAggregatorAccountAggregationSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accountIds),
    all_regions: cdktf.booleanToTerraform(struct!.allRegions),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
  }
}

export class ConfigConfigurationAggregatorAccountAggregationSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigConfigurationAggregatorAccountAggregationSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIds = this._accountIds;
    }
    if (this._allRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRegions = this._allRegions;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigConfigurationAggregatorAccountAggregationSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountIds = undefined;
      this._allRegions = undefined;
      this._regions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountIds = value.accountIds;
      this._allRegions = value.allRegions;
      this._regions = value.regions;
    }
  }

  // account_ids - computed: false, optional: false, required: true
  private _accountIds?: string[]; 
  public get accountIds() {
    return this.getListAttribute('account_ids');
  }
  public set accountIds(value: string[]) {
    this._accountIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsInput() {
    return this._accountIds;
  }

  // all_regions - computed: false, optional: true, required: false
  private _allRegions?: boolean | cdktf.IResolvable; 
  public get allRegions() {
    return this.getBooleanAttribute('all_regions');
  }
  public set allRegions(value: boolean | cdktf.IResolvable) {
    this._allRegions = value;
  }
  public resetAllRegions() {
    this._allRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRegionsInput() {
    return this._allRegions;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }
}
export interface ConfigConfigurationAggregatorOrganizationAggregationSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#all_regions ConfigConfigurationAggregator#all_regions}
  */
  readonly allRegions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#regions ConfigConfigurationAggregator#regions}
  */
  readonly regions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#role_arn ConfigConfigurationAggregator#role_arn}
  */
  readonly roleArn: string;
}

export function configConfigurationAggregatorOrganizationAggregationSourceToTerraform(struct?: ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference | ConfigConfigurationAggregatorOrganizationAggregationSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_regions: cdktf.booleanToTerraform(struct!.allRegions),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigConfigurationAggregatorOrganizationAggregationSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRegions = this._allRegions;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigConfigurationAggregatorOrganizationAggregationSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRegions = undefined;
      this._regions = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRegions = value.allRegions;
      this._regions = value.regions;
      this._roleArn = value.roleArn;
    }
  }

  // all_regions - computed: false, optional: true, required: false
  private _allRegions?: boolean | cdktf.IResolvable; 
  public get allRegions() {
    return this.getBooleanAttribute('all_regions');
  }
  public set allRegions(value: boolean | cdktf.IResolvable) {
    this._allRegions = value;
  }
  public resetAllRegions() {
    this._allRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRegionsInput() {
    return this._allRegions;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator aws_config_configuration_aggregator}
*/
export class ConfigConfigurationAggregator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_config_configuration_aggregator";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator aws_config_configuration_aggregator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigConfigurationAggregatorConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigConfigurationAggregatorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_configuration_aggregator',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._accountAggregationSource.internalValue = config.accountAggregationSource;
    this._organizationAggregationSource.internalValue = config.organizationAggregationSource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // account_aggregation_source - computed: false, optional: true, required: false
  private _accountAggregationSource = new ConfigConfigurationAggregatorAccountAggregationSourceOutputReference(this, "account_aggregation_source");
  public get accountAggregationSource() {
    return this._accountAggregationSource;
  }
  public putAccountAggregationSource(value: ConfigConfigurationAggregatorAccountAggregationSource) {
    this._accountAggregationSource.internalValue = value;
  }
  public resetAccountAggregationSource() {
    this._accountAggregationSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountAggregationSourceInput() {
    return this._accountAggregationSource.internalValue;
  }

  // organization_aggregation_source - computed: false, optional: true, required: false
  private _organizationAggregationSource = new ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference(this, "organization_aggregation_source");
  public get organizationAggregationSource() {
    return this._organizationAggregationSource;
  }
  public putOrganizationAggregationSource(value: ConfigConfigurationAggregatorOrganizationAggregationSource) {
    this._organizationAggregationSource.internalValue = value;
  }
  public resetOrganizationAggregationSource() {
    this._organizationAggregationSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationAggregationSourceInput() {
    return this._organizationAggregationSource.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      account_aggregation_source: configConfigurationAggregatorAccountAggregationSourceToTerraform(this._accountAggregationSource.internalValue),
      organization_aggregation_source: configConfigurationAggregatorOrganizationAggregationSourceToTerraform(this._organizationAggregationSource.internalValue),
    };
  }
}
