// https://www.terraform.io/docs/providers/aws/r/appsync_api_cache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsyncApiCacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#api_caching_behavior AppsyncApiCache#api_caching_behavior}
  */
  readonly apiCachingBehavior: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#api_id AppsyncApiCache#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#at_rest_encryption_enabled AppsyncApiCache#at_rest_encryption_enabled}
  */
  readonly atRestEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#id AppsyncApiCache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#transit_encryption_enabled AppsyncApiCache#transit_encryption_enabled}
  */
  readonly transitEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#ttl AppsyncApiCache#ttl}
  */
  readonly ttl: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache#type AppsyncApiCache#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache aws_appsync_api_cache}
*/
export class AppsyncApiCache extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appsync_api_cache";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_cache aws_appsync_api_cache} Resource
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
    this._apiCachingBehavior = config.apiCachingBehavior;
    this._apiId = config.apiId;
    this._atRestEncryptionEnabled = config.atRestEncryptionEnabled;
    this._id = config.id;
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

  // at_rest_encryption_enabled - computed: false, optional: true, required: false
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

  // transit_encryption_enabled - computed: false, optional: true, required: false
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
      transit_encryption_enabled: cdktf.booleanToTerraform(this._transitEncryptionEnabled),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
