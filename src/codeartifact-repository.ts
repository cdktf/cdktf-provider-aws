// https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodeartifactRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#description CodeartifactRepository#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#domain CodeartifactRepository#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#domain_owner CodeartifactRepository#domain_owner}
  */
  readonly domainOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#repository CodeartifactRepository#repository}
  */
  readonly repository: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#tags CodeartifactRepository#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#tags_all CodeartifactRepository#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * external_connections block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#external_connections CodeartifactRepository#external_connections}
  */
  readonly externalConnections?: CodeartifactRepositoryExternalConnections[];
  /**
  * upstream block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#upstream CodeartifactRepository#upstream}
  */
  readonly upstream?: CodeartifactRepositoryUpstream[];
}
export interface CodeartifactRepositoryExternalConnections {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#external_connection_name CodeartifactRepository#external_connection_name}
  */
  readonly externalConnectionName: string;
}

function codeartifactRepositoryExternalConnectionsToTerraform(struct?: CodeartifactRepositoryExternalConnections): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    external_connection_name: cdktf.stringToTerraform(struct!.externalConnectionName),
  }
}

export interface CodeartifactRepositoryUpstream {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#repository_name CodeartifactRepository#repository_name}
  */
  readonly repositoryName: string;
}

function codeartifactRepositoryUpstreamToTerraform(struct?: CodeartifactRepositoryUpstream): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html aws_codeartifact_repository}
*/
export class CodeartifactRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_codeartifact_repository";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html aws_codeartifact_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodeartifactRepositoryConfig
  */
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
    this._tagsAll = config.tagsAll;
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
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
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      external_connections: cdktf.listMapper(codeartifactRepositoryExternalConnectionsToTerraform)(this._externalConnections),
      upstream: cdktf.listMapper(codeartifactRepositoryUpstreamToTerraform)(this._upstream),
    };
  }
}
