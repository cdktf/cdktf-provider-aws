# `dataAwsKendraIndex` Submodule <a name="`dataAwsKendraIndex` Submodule" id="@cdktf/provider-aws.dataAwsKendraIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsKendraIndex <a name="DataAwsKendraIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/kendra_index aws_kendra_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndex(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_index#id DataAwsKendraIndex#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_index#tags DataAwsKendraIndex#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_index#id DataAwsKendraIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_index#tags DataAwsKendraIndex#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndex.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndex.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndex.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.capacityUnits">capacity_units</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList">DataAwsKendraIndexCapacityUnitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.documentMetadataConfigurationUpdates">document_metadata_configuration_updates</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.edition">edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.indexStatistics">index_statistics</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList">DataAwsKendraIndexIndexStatisticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.serverSideEncryptionConfiguration">server_side_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList">DataAwsKendraIndexServerSideEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.userContextPolicy">user_context_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.userGroupResolutionConfiguration">user_group_resolution_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList">DataAwsKendraIndexUserGroupResolutionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.userTokenConfigurations">user_token_configurations</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList">DataAwsKendraIndexUserTokenConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `capacity_units`<sup>Required</sup> <a name="capacity_units" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.capacityUnits"></a>

```python
capacity_units: DataAwsKendraIndexCapacityUnitsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList">DataAwsKendraIndexCapacityUnitsList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `document_metadata_configuration_updates`<sup>Required</sup> <a name="document_metadata_configuration_updates" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.documentMetadataConfigurationUpdates"></a>

```python
document_metadata_configuration_updates: DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList</a>

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.edition"></a>

```python
edition: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `index_statistics`<sup>Required</sup> <a name="index_statistics" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.indexStatistics"></a>

```python
index_statistics: DataAwsKendraIndexIndexStatisticsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList">DataAwsKendraIndexIndexStatisticsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `server_side_encryption_configuration`<sup>Required</sup> <a name="server_side_encryption_configuration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.serverSideEncryptionConfiguration"></a>

```python
server_side_encryption_configuration: DataAwsKendraIndexServerSideEncryptionConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList">DataAwsKendraIndexServerSideEncryptionConfigurationList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `user_context_policy`<sup>Required</sup> <a name="user_context_policy" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.userContextPolicy"></a>

```python
user_context_policy: str
```

- *Type:* str

---

##### `user_group_resolution_configuration`<sup>Required</sup> <a name="user_group_resolution_configuration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.userGroupResolutionConfiguration"></a>

```python
user_group_resolution_configuration: DataAwsKendraIndexUserGroupResolutionConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList">DataAwsKendraIndexUserGroupResolutionConfigurationList</a>

---

##### `user_token_configurations`<sup>Required</sup> <a name="user_token_configurations" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.userTokenConfigurations"></a>

```python
user_token_configurations: DataAwsKendraIndexUserTokenConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList">DataAwsKendraIndexUserTokenConfigurationsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsKendraIndexCapacityUnits <a name="DataAwsKendraIndexCapacityUnits" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnits.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexCapacityUnits()
```


### DataAwsKendraIndexConfig <a name="DataAwsKendraIndexConfig" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_index#id DataAwsKendraIndex#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_index#tags DataAwsKendraIndex#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_index#id DataAwsKendraIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_index#tags DataAwsKendraIndex#tags}.

---

### DataAwsKendraIndexDocumentMetadataConfigurationUpdates <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdates" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdates.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdates()
```


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance()
```


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch()
```


### DataAwsKendraIndexIndexStatistics <a name="DataAwsKendraIndexIndexStatistics" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatistics.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexIndexStatistics()
```


### DataAwsKendraIndexIndexStatisticsFaqStatistics <a name="DataAwsKendraIndexIndexStatisticsFaqStatistics" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatistics.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatistics()
```


### DataAwsKendraIndexIndexStatisticsTextDocumentStatistics <a name="DataAwsKendraIndexIndexStatisticsTextDocumentStatistics" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatistics.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatistics()
```


