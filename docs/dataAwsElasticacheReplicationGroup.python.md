# `dataAwsElasticacheReplicationGroup` Submodule <a name="`dataAwsElasticacheReplicationGroup` Submodule" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsElasticacheReplicationGroup <a name="DataAwsElasticacheReplicationGroup" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group aws_elasticache_replication_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticache_replication_group

dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  replication_group_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.replicationGroupId">replication_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group#replication_group_id DataAwsElasticacheReplicationGroup#replication_group_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group#id DataAwsElasticacheReplicationGroup#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `replication_group_id`<sup>Required</sup> <a name="replication_group_id" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.replicationGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group#replication_group_id DataAwsElasticacheReplicationGroup#replication_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group#id DataAwsElasticacheReplicationGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticache_replication_group

dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticache_replication_group

dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticache_replication_group

dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.authTokenEnabled">auth_token_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.automaticFailoverEnabled">automatic_failover_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.configurationEndpointAddress">configuration_endpoint_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.logDeliveryConfiguration">log_delivery_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList">DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.memberClusters">member_clusters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.multiAzEnabled">multi_az_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.numberCacheClusters">number_cache_clusters</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.numCacheClusters">num_cache_clusters</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.numNodeGroups">num_node_groups</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.primaryEndpointAddress">primary_endpoint_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.readerEndpointAddress">reader_endpoint_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicasPerNodeGroup">replicas_per_node_group</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicationGroupDescription">replication_group_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.snapshotRetentionLimit">snapshot_retention_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.snapshotWindow">snapshot_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicationGroupIdInput">replication_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicationGroupId">replication_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auth_token_enabled`<sup>Required</sup> <a name="auth_token_enabled" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.authTokenEnabled"></a>

```python
auth_token_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `automatic_failover_enabled`<sup>Required</sup> <a name="automatic_failover_enabled" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.automaticFailoverEnabled"></a>

```python
automatic_failover_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `configuration_endpoint_address`<sup>Required</sup> <a name="configuration_endpoint_address" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.configurationEndpointAddress"></a>

```python
configuration_endpoint_address: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `log_delivery_configuration`<sup>Required</sup> <a name="log_delivery_configuration" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.logDeliveryConfiguration"></a>

```python
log_delivery_configuration: DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList">DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList</a>

---

##### `member_clusters`<sup>Required</sup> <a name="member_clusters" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.memberClusters"></a>

```python
member_clusters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `multi_az_enabled`<sup>Required</sup> <a name="multi_az_enabled" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.multiAzEnabled"></a>

```python
multi_az_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `number_cache_clusters`<sup>Required</sup> <a name="number_cache_clusters" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.numberCacheClusters"></a>

```python
number_cache_clusters: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_cache_clusters`<sup>Required</sup> <a name="num_cache_clusters" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.numCacheClusters"></a>

```python
num_cache_clusters: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_node_groups`<sup>Required</sup> <a name="num_node_groups" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.numNodeGroups"></a>

```python
num_node_groups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `primary_endpoint_address`<sup>Required</sup> <a name="primary_endpoint_address" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.primaryEndpointAddress"></a>

```python
primary_endpoint_address: str
```

- *Type:* str

---

##### `reader_endpoint_address`<sup>Required</sup> <a name="reader_endpoint_address" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.readerEndpointAddress"></a>

```python
reader_endpoint_address: str
```

- *Type:* str

---

##### `replicas_per_node_group`<sup>Required</sup> <a name="replicas_per_node_group" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicasPerNodeGroup"></a>

```python
replicas_per_node_group: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replication_group_description`<sup>Required</sup> <a name="replication_group_description" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicationGroupDescription"></a>

```python
replication_group_description: str
```

- *Type:* str

---

##### `snapshot_retention_limit`<sup>Required</sup> <a name="snapshot_retention_limit" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.snapshotRetentionLimit"></a>

```python
snapshot_retention_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_window`<sup>Required</sup> <a name="snapshot_window" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.snapshotWindow"></a>

```python
snapshot_window: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `replication_group_id_input`<sup>Optional</sup> <a name="replication_group_id_input" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicationGroupIdInput"></a>

```python
replication_group_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `replication_group_id`<sup>Required</sup> <a name="replication_group_id" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicationGroupId"></a>

```python
replication_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsElasticacheReplicationGroupConfig <a name="DataAwsElasticacheReplicationGroupConfig" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticache_replication_group

dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  replication_group_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.replicationGroupId">replication_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group#replication_group_id DataAwsElasticacheReplicationGroup#replication_group_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group#id DataAwsElasticacheReplicationGroup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `replication_group_id`<sup>Required</sup> <a name="replication_group_id" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.replicationGroupId"></a>

```python
replication_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group#replication_group_id DataAwsElasticacheReplicationGroup#replication_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group#id DataAwsElasticacheReplicationGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsElasticacheReplicationGroupLogDeliveryConfiguration <a name="DataAwsElasticacheReplicationGroupLogDeliveryConfiguration" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticache_replication_group

dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList <a name="DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticache_replication_group

dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference <a name="DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elasticache_replication_group

dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logFormat">log_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logType">log_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfiguration">DataAwsElasticacheReplicationGroupLogDeliveryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `log_format`<sup>Required</sup> <a name="log_format" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logFormat"></a>

```python
log_format: str
```

- *Type:* str

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logType"></a>

```python
log_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsElasticacheReplicationGroupLogDeliveryConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfiguration">DataAwsElasticacheReplicationGroupLogDeliveryConfiguration</a>

---



