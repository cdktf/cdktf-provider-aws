# `dataAwsSecurityhubStandardsControlAssociations` Submodule <a name="`dataAwsSecurityhubStandardsControlAssociations` Submodule" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSecurityhubStandardsControlAssociations <a name="DataAwsSecurityhubStandardsControlAssociations" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/securityhub_standards_control_associations aws_securityhub_standards_control_associations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_securityhub_standards_control_associations

dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  security_control_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.securityControlId">security_control_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/securityhub_standards_control_associations#security_control_id DataAwsSecurityhubStandardsControlAssociations#security_control_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_control_id`<sup>Required</sup> <a name="security_control_id" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.securityControlId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/securityhub_standards_control_associations#security_control_id DataAwsSecurityhubStandardsControlAssociations#security_control_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsSecurityhubStandardsControlAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_securityhub_standards_control_associations

dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_securityhub_standards_control_associations

dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_securityhub_standards_control_associations

dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_securityhub_standards_control_associations

dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsSecurityhubStandardsControlAssociations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsSecurityhubStandardsControlAssociations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsSecurityhubStandardsControlAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/securityhub_standards_control_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSecurityhubStandardsControlAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.standardsControlAssociations">standards_control_associations</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList">DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.securityControlIdInput">security_control_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.securityControlId">security_control_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `standards_control_associations`<sup>Required</sup> <a name="standards_control_associations" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.standardsControlAssociations"></a>

```python
standards_control_associations: DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList">DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList</a>

---

##### `security_control_id_input`<sup>Optional</sup> <a name="security_control_id_input" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.securityControlIdInput"></a>

```python
security_control_id_input: str
```

- *Type:* str

---

##### `security_control_id`<sup>Required</sup> <a name="security_control_id" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.securityControlId"></a>

```python
security_control_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSecurityhubStandardsControlAssociationsConfig <a name="DataAwsSecurityhubStandardsControlAssociationsConfig" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_securityhub_standards_control_associations

dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  security_control_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.securityControlId">security_control_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/securityhub_standards_control_associations#security_control_id DataAwsSecurityhubStandardsControlAssociations#security_control_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_control_id`<sup>Required</sup> <a name="security_control_id" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.securityControlId"></a>

```python
security_control_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/securityhub_standards_control_associations#security_control_id DataAwsSecurityhubStandardsControlAssociations#security_control_id}.

---

### DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations <a name="DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_securityhub_standards_control_associations

dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList <a name="DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_securityhub_standards_control_associations

dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference <a name="DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_securityhub_standards_control_associations

dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.associationStatus">association_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.relatedRequirements">related_requirements</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.securityControlArn">security_control_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.securityControlId">security_control_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsArn">standards_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsControlDescription">standards_control_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsControlTitle">standards_control_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.updatedReason">updated_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations">DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `association_status`<sup>Required</sup> <a name="association_status" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.associationStatus"></a>

```python
association_status: str
```

- *Type:* str

---

##### `related_requirements`<sup>Required</sup> <a name="related_requirements" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.relatedRequirements"></a>

```python
related_requirements: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_control_arn`<sup>Required</sup> <a name="security_control_arn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.securityControlArn"></a>

```python
security_control_arn: str
```

- *Type:* str

---

##### `security_control_id`<sup>Required</sup> <a name="security_control_id" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.securityControlId"></a>

```python
security_control_id: str
```

- *Type:* str

---

##### `standards_arn`<sup>Required</sup> <a name="standards_arn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsArn"></a>

```python
standards_arn: str
```

- *Type:* str

---

##### `standards_control_description`<sup>Required</sup> <a name="standards_control_description" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsControlDescription"></a>

```python
standards_control_description: str
```

- *Type:* str

---

##### `standards_control_title`<sup>Required</sup> <a name="standards_control_title" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsControlTitle"></a>

```python
standards_control_title: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `updated_reason`<sup>Required</sup> <a name="updated_reason" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.updatedReason"></a>

```python
updated_reason: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations">DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations</a>

---



