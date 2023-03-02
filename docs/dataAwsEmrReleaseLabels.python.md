# `dataAwsEmrReleaseLabels` Submodule <a name="`dataAwsEmrReleaseLabels` Submodule" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEmrReleaseLabels <a name="DataAwsEmrReleaseLabels" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels aws_emr_release_labels}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_emr_release_labels

dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filters: DataAwsEmrReleaseLabelsFilters = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.filters">filters</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#id DataAwsEmrReleaseLabels#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.filters"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a>

filters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#filters DataAwsEmrReleaseLabels#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#id DataAwsEmrReleaseLabels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filters` <a name="put_filters" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.putFilters"></a>

```python
def put_filters(
  application: str = None,
  prefix: str = None
) -> None
```

###### `application`<sup>Optional</sup> <a name="application" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.putFilters.parameter.application"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#application DataAwsEmrReleaseLabels#application}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.putFilters.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#prefix DataAwsEmrReleaseLabels#prefix}.

---

##### `reset_filters` <a name="reset_filters" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_emr_release_labels

dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_emr_release_labels

dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_emr_release_labels

dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference">DataAwsEmrReleaseLabelsFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.releaseLabels">release_labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.filtersInput">filters_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.filters"></a>

```python
filters: DataAwsEmrReleaseLabelsFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference">DataAwsEmrReleaseLabelsFiltersOutputReference</a>

---

##### `release_labels`<sup>Required</sup> <a name="release_labels" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.releaseLabels"></a>

```python
release_labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.filtersInput"></a>

```python
filters_input: DataAwsEmrReleaseLabelsFilters
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEmrReleaseLabelsConfig <a name="DataAwsEmrReleaseLabelsConfig" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_emr_release_labels

dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filters: DataAwsEmrReleaseLabelsFilters = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#id DataAwsEmrReleaseLabels#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.filters"></a>

```python
filters: DataAwsEmrReleaseLabelsFilters
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a>

filters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#filters DataAwsEmrReleaseLabels#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#id DataAwsEmrReleaseLabels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsEmrReleaseLabelsFilters <a name="DataAwsEmrReleaseLabelsFilters" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_emr_release_labels

dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters(
  application: str = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters.property.application">application</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#application DataAwsEmrReleaseLabels#application}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#prefix DataAwsEmrReleaseLabels#prefix}. |

---

##### `application`<sup>Optional</sup> <a name="application" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters.property.application"></a>

```python
application: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#application DataAwsEmrReleaseLabels#application}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#prefix DataAwsEmrReleaseLabels#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEmrReleaseLabelsFiltersOutputReference <a name="DataAwsEmrReleaseLabelsFiltersOutputReference" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_emr_release_labels

dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resetApplication">reset_application</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_application` <a name="reset_application" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resetApplication"></a>

```python
def reset_application() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.applicationInput">application_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.application">application</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_input`<sup>Optional</sup> <a name="application_input" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.applicationInput"></a>

```python
application_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.application"></a>

```python
application: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEmrReleaseLabelsFilters
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a>

---



