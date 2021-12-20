// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2 Container Registry
*/
export interface EcrPullThroughCacheRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule.html#ecr_repository_prefix EcrPullThroughCacheRule#ecr_repository_prefix}
  */
  readonly ecrRepositoryPrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule.html#upstream_registry_url EcrPullThroughCacheRule#upstream_registry_url}
  */
  readonly upstreamRegistryUrl: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule.html aws_ecr_pull_through_cache_rule}
*/
export class EcrPullThroughCacheRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ecr_pull_through_cache_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule.html aws_ecr_pull_through_cache_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcrPullThroughCacheRuleConfig
  */
  public constructor(scope: Construct, id: string, config: EcrPullThroughCacheRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecr_pull_through_cache_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ecrRepositoryPrefix = config.ecrRepositoryPrefix;
    this._upstreamRegistryUrl = config.upstreamRegistryUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  public get id() {
    return this.getStringAttribute('id');
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
      ecr_repository_prefix: cdktf.stringToTerraform(this._ecrRepositoryPrefix),
      upstream_registry_url: cdktf.stringToTerraform(this._upstreamRegistryUrl),
    };
  }
}
