# `neptunegraphGraph` Submodule <a name="`neptunegraphGraph` Submodule" id="@cdktf/provider-aws.neptunegraphGraph"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptunegraphGraph <a name="NeptunegraphGraph" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph aws_neptunegraph_graph}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraph(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  provisioned_memory: typing.Union[int, float],
  deletion_protection: typing.Union[bool, IResolvable] = None,
  graph_name: str = None,
  graph_name_prefix: str = None,
  kms_key_identifier: str = None,
  public_connectivity: typing.Union[bool, IResolvable] = None,
  region: str = None,
  replica_count: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: NeptunegraphGraphTimeouts = None,
  vector_search_configuration: typing.Union[IResolvable, typing.List[NeptunegraphGraphVectorSearchConfiguration]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provisionedMemory">provisioned_memory</a></code> | <code>typing.Union[int, float]</code> | The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A value that indicates whether the graph has deletion protection enabled. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.graphName">graph_name</a></code> | <code>str</code> | The graph name. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.graphNamePrefix">graph_name_prefix</a></code> | <code>str</code> | Allows user to specify name prefix and have remainder of name automatically generated. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.kmsKeyIdentifier">kms_key_identifier</a></code> | <code>str</code> | Specifies a KMS key to use to encrypt data in the new graph. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.publicConnectivity">public_connectivity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether or not the graph can be reachable over the internet. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | The number of replicas in other AZs.  Value must be between 0 and 2. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#tags NeptunegraphGraph#tags}. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts">NeptunegraphGraphTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.vectorSearchConfiguration">vector_search_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>]]</code> | vector_search_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `provisioned_memory`<sup>Required</sup> <a name="provisioned_memory" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provisionedMemory"></a>

- *Type:* typing.Union[int, float]

The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#provisioned_memory NeptunegraphGraph#provisioned_memory}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.deletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

A value that indicates whether the graph has deletion protection enabled.

The graph can't be deleted when deletion protection is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#deletion_protection NeptunegraphGraph#deletion_protection}

---

##### `graph_name`<sup>Optional</sup> <a name="graph_name" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.graphName"></a>

- *Type:* str

The graph name.

For example: my-graph-1.
The name must contain from 1 to 63 letters, numbers, or hyphens,
and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens.
If you don't specify a graph name, a unique graph name is generated for you using the prefix graph-for,
followed by a combination of Stack Name and a UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#graph_name NeptunegraphGraph#graph_name}

---

##### `graph_name_prefix`<sup>Optional</sup> <a name="graph_name_prefix" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.graphNamePrefix"></a>

- *Type:* str

Allows user to specify name prefix and have remainder of name automatically generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#graph_name_prefix NeptunegraphGraph#graph_name_prefix}

---

##### `kms_key_identifier`<sup>Optional</sup> <a name="kms_key_identifier" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.kmsKeyIdentifier"></a>

- *Type:* str

Specifies a KMS key to use to encrypt data in the new graph.

Value must be ARN of KMS Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#kms_key_identifier NeptunegraphGraph#kms_key_identifier}

---

##### `public_connectivity`<sup>Optional</sup> <a name="public_connectivity" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.publicConnectivity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether or not the graph can be reachable over the internet.

All access to graphs is IAM authenticated.
When the graph is publicly available, its domain name system (DNS) endpoint resolves to
the public IP address from the internet. When the graph isn't publicly available, you need
to create a PrivateGraphEndpoint in a given VPC to ensure the DNS name resolves to a private
IP address that is reachable from the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#public_connectivity NeptunegraphGraph#public_connectivity}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#region NeptunegraphGraph#region}

---

##### `replica_count`<sup>Optional</sup> <a name="replica_count" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.replicaCount"></a>

- *Type:* typing.Union[int, float]

The number of replicas in other AZs.  Value must be between 0 and 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#replica_count NeptunegraphGraph#replica_count}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#tags NeptunegraphGraph#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts">NeptunegraphGraphTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#timeouts NeptunegraphGraph#timeouts}

---

##### `vector_search_configuration`<sup>Optional</sup> <a name="vector_search_configuration" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.vectorSearchConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>]]

vector_search_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#vector_search_configuration NeptunegraphGraph#vector_search_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.putVectorSearchConfiguration">put_vector_search_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetGraphName">reset_graph_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetGraphNamePrefix">reset_graph_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetKmsKeyIdentifier">reset_kms_key_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetPublicConnectivity">reset_public_connectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetReplicaCount">reset_replica_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetVectorSearchConfiguration">reset_vector_search_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#create NeptunegraphGraph#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#delete NeptunegraphGraph#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#update NeptunegraphGraph#update}

---

##### `put_vector_search_configuration` <a name="put_vector_search_configuration" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.putVectorSearchConfiguration"></a>

```python
def put_vector_search_configuration(
  value: typing.Union[IResolvable, typing.List[NeptunegraphGraphVectorSearchConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.putVectorSearchConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>]]

---

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_graph_name` <a name="reset_graph_name" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetGraphName"></a>

```python
def reset_graph_name() -> None
```

##### `reset_graph_name_prefix` <a name="reset_graph_name_prefix" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetGraphNamePrefix"></a>

```python
def reset_graph_name_prefix() -> None
```

##### `reset_kms_key_identifier` <a name="reset_kms_key_identifier" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetKmsKeyIdentifier"></a>

```python
def reset_kms_key_identifier() -> None
```

##### `reset_public_connectivity` <a name="reset_public_connectivity" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetPublicConnectivity"></a>

```python
def reset_public_connectivity() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_replica_count` <a name="reset_replica_count" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetReplicaCount"></a>

```python
def reset_replica_count() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vector_search_configuration` <a name="reset_vector_search_configuration" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.resetVectorSearchConfiguration"></a>

```python
def reset_vector_search_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NeptunegraphGraph resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraph.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraph.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraph.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraph.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NeptunegraphGraph resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NeptunegraphGraph to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NeptunegraphGraph that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NeptunegraphGraph to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference">NeptunegraphGraphTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfiguration">vector_search_configuration</a></code> | <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList">NeptunegraphGraphVectorSearchConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphNameInput">graph_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphNamePrefixInput">graph_name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifierInput">kms_key_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemoryInput">provisioned_memory_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivityInput">public_connectivity_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.replicaCountInput">replica_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts">NeptunegraphGraphTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfigurationInput">vector_search_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphName">graph_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphNamePrefix">graph_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifier">kms_key_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemory">provisioned_memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivity">public_connectivity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.timeouts"></a>

```python
timeouts: NeptunegraphGraphTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference">NeptunegraphGraphTimeoutsOutputReference</a>

---

##### `vector_search_configuration`<sup>Required</sup> <a name="vector_search_configuration" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfiguration"></a>

```python
vector_search_configuration: NeptunegraphGraphVectorSearchConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList">NeptunegraphGraphVectorSearchConfigurationList</a>

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.deletionProtectionInput"></a>

```python
deletion_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `graph_name_input`<sup>Optional</sup> <a name="graph_name_input" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphNameInput"></a>

```python
graph_name_input: str
```

- *Type:* str

---

##### `graph_name_prefix_input`<sup>Optional</sup> <a name="graph_name_prefix_input" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphNamePrefixInput"></a>

```python
graph_name_prefix_input: str
```

- *Type:* str

---

##### `kms_key_identifier_input`<sup>Optional</sup> <a name="kms_key_identifier_input" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifierInput"></a>

```python
kms_key_identifier_input: str
```

- *Type:* str

---

##### `provisioned_memory_input`<sup>Optional</sup> <a name="provisioned_memory_input" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemoryInput"></a>

```python
provisioned_memory_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_connectivity_input`<sup>Optional</sup> <a name="public_connectivity_input" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivityInput"></a>

```python
public_connectivity_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `replica_count_input`<sup>Optional</sup> <a name="replica_count_input" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.replicaCountInput"></a>

```python
replica_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NeptunegraphGraphTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts">NeptunegraphGraphTimeouts</a>]

---

##### `vector_search_configuration_input`<sup>Optional</sup> <a name="vector_search_configuration_input" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfigurationInput"></a>

```python
vector_search_configuration_input: typing.Union[IResolvable, typing.List[NeptunegraphGraphVectorSearchConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>]]

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `graph_name`<sup>Required</sup> <a name="graph_name" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphName"></a>

```python
graph_name: str
```

- *Type:* str

---

##### `graph_name_prefix`<sup>Required</sup> <a name="graph_name_prefix" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.graphNamePrefix"></a>

```python
graph_name_prefix: str
```

- *Type:* str

---

##### `kms_key_identifier`<sup>Required</sup> <a name="kms_key_identifier" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifier"></a>

```python
kms_key_identifier: str
```

- *Type:* str

---

##### `provisioned_memory`<sup>Required</sup> <a name="provisioned_memory" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemory"></a>

```python
provisioned_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_connectivity`<sup>Required</sup> <a name="public_connectivity" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivity"></a>

```python
public_connectivity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `replica_count`<sup>Required</sup> <a name="replica_count" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.replicaCount"></a>

```python
replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraph.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NeptunegraphGraphConfig <a name="NeptunegraphGraphConfig" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraphConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  provisioned_memory: typing.Union[int, float],
  deletion_protection: typing.Union[bool, IResolvable] = None,
  graph_name: str = None,
  graph_name_prefix: str = None,
  kms_key_identifier: str = None,
  public_connectivity: typing.Union[bool, IResolvable] = None,
  region: str = None,
  replica_count: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: NeptunegraphGraphTimeouts = None,
  vector_search_configuration: typing.Union[IResolvable, typing.List[NeptunegraphGraphVectorSearchConfiguration]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.provisionedMemory">provisioned_memory</a></code> | <code>typing.Union[int, float]</code> | The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A value that indicates whether the graph has deletion protection enabled. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.graphName">graph_name</a></code> | <code>str</code> | The graph name. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.graphNamePrefix">graph_name_prefix</a></code> | <code>str</code> | Allows user to specify name prefix and have remainder of name automatically generated. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.kmsKeyIdentifier">kms_key_identifier</a></code> | <code>str</code> | Specifies a KMS key to use to encrypt data in the new graph. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.publicConnectivity">public_connectivity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether or not the graph can be reachable over the internet. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | The number of replicas in other AZs.  Value must be between 0 and 2. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#tags NeptunegraphGraph#tags}. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts">NeptunegraphGraphTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.vectorSearchConfiguration">vector_search_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>]]</code> | vector_search_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `provisioned_memory`<sup>Required</sup> <a name="provisioned_memory" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.provisionedMemory"></a>

```python
provisioned_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#provisioned_memory NeptunegraphGraph#provisioned_memory}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A value that indicates whether the graph has deletion protection enabled.

The graph can't be deleted when deletion protection is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#deletion_protection NeptunegraphGraph#deletion_protection}

---

##### `graph_name`<sup>Optional</sup> <a name="graph_name" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.graphName"></a>

```python
graph_name: str
```

- *Type:* str

The graph name.

For example: my-graph-1.
The name must contain from 1 to 63 letters, numbers, or hyphens,
and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens.
If you don't specify a graph name, a unique graph name is generated for you using the prefix graph-for,
followed by a combination of Stack Name and a UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#graph_name NeptunegraphGraph#graph_name}

---

##### `graph_name_prefix`<sup>Optional</sup> <a name="graph_name_prefix" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.graphNamePrefix"></a>

```python
graph_name_prefix: str
```

- *Type:* str

Allows user to specify name prefix and have remainder of name automatically generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#graph_name_prefix NeptunegraphGraph#graph_name_prefix}

---

##### `kms_key_identifier`<sup>Optional</sup> <a name="kms_key_identifier" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.kmsKeyIdentifier"></a>

```python
kms_key_identifier: str
```

- *Type:* str

Specifies a KMS key to use to encrypt data in the new graph.

Value must be ARN of KMS Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#kms_key_identifier NeptunegraphGraph#kms_key_identifier}

---

##### `public_connectivity`<sup>Optional</sup> <a name="public_connectivity" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.publicConnectivity"></a>

```python
public_connectivity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether or not the graph can be reachable over the internet.

All access to graphs is IAM authenticated.
When the graph is publicly available, its domain name system (DNS) endpoint resolves to
the public IP address from the internet. When the graph isn't publicly available, you need
to create a PrivateGraphEndpoint in a given VPC to ensure the DNS name resolves to a private
IP address that is reachable from the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#public_connectivity NeptunegraphGraph#public_connectivity}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#region NeptunegraphGraph#region}

---

##### `replica_count`<sup>Optional</sup> <a name="replica_count" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.replicaCount"></a>

```python
replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of replicas in other AZs.  Value must be between 0 and 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#replica_count NeptunegraphGraph#replica_count}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#tags NeptunegraphGraph#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.timeouts"></a>

```python
timeouts: NeptunegraphGraphTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts">NeptunegraphGraphTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#timeouts NeptunegraphGraph#timeouts}

---

##### `vector_search_configuration`<sup>Optional</sup> <a name="vector_search_configuration" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphConfig.property.vectorSearchConfiguration"></a>

```python
vector_search_configuration: typing.Union[IResolvable, typing.List[NeptunegraphGraphVectorSearchConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>]]

vector_search_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#vector_search_configuration NeptunegraphGraph#vector_search_configuration}

---

### NeptunegraphGraphTimeouts <a name="NeptunegraphGraphTimeouts" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraphTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#create NeptunegraphGraph#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#delete NeptunegraphGraph#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#update NeptunegraphGraph#update}

---

### NeptunegraphGraphVectorSearchConfiguration <a name="NeptunegraphGraphVectorSearchConfiguration" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration(
  vector_search_dimension: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration.property.vectorSearchDimension">vector_search_dimension</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of dimensions for vector embeddings.  Value must be between 1 and 65,535. |

---

##### `vector_search_dimension`<sup>Optional</sup> <a name="vector_search_dimension" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration.property.vectorSearchDimension"></a>

```python
vector_search_dimension: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of dimensions for vector embeddings.  Value must be between 1 and 65,535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/neptunegraph_graph#vector_search_dimension NeptunegraphGraph#vector_search_dimension}

---

## Classes <a name="Classes" id="Classes"></a>

### NeptunegraphGraphTimeoutsOutputReference <a name="NeptunegraphGraphTimeoutsOutputReference" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts">NeptunegraphGraphTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NeptunegraphGraphTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphTimeouts">NeptunegraphGraphTimeouts</a>]

---


### NeptunegraphGraphVectorSearchConfigurationList <a name="NeptunegraphGraphVectorSearchConfigurationList" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NeptunegraphGraphVectorSearchConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NeptunegraphGraphVectorSearchConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>]]

---


### NeptunegraphGraphVectorSearchConfigurationOutputReference <a name="NeptunegraphGraphVectorSearchConfigurationOutputReference" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resetVectorSearchDimension">reset_vector_search_dimension</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_vector_search_dimension` <a name="reset_vector_search_dimension" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resetVectorSearchDimension"></a>

```python
def reset_vector_search_dimension() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimensionInput">vector_search_dimension_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimension">vector_search_dimension</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vector_search_dimension_input`<sup>Optional</sup> <a name="vector_search_dimension_input" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimensionInput"></a>

```python
vector_search_dimension_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vector_search_dimension`<sup>Required</sup> <a name="vector_search_dimension" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimension"></a>

```python
vector_search_dimension: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NeptunegraphGraphVectorSearchConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>]

---



