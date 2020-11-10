// https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ConfigConfigurationAggregatorConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** account_aggregation_source block */
  readonly accountAggregationSource?: ConfigConfigurationAggregatorAccountAggregationSource[];
  /** organization_aggregation_source block */
  readonly organizationAggregationSource?: ConfigConfigurationAggregatorOrganizationAggregationSource[];
}
export interface ConfigConfigurationAggregatorAccountAggregationSource {
  readonly accountIds: string[];
  readonly allRegions?: boolean;
  readonly regions?: string[];
}
export interface ConfigConfigurationAggregatorOrganizationAggregationSource {
  readonly allRegions?: boolean;
  readonly regions?: string[];
  readonly roleArn: string;
}

// Resource

export class ConfigConfigurationAggregator extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
      name: this._name,
      tags: this._tags,
      account_aggregation_source: this._accountAggregationSource,
      organization_aggregation_source: this._organizationAggregationSource,
    };
  }
}
