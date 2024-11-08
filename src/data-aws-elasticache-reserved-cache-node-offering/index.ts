/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/elasticache_reserved_cache_node_offering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsElasticacheReservedCacheNodeOfferingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/elasticache_reserved_cache_node_offering#cache_node_type DataAwsElasticacheReservedCacheNodeOffering#cache_node_type}
  */
  readonly cacheNodeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/elasticache_reserved_cache_node_offering#duration DataAwsElasticacheReservedCacheNodeOffering#duration}
  */
  readonly duration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/elasticache_reserved_cache_node_offering#offering_type DataAwsElasticacheReservedCacheNodeOffering#offering_type}
  */
  readonly offeringType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/elasticache_reserved_cache_node_offering#product_description DataAwsElasticacheReservedCacheNodeOffering#product_description}
  */
  readonly productDescription: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/elasticache_reserved_cache_node_offering aws_elasticache_reserved_cache_node_offering}
*/
export class DataAwsElasticacheReservedCacheNodeOffering extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_elasticache_reserved_cache_node_offering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsElasticacheReservedCacheNodeOffering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsElasticacheReservedCacheNodeOffering to import
  * @param importFromId The id of the existing DataAwsElasticacheReservedCacheNodeOffering that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/elasticache_reserved_cache_node_offering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsElasticacheReservedCacheNodeOffering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_elasticache_reserved_cache_node_offering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/elasticache_reserved_cache_node_offering aws_elasticache_reserved_cache_node_offering} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsElasticacheReservedCacheNodeOfferingConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsElasticacheReservedCacheNodeOfferingConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elasticache_reserved_cache_node_offering',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.75.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacheNodeType = config.cacheNodeType;
    this._duration = config.duration;
    this._offeringType = config.offeringType;
    this._productDescription = config.productDescription;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_node_type - computed: false, optional: false, required: true
  private _cacheNodeType?: string; 
  public get cacheNodeType() {
    return this.getStringAttribute('cache_node_type');
  }
  public set cacheNodeType(value: string) {
    this._cacheNodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheNodeTypeInput() {
    return this._cacheNodeType;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // fixed_price - computed: true, optional: false, required: false
  public get fixedPrice() {
    return this.getNumberAttribute('fixed_price');
  }

  // offering_id - computed: true, optional: false, required: false
  public get offeringId() {
    return this.getStringAttribute('offering_id');
  }

  // offering_type - computed: false, optional: false, required: true
  private _offeringType?: string; 
  public get offeringType() {
    return this.getStringAttribute('offering_type');
  }
  public set offeringType(value: string) {
    this._offeringType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offeringTypeInput() {
    return this._offeringType;
  }

  // product_description - computed: false, optional: false, required: true
  private _productDescription?: string; 
  public get productDescription() {
    return this.getStringAttribute('product_description');
  }
  public set productDescription(value: string) {
    this._productDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productDescriptionInput() {
    return this._productDescription;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_node_type: cdktf.stringToTerraform(this._cacheNodeType),
      duration: cdktf.stringToTerraform(this._duration),
      offering_type: cdktf.stringToTerraform(this._offeringType),
      product_description: cdktf.stringToTerraform(this._productDescription),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_node_type: {
        value: cdktf.stringToHclTerraform(this._cacheNodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration: {
        value: cdktf.stringToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offering_type: {
        value: cdktf.stringToHclTerraform(this._offeringType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_description: {
        value: cdktf.stringToHclTerraform(this._productDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
