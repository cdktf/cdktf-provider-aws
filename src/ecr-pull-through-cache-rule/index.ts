/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/ecr_pull_through_cache_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcrPullThroughCacheRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/ecr_pull_through_cache_rule#credential_arn EcrPullThroughCacheRule#credential_arn}
  */
  readonly credentialArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/ecr_pull_through_cache_rule#ecr_repository_prefix EcrPullThroughCacheRule#ecr_repository_prefix}
  */
  readonly ecrRepositoryPrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/ecr_pull_through_cache_rule#id EcrPullThroughCacheRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/ecr_pull_through_cache_rule#upstream_registry_url EcrPullThroughCacheRule#upstream_registry_url}
  */
  readonly upstreamRegistryUrl: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/ecr_pull_through_cache_rule aws_ecr_pull_through_cache_rule}
*/
export class EcrPullThroughCacheRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ecr_pull_through_cache_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcrPullThroughCacheRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcrPullThroughCacheRule to import
  * @param importFromId The id of the existing EcrPullThroughCacheRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/ecr_pull_through_cache_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcrPullThroughCacheRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ecr_pull_through_cache_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/ecr_pull_through_cache_rule aws_ecr_pull_through_cache_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcrPullThroughCacheRuleConfig
  */
  public constructor(scope: Construct, id: string, config: EcrPullThroughCacheRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecr_pull_through_cache_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.56.1',
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
    this._credentialArn = config.credentialArn;
    this._ecrRepositoryPrefix = config.ecrRepositoryPrefix;
    this._id = config.id;
    this._upstreamRegistryUrl = config.upstreamRegistryUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential_arn - computed: false, optional: true, required: false
  private _credentialArn?: string; 
  public get credentialArn() {
    return this.getStringAttribute('credential_arn');
  }
  public set credentialArn(value: string) {
    this._credentialArn = value;
  }
  public resetCredentialArn() {
    this._credentialArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialArnInput() {
    return this._credentialArn;
  }

  // ecr_repository_prefix - computed: false, optional: false, required: true
  private _ecrRepositoryPrefix?: string; 
  public get ecrRepositoryPrefix() {
    return this.getStringAttribute('ecr_repository_prefix');
  }
  public set ecrRepositoryPrefix(value: string) {
    this._ecrRepositoryPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrRepositoryPrefixInput() {
    return this._ecrRepositoryPrefix;
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

  // registry_id - computed: true, optional: false, required: false
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }

  // upstream_registry_url - computed: false, optional: false, required: true
  private _upstreamRegistryUrl?: string; 
  public get upstreamRegistryUrl() {
    return this.getStringAttribute('upstream_registry_url');
  }
  public set upstreamRegistryUrl(value: string) {
    this._upstreamRegistryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamRegistryUrlInput() {
    return this._upstreamRegistryUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_arn: cdktf.stringToTerraform(this._credentialArn),
      ecr_repository_prefix: cdktf.stringToTerraform(this._ecrRepositoryPrefix),
      id: cdktf.stringToTerraform(this._id),
      upstream_registry_url: cdktf.stringToTerraform(this._upstreamRegistryUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential_arn: {
        value: cdktf.stringToHclTerraform(this._credentialArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecr_repository_prefix: {
        value: cdktf.stringToHclTerraform(this._ecrRepositoryPrefix),
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
      upstream_registry_url: {
        value: cdktf.stringToHclTerraform(this._upstreamRegistryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
