# `neptuneClusterEndpoint` Submodule <a name="`neptuneClusterEndpoint` Submodule" id="@cdktf/provider-aws.neptuneClusterEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptuneClusterEndpoint <a name="NeptuneClusterEndpoint" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint aws_neptune_cluster_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import neptune_cluster_endpoint

neptuneClusterEndpoint.NeptuneClusterEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_endpoint_identifier: str,
  cluster_identifier: str,
  endpoint_type: str,
  excluded_members: typing.List[str] = None,
  id: str = None,
  static_members: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.clusterEndpointIdentifier">cluster_endpoint_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#cluster_endpoint_identifier NeptuneClusterEndpoint#cluster_endpoint_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#cluster_identifier NeptuneClusterEndpoint#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#endpoint_type NeptuneClusterEndpoint#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.excludedMembers">excluded_members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#excluded_members NeptuneClusterEndpoint#excluded_members}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#id NeptuneClusterEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.staticMembers">static_members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#static_members NeptuneClusterEndpoint#static_members}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#tags NeptuneClusterEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#tags_all NeptuneClusterEndpoint#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_endpoint_identifier`<sup>Required</sup> <a name="cluster_endpoint_identifier" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.clusterEndpointIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#cluster_endpoint_identifier NeptuneClusterEndpoint#cluster_endpoint_identifier}.

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.clusterIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#cluster_identifier NeptuneClusterEndpoint#cluster_identifier}.

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.endpointType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#endpoint_type NeptuneClusterEndpoint#endpoint_type}.

---

##### `excluded_members`<sup>Optional</sup> <a name="excluded_members" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.excludedMembers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#excluded_members NeptuneClusterEndpoint#excluded_members}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#id NeptuneClusterEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `static_members`<sup>Optional</sup> <a name="static_members" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.staticMembers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#static_members NeptuneClusterEndpoint#static_members}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#tags NeptuneClusterEndpoint#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#tags_all NeptuneClusterEndpoint#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetExcludedMembers">reset_excluded_members</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetStaticMembers">reset_static_members</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_excluded_members` <a name="reset_excluded_members" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetExcludedMembers"></a>

```python
def reset_excluded_members() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_static_members` <a name="reset_static_members" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetStaticMembers"></a>

```python
def reset_static_members() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import neptune_cluster_endpoint

neptuneClusterEndpoint.NeptuneClusterEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import neptune_cluster_endpoint

neptuneClusterEndpoint.NeptuneClusterEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import neptune_cluster_endpoint

neptuneClusterEndpoint.NeptuneClusterEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.clusterEndpointIdentifierInput">cluster_endpoint_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.clusterIdentifierInput">cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.endpointTypeInput">endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.excludedMembersInput">excluded_members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.staticMembersInput">static_members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.clusterEndpointIdentifier">cluster_endpoint_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.excludedMembers">excluded_members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.staticMembers">static_members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `cluster_endpoint_identifier_input`<sup>Optional</sup> <a name="cluster_endpoint_identifier_input" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.clusterEndpointIdentifierInput"></a>

```python
cluster_endpoint_identifier_input: str
```

- *Type:* str

---

##### `cluster_identifier_input`<sup>Optional</sup> <a name="cluster_identifier_input" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.clusterIdentifierInput"></a>

```python
cluster_identifier_input: str
```

- *Type:* str

---

##### `endpoint_type_input`<sup>Optional</sup> <a name="endpoint_type_input" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.endpointTypeInput"></a>

```python
endpoint_type_input: str
```

- *Type:* str

---

##### `excluded_members_input`<sup>Optional</sup> <a name="excluded_members_input" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.excludedMembersInput"></a>

```python
excluded_members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `static_members_input`<sup>Optional</sup> <a name="static_members_input" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.staticMembersInput"></a>

```python
static_members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `cluster_endpoint_identifier`<sup>Required</sup> <a name="cluster_endpoint_identifier" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.clusterEndpointIdentifier"></a>

```python
cluster_endpoint_identifier: str
```

- *Type:* str

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `excluded_members`<sup>Required</sup> <a name="excluded_members" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.excludedMembers"></a>

```python
excluded_members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `static_members`<sup>Required</sup> <a name="static_members" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.staticMembers"></a>

```python
static_members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NeptuneClusterEndpointConfig <a name="NeptuneClusterEndpointConfig" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import neptune_cluster_endpoint

neptuneClusterEndpoint.NeptuneClusterEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_endpoint_identifier: str,
  cluster_identifier: str,
  endpoint_type: str,
  excluded_members: typing.List[str] = None,
  id: str = None,
  static_members: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.clusterEndpointIdentifier">cluster_endpoint_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#cluster_endpoint_identifier NeptuneClusterEndpoint#cluster_endpoint_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#cluster_identifier NeptuneClusterEndpoint#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#endpoint_type NeptuneClusterEndpoint#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.excludedMembers">excluded_members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#excluded_members NeptuneClusterEndpoint#excluded_members}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#id NeptuneClusterEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.staticMembers">static_members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#static_members NeptuneClusterEndpoint#static_members}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#tags NeptuneClusterEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#tags_all NeptuneClusterEndpoint#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_endpoint_identifier`<sup>Required</sup> <a name="cluster_endpoint_identifier" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.clusterEndpointIdentifier"></a>

```python
cluster_endpoint_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#cluster_endpoint_identifier NeptuneClusterEndpoint#cluster_endpoint_identifier}.

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#cluster_identifier NeptuneClusterEndpoint#cluster_identifier}.

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#endpoint_type NeptuneClusterEndpoint#endpoint_type}.

---

##### `excluded_members`<sup>Optional</sup> <a name="excluded_members" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.excludedMembers"></a>

```python
excluded_members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#excluded_members NeptuneClusterEndpoint#excluded_members}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#id NeptuneClusterEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `static_members`<sup>Optional</sup> <a name="static_members" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.staticMembers"></a>

```python
static_members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#static_members NeptuneClusterEndpoint#static_members}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#tags NeptuneClusterEndpoint#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.neptuneClusterEndpoint.NeptuneClusterEndpointConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint#tags_all NeptuneClusterEndpoint#tags_all}.

---



