// https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CodeartifactRepositoryConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly domain: string;
  readonly domainOwner?: string;
  readonly repository: string;
  readonly tags?: { [key: string]: string };
  /** external_connections block */
  readonly externalConnections?: CodeartifactRepositoryExternalConnections[];
  /** upstream block */
  readonly upstream?: CodeartifactRepositoryUpstream[];
}
export interface CodeartifactRepositoryExternalConnections {
  readonly externalConnectionName: string;
}
export interface CodeartifactRepositoryUpstream {
  readonly repositoryName: string;
}

// Resource

export class CodeartifactRepository extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CodeartifactRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codeartifact_repository',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._domain = config.domain;
    this._domainOwner = config.domainOwner;
    this._repository = config.repository;
    this._tags = config.tags;
    this._externalConnections = config.externalConnections;
    this._upstream = config.upstream;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrator_account - computed: true, optional: false, required: true
  public get administratorAccount() {
    return this.getStringAttribute('administrator_account');
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // external_connections - computed: false, optional: true, required: false
  private _externalConnections?: CodeartifactRepositoryExternalConnections[];
  public get externalConnections() {
    return this._externalConnections;
  }
  public set externalConnections(value: CodeartifactRepositoryExternalConnections[] | undefined) {
    this._externalConnections = value;
  }

  // upstream - computed: false, optional: true, required: false
  private _upstream?: CodeartifactRepositoryUpstream[];
  public get upstream() {
    return this._upstream;
  }
  public set upstream(value: CodeartifactRepositoryUpstream[] | undefined) {
    this._upstream = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      domain: this._domain,
      domain_owner: this._domainOwner,
      repository: this._repository,
      tags: this._tags,
      external_connections: this._externalConnections,
      upstream: this._upstream,
    };
  }
}
