/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster_capacity_providers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsClusterCapacityProvidersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster_capacity_providers#capacity_providers EcsClusterCapacityProviders#capacity_providers}
  */
  readonly capacityProviders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster_capacity_providers#cluster_name EcsClusterCapacityProviders#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster_capacity_providers#id EcsClusterCapacityProviders#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster_capacity_providers#region EcsClusterCapacityProviders#region}
  */
  readonly region?: string;
  /**
  * default_capacity_provider_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster_capacity_providers#default_capacity_provider_strategy EcsClusterCapacityProviders#default_capacity_provider_strategy}
  */
  readonly defaultCapacityProviderStrategy?: EcsClusterCapacityProvidersDefaultCapacityProviderStrategy[] | cdktf.IResolvable;
}
export interface EcsClusterCapacityProvidersDefaultCapacityProviderStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster_capacity_providers#base EcsClusterCapacityProviders#base}
  */
  readonly base?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster_capacity_providers#capacity_provider EcsClusterCapacityProviders#capacity_provider}
  */
  readonly capacityProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster_capacity_providers#weight EcsClusterCapacityProviders#weight}
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


export function ecsClusterCapacityProvidersDefaultCapacityProviderStrategyToHclTerraform(struct?: EcsClusterCapacityProvidersDefaultCapacityProviderStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base: {
      value: cdktf.numberToHclTerraform(struct!.base),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    capacity_provider: {
      value: cdktf.stringToHclTerraform(struct!.capacityProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcsClusterCapacityProvidersDefaultCapacityProviderStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    if (this._capacityProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityProvider = this._capacityProvider;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsClusterCapacityProvidersDefaultCapacityProviderStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._base = undefined;
      this._capacityProvider = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._base = value.base;
      this._capacityProvider = value.capacityProvider;
      this._weight = value.weight;
    }
  }

  // base - computed: false, optional: true, required: false
  private _base?: number; 
  public get base() {
    return this.getNumberAttribute('base');
  }
  public set base(value: number) {
    this._base = value;
  }
  public resetBase() {
    this._base = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // capacity_provider - computed: false, optional: false, required: true
  private _capacityProvider?: string; 
  public get capacityProvider() {
    return this.getStringAttribute('capacity_provider');
  }
  public set capacityProvider(value: string) {
    this._capacityProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderInput() {
    return this._capacityProvider;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList extends cdktf.ComplexList {
  public internalValue? : EcsClusterCapacityProvidersDefaultCapacityProviderStrategy[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference {
    return new EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster_capacity_providers aws_ecs_cluster_capacity_providers}
*/
export class EcsClusterCapacityProviders extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ecs_cluster_capacity_providers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcsClusterCapacityProviders resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsClusterCapacityProviders to import
  * @param importFromId The id of the existing EcsClusterCapacityProviders that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster_capacity_providers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsClusterCapacityProviders to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ecs_cluster_capacity_providers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster_capacity_providers aws_ecs_cluster_capacity_providers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsClusterCapacityProvidersConfig
  */
  public constructor(scope: Construct, id: string, config: EcsClusterCapacityProvidersConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_cluster_capacity_providers',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._capacityProviders = config.capacityProviders;
    this._clusterName = config.clusterName;
    this._id = config.id;
    this._region = config.region;
    this._defaultCapacityProviderStrategy.internalValue = config.defaultCapacityProviderStrategy;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // default_capacity_provider_strategy - computed: false, optional: true, required: false
  private _defaultCapacityProviderStrategy = new EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList(this, "default_capacity_provider_strategy", true);
  public get defaultCapacityProviderStrategy() {
    return this._defaultCapacityProviderStrategy;
  }
  public putDefaultCapacityProviderStrategy(value: EcsClusterCapacityProvidersDefaultCapacityProviderStrategy[] | cdktf.IResolvable) {
    this._defaultCapacityProviderStrategy.internalValue = value;
  }
  public resetDefaultCapacityProviderStrategy() {
    this._defaultCapacityProviderStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCapacityProviderStrategyInput() {
    return this._defaultCapacityProviderStrategy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._capacityProviders),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      default_capacity_provider_strategy: cdktf.listMapper(ecsClusterCapacityProvidersDefaultCapacityProviderStrategyToTerraform, true)(this._defaultCapacityProviderStrategy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity_providers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._capacityProviders),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_capacity_provider_strategy: {
        value: cdktf.listMapperHcl(ecsClusterCapacityProvidersDefaultCapacityProviderStrategyToHclTerraform, true)(this._defaultCapacityProviderStrategy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
