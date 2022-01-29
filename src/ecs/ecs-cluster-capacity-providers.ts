// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2 Container Service
*/
export interface EcsClusterCapacityProvidersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#capacity_providers EcsClusterCapacityProviders#capacity_providers}
  */
  readonly capacityProviders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#cluster_name EcsClusterCapacityProviders#cluster_name}
  */
  readonly clusterName: string;
  /**
  * default_capacity_provider_strategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#default_capacity_provider_strategy EcsClusterCapacityProviders#default_capacity_provider_strategy}
  */
  readonly defaultCapacityProviderStrategy?: EcsClusterCapacityProvidersDefaultCapacityProviderStrategy[] | cdktf.IResolvable;
}
export interface EcsClusterCapacityProvidersDefaultCapacityProviderStrategy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#base EcsClusterCapacityProviders#base}
  */
  readonly base?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#capacity_provider EcsClusterCapacityProviders#capacity_provider}
  */
  readonly capacityProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#weight EcsClusterCapacityProviders#weight}
  */
  readonly weight?: number;
}

export function ecsClusterCapacityProvidersDefaultCapacityProviderStrategyToTerraform(struct?: EcsClusterCapacityProvidersDefaultCapacityProviderStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base: cdktf.numberToTerraform(struct!.base),
    capacity_provider: cdktf.stringToTerraform(struct!.capacityProvider),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers aws_ecs_cluster_capacity_providers}
*/
export class EcsClusterCapacityProviders extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ecs_cluster_capacity_providers";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers aws_ecs_cluster_capacity_providers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsClusterCapacityProvidersConfig
  */
  public constructor(scope: Construct, id: string, config: EcsClusterCapacityProvidersConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_cluster_capacity_providers',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._capacityProviders = config.capacityProviders;
    this._clusterName = config.clusterName;
    this._defaultCapacityProviderStrategy = config.defaultCapacityProviderStrategy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity_providers - computed: false, optional: true, required: false
  private _capacityProviders?: string[]; 
  public get capacityProviders() {
    return cdktf.Fn.tolist(this.getListAttribute('capacity_providers'));
  }
  public set capacityProviders(value: string[]) {
    this._capacityProviders = value;
  }
  public resetCapacityProviders() {
    this._capacityProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProvidersInput() {
    return this._capacityProviders;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // default_capacity_provider_strategy - computed: false, optional: true, required: false
  private _defaultCapacityProviderStrategy?: EcsClusterCapacityProvidersDefaultCapacityProviderStrategy[] | cdktf.IResolvable; 
  public get defaultCapacityProviderStrategy() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('default_capacity_provider_strategy')));
  }
  public set defaultCapacityProviderStrategy(value: EcsClusterCapacityProvidersDefaultCapacityProviderStrategy[] | cdktf.IResolvable) {
    this._defaultCapacityProviderStrategy = value;
  }
  public resetDefaultCapacityProviderStrategy() {
    this._defaultCapacityProviderStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCapacityProviderStrategyInput() {
    return this._defaultCapacityProviderStrategy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity_providers: cdktf.listMapper(cdktf.stringToTerraform)(this._capacityProviders),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      default_capacity_provider_strategy: cdktf.listMapper(ecsClusterCapacityProvidersDefaultCapacityProviderStrategyToTerraform)(this._defaultCapacityProviderStrategy),
    };
  }
}
