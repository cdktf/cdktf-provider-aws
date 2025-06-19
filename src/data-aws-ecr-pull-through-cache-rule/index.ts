/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ecr_pull_through_cache_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEcrPullThroughCacheRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ecr_pull_through_cache_rule#ecr_repository_prefix DataAwsEcrPullThroughCacheRule#ecr_repository_prefix}
  */
  readonly ecrRepositoryPrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ecr_pull_through_cache_rule#id DataAwsEcrPullThroughCacheRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ecr_pull_through_cache_rule#region DataAwsEcrPullThroughCacheRule#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ecr_pull_through_cache_rule aws_ecr_pull_through_cache_rule}
*/
export class DataAwsEcrPullThroughCacheRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ecr_pull_through_cache_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsEcrPullThroughCacheRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsEcrPullThroughCacheRule to import
  * @param importFromId The id of the existing DataAwsEcrPullThroughCacheRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ecr_pull_through_cache_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsEcrPullThroughCacheRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ecr_pull_through_cache_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ecr_pull_through_cache_rule aws_ecr_pull_through_cache_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEcrPullThroughCacheRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsEcrPullThroughCacheRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecr_pull_through_cache_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.0.0',
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
    this._ecrRepositoryPrefix = config.ecrRepositoryPrefix;
    this._id = config.id;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential_arn - computed: true, optional: false, required: false
  public get credentialArn() {
    return this.getStringAttribute('credential_arn');
  }

  // custom_role_arn - computed: true, optional: false, required: false
  public get customRoleArn() {
    return this.getStringAttribute('custom_role_arn');
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

  // registry_id - computed: true, optional: false, required: false
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }

  // upstream_registry_url - computed: true, optional: false, required: false
  public get upstreamRegistryUrl() {
    return this.getStringAttribute('upstream_registry_url');
  }

  // upstream_repository_prefix - computed: true, optional: false, required: false
  public get upstreamRepositoryPrefix() {
    return this.getStringAttribute('upstream_repository_prefix');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ecr_repository_prefix: cdktf.stringToTerraform(this._ecrRepositoryPrefix),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
