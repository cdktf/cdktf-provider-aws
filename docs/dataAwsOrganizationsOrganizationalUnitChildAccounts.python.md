# `dataAwsOrganizationsOrganizationalUnitChildAccounts` Submodule <a name="`dataAwsOrganizationsOrganizationalUnitChildAccounts` Submodule" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOrganizationsOrganizationalUnitChildAccounts <a name="DataAwsOrganizationsOrganizationalUnitChildAccounts" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_child_accounts aws_organizations_organizational_unit_child_accounts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organizational_unit_child_accounts

dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  parent_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.parentId">parent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_child_accounts#parent_id DataAwsOrganizationsOrganizationalUnitChildAccounts#parent_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_child_accounts#id DataAwsOrganizationsOrganizationalUnitChildAccounts#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.parentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_child_accounts#parent_id DataAwsOrganizationsOrganizationalUnitChildAccounts#parent_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_child_accounts#id DataAwsOrganizationsOrganizationalUnitChildAccounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organizational_unit_child_accounts

dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organizational_unit_child_accounts

dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organizational_unit_child_accounts

dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.accounts">accounts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList">DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.parentIdInput">parent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.accounts"></a>

```python
accounts: DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList">DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parent_id_input`<sup>Optional</sup> <a name="parent_id_input" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.parentIdInput"></a>

```python
parent_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts <a name="DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organizational_unit_child_accounts

dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts()
```


### DataAwsOrganizationsOrganizationalUnitChildAccountsConfig <a name="DataAwsOrganizationsOrganizationalUnitChildAccountsConfig" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organizational_unit_child_accounts

dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  parent_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.parentId">parent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_child_accounts#parent_id DataAwsOrganizationsOrganizationalUnitChildAccounts#parent_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_child_accounts#id DataAwsOrganizationsOrganizationalUnitChildAccounts#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_child_accounts#parent_id DataAwsOrganizationsOrganizationalUnitChildAccounts#parent_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_child_accounts#id DataAwsOrganizationsOrganizationalUnitChildAccounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList <a name="DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organizational_unit_child_accounts

dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference <a name="DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organizational_unit_child_accounts

dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts">DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts">DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts</a>

---



