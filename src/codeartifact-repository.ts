// https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodeartifactRepositoryConfig extends cdktf.TerraformMetaArguments {
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

function codeartifactRepositoryExternalConnectionsToTerraform(struct?: CodeartifactRepositoryExternalConnections): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    external_connection_name: cdktf.stringToTerraform(struct!.externalConnectionName),
  }
}

export interface CodeartifactRepositoryUpstream {
  readonly repositoryName: string;
}

function codeartifactRepositoryUpstreamToTerraform(struct?: CodeartifactRepositoryUpstream): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
  }
}


// Resource

export class CodeartifactRepository extends cdktf.TerraformResource {

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

  // administrator_account - computed: true, optional: false, required: false
  public get administratorAccount() {
    return this.getStringAttribute('administrator_account');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // external_connections - computed: false, optional: true, required: false
  private _externalConnections?: CodeartifactRepositoryExternalConnections[];
  public get externalConnections() {
    return this.interpolationForAttribute('external_connections') as any;
  }
  public set externalConnections(value: CodeartifactRepositoryExternalConnections[] ) {
    this._externalConnections = value;
  }
  public resetExternalConnections() {
    this._externalConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalConnectionsInput() {
    return this._externalConnections
  }

  // upstream - computed: false, optional: true, required: false
  private _upstream?: CodeartifactRepositoryUpstream[];
  public get upstream() {
    return this.interpolationForAttribute('upstream') as any;
  }
  public set upstream(value: CodeartifactRepositoryUpstream[] ) {
    this._upstream = value;
  }
  public resetUpstream() {
    this._upstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInput() {
    return this._upstream
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      domain_owner: cdktf.stringToTerraform(this._domainOwner),
      repository: cdktf.stringToTerraform(this._repository),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      external_connections: cdktf.listMapper(codeartifactRepositoryExternalConnectionsToTerraform)(this._externalConnections),
      upstream: cdktf.listMapper(codeartifactRepositoryUpstreamToTerraform)(this._upstream),
    };
  }
}
