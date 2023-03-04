// https://www.terraform.io/docs/providers/aws/r/codeartifact_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodeartifactRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#description CodeartifactRepository#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#domain CodeartifactRepository#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#domain_owner CodeartifactRepository#domain_owner}
  */
  readonly domainOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#id CodeartifactRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#repository CodeartifactRepository#repository}
  */
  readonly repository: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#tags CodeartifactRepository#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#tags_all CodeartifactRepository#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * external_connections block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#external_connections CodeartifactRepository#external_connections}
  */
  readonly externalConnections?: CodeartifactRepositoryExternalConnections;
  /**
  * upstream block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#upstream CodeartifactRepository#upstream}
  */
  readonly upstream?: CodeartifactRepositoryUpstream[] | cdktf.IResolvable;
}
export interface CodeartifactRepositoryExternalConnections {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#external_connection_name CodeartifactRepository#external_connection_name}
  */
  readonly externalConnectionName: string;
}

export function codeartifactRepositoryExternalConnectionsToTerraform(struct?: CodeartifactRepositoryExternalConnectionsOutputReference | CodeartifactRepositoryExternalConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_connection_name: cdktf.stringToTerraform(struct!.externalConnectionName),
  }
}

export class CodeartifactRepositoryExternalConnectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeartifactRepositoryExternalConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalConnectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalConnectionName = this._externalConnectionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeartifactRepositoryExternalConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalConnectionName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalConnectionName = value.externalConnectionName;
    }
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
    return this._externalConnectionName;
  }

  // package_format - computed: true, optional: false, required: false
  public get packageFormat() {
    return this.getStringAttribute('package_format');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface CodeartifactRepositoryUpstream {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#repository_name CodeartifactRepository#repository_name}
  */
  readonly repositoryName: string;
}

export function codeartifactRepositoryUpstreamToTerraform(struct?: CodeartifactRepositoryUpstream | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
  }
}

export class CodeartifactRepositoryUpstreamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodeartifactRepositoryUpstream | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryName = this._repositoryName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeartifactRepositoryUpstream | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repositoryName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repositoryName = value.repositoryName;
    }
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }
}

export class CodeartifactRepositoryUpstreamList extends cdktf.ComplexList {
  public internalValue? : CodeartifactRepositoryUpstream[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodeartifactRepositoryUpstreamOutputReference {
    return new CodeartifactRepositoryUpstreamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository aws_codeartifact_repository}
*/
export class CodeartifactRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_codeartifact_repository";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository aws_codeartifact_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodeartifactRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: CodeartifactRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codeartifact_repository',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._domain = config.domain;
    this._domainOwner = config.domainOwner;
    this._id = config.id;
    this._repository = config.repository;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._externalConnections.internalValue = config.externalConnections;
    this._upstream.internalValue = config.upstream;
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
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // external_connections - computed: false, optional: true, required: false
  private _externalConnections = new CodeartifactRepositoryExternalConnectionsOutputReference(this, "external_connections");
  public get externalConnections() {
    return this._externalConnections;
  }
  public putExternalConnections(value: CodeartifactRepositoryExternalConnections) {
    this._externalConnections.internalValue = value;
  }
  public resetExternalConnections() {
    this._externalConnections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalConnectionsInput() {
    return this._externalConnections.internalValue;
  }

  // upstream - computed: false, optional: true, required: false
  private _upstream = new CodeartifactRepositoryUpstreamList(this, "upstream", false);
  public get upstream() {
    return this._upstream;
  }
  public putUpstream(value: CodeartifactRepositoryUpstream[] | cdktf.IResolvable) {
    this._upstream.internalValue = value;
  }
  public resetUpstream() {
    this._upstream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInput() {
    return this._upstream.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      domain_owner: cdktf.stringToTerraform(this._domainOwner),
      id: cdktf.stringToTerraform(this._id),
      repository: cdktf.stringToTerraform(this._repository),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      external_connections: codeartifactRepositoryExternalConnectionsToTerraform(this._externalConnections.internalValue),
      upstream: cdktf.listMapper(codeartifactRepositoryUpstreamToTerraform, true)(this._upstream.internalValue),
    };
  }
}
