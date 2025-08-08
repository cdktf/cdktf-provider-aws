/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/appsync_api_cache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsyncApiCacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/appsync_api_cache#api_caching_behavior AppsyncApiCache#api_caching_behavior}
  */
  readonly apiCachingBehavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/appsync_api_cache#api_id AppsyncApiCache#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/appsync_api_cache#at_rest_encryption_enabled AppsyncApiCache#at_rest_encryption_enabled}
  */
  readonly atRestEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/appsync_api_cache#id AppsyncApiCache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/appsync_api_cache#region AppsyncApiCache#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/appsync_api_cache#transit_encryption_enabled AppsyncApiCache#transit_encryption_enabled}
  */
  readonly transitEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/appsync_api_cache#ttl AppsyncApiCache#ttl}
  */
  readonly ttl: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/appsync_api_cache#type AppsyncApiCache#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/appsync_api_cache aws_appsync_api_cache}
*/
export class AppsyncApiCache extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appsync_api_cache";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsyncApiCache resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsyncApiCache to import
  * @param importFromId The id of the existing AppsyncApiCache that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/appsync_api_cache#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsyncApiCache to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_appsync_api_cache", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/appsync_api_cache aws_appsync_api_cache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsyncApiCacheConfig
  */
  public constructor(scope: Construct, id: string, config: AppsyncApiCacheConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appsync_api_cache',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.8.0',
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
    this._apiCachingBehavior = config.apiCachingBehavior;
    this._apiId = config.apiId;
    this._atRestEncryptionEnabled = config.atRestEncryptionEnabled;
    this._id = config.id;
    this._region = config.region;
    this._transitEncryptionEnabled = config.transitEncryptionEnabled;
    this._ttl = config.ttl;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_caching_behavior - computed: false, optional: false, required: true
  private _apiCachingBehavior?: string; 
  public get apiCachingBehavior() {
    return this.getStringAttribute('api_caching_behavior');
  }
  public set apiCachingBehavior(value: string) {
    this._apiCachingBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCachingBehaviorInput() {
    return this._apiCachingBehavior;
  }

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // at_rest_encryption_enabled - computed: true, optional: true, required: false
  private _atRestEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get atRestEncryptionEnabled() {
    return this.getBooleanAttribute('at_rest_encryption_enabled');
  }
  public set atRestEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._atRestEncryptionEnabled = value;
  }
  public resetAtRestEncryptionEnabled() {
    this._atRestEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atRestEncryptionEnabledInput() {
    return this._atRestEncryptionEnabled;
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

  // transit_encryption_enabled - computed: true, optional: true, required: false
  private _transitEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get transitEncryptionEnabled() {
    return this.getBooleanAttribute('transit_encryption_enabled');
  }
  public set transitEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._transitEncryptionEnabled = value;
  }
  public resetTransitEncryptionEnabled() {
    this._transitEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitEncryptionEnabledInput() {
    return this._transitEncryptionEnabled;
  }

  // ttl - computed: false, optional: false, required: true
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_caching_behavior: cdktf.stringToTerraform(this._apiCachingBehavior),
      api_id: cdktf.stringToTerraform(this._apiId),
      at_rest_encryption_enabled: cdktf.booleanToTerraform(this._atRestEncryptionEnabled),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      transit_encryption_enabled: cdktf.booleanToTerraform(this._transitEncryptionEnabled),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_caching_behavior: {
        value: cdktf.stringToHclTerraform(this._apiCachingBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_id: {
        value: cdktf.stringToHclTerraform(this._apiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      at_rest_encryption_enabled: {
        value: cdktf.booleanToHclTerraform(this._atRestEncryptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      transit_encryption_enabled: {
        value: cdktf.booleanToHclTerraform(this._transitEncryptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
