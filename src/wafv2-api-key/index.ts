// https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/wafv2_api_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Wafv2ApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether this is for an AWS CloudFront distribution or for a regional application. Valid values are CLOUDFRONT or REGIONAL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/wafv2_api_key#scope Wafv2ApiKey#scope}
  */
  readonly scope: string;
  /**
  * The domains that you want to be able to use the API key with, for example example.com. Maximum of 5 domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/wafv2_api_key#token_domains Wafv2ApiKey#token_domains}
  */
  readonly tokenDomains: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/wafv2_api_key aws_wafv2_api_key}
*/
export class Wafv2ApiKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_wafv2_api_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Wafv2ApiKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Wafv2ApiKey to import
  * @param importFromId The id of the existing Wafv2ApiKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/wafv2_api_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Wafv2ApiKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_wafv2_api_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/wafv2_api_key aws_wafv2_api_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Wafv2ApiKeyConfig
  */
  public constructor(scope: Construct, id: string, config: Wafv2ApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafv2_api_key',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.99.1',
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
    this._scope = config.scope;
    this._tokenDomains = config.tokenDomains;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // token_domains - computed: false, optional: false, required: true
  private _tokenDomains?: string[]; 
  public get tokenDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('token_domains'));
  }
  public set tokenDomains(value: string[]) {
    this._tokenDomains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenDomainsInput() {
    return this._tokenDomains;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      scope: cdktf.stringToTerraform(this._scope),
      token_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tokenDomains),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tokenDomains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
