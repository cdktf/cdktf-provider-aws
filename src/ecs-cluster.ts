// https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsClusterConfig extends cdktf.TerraformMetaArguments {
  readonly capacityProviders?: string[];
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** default_capacity_provider_strategy block */
  readonly defaultCapacityProviderStrategy?: EcsClusterDefaultCapacityProviderStrategy[];
  /** setting block */
  readonly setting?: EcsClusterSetting[];
}
export interface EcsClusterDefaultCapacityProviderStrategy {
  readonly base?: number;
  readonly capacityProvider: string;
  readonly weight?: number;
}

function ecsClusterDefaultCapacityProviderStrategyToTerraform(struct?: EcsClusterDefaultCapacityProviderStrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    base: cdktf.numberToTerraform(struct!.base),
    capacity_provider: cdktf.stringToTerraform(struct!.capacityProvider),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface EcsClusterSetting {
  readonly name: string;
  readonly value: string;
}

function ecsClusterSettingToTerraform(struct?: EcsClusterSetting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


// Resource

export class EcsCluster extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EcsClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._capacityProviders = config.capacityProviders;
    this._name = config.name;
    this._tags = config.tags;
    this._defaultCapacityProviderStrategy = config.defaultCapacityProviderStrategy;
    this._setting = config.setting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capacity_providers - computed: false, optional: true, required: false
  private _capacityProviders?: string[];
  public get capacityProviders() {
    return this.getListAttribute('capacity_providers');
  }
  public set capacityProviders(value: string[] ) {
    this._capacityProviders = value;
  }
  public resetCapacityProviders() {
    this._capacityProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProvidersInput() {
    return this._capacityProviders
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

  // default_capacity_provider_strategy - computed: false, optional: true, required: false
  private _defaultCapacityProviderStrategy?: EcsClusterDefaultCapacityProviderStrategy[];
  public get defaultCapacityProviderStrategy() {
    return this.interpolationForAttribute('default_capacity_provider_strategy') as any;
  }
  public set defaultCapacityProviderStrategy(value: EcsClusterDefaultCapacityProviderStrategy[] ) {
    this._defaultCapacityProviderStrategy = value;
  }
  public resetDefaultCapacityProviderStrategy() {
    this._defaultCapacityProviderStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCapacityProviderStrategyInput() {
    return this._defaultCapacityProviderStrategy
  }

  // setting - computed: false, optional: true, required: false
  private _setting?: EcsClusterSetting[];
  public get setting() {
    return this.interpolationForAttribute('setting') as any;
  }
  public set setting(value: EcsClusterSetting[] ) {
    this._setting = value;
  }
  public resetSetting() {
    this._setting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingInput() {
    return this._setting
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity_providers: cdktf.listMapper(cdktf.stringToTerraform)(this._capacityProviders),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      default_capacity_provider_strategy: cdktf.listMapper(ecsClusterDefaultCapacityProviderStrategyToTerraform)(this._defaultCapacityProviderStrategy),
      setting: cdktf.listMapper(ecsClusterSettingToTerraform)(this._setting),
    };
  }
}
