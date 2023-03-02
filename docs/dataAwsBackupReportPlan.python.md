# `dataAwsBackupReportPlan` Submodule <a name="`dataAwsBackupReportPlan` Submodule" id="@cdktf/provider-aws.dataAwsBackupReportPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBackupReportPlan <a name="DataAwsBackupReportPlan" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan aws_backup_report_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_backup_report_plan

dataAwsBackupReportPlan.DataAwsBackupReportPlan(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan#name DataAwsBackupReportPlan#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan#id DataAwsBackupReportPlan#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan#tags DataAwsBackupReportPlan#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan#name DataAwsBackupReportPlan#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan#id DataAwsBackupReportPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan#tags DataAwsBackupReportPlan#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_backup_report_plan

dataAwsBackupReportPlan.DataAwsBackupReportPlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_backup_report_plan

dataAwsBackupReportPlan.DataAwsBackupReportPlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_backup_report_plan

dataAwsBackupReportPlan.DataAwsBackupReportPlan.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.deploymentStatus">deployment_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.reportDeliveryChannel">report_delivery_channel</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList">DataAwsBackupReportPlanReportDeliveryChannelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.reportSetting">report_setting</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList">DataAwsBackupReportPlanReportSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `deployment_status`<sup>Required</sup> <a name="deployment_status" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.deploymentStatus"></a>

```python
deployment_status: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `report_delivery_channel`<sup>Required</sup> <a name="report_delivery_channel" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.reportDeliveryChannel"></a>

```python
report_delivery_channel: DataAwsBackupReportPlanReportDeliveryChannelList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList">DataAwsBackupReportPlanReportDeliveryChannelList</a>

---

##### `report_setting`<sup>Required</sup> <a name="report_setting" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.reportSetting"></a>

```python
report_setting: DataAwsBackupReportPlanReportSettingList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList">DataAwsBackupReportPlanReportSettingList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBackupReportPlanConfig <a name="DataAwsBackupReportPlanConfig" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_backup_report_plan

dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan#name DataAwsBackupReportPlan#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan#id DataAwsBackupReportPlan#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan#tags DataAwsBackupReportPlan#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan#name DataAwsBackupReportPlan#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan#id DataAwsBackupReportPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan#tags DataAwsBackupReportPlan#tags}.

---

### DataAwsBackupReportPlanReportDeliveryChannel <a name="DataAwsBackupReportPlanReportDeliveryChannel" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannel.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_backup_report_plan

dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannel()
```


### DataAwsBackupReportPlanReportSetting <a name="DataAwsBackupReportPlanReportSetting" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSetting.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_backup_report_plan

dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSetting()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsBackupReportPlanReportDeliveryChannelList <a name="DataAwsBackupReportPlanReportDeliveryChannelList" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_backup_report_plan

dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsBackupReportPlanReportDeliveryChannelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsBackupReportPlanReportDeliveryChannelOutputReference <a name="DataAwsBackupReportPlanReportDeliveryChannelOutputReference" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_backup_report_plan

dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.formats">formats</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannel">DataAwsBackupReportPlanReportDeliveryChannel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `formats`<sup>Required</sup> <a name="formats" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.formats"></a>

```python
formats: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `s3_key_prefix`<sup>Required</sup> <a name="s3_key_prefix" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsBackupReportPlanReportDeliveryChannel
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannel">DataAwsBackupReportPlanReportDeliveryChannel</a>

---


### DataAwsBackupReportPlanReportSettingList <a name="DataAwsBackupReportPlanReportSettingList" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_backup_report_plan

dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsBackupReportPlanReportSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsBackupReportPlanReportSettingOutputReference <a name="DataAwsBackupReportPlanReportSettingOutputReference" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_backup_report_plan

dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.frameworkArns">framework_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.numberOfFrameworks">number_of_frameworks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.reportTemplate">report_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSetting">DataAwsBackupReportPlanReportSetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `framework_arns`<sup>Required</sup> <a name="framework_arns" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.frameworkArns"></a>

```python
framework_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `number_of_frameworks`<sup>Required</sup> <a name="number_of_frameworks" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.numberOfFrameworks"></a>

```python
number_of_frameworks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `report_template`<sup>Required</sup> <a name="report_template" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.reportTemplate"></a>

```python
report_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsBackupReportPlanReportSetting
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSetting">DataAwsBackupReportPlanReportSetting</a>

---