### DataAwsKendraIndexServerSideEncryptionConfiguration <a name="DataAwsKendraIndexServerSideEncryptionConfiguration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfiguration()
```


### DataAwsKendraIndexUserGroupResolutionConfiguration <a name="DataAwsKendraIndexUserGroupResolutionConfiguration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfiguration()
```


### DataAwsKendraIndexUserTokenConfigurations <a name="DataAwsKendraIndexUserTokenConfigurations" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurations.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurations()
```


### DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration <a name="DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration()
```


### DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration <a name="DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsKendraIndexCapacityUnitsList <a name="DataAwsKendraIndexCapacityUnitsList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsKendraIndexCapacityUnitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsKendraIndexCapacityUnitsOutputReference <a name="DataAwsKendraIndexCapacityUnitsOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.queryCapacityUnits">query_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.storageCapacityUnits">storage_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnits">DataAwsKendraIndexCapacityUnits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_capacity_units`<sup>Required</sup> <a name="query_capacity_units" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.queryCapacityUnits"></a>

```python
query_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_capacity_units`<sup>Required</sup> <a name="storage_capacity_units" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.storageCapacityUnits"></a>

```python
storage_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsKendraIndexCapacityUnits
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnits">DataAwsKendraIndexCapacityUnits</a>

---


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.relevance">relevance</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.search">search</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdates">DataAwsKendraIndexDocumentMetadataConfigurationUpdates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `relevance`<sup>Required</sup> <a name="relevance" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.relevance"></a>

```python
relevance: DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList</a>

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.search"></a>

```python
search: DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsKendraIndexDocumentMetadataConfigurationUpdates
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdates">DataAwsKendraIndexDocumentMetadataConfigurationUpdates</a>

---


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.freshness">freshness</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.importance">importance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.rankOrder">rank_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.valuesImportanceMap">values_importance_map</a></code> | <code>cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `freshness`<sup>Required</sup> <a name="freshness" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.freshness"></a>

```python
freshness: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `importance`<sup>Required</sup> <a name="importance" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.importance"></a>

```python
importance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rank_order`<sup>Required</sup> <a name="rank_order" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.rankOrder"></a>

```python
rank_order: str
```

- *Type:* str

---

##### `values_importance_map`<sup>Required</sup> <a name="values_importance_map" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.valuesImportanceMap"></a>

```python
values_importance_map: NumberMap
```

- *Type:* cdktf.NumberMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance</a>

---


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.displayable">displayable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.facetable">facetable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.searchable">searchable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.sortable">sortable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `displayable`<sup>Required</sup> <a name="displayable" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.displayable"></a>

```python
displayable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `facetable`<sup>Required</sup> <a name="facetable" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.facetable"></a>

```python
facetable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `searchable`<sup>Required</sup> <a name="searchable" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.searchable"></a>

```python
searchable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `sortable`<sup>Required</sup> <a name="sortable" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.sortable"></a>

```python
sortable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch</a>

---


### DataAwsKendraIndexIndexStatisticsFaqStatisticsList <a name="DataAwsKendraIndexIndexStatisticsFaqStatisticsList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference <a name="DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.indexedQuestionAnswersCount">indexed_question_answers_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatistics">DataAwsKendraIndexIndexStatisticsFaqStatistics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `indexed_question_answers_count`<sup>Required</sup> <a name="indexed_question_answers_count" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.indexedQuestionAnswersCount"></a>

```python
indexed_question_answers_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsKendraIndexIndexStatisticsFaqStatistics
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatistics">DataAwsKendraIndexIndexStatisticsFaqStatistics</a>

---


### DataAwsKendraIndexIndexStatisticsList <a name="DataAwsKendraIndexIndexStatisticsList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsKendraIndexIndexStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsKendraIndexIndexStatisticsOutputReference <a name="DataAwsKendraIndexIndexStatisticsOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.faqStatistics">faq_statistics</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList">DataAwsKendraIndexIndexStatisticsFaqStatisticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.textDocumentStatistics">text_document_statistics</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList">DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatistics">DataAwsKendraIndexIndexStatistics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `faq_statistics`<sup>Required</sup> <a name="faq_statistics" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.faqStatistics"></a>

```python
faq_statistics: DataAwsKendraIndexIndexStatisticsFaqStatisticsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList">DataAwsKendraIndexIndexStatisticsFaqStatisticsList</a>

