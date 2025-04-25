// https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/neptunegraph_graph
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NeptunegraphGraphConfig extends cdktf.TerraformMetaArguments {
  /**
  * A value that indicates whether the graph has deletion protection enabled. The graph can't be deleted when deletion protection is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/neptunegraph_graph#deletion_protection NeptunegraphGraph#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The graph name. For example: my-graph-1.
  * 								The name must contain from 1 to 63 letters, numbers, or hyphens, 
  * 								and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens.
  * 								If you don't specify a graph name, a unique graph name is generated for you using the prefix graph-for, 
  * 								followed by a combination of Stack Name and a UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/neptunegraph_graph#graph_name NeptunegraphGraph#graph_name}
  */
  readonly graphName?: string;
  /**
  * Allows user to specify name prefix and have remainder of name automatically generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/neptunegraph_graph#graph_name_prefix NeptunegraphGraph#graph_name_prefix}
  */
  readonly graphNamePrefix?: string;
  /**
  * Specifies a KMS key to use to encrypt data in the new graph.  Value must be ARN of KMS Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/neptunegraph_graph#kms_key_identifier NeptunegraphGraph#kms_key_identifier}
  */
  readonly kmsKeyIdentifier?: string;
  /**
  * The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/neptunegraph_graph#provisioned_memory NeptunegraphGraph#provisioned_memory}
  */
  readonly provisionedMemory: number;
  /**
  * Specifies whether or not the graph can be reachable over the internet. 
  * 								All access to graphs is IAM authenticated.
  * 								When the graph is publicly available, its domain name system (DNS) endpoint resolves to 
  * 								the public IP address from the internet. When the graph isn't publicly available, you need 
  * 								to create a PrivateGraphEndpoint in a given VPC to ensure the DNS name resolves to a private 
  * 								IP address that is reachable from the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/neptunegraph_graph#public_connectivity NeptunegraphGraph#public_connectivity}
  */
  readonly publicConnectivity?: boolean | cdktf.IResolvable;
  /**
  * The number of replicas in other AZs.  Value must be between 0 and 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/neptunegraph_graph#replica_count NeptunegraphGraph#replica_count}
  */
  readonly replicaCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/neptunegraph_graph#tags NeptunegraphGraph#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/neptunegraph_graph#timeouts NeptunegraphGraph#timeouts}
  */
  readonly timeouts?: NeptunegraphGraphTimeouts;
  /**
  * vector_search_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/neptunegraph_graph#vector_search_configuration NeptunegraphGraph#vector_search_configuration}
  */
  readonly vectorSearchConfiguration?: NeptunegraphGraphVectorSearchConfiguration[] | cdktf.IResolvable;
}
export interface NeptunegraphGraphTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/neptunegraph_graph#create NeptunegraphGraph#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/neptunegraph_graph#delete NeptunegraphGraph#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/neptunegraph_graph#update NeptunegraphGraph#update}
  */
  readonly update?: string;
}

