# `dataAwsRedshiftserverlessWorkgroup` Submodule <a name="`dataAwsRedshiftserverlessWorkgroup` Submodule" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRedshiftserverlessWorkgroup <a name="DataAwsRedshiftserverlessWorkgroup" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/redshiftserverless_workgroup aws_redshiftserverless_workgroup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshiftserverless_workgroup

dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workgroup_name: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.workgroupName">workgroup_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/redshiftserverless_workgroup#workgroup_name DataAwsRedshiftserverlessWorkgroup#workgroup_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/redshiftserverless_workgroup#id DataAwsRedshiftserverlessWorkgroup#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workgroup_name`<sup>Required</sup> <a name="workgroup_name" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.workgroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/redshiftserverless_workgroup#workgroup_name DataAwsRedshiftserverlessWorkgroup#workgroup_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/redshiftserverless_workgroup#id DataAwsRedshiftserverlessWorkgroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsRedshiftserverlessWorkgroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshiftserverless_workgroup

dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshiftserverless_workgroup

dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshiftserverless_workgroup

dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshiftserverless_workgroup

dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsRedshiftserverlessWorkgroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsRedshiftserverlessWorkgroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsRedshiftserverlessWorkgroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/redshiftserverless_workgroup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsRedshiftserverlessWorkgroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList">DataAwsRedshiftserverlessWorkgroupEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.enhancedVpcRouting">enhanced_vpc_routing</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.namespaceName">namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.publiclyAccessible">publicly_accessible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupId">workgroup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupNameInput">workgroup_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupName">workgroup_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.endpoint"></a>

```python
endpoint: DataAwsRedshiftserverlessWorkgroupEndpointList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList">DataAwsRedshiftserverlessWorkgroupEndpointList</a>

---

##### `enhanced_vpc_routing`<sup>Required</sup> <a name="enhanced_vpc_routing" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.enhancedVpcRouting"></a>

```python
enhanced_vpc_routing: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

---

##### `publicly_accessible`<sup>Required</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.publiclyAccessible"></a>

```python
publicly_accessible: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `workgroup_id`<sup>Required</sup> <a name="workgroup_id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupId"></a>

```python
workgroup_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `workgroup_name_input`<sup>Optional</sup> <a name="workgroup_name_input" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupNameInput"></a>

```python
workgroup_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `workgroup_name`<sup>Required</sup> <a name="workgroup_name" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupName"></a>

```python
workgroup_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRedshiftserverlessWorkgroupConfig <a name="DataAwsRedshiftserverlessWorkgroupConfig" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshiftserverless_workgroup

dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workgroup_name: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.workgroupName">workgroup_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/redshiftserverless_workgroup#workgroup_name DataAwsRedshiftserverlessWorkgroup#workgroup_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/redshiftserverless_workgroup#id DataAwsRedshiftserverlessWorkgroup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workgroup_name`<sup>Required</sup> <a name="workgroup_name" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.workgroupName"></a>

```python
workgroup_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/redshiftserverless_workgroup#workgroup_name DataAwsRedshiftserverlessWorkgroup#workgroup_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/redshiftserverless_workgroup#id DataAwsRedshiftserverlessWorkgroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsRedshiftserverlessWorkgroupEndpoint <a name="DataAwsRedshiftserverlessWorkgroupEndpoint" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshiftserverless_workgroup

dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpoint()
```


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshiftserverless_workgroup

dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint()
```


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshiftserverless_workgroup

dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRedshiftserverlessWorkgroupEndpointList <a name="DataAwsRedshiftserverlessWorkgroupEndpointList" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshiftserverless_workgroup

dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsRedshiftserverlessWorkgroupEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsRedshiftserverlessWorkgroupEndpointOutputReference <a name="DataAwsRedshiftserverlessWorkgroupEndpointOutputReference" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshiftserverless_workgroup

dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.vpcEndpoint">vpc_endpoint</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpoint">DataAwsRedshiftserverlessWorkgroupEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vpc_endpoint`<sup>Required</sup> <a name="vpc_endpoint" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.vpcEndpoint"></a>

```python
vpc_endpoint: DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsRedshiftserverlessWorkgroupEndpoint
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpoint">DataAwsRedshiftserverlessWorkgroupEndpoint</a>

---


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshiftserverless_workgroup

dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshiftserverless_workgroup

dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshiftserverless_workgroup

dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface</a>

---


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshiftserverless_workgroup

dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.networkInterface">network_interface</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.networkInterface"></a>

```python
network_interface: DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList</a>

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint</a>

---



