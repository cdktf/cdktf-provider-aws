// https://www.terraform.io/docs/providers/aws/r/data_aws_codeartifact_repository_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsCodeartifactRepositoryEndpointConfig extends cdktf.TerraformMetaArguments {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly format: string;
  readonly repository: string;
}

// Resource

export class DataAwsCodeartifactRepositoryEndpoint extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsCodeartifactRepositoryEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codeartifact_repository_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domain = config.domain;
    this._domainOwner = config.domainOwner;
    this._format = config.format;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain: string;
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain
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
    return this._domainOwner
  }

  // format - computed: false, optional: false, required: true
  private _format: string;
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // repository - computed: false, optional: false, required: true
  private _repository: string;
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository
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
      repository: cdktf.stringToTerraform(this._repository),
    };
  }
}
