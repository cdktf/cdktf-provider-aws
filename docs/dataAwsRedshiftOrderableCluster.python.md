# `dataAwsRedshiftOrderableCluster` Submodule <a name="`dataAwsRedshiftOrderableCluster` Submodule" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRedshiftOrderableCluster <a name="DataAwsRedshiftOrderableCluster" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster aws_redshift_orderable_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshift_orderable_cluster

dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_type: str = None,
  cluster_version: str = None,
  id: str = None,
  node_type: str = None,
  preferred_node_types: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.clusterType">cluster_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#cluster_type DataAwsRedshiftOrderableCluster#cluster_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.clusterVersion">cluster_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#cluster_version DataAwsRedshiftOrderableCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#id DataAwsRedshiftOrderableCluster#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.nodeType">node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#node_type DataAwsRedshiftOrderableCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.preferredNodeTypes">preferred_node_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#preferred_node_types DataAwsRedshiftOrderableCluster#preferred_node_types}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_type`<sup>Optional</sup> <a name="cluster_type" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.clusterType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#cluster_type DataAwsRedshiftOrderableCluster#cluster_type}.

---

##### `cluster_version`<sup>Optional</sup> <a name="cluster_version" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.clusterVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#cluster_version DataAwsRedshiftOrderableCluster#cluster_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#id DataAwsRedshiftOrderableCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `node_type`<sup>Optional</sup> <a name="node_type" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.nodeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#node_type DataAwsRedshiftOrderableCluster#node_type}.

---

##### `preferred_node_types`<sup>Optional</sup> <a name="preferred_node_types" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.preferredNodeTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#preferred_node_types DataAwsRedshiftOrderableCluster#preferred_node_types}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetClusterType">reset_cluster_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetClusterVersion">reset_cluster_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetNodeType">reset_node_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetPreferredNodeTypes">reset_preferred_node_types</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_cluster_type` <a name="reset_cluster_type" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetClusterType"></a>

```python
def reset_cluster_type() -> None
```

##### `reset_cluster_version` <a name="reset_cluster_version" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetClusterVersion"></a>

```python
def reset_cluster_version() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_node_type` <a name="reset_node_type" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetNodeType"></a>

```python
def reset_node_type() -> None
```

##### `reset_preferred_node_types` <a name="reset_preferred_node_types" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetPreferredNodeTypes"></a>

```python
def reset_preferred_node_types() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshift_orderable_cluster

dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshift_orderable_cluster

dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshift_orderable_cluster

dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterTypeInput">cluster_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterVersionInput">cluster_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.nodeTypeInput">node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.preferredNodeTypesInput">preferred_node_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterType">cluster_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterVersion">cluster_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.preferredNodeTypes">preferred_node_types</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_type_input`<sup>Optional</sup> <a name="cluster_type_input" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterTypeInput"></a>

```python
cluster_type_input: str
```

- *Type:* str

---

##### `cluster_version_input`<sup>Optional</sup> <a name="cluster_version_input" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterVersionInput"></a>

```python
cluster_version_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `node_type_input`<sup>Optional</sup> <a name="node_type_input" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.nodeTypeInput"></a>

```python
node_type_input: str
```

- *Type:* str

---

##### `preferred_node_types_input`<sup>Optional</sup> <a name="preferred_node_types_input" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.preferredNodeTypesInput"></a>

```python
preferred_node_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_type`<sup>Required</sup> <a name="cluster_type" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterType"></a>

```python
cluster_type: str
```

- *Type:* str

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `preferred_node_types`<sup>Required</sup> <a name="preferred_node_types" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.preferredNodeTypes"></a>

```python
preferred_node_types: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRedshiftOrderableClusterConfig <a name="DataAwsRedshiftOrderableClusterConfig" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshift_orderable_cluster

dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_type: str = None,
  cluster_version: str = None,
  id: str = None,
  node_type: str = None,
  preferred_node_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.clusterType">cluster_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#cluster_type DataAwsRedshiftOrderableCluster#cluster_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.clusterVersion">cluster_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#cluster_version DataAwsRedshiftOrderableCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#id DataAwsRedshiftOrderableCluster#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.nodeType">node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#node_type DataAwsRedshiftOrderableCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.preferredNodeTypes">preferred_node_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#preferred_node_types DataAwsRedshiftOrderableCluster#preferred_node_types}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_type`<sup>Optional</sup> <a name="cluster_type" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.clusterType"></a>

```python
cluster_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#cluster_type DataAwsRedshiftOrderableCluster#cluster_type}.

---

##### `cluster_version`<sup>Optional</sup> <a name="cluster_version" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#cluster_version DataAwsRedshiftOrderableCluster#cluster_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#id DataAwsRedshiftOrderableCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `node_type`<sup>Optional</sup> <a name="node_type" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#node_type DataAwsRedshiftOrderableCluster#node_type}.

---

##### `preferred_node_types`<sup>Optional</sup> <a name="preferred_node_types" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.preferredNodeTypes"></a>

```python
preferred_node_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#preferred_node_types DataAwsRedshiftOrderableCluster#preferred_node_types}.

---



