# `rdsClusterEndpoint` Submodule <a name="`rdsClusterEndpoint` Submodule" id="@cdktf/provider-aws.rdsClusterEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsClusterEndpoint <a name="RdsClusterEndpoint" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint aws_rds_cluster_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_cluster_endpoint

rdsClusterEndpoint.RdsClusterEndpoint(
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
  custom_endpoint_type: str,
  excluded_members: typing.List[str] = None,
  id: str = None,
  static_members: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.clusterEndpointIdentifier">cluster_endpoint_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#cluster_endpoint_identifier RdsClusterEndpoint#cluster_endpoint_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#cluster_identifier RdsClusterEndpoint#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.customEndpointType">custom_endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#custom_endpoint_type RdsClusterEndpoint#custom_endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.excludedMembers">excluded_members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#excluded_members RdsClusterEndpoint#excluded_members}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#id RdsClusterEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.staticMembers">static_members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#static_members RdsClusterEndpoint#static_members}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#tags RdsClusterEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#tags_all RdsClusterEndpoint#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_endpoint_identifier`<sup>Required</sup> <a name="cluster_endpoint_identifier" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.clusterEndpointIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#cluster_endpoint_identifier RdsClusterEndpoint#cluster_endpoint_identifier}.

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.clusterIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#cluster_identifier RdsClusterEndpoint#cluster_identifier}.

---

##### `custom_endpoint_type`<sup>Required</sup> <a name="custom_endpoint_type" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.customEndpointType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#custom_endpoint_type RdsClusterEndpoint#custom_endpoint_type}.

---

##### `excluded_members`<sup>Optional</sup> <a name="excluded_members" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.excludedMembers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#excluded_members RdsClusterEndpoint#excluded_members}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#id RdsClusterEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `static_members`<sup>Optional</sup> <a name="static_members" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.staticMembers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#static_members RdsClusterEndpoint#static_members}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#tags RdsClusterEndpoint#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#tags_all RdsClusterEndpoint#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.resetExcludedMembers">reset_excluded_members</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.resetStaticMembers">reset_static_members</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_excluded_members` <a name="reset_excluded_members" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.resetExcludedMembers"></a>

```python
def reset_excluded_members() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_static_members` <a name="reset_static_members" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.resetStaticMembers"></a>

```python
def reset_static_members() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import rds_cluster_endpoint

rdsClusterEndpoint.RdsClusterEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import rds_cluster_endpoint

rdsClusterEndpoint.RdsClusterEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import rds_cluster_endpoint

rdsClusterEndpoint.RdsClusterEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.clusterEndpointIdentifierInput">cluster_endpoint_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.clusterIdentifierInput">cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.customEndpointTypeInput">custom_endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.excludedMembersInput">excluded_members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.staticMembersInput">static_members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.clusterEndpointIdentifier">cluster_endpoint_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.customEndpointType">custom_endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.excludedMembers">excluded_members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.staticMembers">static_members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `cluster_endpoint_identifier_input`<sup>Optional</sup> <a name="cluster_endpoint_identifier_input" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.clusterEndpointIdentifierInput"></a>

```python
cluster_endpoint_identifier_input: str
```

- *Type:* str

---

##### `cluster_identifier_input`<sup>Optional</sup> <a name="cluster_identifier_input" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.clusterIdentifierInput"></a>

```python
cluster_identifier_input: str
```

- *Type:* str

---

##### `custom_endpoint_type_input`<sup>Optional</sup> <a name="custom_endpoint_type_input" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.customEndpointTypeInput"></a>

```python
custom_endpoint_type_input: str
```

- *Type:* str

---

##### `excluded_members_input`<sup>Optional</sup> <a name="excluded_members_input" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.excludedMembersInput"></a>

```python
excluded_members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `static_members_input`<sup>Optional</sup> <a name="static_members_input" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.staticMembersInput"></a>

```python
static_members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `cluster_endpoint_identifier`<sup>Required</sup> <a name="cluster_endpoint_identifier" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.clusterEndpointIdentifier"></a>

```python
cluster_endpoint_identifier: str
```

- *Type:* str

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

---

##### `custom_endpoint_type`<sup>Required</sup> <a name="custom_endpoint_type" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.customEndpointType"></a>

```python
custom_endpoint_type: str
```

- *Type:* str

---

##### `excluded_members`<sup>Required</sup> <a name="excluded_members" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.excludedMembers"></a>

```python
excluded_members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `static_members`<sup>Required</sup> <a name="static_members" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.staticMembers"></a>

```python
static_members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RdsClusterEndpointConfig <a name="RdsClusterEndpointConfig" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_cluster_endpoint

rdsClusterEndpoint.RdsClusterEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_endpoint_identifier: str,
  cluster_identifier: str,
  custom_endpoint_type: str,
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
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.clusterEndpointIdentifier">cluster_endpoint_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#cluster_endpoint_identifier RdsClusterEndpoint#cluster_endpoint_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#cluster_identifier RdsClusterEndpoint#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.customEndpointType">custom_endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#custom_endpoint_type RdsClusterEndpoint#custom_endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.excludedMembers">excluded_members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#excluded_members RdsClusterEndpoint#excluded_members}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#id RdsClusterEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.staticMembers">static_members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#static_members RdsClusterEndpoint#static_members}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#tags RdsClusterEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#tags_all RdsClusterEndpoint#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_endpoint_identifier`<sup>Required</sup> <a name="cluster_endpoint_identifier" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.clusterEndpointIdentifier"></a>

```python
cluster_endpoint_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#cluster_endpoint_identifier RdsClusterEndpoint#cluster_endpoint_identifier}.

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#cluster_identifier RdsClusterEndpoint#cluster_identifier}.

---

##### `custom_endpoint_type`<sup>Required</sup> <a name="custom_endpoint_type" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.customEndpointType"></a>

```python
custom_endpoint_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#custom_endpoint_type RdsClusterEndpoint#custom_endpoint_type}.

---

##### `excluded_members`<sup>Optional</sup> <a name="excluded_members" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.excludedMembers"></a>

```python
excluded_members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#excluded_members RdsClusterEndpoint#excluded_members}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#id RdsClusterEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `static_members`<sup>Optional</sup> <a name="static_members" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.staticMembers"></a>

```python
static_members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#static_members RdsClusterEndpoint#static_members}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#tags RdsClusterEndpoint#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.rdsClusterEndpoint.RdsClusterEndpointConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint#tags_all RdsClusterEndpoint#tags_all}.

---



