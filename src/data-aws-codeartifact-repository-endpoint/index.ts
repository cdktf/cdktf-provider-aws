/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/codeartifact_repository_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsCodeartifactRepositoryEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/codeartifact_repository_endpoint#domain DataAwsCodeartifactRepositoryEndpoint#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/codeartifact_repository_endpoint#domain_owner DataAwsCodeartifactRepositoryEndpoint#domain_owner}
  */
  readonly domainOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/codeartifact_repository_endpoint#format DataAwsCodeartifactRepositoryEndpoint#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/codeartifact_repository_endpoint#id DataAwsCodeartifactRepositoryEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/codeartifact_repository_endpoint#repository DataAwsCodeartifactRepositoryEndpoint#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/codeartifact_repository_endpoint aws_codeartifact_repository_endpoint}
*/
export class DataAwsCodeartifactRepositoryEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_codeartifact_repository_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsCodeartifactRepositoryEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsCodeartifactRepositoryEndpoint to import
  * @param importFromId The id of the existing DataAwsCodeartifactRepositoryEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/codeartifact_repository_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsCodeartifactRepositoryEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_codeartifact_repository_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/codeartifact_repository_endpoint aws_codeartifact_repository_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsCodeartifactRepositoryEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsCodeartifactRepositoryEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codeartifact_repository_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.70.0',
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
    this._domain = config.domain;
    this._domainOwner = config.domainOwner;
    this._format = config.format;
    this._id = config.id;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domain_owner - computed: true, optional: true, required: false
  private _domainOwner?: string; 
  public get domainOwner() {
    return this.getStringAttribute('domain_owner');
  }
  public set domainOwner(value: string) {
    this._domainOwner = value;
  }
  public resetDomainOwner() {
    this._domainOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainOwnerInput() {
    return this._domainOwner;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // repository_endpoint - computed: true, optional: false, required: false
  public get repositoryEndpoint() {
    return this.getStringAttribute('repository_endpoint');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      domain_owner: cdktf.stringToTerraform(this._domainOwner),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_owner: {
        value: cdktf.stringToHclTerraform(this._domainOwner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
