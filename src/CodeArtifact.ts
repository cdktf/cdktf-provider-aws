// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CodeArtifact
*/
export namespace CodeArtifact {
  export interface CodeartifactDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain.html#domain CodeartifactDomain#domain}
    */
    readonly domain: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain.html#encryption_key CodeartifactDomain#encryption_key}
    */
    readonly encryptionKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain.html#tags CodeartifactDomain#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain.html#tags_all CodeartifactDomain#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain.html aws_codeartifact_domain}
  */
  export class CodeartifactDomain extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codeartifact_domain";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain.html aws_codeartifact_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodeartifactDomainConfig
    */
    public constructor(scope: Construct, id: string, config: CodeartifactDomainConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codeartifact_domain',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._domain = config.domain;
      this._encryptionKey = config.encryptionKey;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // asset_size_bytes - computed: true, optional: false, required: false
    public get assetSizeBytes() {
      return this.getNumberAttribute('asset_size_bytes');
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
      return this.getStringAttribute('created_time');
    }

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
      return this._domain
    }

    // encryption_key - computed: true, optional: true, required: false
    private _encryptionKey?: string | undefined; 
    public get encryptionKey() {
      return this.getStringAttribute('encryption_key');
    }
    public set encryptionKey(value: string | undefined) {
      this._encryptionKey = value;
    }
    public resetEncryptionKey() {
      this._encryptionKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyInput() {
      return this._encryptionKey
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // owner - computed: true, optional: false, required: false
    public get owner() {
      return this.getStringAttribute('owner');
    }

    // repository_count - computed: true, optional: false, required: false
    public get repositoryCount() {
      return this.getNumberAttribute('repository_count');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        domain: cdktf.stringToTerraform(this._domain),
        encryption_key: cdktf.stringToTerraform(this._encryptionKey),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface CodeartifactDomainPermissionsPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy.html#domain CodeartifactDomainPermissionsPolicy#domain}
    */
    readonly domain: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy.html#domain_owner CodeartifactDomainPermissionsPolicy#domain_owner}
    */
    readonly domainOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy.html#policy_document CodeartifactDomainPermissionsPolicy#policy_document}
    */
    readonly policyDocument: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy.html#policy_revision CodeartifactDomainPermissionsPolicy#policy_revision}
    */
    readonly policyRevision?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy.html aws_codeartifact_domain_permissions_policy}
  */
  export class CodeartifactDomainPermissionsPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codeartifact_domain_permissions_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy.html aws_codeartifact_domain_permissions_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodeartifactDomainPermissionsPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: CodeartifactDomainPermissionsPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codeartifact_domain_permissions_policy',
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
      this._policyDocument = config.policyDocument;
      this._policyRevision = config.policyRevision;
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
      return this._domain
    }

    // domain_owner - computed: true, optional: true, required: false
    private _domainOwner?: string | undefined; 
    public get domainOwner() {
      return this.getStringAttribute('domain_owner');
    }
    public set domainOwner(value: string | undefined) {
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

    // policy_document - computed: false, optional: false, required: true
    private _policyDocument?: string; 
    public get policyDocument() {
      return this.getStringAttribute('policy_document');
    }
    public set policyDocument(value: string) {
      this._policyDocument = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyDocumentInput() {
      return this._policyDocument
    }

    // policy_revision - computed: true, optional: true, required: false
    private _policyRevision?: string | undefined; 
    public get policyRevision() {
      return this.getStringAttribute('policy_revision');
    }
    public set policyRevision(value: string | undefined) {
      this._policyRevision = value;
    }
    public resetPolicyRevision() {
      this._policyRevision = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyRevisionInput() {
      return this._policyRevision
    }

    // resource_arn - computed: true, optional: false, required: false
    public get resourceArn() {
      return this.getStringAttribute('resource_arn');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        domain: cdktf.stringToTerraform(this._domain),
        domain_owner: cdktf.stringToTerraform(this._domainOwner),
        policy_document: cdktf.stringToTerraform(this._policyDocument),
        policy_revision: cdktf.stringToTerraform(this._policyRevision),
      };
    }
  }
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
    readonly externalConnections?: CodeartifactRepositoryExternalConnections;
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

  function codeartifactRepositoryExternalConnectionsToTerraform(struct?: CodeartifactRepositoryExternalConnectionsOutputReference | CodeartifactRepositoryExternalConnections): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      external_connection_name: cdktf.stringToTerraform(struct!.externalConnectionName),
    }
  }

  export class CodeartifactRepositoryExternalConnectionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // external_connection_name - computed: false, optional: false, required: true
    private _externalConnectionName?: string; 
    public get externalConnectionName() {
      return this.getStringAttribute('external_connection_name');
    }
    public set externalConnectionName(value: string) {
      this._externalConnectionName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get externalConnectionNameInput() {
      return this._externalConnectionName
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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
    private _domain?: string; 
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
    private _domainOwner?: string | undefined; 
    public get domainOwner() {
      return this.getStringAttribute('domain_owner');
    }
    public set domainOwner(value: string | undefined) {
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
    private _repository?: string; 
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _externalConnections?: CodeartifactRepositoryExternalConnections | undefined; 
    private __externalConnectionsOutput = new CodeartifactRepositoryExternalConnectionsOutputReference(this as any, "external_connections", true);
    public get externalConnections() {
      return this.__externalConnectionsOutput;
    }
    public putExternalConnections(value: CodeartifactRepositoryExternalConnections | undefined) {
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
    private _upstream?: CodeartifactRepositoryUpstream[] | undefined; 
    public get upstream() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('upstream') as any;
    }
    public set upstream(value: CodeartifactRepositoryUpstream[] | undefined) {
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
        external_connections: codeartifactRepositoryExternalConnectionsToTerraform(this._externalConnections),
        upstream: cdktf.listMapper(codeartifactRepositoryUpstreamToTerraform)(this._upstream),
      };
    }
  }
  export interface CodeartifactRepositoryPermissionsPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy.html#domain CodeartifactRepositoryPermissionsPolicy#domain}
    */
    readonly domain: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy.html#domain_owner CodeartifactRepositoryPermissionsPolicy#domain_owner}
    */
    readonly domainOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy.html#policy_document CodeartifactRepositoryPermissionsPolicy#policy_document}
    */
    readonly policyDocument: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy.html#policy_revision CodeartifactRepositoryPermissionsPolicy#policy_revision}
    */
    readonly policyRevision?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy.html#repository CodeartifactRepositoryPermissionsPolicy#repository}
    */
    readonly repository: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy.html aws_codeartifact_repository_permissions_policy}
  */
  export class CodeartifactRepositoryPermissionsPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codeartifact_repository_permissions_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy.html aws_codeartifact_repository_permissions_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodeartifactRepositoryPermissionsPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: CodeartifactRepositoryPermissionsPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codeartifact_repository_permissions_policy',
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
      this._policyDocument = config.policyDocument;
      this._policyRevision = config.policyRevision;
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
      return this._domain
    }

    // domain_owner - computed: true, optional: true, required: false
    private _domainOwner?: string | undefined; 
    public get domainOwner() {
      return this.getStringAttribute('domain_owner');
    }
    public set domainOwner(value: string | undefined) {
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

    // policy_document - computed: false, optional: false, required: true
    private _policyDocument?: string; 
    public get policyDocument() {
      return this.getStringAttribute('policy_document');
    }
    public set policyDocument(value: string) {
      this._policyDocument = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyDocumentInput() {
      return this._policyDocument
    }

    // policy_revision - computed: true, optional: true, required: false
    private _policyRevision?: string | undefined; 
    public get policyRevision() {
      return this.getStringAttribute('policy_revision');
    }
    public set policyRevision(value: string | undefined) {
      this._policyRevision = value;
    }
    public resetPolicyRevision() {
      this._policyRevision = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyRevisionInput() {
      return this._policyRevision
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
      return this._repository
    }

    // resource_arn - computed: true, optional: false, required: false
    public get resourceArn() {
      return this.getStringAttribute('resource_arn');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        domain: cdktf.stringToTerraform(this._domain),
        domain_owner: cdktf.stringToTerraform(this._domainOwner),
        policy_document: cdktf.stringToTerraform(this._policyDocument),
        policy_revision: cdktf.stringToTerraform(this._policyRevision),
        repository: cdktf.stringToTerraform(this._repository),
      };
    }
  }
  export interface DataAwsCodeartifactAuthorizationTokenConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token.html#domain DataAwsCodeartifactAuthorizationToken#domain}
    */
    readonly domain: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token.html#domain_owner DataAwsCodeartifactAuthorizationToken#domain_owner}
    */
    readonly domainOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token.html#duration_seconds DataAwsCodeartifactAuthorizationToken#duration_seconds}
    */
    readonly durationSeconds?: number;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token.html aws_codeartifact_authorization_token}
  */
  export class DataAwsCodeartifactAuthorizationToken extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codeartifact_authorization_token";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token.html aws_codeartifact_authorization_token} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCodeartifactAuthorizationTokenConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsCodeartifactAuthorizationTokenConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codeartifact_authorization_token',
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
      this._durationSeconds = config.durationSeconds;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // authorization_token - computed: true, optional: false, required: false
    public get authorizationToken() {
      return this.getStringAttribute('authorization_token');
    }

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
      return this._domain
    }

    // domain_owner - computed: true, optional: true, required: false
    private _domainOwner?: string | undefined; 
    public get domainOwner() {
      return this.getStringAttribute('domain_owner');
    }
    public set domainOwner(value: string | undefined) {
      this._domainOwner = value;
    }
    public resetDomainOwner() {
      this._domainOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainOwnerInput() {
      return this._domainOwner
    }

    // duration_seconds - computed: false, optional: true, required: false
    private _durationSeconds?: number | undefined; 
    public get durationSeconds() {
      return this.getNumberAttribute('duration_seconds');
    }
    public set durationSeconds(value: number | undefined) {
      this._durationSeconds = value;
    }
    public resetDurationSeconds() {
      this._durationSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationSecondsInput() {
      return this._durationSeconds
    }

    // expiration - computed: true, optional: false, required: false
    public get expiration() {
      return this.getStringAttribute('expiration');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        domain: cdktf.stringToTerraform(this._domain),
        domain_owner: cdktf.stringToTerraform(this._domainOwner),
        duration_seconds: cdktf.numberToTerraform(this._durationSeconds),
      };
    }
  }
  export interface DataAwsCodeartifactRepositoryEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint.html#domain DataAwsCodeartifactRepositoryEndpoint#domain}
    */
    readonly domain: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint.html#domain_owner DataAwsCodeartifactRepositoryEndpoint#domain_owner}
    */
    readonly domainOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint.html#format DataAwsCodeartifactRepositoryEndpoint#format}
    */
    readonly format: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint.html#repository DataAwsCodeartifactRepositoryEndpoint#repository}
    */
    readonly repository: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint.html aws_codeartifact_repository_endpoint}
  */
  export class DataAwsCodeartifactRepositoryEndpoint extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codeartifact_repository_endpoint";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint.html aws_codeartifact_repository_endpoint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCodeartifactRepositoryEndpointConfig
    */
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
    private _domain?: string; 
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
    private _domainOwner?: string | undefined; 
    public get domainOwner() {
      return this.getStringAttribute('domain_owner');
    }
    public set domainOwner(value: string | undefined) {
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
    private _format?: string; 
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
    private _repository?: string; 
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
}