---

##### `text_document_statistics`<sup>Required</sup> <a name="text_document_statistics" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.textDocumentStatistics"></a>

```python
text_document_statistics: DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList">DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsKendraIndexIndexStatistics
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatistics">DataAwsKendraIndexIndexStatistics</a>

---


### DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList <a name="DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference <a name="DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextBytes">indexed_text_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextDocumentsCount">indexed_text_documents_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatistics">DataAwsKendraIndexIndexStatisticsTextDocumentStatistics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `indexed_text_bytes`<sup>Required</sup> <a name="indexed_text_bytes" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextBytes"></a>

```python
indexed_text_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `indexed_text_documents_count`<sup>Required</sup> <a name="indexed_text_documents_count" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextDocumentsCount"></a>

```python
indexed_text_documents_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsKendraIndexIndexStatisticsTextDocumentStatistics
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatistics">DataAwsKendraIndexIndexStatisticsTextDocumentStatistics</a>

---


### DataAwsKendraIndexServerSideEncryptionConfigurationList <a name="DataAwsKendraIndexServerSideEncryptionConfigurationList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference <a name="DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfiguration">DataAwsKendraIndexServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsKendraIndexServerSideEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfiguration">DataAwsKendraIndexServerSideEncryptionConfiguration</a>

---


### DataAwsKendraIndexUserGroupResolutionConfigurationList <a name="DataAwsKendraIndexUserGroupResolutionConfigurationList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference <a name="DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.userGroupResolutionMode">user_group_resolution_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfiguration">DataAwsKendraIndexUserGroupResolutionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `user_group_resolution_mode`<sup>Required</sup> <a name="user_group_resolution_mode" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.userGroupResolutionMode"></a>

```python
user_group_resolution_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsKendraIndexUserGroupResolutionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfiguration">DataAwsKendraIndexUserGroupResolutionConfiguration</a>

---


### DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList <a name="DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference <a name="DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeField">group_attribute_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeField">user_name_attribute_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_attribute_field`<sup>Required</sup> <a name="group_attribute_field" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeField"></a>

```python
group_attribute_field: str
```

- *Type:* str

---

##### `user_name_attribute_field`<sup>Required</sup> <a name="user_name_attribute_field" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeField"></a>

```python
user_name_attribute_field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

---


### DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList <a name="DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference <a name="DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegex">claim_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeField">group_attribute_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocation">key_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretsManagerArn">secrets_manager_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeField">user_name_attribute_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `claim_regex`<sup>Required</sup> <a name="claim_regex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegex"></a>

```python
claim_regex: str
```

- *Type:* str

---

##### `group_attribute_field`<sup>Required</sup> <a name="group_attribute_field" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeField"></a>

```python
group_attribute_field: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `key_location`<sup>Required</sup> <a name="key_location" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocation"></a>

```python
key_location: str
```

- *Type:* str

---

##### `secrets_manager_arn`<sup>Required</sup> <a name="secrets_manager_arn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretsManagerArn"></a>

```python
secrets_manager_arn: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `user_name_attribute_field`<sup>Required</sup> <a name="user_name_attribute_field" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeField"></a>

```python
user_name_attribute_field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

---


### DataAwsKendraIndexUserTokenConfigurationsList <a name="DataAwsKendraIndexUserTokenConfigurationsList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsKendraIndexUserTokenConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsKendraIndexUserTokenConfigurationsOutputReference <a name="DataAwsKendraIndexUserTokenConfigurationsOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_index

dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfiguration">json_token_type_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList">DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfiguration">jwt_token_type_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList">DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurations">DataAwsKendraIndexUserTokenConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `json_token_type_configuration`<sup>Required</sup> <a name="json_token_type_configuration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfiguration"></a>

```python
json_token_type_configuration: DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList">DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList</a>

---

##### `jwt_token_type_configuration`<sup>Required</sup> <a name="jwt_token_type_configuration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfiguration"></a>

```python
jwt_token_type_configuration: DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList">DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsKendraIndexUserTokenConfigurations
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurations">DataAwsKendraIndexUserTokenConfigurations</a>

---



