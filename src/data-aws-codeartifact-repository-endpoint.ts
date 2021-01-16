// https://www.terraform.io/docs/providers/aws/r/data_aws_codeartifact_repository_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsCodeartifactRepositoryEndpointConfig extends TerraformMetaArguments {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly format: string;
  readonly repository: string;
}

// Resource

export class DataAwsCodeartifactRepositoryEndpoint extends TerraformDataSource {

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
    return this._domain;
  }
  public set domain(value: string) {
    this._domain = value;
  }

  // domain_owner - computed: true, optional: true, required: false
  private _domainOwner?: string;
  public get domainOwner() {
    return this._domainOwner ?? this.getStringAttribute('domain_owner');
  }
  public set domainOwner(value: string | undefined) {
    this._domainOwner = value;
  }

  // format - computed: false, optional: false, required: true
  private _format: string;
  public get format() {
    return this._format;
  }
  public set format(value: string) {
    this._format = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // repository - computed: false, optional: false, required: true
  private _repository: string;
  public get repository() {
    return this._repository;
  }
  public set repository(value: string) {
    this._repository = value;
  }

  // repository_endpoint - computed: true, optional: false, required: true
  public get repositoryEndpoint() {
    return this.getStringAttribute('repository_endpoint');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: this._domain,
      domain_owner: this._domainOwner,
      format: this._format,
      repository: this._repository,
    };
  }
}
