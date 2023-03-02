# `dataAwsCloudhsmV2Cluster` Submodule <a name="`dataAwsCloudhsmV2Cluster` Submodule" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudhsmV2Cluster <a name="DataAwsCloudhsmV2Cluster" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster aws_cloudhsm_v2_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudhsm_v2_cluster

dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  cluster_state: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_id DataAwsCloudhsmV2Cluster#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.clusterState">cluster_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_state DataAwsCloudhsmV2Cluster#cluster_state}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#id DataAwsCloudhsmV2Cluster#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_id DataAwsCloudhsmV2Cluster#cluster_id}.

---

##### `cluster_state`<sup>Optional</sup> <a name="cluster_state" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.clusterState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_state DataAwsCloudhsmV2Cluster#cluster_state}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#id DataAwsCloudhsmV2Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetClusterState">reset_cluster_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_cluster_state` <a name="reset_cluster_state" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetClusterState"></a>

```python
def reset_cluster_state() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudhsm_v2_cluster

dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudhsm_v2_cluster

dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudhsm_v2_cluster

dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterCertificates">cluster_certificates</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList">DataAwsCloudhsmV2ClusterClusterCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterStateInput">cluster_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterState">cluster_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cluster_certificates`<sup>Required</sup> <a name="cluster_certificates" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterCertificates"></a>

```python
cluster_certificates: DataAwsCloudhsmV2ClusterClusterCertificatesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList">DataAwsCloudhsmV2ClusterClusterCertificatesList</a>

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `cluster_state_input`<sup>Optional</sup> <a name="cluster_state_input" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterStateInput"></a>

```python
cluster_state_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `cluster_state`<sup>Required</sup> <a name="cluster_state" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterState"></a>

```python
cluster_state: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudhsmV2ClusterClusterCertificates <a name="DataAwsCloudhsmV2ClusterClusterCertificates" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificates.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudhsm_v2_cluster

dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificates()
```


### DataAwsCloudhsmV2ClusterConfig <a name="DataAwsCloudhsmV2ClusterConfig" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudhsm_v2_cluster

dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  cluster_state: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_id DataAwsCloudhsmV2Cluster#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.clusterState">cluster_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_state DataAwsCloudhsmV2Cluster#cluster_state}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#id DataAwsCloudhsmV2Cluster#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_id DataAwsCloudhsmV2Cluster#cluster_id}.

---

##### `cluster_state`<sup>Optional</sup> <a name="cluster_state" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.clusterState"></a>

```python
cluster_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_state DataAwsCloudhsmV2Cluster#cluster_state}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#id DataAwsCloudhsmV2Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsCloudhsmV2ClusterClusterCertificatesList <a name="DataAwsCloudhsmV2ClusterClusterCertificatesList" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudhsm_v2_cluster

dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference <a name="DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudhsm_v2_cluster

dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.awsHardwareCertificate">aws_hardware_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCertificate">cluster_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCsr">cluster_csr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.hsmCertificate">hsm_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.manufacturerHardwareCertificate">manufacturer_hardware_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificates">DataAwsCloudhsmV2ClusterClusterCertificates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_hardware_certificate`<sup>Required</sup> <a name="aws_hardware_certificate" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.awsHardwareCertificate"></a>

```python
aws_hardware_certificate: str
```

- *Type:* str

---

##### `cluster_certificate`<sup>Required</sup> <a name="cluster_certificate" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCertificate"></a>

```python
cluster_certificate: str
```

- *Type:* str

---

##### `cluster_csr`<sup>Required</sup> <a name="cluster_csr" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCsr"></a>

```python
cluster_csr: str
```

- *Type:* str

---

##### `hsm_certificate`<sup>Required</sup> <a name="hsm_certificate" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.hsmCertificate"></a>

```python
hsm_certificate: str
```

- *Type:* str

---

##### `manufacturer_hardware_certificate`<sup>Required</sup> <a name="manufacturer_hardware_certificate" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.manufacturerHardwareCertificate"></a>

```python
manufacturer_hardware_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudhsmV2ClusterClusterCertificates
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificates">DataAwsCloudhsmV2ClusterClusterCertificates</a>

---



