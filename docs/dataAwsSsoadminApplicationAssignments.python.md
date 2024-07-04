# `dataAwsSsoadminApplicationAssignments` Submodule <a name="`dataAwsSsoadminApplicationAssignments` Submodule" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsoadminApplicationAssignments <a name="DataAwsSsoadminApplicationAssignments" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/ssoadmin_application_assignments aws_ssoadmin_application_assignments}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_application_assignments

dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_arn: str,
  application_assignments: typing.Union[IResolvable, typing.List[DataAwsSsoadminApplicationAssignmentsApplicationAssignments]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.applicationArn">application_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/ssoadmin_application_assignments#application_arn DataAwsSsoadminApplicationAssignments#application_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.applicationAssignments">application_assignments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments">DataAwsSsoadminApplicationAssignmentsApplicationAssignments</a>]]</code> | application_assignments block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.applicationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/ssoadmin_application_assignments#application_arn DataAwsSsoadminApplicationAssignments#application_arn}.

---

##### `application_assignments`<sup>Optional</sup> <a name="application_assignments" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.Initializer.parameter.applicationAssignments"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments">DataAwsSsoadminApplicationAssignmentsApplicationAssignments</a>]]

application_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/ssoadmin_application_assignments#application_assignments DataAwsSsoadminApplicationAssignments#application_assignments}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.putApplicationAssignments">put_application_assignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.resetApplicationAssignments">reset_application_assignments</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_application_assignments` <a name="put_application_assignments" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.putApplicationAssignments"></a>

```python
def put_application_assignments(
  value: typing.Union[IResolvable, typing.List[DataAwsSsoadminApplicationAssignmentsApplicationAssignments]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.putApplicationAssignments.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments">DataAwsSsoadminApplicationAssignmentsApplicationAssignments</a>]]

---

##### `reset_application_assignments` <a name="reset_application_assignments" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.resetApplicationAssignments"></a>

```python
def reset_application_assignments() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsSsoadminApplicationAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_application_assignments

dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_application_assignments

dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_application_assignments

dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_application_assignments

dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsSsoadminApplicationAssignments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsSsoadminApplicationAssignments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsSsoadminApplicationAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/ssoadmin_application_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSsoadminApplicationAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.applicationAssignments">application_assignments</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList">DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.applicationArnInput">application_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.applicationAssignmentsInput">application_assignments_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments">DataAwsSsoadminApplicationAssignmentsApplicationAssignments</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.applicationArn">application_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `application_assignments`<sup>Required</sup> <a name="application_assignments" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.applicationAssignments"></a>

```python
application_assignments: DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList">DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `application_arn_input`<sup>Optional</sup> <a name="application_arn_input" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.applicationArnInput"></a>

```python
application_arn_input: str
```

- *Type:* str

---

##### `application_assignments_input`<sup>Optional</sup> <a name="application_assignments_input" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.applicationAssignmentsInput"></a>

```python
application_assignments_input: typing.Union[IResolvable, typing.List[DataAwsSsoadminApplicationAssignmentsApplicationAssignments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments">DataAwsSsoadminApplicationAssignmentsApplicationAssignments</a>]]

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.applicationArn"></a>

```python
application_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsoadminApplicationAssignmentsApplicationAssignments <a name="DataAwsSsoadminApplicationAssignmentsApplicationAssignments" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_application_assignments

dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments()
```


### DataAwsSsoadminApplicationAssignmentsConfig <a name="DataAwsSsoadminApplicationAssignmentsConfig" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_application_assignments

dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_arn: str,
  application_assignments: typing.Union[IResolvable, typing.List[DataAwsSsoadminApplicationAssignmentsApplicationAssignments]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.applicationArn">application_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/ssoadmin_application_assignments#application_arn DataAwsSsoadminApplicationAssignments#application_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.applicationAssignments">application_assignments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments">DataAwsSsoadminApplicationAssignmentsApplicationAssignments</a>]]</code> | application_assignments block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.applicationArn"></a>

```python
application_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/ssoadmin_application_assignments#application_arn DataAwsSsoadminApplicationAssignments#application_arn}.

---

##### `application_assignments`<sup>Optional</sup> <a name="application_assignments" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsConfig.property.applicationAssignments"></a>

```python
application_assignments: typing.Union[IResolvable, typing.List[DataAwsSsoadminApplicationAssignmentsApplicationAssignments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments">DataAwsSsoadminApplicationAssignmentsApplicationAssignments</a>]]

application_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/ssoadmin_application_assignments#application_assignments DataAwsSsoadminApplicationAssignments#application_assignments}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList <a name="DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_application_assignments

dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments">DataAwsSsoadminApplicationAssignmentsApplicationAssignments</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsSsoadminApplicationAssignmentsApplicationAssignments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments">DataAwsSsoadminApplicationAssignmentsApplicationAssignments</a>]]

---


### DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference <a name="DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssoadmin_application_assignments

dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.applicationArn">application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments">DataAwsSsoadminApplicationAssignmentsApplicationAssignments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.applicationArn"></a>

```python
application_arn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsSsoadminApplicationAssignmentsApplicationAssignments]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationAssignments.DataAwsSsoadminApplicationAssignmentsApplicationAssignments">DataAwsSsoadminApplicationAssignmentsApplicationAssignments</a>]

---