export function neptunegraphGraphTimeoutsToTerraform(struct?: NeptunegraphGraphTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function neptunegraphGraphTimeoutsToHclTerraform(struct?: NeptunegraphGraphTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NeptunegraphGraphTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NeptunegraphGraphTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NeptunegraphGraphTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface NeptunegraphGraphVectorSearchConfiguration {
  /**
  * Specifies the number of dimensions for vector embeddings.  Value must be between 1 and 65,535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/neptunegraph_graph#vector_search_dimension NeptunegraphGraph#vector_search_dimension}
  */
  readonly vectorSearchDimension?: number;
}

export function neptunegraphGraphVectorSearchConfigurationToTerraform(struct?: NeptunegraphGraphVectorSearchConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vector_search_dimension: cdktf.numberToTerraform(struct!.vectorSearchDimension),
  }
}


export function neptunegraphGraphVectorSearchConfigurationToHclTerraform(struct?: NeptunegraphGraphVectorSearchConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vector_search_dimension: {
      value: cdktf.numberToHclTerraform(struct!.vectorSearchDimension),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NeptunegraphGraphVectorSearchConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NeptunegraphGraphVectorSearchConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vectorSearchDimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorSearchDimension = this._vectorSearchDimension;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NeptunegraphGraphVectorSearchConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vectorSearchDimension = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vectorSearchDimension = value.vectorSearchDimension;
    }
  }

  // vector_search_dimension - computed: false, optional: true, required: false
  private _vectorSearchDimension?: number; 
  public get vectorSearchDimension() {
    return this.getNumberAttribute('vector_search_dimension');
  }
  public set vectorSearchDimension(value: number) {
    this._vectorSearchDimension = value;
  }
  public resetVectorSearchDimension() {
    this._vectorSearchDimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorSearchDimensionInput() {
    return this._vectorSearchDimension;
  }
}

export class NeptunegraphGraphVectorSearchConfigurationList extends cdktf.ComplexList {
  public internalValue? : NeptunegraphGraphVectorSearchConfiguration[] | cdktf.IResolvable

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
  public get(index: number): NeptunegraphGraphVectorSearchConfigurationOutputReference {
    return new NeptunegraphGraphVectorSearchConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/neptunegraph_graph aws_neptunegraph_graph}
*/
export class NeptunegraphGraph extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_neptunegraph_graph";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NeptunegraphGraph resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NeptunegraphGraph to import
  * @param importFromId The id of the existing NeptunegraphGraph that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/neptunegraph_graph#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NeptunegraphGraph to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_neptunegraph_graph", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/neptunegraph_graph aws_neptunegraph_graph} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NeptunegraphGraphConfig
  */
  public constructor(scope: Construct, id: string, config: NeptunegraphGraphConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_neptunegraph_graph',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.96.0',
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
    this._deletionProtection = config.deletionProtection;
    this._graphName = config.graphName;
    this._graphNamePrefix = config.graphNamePrefix;
    this._kmsKeyIdentifier = config.kmsKeyIdentifier;
    this._provisionedMemory = config.provisionedMemory;
    this._publicConnectivity = config.publicConnectivity;
    this._replicaCount = config.replicaCount;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
    this._vectorSearchConfiguration.internalValue = config.vectorSearchConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // graph_name - computed: true, optional: true, required: false
  private _graphName?: string; 
  public get graphName() {
    return this.getStringAttribute('graph_name');
  }
  public set graphName(value: string) {
    this._graphName = value;
  }
  public resetGraphName() {
    this._graphName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphNameInput() {
    return this._graphName;
  }

  // graph_name_prefix - computed: false, optional: true, required: false
  private _graphNamePrefix?: string; 
  public get graphNamePrefix() {
    return this.getStringAttribute('graph_name_prefix');
  }
  public set graphNamePrefix(value: string) {
    this._graphNamePrefix = value;
  }
  public resetGraphNamePrefix() {
    this._graphNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphNamePrefixInput() {
    return this._graphNamePrefix;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_identifier - computed: true, optional: true, required: false
  private _kmsKeyIdentifier?: string; 
  public get kmsKeyIdentifier() {
    return this.getStringAttribute('kms_key_identifier');
  }
  public set kmsKeyIdentifier(value: string) {
    this._kmsKeyIdentifier = value;
  }
  public resetKmsKeyIdentifier() {
    this._kmsKeyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdentifierInput() {
    return this._kmsKeyIdentifier;
  }

  // provisioned_memory - computed: false, optional: false, required: true
  private _provisionedMemory?: number; 
  public get provisionedMemory() {
    return this.getNumberAttribute('provisioned_memory');
  }
  public set provisionedMemory(value: number) {
    this._provisionedMemory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedMemoryInput() {
    return this._provisionedMemory;
  }

  // public_connectivity - computed: true, optional: true, required: false
  private _publicConnectivity?: boolean | cdktf.IResolvable; 
  public get publicConnectivity() {
    return this.getBooleanAttribute('public_connectivity');
  }
  public set publicConnectivity(value: boolean | cdktf.IResolvable) {
    this._publicConnectivity = value;
  }
  public resetPublicConnectivity() {
    this._publicConnectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicConnectivityInput() {
    return this._publicConnectivity;
  }

  // replica_count - computed: true, optional: true, required: false
  private _replicaCount?: number; 
  public get replicaCount() {
    return this.getNumberAttribute('replica_count');
  }
  public set replicaCount(value: number) {
    this._replicaCount = value;
  }
  public resetReplicaCount() {
    this._replicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCountInput() {
    return this._replicaCount;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NeptunegraphGraphTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NeptunegraphGraphTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vector_search_configuration - computed: false, optional: true, required: false
  private _vectorSearchConfiguration = new NeptunegraphGraphVectorSearchConfigurationList(this, "vector_search_configuration", false);
  public get vectorSearchConfiguration() {
    return this._vectorSearchConfiguration;
  }
  public putVectorSearchConfiguration(value: NeptunegraphGraphVectorSearchConfiguration[] | cdktf.IResolvable) {
    this._vectorSearchConfiguration.internalValue = value;
  }
  public resetVectorSearchConfiguration() {
    this._vectorSearchConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorSearchConfigurationInput() {
    return this._vectorSearchConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      graph_name: cdktf.stringToTerraform(this._graphName),
      graph_name_prefix: cdktf.stringToTerraform(this._graphNamePrefix),
      kms_key_identifier: cdktf.stringToTerraform(this._kmsKeyIdentifier),
      provisioned_memory: cdktf.numberToTerraform(this._provisionedMemory),
      public_connectivity: cdktf.booleanToTerraform(this._publicConnectivity),
      replica_count: cdktf.numberToTerraform(this._replicaCount),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: neptunegraphGraphTimeoutsToTerraform(this._timeouts.internalValue),
      vector_search_configuration: cdktf.listMapper(neptunegraphGraphVectorSearchConfigurationToTerraform, true)(this._vectorSearchConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      graph_name: {
        value: cdktf.stringToHclTerraform(this._graphName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graph_name_prefix: {
        value: cdktf.stringToHclTerraform(this._graphNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_identifier: {
        value: cdktf.stringToHclTerraform(this._kmsKeyIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioned_memory: {
        value: cdktf.numberToHclTerraform(this._provisionedMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      public_connectivity: {
        value: cdktf.booleanToHclTerraform(this._publicConnectivity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replica_count: {
        value: cdktf.numberToHclTerraform(this._replicaCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: neptunegraphGraphTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NeptunegraphGraphTimeouts",
      },
      vector_search_configuration: {
        value: cdktf.listMapperHcl(neptunegraphGraphVectorSearchConfigurationToHclTerraform, true)(this._vectorSearchConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NeptunegraphGraphVectorSearchConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
